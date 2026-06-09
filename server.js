# Deploying The HCT AI Prototype

This prototype can run in two modes:

- `Backend mock`: deterministic project-aware assistant, no paid API key required.
- `Gemini + tools`: Gemini response generation plus the prototype's rule checks, visual annotations, source tracing, and self-check metadata.

## Local Run

From this folder:

```powershell
npm run dev
```

Open:

```text
http://localhost:4177
```

## Local Gemini Setup

Create a local environment file or set variables in the terminal:

```powershell
$env:GEMINI_API_KEY="your_google_ai_studio_key"
$env:GEMINI_MODEL="gemini-3.5-flash"
npm run dev
```

Do not commit real API keys. `.env.example` shows the expected variable names.

## Vercel Setup

This app includes Vercel serverless API routes in `api/` and a `vercel.json`, so the same frontend can run on Vercel without the local `server.js`.

Typical deployment flow:

```powershell
cd "C:\Users\Emm3ry\OneDrive\Documents\New project\hct-ai-prototype"
vercel link
vercel env add GEMINI_API_KEY production
vercel env add GEMINI_API_KEY preview
vercel env add GEMINI_MODEL production
vercel env add GEMINI_MODEL preview
vercel --prod
```

Recommended values:

```text
GEMINI_MODEL=gemini-3.5-flash
HCT_FORCE_MOCK=0
```

If you want the hosted site to stay free of model calls while testing, set:

```text
HCT_FORCE_MOCK=1
```

## Current Deployment Blocker

The Vercel CLI is installed, but this machine is not logged in. When the CLI tried to start login, it failed with a local header-format error:

```text
No existing credentials found. Starting login flow...
Error: ... is not a legal HTTP header value
```

The app itself is ready for Vercel, but deployment needs one of these:

- log in through Vercel CLI after the local header issue is fixed
- deploy from the Vercel dashboard by importing the project
- run Vercel CLI with a token stored locally as `VERCEL_TOKEN`

## What Is Real Versus Mocked

Real in this prototype:

- section-specific workflow surfaces
- project memory loading
- deterministic rule checks
- source-linked AI responses
- visual design annotations
- source trace behavior for AI claims and visual annotations
- self-check metadata
- local transcript and decision saving
- Gemini API handoff when a key exists
- Vercel-compatible API routes

Mocked until external credentials or SDKs are added:

- ArcGIS layer connection
- Rhino / Grasshopper model sync
- ASHRAE / EnergyPlus simulation
- Lumion render handoff
- material SKU database
- municipal permit database
