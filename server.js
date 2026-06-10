const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const PORT = Number(process.env.PORT || 4177);
const ROOT = __dirname;
const PUBLIC_DIR = path.join(ROOT, "public");
const DATA_PATH = path.join(ROOT, "data", "project-memory.json");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg"
};

function readProject() {
  return JSON.parse(fs.readFileSync(DATA_PATH, "utf8"));
}

function writeProject(project) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(project, null, 2));
}

function sendJson(res, status, payload) {
  const body = JSON.stringify(payload, null, 2);
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body)
  });
  res.end(body);
}

function sendText(res, status, text, type = "text/plain; charset=utf-8") {
  res.writeHead(status, {
    "Content-Type": type,
    "Content-Length": Buffer.byteLength(text)
  });
  res.end(text);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", chunk => {
      body += chunk;
      if (body.length > 2_000_000) {
        req.destroy();
        reject(new Error("Request body too large"));
      }
    });
    req.on("end", () => {
      if (!body) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", reject);
  });
}

function byRuleType(project, ruleType) {
  return project.verifiedRules.find(rule => rule.ruleType === ruleType);
}

function sourceFromRule(rule) {
  return {
    id: rule.id,
    type: "verified_rule",
    title: rule.sourceTitle,
    section: rule.section,
    page: rule.page,
    exactText: rule.exactText,
    verificationStatus: rule.verificationStatus,
    rightClickAction: "Open source rule"
  };
}

function sourceFromClient(project, priorityId) {
  const item = project.clientIntent.priorities.find(priority => priority.id === priorityId);
  return {
    id: priorityId,
    type: "client_intent",
    title: "Client Intent Profile",
    section: item ? item.source : "Client Brief",
    page: null,
    exactText: item ? `${item.label} is weighted ${item.weight}.` : project.clientIntent.summary,
    verificationStatus: "approved_client_input",
    rightClickAction: "Open client brief source"
  };
}

function sourceFromAnalysis(project, key) {
  const result = project.analysisResults[key];
  return {
    id: result.id,
    type: "analysis_result",
    title: result.sourceTitle,
    section: key,
    page: null,
    exactText: result.summary,
    verificationStatus: "computed_or_imported",
    rightClickAction: "Open analysis result"
  };
}

function sourceFromSite(project) {
  return {
    id: project.site.sourceId,
    type: "verified_site_data",
    title: "Verified Site + Survey Dataset",
    section: "Site + Survey Intelligence",
    page: null,
    exactText: `Average slope is ${project.site.averageSlopePercent} percent toward ${project.site.slopeDirection}. ${project.site.soilNote}`,
    verificationStatus: project.site.verificationStatus,
    rightClickAction: "Open survey source data"
  };
}

function sourceFromProcessMap() {
  return {
    id: "astra-process-map",
    type: "app_navigation",
    title: "ASTRA Project Flow Guide",
    section: "Home / Project Flow Guide",
    page: null,
    exactText: "The home page contains the Project Flow Guide, section navigation, current/last-completed status, and the always-visible ASTRA assistant for process questions.",
    verificationStatus: "app_structure",
    rightClickAction: "Open project guide"
  };
}

function annotation(id, type, severity, target, message, rect, sourceIds, lens) {
  return {
    id,
    type,
    severity,
    target,
    message,
    rect,
    sourceIds,
    lens,
    rightClickAction: "Trace annotation source"
  };
}

function selfCheck(items) {
  return items.map(item => ({
    label: item.label,
    status: item.status,
    detail: item.detail
  }));
}

function answerSetback(project) {
  const rule = byRuleType(project, "front_setback");
  const model = project.designModel;
  const deficit = Math.max(0, rule.value - model.frontDistanceFt);
  const sources = [sourceFromRule(rule)];
  const annotations = [
    annotation(
      "anno-front-setback",
      "setback-warning",
      deficit > 0 ? "critical" : "clear",
      "front_building_edge",
      deficit > 0
        ? `Front setback conflict: ${deficit} ft short`
        : "Front setback appears clear",
      { x: 30, y: 74, w: 40, h: 9 },
      [rule.id],
      "code_policy"
    )
  ];

  return {
    mode: "deterministic_orchestrator",
    answer: deficit > 0
      ? `The current building placement appears to violate the verified front setback by ${deficit} ft. The verified rule requires ${rule.value} ft, while the current model distance is ${model.frontDistanceFt} ft. Move the front edge back, reduce the projection, or check whether a variance or exemption applies.`
      : `The current building placement appears to satisfy the verified front setback. The rule requires ${rule.value} ft and the model currently shows ${model.frontDistanceFt} ft.`,
    confidence: deficit > 0 ? "high" : "medium",
    claims: [
      {
        id: "claim-front-setback-rule",
        type: "verified_fact",
        text: `Front setback requirement is ${rule.value} ft.`,
        sourceIds: [rule.id]
      },
      {
        id: "claim-front-distance",
        type: "computed_result",
        text: `Current design distance is ${model.frontDistanceFt} ft from the front property line.`,
        sourceIds: ["model-version-004"]
      }
    ],
    selfCheck: selfCheck([
      { label: "Verified rule exists", status: "pass", detail: `${rule.sourceTitle}, ${rule.section}` },
      { label: "Model measurement exists", status: "pass", detail: `${model.frontDistanceFt} ft current distance` },
      { label: "Computed comparison", status: "pass", detail: `${model.frontDistanceFt} ft vs ${rule.value} ft` },
      { label: "Visual precision", status: "computed", detail: "Annotation is schematic; compliance value comes from structured data." }
    ]),
    annotations,
    sources,
    recommendedNext: ["CAD / Rhino Design Workspace", "Zoning + Policy Intelligence", "Permit / Code Review"]
  };
}

function answerHeight(project) {
  const rule = byRuleType(project, "height_limit");
  const model = project.designModel;
  const excess = Math.max(0, model.heightFt - rule.value);
  const sources = [sourceFromRule(rule)];
  return {
    mode: "deterministic_orchestrator",
    answer: excess > 0
      ? `The current massing appears to exceed the verified height limit by ${excess} ft. The verified limit is ${rule.value} ft and the current model height is ${model.heightFt} ft. This should be treated as a critical zoning review item before continuing.`
      : `The current massing appears to stay within the verified height limit. The verified limit is ${rule.value} ft and the model height is ${model.heightFt} ft.`,
    confidence: "high",
    claims: [
      { id: "claim-height-rule", type: "verified_fact", text: `Height limit is ${rule.value} ft.`, sourceIds: [rule.id] },
      { id: "claim-model-height", type: "computed_result", text: `Current model height is ${model.heightFt} ft.`, sourceIds: ["model-version-004"] }
    ],
    selfCheck: selfCheck([
      { label: "Verified rule exists", status: "pass", detail: `${rule.sourceTitle}, ${rule.section}` },
      { label: "Model height exists", status: "pass", detail: `${model.heightFt} ft` },
      { label: "Computed comparison", status: "pass", detail: `${model.heightFt} ft vs ${rule.value} ft` }
    ]),
    annotations: [
      annotation(
        "anno-height-limit",
        "height-warning",
        excess > 0 ? "critical" : "clear",
        "building_height",
        excess > 0 ? `Height limit exceeded by ${excess} ft` : "Height appears within limit",
        { x: 67, y: 31, w: 8, h: 42 },
        [rule.id],
        "code_policy"
      )
    ],
    sources,
    recommendedNext: ["Zoning + Policy Intelligence", "CAD / Rhino Design Workspace"]
  };
}

function answerGlazing(project, screenshotMode) {
  const model = project.designModel;
  const sources = [
    sourceFromClient(project, "client-goal-daylight"),
    sourceFromAnalysis(project, "sunStudy"),
    sourceFromAnalysis(project, "ashrae")
  ];
  const estimateLabel = screenshotMode
    ? "Screenshot fallback used. Visual balance comments are estimates, not verified measurements."
    : "Structured model value used for glazing percentage.";

  return {
    mode: screenshotMode ? "screenshot_visual_fallback" : "deterministic_orchestrator",
    answer: `The south facade glazing supports the client's high-priority daylight goal, but it also creates a performance tradeoff. The current model shows ${model.southGlazingPercent}% south-facing glazing. The sun study reports strong daylight with medium glare risk, and the ASHRAE result notes a ${project.analysisResults.ashrae.coolingImpactPercent}% cooling-demand increase after glazing expansion. Consider exterior shading, higher-performance glazing, or a more balanced window rhythm rather than simply adding more glass.`,
    confidence: screenshotMode ? "medium" : "high",
    claims: [
      { id: "claim-daylight-client", type: "client_intent", text: "Client prioritizes natural daylight.", sourceIds: ["client-goal-daylight"] },
      { id: "claim-glazing-model", type: screenshotMode ? "visual_estimate" : "computed_result", text: `South glazing is ${model.southGlazingPercent}% in the current model state.`, sourceIds: ["model-version-004"] },
      { id: "claim-cooling-impact", type: "analysis_result", text: `Cooling demand increased by ${project.analysisResults.ashrae.coolingImpactPercent}% after glazing expansion.`, sourceIds: ["ashrae-004"] }
    ],
    selfCheck: selfCheck([
      { label: "Client goal exists", status: "pass", detail: "Daylight is a high-priority client goal." },
      { label: "Sun result exists", status: "pass", detail: project.analysisResults.sunStudy.summary },
      { label: "ASHRAE result exists", status: "pass", detail: project.analysisResults.ashrae.summary },
      { label: "Visual basis", status: screenshotMode ? "visual_estimate" : "computed", detail: estimateLabel }
    ]),
    annotations: [
      annotation(
        "anno-south-glazing",
        "performance-note",
        "high",
        "south_facade_glazing",
        "Daylight benefit with cooling/glare tradeoff",
        { x: 40, y: 53, w: 24, h: 14 },
        ["client-goal-daylight", "sun-004", "ashrae-004"],
        "visual_performance"
      )
    ],
    sources,
    recommendedNext: ["Sun Studies", "ASHRAE / Sustainability Analysis", "Materials / SKU / Procurement"]
  };
}

function answerMaterials(project) {
  const incentive = project.verifiedRules.find(rule => rule.ruleType === "incentive");
  const normalizedSources = [
    sourceFromClient(project, "client-goal-natural-materials"),
    sourceFromAnalysis(project, "ashrae"),
    sourceFromAnalysis(project, "carbon"),
    sourceFromRule(incentive)
  ];

  return {
    mode: "deterministic_orchestrator",
    answer: "A light timber strategy with high-performance glazing and mineral plaster is consistent with the client's natural-material preference and the current performance goals. The carbon comparison favors timber in the demo assumptions, while the ASHRAE result suggests glazing and shading choices need more attention than structure alone. Treat the solar-ready incentive as a needs-review opportunity until the policy reviewer verifies it.",
    confidence: "medium",
    claims: [
      { id: "claim-natural-materials", type: "client_intent", text: "Client prefers natural materials.", sourceIds: ["client-goal-natural-materials"] },
      { id: "claim-carbon-timber", type: "analysis_result", text: "Timber lowers embodied carbon in the demo comparison.", sourceIds: ["carbon-004"] },
      { id: "claim-incentive-unverified", type: "needs_review", text: "Solar-ready incentive is extracted but not verified.", sourceIds: ["rule-solar-incentive"] }
    ],
    selfCheck: selfCheck([
      { label: "Client material preference exists", status: "pass", detail: "Natural material palette is medium priority." },
      { label: "Performance result exists", status: "pass", detail: "ASHRAE V4 result available." },
      { label: "Incentive verification", status: "needs_review", detail: "Solar-ready incentive is not verified." }
    ]),
    annotations: [
      annotation(
        "anno-material-envelope",
        "material-note",
        "medium",
        "building_envelope",
        "Material strategy: timber + high-performance glazing + shading review",
        { x: 36, y: 44, w: 32, h: 29 },
        ["client-goal-natural-materials", "ashrae-004", "carbon-004", "rule-solar-incentive"],
        "material_cost"
      )
    ],
    sources: normalizedSources,
    recommendedNext: ["Materials / SKU / Procurement", "ASHRAE / Sustainability Analysis", "Lumion Visualization"]
  };
}

function answerSite(project) {
  const flood = project.gisLayers.find(layer => layer.id === "gis-flood-001");
  const views = project.gisLayers.find(layer => layer.id === "gis-views-001");
  const sources = [
    sourceFromSite(project),
    {
      id: flood.id,
      type: "gis_layer",
      title: flood.name,
      section: "ArcGIS / Spatial Mapping",
      page: null,
      exactText: flood.finding,
      verificationStatus: "active_layer",
      rightClickAction: "Open GIS layer"
    },
    {
      id: views.id,
      type: "custom_research_layer",
      title: views.name,
      section: "ArcGIS / Spatial Mapping",
      page: null,
      exactText: views.finding,
      verificationStatus: "active_layer",
      rightClickAction: "Open custom research layer"
    }
  ];

  return {
    mode: "deterministic_orchestrator",
    answer: "The site logic suggests keeping heavier or deeper excavation away from the western low point and using the west/southwest direction carefully because it also contains the strongest view corridor. The current 5 ft foundation depth should be reviewed against slope, soil, and drainage before the architect commits to a partly submerged strategy.",
    confidence: "medium",
    claims: [
      { id: "claim-site-slope", type: "verified_site_data", text: `Average slope is ${project.site.averageSlopePercent}% toward ${project.site.slopeDirection}.`, sourceIds: ["survey-001"] },
      { id: "claim-flood-layer", type: "gis_layer", text: flood.finding, sourceIds: ["gis-flood-001"] },
      { id: "claim-view-layer", type: "custom_research_layer", text: views.finding, sourceIds: ["gis-views-001"] }
    ],
    selfCheck: selfCheck([
      { label: "Verified survey data exists", status: "pass", detail: "Survey source data is verified." },
      { label: "GIS flood layer exists", status: "pass", detail: flood.finding },
      { label: "Design implication", status: "ai_interpretation", detail: "Excavation advice needs engineer review before construction decisions." }
    ]),
    annotations: [
      annotation(
        "anno-west-low-point",
        "gis-risk",
        "medium",
        "western_low_point",
        "Stormwater/flood layer intersects low point",
        { x: 18, y: 58, w: 18, h: 20 },
        ["gis-flood-001", "survey-001"],
        "gis_spatial"
      ),
      annotation(
        "anno-view-corridor",
        "opportunity",
        "low",
        "west_view_corridor",
        "Best view corridor, balance with exposure and drainage",
        { x: 16, y: 22, w: 20, h: 22 },
        ["gis-views-001"],
        "gis_spatial"
      )
    ],
    sources,
    recommendedNext: ["ArcGIS / Spatial Mapping", "CAD / Rhino Design Workspace", "Engineering Review"]
  };
}

function payloadSiteSurvey(payload) {
  return payload && typeof payload.siteSurvey === "object" ? payload.siteSurvey : {};
}

function payloadRecords(survey) {
  return [
    ...(survey.sourceFindings || []),
    ...(survey.gisFindings || []),
    ...(survey.evidence || []),
    ...(survey.hazards || []),
    ...(survey.policyLookups || []),
    ...(survey.uploads || [])
  ];
}

function verifiedStatus(status) {
  return ["verified", "active", "source linked", "approved"].includes(String(status || "").toLowerCase());
}

function riskSeverity(item) {
  if (item.severity) return item.severity;
  const status = String(item.status || "").toLowerCase();
  const text = `${item.name || ""} ${item.value || ""}`.toLowerCase();
  if (status.includes("missing") || text.includes("soil") || text.includes("flood")) return "High";
  if (status.includes("needs") || status.includes("pending") || status.includes("conflict")) return "Medium";
  return "Low";
}

function opportunityScore(item, index) {
  const fallback = [95, 90, 85, 82, 80, 76][index % 6];
  const score = Number(item.impact ?? fallback);
  return Number.isFinite(score) ? Math.max(0, Math.min(100, score)) : fallback;
}

function surveySettings(survey) {
  const fields = survey.fields || {};
  const opportunityThreshold = Number(fields.opportunityThreshold);
  return {
    evidenceStrictness: fields.evidenceStrictness || "Balanced",
    riskTolerance: fields.riskTolerance || "Conservative",
    opportunityThreshold: Number.isFinite(opportunityThreshold) ? Math.max(0, Math.min(100, opportunityThreshold)) : 75,
    policyConfidenceRequired: fields.policyConfidenceRequired || "Source linked",
    sustainabilityPriority: fields.sustainabilityPriority || "Balanced performance",
    assistantMode: fields.assistantMode || "Qwen local + deterministic fallback",
    ragDepth: fields.ragDepth || "Evidence pack",
    reasoningSpecialist: fields.reasoningSpecialist || "DeepSeek R1 on complex checks",
    wcagPriority: fields.wcagPriority || "WCAG AA"
  };
}

function surveyRecordName(item) {
  return item.name || item.aspect || item.layerType || item.documentType || item.sourceName || "Unnamed site record";
}

function surveyRecordText(item) {
  return item.value || item.finding || item.result || item.latestReading || item.notes || "";
}

function sourceFromSurveyRecord(item, index) {
  const title = surveyRecordName(item);
  return {
    id: `site-input-${index + 1}`,
    type: item.category || item.documentType || "site_survey_input",
    title,
    section: item.category || item.layerType || item.documentType || "Site Intelligence",
    page: null,
    exactText: surveyRecordText(item) || item.sourceName || title,
    verificationStatus: item.status || "unverified",
    rightClickAction: "Open entered site evidence"
  };
}

function surveySources(survey, limit = 10) {
  return payloadRecords(survey)
    .slice(0, limit)
    .map((item, index) => sourceFromSurveyRecord(item, index));
}

function compactRagContext(project, payload, fallback) {
  const survey = payloadSiteSurvey(payload);
  const settings = surveySettings(survey);
  const records = payloadRecords(survey).map((item, index) => ({
    id: `site-input-${index + 1}`,
    name: surveyRecordName(item),
    type: item.documentType || item.category || item.layerType || "site input",
    status: item.status || "unverified",
    sourceName: item.sourceName || item.owner || item.verifiedBy || "",
    sourceUrl: item.sourceUrl || "",
    value: surveyRecordText(item)
  }));
  return {
    question: payload.question,
    section: payload.section || project.project.currentSection,
    settings,
    clientIntent: project.clientIntent,
    site: project.site,
    verifiedRules: project.verifiedRules,
    designModel: project.designModel,
    analysisResults: project.analysisResults,
    gisLayers: project.gisLayers,
    siteSurveyFields: survey.fields || {},
    siteRecords: records,
    safeFallback: fallback
  };
}

function questionNeedsReasoner(payload) {
  const text = String(payload.question || "").toLowerCase();
  return ["conflict", "tradeoff", "ashrae", "sun", "lumion", "compliance", "policy", "code", "material", "carbon", "sustainability", "which option", "why"].some(term => text.includes(term));
}

function cleanModelText(text) {
  return String(text || "").replace(/<think>[\s\S]*?<\/think>/gi, "").trim();
}

function parseModelJson(text) {
  const cleaned = cleanModelText(text).replace(/^```json\s*|\s*```$/g, "");
  const first = cleaned.indexOf("{");
  const last = cleaned.lastIndexOf("}");
  if (first === -1 || last === -1 || last <= first) return null;
  return JSON.parse(cleaned.slice(first, last + 1));
}

function ollamaBaseUrl() {
  if (process.env.HCT_FORCE_MOCK === "1") return "";
  const raw = process.env.OLLAMA_BASE_URL || (process.env.ASTRA_OLLAMA_ENABLED === "1" ? "http://localhost:11434" : "");
  return raw ? raw.replace(/\/+$/, "") : "";
}

async function maybeUseOllama(project, payload, fallback) {
  const survey = payloadSiteSurvey(payload);
  const settings = surveySettings(survey);
  if (settings.assistantMode === "Deterministic only") return fallback;

  const baseUrl = ollamaBaseUrl();
  if (!baseUrl) return fallback;

  const useReasoner = settings.reasoningSpecialist.includes("DeepSeek") && questionNeedsReasoner(payload);
  const model = useReasoner
    ? process.env.OLLAMA_REASONER_MODEL || "deepseek-r1:8b"
    : process.env.OLLAMA_MODEL || "qwen3:8b";
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), Number(process.env.OLLAMA_TIMEOUT_MS || 18000));

  try {
    const response = await fetch(`${baseUrl}/api/chat`, {
      method: "POST",
      signal: controller.signal,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model,
        stream: false,
        options: { temperature: 0.2, num_ctx: 8192 },
        messages: [
          {
            role: "system",
            content: [
              "You are ASTRA, a grounded architectural site-intelligence agent.",
              "Use retrieval-style reasoning over the provided siteRecords and project context.",
              "All information offered must be based on provided facts, saved project data, visible app structure, or clearly labeled interpretation.",
              "Do not invent zoning, code, measurements, ASHRAE, GIS, or material facts.",
              "Return only valid JSON with keys: answer, confidence, claims, selfCheck, annotations, sources, recommendedNext.",
              "Every factual claim must reference available source ids from siteRecords, verifiedRules, site, designModel, or analysisResults.",
              "If evidence is missing, say what is missing and keep the claim as needs_review.",
              "Give approachable, plain-language guidance that supports WCAG-friendly understanding."
            ].join("\n")
          },
          {
            role: "user",
            content: JSON.stringify(compactRagContext(project, payload, fallback))
          }
        ]
      })
    });

    if (!response.ok) {
      return { ...fallback, mode: "deterministic_orchestrator_ollama_unavailable", ollamaError: `Ollama returned HTTP ${response.status}; deterministic fallback used.` };
    }

    const data = await response.json();
    const text = data.message?.content || data.response || "";
    const parsed = parseModelJson(text);
    if (!parsed) {
      return { ...fallback, mode: "deterministic_orchestrator_ollama_non_json", ollamaError: "Ollama returned non-JSON; deterministic fallback used." };
    }

    return {
      ...fallback,
      ...parsed,
      mode: useReasoner ? "ollama_deepseek_r1_rag_site_agent" : "ollama_qwen_rag_site_agent",
      sources: Array.isArray(parsed.sources) && parsed.sources.length ? parsed.sources : fallback.sources,
      claims: Array.isArray(parsed.claims) ? parsed.claims : fallback.claims,
      selfCheck: Array.isArray(parsed.selfCheck) ? parsed.selfCheck : fallback.selfCheck,
      annotations: Array.isArray(parsed.annotations) ? parsed.annotations : fallback.annotations,
      recommendedNext: Array.isArray(parsed.recommendedNext) ? parsed.recommendedNext : fallback.recommendedNext
    };
  } catch (error) {
    return {
      ...fallback,
      mode: "deterministic_orchestrator_ollama_unavailable",
      ollamaError: error.name === "AbortError" ? "Ollama timed out; deterministic fallback used." : "Ollama is not reachable; deterministic fallback used."
    };
  } finally {
    clearTimeout(timer);
  }
}

function answerAstraSiteAdvisor(project, payload) {
  const survey = payloadSiteSurvey(payload);
  const settings = surveySettings(survey);
  const records = payloadRecords(survey);
  const verified = records.filter(item => verifiedStatus(item.status));
  const needsReview = records.filter(item => String(item.status || "").toLowerCase().includes("review") || String(item.status || "").toLowerCase().includes("pending"));
  const missing = records.filter(item => String(item.status || "").toLowerCase().includes("missing"));
  const highRisks = (survey.hazards || []).filter(item => riskSeverity(item).toLowerCase() === "high");
  const opportunities = (survey.opportunities || []).map((item, index) => ({
    name: item.name || "Site opportunity",
    score: opportunityScore(item, index)
  })).sort((a, b) => b.score - a.score);
  const setback = byRuleType(project, "front_setback");
  const height = byRuleType(project, "height_limit");
  const topOpportunities = opportunities.slice(0, 4).map(item => `${item.name} ${item.score}`).join(", ") || "solar orientation, views, stormwater reuse, passive cooling";
  const aboveThreshold = opportunities.filter(item => item.score >= settings.opportunityThreshold).length;
  const missingNames = missing.slice(0, 4).map(item => item.name || item.aspect || "unnamed record").join(", ") || "geotechnical report, utility capacity, official zoning source, current sensor readings";
  const riskNames = highRisks.slice(0, 4).map(item => item.name).join(", ") || "flooding, soil unknowns, utility conflict";
  const sourceInputs = surveySources(survey, 8);

  return {
    mode: "astra_free_local_site_agent",
    answer: `ASTRA can support early site-based decisions now, but it should label them as feasibility guidance until missing evidence is closed. Verified or active records: ${verified.length}. Records needing review: ${needsReview.length}. Missing records: ${missing.length}. Evidence strictness is ${settings.evidenceStrictness}; risk tolerance is ${settings.riskTolerance}; opportunity threshold is ${settings.opportunityThreshold}. Design can move forward on orientation, early massing zones, risk visibility, sustainability strategy, and accessible explanation. Consultant review should stay open for ${missingNames}. Highest watchlist items: ${riskNames}. Strongest design opportunities are ${topOpportunities}; ${aboveThreshold} are above the active threshold.`,
    confidence: missing.length || needsReview.length ? "medium" : "high",
    claims: [
      { id: "claim-astra-evidence-readiness", type: "project_memory", text: `${verified.length} submitted site evidence records are verified or active.`, sourceIds: ["survey-001"] },
      { id: "claim-astra-missing-evidence", type: "needs_review", text: `Missing or review-needed records should stay out of permit-ready claims: ${missingNames}.`, sourceIds: ["survey-001"] },
      { id: "claim-astra-opportunities", type: "ai_interpretation", text: `Top opportunity scores: ${topOpportunities}.`, sourceIds: ["gis-views-001", "sun-004"] },
      { id: "claim-astra-settings", type: "project_memory", text: `Decision settings: ${settings.evidenceStrictness} evidence, ${settings.riskTolerance} risk, ${settings.sustainabilityPriority} sustainability, ${settings.wcagPriority} accessibility.`, sourceIds: ["survey-001"] },
      { id: "claim-astra-policy-watch", type: "verified_fact", text: "Setback and height rules remain active compliance checks.", sourceIds: [setback.id, height.id] }
    ],
    selfCheck: selfCheck([
      { label: "Free local agent", status: "pass", detail: "Qwen/Ollama can be used when configured; deterministic project memory checks remain available with no API key." },
      { label: "Evidence reviewed", status: "pass", detail: `${records.length} submitted site records were included.` },
      { label: "Missing information", status: missing.length ? "needs_review" : "pass", detail: missing.length ? missingNames : "No submitted records are marked missing." },
      { label: "RAG scope", status: "pass", detail: `${settings.ragDepth} retrieval with ${settings.policyConfidenceRequired} policy confidence target.` },
      { label: "Consultant boundary", status: "pass", detail: "Geotechnical, civil utility capacity, and permit conclusions remain review items." }
    ]),
    annotations: [
      annotation("anno-astra-site-ready", "site-advisor", "medium", "current_design_state", "Design-ready with evidence gaps tracked", { x: 24, y: 26, w: 52, h: 50 }, ["survey-001", setback.id, height.id, "gis-views-001"], "site_advisor")
    ],
    sources: [sourceFromSite(project), sourceFromRule(setback), sourceFromRule(height), sourceFromAnalysis(project, "sunStudy"), ...sourceInputs],
    recommendedNext: ["Upload missing evidence", "Verify policy lookup", "Request consultant review", "Export Site Intelligence Package"]
  };
}

function answerGeneral(project, question, screenshotMode) {
  const sources = [
    sourceFromClient(project, "client-goal-daylight"),
    sourceFromSite(project),
    sourceFromRule(byRuleType(project, "front_setback")),
    sourceFromAnalysis(project, "sunStudy")
  ];
  return {
    mode: screenshotMode ? "screenshot_visual_fallback" : "project_memory_orchestrator",
    answer: `I checked the active project memory against your question. The strongest current issues are the front setback conflict, the height limit conflict, and the south glazing performance tradeoff. If you are asking about a visual design choice, I can annotate the current design canvas as an advisory critique. If you are asking about code, physics, or policy, I will only state a fact when the source or calculation is available.`,
    confidence: screenshotMode ? "medium" : "medium",
    claims: [
      { id: "claim-general-memory", type: "project_memory", text: "Answer is based on active client, site, policy, model, and analysis records.", sourceIds: sources.map(source => source.id) }
    ],
    selfCheck: selfCheck([
      { label: "Project memory loaded", status: "pass", detail: project.project.name },
      { label: "Source availability", status: "pass", detail: "Client, site, policy, and sun sources available." },
      { label: "Question specificity", status: "needs_review", detail: "Ask a more specific design, policy, visual, or performance question for a precise check." }
    ]),
    annotations: [
      annotation(
        "anno-general-attention",
        "attention",
        "medium",
        "current_design_state",
        "Three areas need review: setback, height, glazing",
        { x: 30, y: 35, w: 42, h: 45 },
        sources.map(source => source.id),
        "continuity"
      )
    ],
    sources,
    recommendedNext: ["Zoning + Policy Intelligence", "Sun Studies", "ASHRAE / Sustainability Analysis"]
  };
}

function answerProcessGuidance(project, payload) {
  const processSource = sourceFromProcessMap();
  const section = payload.section || project.project.currentSection || "Project Flow Guide";
  return {
    mode: "fact_backed_process_colleague",
    answer: `Fact-backed navigation: start from the Project Flow Guide on the home page when you are unsure what to do. It is the process map for the application. Use the current section label, last-completed status, critical count, and ASTRA recommendations to decide where to go next. If you are looking for site facts, open Site Intelligence Module. If you are looking for zoning or code logic, open Zoning + Policy Intelligence. If you are judging whether the design looks off, use CAD / Rhino Design Workspace or Lumion Visualization and ask ASTRA for visual critique. Current context: ${section}.`,
    confidence: "high",
    claims: [
      { id: "claim-process-home", type: "app_navigation", text: "The home page is the Project Flow Guide for finding the process.", sourceIds: [processSource.id] },
      { id: "claim-process-ai", type: "app_navigation", text: "The ASTRA assistant is available for process questions, next-step direction, source checks, and design critique.", sourceIds: [processSource.id] },
      { id: "claim-process-boundary", type: "needs_review", text: "Design, zoning, sustainability, and site advice should stay tied to project records or be labeled as interpretation.", sourceIds: [processSource.id, project.site.sourceId] }
    ],
    selfCheck: selfCheck([
      { label: "App structure", status: "pass", detail: "Answer references visible ASTRA navigation and workflow pages." },
      { label: "Fact boundary", status: "pass", detail: "Process guidance is separated from design or code claims." },
      { label: "Current context", status: "pass", detail: section },
      { label: "Next-step support", status: "pass", detail: "User can ask ASTRA where to start from the home page." }
    ]),
    annotations: [
      annotation("anno-process-guide", "process-direction", "low", "current_design_state", "Use the Project Flow Guide when unsure where to start", { x: 24, y: 18, w: 52, h: 18 }, [processSource.id], "process_navigation")
    ],
    sources: [processSource, sourceFromSite(project)],
    recommendedNext: ["Open Project Flow Guide", "Ask ASTRA where to start", "Use Site Intelligence for site facts", "Use CAD / Rhino or Lumion for visual critique"]
  };
}

function answerDesignDirection(project, payload) {
  const setback = byRuleType(project, "front_setback");
  const height = byRuleType(project, "height_limit");
  const sun = sourceFromAnalysis(project, "sunStudy");
  const sources = [
    sourceFromClient(project, "client-goal-daylight"),
    sourceFromSite(project),
    sourceFromRule(setback),
    sourceFromRule(height),
    sun
  ];
  const frontDeficit = Math.max(0, setback.value - project.designModel.frontDistanceFt);
  const heightExcess = Math.max(0, project.designModel.heightFt - height.value);

  return {
    mode: payload.screenshotMode ? "visual_design_colleague" : "design_direction_colleague",
    answer: `ASTRA's design read: the current direction has promise, but a few things should be checked before the team commits. The massing is ${frontDeficit} ft short of the front setback and ${heightExcess} ft over the height limit, so the form may look confident while still carrying approval risk. The south glazing supports daylight, but it also needs shading and heat-gain review. For quality without extra cognitive load, simplify the next move: fix placement/height first, keep the west/southwest view strategy, then review glazing and material warmth against the client goals. Treat visual comments as design advice unless they are backed by a measured source.`,
    confidence: "medium",
    claims: [
      { id: "claim-design-direction-setback", type: "verified_fact", text: `Front setback requires ${setback.value} ft; current model is ${project.designModel.frontDistanceFt} ft from the line.`, sourceIds: [setback.id] },
      { id: "claim-design-direction-height", type: "verified_fact", text: `Height limit is ${height.value} ft; current model is ${project.designModel.heightFt} ft.`, sourceIds: [height.id] },
      { id: "claim-design-direction-daylight", type: "computed_or_imported", text: project.analysisResults.sunStudy.summary, sourceIds: [project.analysisResults.sunStudy.id] },
      { id: "claim-design-direction-quality", type: "ai_interpretation", text: "Prioritize one clear correction path before adding more options, so the workflow stays creative without becoming fragmented.", sourceIds: ["client-goal-daylight", project.site.sourceId] }
    ],
    selfCheck: selfCheck([
      { label: "Design critique boundary", status: "pass", detail: "Visual and composition advice is labeled as interpretation." },
      { label: "Measured constraints", status: "pass", detail: "Setback and height advice uses structured project data." },
      { label: "Source-linked performance", status: "pass", detail: "Daylight and heat-gain advice references the sun study." },
      { label: "Next action clarity", status: "pass", detail: "Direction is staged to reduce cognitive load." }
    ]),
    annotations: [
      annotation("anno-design-direction-front", "design-direction", "critical", "front_building_edge", "Placement looks too close to the front constraint", { x: 30, y: 74, w: 40, h: 9 }, [setback.id], "design_critique"),
      annotation("anno-design-direction-height", "design-direction", "critical", "building_mass", "Height reads ambitious but exceeds verified limit", { x: 42, y: 31, w: 20, h: 34 }, [height.id], "design_critique"),
      annotation("anno-design-direction-glazing", "design-direction", "medium", "south_glazing", "Daylight strategy needs shading and heat-gain balance", { x: 43, y: 51, w: 18, h: 10 }, [project.analysisResults.sunStudy.id], "visual_estimate")
    ],
    sources,
    recommendedNext: ["Adjust massing placement", "Resolve height", "Review shading strategy", "Ask ASTRA to compare design options"]
  };
}

function deterministicAssistant(project, payload) {
  const question = String(payload.question || "").toLowerCase();
  const screenshotMode = Boolean(payload.screenshotMode);
  const sectionContext = String(payload.section || "").toLowerCase();
  const asksHomeNext = question.includes("what should i do next") && sectionContext.includes("project flow");

  if (question.includes("where should i start") || question.includes("where to start") || question.includes("how do i find") || question.includes("find the right process") || question.includes("find process") || question.includes("where is the process") || asksHomeNext || question.includes("home page") || question.includes("project guide")) {
    return answerProcessGuidance(project, payload);
  }
  if (question.includes("look off") || question.includes("looks off") || question.includes("visual critique") || question.includes("design choice") || question.includes("design direction") || question.includes("improve quality") || question.includes("current design")) {
    return answerDesignDirection(project, payload);
  }
  if (question.includes("setback") || question.includes("street") || question.includes("closer")) {
    return answerSetback(project);
  }
  if (question.includes("height") || question.includes("tall")) {
    return answerHeight(project);
  }
  if (question.includes("window") || question.includes("glazing") || question.includes("daylight") || question.includes("light")) {
    return answerGlazing(project, screenshotMode);
  }
  if (question.includes("material") || question.includes("sku") || question.includes("wood") || question.includes("timber") || question.includes("procure")) {
    return answerMaterials(project);
  }
  if (question.includes("verified") || question.includes("missing") || question.includes("consultant") || question.includes("designed today") || question.includes("next action") || question.includes("opportun") || question.includes("permit") || question.includes("delay") || question.includes("cost") || question.includes("sustainability") || question.includes("advisor") || question.includes("package") || question.includes("ashrae") || question.includes("lumion") || question.includes("rag") || question.includes("qwen")) {
    return answerAstraSiteAdvisor(project, payload);
  }
  if (question.includes("site") || question.includes("soil") || question.includes("slope") || question.includes("gis") || question.includes("underground") || question.includes("flood")) {
    return answerSite(project);
  }
  return answerGeneral(project, payload.question, screenshotMode);
}

function compactContext(project, payload) {
  return {
    section: payload.section || project.project.currentSection,
    selectedElement: payload.selectedElement || project.designModel.selectedElement,
    clientIntent: project.clientIntent,
    site: project.site,
    verifiedRules: project.verifiedRules,
    designModel: project.designModel,
    analysisResults: project.analysisResults,
    gisLayers: project.gisLayers,
    siteSurvey: payload.siteSurvey || null
  };
}

async function maybeUseGemini(project, payload, fallback) {
  if (!process.env.GEMINI_API_KEY || process.env.HCT_FORCE_MOCK === "1") {
    return fallback;
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  try {
    const context = compactContext(project, payload);
    const schemaInstruction = [
      "You are the HCT project-aware AI assistor for an architecture prototype.",
      "Return only valid JSON with keys: answer, confidence, claims, selfCheck, annotations, sources, recommendedNext.",
      "Do not invent code, zoning, or measurements. Use only the provided context.",
      "All information offered must be based on provided facts, saved project data, visible app structure, or clearly labeled interpretation.",
      "If a statement is subjective visual advice, label it as ai_interpretation or visual_estimate.",
      "If a statement is factual, connect it to a provided source id.",
      "Keep annotations compatible with this shape: {id,type,severity,target,message,rect:{x,y,w,h},sourceIds,lens,rightClickAction}.",
      "Use the fallback response as a safety baseline and improve wording only when supported."
    ].join("\n");

    const model = process.env.GEMINI_MODEL || "gemini-3.5-flash";
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
      method: "POST",
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": process.env.GEMINI_API_KEY
      },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: schemaInstruction }] },
        contents: [
          {
            role: "user",
            parts: [{
              text: JSON.stringify({
              question: payload.question,
              context,
              fallback
              })
            }]
          }
        ]
      })
    });

    if (!response.ok) {
      return fallback;
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.map(part => part.text || "").join("") || "";
    if (!text) return fallback;
    const parsed = JSON.parse(text.replace(/^```json\s*|\s*```$/g, ""));
    return {
      ...fallback,
      ...parsed,
      mode: "gemini_orchestrated_with_backend_fallback"
    };
  } catch (error) {
    return {
      ...fallback,
      mode: "deterministic_orchestrator_gemini_unavailable",
      geminiError: error.name === "AbortError" ? "Gemini request timed out; fallback used." : "Gemini response unavailable; fallback used."
    };
  } finally {
    clearTimeout(timer);
  }
}

function saveInteraction(project, payload, result) {
  const record = {
    id: `msg-${crypto.randomUUID()}`,
    timestamp: new Date().toISOString(),
    section: payload.section || project.project.currentSection,
    question: payload.question,
    screenshotMode: Boolean(payload.screenshotMode),
    answer: result.answer,
    confidence: result.confidence,
    sourceIds: result.sources.map(source => source.id),
    annotationIds: result.annotations.map(anno => anno.id),
    recommendedNext: result.recommendedNext
  };
  project.aiTranscript.unshift(record);
  project.aiTranscript = project.aiTranscript.slice(0, 30);
  writeProject(project);
  return record;
}

async function handleApi(req, res, pathname) {
  if (req.method === "GET" && pathname === "/api/project") {
    return sendJson(res, 200, readProject());
  }

  if (req.method === "POST" && pathname === "/api/ask") {
    const payload = await readBody(req);
    if (!payload.question || typeof payload.question !== "string") {
      return sendJson(res, 400, { error: "question is required" });
    }
    const project = readProject();
    const fallback = deterministicAssistant(project, payload);
    const ollamaResult = await maybeUseOllama(project, payload, fallback);
    const result = ollamaResult === fallback ? await maybeUseGemini(project, payload, fallback) : ollamaResult;
    const saved = saveInteraction(project, payload, result);
    return sendJson(res, 200, {
      ...result,
      saved
    });
  }

  if (req.method === "POST" && pathname === "/api/decision") {
    const payload = await readBody(req);
    const project = readProject();
    const record = {
      id: `decision-${crypto.randomUUID()}`,
      timestamp: new Date().toISOString(),
      section: payload.section || project.project.currentSection,
      decision: payload.decision || "Architect recorded a decision.",
      reason: payload.reason || "No reason supplied.",
      sourceIds: payload.sourceIds || [],
      annotationIds: payload.annotationIds || []
    };
    project.aiTranscript.unshift(record);
    writeProject(project);
    return sendJson(res, 200, { saved: record });
  }

  return sendJson(res, 404, { error: "API route not found" });
}

function serveStatic(req, res, pathname) {
  const requestedPath = pathname === "/" ? "/index.html" : pathname;
  const safePath = path.normalize(requestedPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(PUBLIC_DIR, safePath);
  if (!filePath.startsWith(PUBLIC_DIR)) {
    return sendText(res, 403, "Forbidden");
  }
  fs.readFile(filePath, (error, data) => {
    if (error) {
      return sendText(res, 404, "Not found");
    }
    const type = MIME[path.extname(filePath)] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": type });
    res.end(data);
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  try {
    if (url.pathname.startsWith("/api/")) {
      return await handleApi(req, res, url.pathname);
    }
    return serveStatic(req, res, url.pathname);
  } catch (error) {
    return sendJson(res, 500, { error: error.message || "Internal server error" });
  }
});

server.listen(PORT, () => {
  console.log(`HCT AI prototype running at http://localhost:${PORT}`);
  if (!process.env.OPENAI_API_KEY) {
    console.log("OPENAI_API_KEY not set. Using deterministic project-aware assistant.");
  }
});
