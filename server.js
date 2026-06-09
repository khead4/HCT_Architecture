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

function deterministicAssistant(project, payload) {
  const question = String(payload.question || "").toLowerCase();
  const screenshotMode = Boolean(payload.screenshotMode);

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
    gisLayers: project.gisLayers
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
    const result = await maybeUseGemini(project, payload, fallback);
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
