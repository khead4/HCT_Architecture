const crypto = require("crypto");

module.exports = function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const payload = req.body || {};
  return res.status(200).json({
    saved: {
      id: `decision-${crypto.randomUUID()}`,
      timestamp: new Date().toISOString(),
      section: payload.section || "Unknown section",
      decision: payload.decision || "Architect recorded a decision.",
      reason: payload.reason || "No reason supplied.",
      sourceIds: payload.sourceIds || [],
      annotationIds: payload.annotationIds || [],
      persistence: "stateless_demo_local_storage_recommended"
    }
  });
};
