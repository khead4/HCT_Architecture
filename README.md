# HCT AI Prototype

This is a lightweight prototype of the HCT project-aware AI assistor.

It demonstrates:

- stable architectural workflow navigation
- project memory
- mock app integrations
- source-linked AI responses
- self-check labels
- visual annotations on a design workspace
- source tracing for AI claims and visual annotations
- transcript / decision archive storage
- optional Gemini API provider when `GEMINI_API_KEY` is available

## Run

```powershell
npm run dev
```

Open:

```text
http://localhost:4177
```

## Gemini Mode

By default, the prototype uses a deterministic local assistant so it works without API keys.

To let the backend call Gemini, set:

```powershell
$env:GEMINI_API_KEY="your_key"
$env:GEMINI_MODEL="gemini-3.5-flash"
node server.js
```

To force local mock mode even when a key exists:

```powershell
$env:HCT_FORCE_MOCK="1"
node server.js
```

## Prototype Boundary

The current integrations are mocked:

- ArcGIS
- Rhino / Grasshopper
- ASHRAE / EnergyPlus
- Lumion
- Material / SKU database
- Permit checklist

The important prototype behavior is the AI orchestration pattern:

```text
question
-> retrieve project memory
-> run deterministic checks
-> return text answer
-> create visual annotation objects
-> attach sources
-> save transcript / decision record
```

This is the technical foundation for adding real integrations later.

## Deploy

See [DEPLOYMENT.md](DEPLOYMENT.md) for Vercel setup, Gemini environment variables, and the current CLI login blocker on this machine.
