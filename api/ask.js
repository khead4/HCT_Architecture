const crypto = require("crypto");
const project = require("../data/project-memory.json");

function send(res, status, payload) {
  res.status(status).json(payload);
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

function sourceFromClient(priorityId) {
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

function sourceFromAnalysis(key) {
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

function sourceFromSite() {
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

function rule(type) {
  return project.verifiedRules.find(item => item.ruleType === type);
}

function selfCheck(items) {
  return items.map(item => ({ label: item[0], status: item[1], detail: item[2] }));
}

function setbackAnswer() {
  const setback = rule("front_setback");
  const model = project.designModel;
  const deficit = Math.max(0, setback.value - model.frontDistanceFt);
  return {
    mode: "deterministic_orchestrator",
    answer: `The current building placement appears to violate the verified front setback by ${deficit} ft. The verified rule requires ${setback.value} ft, while the current model distance is ${model.frontDistanceFt} ft. Move the front edge back, reduce the projection, or check whether a variance or exemption applies.`,
    confidence: "high",
    claims: [
      { id: "claim-front-setback-rule", type: "verified_fact", text: `Front setback requirement is ${setback.value} ft.`, sourceIds: [setback.id] },
      { id: "claim-front-distance", type: "computed_result", text: `Current design distance is ${model.frontDistanceFt} ft from the front property line.`, sourceIds: [model.id] }
    ],
    selfCheck: selfCheck([
      ["Verified rule exists", "pass", `${setback.sourceTitle}, ${setback.section}`],
      ["Model measurement exists", "pass", `${model.frontDistanceFt} ft current distance`],
      ["Computed comparison", "pass", `${model.frontDistanceFt} ft vs ${setback.value} ft`],
      ["Visual precision", "computed", "Annotation is schematic; compliance value comes from structured data."]
    ]),
    annotations: [
      annotation("anno-front-setback", "setback-warning", "critical", "front_building_edge", `Front setback conflict: ${deficit} ft short`, { x: 30, y: 74, w: 40, h: 9 }, [setback.id], "code_policy")
    ],
    sources: [sourceFromRule(setback)],
    recommendedNext: ["CAD / Rhino Design Workspace", "Zoning + Policy Intelligence", "Permit / Code Review"]
  };
}

function heightAnswer() {
  const height = rule("height_limit");
  const model = project.designModel;
  const excess = Math.max(0, model.heightFt - height.value);
  return {
    mode: "deterministic_orchestrator",
    answer: `The current massing appears to exceed the verified height limit by ${excess} ft. The verified limit is ${height.value} ft and the current model height is ${model.heightFt} ft. This should be treated as a critical zoning review item before continuing.`,
    confidence: "high",
    claims: [
      { id: "claim-height-rule", type: "verified_fact", text: `Height limit is ${height.value} ft.`, sourceIds: [height.id] },
      { id: "claim-model-height", type: "computed_result", text: `Current model height is ${model.heightFt} ft.`, sourceIds: [model.id] }
    ],
    selfCheck: selfCheck([
      ["Verified rule exists", "pass", `${height.sourceTitle}, ${height.section}`],
      ["Model height exists", "pass", `${model.heightFt} ft`],
      ["Computed comparison", "pass", `${model.heightFt} ft vs ${height.value} ft`]
    ]),
    annotations: [
      annotation("anno-height-limit", "height-warning", "critical", "building_height", `Height limit exceeded by ${excess} ft`, { x: 67, y: 31, w: 8, h: 42 }, [height.id], "code_policy")
    ],
    sources: [sourceFromRule(height)],
    recommendedNext: ["Zoning + Policy Intelligence", "CAD / Rhino Design Workspace"]
  };
}

function glazingAnswer(screenshotMode) {
  const model = project.designModel;
  return {
    mode: screenshotMode ? "screenshot_visual_fallback" : "deterministic_orchestrator",
    answer: `The south facade glazing supports the client's high-priority daylight goal, but it also creates a performance tradeoff. The current model shows ${model.southGlazingPercent}% south-facing glazing. The sun study reports strong daylight with medium glare risk, and the ASHRAE result notes a ${project.analysisResults.ashrae.coolingImpactPercent}% cooling-demand increase after glazing expansion. Consider exterior shading, higher-performance glazing, or a more balanced window rhythm rather than simply adding more glass.`,
    confidence: screenshotMode ? "medium" : "high",
    claims: [
      { id: "claim-daylight-client", type: "client_intent", text: "Client prioritizes natural daylight.", sourceIds: ["client-goal-daylight"] },
      { id: "claim-glazing-model", type: screenshotMode ? "visual_estimate" : "computed_result", text: `South glazing is ${model.southGlazingPercent}% in the current model state.`, sourceIds: [model.id] },
      { id: "claim-cooling-impact", type: "analysis_result", text: `Cooling demand increased by ${project.analysisResults.ashrae.coolingImpactPercent}% after glazing expansion.`, sourceIds: ["ashrae-004"] }
    ],
    selfCheck: selfCheck([
      ["Client goal exists", "pass", "Daylight is a high-priority client goal."],
      ["Sun result exists", "pass", project.analysisResults.sunStudy.summary],
      ["ASHRAE result exists", "pass", project.analysisResults.ashrae.summary],
      ["Visual basis", screenshotMode ? "visual_estimate" : "computed", screenshotMode ? "Screenshot fallback used. Visual balance comments are estimates, not verified measurements." : "Structured model value used for glazing percentage."]
    ]),
    annotations: [
      annotation("anno-south-glazing", "performance-note", "high", "south_facade_glazing", "Daylight benefit with cooling/glare tradeoff", { x: 40, y: 53, w: 24, h: 14 }, ["client-goal-daylight", "sun-004", "ashrae-004"], "visual_performance")
    ],
    sources: [sourceFromClient("client-goal-daylight"), sourceFromAnalysis("sunStudy"), sourceFromAnalysis("ashrae")],
    recommendedNext: ["Sun Studies", "ASHRAE / Sustainability Analysis", "Materials / SKU / Procurement"]
  };
}

function materialAnswer() {
  const incentive = rule("incentive");
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
      ["Client material preference exists", "pass", "Natural material palette is medium priority."],
      ["Performance result exists", "pass", "ASHRAE V4 result available."],
      ["Incentive verification", "needs_review", "Solar-ready incentive is not verified."]
    ]),
    annotations: [
      annotation("anno-material-envelope", "material-note", "medium", "building_envelope", "Material strategy: timber + high-performance glazing + shading review", { x: 36, y: 44, w: 32, h: 29 }, ["client-goal-natural-materials", "ashrae-004", "carbon-004", "rule-solar-incentive"], "material_cost")
    ],
    sources: [sourceFromClient("client-goal-natural-materials"), sourceFromAnalysis("ashrae"), sourceFromAnalysis("carbon"), sourceFromRule(incentive)],
    recommendedNext: ["Materials / SKU / Procurement", "ASHRAE / Sustainability Analysis", "Lumion Visualization"]
  };
}

function siteAnswer() {
  const flood = project.gisLayers.find(layer => layer.id === "gis-flood-001");
  const views = project.gisLayers.find(layer => layer.id === "gis-views-001");
  const floodSource = { id: flood.id, type: "gis_layer", title: flood.name, section: "ArcGIS / Spatial Mapping", page: null, exactText: flood.finding, verificationStatus: "active_layer", rightClickAction: "Open GIS layer" };
  const viewSource = { id: views.id, type: "custom_research_layer", title: views.name, section: "ArcGIS / Spatial Mapping", page: null, exactText: views.finding, verificationStatus: "active_layer", rightClickAction: "Open custom research layer" };
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
      ["Verified survey data exists", "pass", "Survey source data is verified."],
      ["GIS flood layer exists", "pass", flood.finding],
      ["Design implication", "ai_interpretation", "Excavation advice needs engineer review before construction decisions."]
    ]),
    annotations: [
      annotation("anno-west-low-point", "gis-risk", "medium", "western_low_point", "Stormwater/flood layer intersects low point", { x: 18, y: 58, w: 18, h: 20 }, ["gis-flood-001", "survey-001"], "gis_spatial"),
      annotation("anno-view-corridor", "opportunity", "low", "west_view_corridor", "Best view corridor, balance with exposure and drainage", { x: 16, y: 22, w: 20, h: 22 }, ["gis-views-001"], "gis_spatial")
    ],
    sources: [sourceFromSite(), floodSource, viewSource],
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

function compactRagContext(payload, fallback) {
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
  if (!raw) return "";
  if (process.env.VERCEL && /^(http:\/\/)?(localhost|127\.0\.0\.1)(:|\/|$)/i.test(raw)) return "";
  return raw.replace(/\/+$/, "");
}

async function maybeUseOllama(payload, fallback) {
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
            content: JSON.stringify(compactRagContext(payload, fallback))
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

function astraSiteAdvisorAnswer(payload) {
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
  const setback = rule("front_setback");
  const height = rule("height_limit");
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
      { id: "claim-astra-policy-watch", type: "verified_fact", text: `Setback and height rules remain active compliance checks.`, sourceIds: [setback.id, height.id] }
    ],
    selfCheck: selfCheck([
      ["Free local agent", "pass", "Qwen/Ollama can be used when configured; deterministic project memory checks remain available with no API key."],
      ["Evidence reviewed", "pass", `${records.length} submitted site records were included.`],
      ["Missing information", missing.length ? "needs_review" : "pass", missing.length ? missingNames : "No submitted records are marked missing."],
      ["RAG scope", "pass", `${settings.ragDepth} retrieval with ${settings.policyConfidenceRequired} policy confidence target.`],
      ["Consultant boundary", "pass", "Geotechnical, civil utility capacity, and permit conclusions remain review items."]
    ]),
    annotations: [
      annotation("anno-astra-site-ready", "site-advisor", "medium", "current_design_state", "Design-ready with evidence gaps tracked", { x: 24, y: 26, w: 52, h: 50 }, ["survey-001", setback.id, height.id, "gis-views-001"], "site_advisor")
    ],
    sources: [sourceFromSite(), sourceFromRule(setback), sourceFromRule(height), sourceFromAnalysis("sunStudy"), ...sourceInputs],
    recommendedNext: ["Upload missing evidence", "Verify policy lookup", "Request consultant review", "Export Site Intelligence Package"]
  };
}

function generalAnswer() {
  const setback = rule("front_setback");
  return {
    mode: "project_memory_orchestrator",
    answer: "I checked the active project memory. The strongest current issues are the front setback conflict, height limit conflict, and south glazing performance tradeoff. Ask a more specific design, policy, site, physics, material, or visual question for a precise check.",
    confidence: "medium",
    claims: [
      { id: "claim-general-memory", type: "project_memory", text: "Answer is based on active client, site, policy, model, and analysis records.", sourceIds: ["client-goal-daylight", "survey-001", setback.id, "sun-004"] }
    ],
    selfCheck: selfCheck([
      ["Project memory loaded", "pass", project.project.name],
      ["Source availability", "pass", "Client, site, policy, and sun sources available."],
      ["Question specificity", "needs_review", "Ask a more specific question for a precise check."]
    ]),
    annotations: [
      annotation("anno-general-attention", "attention", "medium", "current_design_state", "Three areas need review: setback, height, glazing", { x: 30, y: 35, w: 42, h: 45 }, ["client-goal-daylight", "survey-001", setback.id, "sun-004"], "continuity")
    ],
    sources: [sourceFromClient("client-goal-daylight"), sourceFromSite(), sourceFromRule(setback), sourceFromAnalysis("sunStudy")],
    recommendedNext: ["Zoning + Policy Intelligence", "Sun Studies", "ASHRAE / Sustainability Analysis"]
  };
}

function processGuidanceAnswer(payload) {
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
      ["App structure", "pass", "Answer references visible ASTRA navigation and workflow pages."],
      ["Fact boundary", "pass", "Process guidance is separated from design or code claims."],
      ["Current context", "pass", section],
      ["Next-step support", "pass", "User can ask ASTRA where to start from the home page."]
    ]),
    annotations: [
      annotation("anno-process-guide", "process-direction", "low", "current_design_state", "Use the Project Flow Guide when unsure where to start", { x: 24, y: 18, w: 52, h: 18 }, [processSource.id], "process_navigation")
    ],
    sources: [processSource, sourceFromSite()],
    recommendedNext: ["Open Project Flow Guide", "Ask ASTRA where to start", "Use Site Intelligence for site facts", "Use CAD / Rhino or Lumion for visual critique"]
  };
}

function designDirectionAnswer(payload) {
  const setback = rule("front_setback");
  const height = rule("height_limit");
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
      ["Design critique boundary", "pass", "Visual and composition advice is labeled as interpretation."],
      ["Measured constraints", "pass", "Setback and height advice uses structured project data."],
      ["Source-linked performance", "pass", "Daylight and heat-gain advice references the sun study."],
      ["Next action clarity", "pass", "Direction is staged to reduce cognitive load."]
    ]),
    annotations: [
      annotation("anno-design-direction-front", "design-direction", "critical", "front_building_edge", "Placement looks too close to the front constraint", { x: 30, y: 74, w: 40, h: 9 }, [setback.id], "design_critique"),
      annotation("anno-design-direction-height", "design-direction", "critical", "building_mass", "Height reads ambitious but exceeds verified limit", { x: 42, y: 31, w: 20, h: 34 }, [height.id], "design_critique"),
      annotation("anno-design-direction-glazing", "design-direction", "medium", "south_glazing", "Daylight strategy needs shading and heat-gain balance", { x: 43, y: 51, w: 18, h: 10 }, [project.analysisResults.sunStudy.id], "visual_estimate")
    ],
    sources: [sourceFromClient("client-goal-daylight"), sourceFromSite(), sourceFromRule(setback), sourceFromRule(height), sourceFromAnalysis("sunStudy")],
    recommendedNext: ["Adjust massing placement", "Resolve height", "Review shading strategy", "Ask ASTRA to compare design options"]
  };
}

function deterministicAssistant(payload) {
  const question = String(payload.question || "").toLowerCase();
  const sectionContext = String(payload.section || "").toLowerCase();
  const asksHomeNext = question.includes("what should i do next") && sectionContext.includes("project flow");
  if (question.includes("where should i start") || question.includes("where to start") || question.includes("how do i find") || question.includes("find the right process") || question.includes("find process") || question.includes("where is the process") || asksHomeNext || question.includes("home page") || question.includes("project guide")) return processGuidanceAnswer(payload);
  if (question.includes("look off") || question.includes("looks off") || question.includes("visual critique") || question.includes("design choice") || question.includes("design direction") || question.includes("improve quality") || question.includes("current design")) return designDirectionAnswer(payload);
  if (question.includes("setback") || question.includes("street") || question.includes("closer")) return setbackAnswer();
  if (question.includes("height") || question.includes("tall")) return heightAnswer();
  if (question.includes("window") || question.includes("glazing") || question.includes("daylight") || question.includes("light")) return glazingAnswer(Boolean(payload.screenshotMode));
  if (question.includes("material") || question.includes("sku") || question.includes("wood") || question.includes("timber") || question.includes("procure")) return materialAnswer();
  if (question.includes("verified") || question.includes("missing") || question.includes("consultant") || question.includes("designed today") || question.includes("next action") || question.includes("opportun") || question.includes("permit") || question.includes("delay") || question.includes("cost") || question.includes("sustainability") || question.includes("advisor") || question.includes("package") || question.includes("ashrae") || question.includes("lumion") || question.includes("rag") || question.includes("qwen")) return astraSiteAdvisorAnswer(payload);
  if (question.includes("site") || question.includes("soil") || question.includes("slope") || question.includes("gis") || question.includes("underground") || question.includes("flood")) return siteAnswer();
  return generalAnswer();
}

async function maybeUseGemini(payload, fallback) {
  if (!process.env.GEMINI_API_KEY || process.env.HCT_FORCE_MOCK === "1") return fallback;

  const model = process.env.GEMINI_MODEL || "gemini-3.5-flash";
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;
  const instruction = [
    "You are the HCT project-aware AI assistor for an architecture prototype.",
    "Return only valid JSON with keys: answer, confidence, claims, selfCheck, annotations, sources, recommendedNext.",
    "Do not invent code, zoning, measurements, or source facts. Use provided context and fallback evidence.",
    "All information offered must be based on provided facts, saved project data, visible app structure, or clearly labeled interpretation.",
    "If a statement is subjective visual advice, label it as ai_interpretation or visual_estimate.",
    "If a statement is factual, connect it to a source id.",
    "Keep annotations compatible with the provided schema."
  ].join("\n");

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": process.env.GEMINI_API_KEY
      },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: instruction }] },
        contents: [{
          role: "user",
          parts: [{
            text: JSON.stringify({
              question: payload.question,
              section: payload.section,
              screenshotMode: Boolean(payload.screenshotMode),
              siteSurvey: payload.siteSurvey || null,
              projectContext: {
                clientIntent: project.clientIntent,
                site: project.site,
                verifiedRules: project.verifiedRules,
                designModel: project.designModel,
                analysisResults: project.analysisResults,
                gisLayers: project.gisLayers
              },
              safeFallback: fallback
            })
          }]
        }]
      })
    });

    if (!response.ok) return fallback;
    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.map(part => part.text || "").join("") || "";
    const parsed = JSON.parse(text.replace(/^```json\s*|\s*```$/g, ""));
    return { ...fallback, ...parsed, mode: "gemini_orchestrated_with_backend_fallback" };
  } catch (error) {
    return { ...fallback, mode: "deterministic_orchestrator_gemini_unavailable", geminiError: "Gemini unavailable or returned non-JSON; fallback used." };
  }
}

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return send(res, 405, { error: "Method not allowed" });

  const payload = req.body || {};
  if (!payload.question || typeof payload.question !== "string") {
    return send(res, 400, { error: "question is required" });
  }

  const fallback = deterministicAssistant(payload);
  const ollamaResult = await maybeUseOllama(payload, fallback);
  const result = ollamaResult === fallback ? await maybeUseGemini(payload, fallback) : ollamaResult;
  return send(res, 200, {
    ...result,
    saved: {
      id: `msg-${crypto.randomUUID()}`,
      timestamp: new Date().toISOString(),
      section: payload.section || project.project.currentSection,
      question: payload.question,
      screenshotMode: Boolean(payload.screenshotMode),
      answer: result.answer,
      confidence: result.confidence,
      sourceIds: (result.sources || []).map(source => source.id),
      annotationIds: (result.annotations || []).map(anno => anno.id),
      recommendedNext: result.recommendedNext || []
    }
  });
};
