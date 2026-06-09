const sections = [
  {
    id: "dashboard",
    title: "Project Flow Guide",
    stage: "All stages",
    desc: "Clickable user flow for entering the correct project workspace.",
    goal: "Choose the phase or page the user needs.",
    actions: ["Read flow state", "Select a phase", "Enter page"],
    ai: ["Recommends the next phase", "Marks active priority", "Stays out of the home screen"]
  },
  {
    id: "clientele",
    title: "Clientele / Project Brief",
    stage: "Project definition",
    desc: "Needs, wants, budget, values, style, experience, and environmental goals.",
    goal: "Turn client language into approved design criteria.",
    actions: ["Capture goals", "Rank priorities", "Resolve contradictions", "Approve brief"],
    ai: ["Summarizes intent", "Flags conflicts", "Links criteria to answers"]
  },
  {
    id: "survey",
    title: "Site + Survey Intelligence",
    stage: "Site understanding",
    desc: "Parcel, boundaries, elevations, utilities, easements, slope, soil, and site facts.",
    goal: "Understand physical site reality before committing to design moves.",
    actions: ["Review survey", "Flag issues", "Annotate constraints", "Verify data"],
    ai: ["Explains site implications", "Highlights risks", "Source-links survey claims"]
  },
  {
    id: "data",
    title: "Data Storage / CSV",
    stage: "Data organization",
    desc: "Clean, validate, export, and reuse structured project data.",
    goal: "Keep project information reusable across GIS, AI, design, and reports.",
    actions: ["Validate fields", "Export CSV", "Review duplicates", "Check verification"],
    ai: ["Detects missing data", "Checks conflicts", "Explains downstream risks"]
  },
  {
    id: "policy",
    title: "Zoning + Policy Intelligence",
    stage: "Regulatory understanding",
    desc: "Rules, codes, incentives, overlays, setbacks, height, FAR, and permit requirements.",
    goal: "Understand what is allowed and where each rule comes from.",
    actions: ["Upload policy", "Extract rules", "Verify rules", "Map design implications"],
    ai: ["Cites sections", "Draws constraints", "Flags ambiguity"]
  },
  {
    id: "gis",
    title: "ArcGIS / Spatial Mapping",
    stage: "Spatial intelligence",
    desc: "GIS layers, custom research layers, site context, risks, and opportunities.",
    goal: "Understand the site as a layered spatial system.",
    actions: ["Toggle layers", "Compare overlays", "Annotate placement", "Publish map findings"],
    ai: ["Interprets overlaps", "Links layers", "Suggests placement reviews"]
  },
  {
    id: "design",
    title: "CAD / Rhino Design Workspace",
    stage: "Concept design",
    desc: "Massing, placement, height, windows, open space, material intent, and design reasoning.",
    goal: "Design with client, site, policy, and performance context visible.",
    actions: ["Edit model", "Review annotations", "Explain reasoning", "Save alternatives"],
    ai: ["Observes changes", "Asks why", "Annotates code and visual impacts"]
  },
  {
    id: "sun",
    title: "Sun Studies",
    stage: "Environmental placement",
    desc: "Sun path, daylight, shadow, glare, heat gain, views, orientation, and shading.",
    goal: "Understand solar consequences of design choices.",
    actions: ["Run study", "Compare options", "Adjust windows", "Save strategy"],
    ai: ["Explains tradeoffs", "Shows heatmaps", "Links to client daylight goals"]
  },
  {
    id: "ashrae",
    title: "ASHRAE / Material Sustainability",
    stage: "Material sustainability",
    desc: "Material sustainability, envelope assumptions, embodied impact, green-energy metrics, and climate performance.",
    goal: "Evaluate whether material and envelope choices support sustainable performance.",
    actions: ["Load assumptions", "Review sustainability metrics", "Compare material impacts", "Revise strategy"],
    ai: ["Explains green metrics", "Marks weak points", "Separates computed facts from advice"]
  },
  {
    id: "lumion",
    title: "Lumion Visualization",
    stage: "Visual communication",
    desc: "Renderings, walkthroughs, atmosphere, material appearance, and client review.",
    goal: "Communicate design experience without losing project reasoning.",
    actions: ["Render options", "Compare visuals", "Collect comments", "Approve direction"],
    ai: ["Adds visual critique", "Links style choices", "Labels screenshot estimates"]
  },
  {
    id: "finalization",
    title: "Finalization / Engineering Handoff",
    stage: "Pre-engineering package",
    desc: "All project information, approved decisions, unresolved risks, and handoff notes before engineering review.",
    goal: "Package the design direction so engineering receives clear evidence and decisions.",
    actions: ["Review decisions", "Check open risks", "Confirm handoff notes", "Export package"],
    ai: ["Summarizes decisions", "Flags unresolved conflicts", "Builds source-linked handoff notes"]
  },
  {
    id: "engineering",
    title: "Engineering Review",
    stage: "Technical coordination",
    desc: "Structural, civil, MEP, sustainability, feasibility, and coordination issues.",
    goal: "Resolve technical feedback while tracking consequences.",
    actions: ["Send model", "Review comments", "Revise design", "Close issues"],
    ai: ["Summarizes feedback", "Pins model issues", "Connects comments to decisions"]
  },
  {
    id: "permit",
    title: "Permit / Code Review",
    stage: "Approval readiness",
    desc: "Permit checklist, code review, zoning status, correction notes, and submission readiness.",
    goal: "Prepare a complete and source-grounded permit package.",
    actions: ["Upload docs", "Check completeness", "Resolve corrections", "Prepare package"],
    ai: ["Cites code", "Marks drawing conflicts", "Organizes missing items"]
  },
  {
    id: "notes",
    title: "Notes / Ideation",
    stage: "Creative reasoning",
    desc: "Sketches, precedents, references, ideas, meeting notes, and design rationale.",
    goal: "Keep design thinking searchable and connected.",
    actions: ["Add notes", "Tag ideas", "Connect to decisions", "Reuse reasoning"],
    ai: ["Clusters ideas", "Finds related decisions", "Turns notes into criteria"]
  },
  {
    id: "archive",
    title: "AI Transcript / Reasoning Archive",
    stage: "All stages",
    desc: "Questions, answers, sources, annotations, decisions, revisions, and outcomes.",
    goal: "Preserve interpretive continuity.",
    actions: ["Search history", "Trace decisions", "Review evidence", "Reuse rationale"],
    ai: ["Answers why", "Builds decision chains", "Applies permissions"]
  },
  {
    id: "case-study",
    title: "Case Study Generator",
    stage: "Narrative output",
    desc: "Client, firm, research, or permit-support narratives built from project evidence.",
    goal: "Explain what was designed, why, and with what evidence.",
    actions: ["Select audience", "Choose evidence", "Generate report", "Export narrative"],
    ai: ["Drafts rationale", "Creates diagrams", "Source-links every claim"]
  }
];

const spaceCategories = [
  { id: "room", label: "Room", types: ["Bedroom", "Bathroom", "Kitchen", "Dining Room", "Living Room", "Office", "Library", "Studio", "Gym", "Media Room", "Custom Room"] },
  { id: "outdoor", label: "Outdoor Space", types: ["Patio", "Garden", "Courtyard", "Green Roof", "Outdoor Kitchen", "Outdoor Classroom", "Custom Outdoor"] },
  { id: "utility", label: "Utility Space", types: ["Laundry Room", "Pantry", "Storage", "Mechanical Room", "Mudroom", "Custom Utility"] },
  { id: "circulation", label: "Circulation Space", types: ["Entry", "Hallway", "Stair", "Corridor", "Elevator Lobby", "Custom Circulation"] },
  { id: "commercial", label: "Commercial Space", types: ["Retail", "Restaurant", "Conference Room", "Classroom", "Laboratory", "Workshop", "Custom Commercial"] },
  { id: "mechanical", label: "Mechanical Space", types: ["Mechanical Room", "Electrical Room", "Utility Yard", "Equipment Room", "Custom Mechanical"] },
  { id: "parking", label: "Parking Space", types: ["Garage", "Carport", "Bike Storage", "Service Bay", "Custom Parking"] },
  { id: "custom", label: "Custom", types: ["Custom Space"] }
];

const utilityOptions = ["Electricity", "Water", "Greywater", "Gas", "HVAC", "Internet", "Smart Controls", "Special Power"];
const featureOptions = ["Walk-in Closet", "Island", "Fireplace", "Reading Nook", "Built-in Shelving", "Balcony", "Skylight", "Soundproofing", "Custom"];
const feelingOptions = ["Calm", "Focused", "Creative", "Social", "Private", "Warm", "Luxurious", "Restorative"];
const styleOptions = ["Scandinavian", "Modern", "Warm Contemporary", "Biophilic", "Industrial", "Traditional", "Minimal", "Custom"];
const materialOptions = ["Wood", "Stone", "Glass", "Steel", "Concrete", "Brick", "Tile", "Plaster", "Textiles", "Plants"];
const designComponentOptions = ["Built-in storage", "Flexible furniture", "Custom millwork", "Acoustic treatment", "Display wall", "Work surface", "Privacy screen", "Indoor plants", "Window seat"];
const electricalOptions = ["General outlets", "Dedicated circuit", "Layered lighting", "Task lighting", "Dimmers", "Low-voltage", "Data ports", "EV ready", "Equipment power"];
const waterOptions = ["Cold water", "Hot water", "Greywater", "Floor drain", "Hose bib", "Irrigation", "Filtered water", "Appliance water"];
const mechanicalOptions = ["Supply air", "Return air", "Exhaust", "Radiant floor", "Operable windows", "Humidity control", "Acoustic isolation", "Special ventilation"];
const accessibilityOptions = ["Standard clearances", "Step-free access", "Wider doorway", "Turning radius", "Blocking for grab bars", "Lever hardware", "Low-threshold shower", "Adjustable work height"];
const referenceFocusOptions = ["Layout", "Lighting", "Materials", "Furniture", "Atmosphere", "Colors", "Views", "Details to avoid"];
const layoutZoneOptions = ["Sleeping zone", "Work zone", "Storage wall", "Wet wall", "Seating zone", "Circulation path", "Outdoor threshold", "Service zone", "Display / pinup wall", "Flexible zone"];
const layoutShapeOptions = ["Rectangular", "L-shaped", "Open plan", "Linear", "Courtyard-facing", "Split zone", "Custom"];
const orientationOptions = ["Morning sun", "Afternoon sun", "Evening sun", "North light", "View-facing", "Privacy-facing", "Site response"];
const infrastructureRequiredOptions = ["Code-required outlets", "Task lighting", "Water supply", "Drainage", "Exhaust", "HVAC supply", "Internet/data", "Dedicated circuit", "Accessibility clearance"];
const infrastructureDesiredOptions = ["Smart controls", "Solar-ready conduit", "Greywater-ready", "Radiant heat", "Extra storage power", "Low-voltage lighting", "Future appliance rough-in", "Acoustic isolation", "EV-ready connection"];
const influenceOptions = ["Scandinavian cabin", "Botanic / biophilic", "Warm minimal", "Industrial studio", "Japanese spa", "Contemporary gallery", "Traditional craft", "Custom precedent"];
const projectTypeOptions = ["Residential", "Commercial", "Mixed Use", "Educational", "Healthcare", "Custom"];
const projectValueOptions = ["Sustainability", "Beauty", "Cost", "Flexibility", "Longevity", "Community", "Privacy", "Wellness", "Innovation", "Accessibility"];
const historicalInspirationOptions = ["Mid-Century", "Nordic Vernacular", "Bauhaus", "Arts & Crafts", "Contemporary", "Custom"];
const atmosphereOptions = ["Warm", "Calm", "Creative", "Playful", "Luxurious", "Natural", "Formal", "Minimal"];
const influentialArchitectOptions = ["BIG", "Snøhetta", "Kengo Kuma", "Olson Kundig", "Aalto", "Custom"];
const zoningTypeOptions = ["Residential", "Commercial", "Mixed Use", "Industrial", "Institutional", "Historic", "Custom"];
const siteConditionOptions = ["Slope", "Views", "Vegetation", "Hydrology", "Wind", "Sun", "Climate", "Noise", "Utilities"];
const projectWaterOptions = ["Municipal", "Well", "Rainwater", "Greywater"];
const energySourceOptions = ["Grid", "Solar", "Wind", "Hydrogen", "Geothermal", "District Energy"];
const wasteSystemOptions = ["Municipal", "Compost", "Septic", "On-site Treatment"];
const sustainabilityGoalOptions = ["Net Zero", "Passive House", "Carbon Neutral", "LEED", "Living Building Challenge"];
const buildingPerformanceOptions = ["Natural Light", "Natural Ventilation", "Thermal Mass", "Earth Berming", "Low Embodied Carbon", "Local Materials"];
const riskRegisterOptions = ["Steep site", "Floodplain", "Limited budget", "Historic district", "Permit complexity", "Unknown soil conditions", "Utility uncertainty", "Neighbor privacy"];
const roomPriorityOptions = ["Critical", "Important", "Optional", "Future Phase"];
const sensitivityOptions = ["Low", "Medium", "High"];
const expansionOptions = ["Likely", "Possible", "None"];
const siteDocumentTypeOptions = [
  "Boundary Survey",
  "Topographic Survey",
  "ALTA / NSPS Survey",
  "Utility Locate",
  "Easement Exhibit",
  "GIS Layer",
  "LiDAR / Elevation",
  "Environmental Report",
  "Soil / Geotechnical",
  "Sensor / IoT Feed",
  "Zoning Policy",
  "Building Code",
  "Field Note",
  "Photo Evidence",
  "Other"
];
const siteVerificationStatusOptions = ["unverified", "needs review", "verified", "conflict", "missing", "active", "pending lookup"];
const sourceConfidenceOptions = ["Low", "Medium", "High", "Verified"];
const sensorTypeOptions = ["Moisture", "Temperature", "Humidity", "Noise", "Air Quality", "Water Level", "Movement", "Solar", "Wind", "Other"];
const policySourceOptions = ["Municipal zoning map", "Parcel database", "Policy PDF", "GIS layer", "Manual reviewer entry", "Other"];

function initialProjectDiscovery() {
  return {
    projectName: "Aalborg HCT Residential Prototype",
    client: "Residential client / research review",
    stakeholders: "Architect, client, planner, engineer, reviewer",
    projectType: "Residential",
    location: "Aalborg, Denmark",
    parcel: "Demo parcel, cold climate zone",
    municipality: "Aalborg Municipality",
    budget: "$800k conceptual target",
    timeline: "Early schematic design",
    why: "Create a daylight-rich, low-energy home that demonstrates how project memory can guide design decisions.",
    longTermVision: "A flexible, warm, low-carbon residence that can adapt over time.",
    goals: "Natural light, healthy material choices, clear site response, and source-grounded feasibility.",
    problems: "Avoid fragmented decisions between site, zoning, design intent, sustainability, and permit readiness.",
    outcomes: "A connected project brief that later supports layout, design review, performance checks, and approvals.",
    values: {
      Sustainability: "High",
      Beauty: "High",
      Cost: "Medium",
      Flexibility: "High",
      Longevity: "High",
      Community: "Medium",
      Privacy: "High",
      Wellness: "High",
      Innovation: "Medium",
      Accessibility: "Medium"
    },
    architecturalStyle: ["Scandinavian", "Biophilic"],
    historicalInspiration: ["Nordic Vernacular", "Contemporary"],
    atmosphere: ["Warm", "Calm", "Natural", "Minimal"],
    influentialArchitects: ["Snøhetta", "Kengo Kuma", "Aalto"],
    admiredBuildings: [
      { name: "Aalto House", architect: "Alvar Aalto", reason: "Warm domestic modernism and human-scaled details" },
      { name: "Snøhetta Cabin", architect: "Snøhetta", reason: "Landscape integration and simple material expression" },
      { name: "Bullitt Center", architect: "Miller Hull", reason: "Performance-driven sustainability precedent" }
    ],
    referenceImages: [],
    referenceLikes: "Materials, daylight, landscape relationship, calm atmosphere, and readable construction logic.",
    referenceAvoid: "Overly generic interiors, cold finishes, unresolved circulation, and decorative sustainability.",
    zoning: ["Residential"],
    siteConditions: ["Slope", "Views", "Vegetation", "Hydrology", "Sun", "Climate", "Utilities"],
    water: ["Municipal", "Rainwater"],
    energy: ["Grid", "Solar", "Geothermal"],
    waste: ["Municipal", "Compost"],
    sustainabilityGoals: ["Net Zero", "Carbon Neutral"],
    performancePriorities: ["Natural Light", "Natural Ventilation", "Low Embodied Carbon", "Local Materials"],
    maxBudget: "$800k conceptual target",
    maxBuildingArea: "3,200 sq ft target maximum",
    targetCompletion: "Schematic package ready for review in 10 weeks",
    heightRestrictions: "Keep massing below local height limits and protect view corridors.",
    requiredSetbacks: "Confirm front, side, and rear setbacks before massing lock.",
    accessibilityRequirements: "Step-free primary entry, flexible clearances, and future aging-in-place options.",
    nonNegotiables: "Daylight, low energy demand, landscape connection, and quiet private sleeping areas.",
    riskRegister: ["Steep site", "Limited budget", "Permit complexity", "Unknown soil conditions"],
    energyUseIntensity: "Target low EUI; benchmark against passive/near-net-zero residential precedent.",
    constructionBudgetTarget: "$800k max conceptual target",
    carbonTarget: "Low embodied carbon with timber-first material strategy.",
    naturalDaylightTarget: "High daylight access in primary living and working spaces.",
    waterReductionTarget: "Rainwater support for landscape and reduced potable water demand.",
    userSatisfactionTarget: "Client can explain why each major design decision supports values and constraints."
  };
}

const spaceProfileDefaults = {
  layoutShape: "Rectangular",
  orientation: "Morning sun",
  entrySequence: "Clear entry with simple circulation",
  layoutZones: ["Circulation path"],
  layoutNotes: "Block out the main zones, entry path, views, storage, and any required clearances.",
  infrastructureRequired: ["Code-required outlets", "HVAC supply"],
  infrastructureDesired: ["Smart controls"],
  style: ["Warm Contemporary"],
  materials: ["Wood", "Glass"],
  influences: ["Warm minimal"],
  styleGuideNotes: "Use reference images to define atmosphere, materials, proportions, and what should be avoided.",
  designComponents: ["Built-in storage"],
  electrical: ["General outlets", "Layered lighting"],
  water: [],
  mechanical: ["Supply air", "Return air"],
  accessibility: ["Standard clearances"],
  referenceFocus: ["Lighting", "Materials", "Atmosphere"],
  roomPriority: "Important",
  costSensitivity: "Medium",
  maintenanceExpectation: "Medium",
  futureExpansion: "Possible",
  importantDesign: "Capture the details that make this space different from a typical room.",
  customComponents: "",
  avoidNotes: "Avoid details that conflict with the desired feeling, maintenance goals, or technical needs.",
  referenceImages: []
};

const spaceTypePresets = {
  Bedroom: {
    name: "Primary Bedroom",
    area: 250,
    purpose: "Sleeping and reading",
    occupancy: "2 adults / daily",
    light: "High",
    privacy: "High",
    noise: "Low",
    ventilation: "Medium",
    utilities: ["Electricity", "Internet", "HVAC"],
    features: ["Walk-in Closet", "Balcony", "Reading Nook"],
    feelings: ["Calm", "Private", "Restorative"],
    layoutShape: "Rectangular",
    orientation: "Morning sun",
    entrySequence: "Entry should not expose the sleeping zone directly",
    layoutZones: ["Sleeping zone", "Storage wall", "Seating zone", "Outdoor threshold", "Circulation path"],
    layoutNotes: "Place the bed away from the door swing, preserve morning light, and create a quiet reading edge near the balcony.",
    infrastructureRequired: ["Code-required outlets", "Task lighting", "HVAC supply", "Internet/data", "Accessibility clearance"],
    infrastructureDesired: ["Smart controls", "Low-voltage lighting", "Acoustic isolation"],
    style: ["Scandinavian", "Biophilic"],
    materials: ["Wood", "Glass", "Textiles", "Plants"],
    influences: ["Scandinavian cabin", "Botanic / biophilic"],
    styleGuideNotes: "Natural, quiet, soft materials with warm wood and uncluttered detailing.",
    designComponents: ["Window seat", "Built-in storage", "Privacy screen"],
    electrical: ["General outlets", "Layered lighting", "Task lighting", "Dimmers"],
    water: [],
    mechanical: ["Supply air", "Return air", "Operable windows"],
    accessibility: ["Standard clearances", "Wider doorway"],
    referenceFocus: ["Lighting", "Materials", "Atmosphere", "Views"],
    importantDesign: "Quiet separation, morning light, a readable connection to nature, and a tucked-in reading moment.",
    avoidNotes: "Avoid hotel-like symmetry, cold surfaces, direct exposure from hallways, and noisy adjacency.",
    future: "Could become a quiet office or guest suite",
    near: "Bathroom, morning light, outdoor view",
    apart: "Entertainment area, mechanical room"
  },
  Kitchen: {
    name: "Kitchen",
    area: 400,
    purpose: "Cooking, gathering, and food storage",
    occupancy: "4-8 people / daily",
    light: "High",
    privacy: "Medium",
    noise: "Medium",
    ventilation: "High",
    utilities: ["Electricity", "Water", "Gas", "HVAC", "Smart Controls"],
    features: ["Island", "Built-in Shelving", "Skylight"],
    feelings: ["Warm", "Social", "Creative"],
    layoutShape: "Open plan",
    orientation: "View-facing",
    entrySequence: "Connect directly to dining and outdoor gathering without crossing the cooking work zone",
    layoutZones: ["Work zone", "Wet wall", "Storage wall", "Seating zone", "Circulation path", "Service zone"],
    layoutNotes: "Separate prep, cooking, cleanup, and social edges while keeping the island central and usable.",
    infrastructureRequired: ["Code-required outlets", "Task lighting", "Water supply", "Drainage", "Exhaust", "Dedicated circuit"],
    infrastructureDesired: ["Smart controls", "Greywater-ready", "Future appliance rough-in", "Low-voltage lighting"],
    style: ["Warm Contemporary", "Biophilic"],
    materials: ["Wood", "Stone", "Tile", "Plants"],
    influences: ["Botanic / biophilic", "Warm minimal"],
    styleGuideNotes: "Warm family gathering space with durable surfaces, visible craft, and natural references.",
    designComponents: ["Custom millwork", "Work surface", "Built-in storage", "Indoor plants"],
    electrical: ["General outlets", "Dedicated circuit", "Layered lighting", "Task lighting", "Dimmers", "Equipment power"],
    water: ["Cold water", "Hot water", "Filtered water", "Appliance water"],
    mechanical: ["Exhaust", "Supply air", "Special ventilation"],
    accessibility: ["Standard clearances", "Adjustable work height"],
    referenceFocus: ["Layout", "Lighting", "Materials", "Furniture", "Details to avoid"],
    importantDesign: "Large island, strong ventilation, durable surfaces, and a social cooking zone that still supports work flow.",
    avoidNotes: "Avoid narrow clearances, weak exhaust, dead corner storage, and visual clutter around appliances.",
    future: "Could support expanded family gathering or catering",
    near: "Dining Room, pantry, outdoor kitchen",
    apart: "Bedrooms, quiet office"
  },
  Office: {
    name: "Home Office",
    area: 160,
    purpose: "Focused work, meetings, and recording",
    occupancy: "1-2 people / daily",
    light: "Medium",
    privacy: "High",
    noise: "Low",
    ventilation: "Medium",
    utilities: ["Electricity", "Internet", "HVAC", "Special Power"],
    features: ["Built-in Shelving", "Soundproofing", "Custom"],
    feelings: ["Focused", "Private", "Calm"],
    layoutShape: "Linear",
    orientation: "North light",
    entrySequence: "Entry should feel professional and not interrupt the recording/work wall",
    layoutZones: ["Work zone", "Display / pinup wall", "Storage wall", "Flexible zone"],
    layoutNotes: "Organize desk, camera background, acoustic panels, and storage as one controlled working environment.",
    infrastructureRequired: ["Code-required outlets", "Task lighting", "Internet/data", "Dedicated circuit"],
    infrastructureDesired: ["Smart controls", "Acoustic isolation", "Low-voltage lighting", "Extra storage power"],
    style: ["Modern", "Minimal"],
    materials: ["Wood", "Glass", "Textiles"],
    influences: ["Contemporary gallery", "Warm minimal"],
    styleGuideNotes: "Quiet professional atmosphere with controlled light, clean storage, and a refined background.",
    designComponents: ["Acoustic treatment", "Work surface", "Display wall", "Built-in storage"],
    electrical: ["General outlets", "Dedicated circuit", "Task lighting", "Dimmers", "Data ports", "Equipment power"],
    water: [],
    mechanical: ["Supply air", "Return air", "Acoustic isolation"],
    accessibility: ["Standard clearances"],
    referenceFocus: ["Layout", "Lighting", "Furniture", "Atmosphere"],
    importantDesign: "Acoustic privacy, camera-friendly background, controlled daylight, and enough power/data for recording.",
    avoidNotes: "Avoid glare behind screens, noisy adjacency, exposed cable clutter, and overly domestic backgrounds.",
    future: "Could become nursery, guest room, or studio",
    near: "Entry, bathroom, daylight",
    apart: "Kitchen, media room, workshop"
  },
  Bathroom: {
    name: "Primary Bathroom",
    area: 110,
    purpose: "Bathing, storage, and daily routines",
    occupancy: "1-2 people / daily",
    light: "Medium",
    privacy: "High",
    noise: "Low",
    ventilation: "High",
    utilities: ["Electricity", "Water", "Greywater", "HVAC"],
    features: ["Skylight", "Custom"],
    feelings: ["Calm", "Restorative", "Luxurious"],
    layoutShape: "Split zone",
    orientation: "Privacy-facing",
    entrySequence: "Entry should screen the wet area and maintain privacy from public circulation",
    layoutZones: ["Wet wall", "Storage wall", "Circulation path", "Service zone"],
    layoutNotes: "Group plumbing efficiently while preserving a spa-like dry/wet sequence and accessible clearances.",
    infrastructureRequired: ["Code-required outlets", "Water supply", "Drainage", "Exhaust", "Accessibility clearance"],
    infrastructureDesired: ["Radiant heat", "Greywater-ready", "Smart controls"],
    style: ["Modern", "Biophilic"],
    materials: ["Stone", "Tile", "Glass", "Wood"],
    influences: ["Japanese spa", "Botanic / biophilic"],
    styleGuideNotes: "Restorative spa atmosphere with durable materials, soft light, and careful privacy.",
    designComponents: ["Custom millwork", "Privacy screen", "Indoor plants"],
    electrical: ["General outlets", "Layered lighting", "Dimmers"],
    water: ["Cold water", "Hot water", "Greywater", "Floor drain"],
    mechanical: ["Exhaust", "Humidity control", "Radiant floor"],
    accessibility: ["Blocking for grab bars", "Low-threshold shower", "Wider doorway"],
    referenceFocus: ["Materials", "Lighting", "Atmosphere", "Details to avoid"],
    importantDesign: "Spa-like calm, privacy, slip-resistant materials, excellent exhaust, and future accessibility.",
    avoidNotes: "Avoid slippery materials, weak ventilation, exposed toilet views, and inaccessible thresholds.",
    future: "Could be adapted for accessibility",
    near: "Bedroom, closet",
    apart: "Public living spaces"
  },
  Patio: {
    name: "Outdoor Patio",
    area: 300,
    purpose: "Outdoor dining, gathering, and landscape connection",
    occupancy: "4-10 people / seasonal",
    light: "High",
    privacy: "Medium",
    noise: "Medium",
    ventilation: "High",
    utilities: ["Electricity", "Water"],
    features: ["Custom"],
    feelings: ["Social", "Warm", "Restorative"],
    layoutShape: "Courtyard-facing",
    orientation: "Evening sun",
    entrySequence: "Should feel like a natural extension from kitchen and living spaces",
    layoutZones: ["Seating zone", "Outdoor threshold", "Flexible zone", "Service zone"],
    layoutNotes: "Build clear dining, lounge, planting, and circulation zones while protecting views and shade.",
    infrastructureRequired: ["Code-required outlets", "Water supply", "Accessibility clearance"],
    infrastructureDesired: ["Low-voltage lighting", "Greywater-ready", "Solar-ready conduit"],
    style: ["Biophilic", "Warm Contemporary"],
    materials: ["Wood", "Stone", "Plants", "Steel"],
    influences: ["Botanic / biophilic", "Traditional craft"],
    styleGuideNotes: "Outdoor room with durable natural materials, planted edges, and warm evening atmosphere.",
    designComponents: ["Flexible furniture", "Privacy screen", "Indoor plants"],
    electrical: ["General outlets", "Layered lighting", "Low-voltage"],
    water: ["Hose bib", "Irrigation"],
    mechanical: ["Operable windows"],
    accessibility: ["Step-free access", "Standard clearances"],
    referenceFocus: ["Layout", "Lighting", "Materials", "Views"],
    importantDesign: "Comfortable outdoor gathering, durable surfaces, shade, planting, and a clear relationship to the kitchen.",
    avoidNotes: "Avoid leftover patio feeling, exposed service views, poor drainage, and unusable harsh sun zones.",
    future: "Could support pergola, outdoor kitchen, or greenhouse",
    near: "Kitchen, living room, view corridor",
    apart: "Service yard"
  }
};

const fallbackSpacePreset = {
  name: "Custom Space",
  area: 180,
  purpose: "Define the primary use",
  occupancy: "1-4 people / varies",
  light: "Medium",
  privacy: "Medium",
  noise: "Medium",
  ventilation: "Medium",
  utilities: ["Electricity", "HVAC"],
  features: ["Custom"],
  feelings: ["Calm", "Focused"],
  ...spaceProfileDefaults,
  future: "Could adapt as project needs change",
  near: "Related spaces",
  apart: "Conflicting uses"
};

function initialProgramSpaces() {
  return [
    { id: "program-primary-bedroom", category: "Room", type: "Bedroom", ...spaceTypePresets.Bedroom },
    { id: "program-kitchen", category: "Room", type: "Kitchen", ...spaceTypePresets.Kitchen },
    { id: "program-office", category: "Room", type: "Office", ...spaceTypePresets.Office },
    { id: "program-patio", category: "Outdoor Space", type: "Patio", ...spaceTypePresets.Patio }
  ];
}

function initialSiteSurvey() {
  return {
    fields: {
      projectName: "Aalborg HCT Residential Prototype",
      parcelAddress: "Demo Parcel, Cold Climate Zone",
      siteSize: "14,520 sq ft",
      ownerClient: "Residential client / research review",
      projectType: "Residential prototype",
      currentLandUse: "Demo residential parcel",
      desiredFutureUse: "Daylight-rich low-energy residence",
      architectNotes: "Preserve landscape connection, daylight, and clear design rationale while tracking site risk and regulatory constraints.",
      surveyorName: "",
      surveyorCompany: "",
      surveyDate: "",
      verifiedBy: "",
      sourceConfidence: "Medium",
      uploadDocumentType: "Topographic Survey",
      uploadOtherDocumentType: "",
      uploadSourceName: "",
      uploadUploadedBy: "",
      uploadVerificationStatus: "unverified",
      benchmarkDatum: "Pending surveyor confirmation",
      minElevation: "",
      maxElevation: "",
      contourInterval: "",
      averageSlope: "8%",
      slopeDirection: "north-east",
      spotElevations: "",
      existingStructures: "None confirmed",
      accessNotes: "Southern frontage",
      easementNotes: "Easements pending confirmation",
      drainageNotes: "Western low point should be reviewed before placement.",
      addressLookup: "Demo Parcel, Cold Climate Zone",
      parcelApn: "",
      jurisdiction: "Aalborg Municipality",
      zoningDistrict: "Residential",
      overlays: "Stormwater flow path, view corridor",
      policySourceUrl: "",
      policyLookupStatus: "pending lookup",
      lastPolicyCheck: ""
    },
    uploads: [],
    environmental: [
      { name: "Sun path", value: "Southwest orientation improves afternoon daylight but increases late-day heat gain risk." },
      { name: "Shadow patterns", value: "Study future massing shadows before committing to outdoor rooms and glazing." },
      { name: "Prevailing wind", value: "Use tree buffer and openings to evaluate ventilation and wind protection." },
      { name: "Noise sources", value: "Map road access and neighboring uses before locating private sleeping areas." },
      { name: "Heat island risk", value: "Balance hardscape, planting, and material choices in the site response." },
      { name: "Water runoff", value: "Western low point intersects a medium-risk stormwater flow path." },
      { name: "Vegetation cover", value: "Northern tree line can provide seasonal wind buffering." },
      { name: "Climate zone", value: "Cold-climate assumptions should inform envelope, glazing, and passive design choices." }
    ],
    utilities: [
      { name: "Water connection", value: "water-east", status: "verified" },
      { name: "Sewer connection", value: "capacity pending", status: "needs review" },
      { name: "Stormwater system", value: "stormwater-west", status: "verified" },
      { name: "Electrical access", value: "power-south", status: "verified" },
      { name: "Gas access", value: "not confirmed", status: "missing" },
      { name: "Internet / fiber", value: "service availability pending", status: "needs review" },
      { name: "Road access", value: "southern frontage", status: "verified" },
      { name: "Fire access", value: "check turning and approach distance", status: "needs review" },
      { name: "Service entry points", value: "coordinate with massing and utility side", status: "decision input" }
    ],
    constraints: [
      { name: "Setbacks", value: "20 ft front / 10 ft side", status: "source linked" },
      { name: "Slope limits", value: "8% average slope toward north-east", status: "verified" },
      { name: "Flood risk", value: "Western low point intersects a medium-risk stormwater flow path.", status: "GIS" },
      { name: "Utility conflicts", value: "water-east, power-south, stormwater-west", status: "field check" },
      { name: "Height", value: "35 ft limit before variance", status: "source linked" },
      { name: "Soil/geotechnical", value: "Moderate bearing capacity. Deeper excavation should be reviewed by civil/structural consultants.", status: "needs engineer" }
    ],
    opportunities: [
      { name: "Building placement", value: "Use the verified slope and stormwater path to avoid placing the primary mass in the low western flow area." },
      { name: "Solar orientation", value: "Southwest orientation supports daylight goals but should be paired with shading and envelope review." },
      { name: "Views to preserve", value: "Best long view is toward the west/southwest edge of the parcel." },
      { name: "Natural ventilation", value: "Tree line and open edges can be studied for seasonal wind buffering and cross-ventilation." },
      { name: "Landscape strategy", value: "Northern tree line can provide seasonal wind buffering." },
      { name: "Stormwater reuse", value: "Rainwater and landscape systems can connect client sustainability goals to hydrology findings." }
    ],
    hazards: [
      { name: "Steep site", value: "Average slope should be verified against spot elevations before foundation assumptions.", documentType: "Topographic Survey", sourceName: "Surveyor field record", status: "needs review", verifiedBy: "", lastChecked: "" },
      { name: "Floodplain / stormwater", value: "Western low point intersects a medium-risk stormwater flow path.", documentType: "GIS Layer", sourceName: "Stormwater overlay", status: "active", verifiedBy: "GIS Analyst", lastChecked: "" },
      { name: "Unknown soil conditions", value: "Geotechnical report needed before excavation or structural assumptions.", documentType: "Soil / Geotechnical", sourceName: "Pending geotech", status: "missing", verifiedBy: "", lastChecked: "" }
    ],
    sensors: [
      { name: "West low-point moisture", sensorType: "Moisture", location: "Western drainage low point", latestReading: "No live feed connected", unit: "", timestamp: "", status: "missing", sourceName: "Sensor / IoT Feed" },
      { name: "Boundary noise reading", sensorType: "Noise", location: "Southern frontage", latestReading: "Pending field reading", unit: "dBA", timestamp: "", status: "needs review", sourceName: "Field sensor" }
    ],
    policyLookups: [
      { name: "Zoning district lookup", address: "Demo Parcel, Cold Climate Zone", jurisdiction: "Aalborg Municipality", result: "Residential district assumed until official source is uploaded or linked.", documentType: "Zoning Policy", sourceName: "Manual reviewer entry", sourceUrl: "", status: "pending lookup", lastChecked: "" },
      { name: "Overlay check", address: "Demo Parcel, Cold Climate Zone", jurisdiction: "Aalborg Municipality", result: "Stormwater and view corridor overlays should be confirmed from GIS/policy source.", documentType: "GIS Layer", sourceName: "GIS overlay", sourceUrl: "", status: "needs review", lastChecked: "" }
    ],
    evidence: [
      { name: "Survey dataset", owner: "Land Surveyor", status: "verified", documentType: "Topographic Survey", otherDocumentType: "", sourceName: "Surveyor upload", verifiedBy: "Land Surveyor", lastChecked: "", value: "Parcel area 14,520 sq ft" },
      { name: "Utility review", owner: "Surveyor / civil", status: "verified", documentType: "Utility Locate", otherDocumentType: "", sourceName: "Utility locate / civil review", verifiedBy: "Surveyor / civil", lastChecked: "", value: "water-east, power-south, stormwater-west" },
      { name: "Flood risk overlay", owner: "GIS Analyst", status: "active", documentType: "GIS Layer", otherDocumentType: "", sourceName: "Stormwater overlay", verifiedBy: "GIS Analyst", lastChecked: "", value: "Western low point intersects a medium-risk stormwater flow path." },
      { name: "Primary view corridor", owner: "GIS Analyst", status: "active", documentType: "GIS Layer", otherDocumentType: "", sourceName: "View corridor layer", verifiedBy: "GIS Analyst", lastChecked: "", value: "Best long view is toward the west/southwest edge of the parcel." },
      { name: "Existing vegetation", owner: "GIS Analyst", status: "active", documentType: "GIS Layer", otherDocumentType: "", sourceName: "Vegetation layer", verifiedBy: "GIS Analyst", lastChecked: "", value: "Northern tree line can provide seasonal wind buffering." }
    ],
    aiInterpretation: [
      { question: "What matters most?", answer: "Slope, stormwater movement, utilities, view corridor, vegetation, and setback/height rules are the major early decision drivers." },
      { question: "What risks should be noticed?", answer: "Front setback, height limit, stormwater flow path, slope-driven foundation cost, and unknown geotechnical assumptions." },
      { question: "What opportunities influence design?", answer: "Landscape integration, daylight orientation, west/southwest views, passive design, and rainwater-supported planting." },
      { question: "What is missing?", answer: "Detailed geotechnical report, final utility capacity, easement confirmation, and surveyor-reviewed drainage documentation." },
      { question: "What can be decided now?", answer: "Initial site response, likely placement zones, information gaps, and which constraints must be protected in concept design." },
      { question: "What should wait?", answer: "Foundation strategy, final grading, exact service entry design, and permit-ready compliance claims." }
    ],
    packageItems: [
      { name: "Site summary", included: true },
      { name: "Survey summary", included: true },
      { name: "GIS summary", included: true },
      { name: "Environmental summary", included: true },
      { name: "Constraints", included: true },
      { name: "Opportunities", included: true },
      { name: "Risks", included: true },
      { name: "Hazards", included: true },
      { name: "Sensor updates", included: true },
      { name: "Policy lookup records", included: true },
      { name: "Source verification log", included: true },
      { name: "Missing information", included: true },
      { name: "Design implications", included: true },
      { name: "Recommended next actions", included: true }
    ]
  };
}

function mergeSitePackageItems(baseItems, savedItems) {
  if (!Array.isArray(savedItems)) return baseItems;
  const savedByName = new Map(savedItems.map(item => [item.name, item]));
  const mergedBase = baseItems.map(item => ({ ...item, ...(savedByName.get(item.name) || {}) }));
  const extraSaved = savedItems.filter(item => !baseItems.some(baseItem => baseItem.name === item.name));
  return [...mergedBase, ...extraSaved];
}

function mergeSiteSurvey(saved) {
  const base = initialSiteSurvey();
  if (!saved || typeof saved !== "object") return base;
  return {
    ...base,
    ...saved,
    fields: { ...base.fields, ...(saved.fields || {}) },
    uploads: Array.isArray(saved.uploads) ? saved.uploads : base.uploads,
    environmental: Array.isArray(saved.environmental) ? saved.environmental : base.environmental,
    utilities: Array.isArray(saved.utilities) ? saved.utilities : base.utilities,
    constraints: Array.isArray(saved.constraints) ? saved.constraints : base.constraints,
    opportunities: Array.isArray(saved.opportunities) ? saved.opportunities : base.opportunities,
    hazards: Array.isArray(saved.hazards) ? saved.hazards : base.hazards,
    sensors: Array.isArray(saved.sensors) ? saved.sensors : base.sensors,
    policyLookups: Array.isArray(saved.policyLookups) ? saved.policyLookups : base.policyLookups,
    evidence: Array.isArray(saved.evidence) ? saved.evidence : base.evidence,
    aiInterpretation: Array.isArray(saved.aiInterpretation) ? saved.aiInterpretation : base.aiInterpretation,
    packageItems: mergeSitePackageItems(base.packageItems, saved.packageItems)
  };
}

function loadSiteSurvey() {
  try {
    if (typeof localStorage === "undefined") return initialSiteSurvey();
    return mergeSiteSurvey(JSON.parse(localStorage.getItem("hct-site-survey") || "null"));
  } catch (error) {
    return initialSiteSurvey();
  }
}

const state = {
  project: null,
  activeSection: "dashboard",
  selectedRole: null,
  journeyOverrides: {},
  programSpaces: initialProgramSpaces(),
  spaceDraft: { category: "room", type: "Bedroom" },
  projectDiscovery: initialProjectDiscovery(),
  siteSurvey: loadSiteSurvey(),
  selectedProgramSpaceId: "program-primary-bedroom",
  authView: null,
  joinType: "freelance",
  lastResponse: null,
  screenshotMode: false
};

const el = {
  sectionNav: document.getElementById("sectionNav"),
  projectName: document.getElementById("projectName"),
  projectMeta: document.getElementById("projectMeta"),
  projectPhase: document.getElementById("projectPhase"),
  currentSection: document.getElementById("currentSection"),
  lastCompleted: document.getElementById("lastCompleted"),
  criticalCount: document.getElementById("criticalCount"),
  memoryCount: document.getElementById("memoryCount"),
  activeSectionTitle: document.getElementById("activeSectionTitle"),
  activeSectionDescription: document.getElementById("activeSectionDescription"),
  sectionBadge: document.getElementById("sectionBadge"),
  sectionDetails: document.getElementById("sectionDetails"),
  integrations: document.getElementById("integrations"),
  workspaceTitle: document.getElementById("workspaceTitle"),
  workspaceDescription: document.getElementById("workspaceDescription"),
  canvasMode: document.getElementById("canvasMode"),
  assistantTitle: document.getElementById("assistantTitle"),
  assistantDescription: document.getElementById("assistantDescription"),
  questionInput: document.getElementById("questionInput"),
  askButton: document.getElementById("askButton"),
  assistantOutput: document.getElementById("assistantOutput"),
  annotationLayer: document.getElementById("annotationLayer"),
  sourceDrawer: document.getElementById("sourceDrawer"),
  sourceTraceBody: document.getElementById("sourceTraceBody"),
  traceIntro: document.getElementById("traceIntro"),
  closeDrawer: document.getElementById("closeDrawer"),
  aiMode: document.getElementById("aiMode"),
  homeButton: document.getElementById("homeButton"),
  loginButton: document.getElementById("loginButton")
};

function persistSiteSurvey() {
  try {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("hct-site-survey", JSON.stringify(state.siteSurvey));
    }
  } catch (error) {
    // Local persistence is a convenience for the prototype; exports still carry the current state.
  }
}

function sectionById(id) {
  return sections.find(section => section.id === id) || sections[0];
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function spaceCategoryById(id) {
  return spaceCategories.find(category => category.id === id) || spaceCategories[0];
}

function listValue(value, fallback = []) {
  return Array.isArray(value) && value.length ? value : fallback;
}

function uniqueList(values) {
  return Array.from(new Set(values.map(value => String(value || "").trim()).filter(Boolean)));
}

function optionMarkup(options, selected) {
  const current = String(selected || "");
  return options.map(option => `<option value="${escapeHtml(option)}" ${option === current ? "selected" : ""}>${escapeHtml(option)}</option>`).join("");
}

function siteFieldInput(key, label, type = "text") {
  return `<label><span>${escapeHtml(label)}</span><input type="${escapeHtml(type)}" data-site-field="${escapeHtml(key)}" value="${escapeHtml(state.siteSurvey.fields[key])}"></label>`;
}

function siteFieldTextarea(key, label, rows = 3) {
  return `<label class="wide-field"><span>${escapeHtml(label)}</span><textarea data-site-field="${escapeHtml(key)}" rows="${rows}">${escapeHtml(state.siteSurvey.fields[key])}</textarea></label>`;
}

function siteFieldSelect(key, label, options) {
  return `
    <label>
      <span>${escapeHtml(label)}</span>
      <select data-site-field="${escapeHtml(key)}">
        ${optionMarkup(options, state.siteSurvey.fields[key])}
      </select>
    </label>
  `;
}

function siteRowInput(group, index, key, value, label, type = "text") {
  return `<label><span>${escapeHtml(label)}</span><input type="${escapeHtml(type)}" data-site-row="${escapeHtml(group)}" data-site-index="${index}" data-site-key="${escapeHtml(key)}" value="${escapeHtml(value)}"></label>`;
}

function siteRowTextarea(group, index, key, value, label, rows = 3) {
  return `<label class="wide-field"><span>${escapeHtml(label)}</span><textarea data-site-row="${escapeHtml(group)}" data-site-index="${index}" data-site-key="${escapeHtml(key)}" rows="${rows}">${escapeHtml(value)}</textarea></label>`;
}

function siteRowSelect(group, index, key, value, label, options) {
  return `
    <label>
      <span>${escapeHtml(label)}</span>
      <select data-site-row="${escapeHtml(group)}" data-site-index="${index}" data-site-key="${escapeHtml(key)}">
        ${optionMarkup(options, value)}
      </select>
    </label>
  `;
}

function siteSourceControls(group, index, item, options = siteDocumentTypeOptions) {
  return `
    <div class="source-meta-grid">
      ${siteRowSelect(group, index, "documentType", item.documentType || options[0], "Document type", options)}
      ${siteRowInput(group, index, "otherDocumentType", item.otherDocumentType || "", "Other document type")}
      ${siteRowInput(group, index, "sourceName", item.sourceName || "", "Source / document name")}
      ${siteRowSelect(group, index, "status", item.status || "unverified", "Verification status", siteVerificationStatusOptions)}
      ${siteRowInput(group, index, "verifiedBy", item.verifiedBy || "", "Verified by")}
      ${siteRowInput(group, index, "lastChecked", item.lastChecked || "", "Last checked", "date")}
    </div>
  `;
}

function sourceStatusText(item) {
  const documentType = item.documentType === "Other" && item.otherDocumentType ? item.otherDocumentType : item.documentType;
  return [documentType, item.sourceName, item.status].filter(Boolean).join(" / ") || "source pending";
}

function siteSurveyAssistantFindings(survey) {
  const fields = survey.fields || {};
  const allEvidence = [
    ...(survey.evidence || []),
    ...(survey.hazards || []),
    ...(survey.policyLookups || []),
    ...(survey.uploads || [])
  ];
  const unverified = allEvidence.filter(item => !["verified", "active"].includes(String(item.status || "").toLowerCase()));
  const missingDocTypes = allEvidence.filter(item => !item.documentType || (item.documentType === "Other" && !item.otherDocumentType));
  const missingSources = allEvidence.filter(item => !item.sourceName && !item.name);
  const missingPolicy = !fields.addressLookup || !fields.jurisdiction || !fields.zoningDistrict || String(fields.policyLookupStatus || "").includes("pending");
  const missingElevation = !fields.benchmarkDatum || !fields.minElevation || !fields.maxElevation || !fields.contourInterval;
  const staleSensors = (survey.sensors || []).filter(sensor => !sensor.timestamp || !["verified", "active"].includes(String(sensor.status || "").toLowerCase()));
  const activeHazards = (survey.hazards || []).filter(hazard => ["active", "needs review", "missing", "conflict"].includes(String(hazard.status || "").toLowerCase()));
  const uploadedEvidence = survey.uploads?.length || 0;

  return [
    {
      level: unverified.length ? "needs review" : "verified",
      title: "Verification coverage",
      detail: unverified.length
        ? `${unverified.length} source record${unverified.length === 1 ? "" : "s"} still need verification or review before the AI should treat them as dependable.`
        : "All visible source records are marked verified or active."
    },
    {
      level: missingDocTypes.length ? "needs review" : "verified",
      title: "Document type coverage",
      detail: missingDocTypes.length
        ? `${missingDocTypes.length} record${missingDocTypes.length === 1 ? "" : "s"} need a document type or an Other description.`
        : "Every evidence record has a document/source type."
    },
    {
      level: uploadedEvidence ? "active" : "missing",
      title: "Uploaded source material",
      detail: uploadedEvidence
        ? `${uploadedEvidence} uploaded file record${uploadedEvidence === 1 ? "" : "s"} are stored in project memory metadata.`
        : "No uploaded source files have been added yet; the page is currently relying on entered records."
    },
    {
      level: missingPolicy ? "needs review" : "verified",
      title: "Address-based zoning lookup",
      detail: missingPolicy
        ? "Address, jurisdiction, zoning district, source URL/document, and lookup status should be confirmed before design compliance claims."
        : "Policy lookup fields are filled and can be exported as a traceable lookup record."
    },
    {
      level: missingElevation ? "needs review" : "verified",
      title: "Elevation and topography",
      detail: missingElevation
        ? "Benchmark datum, min/max elevation, contour interval, and spot elevations should be completed by the surveyor."
        : "Elevation fields are filled enough to support early grading and massing discussion."
    },
    {
      level: staleSensors.length ? "needs review" : "active",
      title: "Sensor / IoT status",
      detail: staleSensors.length
        ? `${staleSensors.length} sensor record${staleSensors.length === 1 ? "" : "s"} need a timestamp, current reading, or active verification status.`
        : "Sensor records have current timestamps and active/verified status."
    },
    {
      level: activeHazards.length ? "attention" : "verified",
      title: "Design risk watchlist",
      detail: activeHazards.length
        ? `${activeHazards.length} hazard${activeHazards.length === 1 ? "" : "s"} should stay visible during design: ${activeHazards.slice(0, 3).map(item => item.name).join(", ")}.`
        : "No active hazards are currently marked for design attention."
    },
    {
      level: missingSources.length ? "needs review" : "active",
      title: "AI readiness",
      detail: missingSources.length
        ? "The assistant can advise, but source names are still incomplete for some records, so every claim should remain reviewable."
        : "The assistant has enough named source records to generate traceable next-step guidance."
    }
  ];
}

function normalizeSpaceProfile(space) {
  return {
    ...spaceProfileDefaults,
    ...space,
    layoutZones: listValue(space.layoutZones, spaceProfileDefaults.layoutZones),
    infrastructureRequired: listValue(space.infrastructureRequired, spaceProfileDefaults.infrastructureRequired),
    infrastructureDesired: listValue(space.infrastructureDesired, spaceProfileDefaults.infrastructureDesired),
    style: listValue(space.style, spaceProfileDefaults.style),
    materials: listValue(space.materials, spaceProfileDefaults.materials),
    influences: listValue(space.influences, spaceProfileDefaults.influences),
    designComponents: listValue(space.designComponents, spaceProfileDefaults.designComponents),
    electrical: listValue(space.electrical, spaceProfileDefaults.electrical),
    water: listValue(space.water, spaceProfileDefaults.water),
    mechanical: listValue(space.mechanical, spaceProfileDefaults.mechanical),
    accessibility: listValue(space.accessibility, spaceProfileDefaults.accessibility),
    referenceFocus: listValue(space.referenceFocus, spaceProfileDefaults.referenceFocus),
    referenceImages: listValue(space.referenceImages, [])
  };
}

function activeSpacePreset() {
  const preset = spaceTypePresets[state.spaceDraft.type] || {
    ...fallbackSpacePreset,
    name: state.spaceDraft.type || fallbackSpacePreset.name
  };
  return normalizeSpaceProfile({
    ...preset,
    ...state.spaceDraft,
    name: state.spaceDraft.name || preset.name || state.spaceDraft.type || fallbackSpacePreset.name
  });
}

function selectedProgramSpace() {
  const selected = state.programSpaces.find(space => space.id === state.selectedProgramSpaceId) || state.programSpaces[0] || null;
  return selected ? normalizeSpaceProfile(selected) : null;
}

function checkedAttr(list, value) {
  return list.includes(value) ? "checked" : "";
}

function chipValueOptions(options, selected = []) {
  return uniqueList([...(options || []), ...(selected || [])]);
}

function customChipControl(kind, key) {
  return `
    <div class="custom-chip-control">
      <input data-custom-chip-input="${escapeHtml(kind)}" data-custom-chip-key="${escapeHtml(key)}" placeholder="Add custom option">
      <button type="button" data-custom-chip-add="${escapeHtml(kind)}" data-custom-chip-key="${escapeHtml(key)}">Add</button>
    </div>
  `;
}

function selectValueOptions(options, value) {
  return uniqueList([...(options || []), value]);
}

function customSelectField(kind, key, label, value, options = [], labelClass = "", legacyAttr = "") {
  const values = selectValueOptions(options, value);
  return `
    <label class="${labelClass}">
      <span>${escapeHtml(label)}</span>
      <select ${legacyAttr} data-custom-select-kind="${escapeHtml(kind)}" data-custom-select-key="${escapeHtml(key)}">
        ${values.map(choice => `<option value="${escapeHtml(choice)}" ${value === choice ? "selected" : ""}>${escapeHtml(choice)}</option>`).join("")}
      </select>
      <div class="custom-chip-control custom-select-control">
        <input data-custom-select-input="${escapeHtml(kind)}" data-custom-select-key="${escapeHtml(key)}" placeholder="Add custom selection">
        <button type="button" data-custom-select-add="${escapeHtml(kind)}" data-custom-select-key="${escapeHtml(key)}">Add</button>
      </div>
    </label>
  `;
}

function discoveryField(field, label, value, options = {}) {
  const wide = options.wide ? "wide-field" : "";
  const type = options.type || "text";
  const placeholder = options.placeholder || "";
  if (type === "textarea") {
    return `
      <label class="${wide}">
        <span>${escapeHtml(label)}</span>
        <textarea data-discovery-field="${escapeHtml(field)}" rows="${options.rows || 2}" placeholder="${escapeHtml(placeholder)}">${escapeHtml(value)}</textarea>
      </label>
    `;
  }
  if (type === "select") {
    return customSelectField("discovery", field, label, value, options.choices || [], wide);
  }
  return `
    <label class="${wide}">
      <span>${escapeHtml(label)}</span>
      <input data-discovery-field="${escapeHtml(field)}" value="${escapeHtml(value)}" placeholder="${escapeHtml(placeholder)}">
    </label>
  `;
}

function discoveryChipGroup(field, options, selected, label) {
  const values = chipValueOptions(options, selected);
  return `
    <div class="program-chip-block">
      <strong>${escapeHtml(label)}</strong>
      <div class="program-chip-grid">
        ${values.map(option => `
          <label class="program-check">
            <input type="checkbox" data-discovery-list="${escapeHtml(field)}" value="${escapeHtml(option)}" ${checkedAttr(selected, option)}>
            <span>${escapeHtml(option)}</span>
          </label>
        `).join("")}
      </div>
      ${customChipControl("discovery", field)}
    </div>
  `;
}

function programChipGroup(name, options, selected, label) {
  const values = chipValueOptions(options, selected);
  return `
    <div class="program-chip-block">
      <strong>${escapeHtml(label)}</strong>
      <div class="program-chip-grid">
        ${values.map(option => `
          <label class="program-check">
            <input type="checkbox" name="${escapeHtml(name)}" value="${escapeHtml(option)}" ${checkedAttr(selected, option)}>
            <span>${escapeHtml(option)}</span>
          </label>
        `).join("")}
      </div>
      ${customChipControl("program", name)}
    </div>
  `;
}

const programCustomFieldByName = {
  "space-layout-zones": "layoutZones",
  "space-infra-required": "infrastructureRequired",
  "space-infra-desired": "infrastructureDesired",
  "space-influences": "influences",
  "space-style": "style",
  "space-materials": "materials",
  "space-components": "designComponents",
  "space-utilities": "utilities",
  "space-electrical": "electrical",
  "space-water": "water",
  "space-mechanical": "mechanical",
  "space-features": "features",
  "space-accessibility": "accessibility",
  "space-feelings": "feelings",
  "space-reference-focus": "referenceFocus"
};

function projectValueRows(values) {
  return projectValueOptions.map(value => `
    <label class="value-rank-row">
      <span>${escapeHtml(value)}</span>
      <select data-value-rank="${escapeHtml(value)}">
        ${["High", "Medium", "Low"].map(rank => `<option value="${rank}" ${values[value] === rank ? "selected" : ""}>${rank}</option>`).join("")}
      </select>
    </label>
  `).join("");
}

function topProjectValues(discovery, limit = 5) {
  return projectValueOptions
    .filter(value => discovery.values[value] === "High")
    .slice(0, limit);
}

function uniqueItems(items) {
  return Array.from(new Set(items.filter(Boolean)));
}

function projectInsightList(items) {
  return items.map(item => `<li>${escapeHtml(item)}</li>`).join("");
}

function projectAiUnderstanding(discovery) {
  const priorities = uniqueItems([
    ...topProjectValues(discovery, 4),
    ...discovery.performancePriorities.slice(0, 3),
    ...discovery.architecturalStyle.slice(0, 2)
  ]).slice(0, 6);

  const tensions = [];
  if (discovery.performancePriorities.includes("Natural Light") && discovery.sustainabilityGoals.some(goal => ["Net Zero", "Passive House", "Carbon Neutral"].includes(goal))) {
    tensions.push("Large glazing may support daylight goals but conflict with low-energy performance unless solar control and envelope strategy are resolved.");
  }
  if (discovery.values.Cost === "High" || discovery.maxBudget) {
    tensions.push("Budget limits may constrain material choices, system complexity, or custom details.");
  }
  if (discovery.riskRegister.includes("Steep site") || discovery.siteConditions.includes("Slope")) {
    tensions.push("Slope may affect foundation cost, accessibility, drainage, and the location of outdoor thresholds.");
  }
  if (discovery.riskRegister.includes("Permit complexity") || discovery.zoning.includes("Historic")) {
    tensions.push("Permit complexity may require earlier evidence gathering and clearer design rationale.");
  }
  if (discovery.values.Privacy === "High" && discovery.performancePriorities.includes("Natural Light")) {
    tensions.push("High privacy and strong daylight goals may require careful window placement, screening, and view control.");
  }

  const focusAreas = uniqueItems([
    discovery.sustainabilityGoals.includes("Net Zero") ? "Passive solar design and high-performance envelope" : "",
    discovery.performancePriorities.includes("Low Embodied Carbon") ? "Timber-first or low-carbon material strategy" : "",
    discovery.architecturalStyle.includes("Biophilic") ? "Landscape integration and indoor-outdoor thresholds" : "",
    discovery.performancePriorities.includes("Natural Ventilation") ? "Operable window logic and cross-ventilation paths" : "",
    discovery.riskRegister.includes("Unknown soil conditions") ? "Early geotechnical and drainage assumptions" : "",
    "Source-linked decisions before design handoff"
  ]).slice(0, 6);

  const questions = uniqueItems([
    "Which constraint would the client protect if budget, daylight, and carbon goals conflict?",
    "Where should privacy override view or daylight opportunities?",
    "Which precedents should guide material choices versus spatial organization?",
    "What evidence is needed before massing is considered reliable?"
  ]);

  return { priorities, tensions, focusAreas, questions };
}

function projectAiUnderstandingCard(discovery) {
  const insights = projectAiUnderstanding(discovery);
  return `
    <section class="simple-card ai-understanding-card">
      <span class="mini-label">Section 10</span>
      <h3>AI Understanding of Project</h3>
      <p class="discovery-note">Generated from identity, values, style, site, constraints, risks, sustainability goals, and success metrics before the Program Builder begins.</p>
      <div class="ai-understanding-grid">
        <article>
          <span>Project priorities</span>
          <ol>${projectInsightList(insights.priorities)}</ol>
        </article>
        <article>
          <span>Potential tensions</span>
          <ul>${projectInsightList(insights.tensions)}</ul>
        </article>
        <article>
          <span>Recommended focus areas</span>
          <ul>${projectInsightList(insights.focusAreas)}</ul>
        </article>
        <article>
          <span>Questions to ask next</span>
          <ul>${projectInsightList(insights.questions)}</ul>
        </article>
      </div>
    </section>
  `;
}

function discoveryMemorySummary(discovery, project) {
  const programNames = state.programSpaces.map(space => space.name).join(", ");
  const topValues = topProjectValues(discovery, 5).join(", ");
  return `
    <section class="simple-card project-memory-dashboard">
      <span class="mini-label">Project memory dashboard</span>
      <h3>Project Memory</h3>
      <div class="memory-summary-grid">
        <div><span>Project</span><strong>${escapeHtml(discovery.projectName || project.project.name)}</strong></div>
        <div><span>Client</span><strong>${escapeHtml(discovery.client)}</strong></div>
        <div><span>Type</span><strong>${escapeHtml(discovery.projectType)}</strong></div>
        <div><span>Location</span><strong>${escapeHtml(discovery.location)}</strong></div>
        <div><span>Budget</span><strong>${escapeHtml(discovery.budget)}</strong></div>
        <div><span>Max area</span><strong>${escapeHtml(discovery.maxBuildingArea)}</strong></div>
        <div><span>Style</span><strong>${escapeHtml(discovery.architecturalStyle.join(" + "))}</strong></div>
        <div><span>Values</span><strong>${escapeHtml(topValues || "Not ranked")}</strong></div>
        <div><span>Energy</span><strong>${escapeHtml(discovery.energy.join(" + "))}</strong></div>
        <div><span>Water</span><strong>${escapeHtml(discovery.water.join(" + "))}</strong></div>
        <div><span>Risks</span><strong>${escapeHtml(discovery.riskRegister.join(" + "))}</strong></div>
        <div><span>Success</span><strong>${escapeHtml(discovery.naturalDaylightTarget)}</strong></div>
        <div><span>Precedents</span><strong>${escapeHtml(discovery.admiredBuildings.map(item => item.name).join(", "))}</strong></div>
        <div><span>Program</span><strong>${escapeHtml(programNames || "No spaces saved")}</strong></div>
      </div>
      <p class="ai-checkline">This is the AI-readable foundation before rooms are generated: identity, values, style, site, utilities, sustainability, precedents, and program stay connected across later workspaces.</p>
    </section>
  `;
}

function programTotalArea(spaces = state.programSpaces) {
  return spaces.reduce((sum, space) => sum + Number(space.area || 0), 0);
}

function renderNav() {
  el.sectionNav.innerHTML = sections.map((section, index) => {
    const active = state.activeSection === section.id ? "active" : "";
    return `
      <button class="section-link ${active}" data-section="${section.id}" title="${escapeHtml(section.title)}">
        <span class="section-index">${String(index).padStart(2, "0")}</span>
        <span>
          <strong>${escapeHtml(section.title)}</strong>
          <span>${escapeHtml(section.stage)}</span>
        </span>
      </button>
    `;
  }).join("");

  el.sectionNav.querySelectorAll("[data-section]").forEach(button => {
    button.addEventListener("click", () => {
      state.authView = null;
      state.activeSection = button.dataset.section;
      render();
    });
  });
}

function renderPageChrome() {
  const section = sectionById(state.activeSection);
  const isDashboard = state.activeSection === "dashboard";
  const shortTitle = section.title.split(" / ")[0];

  el.workspaceTitle.textContent = isDashboard ? "Project Flow Guide" : `${shortTitle} Workspace`;
  el.workspaceDescription.textContent = isDashboard
    ? "Choose a phase to enter its page."
    : "Customer info, database, parcel map, and downloads.";
  el.canvasMode.textContent = isDashboard ? "Flow navigation" : section.stage;

  el.assistantTitle.textContent = `${shortTitle} Assistor`;
  el.assistantDescription.textContent = isDashboard
    ? "Available after entering a project page."
    : `Works inside ${section.stage.toLowerCase()} with project memory and source checks.`;
}

function renderProjectHeader() {
  const project = state.project;
  if (!project) return;
  el.projectName.textContent = project.project.name;
  el.projectMeta.textContent = `${project.project.location} | ${project.project.phase}`;
  el.projectPhase.textContent = project.project.phase;
  el.currentSection.textContent = project.project.currentSection;
  el.lastCompleted.textContent = project.project.lastCompleted;
  el.memoryCount.textContent = `${project.aiTranscript.length} records`;

  const critical = state.lastResponse
    ? state.lastResponse.annotations.filter(item => item.severity === "critical").length
    : initialCriticalCount(project);
  el.criticalCount.textContent = String(critical);
}

function initialCriticalCount(project) {
  let count = 0;
  const front = project.verifiedRules.find(rule => rule.ruleType === "front_setback");
  const height = project.verifiedRules.find(rule => rule.ruleType === "height_limit");
  if (front && project.designModel.frontDistanceFt < front.value) count += 1;
  if (height && project.designModel.heightFt > height.value) count += 1;
  return count;
}

function normalizeLabel(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9]/g, "");
}

function sectionIdFromTitle(title) {
  const normalized = normalizeLabel(title);
  const exact = sections.find(section => normalizeLabel(section.title) === normalized);
  if (exact) return exact.id;

  const aliases = [
    ["cad", "design"],
    ["rhino", "design"],
    ["zoning", "policy"],
    ["policy", "policy"],
    ["permit", "permit"],
    ["code", "permit"],
    ["arcgis", "gis"],
    ["spatial", "gis"],
    ["ashrae", "ashrae"],
    ["sustainability", "ashrae"],
    ["sun", "sun"],
    ["lumion", "lumion"],
    ["render", "lumion"],
    ["visual", "lumion"],
    ["final", "finalization"],
    ["handoff", "finalization"],
    ["engineering", "engineering"],
    ["case", "case-study"],
    ["archive", "archive"],
    ["notes", "notes"],
    ["client", "clientele"],
    ["brief", "clientele"],
    ["survey", "survey"],
    ["data", "data"]
  ];
  const match = aliases.find(([key]) => normalized.includes(key));
  return match ? match[1] : null;
}

function latestRecommendedSectionIds(project) {
  const transcript = project.aiTranscript || [];
  const latest = transcript.find(item => Array.isArray(item.recommendedNext) && item.recommendedNext.length);
  const raw = latest ? latest.recommendedNext : ["CAD / Rhino Design Workspace", "Zoning + Policy Intelligence", "Permit / Code Review"];
  return [...new Set(raw.map(sectionIdFromTitle).filter(Boolean))];
}

function projectFlowIssues(project) {
  const issues = [];
  const front = project.verifiedRules.find(rule => rule.ruleType === "front_setback");
  const height = project.verifiedRules.find(rule => rule.ruleType === "height_limit");
  const ashrae = project.analysisResults.ashrae;

  if (front && project.designModel.frontDistanceFt < front.value) {
    issues.push({
      id: "front-setback",
      label: "Front setback",
      priority: "critical",
      text: `${project.designModel.frontDistanceFt} ft built against ${front.value} ft required`,
      sections: ["design", "policy", "permit"]
    });
  }

  if (height && project.designModel.heightFt > height.value) {
    issues.push({
      id: "height-limit",
      label: "Height limit",
      priority: "critical",
      text: `${project.designModel.heightFt} ft model against ${height.value} ft limit`,
      sections: ["design", "policy", "permit", "engineering"]
    });
  }

  if (project.designModel.southGlazingPercent > 30 && ashrae.coolingImpactPercent > 5) {
    issues.push({
      id: "glazing-performance",
      label: "Glazing performance",
      priority: "high",
      text: `${project.designModel.southGlazingPercent}% south glazing with +${ashrae.coolingImpactPercent}% cooling demand`,
      sections: ["design", "sun", "ashrae", "lumion", "finalization"]
    });
  }

  return issues;
}

function priorityForSection(project, sectionId, recommendedIds) {
  const issues = projectFlowIssues(project).filter(issue => issue.sections.includes(sectionId));
  if (issues.some(issue => issue.priority === "critical")) return { level: "critical", label: "Critical" };
  if (issues.some(issue => issue.priority === "high")) return { level: "high", label: "High" };
  if (recommendedIds.includes(sectionId)) return { level: "recommended", label: "Recommended" };
  return { level: "normal", label: "Normal" };
}

function journeyHoverText(sectionId, priority, isCurrent, isRecommended) {
  const cues = {
    clientele: "Use this when the client goals, budget, style, or priorities need to be clarified.",
    survey: "Use this when the parcel facts, utilities, slope, soil, or boundaries need to be checked.",
    data: "Use this when project records need to be cleaned, exported, or reused.",
    policy: "Use this when zoning, overlays, setbacks, height, FAR, or code language needs verification.",
    gis: "Use this when site layers, risks, and spatial opportunities need to be compared.",
    design: "Use this when the massing, placement, windows, or concept model needs revision.",
    sun: "Use this when daylight, heat gain, shadow, glare, or orientation needs review.",
    ashrae: "Use this when material sustainability, envelope, embodied impact, or green metrics need a check.",
    lumion: "Use this when the design needs visual review, render comparison, or client-facing imagery.",
    finalization: "Use this when the design direction, project facts, decisions, and unresolved risks need to be packaged before engineering.",
    engineering: "Use this when technical comments, structure, civil, MEP, or feasibility need coordination.",
    permit: "Use this when the package needs code completeness, corrections, or submission readiness.",
    notes: "Use this when sketches, ideas, precedents, or meeting thoughts need to become criteria.",
    archive: "Use this when you need to trace why a decision was made.",
    "case-study": "Use this when the project needs a clear narrative, report, or presentation output."
  };
  if (isCurrent) return `Go here now. ${cues[sectionId]}`;
  if (priority.level === "critical") return `Resolve soon. ${cues[sectionId]}`;
  if (isRecommended) return `Recommended next. ${cues[sectionId]}`;
  return cues[sectionId] || "Open this page when the project reaches this step.";
}

const journeyStages = [
  {
    number: "01",
    label: "Brief",
    title: "Client + Goals",
    section: "clientele",
    sections: ["clientele"],
    detail: "Capture customer information, design priorities, budget limits, and success criteria.",
    hover: "Use this first when the project needs a clear client brief before any site or design decisions.",
    pages: ["Customer info", "Priorities"]
  },
  {
    number: "02",
    label: "Site / Data",
    title: "Parcel + Database",
    section: "survey",
    sections: ["survey", "data", "gis"],
    detail: "Confirm parcel facts, GIS layers, survey records, and reusable CSV/database fields.",
    hover: "Use this when the parcel, map layers, utilities, slope, soil, or project data need to be checked.",
    pages: ["Parcel", "Database", "GIS"]
  },
  {
    number: "03",
    label: "Rules",
    title: "Policy + Feasibility",
    section: "policy",
    sections: ["policy", "ashrae"],
    detail: "Review zoning, overlays, setbacks, height limits, material sustainability assumptions, and conflicts.",
    hover: "Use this before design moves become expensive, especially when a rule or analysis result may change the concept.",
    pages: ["Policy", "Sustainability"]
  },
  {
    number: "04",
    label: "Design",
    title: "Concept + Review",
    section: "design",
    sections: ["design", "sun", "lumion"],
    detail: "Develop the visual direction, massing, daylight response, Lumion review, and design alternatives.",
    hover: "Use this when the architect needs to shape or revise the actual design using the project evidence.",
    pages: ["Map", "Design", "Lumion"]
  },
  {
    number: "05",
    label: "Handoff",
    title: "Finalization + Outputs",
    section: "finalization",
    sections: ["finalization", "engineering", "permit", "notes", "archive", "case-study"],
    detail: "Prepare the decision summary, engineering handoff, permit checks, project evidence, parcel JSON, and CSV exports.",
    hover: "Use this when the project needs to leave design as a clear package for engineering, review, or reporting.",
    pages: ["Finalization", "CSV", "Parcel"]
  }
];

const roleJourneys = {
  architect: {
    label: "Architect",
    impact: "Design Direction",
    title: "Architect",
    intro: "Move from client intent to parcel evidence, policy checks, design review, and exportable outputs.",
    defaultSection: "design",
    stages: journeyStages
  },
  engineer: {
    label: "Engineer",
    impact: "Technical Feasibility",
    title: "Engineer",
    intro: "Move from site facts to model constraints, performance assumptions, technical comments, and exportable evidence.",
    defaultSection: "engineering",
    stages: [
      {
        number: "01",
        label: "Site",
        title: "Survey + Conditions",
        section: "survey",
        sections: ["survey", "gis"],
        detail: "Review slope, soil, utilities, stormwater paths, and parcel conditions.",
        hover: "Use this when technical feasibility depends on physical site conditions.",
        pages: ["Survey", "GIS"]
      },
      {
        number: "02",
        label: "Model",
        title: "Design Geometry",
        section: "design",
        sections: ["design"],
        detail: "Understand massing, height, setbacks, foundation depth, and selected design elements.",
        hover: "Use this when the consultant needs to inspect the design move that creates technical risk.",
        pages: ["Model", "Map"]
      },
      {
        number: "03",
        label: "Performance",
        title: "Energy + Envelope",
        section: "ashrae",
        sections: ["ashrae", "sun"],
        detail: "Review daylight, cooling impact, envelope risk, carbon, and performance assumptions.",
        hover: "Use this when technical advice depends on physics, energy, comfort, or material performance.",
        pages: ["ASHRAE", "Sun"]
      },
      {
        number: "04",
        label: "Coordinate",
        title: "Technical Review",
        section: "engineering",
        sections: ["engineering", "permit", "archive"],
        detail: "Record consultant comments, close issues, and prepare coordination evidence.",
        hover: "Use this when the consultant needs to hand back decisions, concerns, or required revisions.",
        pages: ["Issues", "Permit", "Archive"]
      }
    ]
  },
  client: {
    label: "Client",
    impact: "Project Intent",
    title: "Client",
    intro: "Review the project in plain language: goals, site, concept, decisions, and final downloads.",
    defaultSection: "clientele",
    stages: [
      {
        number: "01",
        label: "Goals",
        title: "Your Brief",
        section: "clientele",
        sections: ["clientele"],
        detail: "Confirm priorities, budget comfort, style direction, and what success should feel like.",
        hover: "Use this when the client needs to approve or revise what the project is trying to achieve.",
        pages: ["Customer info", "Priorities"]
      },
      {
        number: "02",
        label: "Place",
        title: "Site Context",
        section: "survey",
        sections: ["survey", "gis"],
        detail: "Understand the parcel, map layers, views, utilities, and site opportunities.",
        hover: "Use this when the client needs a clear explanation of what the site allows or complicates.",
        pages: ["Parcel map", "GIS"]
      },
      {
        number: "03",
        label: "Concept",
        title: "Design Review",
        section: "design",
        sections: ["design", "sun", "lumion"],
        detail: "Review the concept, daylight, Lumion views, and visual direction before deeper coordination.",
        hover: "Use this when the client is comparing options or giving feedback on the look and feel.",
        pages: ["Concept", "Lumion", "Visuals"]
      },
      {
        number: "04",
        label: "Approve",
        title: "Decision Package",
        section: "case-study",
        sections: ["notes", "archive", "case-study", "permit"],
        detail: "See the reasoned summary, open decisions, permit readiness, and downloadable project data.",
        hover: "Use this when the client needs to approve a direction or receive a shareable package.",
        pages: ["Summary", "CSV", "Parcel"]
      }
    ]
  },
  planner: {
    label: "Planner",
    impact: "Policy Strategy",
    title: "Planner",
    intro: "Check source-grounded rules, mapped constraints, code conflicts, and permit readiness.",
    defaultSection: "policy",
    stages: [
      {
        number: "01",
        label: "Intake",
        title: "Project Intake",
        section: "data",
        sections: ["data", "survey"],
        detail: "Confirm project records, parcel facts, survey information, and submitted data.",
        hover: "Use this first when a reviewer needs to know whether the intake package is complete.",
        pages: ["Database", "Survey"]
      },
      {
        number: "02",
        label: "Jurisdiction",
        title: "Zone + Policy",
        section: "policy",
        sections: ["policy"],
        detail: "Check zoning, overlays, setbacks, height limits, incentives, and policy citations.",
        hover: "Use this when the reviewer needs to verify what rules apply and where they came from.",
        pages: ["Rules", "Sources"]
      },
      {
        number: "03",
        label: "Map",
        title: "Spatial Check",
        section: "gis",
        sections: ["gis", "survey"],
        detail: "Review parcel boundaries, GIS overlays, risk layers, and mapped design implications.",
        hover: "Use this when a policy decision depends on location, overlays, or site-specific constraints.",
        pages: ["GIS", "Parcel"]
      },
      {
        number: "04",
        label: "Compliance",
        title: "Permit Review",
        section: "permit",
        sections: ["permit", "engineering", "archive"],
        detail: "Track conflicts, corrections, engineering notes, and permit package completeness.",
        hover: "Use this when the reviewer needs to decide what passes, what fails, and what needs correction.",
        pages: ["Permit", "Corrections"]
      }
    ]
  },
  gis: {
    label: "GIS Analyst",
    impact: "Spatial Intelligence",
    title: "GIS Analyst",
    intro: "Prepare reliable project data, mapped layers, policy geography, and downloadable parcel/CSV outputs.",
    defaultSection: "gis",
    stages: [
      {
        number: "01",
        label: "Collect",
        title: "Raw Inputs",
        section: "data",
        sections: ["data", "survey"],
        detail: "Load survey values, parcel fields, source documents, and project records.",
        hover: "Use this when the analyst needs clean input data before mapping or export.",
        pages: ["Database", "Survey"]
      },
      {
        number: "02",
        label: "Map",
        title: "Layer Stack",
        section: "gis",
        sections: ["gis"],
        detail: "Toggle GIS layers, compare overlays, and identify site risks or opportunities.",
        hover: "Use this when spatial evidence needs to be visible and reusable.",
        pages: ["GIS", "Parcel"]
      },
      {
        number: "03",
        label: "Policy",
        title: "Spatial Rules",
        section: "policy",
        sections: ["policy", "permit"],
        detail: "Connect zoning rules, overlays, and mapped constraints to the project parcel.",
        hover: "Use this when policy checks need map-backed evidence.",
        pages: ["Rules", "Permit"]
      },
      {
        number: "04",
        label: "Export",
        title: "Parcel + CSV",
        section: "data",
        sections: ["data", "archive", "case-study"],
        detail: "Download parcel JSON, project CSV, and source-linked evidence for downstream tools.",
        hover: "Use this when another user or application needs structured project outputs.",
        pages: ["CSV", "Parcel", "Archive"]
      }
    ]
  },
  surveyor: {
    label: "Land Surveyor",
    impact: "Site Verification",
    title: "Land Surveyor",
    intro: "Verify boundaries, field measurements, utilities, slope, easements, and survey deliverables.",
    defaultSection: "survey",
    stages: [
      {
        number: "01",
        label: "Field",
        title: "Field Inputs",
        section: "survey",
        sections: ["survey"],
        detail: "Confirm parcel measurements, utilities, slope, soil notes, and survey source status.",
        hover: "Use this when field data needs to become trusted project evidence.",
        pages: ["Survey", "Utilities"]
      },
      {
        number: "02",
        label: "Boundary",
        title: "Parcel Geometry",
        section: "gis",
        sections: ["gis", "survey"],
        detail: "Review parcel edges, setbacks, GIS alignment, view corridors, and mapped site features.",
        hover: "Use this when the survey needs to be checked visually against the parcel map.",
        pages: ["Parcel map", "GIS"]
      },
      {
        number: "03",
        label: "Constraints",
        title: "Easements + Rules",
        section: "policy",
        sections: ["policy", "data"],
        detail: "Connect survey facts to zoning constraints, easements, setbacks, and data fields.",
        hover: "Use this when survey information affects rule interpretation or buildable area.",
        pages: ["Policy", "Database"]
      },
      {
        number: "04",
        label: "Deliver",
        title: "Survey Exports",
        section: "data",
        sections: ["data", "archive"],
        detail: "Package the verified parcel record, survey CSV fields, and source-linked evidence.",
        hover: "Use this when the surveyor needs to provide clean outputs for the design team.",
        pages: ["CSV", "Parcel", "Archive"]
      }
    ]
  },
  reviewer: {
    label: "Reviewer",
    impact: "Standards Review",
    title: "Reviewer",
    intro: "Review plans against zoning, code, safety, accessibility, completeness, and submission standards.",
    defaultSection: "permit",
    stages: [
      {
        number: "01",
        label: "Intake",
        title: "Submission Intake",
        section: "data",
        sections: ["data", "survey"],
        detail: "Confirm the application record, parcel data, survey facts, and required attachments.",
        hover: "Use this when the review package first arrives and needs a completeness check.",
        pages: ["Database", "Survey"]
      },
      {
        number: "02",
        label: "Standards",
        title: "Code + Zoning",
        section: "policy",
        sections: ["policy", "gis"],
        detail: "Review zoning rules, overlays, mapped constraints, setbacks, and height limits.",
        hover: "Use this when the review depends on rule language, standards, or parcel location.",
        pages: ["Policy", "GIS"]
      },
      {
        number: "03",
        label: "Corrections",
        title: "Design Check",
        section: "permit",
        sections: ["permit", "engineering", "design"],
        detail: "Track conflicts, correction comments, engineering notes, and required design revisions.",
        hover: "Use this when the reviewer needs to identify what must be corrected before approval.",
        pages: ["Corrections", "Design", "Engineering"]
      },
      {
        number: "04",
        label: "Closeout",
        title: "Review Record",
        section: "permit",
        sections: ["permit", "archive", "case-study", "data"],
        detail: "Prepare the review record, evidence archive, correction response, parcel JSON, and project CSV.",
        hover: "Use this when the reviewed design is ready to approve, export, or return with notes.",
        pages: ["Review", "Archive", "CSV"]
      }
    ]
  },
  inspector: {
    label: "Inspector",
    impact: "Field Compliance",
    title: "Inspector",
    intro: "Verify site conditions, construction status, field issues, inspection notes, and closeout evidence.",
    defaultSection: "survey",
    stages: [
      {
        number: "01",
        label: "Assignment",
        title: "Inspection Intake",
        section: "data",
        sections: ["data", "permit"],
        detail: "Confirm the project record, inspection type, required documents, and current approval status.",
        hover: "Use this when an inspector needs to understand what must be checked on site.",
        pages: ["Database", "Permit"]
      },
      {
        number: "02",
        label: "Site",
        title: "Field Conditions",
        section: "survey",
        sections: ["survey", "gis"],
        detail: "Verify boundaries, access, utilities, slope, visible site conditions, and mapped context.",
        hover: "Use this when field observations need to be tied to parcel and survey evidence.",
        pages: ["Survey", "GIS"]
      },
      {
        number: "03",
        label: "Standards",
        title: "Inspection Checklist",
        section: "policy",
        sections: ["policy", "permit", "engineering"],
        detail: "Check the observed work against applicable standards, permit conditions, and technical notes.",
        hover: "Use this when an inspector needs to know what passes, what fails, and what needs follow-up.",
        pages: ["Standards", "Corrections"]
      },
      {
        number: "04",
        label: "Record",
        title: "Inspection Record",
        section: "archive",
        sections: ["archive", "notes", "case-study", "data"],
        detail: "Package inspection notes, field evidence, decision history, parcel JSON, and CSV exports.",
        hover: "Use this when the inspection needs a clear record for approval, correction, or closeout.",
        pages: ["Archive", "Notes", "CSV"]
      }
    ]
  }
};

const roleOrder = ["client", "surveyor", "gis", "planner", "architect", "engineer", "reviewer", "inspector"];

const joinPaths = {
  freelance: {
    label: "Freelance / Contract",
    title: "Independent project work",
    detail: "For architects, engineers, surveyors, GIS analysts, reviewers, and inspectors joining as an outside collaborator.",
    fields: ["Your name", "Professional email", "Primary discipline"]
  },
  company: {
    label: "Company",
    title: "Firm or agency workspace",
    detail: "For teams that need shared project records, role access, review history, and reusable organization standards.",
    fields: ["Organization name", "Work email", "Team size"]
  },
  invite: {
    label: "Sent a Link",
    title: "Join an existing project",
    detail: "For clients, consultants, reviewers, inspectors, or collaborators entering from a shared project invitation.",
    fields: ["Invite email", "Project link or code", "Requested role"]
  }
};

const joinPathOrder = ["freelance", "company", "invite"];

function roleIcon(roleId) {
  const icons = {
    architect: `
      <svg class="role-icon role-icon-architect" viewBox="0 0 96 72" focusable="false">
        <path class="role-icon-fill" d="M18 13h60v46H18z"/>
        <path class="role-icon-soft" d="M27 13v46M39 13v46M51 13v46M63 13v46M18 24h60M18 36h60M18 48h60"/>
        <path class="role-icon-accent" d="M28 50V25h18v12h21v13z"/>
        <path class="role-icon-accent" d="M46 25v12M57 37v13M36 25v8M28 42h11M48 50h8"/>
        <path class="role-icon-stroke" d="M14 63h68M78 59l5 4-5 4M18 59l-5 4 5 4"/>
      </svg>
    `,
    engineer: `
      <svg class="role-icon role-icon-engineer" viewBox="0 0 96 72" focusable="false">
        <path class="role-icon-stroke" d="M14 56h68M18 52l30-34 30 34M28 52l20-22 20 22"/>
        <path class="role-icon-soft" d="M28 52h40M38 40h20M48 18v38"/>
        <path class="role-icon-accent" d="M18 52 48 30 78 52"/>
        <circle class="role-icon-accent-fill" cx="48" cy="18" r="4"/>
      </svg>
    `,
    gis: `
      <svg class="role-icon role-icon-gis" viewBox="0 0 96 72" focusable="false">
        <path class="role-icon-fill" d="m15 22 20-7 26 8 20-7v38l-20 7-26-8-20 7z"/>
        <path class="role-icon-soft" d="M35 15v38M61 23v38M23 32l10-4M43 30l10 3M68 34l7-3M24 48l10-3M43 47l10 3"/>
        <path class="role-icon-accent" d="M63 18c0-8 13-8 13 0 0 7-6.5 15-6.5 15S63 25 63 18z"/>
        <circle class="role-icon-accent-fill" cx="69.5" cy="18" r="2.4"/>
      </svg>
    `,
    planner: `
      <svg class="role-icon role-icon-planner" viewBox="0 0 96 72" focusable="false">
        <path class="role-icon-fill" d="M26 12h44v48H26z"/>
        <path class="role-icon-soft" d="M38 24h22M38 36h22M38 48h22"/>
        <path class="role-icon-accent" d="m27 26 5 5 9-11M27 38l5 5 9-11M27 50l5 5 9-11"/>
        <path class="role-icon-soft" d="M39 12c1-5 17-5 18 0"/>
      </svg>
    `,
    surveyor: `
      <svg class="role-icon role-icon-surveyor" viewBox="0 0 96 72" focusable="false">
        <path class="role-icon-accent" d="M48 18v16M48 34 32 58M48 34l16 24M38 58h20"/>
        <path class="role-icon-stroke" d="M24 30h48"/>
        <path class="role-icon-soft" d="M28 26v8M38 26v8M48 26v8M58 26v8M68 26v8"/>
        <circle class="role-icon-accent-fill" cx="48" cy="17" r="5"/>
        <path class="role-icon-fill" d="M36 14h24v8H36z"/>
      </svg>
    `,
    reviewer: `
      <svg class="role-icon role-icon-reviewer" viewBox="0 0 96 72" focusable="false">
        <path class="role-icon-fill" d="M24 12h42l8 8v40H24z"/>
        <path class="role-icon-soft" d="M65 12v10h9M34 27h24M34 38h20M34 49h16"/>
        <path class="role-icon-accent" d="M61 49 73 37l7 7-12 12-10 3z"/>
        <path class="role-icon-accent" d="m26 43 7 7 14-18"/>
      </svg>
    `,
    inspector: `
      <svg class="role-icon role-icon-inspector" viewBox="0 0 96 72" focusable="false">
        <path class="role-icon-fill" d="M25 14h42v48H25z"/>
        <path class="role-icon-soft" d="M38 24h18M38 35h15M38 46h11"/>
        <path class="role-icon-accent" d="M30 25l4 4 8-10M30 36l4 4 8-10"/>
        <circle class="role-icon-stroke" cx="63" cy="46" r="10"/>
        <path class="role-icon-accent" d="m70 53 9 9"/>
        <path class="role-icon-soft" d="M39 14c1-5 13-5 14 0"/>
      </svg>
    `,
    client: `
      <svg class="role-icon role-icon-client" viewBox="0 0 96 72" focusable="false">
        <circle class="role-icon-fill" cx="48" cy="25" r="13"/>
        <path class="role-icon-fill" d="M24 60c3-16 45-16 48 0z"/>
        <path class="role-icon-accent" d="M33 55c8-8 22-8 30 0"/>
        <path class="role-icon-soft" d="M39 26h18"/>
      </svg>
    `
  };
  return icons[roleId] || icons.client;
}

function roleMiniJourney(role) {
  const stages = role.stages || [];
  const miniLabel = label => label === "Sustainability" ? "Sustain-<br>ability" : escapeHtml(label);
  return `
    <span class="role-hover-map" aria-hidden="true">
      <span class="role-hover-kicker">Workflow preview</span>
      <span class="role-mini-grid">
        ${stages.map((stage, index) => {
          const defaultSection = role.defaultSection || "";
          const isActive = stage.section === defaultSection || (stage.sections || []).includes(defaultSection);
          const rowEnd = (index + 1) % 4 === 0 || index === stages.length - 1;
          return `
            <span class="role-mini-step ${isActive ? "active" : ""} ${rowEnd ? "row-end" : ""}">
              <span class="role-mini-number">${escapeHtml(stage.number || String(index + 1).padStart(2, "0"))}</span>
              <span class="role-mini-label">${miniLabel(stage.label)}</span>
            </span>
          `;
        }).join("")}
      </span>
    </span>
  `;
}

function visualForSection(sectionId) {
  const visuals = {
    clientele: "client",
    survey: "survey",
    data: "database",
    policy: "zone",
    gis: "map",
    design: "blueprint",
    sun: "sun",
    ashrae: "sustainability",
    lumion: "render",
    finalization: "finalize",
    engineering: "engineering",
    permit: "review",
    notes: "notes",
    archive: "archive",
    "case-study": "story"
  };
  return visuals[sectionId] || "default";
}

function journeyIcon(visualId) {
  const icons = {
    client: `
      <svg class="journey-icon journey-icon-client" viewBox="0 0 96 72" focusable="false">
        <circle class="journey-icon-fill" cx="48" cy="25" r="13"/>
        <path class="journey-icon-fill" d="M24 60c3-16 45-16 48 0z"/>
        <path class="journey-icon-accent" d="M33 55c8-8 22-8 30 0"/>
      </svg>
    `,
    survey: `
      <svg class="journey-icon journey-icon-survey" viewBox="0 0 96 72" focusable="false">
        <path class="journey-icon-accent" d="M48 18v16M48 34 32 58M48 34l16 24M38 58h20"/>
        <path class="journey-icon-stroke" d="M24 30h48"/>
        <path class="journey-icon-soft" d="M28 26v8M38 26v8M48 26v8M58 26v8M68 26v8"/>
        <circle class="journey-icon-accent-fill" cx="48" cy="17" r="5"/>
        <path class="journey-icon-fill" d="M36 14h24v8H36z"/>
      </svg>
    `,
    database: `
      <svg class="journey-icon journey-icon-database" viewBox="0 0 96 72" focusable="false">
        <path class="journey-icon-fill" d="M18 46c0 6 60 6 60 0v12c0 6-60 6-60 0z"/>
        <path class="journey-icon-fill" d="M18 30c0 6 60 6 60 0v12c0 6-60 6-60 0z"/>
        <ellipse class="journey-icon-fill" cx="48" cy="24" rx="30" ry="8"/>
        <path class="journey-icon-accent" d="M29 53h8M43 53h8M57 53h8"/>
      </svg>
    `,
    zone: `
      <svg class="journey-icon journey-icon-zone" viewBox="0 0 96 72" focusable="false">
        <path class="journey-icon-fill" d="M17 18h62v42H17z"/>
        <path class="journey-icon-soft" d="M30 18v42M47 18v42M64 18v42M17 32h62M17 46h62"/>
        <path class="journey-icon-accent" d="M28 51 34 25h23l12 12-8 14z"/>
        <path class="journey-icon-accent" d="M36 34h15M36 43h22"/>
      </svg>
    `,
    map: `
      <svg class="journey-icon journey-icon-map" viewBox="0 0 96 72" focusable="false">
        <path class="journey-icon-fill" d="m15 22 20-7 26 8 20-7v38l-20 7-26-8-20 7z"/>
        <path class="journey-icon-soft" d="M35 15v38M61 23v38M23 32l10-4M43 30l10 3M68 34l7-3M24 48l10-3M43 47l10 3"/>
        <path class="journey-icon-accent" d="M63 18c0-8 13-8 13 0 0 7-6.5 15-6.5 15S63 25 63 18z"/>
        <circle class="journey-icon-accent-fill" cx="69.5" cy="18" r="2.4"/>
      </svg>
    `,
    blueprint: `
      <svg class="journey-icon journey-icon-blueprint" viewBox="0 0 96 72" focusable="false">
        <path class="journey-icon-fill" d="M18 13h60v46H18z"/>
        <path class="journey-icon-soft" d="M27 13v46M39 13v46M51 13v46M63 13v46M18 24h60M18 36h60M18 48h60"/>
        <path class="journey-icon-accent" d="M28 50V25h18v12h21v13z"/>
        <path class="journey-icon-accent" d="M46 25v12M57 37v13M36 25v8M28 42h11M48 50h8"/>
      </svg>
    `,
    sun: `
      <svg class="journey-icon journey-icon-sun" viewBox="0 0 96 72" focusable="false">
        <circle class="journey-icon-fill" cx="48" cy="36" r="16"/>
        <path class="journey-icon-accent" d="M48 10v8M48 54v8M22 36h8M66 36h8M29 17l6 6M61 49l6 6M67 17l-6 6M35 49l-6 6"/>
        <path class="journey-icon-soft" d="M23 59c12-8 38-8 50 0"/>
      </svg>
    `,
    sustainability: `
      <svg class="journey-icon journey-icon-sustainability" viewBox="0 0 96 72" focusable="false">
        <path class="journey-icon-fill" d="M22 12h50v48H22z"/>
        <path class="journey-icon-soft" d="M34 26h30M34 38h22M34 50h28"/>
        <path class="journey-icon-accent" d="M27 27h6M27 39h6M27 51h6"/>
        <path class="journey-icon-accent" d="M61 22c10 3 13 11 6 19-8-2-13-10-6-19zM62 41c-2 7-6 11-13 13"/>
      </svg>
    `,
    "material-table": `
      <svg class="journey-icon journey-icon-material-table" viewBox="0 0 96 72" focusable="false">
        <path class="journey-icon-fill" d="M17 16h62v46H17z"/>
        <path class="journey-icon-soft" d="M17 29h62M17 44h62M36 16v46M58 16v46"/>
        <path class="journey-icon-accent" d="M23 22h10M41 22h12M63 22h10"/>
        <path class="journey-icon-accent" d="M23 36h10M41 36h12M63 36h10M23 51h10M41 51h12M63 51h10"/>
      </svg>
    `,
    render: `
      <svg class="journey-icon journey-icon-render" viewBox="0 0 96 72" focusable="false">
        <path class="journey-icon-fill" d="M18 15h60v44H18z"/>
        <path class="journey-icon-soft" d="M25 51 43 33l12 11 9-9 11 16"/>
        <circle class="journey-icon-accent-fill" cx="63" cy="26" r="5"/>
        <path class="journey-icon-accent" d="M30 59h36M38 64h20"/>
      </svg>
    `,
    finalize: `
      <svg class="journey-icon journey-icon-finalize" viewBox="0 0 96 72" focusable="false">
        <path class="journey-icon-fill" d="M22 15h36l14 14v43H22z"/>
        <path class="journey-icon-soft" d="M58 15v15h14M32 34h24M32 44h18M32 54h14"/>
        <path class="journey-icon-accent" d="m53 53 7 7 16-20"/>
        <path class="journey-icon-accent" d="M21 62h26"/>
      </svg>
    `,
    engineering: `
      <svg class="journey-icon journey-icon-engineering" viewBox="0 0 96 72" focusable="false">
        <path class="journey-icon-stroke" d="M14 56h68M18 52l30-34 30 34M28 52l20-22 20 22"/>
        <path class="journey-icon-soft" d="M28 52h40M38 40h20M48 18v38"/>
        <path class="journey-icon-accent" d="M18 52 48 30 78 52"/>
      </svg>
    `,
    review: `
      <svg class="journey-icon journey-icon-review" viewBox="0 0 96 72" focusable="false">
        <path class="journey-icon-fill" d="M24 12h42l8 8v40H24z"/>
        <path class="journey-icon-soft" d="M65 12v10h9M34 27h24M34 38h20M34 49h16"/>
        <path class="journey-icon-accent" d="M61 49 73 37l7 7-12 12-10 3z"/>
        <path class="journey-icon-accent" d="m26 43 7 7 14-18"/>
      </svg>
    `,
    notes: `
      <svg class="journey-icon journey-icon-notes" viewBox="0 0 96 72" focusable="false">
        <path class="journey-icon-fill" d="M22 17h34v34H22z"/>
        <path class="journey-icon-fill" d="M43 28h31v31H43z"/>
        <path class="journey-icon-soft" d="M29 28h20M29 37h14M50 40h17M50 49h12"/>
        <path class="journey-icon-accent" d="M56 51 74 33"/>
      </svg>
    `,
    archive: `
      <svg class="journey-icon journey-icon-archive" viewBox="0 0 96 72" focusable="false">
        <path class="journey-icon-fill" d="M22 18h52v42H22z"/>
        <path class="journey-icon-fill" d="M28 12h40v10H28z"/>
        <path class="journey-icon-soft" d="M33 33h28M33 43h20M33 52h26"/>
        <path class="journey-icon-accent" d="M63 45a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM69 42l8 8"/>
      </svg>
    `,
    story: `
      <svg class="journey-icon journey-icon-story" viewBox="0 0 96 72" focusable="false">
        <path class="journey-icon-fill" d="M25 12h40l10 10v48H25z"/>
        <path class="journey-icon-soft" d="M64 12v11h11M34 30h30M34 41h24M34 52h20"/>
        <path class="journey-icon-accent" d="M33 61c9-7 20-7 29 0"/>
      </svg>
    `,
    default: `
      <svg class="journey-icon journey-icon-default" viewBox="0 0 96 72" focusable="false">
        <path class="journey-icon-fill" d="M24 18h48v40H24z"/>
        <path class="journey-icon-accent" d="M32 36h36M48 22v28"/>
      </svg>
    `
  };
  return icons[visualId] || icons.default;
}

function makeJourneyStage(sectionId, label, detail, hover, pages, title) {
  const section = sectionById(sectionId);
  return {
    number: "",
    label,
    title: title || section.title.replace(" / ", " + "),
    section: sectionId,
    sections: [sectionId],
    detail,
    hover,
    pages: pages || [section.stage],
    visual: visualForSection(sectionId)
  };
}

function renumberJourney(stages) {
  return stages.map((stage, index) => ({
    ...stage,
    number: String(index + 1).padStart(2, "0")
  }));
}

roleJourneys.architect.stages = renumberJourney([
  makeJourneyStage("clientele", "Brief", "Capture the client brief, priorities, budget, and design values.", "Start here when the architect needs to understand what the project should become.", ["Customer info", "Priorities"]),
  makeJourneyStage("survey", "Survey", "Review parcel facts, utilities, slope, soil, and boundary conditions.", "Use this before design moves depend on site facts.", ["Parcel", "Survey"]),
  makeJourneyStage("data", "Database", "Clean project records and prepare reusable data fields and CSV outputs.", "Use this when information needs to move cleanly between tools.", ["Database", "CSV"]),
  makeJourneyStage("policy", "Policy", "Check zoning, setbacks, height, incentives, and cited policy rules.", "Use this before committing to a massing move that may conflict with code.", ["Rules", "Sources"]),
  makeJourneyStage("gis", "GIS", "Compare mapped layers, overlays, risks, views, and spatial opportunities.", "Use this when design direction depends on where something happens on the parcel.", ["GIS", "Parcel map"]),
  makeJourneyStage("design", "Design", "Develop massing, placement, openings, and the core concept model.", "Use this for the main architectural design workspace.", ["Model", "Map"]),
  makeJourneyStage("sun", "Sun", "Review daylight, glare, heat gain, shadow, and orientation effects.", "Use this when a design change affects sunlight or comfort.", ["Sun", "Daylight"]),
  makeJourneyStage("ashrae", "Sustainability", "Check material sustainability, envelope assumptions, embodied impact, and green-performance metrics.", "Use this when sustainable material decisions need to inform the design.", ["ASHRAE", "Green metrics"]),
  makeJourneyStage("lumion", "Visualize", "Review renderings, atmosphere, material appearance, and client-facing visuals.", "Use this when the design needs to be evaluated visually.", ["Renders", "Client review"]),
  makeJourneyStage("finalization", "Finalize", "Review the client brief, site facts, design decisions, open risks, and handoff notes before engineering.", "Use this when the design needs to become a clear pre-engineering package.", ["Summary", "Decisions", "Handoff"]),
  makeJourneyStage("engineering", "Coordinate", "Track engineering feedback, feasibility issues, and consultant comments.", "Use this when technical review changes the design path.", ["Engineering", "Issues"]),
  makeJourneyStage("permit", "Permit", "Check permit readiness, code conflicts, corrections, and missing items.", "Use this before preparing a submission or response.", ["Permit", "Corrections"]),
  makeJourneyStage("notes", "Notes", "Keep sketches, precedents, meeting notes, and design rationale connected.", "Use this when ideas need to become searchable project reasoning.", ["Notes", "Ideas"]),
  makeJourneyStage("archive", "Archive", "Trace AI answers, sources, decisions, and reasoning history.", "Use this when the team needs to understand why a decision was made.", ["Transcript", "Sources"]),
  makeJourneyStage("case-study", "Story", "Generate a source-linked project narrative, report, or case study.", "Use this when the project needs to be explained to another audience.", ["Report", "Case study"])
]);

roleJourneys.engineer.stages = renumberJourney([
  makeJourneyStage("finalization", "Handoff", "Review finalized project decisions, assumptions, open risks, and design evidence before technical review.", "Use this when engineering receives the project from the design team.", ["Summary", "Handoff"]),
  makeJourneyStage("survey", "Survey", "Review slope, soil, utilities, stormwater paths, and parcel conditions.", "Use this when technical feasibility depends on physical site conditions.", ["Survey", "Utilities"]),
  makeJourneyStage("gis", "GIS", "Check mapped constraints, low points, views, vegetation, and site overlays.", "Use this when engineering advice depends on location-specific conditions.", ["GIS", "Parcel"]),
  makeJourneyStage("design", "Model", "Inspect massing, height, setbacks, foundation depth, and selected elements.", "Use this to understand the design geometry creating technical risk.", ["Model", "Map"]),
  makeJourneyStage("sun", "Solar", "Review solar exposure, daylight, glare, heat gain, and shading implications.", "Use this when envelope or comfort decisions depend on solar behavior.", ["Sun", "Daylight"]),
  makeJourneyStage("ashrae", "Sustainability", "Review material sustainability, envelope risk, embodied impact, and green-performance assumptions.", "Use this when sustainability metrics should guide technical recommendations.", ["ASHRAE", "Green metrics"]),
  makeJourneyStage("engineering", "Review", "Record consultant comments, close issues, and identify required revisions.", "Use this for the main engineering coordination loop.", ["Issues", "Review"]),
  makeJourneyStage("permit", "Permit", "Connect engineering comments to permit readiness and correction items.", "Use this when engineering affects approval or resubmission.", ["Permit", "Corrections"]),
  makeJourneyStage("archive", "Archive", "Trace technical decisions, sources, and resolved comments.", "Use this when an engineering decision needs evidence.", ["Archive", "Sources"])
]);

roleJourneys.client.stages = renumberJourney([
  makeJourneyStage("clientele", "Goals", "Confirm priorities, budget comfort, style direction, and success criteria.", "Use this when the client needs to approve or revise project goals.", ["Customer info", "Priorities"]),
  makeJourneyStage("survey", "Site", "Understand parcel facts, slope, utilities, and site constraints.", "Use this when the client needs a plain-language site explanation.", ["Parcel", "Survey"]),
  makeJourneyStage("gis", "Context", "See mapped views, risks, vegetation, and site opportunities.", "Use this when a design choice depends on the site's surroundings.", ["GIS", "Map"]),
  makeJourneyStage("design", "Concept", "Review the current massing, placement, and overall design direction.", "Use this when the client is comparing options or giving design feedback.", ["Concept", "Map"]),
  makeJourneyStage("sun", "Daylight", "Review daylight, heat gain, glare, and orientation tradeoffs.", "Use this when comfort and daylight need client approval.", ["Sun", "Comfort"]),
  makeJourneyStage("lumion", "Visuals", "Review renderings, atmosphere, and client-facing visual options.", "Use this when the design needs to be understood emotionally and visually.", ["Renders", "Visuals"]),
  makeJourneyStage("finalization", "Approve", "Review the decision summary, open questions, and engineering handoff package.", "Use this when the client needs to approve the direction before engineering receives it.", ["Summary", "Decisions"]),
  makeJourneyStage("notes", "Decisions", "Review comments, open decisions, and design rationale.", "Use this when feedback needs to become a clear direction.", ["Notes", "Approvals"]),
  makeJourneyStage("case-study", "Package", "Receive the project summary, evidence, parcel data, and CSV downloads.", "Use this when the client needs a shareable package or final explanation.", ["Summary", "Downloads"])
]);

roleJourneys.planner.stages = renumberJourney([
  makeJourneyStage("data", "Intake", "Confirm project records, submitted fields, and application data.", "Use this when intake completeness needs to be checked.", ["Database", "CSV"]),
  makeJourneyStage("survey", "Parcel", "Review parcel area, boundaries, survey facts, utilities, and slope.", "Use this when policy review depends on parcel facts.", ["Survey", "Parcel"]),
  makeJourneyStage("policy", "Policy", "Verify zoning, overlays, setbacks, height limits, incentives, and citations.", "Use this when the reviewer needs to know exactly which rules apply.", ["Rules", "Sources"]),
  makeJourneyStage("gis", "Map", "Review mapped constraints, overlays, flood paths, and spatial implications.", "Use this when a decision depends on location or overlay geography.", ["GIS", "Map"]),
  makeJourneyStage("design", "Design", "Inspect the design against known regulatory and spatial constraints.", "Use this when a conflict appears in the proposed layout or massing.", ["Design", "Map"]),
  makeJourneyStage("engineering", "Technical", "Review engineering comments and feasibility notes affecting compliance.", "Use this when technical review changes approval readiness.", ["Engineering", "Issues"]),
  makeJourneyStage("permit", "Compliance", "Track permit status, corrections, missing items, and readiness.", "Use this when the planner needs to pass, fail, or return comments.", ["Permit", "Corrections"]),
  makeJourneyStage("archive", "Evidence", "Trace citations, AI checks, decisions, and source evidence.", "Use this when a planning decision needs a defensible audit trail.", ["Archive", "Sources"]),
  makeJourneyStage("case-study", "Narrative", "Generate a clear policy or review narrative from the project evidence.", "Use this when the decision needs to be explained to another audience.", ["Report", "Summary"])
]);

roleJourneys.gis.stages = renumberJourney([
  makeJourneyStage("data", "Data", "Load and clean project records, parcel fields, and CSV-ready values.", "Use this before mapping or exporting any project data.", ["Database", "CSV"]),
  makeJourneyStage("survey", "Survey", "Confirm survey facts, utilities, slope, and verified site values.", "Use this when GIS layers need a trusted survey baseline.", ["Survey", "Parcel"]),
  makeJourneyStage("gis", "Layers", "Toggle layers, compare overlays, and identify site risks or opportunities.", "Use this for the main spatial analysis workflow.", ["GIS", "Layers"]),
  makeJourneyStage("policy", "Rules", "Connect zoning, overlays, and policy rules to mapped parcel conditions.", "Use this when policy checks need map-backed evidence.", ["Policy", "Map"]),
  makeJourneyStage("design", "Design Fit", "Compare the design against parcel layers, setbacks, and mapped risks.", "Use this when geometry needs to be checked against GIS context.", ["Design", "GIS"]),
  makeJourneyStage("archive", "Evidence", "Trace map sources, decisions, and generated findings.", "Use this when spatial work needs an evidence trail.", ["Archive", "Sources"]),
  makeJourneyStage("case-study", "Export", "Prepare map findings, parcel JSON, CSV, and source-linked summary outputs.", "Use this when another user or application needs structured spatial outputs.", ["CSV", "Parcel", "Report"])
]);

roleJourneys.surveyor.stages = renumberJourney([
  makeJourneyStage("survey", "Field", "Confirm parcel measurements, utilities, slope, soil notes, and survey status.", "Use this when field data needs to become trusted project evidence.", ["Survey", "Utilities"]),
  makeJourneyStage("gis", "Boundary", "Review parcel edges, GIS alignment, mapped features, and view corridors.", "Use this when the survey needs to be checked visually against the parcel map.", ["Parcel map", "GIS"]),
  makeJourneyStage("policy", "Rules", "Connect survey facts to setbacks, easements, overlays, and buildable area.", "Use this when survey information affects rule interpretation.", ["Policy", "Setbacks"]),
  makeJourneyStage("data", "Records", "Prepare clean survey fields for the database and CSV export.", "Use this when survey data needs to be reused by design or permit tools.", ["Database", "CSV"]),
  makeJourneyStage("archive", "Deliver", "Package the verified parcel record and source-linked survey evidence.", "Use this when the surveyor needs to hand off a clean deliverable.", ["Archive", "Parcel"])
]);

roleJourneys.reviewer.label = "Reviewer";
roleJourneys.reviewer.title = "Reviewer";
roleJourneys.reviewer.intro = "Review plans against zoning, code, safety, accessibility, completeness, and submission standards.";
roleJourneys.reviewer.stages = renumberJourney([
  makeJourneyStage("data", "Intake", "Confirm application records, project data, and required attachments.", "Use this when the review package first arrives.", ["Database", "Checklist"]),
  makeJourneyStage("survey", "Parcel", "Check parcel facts, survey values, utilities, and verified conditions.", "Use this when standards review depends on survey or site facts.", ["Survey", "Parcel"]),
  makeJourneyStage("policy", "Standards", "Review zoning, overlays, code language, setbacks, and height limits.", "Use this when the design review depends on standards, rule language, or cited code.", ["Policy", "Sources"]),
  makeJourneyStage("gis", "Map", "Check mapped constraints, overlay geography, and parcel context.", "Use this when compliance findings depend on location.", ["GIS", "Map"]),
  makeJourneyStage("design", "Plans", "Inspect the submitted design against parcel, code, safety, and completeness standards.", "Use this when the drawing set itself needs to be checked.", ["Design", "Map"]),
  makeJourneyStage("engineering", "Technical", "Review engineering comments, feasibility notes, and required consultant input.", "Use this when technical feedback affects design approval.", ["Engineering", "Issues"]),
  makeJourneyStage("permit", "Corrections", "Track conflicts, correction comments, missing documents, and review status.", "Use this for the main plan-review correction workflow.", ["Corrections", "Status"]),
  makeJourneyStage("archive", "Record", "Trace evidence, citations, comments, and decision history.", "Use this when the review record needs an audit trail.", ["Archive", "Sources"]),
  makeJourneyStage("case-study", "Closeout", "Prepare the review summary, correction response, parcel JSON, and CSV export.", "Use this when the reviewed design is ready to approve, export, or return with notes.", ["Review", "Downloads"])
]);

roleJourneys.inspector.stages = renumberJourney([
  makeJourneyStage("data", "Assignment", "Confirm inspection type, project records, required documents, and current approval status.", "Use this when the inspector needs to understand what must be checked on site.", ["Database", "Permit"]),
  makeJourneyStage("survey", "Site", "Verify access, boundaries, utilities, slope, visible site conditions, and survey evidence.", "Use this when field observations need to be tied back to parcel facts.", ["Survey", "Field"]),
  makeJourneyStage("gis", "Context", "Review parcel map, mapped constraints, access routes, risk layers, and site context.", "Use this when inspection findings depend on location or mapped conditions.", ["GIS", "Parcel map"]),
  makeJourneyStage("policy", "Standards", "Check observed conditions against applicable standards, permit conditions, and cited rules.", "Use this when the inspector needs to know what passes, what fails, or what needs follow-up.", ["Standards", "Sources"]),
  makeJourneyStage("engineering", "Technical", "Review engineering notes, field issues, consultant responses, and required technical follow-up.", "Use this when site observations create technical coordination questions.", ["Engineering", "Issues"]),
  makeJourneyStage("permit", "Corrections", "Track inspection results, correction items, missing documents, and approval readiness.", "Use this when the inspection needs a pass, fail, correction, or resubmission status.", ["Corrections", "Status"]),
  makeJourneyStage("notes", "Field Notes", "Capture inspection notes, photos-to-be-linked, field observations, and unresolved questions.", "Use this when field evidence needs to become searchable project memory.", ["Notes", "Evidence"]),
  makeJourneyStage("archive", "Record", "Package inspection evidence, source trace, decision history, parcel JSON, and CSV exports.", "Use this when the inspection needs a defensible record for closeout.", ["Archive", "CSV"]),
  makeJourneyStage("case-study", "Closeout", "Prepare a concise inspection summary, correction response, and downloadable record.", "Use this when inspection results need to be shared or closed.", ["Summary", "Downloads"])
]);

const flowOrder = sections.slice(1).map(section => section.id);

function activeRoleJourney() {
  return roleJourneys[state.selectedRole] || roleJourneys.architect;
}

function activeJourneyStages() {
  return activeRoleJourney().stages;
}

function stageForSection(sectionId, stages = activeJourneyStages()) {
  return stages.find(stage => stage.sections.includes(sectionId)) || stages[0];
}

const journeyStatusOptions = [
  ["auto", "Auto"],
  ["current", "Current"],
  ["done", "Done"],
  ["open", "To do"],
  ["critical", "Critical"],
  ["recommended", "Recommended"]
];

function journeyOverrideKey(role, stage) {
  const roleKey = state.selectedRole || role.label || "role";
  return `${roleKey}:${stage.section}`;
}

function journeyOverrideFor(role, stage) {
  return state.journeyOverrides[journeyOverrideKey(role, stage)] || "auto";
}

function journeyStatusPickerMarkup(role, stage, override, autoLabel) {
  const key = journeyOverrideKey(role, stage);
  return `
    <label class="journey-status-picker ${override !== "auto" ? "manual" : ""} choice-${escapeHtml(override)}">
      <span class="status-picker-label">Your status</span>
      <span class="status-select-shell">
        <i class="status-choice-dot" aria-hidden="true"></i>
        <select data-journey-status="${escapeHtml(key)}" aria-label="User status for ${escapeHtml(stage.title)}">
          ${journeyStatusOptions.map(([value, label]) => `
            <option class="status-option option-${escapeHtml(value)}" value="${escapeHtml(value)}" ${override === value ? "selected" : ""}>
              ${escapeHtml(value === "auto" ? `Auto (${autoLabel})` : label)}
            </option>
          `).join("")}
        </select>
      </span>
    </label>
  `;
}

function bindDashboardFlow() {
  bindAuthControls();

  document.querySelectorAll("[data-role]").forEach(button => {
    button.addEventListener("click", () => {
      state.authView = null;
      state.selectedRole = button.dataset.role;
      render();
    });
  });

  document.querySelectorAll("[data-change-role]").forEach(button => {
    button.addEventListener("click", () => {
      state.authView = null;
      state.selectedRole = null;
      state.journeyOverrides = {};
      render();
    });
  });

  document.querySelectorAll("[data-journey-status]").forEach(select => {
    select.addEventListener("change", () => {
      const key = select.dataset.journeyStatus;
      const value = select.value || "auto";
      if (value === "auto") delete state.journeyOverrides[key];
      else state.journeyOverrides[key] = value;
      state.authView = null;
      render();
    });
  });

  document.querySelectorAll("[data-journey-section]").forEach(button => {
    button.addEventListener("click", () => {
      state.authView = null;
      state.activeSection = button.dataset.journeySection;
      render();
    });
  });
}

function bindAuthControls() {
  document.querySelectorAll("[data-open-auth]").forEach(button => {
    button.addEventListener("click", () => {
      state.authView = button.dataset.openAuth || "login";
      state.activeSection = "dashboard";
      render();
    });
  });

  document.querySelectorAll("[data-auth-mode]").forEach(button => {
    button.addEventListener("click", () => {
      state.authView = button.dataset.authMode || "login";
      state.activeSection = "dashboard";
      render();
    });
  });

  document.querySelectorAll("[data-join-type]").forEach(button => {
    button.addEventListener("click", () => {
      state.joinType = button.dataset.joinType || "freelance";
      state.authView = "signup";
      render();
    });
  });

  document.querySelectorAll("[data-close-auth]").forEach(button => {
    button.addEventListener("click", () => {
      state.authView = null;
      state.activeSection = "dashboard";
      state.selectedRole = null;
      render();
    });
  });
}

function renderSection() {
  const section = sectionById(state.activeSection);
  el.activeSectionTitle.textContent = section.title;
  el.activeSectionDescription.textContent = section.desc;
  el.sectionBadge.textContent = section.stage;

  const project = state.project;
  const dynamic = project ? [
    {
      title: "Process Goal",
      items: [section.goal]
    },
    {
      title: "User Steps",
      items: section.actions
    },
    {
      title: "AI Role",
      items: section.ai
    }
  ] : [];

  if (state.activeSection === "dashboard" && project) {
    dynamic.push({
      title: "Current Alerts",
      items: [
        `Front distance: ${project.designModel.frontDistanceFt} ft against 20 ft rule`,
        `Model height: ${project.designModel.heightFt} ft against 35 ft rule`,
        `Glazing: ${project.designModel.southGlazingPercent}% south facade`
      ]
    });
  }

  el.sectionDetails.innerHTML = dynamic.map(card => `
    <div class="section-card">
      <h3>${escapeHtml(card.title)}</h3>
      <ul>
        ${card.items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </div>
  `).join("");
}

function renderIntegrations() {
  const project = state.project;
  if (!project) return;
  el.integrations.innerHTML = project.integrations.map(item => `
    <div class="integration-card">
      <strong><span class="status-dot"></span>${escapeHtml(item.name)}</strong>
      <p>${escapeHtml(item.purpose)}</p>
      <p class="mini-label">${escapeHtml(item.status)}</p>
    </div>
  `).join("");
}

function designSurface() {
  return `
    <div class="parcel">
      <div class="gis-layer flood-layer">Stormwater path</div>
      <div class="gis-layer view-layer">View corridor</div>
      <div class="setback setback-front">20 ft front setback</div>
      <div class="setback setback-side">10 ft side setback</div>
      <div class="building" id="buildingMass">
        <div class="building-roof"></div>
        <div class="window-row"></div>
        <div class="window-row small"></div>
        <div class="element-label">Concept Massing V4</div>
      </div>
      <div class="sun-arc">Sun path</div>
      <div id="annotationLayer" class="annotation-layer"></div>
    </div>
  `;
}

function dashboardSurface(project) {
  return journeySurface(project);
  const currentId = sectionIdFromTitle(project.project.currentSection) || "design";
  const lastCompletedId = sectionIdFromTitle(project.project.lastCompleted);
  const lastCompletedIndex = flowOrder.indexOf(lastCompletedId);
  const recommendedIds = latestRecommendedSectionIds(project);
  const currentPriority = priorityForSection(project, currentId, recommendedIds);
  const currentIsRecommended = recommendedIds.includes(currentId);
  const primaryRecommendation = currentIsRecommended ? currentId : recommendedIds[0] || currentId;
  const primarySection = sectionById(primaryRecommendation);

  return `
    <div class="surface-pad dashboard-flow">
      <div class="home-flow-hero">
        <span class="kicker">Human-centered project route</span>
        <h1>Project flow guide.</h1>
        <p>Hover over a step to see when to use it. Click a step to enter that page.</p>
      </div>
      <div class="flow-main">
        <div class="flow-head">
          <div>
            <span class="mini-label">Flow guide</span>
            <h3>${escapeHtml(currentIsRecommended ? "You are in the right step." : `Recommended now: ${primarySection.title}`)}</h3>
            <div class="flow-now-ribbon ${escapeHtml(currentPriority.level)}">
              <strong>${escapeHtml(sectionById(currentId).title)}</strong>
              <span>${escapeHtml(currentIsRecommended ? "Current active page" : `Open ${primarySection.title} next`)} | ${escapeHtml(currentPriority.label)}</span>
            </div>
          </div>
          <div class="flow-legend">
            <span><i class="legend-dot done"></i>Done</span>
            <span><i class="legend-dot current"></i>Current</span>
            <span><i class="legend-dot recommended"></i>Recommended</span>
            <span><i class="legend-dot critical"></i>Critical</span>
          </div>
        </div>

        <div class="flow-lanes">
          ${flowLanes.map(lane => `
            <div class="flow-lane">
              <div class="flow-lane-label">${escapeHtml(lane.label)}</div>
              <div class="flow-row" style="grid-template-columns:repeat(${lane.ids.length}, minmax(98px, 1fr))">
                ${lane.ids.map(id => {
                  const section = sectionById(id);
                  const flowIndex = flowOrder.indexOf(id);
                  const priority = priorityForSection(project, id, recommendedIds);
                  const isCurrent = id === currentId;
                  const isRecommended = recommendedIds.includes(id);
                  const isDone = lastCompletedIndex >= 0 && flowIndex <= lastCompletedIndex && !isCurrent;
                  const statusClass = isCurrent ? "current" : isDone ? "done" : "open";
                  const hoverText = journeyHoverText(id, priority, isCurrent, isRecommended);
                  return `
                    <button class="flow-node ${statusClass} ${priority.level} ${isRecommended ? "recommended" : ""}" data-flow-section="${escapeHtml(id)}">
                      <span class="flow-node-index">${String(flowIndex + 1).padStart(2, "0")}</span>
                      <strong>${escapeHtml(section.title.replace(" / ", " + "))}</strong>
                      <small>${escapeHtml(section.stage)}</small>
                      <span class="flow-priority ${escapeHtml(priority.level)}">${escapeHtml(isCurrent ? `Now: ${priority.label}` : priority.label)}</span>
                      <span class="flow-hover-note">${escapeHtml(hoverText)}</span>
                      <span class="flow-open-label">Enter page</span>
                    </button>
                  `;
                }).join("")}
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <div id="annotationLayer" class="annotation-layer"></div>
    </div>
  `;
}

function authActionsMarkup(showJourneyLink = false) {
  return `
    <div class="entry-actions" aria-label="Account actions">
      ${showJourneyLink ? `<button class="entry-link" data-close-auth="true">Project guide</button>` : ""}
      <button class="entry-login" data-open-auth="login">Log in</button>
    </div>
  `;
}

function joinPathIcon(pathId) {
  const icons = {
    freelance: `
      <svg class="join-icon" viewBox="0 0 72 56" focusable="false">
        <path d="M15 44h42M21 18h30v26H21z" />
        <path d="M27 25h18M27 33h14" />
        <path class="accent" d="m49 20 8-8 4 4-8 8-6 2z" />
      </svg>
    `,
    company: `
      <svg class="join-icon" viewBox="0 0 72 56" focusable="false">
        <path d="M16 46h42M22 14h28v32H22zM50 26h8v20" />
        <path d="M28 22h5M39 22h5M28 31h5M39 31h5M28 40h5M39 40h5" />
        <path class="accent" d="M20 14h32" />
      </svg>
    `,
    invite: `
      <svg class="join-icon" viewBox="0 0 72 56" focusable="false">
        <path d="M15 19h42v28H15z" />
        <path d="m16 20 20 16 20-16" />
        <path class="accent" d="M49 11h8v8M57 11 43 25" />
      </svg>
    `
  };
  return icons[pathId] || icons.freelance;
}

function signupFieldsMarkup(path) {
  return path.fields.map((field, index) => `
    <label class="signup-field">
      <span>${escapeHtml(field)}</span>
      <input type="text" ${index === 0 ? "autofocus" : ""} placeholder="${escapeHtml(field)}">
    </label>
  `).join("");
}

function authSurface() {
  const mode = state.authView || "login";
  const activePath = joinPaths[state.joinType] || joinPaths.freelance;
  const isSignup = mode === "signup";

  return `
    <div class="surface-pad dashboard-flow auth-home ${isSignup ? "signup-mode" : "login-mode"}">
      ${authActionsMarkup(true)}
      <div class="auth-shell">
        <section class="auth-intro">
          <span class="journey-eyebrow">${isSignup ? "Create access" : "Project access"}</span>
          <h1>${isSignup ? "Join the workspace." : "Log in."}</h1>
          <p>${isSignup
            ? "Choose how this person is entering the project, then collect the details needed to route them into the right workspace."
            : "Return to a project workspace, or create access for a new collaborator."}</p>
        </section>

        <section class="auth-panel">
          <div class="auth-tabs" role="tablist" aria-label="Account mode">
            <button class="${!isSignup ? "active" : ""}" data-auth-mode="login">Log in</button>
            <button class="${isSignup ? "active" : ""}" data-auth-mode="signup">Sign up</button>
          </div>

          ${isSignup ? `
            <div class="join-path-grid" aria-label="Choose account path">
              ${joinPathOrder.map(id => {
                const path = joinPaths[id];
                const active = state.joinType === id ? "active" : "";
                return `
                  <button class="join-path-card ${active}" data-join-type="${escapeHtml(id)}">
                    ${joinPathIcon(id)}
                    <span>${escapeHtml(path.label)}</span>
                    <strong>${escapeHtml(path.title)}</strong>
                    <p>${escapeHtml(path.detail)}</p>
                  </button>
                `;
              }).join("")}
            </div>

            <form class="signup-form" aria-label="Signup details">
              <div>
                <span class="mini-label">Selected path</span>
                <h3>${escapeHtml(activePath.label)}</h3>
              </div>
              ${signupFieldsMarkup(activePath)}
              <button type="button" class="primary-button full" data-close-auth="true">Continue to role selection</button>
            </form>
          ` : `
            <form class="login-form" aria-label="Login details">
              <label class="signup-field">
                <span>Email</span>
                <input type="email" placeholder="name@example.com" autofocus>
              </label>
              <label class="signup-field">
                <span>Password</span>
                <input type="password" placeholder="Password">
              </label>
              <button type="button" class="primary-button full" data-close-auth="true">Continue</button>
              <button type="button" class="auth-switch" data-auth-mode="signup">Create account</button>
            </form>
          `}
        </section>
      </div>

      <div id="annotationLayer" class="annotation-layer"></div>
    </div>
  `;
}

function roleSelectionSurface() {
  const aboutDescription = "Every role enters one connected system with the right steps, tools, and decisions in one place.";
  return `
    <div class="surface-pad dashboard-flow role-home">
      ${authActionsMarkup()}
      <div class="role-shell">
        <header class="role-home-header">
          <span class="journey-eyebrow">Start with the user</span>
          <h1>Select your workflow.</h1>
        </header>

        <div class="role-grid" aria-label="Choose role">
          ${roleOrder.map(id => {
            const role = roleJourneys[id];
            return `
            <button class="role-card role-${escapeHtml(id)}" data-role="${escapeHtml(id)}">
              <span class="role-visual role-symbol-${escapeHtml(id)}" aria-hidden="true">${roleIcon(id)}</span>
              <span class="role-name">${escapeHtml(role.impact || role.label)}</span>
              <strong>${escapeHtml(role.title)}</strong>
              <p>${escapeHtml(role.intro)}</p>
              ${roleMiniJourney(role)}
            </button>
          `;
          }).join("")}
          <div class="role-card role-about-card" aria-label="About the workflow">
            <span class="role-name">About the workflow</span>
            <strong>One System</strong>
            <div class="about-statement" aria-label="${escapeHtml(aboutDescription)}">
              <span class="about-line about-soft">Every role enters</span>
              <span class="about-line about-focus">one connected system</span>
              <span class="about-line about-soft">with the right <em>steps</em>, <em>tools</em>,</span>
              <span class="about-line about-close">and <em>decisions</em> in one place.</span>
            </div>
          </div>
        </div>
      </div>

      <div id="annotationLayer" class="annotation-layer"></div>
    </div>
  `;
}

function journeySurface(project) {
  if (state.authView) return authSurface();
  if (!state.selectedRole) return roleSelectionSurface();

  const role = activeRoleJourney();
  const stages = activeJourneyStages();
  const manualCurrentStage = stages.find(stage => journeyOverrideFor(role, stage) === "current");
  const currentId = manualCurrentStage ? manualCurrentStage.section : sectionIdFromTitle(project.project.currentSection) || "design";
  const lastCompletedId = sectionIdFromTitle(project.project.lastCompleted);
  const lastCompletedStageIndex = stages.indexOf(stageForSection(lastCompletedId, stages));
  const recommendedIds = latestRecommendedSectionIds(project);
  const currentIsRecommended = recommendedIds.includes(currentId);
  const primaryRecommendation = currentIsRecommended ? currentId : recommendedIds[0] || currentId;
  const primaryStage = stageForSection(primaryRecommendation, stages);
  const currentStage = stageForSection(currentId, stages);

  return `
    <div class="surface-pad dashboard-flow journey-home">
      ${authActionsMarkup()}
      <div class="journey-shell">
        <header class="journey-home-header">
          <div>
            <span class="journey-eyebrow">${escapeHtml(role.impact || role.label)}</span>
            <h1>${escapeHtml(role.title)}.</h1>
            <p>${escapeHtml(role.intro)} Hover over a box to see when to use it, then click to enter that page.</p>
          </div>
          <div class="journey-recommendation">
            <span>Recommended now</span>
            <strong>${escapeHtml(currentIsRecommended ? currentStage.title : primaryStage.title)}</strong>
            <p>${escapeHtml(currentIsRecommended
              ? "You are already in the active phase. Continue resolving the current project checks."
              : `Open ${primaryStage.title} because it has the strongest unresolved dependency.`)}
            </p>
            <button class="change-role-button" data-change-role="true">Change role</button>
          </div>
        </header>

        <div class="journey-path" style="grid-template-columns: repeat(${Math.min(stages.length, 4)}, minmax(330px, 1fr))" aria-label="Project flow steps">
          ${stages.map((stage, index) => {
            const override = journeyOverrideFor(role, stage);
            const hasManualStatus = override !== "auto";
            const isAutoCurrent = stage.sections.includes(currentId);
            const isAutoRecommended = stage.sections.some(id => recommendedIds.includes(id));
            const hasCritical = stage.sections.some(id => priorityForSection(project, id, recommendedIds).level === "critical");
            const hasHigh = stage.sections.some(id => priorityForSection(project, id, recommendedIds).level === "high");
            const autoStatus = isAutoCurrent ? "current" : lastCompletedStageIndex >= 0 && index <= lastCompletedStageIndex ? "done" : "open";
            const autoPriority = hasCritical ? "critical" : hasHigh ? "high" : isAutoRecommended ? "recommended" : "normal";
            const autoLabel = isAutoCurrent ? "Current" : autoStatus === "done" ? "Done" : isAutoRecommended ? "Recommended" : autoPriority === "critical" ? "Critical" : "To do";
            const status = hasManualStatus ? ["current", "done", "open"].includes(override) ? override : "open" : autoStatus;
            const priority = hasManualStatus
              ? override === "critical" ? "critical" : override === "recommended" ? "recommended" : "normal"
              : autoPriority;
            const isRecommended = priority === "recommended";
            const statusLabel = hasManualStatus
              ? `User: ${journeyStatusOptions.find(([value]) => value === override)?.[1] || autoLabel}`
              : autoLabel;
            const rowEnd = (index + 1) % 4 === 0 || index === stages.length - 1;
            return `
              <div class="journey-step-wrap ${rowEnd ? "row-end" : ""}">
                <button class="journey-step ${status} ${priority} ${isRecommended ? "recommended" : ""} ${isAutoRecommended ? "ai-recommended" : ""} ${hasManualStatus ? "manual" : ""}" data-journey-section="${escapeHtml(stage.section)}">
                  <span class="journey-step-top">
                    <span class="journey-number">${escapeHtml(stage.number)}</span>
                    <span class="journey-step-flags">
                      ${isAutoRecommended ? `<span class="journey-ai-flag">AI rec</span>` : ""}
                      <span class="journey-status">${escapeHtml(statusLabel)}</span>
                    </span>
                  </span>
                  <span class="journey-visual visual-${escapeHtml(stage.visual || visualForSection(stage.section))}" aria-hidden="true">${journeyIcon(stage.visual || visualForSection(stage.section))}</span>
                  <span class="journey-label">${escapeHtml(stage.label)}</span>
                  <strong>${escapeHtml(stage.title)}</strong>
                  <span class="journey-detail">${escapeHtml(stage.detail)}</span>
                  <span class="journey-hover">${escapeHtml(stage.hover)}</span>
                  <span class="journey-pages">
                    ${stage.pages.map(page => `<em>${escapeHtml(page)}</em>`).join("")}
                  </span>
                </button>
                <div class="journey-status-controls">
                  ${journeyStatusPickerMarkup(role, stage, override, autoLabel)}
                </div>
              </div>
            `;
          }).join("")}
        </div>

        <div class="journey-footnote">
          <span><i class="legend-dot current"></i>Current phase</span>
          <span><i class="legend-dot recommended"></i>Recommended next</span>
          <span><i class="legend-dot critical"></i>Needs attention</span>
          <span><i class="legend-dot manual"></i>Override available</span>
        </div>
      </div>

      <div id="annotationLayer" class="annotation-layer"></div>
    </div>
  `;
}

function projectMapMarkup(project) {
  return `
    <div class="parcel simple-map-parcel">
      <div class="gis-layer flood-layer">Stormwater path</div>
      <div class="gis-layer view-layer">View corridor</div>
      <div class="gis-layer vegetation-layer">Tree buffer</div>
      <div class="setback setback-front">20 ft front setback</div>
      <div class="setback setback-side">10 ft side setback</div>
      <div class="building" id="buildingMass">
        <div class="building-roof"></div>
        <div class="window-row"></div>
        <div class="window-row small"></div>
        <div class="element-label">${escapeHtml(project.designModel.name)}</div>
      </div>
      <div class="sun-arc">Sun path</div>
      <div id="annotationLayer" class="annotation-layer"></div>
    </div>
  `;
}

function projectDatabaseRows(project) {
  return [
    ["Parcel", `${project.site.parcelAreaSqFt.toLocaleString()} sq ft`, project.site.verificationStatus],
    ["Slope", `${project.site.averageSlopePercent}% toward ${project.site.slopeDirection}`, "verified"],
    ["Utilities", project.site.utilities.join(", "), "verified"],
    ["Rules", `${project.verifiedRules.length} zoning/policy records`, "mixed"],
    ["GIS layers", `${project.gisLayers.length} active overlays`, "active"],
    ["Model", project.designModel.name, "current"]
  ];
}

function finalizationDecisionRows(project) {
  const front = project.verifiedRules.find(rule => rule.ruleType === "front_setback");
  const height = project.verifiedRules.find(rule => rule.ruleType === "height_limit");
  const priorities = project.clientIntent.priorities
    .slice(0, 3)
    .map(item => `${item.label} (${item.weight})`)
    .join(", ");

  return [
    ["Client direction", priorities || project.clientIntent.summary, "approved"],
    ["Site basis", `${project.site.parcelAreaSqFt.toLocaleString()} sq ft parcel, ${project.site.averageSlopePercent}% slope toward ${project.site.slopeDirection}`, project.site.verificationStatus],
    ["Design model", `${project.designModel.name}: ${project.designModel.heightFt} ft high, ${project.designModel.frontDistanceFt} ft from front line`, "current"],
    ["Policy basis", `${front ? `${front.value} ft front setback` : "Front setback pending"}; ${height ? `${height.value} ft height limit` : "Height limit pending"}`, "source linked"],
    ["Performance basis", `${project.analysisResults.sunStudy.daylightScore} daylight, +${project.analysisResults.ashrae.coolingImpactPercent}% cooling impact`, "needs review"],
    ["Handoff package", "Client brief, survey facts, GIS layers, policy citations, design model, Lumion views, parcel JSON, and project CSV", "ready"]
  ];
}

function finalizationHandoffMarkup(project) {
  const risks = projectFlowIssues(project);
  return `
    <section class="simple-card finalization-card">
      <span class="mini-label">Engineering handoff</span>
      <h3>Decision package</h3>
      <div class="handoff-summary-list">
        ${finalizationDecisionRows(project).map(row => `
          <div>
            <strong>${escapeHtml(row[0])}</strong>
            <span>${escapeHtml(row[1])}</span>
            <em>${escapeHtml(row[2])}</em>
          </div>
        `).join("")}
      </div>
      <div class="handoff-risk-panel">
        <span class="mini-label">Open before engineering</span>
        ${risks.length ? risks.map(risk => `
          <p><strong>${escapeHtml(risk.label)}:</strong> ${escapeHtml(risk.text)}</p>
        `).join("") : "<p><strong>No open conflicts:</strong> ready for technical coordination.</p>"}
      </div>
    </section>
  `;
}

function surveyUploadItems() {
  return [
    ["Boundary survey", "Required", "Verified parcel limits and bearings"],
    ["Topographic survey", "Required", "Contours, elevations, spot grades, and slope logic"],
    ["Utility locate", "Required", "Water, stormwater, electrical, sewer, gas, and service entries"],
    ["Easement exhibit", "Review", "Access, drainage, utility, and conservation restrictions"],
    ["Existing structures", "Review", "Demolition, reuse, clearance, and conflict documentation"],
    ["Tree / vegetation survey", "Optional", "Protected trees, buffers, canopy, and landscape assets"],
    ["Drainage notes", "Required", "Runoff direction, low points, swales, and flooding observations"],
    ["Site photos / field notes", "Required", "On-site observations, access issues, and visual evidence"]
  ];
}

function siteConstraintItems(project) {
  const front = project.verifiedRules.find(rule => rule.ruleType === "front_setback");
  const side = project.verifiedRules.find(rule => rule.ruleType === "side_setback");
  const height = project.verifiedRules.find(rule => rule.ruleType === "height_limit");
  return [
    ["Setbacks", front && side ? `${front.value} ft front / ${side.value} ft side` : "Needs zoning confirmation", "source linked"],
    ["Slope limits", `${project.site.averageSlopePercent}% average slope toward ${project.site.slopeDirection}`, "verified"],
    ["Flood risk", project.gisLayers.find(layer => layer.id.includes("flood"))?.finding || "No flood layer loaded", "GIS"],
    ["Utility conflicts", project.site.utilities.join(", "), "field check"],
    ["Height", height ? `${height.value} ft limit before variance` : "Needs zoning confirmation", "source linked"],
    ["Soil/geotechnical", project.site.soilNote, "needs engineer"]
  ];
}

function siteOpportunityItems(project) {
  return [
    ["Building placement", "Use the verified slope and stormwater path to avoid placing the primary mass in the low western flow area."],
    ["Solar orientation", "Southwest orientation supports daylight goals but should be paired with shading and envelope review."],
    ["Views to preserve", project.gisLayers.find(layer => layer.id.includes("views"))?.finding || "View layer pending."],
    ["Natural ventilation", "Tree line and open edges can be studied for seasonal wind buffering and cross-ventilation."],
    ["Landscape strategy", project.gisLayers.find(layer => layer.id.includes("vegetation"))?.finding || "Vegetation layer pending."],
    ["Stormwater reuse", "Rainwater and landscape systems can connect client sustainability goals to hydrology findings."]
  ];
}

function surveyEvidenceRegister(project) {
  return [
    ["Survey dataset", "Land Surveyor", project.site.verificationStatus, `Parcel area ${project.site.parcelAreaSqFt.toLocaleString()} sq ft`],
    ["Utility review", "Surveyor / civil", "verified", project.site.utilities.join(", ")],
    ...project.gisLayers.map(layer => [layer.name, "GIS Analyst", layer.status, layer.finding]),
    ...project.verifiedRules.slice(0, 3).map(rule => [rule.section, rule.verifiedBy || "Reviewer", rule.verificationStatus, rule.exactText])
  ];
}

function siteQuestionAnswerRows(project) {
  return [
    ["What matters most?", "Slope, stormwater movement, utilities, view corridor, vegetation, and setback/height rules are the major early decision drivers."],
    ["What risks should be noticed?", "Front setback, height limit, stormwater flow path, slope-driven foundation cost, and unknown geotechnical assumptions."],
    ["What opportunities influence design?", "Landscape integration, daylight orientation, west/southwest views, passive design, and rainwater-supported planting."],
    ["What is missing?", "Detailed geotechnical report, final utility capacity, easement confirmation, and surveyor-reviewed drainage documentation."],
    ["What can be decided now?", "Initial site response, likely placement zones, information gaps, and which constraints must be protected in concept design."],
    ["What should wait?", "Foundation strategy, final grading, exact service entry design, and permit-ready compliance claims."]
  ];
}

function siteSurveySurface(project) {
  const survey = state.siteSurvey;
  const fields = survey.fields;
  const assistantFindings = siteSurveyAssistantFindings(survey);

  return `
    <div class="surface-pad site-survey-workspace">
      <header class="site-survey-hero">
        <button class="journey-link" data-section="dashboard">Back to flow</button>
        <div>
          <span class="mini-label">Site intelligence module</span>
          <h3>Site + Survey Intelligence</h3>
          <p>Collect, verify, organize, and interpret site evidence so survey, GIS, utilities, environmental conditions, risks, and opportunities become usable project memory.</p>
        </div>
        <div class="site-output-card">
          <span>Output</span>
          <strong>Site Intelligence Package</strong>
          <p>Survey facts, GIS layers, environmental conditions, constraints, opportunities, missing information, and recommended next actions.</p>
        </div>
      </header>

      <section class="site-survey-section site-intake-panel">
        <div>
          <span class="mini-label">1. Site intake</span>
          <h3>Project Location Foundation</h3>
          <p>Basic location and ownership information anchors every survey, GIS, code, and design decision that follows.</p>
        </div>
        <div class="site-intake-grid">
          ${siteFieldInput("projectName", "Project name")}
          ${siteFieldInput("parcelAddress", "Parcel / address")}
          ${siteFieldInput("siteSize", "Site size")}
          ${siteFieldInput("ownerClient", "Property owner / client")}
          ${siteFieldInput("projectType", "Project type")}
          ${siteFieldInput("currentLandUse", "Current land use")}
          ${siteFieldInput("desiredFutureUse", "Desired future use")}
          ${siteFieldTextarea("architectNotes", "Architect / client notes")}
        </div>
      </section>

      <section class="site-survey-section survey-upload-panel">
        <div class="survey-section-head">
          <div>
            <span class="mini-label">2. Survey upload</span>
            <h3>Evidence Intake</h3>
            <p>Surveyor and project team upload the source material that gives later AI interpretations a traceable basis.</p>
          </div>
          <label class="site-upload-control">
            <span>Upload survey evidence</span>
            <input type="file" multiple data-site-upload>
          </label>
        </div>
        <div class="site-intake-grid">
          ${siteFieldSelect("uploadDocumentType", "Document type for upload", siteDocumentTypeOptions)}
          ${siteFieldInput("uploadOtherDocumentType", "Other document type")}
          ${siteFieldInput("uploadSourceName", "Source / document name")}
          ${siteFieldInput("uploadUploadedBy", "Uploaded by")}
          ${siteFieldSelect("uploadVerificationStatus", "Verification status", siteVerificationStatusOptions)}
        </div>
        ${survey.uploads.length ? `
          <div class="uploaded-evidence-list uploaded-evidence-cards">
            ${survey.uploads.map((file, index) => `
              <article>
                ${siteRowInput("uploads", index, "name", file.name || "", "File / source name")}
                ${siteRowInput("uploads", index, "type", file.type || "file", "File type")}
                ${siteRowInput("uploads", index, "uploadedBy", file.uploadedBy || "", "Uploaded by")}
                ${siteSourceControls("uploads", index, file)}
                <p>${escapeHtml(file.size ? `${file.size} bytes` : "Metadata saved. Browser file content is not retained after upload.")}</p>
              </article>
            `).join("")}
          </div>
        ` : ""}
        <div class="survey-upload-grid">
          ${surveyUploadItems().map(item => `
            <article>
              <strong>${escapeHtml(item[0])}</strong>
              <span>${escapeHtml(item[1])}</span>
              <p>${escapeHtml(item[2])}</p>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="site-survey-section surveyor-verification-panel">
        <div>
          <span class="mini-label">3. Land surveyor verification</span>
          <h3>Human Verification + Elevation Form</h3>
          <p>The surveyor can enter field-confirmed information, source confidence, benchmark datum, elevation range, contours, and site notes before the AI treats them as design inputs.</p>
        </div>
        <div class="site-intake-grid">
          ${siteFieldInput("surveyorName", "Surveyor name")}
          ${siteFieldInput("surveyorCompany", "Company / license")}
          ${siteFieldInput("surveyDate", "Survey date", "date")}
          ${siteFieldInput("verifiedBy", "Verified by")}
          ${siteFieldSelect("sourceConfidence", "Source confidence", sourceConfidenceOptions)}
          ${siteFieldInput("benchmarkDatum", "Benchmark datum")}
          ${siteFieldInput("minElevation", "Minimum elevation")}
          ${siteFieldInput("maxElevation", "Maximum elevation")}
          ${siteFieldInput("contourInterval", "Contour interval")}
          ${siteFieldInput("averageSlope", "Average slope")}
          ${siteFieldInput("slopeDirection", "Slope direction")}
          ${siteFieldTextarea("spotElevations", "Spot elevations / field notes")}
          ${siteFieldTextarea("existingStructures", "Existing structures")}
          ${siteFieldTextarea("accessNotes", "Access notes")}
          ${siteFieldTextarea("easementNotes", "Easements / encumbrances")}
          ${siteFieldTextarea("drainageNotes", "Drainage / hydrology notes")}
        </div>
      </section>

      <section class="site-survey-section gis-context-panel">
        <div class="survey-section-head">
          <div>
            <span class="mini-label">4. GIS + policy lookup</span>
            <h3>Parcel + Spatial Conditions</h3>
            <p>Connect the surveyed parcel to zoning, floodplain, soils, slope, hydrology, transportation, and adjacent land-use context.</p>
          </div>
          <div class="map-status">${escapeHtml(project.site.verifiedBy)} verified</div>
        </div>
        <div class="site-intake-grid">
          ${siteFieldInput("addressLookup", "Lookup address")}
          ${siteFieldInput("parcelApn", "Parcel / APN")}
          ${siteFieldInput("jurisdiction", "Jurisdiction")}
          ${siteFieldInput("zoningDistrict", "Zoning district")}
          ${siteFieldTextarea("overlays", "Known overlays")}
          ${siteFieldInput("policySourceUrl", "Policy source URL / reference")}
          ${siteFieldSelect("policyLookupStatus", "Lookup status", siteVerificationStatusOptions)}
          ${siteFieldInput("lastPolicyCheck", "Last policy check", "date")}
        </div>
        <div class="site-section-actions">
          <button class="add-row-button" data-policy-lookup-create>Create Lookup Record From Address</button>
          <button class="add-row-button" data-add-site-row="policyLookups">Add Custom Policy Record</button>
        </div>
        <div class="site-ai-question-grid policy-record-grid">
          ${survey.policyLookups.map((item, index) => `
            <article>
              ${siteRowInput("policyLookups", index, "name", item.name || "", "Policy / lookup name")}
              ${siteRowInput("policyLookups", index, "address", item.address || "", "Address")}
              ${siteRowInput("policyLookups", index, "jurisdiction", item.jurisdiction || "", "Jurisdiction")}
              ${siteRowTextarea("policyLookups", index, "result", item.result || "", "Lookup result / rule found")}
              ${siteRowSelect("policyLookups", index, "sourceName", item.sourceName || "Manual reviewer entry", "Lookup source type", policySourceOptions)}
              ${siteRowInput("policyLookups", index, "sourceUrl", item.sourceUrl || "", "Source URL / citation")}
              ${siteSourceControls("policyLookups", index, item)}
            </article>
          `).join("")}
        </div>
        <div class="site-map-grid">
          <div class="simple-map-wrap">
            ${projectMapMarkup(project)}
          </div>
          <div class="site-layer-stack">
            ${project.gisLayers.map(layer => `
              <article>
                <span><i class="status-dot"></i>${escapeHtml(layer.status)}</span>
                <strong>${escapeHtml(layer.name)}</strong>
                <p>${escapeHtml(layer.finding)}</p>
              </article>
            `).join("")}
            <article>
              <span><i class="status-dot"></i>verified</span>
              <strong>Slope + topography</strong>
              <p>${escapeHtml(project.site.averageSlopePercent)}% average slope toward ${escapeHtml(project.site.slopeDirection)}.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="site-survey-section environmental-panel">
        <div class="survey-section-head">
          <div>
            <span class="mini-label">5. Environmental conditions</span>
            <h3>Physical Site Behavior</h3>
            <p>Record sun, wind, hydrology, vegetation, climate, views, noise, and other environmental conditions with source type and verification status.</p>
          </div>
          <button class="add-row-button" data-add-site-row="environmental">Add Custom Condition</button>
        </div>
        <div class="environment-grid">
          ${survey.environmental.map((item, index) => `
            <article>
              ${siteRowInput("environmental", index, "name", item.name || "", "Condition")}
              ${siteRowTextarea("environmental", index, "value", item.value || "", "Finding")}
              ${siteSourceControls("environmental", index, item)}
            </article>
          `).join("")}
        </div>
      </section>

      <section class="site-survey-section utilities-panel">
        <div class="survey-section-head">
          <div>
            <span class="mini-label">6. Utility + infrastructure review</span>
            <h3>Existing Service Conditions</h3>
            <p>Track water, sewer, power, data, fire access, service entries, and any infrastructure uncertainty the surveyor or civil team must verify.</p>
          </div>
          <button class="add-row-button" data-add-site-row="utilities">Add Custom Utility</button>
        </div>
        <div class="utility-review-grid">
          ${survey.utilities.map((item, index) => `
            <div>
              ${siteRowInput("utilities", index, "name", item.name || "", "Utility / infrastructure item")}
              ${siteRowInput("utilities", index, "value", item.value || "", "Finding")}
              ${siteSourceControls("utilities", index, item)}
            </div>
          `).join("")}
        </div>
      </section>

      <section class="site-survey-section hazards-panel">
        <div class="survey-section-head">
          <div>
            <span class="mini-label">7. Site hazards + risk register</span>
            <h3>Verified Risk Watchlist</h3>
            <p>Hazards become project memory so the AI can monitor them during design, policy review, engineering, and handoff.</p>
          </div>
          <button class="add-row-button" data-add-site-row="hazards">Add Custom Hazard</button>
        </div>
        <div class="site-ai-question-grid hazard-record-grid">
          ${survey.hazards.map((item, index) => `
            <article>
              ${siteRowInput("hazards", index, "name", item.name || "", "Hazard")}
              ${siteRowTextarea("hazards", index, "value", item.value || "", "Site impact / design concern")}
              ${siteSourceControls("hazards", index, item)}
            </article>
          `).join("")}
        </div>
      </section>

      <section class="site-survey-section sensor-panel">
        <div class="survey-section-head">
          <div>
            <span class="mini-label">8. Sensor / IoT updates</span>
            <h3>Field Readings + Live Update Records</h3>
            <p>Use this for real-time sensor feeds later, or manual readings now. Each reading stores type, location, value, timestamp, and verification status.</p>
          </div>
          <button class="add-row-button" data-add-site-row="sensors">Add Sensor Reading</button>
        </div>
        <div class="site-ai-question-grid sensor-record-grid">
          ${survey.sensors.map((item, index) => `
            <article>
              ${siteRowInput("sensors", index, "name", item.name || "", "Sensor / reading name")}
              ${siteRowSelect("sensors", index, "sensorType", item.sensorType || "Other", "Sensor type", sensorTypeOptions)}
              ${siteRowInput("sensors", index, "location", item.location || "", "Location")}
              ${siteRowInput("sensors", index, "latestReading", item.latestReading || "", "Latest reading")}
              ${siteRowInput("sensors", index, "unit", item.unit || "", "Unit")}
              ${siteRowInput("sensors", index, "timestamp", item.timestamp || "", "Timestamp", "datetime-local")}
              ${siteRowSelect("sensors", index, "status", item.status || "needs review", "Reading status", siteVerificationStatusOptions)}
              ${siteRowInput("sensors", index, "sourceName", item.sourceName || "", "Source / sensor feed")}
            </article>
          `).join("")}
        </div>
      </section>

      <section class="site-survey-section constraint-opportunity-panel">
        <div>
          <div class="survey-section-head compact-head">
            <div>
              <span class="mini-label">9. Site constraints</span>
              <h3>Design Limits</h3>
            </div>
            <button class="add-row-button" data-add-site-row="constraints">Add Constraint</button>
          </div>
          <div class="constraint-list">
            ${survey.constraints.map((item, index) => `
              <article>
                ${siteRowInput("constraints", index, "name", item.name || "", "Constraint")}
                ${siteRowTextarea("constraints", index, "value", item.value || "", "Rule / design limit")}
                ${siteSourceControls("constraints", index, item)}
              </article>
            `).join("")}
          </div>
        </div>
        <div>
          <div class="survey-section-head compact-head">
            <div>
              <span class="mini-label">10. Site opportunities</span>
              <h3>Design Possibilities</h3>
            </div>
            <button class="add-row-button" data-add-site-row="opportunities">Add Opportunity</button>
          </div>
          <div class="opportunity-list">
            ${survey.opportunities.map((item, index) => `
              <article>
                ${siteRowInput("opportunities", index, "name", item.name || "", "Opportunity")}
                ${siteRowTextarea("opportunities", index, "value", item.value || "", "Design implication")}
                ${siteSourceControls("opportunities", index, item)}
              </article>
            `).join("")}
          </div>
        </div>
      </section>

      <section class="site-survey-section verification-panel">
        <div class="survey-section-head">
          <div>
            <span class="mini-label">11. Survey verification</span>
            <h3>Trust + Missing Information</h3>
            <p>Every claim should show who uploaded it, what evidence supports it, and whether it is verified, pending, missing, or conflicting.</p>
          </div>
          <button class="add-row-button" data-add-site-row="evidence">Add Evidence Record</button>
        </div>
        <div class="evidence-register">
          ${survey.evidence.map((item, index) => `
            <div>
              ${siteRowInput("evidence", index, "name", item.name || "", "Evidence / claim")}
              ${siteRowInput("evidence", index, "owner", item.owner || "", "Owner / responsible role")}
              ${siteRowTextarea("evidence", index, "value", item.value || "", "Verified fact / missing question")}
              ${siteSourceControls("evidence", index, item)}
            </div>
          `).join("")}
        </div>
      </section>

      <section class="site-survey-section ai-site-panel">
        <div class="survey-section-head">
          <div>
            <span class="mini-label">12. AI site assistor</span>
            <h3>From Verified Evidence To Design Implications</h3>
            <p>The assistor reads the saved forms and source records, then tells the architect what is verified, missing, risky, or ready for design use.</p>
          </div>
          <button class="add-row-button" data-add-site-row="aiInterpretation">Add AI Question</button>
        </div>
        <div class="site-ai-checks">
          ${assistantFindings.map(item => `
            <article class="ai-check-card ${escapeHtml(item.level.replace(/\s+/g, "-"))}">
              <span>${escapeHtml(item.level)}</span>
              <strong>${escapeHtml(item.title)}</strong>
              <p>${escapeHtml(item.detail)}</p>
            </article>
          `).join("")}
        </div>
        <div class="site-ai-question-grid">
          ${survey.aiInterpretation.map((item, index) => `
            <article>
              ${siteRowInput("aiInterpretation", index, "question", item.question || "", "Question / check")}
              ${siteRowTextarea("aiInterpretation", index, "answer", item.answer || "", "AI interpretation / recommended action", 4)}
            </article>
          `).join("")}
        </div>
      </section>

      <section class="site-survey-section package-panel">
        <div>
          <span class="mini-label">13. Site Intelligence Package</span>
          <h3>Final Section Output</h3>
          <p>The page produces a reusable package for design, sun studies, ASHRAE/material sustainability, zoning, engineering, compliance, and permit review.</p>
        </div>
        <div class="package-grid">
          ${survey.packageItems.map((item, index) => `
            <label>
              <input type="checkbox" data-site-package="${index}" ${item.included ? "checked" : ""}>
              <span>${escapeHtml(item.name)}</span>
            </label>
          `).join("")}
        </div>
        <div class="download-actions">
          <button data-download="parcel">Download Site JSON</button>
          <button data-download="csv">Download Project CSV</button>
        </div>
      </section>

      <div id="annotationLayer" class="annotation-layer"></div>
    </div>
  `;
}

function projectPageSurface(project, section) {
  return `
    <div class="surface-pad simple-project-page ${section.id === "finalization" ? "has-finalization" : ""}">
      <header class="simple-page-header">
        <button class="journey-link" data-section="dashboard">Back to flow</button>
        <div>
          <span class="mini-label">Open page</span>
          <h3>${escapeHtml(section.title)}</h3>
        </div>
      </header>

      <section class="simple-card customer-card">
        <span class="mini-label">Customer info</span>
        <h3>Client brief</h3>
        <p>${escapeHtml(project.clientIntent.summary)}</p>
        <div class="simple-chip-row">
          ${project.clientIntent.priorities.map(item => `<span>${escapeHtml(item.label)}: ${escapeHtml(item.weight)}</span>`).join("")}
        </div>
      </section>

      <section class="simple-card database-card">
        <span class="mini-label">Database</span>
        <h3>Project records</h3>
        <div class="database-list">
          ${projectDatabaseRows(project).map(row => `
            <div>
              <strong>${escapeHtml(row[0])}</strong>
              <span>${escapeHtml(row[1])}</span>
              <em>${escapeHtml(row[2])}</em>
            </div>
          `).join("")}
        </div>
      </section>

      ${section.id === "finalization" ? finalizationHandoffMarkup(project) : ""}

      <section class="simple-card map-card">
        <div class="map-card-header">
          <div>
            <span class="mini-label">Actual map</span>
            <h3>Parcel map</h3>
          </div>
          <span class="map-status">${escapeHtml(project.site.verifiedBy)} verified</span>
        </div>
        <div class="simple-map-wrap">
          ${projectMapMarkup(project)}
        </div>
        <div class="map-layer-list">
          ${project.gisLayers.map(layer => `
            <span><i class="status-dot"></i>${escapeHtml(layer.name)}</span>
          `).join("")}
        </div>
      </section>

      <section class="simple-card download-card">
        <span class="mini-label">Downloads</span>
        <h3>Parcel and CSV</h3>
        <div class="download-actions">
          <button data-download="parcel">Download parcel JSON</button>
          <button data-download="csv">Download project CSV</button>
        </div>
      </section>
    </div>
  `;
}

function clientSurface(project) {
  const category = spaceCategoryById(state.spaceDraft.category);
  const preset = activeSpacePreset();
  const selected = selectedProgramSpace();
  const totalArea = programTotalArea();
  const draftImages = state.spaceDraft.referenceImages || preset.referenceImages || [];
  const discovery = state.projectDiscovery;

  return `
    <div class="surface-pad client-brief-workspace">
      <header class="client-brief-hero">
        <button class="journey-link" data-section="dashboard">Back to flow</button>
        <div>
          <span class="mini-label">Architect workspace</span>
          <h3>Clientele / Project Brief</h3>
          <p>Build a focused client brief and space program one room at a time. Each saved space becomes project memory that can later guide design, sun studies, sustainability checks, and permit review.</p>
        </div>
        <div class="brief-memory-card">
          <span>Focused task environment</span>
          <strong>Connected project system</strong>
          <p>One project memory connects multiple task-specific workspaces, so the architect can concentrate on this brief without losing continuity.</p>
        </div>
      </header>

      <section class="simple-card project-identity-card">
        <span class="mini-label">Section 1</span>
        <h3>Project Vision & Identity</h3>
        <div class="space-form-grid compact">
          ${discoveryField("projectName", "Project name", discovery.projectName)}
          ${discoveryField("client", "Client", discovery.client)}
          ${discoveryField("stakeholders", "Stakeholders", discovery.stakeholders, { wide: true })}
          ${discoveryField("projectType", "Project type", discovery.projectType, { type: "select", choices: projectTypeOptions })}
          ${discoveryField("location", "Location", discovery.location)}
          ${discoveryField("parcel", "Parcel", discovery.parcel)}
          ${discoveryField("municipality", "Municipality", discovery.municipality)}
          ${discoveryField("budget", "Budget", discovery.budget)}
          ${discoveryField("timeline", "Timeline", discovery.timeline)}
        </div>
      </section>

      <section class="simple-card vision-values-card">
        <span class="mini-label">Section 2</span>
        <h3>Vision & Values</h3>
        <div class="space-form-grid compact">
          ${discoveryField("why", "Why does this project exist?", discovery.why, { type: "textarea", wide: true, rows: 3 })}
          ${discoveryField("longTermVision", "Long-term vision", discovery.longTermVision, { type: "textarea", wide: true })}
          ${discoveryField("goals", "Primary goals", discovery.goals, { type: "textarea", wide: true })}
          ${discoveryField("problems", "Problems to solve", discovery.problems, { type: "textarea", wide: true })}
          ${discoveryField("outcomes", "Desired outcomes", discovery.outcomes, { type: "textarea", wide: true })}
        </div>
        <div class="value-rank-grid">
          ${projectValueRows(discovery.values)}
        </div>
      </section>

      <section class="simple-card design-character-card">
        <span class="mini-label">Section 3</span>
        <h3>Design Character</h3>
        ${discoveryChipGroup("architecturalStyle", styleOptions, discovery.architecturalStyle, "Architectural style")}
        ${discoveryChipGroup("historicalInspiration", historicalInspirationOptions, discovery.historicalInspiration, "Historical inspiration")}
        ${discoveryChipGroup("atmosphere", atmosphereOptions, discovery.atmosphere, "Desired atmosphere")}
      </section>

      <section class="simple-card precedent-card">
        <span class="mini-label">Section 4</span>
        <h3>Precedents & References</h3>
        <p class="discovery-note">This section teaches the AI what the client admires before any room is designed.</p>
        ${discoveryChipGroup("influentialArchitects", influentialArchitectOptions, discovery.influentialArchitects, "Influential architects")}
        <div class="precedent-building-list">
          ${discovery.admiredBuildings.map(item => `
            <article>
              <strong>${escapeHtml(item.name)}</strong>
              <span>${escapeHtml(item.architect)}</span>
              <p>${escapeHtml(item.reason)}</p>
            </article>
          `).join("")}
        </div>
        <div class="reference-upload-panel discovery-reference-panel">
          <label class="reference-dropzone">
            <span>Reference library</span>
            <strong>Upload buildings, plans, sketches, or case studies</strong>
            <em>For every image, capture what should be replicated and what should be avoided.</em>
            <input type="file" accept="image/*" multiple data-discovery-reference-images>
          </label>
          <div class="reference-preview-grid discovery-reference-preview">
            ${discovery.referenceImages.length ? discovery.referenceImages.map(image => `
              <figure>
                <img src="${escapeHtml(image.dataUrl)}" alt="${escapeHtml(image.name)}">
                <figcaption>${escapeHtml(image.name)}</figcaption>
              </figure>
            `).join("") : `<div class="reference-empty">No project references uploaded yet</div>`}
          </div>
        </div>
        <div class="space-form-grid compact">
          ${discoveryField("referenceLikes", "What should be learned from references?", discovery.referenceLikes, { type: "textarea", wide: true, rows: 3 })}
          ${discoveryField("referenceAvoid", "What should be avoided?", discovery.referenceAvoid, { type: "textarea", wide: true, rows: 2 })}
        </div>
      </section>

      <section class="simple-card site-context-card">
        <span class="mini-label">Section 5</span>
        <h3>Site Context</h3>
        ${discoveryChipGroup("zoning", zoningTypeOptions, discovery.zoning, "Zoning")}
        ${discoveryChipGroup("siteConditions", siteConditionOptions, discovery.siteConditions, "Site conditions")}
        <div class="infrastructure-columns">
          ${discoveryChipGroup("water", projectWaterOptions, discovery.water, "Water")}
          ${discoveryChipGroup("energy", energySourceOptions, discovery.energy, "Energy")}
          ${discoveryChipGroup("waste", wasteSystemOptions, discovery.waste, "Waste")}
        </div>
      </section>

      <section class="simple-card constraints-card">
        <span class="mini-label">Section 6</span>
        <h3>Project Constraints</h3>
        <p class="discovery-note">Constraints define what design decisions must respect before layout work begins.</p>
        <div class="space-form-grid compact">
          ${discoveryField("maxBudget", "Maximum budget", discovery.maxBudget)}
          ${discoveryField("maxBuildingArea", "Maximum building area", discovery.maxBuildingArea)}
          ${discoveryField("targetCompletion", "Target completion", discovery.targetCompletion)}
          ${discoveryField("heightRestrictions", "Height restrictions", discovery.heightRestrictions, { type: "textarea", wide: true, rows: 2 })}
          ${discoveryField("requiredSetbacks", "Required setbacks", discovery.requiredSetbacks, { type: "textarea", wide: true, rows: 2 })}
          ${discoveryField("accessibilityRequirements", "Accessibility requirements", discovery.accessibilityRequirements, { type: "textarea", wide: true, rows: 2 })}
          ${discoveryField("nonNegotiables", "Client non-negotiables", discovery.nonNegotiables, { type: "textarea", wide: true, rows: 2 })}
        </div>
      </section>

      <section class="simple-card risk-register-card">
        <span class="mini-label">Section 7</span>
        <h3>Known Risks</h3>
        <p class="discovery-note">Risks become project memory so the AI can monitor them during design, review, and handoff.</p>
        ${discoveryChipGroup("riskRegister", riskRegisterOptions, discovery.riskRegister, "Risk register")}
      </section>

      <section class="simple-card success-metrics-card">
        <span class="mini-label">Section 8</span>
        <h3>Success Metrics</h3>
        <p class="discovery-note">Measurable outcomes give the assistor something concrete to check later.</p>
        <div class="space-form-grid compact">
          ${discoveryField("energyUseIntensity", "Energy Use Intensity", discovery.energyUseIntensity, { type: "textarea", wide: true, rows: 2 })}
          ${discoveryField("constructionBudgetTarget", "Construction budget", discovery.constructionBudgetTarget)}
          ${discoveryField("carbonTarget", "Carbon target", discovery.carbonTarget, { type: "textarea", wide: true, rows: 2 })}
          ${discoveryField("naturalDaylightTarget", "Natural daylight target", discovery.naturalDaylightTarget, { type: "textarea", wide: true, rows: 2 })}
          ${discoveryField("waterReductionTarget", "Water reduction target", discovery.waterReductionTarget, { type: "textarea", wide: true, rows: 2 })}
          ${discoveryField("userSatisfactionTarget", "User satisfaction", discovery.userSatisfactionTarget, { type: "textarea", wide: true, rows: 2 })}
        </div>
      </section>

      <section class="simple-card sustainability-card">
        <span class="mini-label">Section 9</span>
        <h3>Sustainability & Building Performance</h3>
        ${discoveryChipGroup("sustainabilityGoals", sustainabilityGoalOptions, discovery.sustainabilityGoals, "Goals")}
        ${discoveryChipGroup("performancePriorities", buildingPerformanceOptions, discovery.performancePriorities, "Performance priorities")}
      </section>

      ${projectAiUnderstandingCard(discovery)}

      <aside class="brief-side-rail" aria-label="Project memory, saved program, and selected space profile">
        ${discoveryMemorySummary(discovery, project)}

        <section class="simple-card program-list-card">
          <div class="program-list-head">
            <div>
              <span class="mini-label">Project program</span>
              <h3>${state.programSpaces.length} spaces saved</h3>
            </div>
            <strong>${totalArea.toLocaleString()} sq ft</strong>
          </div>
          <p class="program-list-note">Click a saved space to choose which room profile appears below.</p>
          <div class="program-space-list">
            ${state.programSpaces.length ? state.programSpaces.map(space => `
              <article class="program-space-card ${selected && selected.id === space.id ? "active" : ""}" data-program-space="${escapeHtml(space.id)}">
                <button class="program-remove" data-program-remove="${escapeHtml(space.id)}" type="button">Remove</button>
                <span>${escapeHtml(space.category)} / ${escapeHtml(space.type)}</span>
                <strong>${escapeHtml(space.name)}</strong>
                <p>${escapeHtml(space.area)} sq ft | ${escapeHtml(space.purpose)}</p>
                <div class="program-mini-tags">
                  ${[space.layoutShape, ...listValue(space.infrastructureRequired, []), ...listValue(space.influences, []), ...listValue(space.style, [])].filter(Boolean).slice(0, 6).map(item => `<em>${escapeHtml(item)}</em>`).join("")}
                </div>
                ${space.referenceImages && space.referenceImages.length ? `<small>${space.referenceImages.length} reference image${space.referenceImages.length === 1 ? "" : "s"}</small>` : ""}
              </article>
            `).join("") : `<div class="empty-program">No spaces saved yet. Add the first room or space to begin the program.</div>`}
          </div>
          <div class="download-actions">
            <button data-download="csv">Export program CSV</button>
            <button data-download="parcel">Export project memory</button>
          </div>
        </section>

        <section class="simple-card ai-program-card">
          <span class="mini-label">Selected space profile</span>
          <h3>${selected ? `Current selection: ${escapeHtml(selected.name)}` : "Select a saved space"}</h3>
          <p class="selected-space-note">${selected ? "This card summarizes the room currently selected from Project Program. It is room-level memory, not the full project summary." : "Save or click a program space above to preview the AI-readable room profile."}</p>
          ${selected ? `
            <div class="selected-space-context">
              <span>AI uses this for</span>
              <strong>Layout checks, infrastructure needs, style consistency, adjacency logic, and later CAD/Rhino review.</strong>
            </div>
            <div class="program-memory-tree">
              <div><span>Purpose</span><strong>${escapeHtml(selected.purpose)}</strong></div>
              <div><span>Users</span><strong>${escapeHtml(selected.occupancy)}</strong></div>
              <div><span>Priority</span><strong>${escapeHtml(selected.roomPriority)} / Cost ${escapeHtml(selected.costSensitivity)} / Maintenance ${escapeHtml(selected.maintenanceExpectation)} / Expansion ${escapeHtml(selected.futureExpansion)}</strong></div>
              <div><span>Layout</span><strong>${escapeHtml(selected.layoutShape)} / ${escapeHtml(selected.orientation)} / ${escapeHtml(selected.layoutZones.join(", "))}</strong></div>
              <div><span>Adjacency</span><strong>Near: ${escapeHtml(selected.near)} / Separate from: ${escapeHtml(selected.apart)}</strong></div>
              <div><span>Environment</span><strong>Light ${escapeHtml(selected.light)} / Privacy ${escapeHtml(selected.privacy)} / Noise ${escapeHtml(selected.noise)}</strong></div>
              <div><span>Required</span><strong>${escapeHtml(selected.infrastructureRequired.join(", "))}</strong></div>
              <div><span>Desired</span><strong>${escapeHtml(selected.infrastructureDesired.join(", "))}</strong></div>
              <div><span>Utilities</span><strong>${escapeHtml(selected.utilities.join(", "))}</strong></div>
              <div><span>Electrical</span><strong>${escapeHtml(selected.electrical.join(", "))}</strong></div>
              <div><span>Water</span><strong>${selected.water.length ? escapeHtml(selected.water.join(", ")) : "None required"}</strong></div>
              <div><span>Mechanical</span><strong>${escapeHtml(selected.mechanical.join(", "))}</strong></div>
              <div><span>Features</span><strong>${escapeHtml(selected.features.join(", "))}</strong></div>
              <div><span>Influences</span><strong>${escapeHtml(selected.influences.join(", "))}</strong></div>
              <div><span>Style</span><strong>${escapeHtml(selected.style.join(", "))}</strong></div>
              <div><span>Materials</span><strong>${escapeHtml(selected.materials.join(", "))}</strong></div>
              <div><span>Components</span><strong>${escapeHtml(selected.designComponents.join(", "))}</strong></div>
              <div><span>Feeling</span><strong>${escapeHtml(selected.feelings.join(", "))}</strong></div>
              <div><span>Access</span><strong>${escapeHtml(selected.accessibility.join(", "))}</strong></div>
              <div><span>Future use</span><strong>${escapeHtml(selected.future)}</strong></div>
              <div><span>Unique</span><strong>${escapeHtml(selected.importantDesign)}</strong></div>
              <div><span>Avoid</span><strong>${escapeHtml(selected.avoidNotes)}</strong></div>
              <div><span>References</span><strong>${selected.referenceImages.length ? `${selected.referenceImages.length} uploaded; read for ${escapeHtml(selected.referenceFocus.join(", "))}` : `Read for ${escapeHtml(selected.referenceFocus.join(", "))}`}</strong></div>
            </div>
            <p class="ai-checkline">The full project memory stays in Discovery Summary above; this lower card changes when a different saved space is selected.</p>
          ` : `<p>Add or select a space to see how it becomes structured project memory.</p>`}
        </section>
      </aside>

      <section class="simple-card space-builder-card">
        <div class="builder-card-head">
          <div>
            <span class="mini-label">Section 11</span>
            <h3>Program Builder</h3>
          </div>
          <button class="save-space-button" data-save-space="true">Save space</button>
        </div>

        <div class="builder-step">
          <span class="builder-step-label">1. Space category</span>
          <div class="space-category-grid">
            ${spaceCategories.map(item => `
              <button class="space-category-choice ${item.id === state.spaceDraft.category ? "active" : ""}" data-space-category="${escapeHtml(item.id)}" type="button">
                ${escapeHtml(item.label)}
              </button>
            `).join("")}
          </div>
        </div>

        <div class="builder-step">
          <span class="builder-step-label">2. Type and basic information</span>
          <div class="space-form-grid">
            ${customSelectField("spaceType", "type", "Space type", state.spaceDraft.type, category.types, "", "data-space-type")}
            <label>
              <span>Space name</span>
              <input data-space-field="name" value="${escapeHtml(preset.name)}">
            </label>
            <label>
              <span>Quantity</span>
              <input data-space-field="quantity" type="number" min="1" value="1">
            </label>
            <label>
              <span>Area</span>
              <input data-space-field="area" type="number" min="0" value="${escapeHtml(preset.area)}">
            </label>
            <label>
              <span>Length</span>
              <input data-space-field="length" placeholder="optional">
            </label>
            <label>
              <span>Width</span>
              <input data-space-field="width" placeholder="optional">
            </label>
            <label>
              <span>Ceiling height</span>
              <input data-space-field="height" placeholder="optional">
            </label>
            <label>
              <span>Occupancy</span>
              <input data-space-field="occupancy" value="${escapeHtml(preset.occupancy)}">
            </label>
            ${customSelectField("program", "roomPriority", "Room priority", preset.roomPriority, roomPriorityOptions, "", 'data-space-field="roomPriority"')}
            ${customSelectField("program", "costSensitivity", "Cost sensitivity", preset.costSensitivity, sensitivityOptions, "", 'data-space-field="costSensitivity"')}
            ${customSelectField("program", "maintenanceExpectation", "Maintenance", preset.maintenanceExpectation, sensitivityOptions, "", 'data-space-field="maintenanceExpectation"')}
            ${customSelectField("program", "futureExpansion", "Future expansion", preset.futureExpansion, expansionOptions, "", 'data-space-field="futureExpansion"')}
          </div>
        </div>

        <div class="builder-step">
          <span class="builder-step-label">3. Build up the layout</span>
          <div class="layout-builder-grid">
            <div class="layout-blockout" aria-label="Layout blockout preview">
              <span class="layout-blockout-title">Layout logic</span>
              ${layoutZoneOptions.slice(0, 6).map(option => `
                <i class="${checkedAttr(preset.layoutZones, option) ? "active" : ""}">${escapeHtml(option.replace(" zone", ""))}</i>
              `).join("")}
            </div>
            <div class="layout-builder-fields">
              <div class="space-form-grid compact">
                ${customSelectField("program", "layoutShape", "Layout shape", preset.layoutShape, layoutShapeOptions, "", 'data-space-field="layoutShape"')}
                ${customSelectField("program", "orientation", "Orientation priority", preset.orientation, orientationOptions, "", 'data-space-field="orientation"')}
                <label class="wide-field">
                  <span>Entry / circulation logic</span>
                  <input data-space-field="entrySequence" value="${escapeHtml(preset.entrySequence)}">
                </label>
                <label class="wide-field">
                  <span>Layout notes</span>
                  <textarea data-space-field="layoutNotes" rows="3">${escapeHtml(preset.layoutNotes)}</textarea>
                </label>
                <label>
                  <span>Must be near</span>
                  <input data-space-field="near" value="${escapeHtml(preset.near)}">
                </label>
                <label>
                  <span>Must be separated from</span>
                  <input data-space-field="apart" value="${escapeHtml(preset.apart)}">
                </label>
              </div>
              ${programChipGroup("space-layout-zones", layoutZoneOptions, preset.layoutZones, "Layout zones to include")}
            </div>
          </div>
        </div>

        <div class="builder-step">
          <span class="builder-step-label">4. Use and environmental needs</span>
          <div class="space-form-grid compact">
            <label class="wide-field">
              <span>Utility purpose</span>
              <textarea data-space-field="purpose" rows="2">${escapeHtml(preset.purpose)}</textarea>
            </label>
            ${["light", "privacy", "noise", "ventilation"].map(field =>
              customSelectField("program", field, field === "light" ? "Natural light" : field, preset[field], sensitivityOptions, "", `data-space-field="${escapeHtml(field)}"`)
            ).join("")}
          </div>
        </div>

        <div class="builder-step">
          <span class="builder-step-label">5. Infrastructure requirements and desires</span>
          <div class="infrastructure-columns">
            <div class="infrastructure-required">
              ${programChipGroup("space-infra-required", infrastructureRequiredOptions, preset.infrastructureRequired, "Required infrastructure")}
            </div>
            <div class="infrastructure-desired">
              ${programChipGroup("space-infra-desired", infrastructureDesiredOptions, preset.infrastructureDesired, "Desired upgrades")}
            </div>
          </div>
        </div>

        <div class="builder-step">
          <span class="builder-step-label">6. Style guide, influences, and important design</span>
          ${programChipGroup("space-influences", influenceOptions, preset.influences, "Design influences")}
          ${programChipGroup("space-style", styleOptions, preset.style, "Style direction")}
          ${programChipGroup("space-materials", materialOptions, preset.materials, "Material direction")}
          ${programChipGroup("space-components", designComponentOptions, preset.designComponents, "Important design components")}
          <div class="space-form-grid compact">
            <label class="wide-field">
              <span>Style guide notes</span>
              <textarea data-space-field="styleGuideNotes" rows="2">${escapeHtml(preset.styleGuideNotes)}</textarea>
            </label>
            <label class="wide-field">
              <span>What makes this space different?</span>
              <textarea data-space-field="importantDesign" rows="3">${escapeHtml(preset.importantDesign)}</textarea>
            </label>
            <label class="wide-field">
              <span>Custom components or special concerns</span>
              <textarea data-space-field="customComponents" rows="2" placeholder="Examples: podcast wall, sauna, lab sink, dual ovens, specialty equipment">${escapeHtml(preset.customComponents || "")}</textarea>
            </label>
            <label class="wide-field">
              <span>What should be avoided?</span>
              <textarea data-space-field="avoidNotes" rows="2">${escapeHtml(preset.avoidNotes)}</textarea>
            </label>
          </div>
        </div>

        <div class="builder-step">
          <span class="builder-step-label">7. Detailed systems, components, and accessibility</span>
          ${programChipGroup("space-utilities", utilityOptions, preset.utilities, "General utilities")}
          ${programChipGroup("space-electrical", electricalOptions, preset.electrical, "Electrical and lighting")}
          ${programChipGroup("space-water", waterOptions, preset.water, "Water and plumbing")}
          ${programChipGroup("space-mechanical", mechanicalOptions, preset.mechanical, "Mechanical / comfort")}
          ${programChipGroup("space-features", featureOptions, preset.features, "Special features")}
          ${programChipGroup("space-accessibility", accessibilityOptions, preset.accessibility, "Accessibility / future readiness")}
          ${programChipGroup("space-feelings", feelingOptions, preset.feelings, "Emotional goals")}
        </div>

        <div class="builder-step">
          <span class="builder-step-label">8. Reference pictures and future adaptation</span>
          <div class="reference-upload-panel">
            <label class="reference-dropzone">
              <span>Reference pictures</span>
              <strong>Upload images for this space</strong>
              <em>Use photos, sketches, floor plans, materials, or atmosphere references.</em>
              <input type="file" accept="image/*" multiple data-reference-images>
            </label>
            <div class="reference-preview-grid">
              ${draftImages.length ? draftImages.map(image => `
                <figure>
                  <img src="${escapeHtml(image.dataUrl)}" alt="${escapeHtml(image.name)}">
                  <figcaption>${escapeHtml(image.name)}</figcaption>
                </figure>
              `).join("") : `
                <div class="reference-empty">No images uploaded yet</div>
              `}
            </div>
          </div>
          ${programChipGroup("space-reference-focus", referenceFocusOptions, preset.referenceFocus, "What to read from references")}
          <div class="space-form-grid compact">
            <label class="wide-field">
              <span>Future adaptability</span>
              <textarea data-space-field="future" rows="2">${escapeHtml(preset.future)}</textarea>
            </label>
            <label class="wide-field">
              <span>Reference image notes</span>
              <textarea data-space-field="references" rows="2" placeholder="What should be replicated or avoided?">Likes: materials, lighting, atmosphere. Avoid: unresolved layout conflicts.</textarea>
            </label>
          </div>
        </div>
      </section>

      <section class="simple-card relationship-card">
        <span class="mini-label">Section 12</span>
        <h3>Relationships & Adjacencies</h3>
        <div class="adjacency-list">
          ${state.programSpaces.map(space => `
            <article>
              <strong>${escapeHtml(space.name)}</strong>
              <p><span>Near</span>${escapeHtml(space.near || "Related spaces")}</p>
              <p><span>Away</span>${escapeHtml(space.apart || "Conflicting uses")}</p>
            </article>
          `).join("")}
        </div>
      </section>

      <div id="annotationLayer" class="annotation-layer"></div>
    </div>
  `;
}

function tableSurface(title, rows) {
  return `
    <div class="surface-pad">
      <div class="table-shell">
        <h3>${escapeHtml(title)}</h3>
        <table>
          <tbody>
            ${rows.map(row => `
              <tr>
                <th>${escapeHtml(row[0])}</th>
                <td>${escapeHtml(row[1])}</td>
                <td><span class="status-token ${escapeHtml(row[2] || "verified")}">${escapeHtml(row[2] || "verified")}</span></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
      <div id="annotationLayer" class="annotation-layer"></div>
    </div>
  `;
}

function policySurface(project) {
  return `
    <div class="surface-pad policy-grid">
      ${project.verifiedRules.map(rule => `
        <div class="policy-rule ${rule.verificationStatus === "needs_review" ? "needs" : ""}">
          <div class="mini-label">${escapeHtml(rule.sourceTitle)} | page ${escapeHtml(rule.page)}</div>
          <strong>${escapeHtml(rule.section)}</strong>
          <p>${escapeHtml(rule.exactText)}</p>
          <span class="status-token ${escapeHtml(rule.verificationStatus)}">${escapeHtml(rule.verificationStatus)}</span>
        </div>
      `).join("")}
      <div id="annotationLayer" class="annotation-layer"></div>
    </div>
  `;
}

function gisSurface(project) {
  return `
    <div class="parcel gis-focus">
      <div class="gis-layer flood-layer">Flood layer</div>
      <div class="gis-layer view-layer">View corridor</div>
      <div class="gis-layer vegetation-layer">Tree buffer</div>
      <div class="map-panel">
        <h3>Active GIS Layers</h3>
        ${project.gisLayers.map(layer => `<p><span class="status-dot"></span>${escapeHtml(layer.name)}: ${escapeHtml(layer.finding)}</p>`).join("")}
      </div>
      <div id="annotationLayer" class="annotation-layer"></div>
    </div>
  `;
}

function sunSurface(project) {
  return `
    <div class="surface-pad analysis-surface">
      <div class="sun-diagram">
        <div class="sun-band">Morning</div>
        <div class="sun-band strong">Afternoon exposure</div>
        <div class="sun-band">Evening</div>
      </div>
      <div class="metric-panel">
        <h3>Sun Study V4</h3>
        <div class="big-metric">${escapeHtml(project.analysisResults.sunStudy.daylightScore)}</div>
        <p>${escapeHtml(project.analysisResults.sunStudy.summary)}</p>
        <span class="status-token medium">Glare risk: ${escapeHtml(project.analysisResults.sunStudy.glareRisk)}</span>
      </div>
      <div id="annotationLayer" class="annotation-layer"></div>
    </div>
  `;
}

function ashraeSurface(project) {
  return `
    <div class="surface-pad analysis-surface">
      <div class="metric-panel">
        <h3>ASHRAE / Energy</h3>
        <div class="big-metric">+${escapeHtml(project.analysisResults.ashrae.coolingImpactPercent)}%</div>
        <p>Cooling demand increase after glazing expansion.</p>
      </div>
      <div class="metric-panel">
        <h3>Envelope Risk</h3>
        <div class="big-metric medium-text">${escapeHtml(project.analysisResults.ashrae.envelopeRisk)}</div>
        <p>${escapeHtml(project.analysisResults.ashrae.summary)}</p>
      </div>
      <div class="envelope-strip"><span></span><span></span><span></span><span></span><span></span></div>
      <div id="annotationLayer" class="annotation-layer"></div>
    </div>
  `;
}

function materialsSurface(project) {
  const materials = [
    ["Light timber frame", "Low carbon", "medium cost"],
    ["Triple-pane glazing", "Thermal control", "higher cost"],
    ["Mineral plaster", "Natural finish", "moderate"],
    ["Exterior shading", "Cooling reduction", "recommended"]
  ];
  return `
    <div class="surface-pad material-board">
      ${materials.map(item => `
        <div class="material-card">
          <div class="swatch"></div>
          <strong>${escapeHtml(item[0])}</strong>
          <p>${escapeHtml(item[1])}</p>
          <span class="status-token">${escapeHtml(item[2])}</span>
        </div>
      `).join("")}
      <div id="annotationLayer" class="annotation-layer"></div>
    </div>
  `;
}

function lumionSurface() {
  return `
    <div class="surface-pad render-board">
      <div class="render-frame warm">Exterior dusk</div>
      <div class="render-frame daylight">Daylight interior</div>
      <div class="render-frame material">Material study</div>
      <div class="render-notes">
        <h3>Visual Review</h3>
        <p>Render boards evaluate atmosphere, client style fit, material feel, and daylight experience.</p>
      </div>
      <div id="annotationLayer" class="annotation-layer"></div>
    </div>
  `;
}

function checklistSurface(title, items) {
  return `
    <div class="surface-pad checklist-surface">
      <h3>${escapeHtml(title)}</h3>
      ${items.map(item => `
        <label class="check-row">
          <input type="checkbox" ${item[1] ? "checked" : ""}>
          <span>${escapeHtml(item[0])}</span>
        </label>
      `).join("")}
      <div id="annotationLayer" class="annotation-layer"></div>
    </div>
  `;
}

function notesSurface() {
  return `
    <div class="surface-pad note-board">
      <div class="sticky-note">Preserve west view corridor.</div>
      <div class="sticky-note green">Client values natural materials.</div>
      <div class="sticky-note blue">Check excavation depth against slope.</div>
      <div class="sticky-note red">Height conflict before permit package.</div>
      <div id="annotationLayer" class="annotation-layer"></div>
    </div>
  `;
}

function archiveSurface(project) {
  return `
    <div class="surface-pad timeline-surface">
      ${(project.aiTranscript || []).slice(0, 6).map(item => `
        <div class="timeline-item">
          <strong>${escapeHtml(item.section || "Decision")}</strong>
          <p>${escapeHtml(item.question || item.decision || "Recorded item")}</p>
          <span>${escapeHtml(item.timestamp || "")}</span>
        </div>
      `).join("") || `<div class="empty-state">No archive records yet. Ask the assistor to create one.</div>`}
      <div id="annotationLayer" class="annotation-layer"></div>
    </div>
  `;
}

function caseSurface() {
  return `
    <div class="surface-pad case-surface">
      <div class="case-page">
        <h3>Design Rationale Draft</h3>
        <p><strong>Project goal:</strong> warm, daylight-rich, low-energy residence.</p>
        <p><strong>Site response:</strong> balance west view corridor with stormwater and slope constraints.</p>
        <p><strong>Current issue:</strong> zoning setback and height need revision before permit readiness.</p>
      </div>
      <div class="case-sidebar">
        <span class="status-token verified">source linked</span>
        <span class="status-token medium">client version</span>
        <span class="status-token">firm version</span>
      </div>
      <div id="annotationLayer" class="annotation-layer"></div>
    </div>
  `;
}

function renderSurface() {
  const project = state.project;
  if (!project) return;
  const section = sectionById(state.activeSection);
  const html = state.authView
    ? authSurface()
    : state.activeSection === "dashboard"
    ? journeySurface(project)
    : state.activeSection === "clientele"
    ? clientSurface(project)
    : state.activeSection === "survey"
    ? siteSurveySurface(project)
    : projectPageSurface(project, section);
  document.getElementById("visualWorkspace").innerHTML = html;
  el.annotationLayer = document.getElementById("annotationLayer");
  if (state.authView || state.activeSection === "dashboard") bindDashboardFlow();
  bindSimpleProjectPage();
  if (state.activeSection === "survey") bindSiteSurveyPage();
  if (state.activeSection === "clientele") bindClientBriefPage();
}

function csvValue(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

function projectCsv(project) {
  const discovery = state.projectDiscovery;
  const rows = [
    ["category", "name", "value", "status"],
    ["project", "name", project.project.name, "current"],
    ["project", "location", project.project.location, "current"],
    ["client", "summary", project.clientIntent.summary, "verified"],
    ["discovery", "project_name", discovery.projectName, "saved"],
    ["discovery", "client", discovery.client, "saved"],
    ["discovery", "project_type", discovery.projectType, "saved"],
    ["discovery", "budget", discovery.budget, "saved"],
    ["discovery", "timeline", discovery.timeline, "saved"],
    ["discovery", "vision", discovery.why, "saved"],
    ["discovery", "values_high", projectValueOptions.filter(value => discovery.values[value] === "High").join(" | "), "saved"],
    ["discovery", "style", discovery.architecturalStyle.join(" | "), "saved"],
    ["discovery", "atmosphere", discovery.atmosphere.join(" | "), "saved"],
    ["discovery", "site_conditions", discovery.siteConditions.join(" | "), "saved"],
    ["discovery", "sustainability_goals", discovery.sustainabilityGoals.join(" | "), "saved"],
    ["discovery", "precedents", discovery.admiredBuildings.map(item => item.name).join(" | "), "saved"],
    ["constraints", "max_budget", discovery.maxBudget, "saved"],
    ["constraints", "max_building_area", discovery.maxBuildingArea, "saved"],
    ["constraints", "target_completion", discovery.targetCompletion, "saved"],
    ["constraints", "height_restrictions", discovery.heightRestrictions, "saved"],
    ["constraints", "required_setbacks", discovery.requiredSetbacks, "saved"],
    ["constraints", "accessibility", discovery.accessibilityRequirements, "saved"],
    ["constraints", "non_negotiables", discovery.nonNegotiables, "saved"],
    ["risks", "known_risks", discovery.riskRegister.join(" | "), "saved"],
    ["success_metric", "energy_use_intensity", discovery.energyUseIntensity, "saved"],
    ["success_metric", "construction_budget", discovery.constructionBudgetTarget, "saved"],
    ["success_metric", "carbon_target", discovery.carbonTarget, "saved"],
    ["success_metric", "natural_daylight", discovery.naturalDaylightTarget, "saved"],
    ["success_metric", "water_reduction", discovery.waterReductionTarget, "saved"],
    ["success_metric", "user_satisfaction", discovery.userSatisfactionTarget, "saved"],
    ...project.clientIntent.priorities.map(item => ["client_priority", item.label, item.weight, item.source]),
    ["site", "parcel_area_sq_ft", project.site.parcelAreaSqFt, project.site.verificationStatus],
    ["site", "average_slope_percent", project.site.averageSlopePercent, project.site.verificationStatus],
    ["site", "slope_direction", project.site.slopeDirection, project.site.verificationStatus],
    ...Object.entries(state.siteSurvey.fields).map(([key, value]) => ["site_survey_form", key, value, "saved"]),
    ...state.siteSurvey.uploads.map(file => ["site_survey_upload", file.name, `${file.type || "file"} | ${file.size || 0} bytes | ${sourceStatusText(file)} | uploaded by: ${file.uploadedBy || ""}`, file.status || "uploaded"]),
    ...state.siteSurvey.environmental.map(item => ["site_environmental", item.name, `${item.value || ""} | ${sourceStatusText(item)}`, item.status || "saved"]),
    ...state.siteSurvey.utilities.map(item => ["site_utility", item.name, `${item.value || ""} | ${sourceStatusText(item)}`, item.status || "saved"]),
    ...state.siteSurvey.constraints.map(item => ["site_constraint", item.name, `${item.value || ""} | ${sourceStatusText(item)}`, item.status || "saved"]),
    ...state.siteSurvey.opportunities.map(item => ["site_opportunity", item.name, `${item.value || ""} | ${sourceStatusText(item)}`, item.status || "saved"]),
    ...state.siteSurvey.hazards.map(item => ["site_hazard", item.name, `${item.value || ""} | ${sourceStatusText(item)}`, item.status || "saved"]),
    ...state.siteSurvey.sensors.map(item => ["site_sensor", item.name, `${item.sensorType || ""} | ${item.location || ""} | ${item.latestReading || ""} ${item.unit || ""} | ${item.timestamp || ""} | ${item.sourceName || ""}`, item.status || "saved"]),
    ...state.siteSurvey.policyLookups.map(item => ["site_policy_lookup", item.name, `${item.address || ""} | ${item.jurisdiction || ""} | ${item.result || ""} | ${item.sourceUrl || ""} | ${sourceStatusText(item)}`, item.status || "saved"]),
    ...state.siteSurvey.evidence.map(item => ["site_evidence", item.name, `${item.owner || ""}: ${item.value || ""} | ${sourceStatusText(item)}`, item.status || "saved"]),
    ...state.siteSurvey.aiInterpretation.map(item => ["site_ai_interpretation", item.question, item.answer, "saved"]),
    ...state.siteSurvey.packageItems.map(item => ["site_package_item", item.name, item.included ? "included" : "excluded", "saved"]),
    ...state.programSpaces.flatMap(space => [
      ["program_space", space.name, `${space.area} sq ft`, "saved"],
      ["program_purpose", space.name, space.purpose, "saved"],
      ["program_priority", space.name, space.roomPriority || "", "saved"],
      ["program_cost_sensitivity", space.name, space.costSensitivity || "", "saved"],
      ["program_maintenance", space.name, space.maintenanceExpectation || "", "saved"],
      ["program_future_expansion", space.name, space.futureExpansion || "", "saved"],
      ["program_layout", space.name, `${space.layoutShape || ""} | ${space.orientation || ""} | ${listValue(space.layoutZones, []).join(" | ")}`, "saved"],
      ["program_adjacency", space.name, `near: ${space.near || ""}; separate: ${space.apart || ""}`, "saved"],
      ["program_infrastructure_required", space.name, listValue(space.infrastructureRequired, []).join(" | "), "saved"],
      ["program_infrastructure_desired", space.name, listValue(space.infrastructureDesired, []).join(" | "), "saved"],
      ["program_utilities", space.name, space.utilities.join(" | "), "saved"],
      ["program_electrical", space.name, listValue(space.electrical, []).join(" | "), "saved"],
      ["program_water", space.name, listValue(space.water, []).join(" | "), "saved"],
      ["program_mechanical", space.name, listValue(space.mechanical, []).join(" | "), "saved"],
      ["program_features", space.name, space.features.join(" | "), "saved"],
      ["program_influences", space.name, listValue(space.influences, []).join(" | "), "saved"],
      ["program_style", space.name, listValue(space.style, []).join(" | "), "saved"],
      ["program_materials", space.name, listValue(space.materials, []).join(" | "), "saved"],
      ["program_design_components", space.name, listValue(space.designComponents, []).join(" | "), "saved"],
      ["program_accessibility", space.name, listValue(space.accessibility, []).join(" | "), "saved"],
      ["program_reference_images", space.name, `${listValue(space.referenceImages, []).length} images`, "saved"]
    ]),
    ...project.gisLayers.map(layer => ["gis_layer", layer.name, layer.finding, layer.status]),
    ...project.verifiedRules.map(rule => ["policy_rule", rule.section, `${rule.value} ${rule.unit}`, rule.verificationStatus]),
    ["model", "height_ft", project.designModel.heightFt, "current"],
    ["model", "front_distance_ft", project.designModel.frontDistanceFt, "current"],
    ["model", "south_glazing_percent", project.designModel.southGlazingPercent, "current"]
  ];
  return rows.map(row => row.map(csvValue).join(",")).join("\n");
}

function parcelJson(project) {
  return JSON.stringify({
    project: project.project,
    clientIntent: project.clientIntent,
    projectDiscovery: state.projectDiscovery,
    siteSurvey: state.siteSurvey,
    programSpaces: state.programSpaces,
    site: project.site,
    gisLayers: project.gisLayers,
    verifiedRules: project.verifiedRules,
    designModel: project.designModel
  }, null, 2);
}

function triggerDownload(filename, mimeType, content) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function newSiteSurveyRow(group) {
  const today = new Date().toISOString().slice(0, 10);
  const common = {
    documentType: "Field Note",
    otherDocumentType: "",
    sourceName: "",
    status: "unverified",
    verifiedBy: "",
    lastChecked: today
  };

  const factories = {
    environmental: () => ({ name: "Custom site condition", value: "", ...common }),
    utilities: () => ({ name: "Custom utility / infrastructure", value: "", ...common }),
    constraints: () => ({ name: "Custom constraint", value: "", ...common }),
    opportunities: () => ({ name: "Custom opportunity", value: "", ...common }),
    hazards: () => ({ name: "Custom hazard", value: "", ...common }),
    evidence: () => ({ name: "Custom evidence record", owner: "", value: "", ...common }),
    policyLookups: () => ({
      name: "Custom policy lookup",
      address: state.siteSurvey.fields.addressLookup || "",
      jurisdiction: state.siteSurvey.fields.jurisdiction || "",
      result: "",
      sourceUrl: state.siteSurvey.fields.policySourceUrl || "",
      documentType: "Zoning Policy",
      otherDocumentType: "",
      sourceName: "Manual reviewer entry",
      status: "pending lookup",
      verifiedBy: "",
      lastChecked: today
    }),
    sensors: () => ({
      name: "Custom sensor reading",
      sensorType: "Other",
      location: "",
      latestReading: "",
      unit: "",
      timestamp: "",
      status: "needs review",
      sourceName: "Sensor / IoT Feed"
    }),
    aiInterpretation: () => ({
      question: "What should the architect check next?",
      answer: "Complete the missing source and verification fields before treating this item as design-ready."
    })
  };

  return factories[group] ? factories[group]() : { name: "Custom record", value: "", ...common };
}

function createPolicyLookupRecordFromFields() {
  const fields = state.siteSurvey.fields;
  return {
    name: "Address-based zoning lookup",
    address: fields.addressLookup || fields.parcelAddress || "",
    jurisdiction: fields.jurisdiction || "",
    result: [
      fields.zoningDistrict ? `Zoning district: ${fields.zoningDistrict}` : "",
      fields.overlays ? `Overlays: ${fields.overlays}` : ""
    ].filter(Boolean).join("\n"),
    documentType: "Zoning Policy",
    otherDocumentType: "",
    sourceName: "Manual reviewer entry",
    sourceUrl: fields.policySourceUrl || "",
    status: fields.policyLookupStatus || "pending lookup",
    verifiedBy: fields.verifiedBy || "",
    lastChecked: fields.lastPolicyCheck || new Date().toISOString().slice(0, 10)
  };
}

function bindSimpleProjectPage() {
  document.querySelectorAll("[data-section='dashboard']").forEach(button => {
    button.addEventListener("click", () => {
      state.authView = null;
      state.activeSection = "dashboard";
      render();
    });
  });

  document.querySelectorAll("[data-download]").forEach(button => {
    button.addEventListener("click", () => {
      if (!state.project) return;
      if (button.dataset.download === "parcel") {
        triggerDownload("hct-parcel.json", "application/json", parcelJson(state.project));
      }
      if (button.dataset.download === "csv") {
        triggerDownload("hct-project-data.csv", "text/csv", projectCsv(state.project));
      }
    });
  });
}

function bindSiteSurveyPage() {
  const bindValueControl = (input, handler) => {
    ["input", "change"].forEach(eventName => {
      input.addEventListener(eventName, handler);
    });
  };

  document.querySelectorAll("[data-site-field]").forEach(input => {
    bindValueControl(input, () => {
      state.siteSurvey.fields[input.dataset.siteField] = input.value;
      persistSiteSurvey();
    });
  });

  document.querySelectorAll("[data-site-row]").forEach(input => {
    bindValueControl(input, () => {
      const group = input.dataset.siteRow;
      const index = Number(input.dataset.siteIndex);
      const key = input.dataset.siteKey;
      if (!Array.isArray(state.siteSurvey[group]) || !state.siteSurvey[group][index]) return;
      state.siteSurvey[group][index][key] = input.value;
      persistSiteSurvey();
    });
  });

  document.querySelectorAll("[data-site-package]").forEach(input => {
    input.addEventListener("change", () => {
      const index = Number(input.dataset.sitePackage);
      if (!state.siteSurvey.packageItems[index]) return;
      state.siteSurvey.packageItems[index].included = input.checked;
      persistSiteSurvey();
    });
  });

  document.querySelectorAll("[data-add-site-row]").forEach(button => {
    button.addEventListener("click", () => {
      const group = button.dataset.addSiteRow;
      if (!Array.isArray(state.siteSurvey[group])) state.siteSurvey[group] = [];
      state.siteSurvey[group].push(newSiteSurveyRow(group));
      persistSiteSurvey();
      render();
    });
  });

  document.querySelectorAll("[data-policy-lookup-create]").forEach(button => {
    button.addEventListener("click", () => {
      state.siteSurvey.policyLookups = [
        createPolicyLookupRecordFromFields(),
        ...(Array.isArray(state.siteSurvey.policyLookups) ? state.siteSurvey.policyLookups : [])
      ];
      persistSiteSurvey();
      render();
    });
  });

  const uploadInput = document.querySelector("[data-site-upload]");
  if (uploadInput) {
    uploadInput.addEventListener("change", () => {
      const uploaded = Array.from(uploadInput.files || []).map(file => ({
        name: file.name,
        size: file.size,
        type: file.type || "file",
        documentType: state.siteSurvey.fields.uploadDocumentType || "Other",
        otherDocumentType: state.siteSurvey.fields.uploadOtherDocumentType || "",
        sourceName: state.siteSurvey.fields.uploadSourceName || file.name,
        uploadedBy: state.siteSurvey.fields.uploadUploadedBy || "",
        uploadedAt: new Date().toISOString(),
        status: state.siteSurvey.fields.uploadVerificationStatus || "unverified",
        verifiedBy: state.siteSurvey.fields.verifiedBy || "",
        lastChecked: new Date().toISOString().slice(0, 10)
      }));
      state.siteSurvey.uploads = uniqueList([
        ...state.siteSurvey.uploads.map(file => JSON.stringify(file)),
        ...uploaded.map(file => JSON.stringify(file))
      ]).map(item => JSON.parse(item));
      persistSiteSurvey();
      render();
    });
  }
}

function bindClientBriefPage() {
  document.querySelectorAll("[data-discovery-field]").forEach(input => {
    input.addEventListener("change", () => {
      state.projectDiscovery[input.dataset.discoveryField] = input.value;
      render();
    });
  });

  document.querySelectorAll("[data-discovery-list]").forEach(input => {
    input.addEventListener("change", () => {
      const field = input.dataset.discoveryList;
      state.projectDiscovery[field] = Array.from(document.querySelectorAll(`[data-discovery-list="${field}"]:checked`)).map(item => item.value);
      render();
    });
  });

  document.querySelectorAll("[data-value-rank]").forEach(select => {
    select.addEventListener("change", () => {
      state.projectDiscovery.values[select.dataset.valueRank] = select.value;
      render();
    });
  });

  document.querySelectorAll("[data-custom-chip-add]").forEach(button => {
    button.addEventListener("click", () => {
      const kind = button.dataset.customChipAdd;
      const key = button.dataset.customChipKey;
      const input = document.querySelector(`[data-custom-chip-input="${kind}"][data-custom-chip-key="${key}"]`);
      const value = input?.value.trim();
      if (!value) return;

      if (kind === "discovery") {
        const checked = Array.from(document.querySelectorAll(`[data-discovery-list="${key}"]:checked`)).map(item => item.value);
        state.projectDiscovery[key] = uniqueList([...checked, value]);
      }

      if (kind === "program") {
        const field = programCustomFieldByName[key];
        if (!field) return;
        const checked = Array.from(document.querySelectorAll(`input[name="${key}"]:checked`)).map(item => item.value);
        state.spaceDraft = {
          ...state.spaceDraft,
          [field]: uniqueList([...checked, value])
        };
      }

      render();
    });
  });

  document.querySelectorAll("[data-custom-chip-input]").forEach(input => {
    input.addEventListener("keydown", event => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      const kind = input.dataset.customChipInput;
      const key = input.dataset.customChipKey;
      document.querySelector(`[data-custom-chip-add="${kind}"][data-custom-chip-key="${key}"]`)?.click();
    });
  });

  document.querySelectorAll("[data-custom-select-kind]").forEach(select => {
    select.addEventListener("change", () => {
      const kind = select.dataset.customSelectKind;
      const key = select.dataset.customSelectKey;
      let shouldRender = false;

      if (kind === "discovery") {
        state.projectDiscovery[key] = select.value;
        shouldRender = true;
      }

      if (kind === "program") {
        state.spaceDraft = {
          ...state.spaceDraft,
          [key]: select.value
        };
      }

      if (kind === "spaceType") {
        state.spaceDraft = {
          ...state.spaceDraft,
          type: select.value || state.spaceDraft.type,
          referenceImages: []
        };
        shouldRender = true;
      }

      if (shouldRender) render();
    });
  });

  document.querySelectorAll("[data-custom-select-add]").forEach(button => {
    button.addEventListener("click", () => {
      const kind = button.dataset.customSelectAdd;
      const key = button.dataset.customSelectKey;
      const input = document.querySelector(`[data-custom-select-input="${kind}"][data-custom-select-key="${key}"]`);
      const value = input?.value.trim();
      if (!value) return;

      if (kind === "discovery") {
        state.projectDiscovery[key] = value;
      }

      if (kind === "program") {
        state.spaceDraft = {
          ...state.spaceDraft,
          [key]: value
        };
      }

      if (kind === "spaceType") {
        state.spaceDraft = {
          ...state.spaceDraft,
          type: value,
          referenceImages: []
        };
      }

      render();
    });
  });

  document.querySelectorAll("[data-custom-select-input]").forEach(input => {
    input.addEventListener("keydown", event => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      const kind = input.dataset.customSelectInput;
      const key = input.dataset.customSelectKey;
      document.querySelector(`[data-custom-select-add="${kind}"][data-custom-select-key="${key}"]`)?.click();
    });
  });

  const discoveryReferenceInput = document.querySelector("[data-discovery-reference-images]");
  if (discoveryReferenceInput) {
    discoveryReferenceInput.addEventListener("change", async () => {
      const files = Array.from(discoveryReferenceInput.files || []).slice(0, 8);
      const images = await Promise.all(files.map(file => new Promise(resolve => {
        const reader = new FileReader();
        reader.onload = () => resolve({ name: file.name, dataUrl: reader.result });
        reader.onerror = () => resolve({ name: file.name, dataUrl: "" });
        reader.readAsDataURL(file);
      })));
      state.projectDiscovery.referenceImages = images.filter(image => image.dataUrl);
      const preview = document.querySelector(".discovery-reference-preview");
      if (preview) {
        preview.innerHTML = state.projectDiscovery.referenceImages.length
          ? state.projectDiscovery.referenceImages.map(image => `
              <figure>
                <img src="${escapeHtml(image.dataUrl)}" alt="${escapeHtml(image.name)}">
                <figcaption>${escapeHtml(image.name)}</figcaption>
              </figure>
            `).join("")
          : `<div class="reference-empty">No project references uploaded yet</div>`;
      }
    });
  }

  document.querySelectorAll("[data-space-category]").forEach(button => {
    button.addEventListener("click", () => {
      const category = spaceCategoryById(button.dataset.spaceCategory);
      state.spaceDraft = {
        category: category.id,
        type: category.types[0]
      };
      render();
    });
  });

  const typeSelect = document.querySelector("[data-space-type]");
  if (typeSelect) {
    typeSelect.addEventListener("change", () => {
      state.spaceDraft = {
        ...state.spaceDraft,
        type: typeSelect.value || state.spaceDraft.type,
        referenceImages: []
      };
      render();
    });
  }

  document.querySelectorAll("[data-space-field]").forEach(input => {
    input.addEventListener("change", () => {
      state.spaceDraft = {
        ...state.spaceDraft,
        [input.dataset.spaceField]: input.value
      };
    });
  });

  const referenceInput = document.querySelector("[data-reference-images]");
  if (referenceInput) {
    referenceInput.addEventListener("change", async () => {
      const files = Array.from(referenceInput.files || []).slice(0, 6);
      const images = await Promise.all(files.map(file => new Promise(resolve => {
        const reader = new FileReader();
        reader.onload = () => resolve({ name: file.name, dataUrl: reader.result });
        reader.onerror = () => resolve({ name: file.name, dataUrl: "" });
        reader.readAsDataURL(file);
      })));
      state.spaceDraft = {
        ...state.spaceDraft,
        referenceImages: images.filter(image => image.dataUrl)
      };
      const preview = document.querySelector(".reference-preview-grid");
      if (preview) {
        preview.innerHTML = state.spaceDraft.referenceImages.length
          ? state.spaceDraft.referenceImages.map(image => `
              <figure>
                <img src="${escapeHtml(image.dataUrl)}" alt="${escapeHtml(image.name)}">
                <figcaption>${escapeHtml(image.name)}</figcaption>
              </figure>
            `).join("")
          : `<div class="reference-empty">No images uploaded yet</div>`;
      }
    });
  }

  document.querySelectorAll("[data-program-space]").forEach(card => {
    card.addEventListener("click", () => {
      state.selectedProgramSpaceId = card.dataset.programSpace;
      render();
    });
  });

  document.querySelectorAll("[data-program-remove]").forEach(button => {
    button.addEventListener("click", event => {
      event.stopPropagation();
      state.programSpaces = state.programSpaces.filter(space => space.id !== button.dataset.programRemove);
      if (state.selectedProgramSpaceId === button.dataset.programRemove) {
        state.selectedProgramSpaceId = state.programSpaces[0]?.id || null;
      }
      render();
    });
  });

  const saveButton = document.querySelector("[data-save-space]");
  if (saveButton) {
    saveButton.addEventListener("click", () => {
      const getField = name => document.querySelector(`[data-space-field="${name}"]`)?.value.trim() || "";
      const getChecked = name => Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(input => input.value);
      const category = spaceCategoryById(state.spaceDraft.category);
      const type = document.querySelector("[data-space-type]")?.value || state.spaceDraft.type;
      const preset = normalizeSpaceProfile(spaceTypePresets[type] || fallbackSpacePreset);
      const newSpace = {
        id: `program-${Date.now()}`,
        category: category.label,
        type,
        name: getField("name") || preset.name || type,
        quantity: Number(getField("quantity") || 1),
        area: Number(getField("area") || preset.area || 0),
        dimensions: {
          length: getField("length"),
          width: getField("width"),
          height: getField("height")
        },
        purpose: getField("purpose") || preset.purpose,
        occupancy: getField("occupancy") || preset.occupancy,
        roomPriority: getField("roomPriority") || preset.roomPriority,
        costSensitivity: getField("costSensitivity") || preset.costSensitivity,
        maintenanceExpectation: getField("maintenanceExpectation") || preset.maintenanceExpectation,
        futureExpansion: getField("futureExpansion") || preset.futureExpansion,
        light: getField("light") || preset.light,
        privacy: getField("privacy") || preset.privacy,
        noise: getField("noise") || preset.noise,
        ventilation: getField("ventilation") || preset.ventilation,
        layoutShape: getField("layoutShape") || preset.layoutShape,
        orientation: getField("orientation") || preset.orientation,
        entrySequence: getField("entrySequence") || preset.entrySequence,
        layoutNotes: getField("layoutNotes") || preset.layoutNotes,
        layoutZones: getChecked("space-layout-zones").length ? getChecked("space-layout-zones") : preset.layoutZones,
        infrastructureRequired: getChecked("space-infra-required").length ? getChecked("space-infra-required") : preset.infrastructureRequired,
        infrastructureDesired: getChecked("space-infra-desired").length ? getChecked("space-infra-desired") : preset.infrastructureDesired,
        utilities: getChecked("space-utilities").length ? getChecked("space-utilities") : ["Electricity"],
        influences: getChecked("space-influences").length ? getChecked("space-influences") : preset.influences,
        style: getChecked("space-style").length ? getChecked("space-style") : preset.style,
        materials: getChecked("space-materials").length ? getChecked("space-materials") : preset.materials,
        designComponents: getChecked("space-components").length ? getChecked("space-components") : preset.designComponents,
        electrical: getChecked("space-electrical").length ? getChecked("space-electrical") : preset.electrical,
        water: getChecked("space-water").length ? getChecked("space-water") : preset.water,
        mechanical: getChecked("space-mechanical").length ? getChecked("space-mechanical") : preset.mechanical,
        features: getChecked("space-features").length ? getChecked("space-features") : ["Custom"],
        accessibility: getChecked("space-accessibility").length ? getChecked("space-accessibility") : preset.accessibility,
        feelings: getChecked("space-feelings").length ? getChecked("space-feelings") : ["Calm"],
        referenceFocus: getChecked("space-reference-focus").length ? getChecked("space-reference-focus") : preset.referenceFocus,
        styleGuideNotes: getField("styleGuideNotes") || preset.styleGuideNotes,
        importantDesign: getField("importantDesign") || preset.importantDesign,
        customComponents: getField("customComponents"),
        avoidNotes: getField("avoidNotes") || preset.avoidNotes,
        future: getField("future") || preset.future,
        near: getField("near") || preset.near,
        apart: getField("apart") || preset.apart,
        references: getField("references"),
        referenceImages: state.spaceDraft.referenceImages || []
      };
      state.programSpaces = [...state.programSpaces, newSpace];
      state.selectedProgramSpaceId = newSpace.id;
      state.spaceDraft = {
        ...state.spaceDraft,
        referenceImages: []
      };
      render();
    });
  }
}

function renderAnnotations() {
  if (!el.annotationLayer) return;
  const annotations = state.lastResponse ? state.lastResponse.annotations : [];
  el.annotationLayer.innerHTML = annotations.map(anno => {
    const rect = anno.rect || { x: 40, y: 40, w: 20, h: 20 };
    return `
      <div class="annotation ${escapeHtml(anno.severity)}" data-annotation-id="${escapeHtml(anno.id)}"
        style="left:${rect.x}%; top:${rect.y}%; width:${rect.w}%; height:${rect.h}%;">
        <div class="annotation-pin"></div>
        <button class="annotation-action" data-annotation-trace="${escapeHtml(anno.id)}" onclick="window.traceAnnotationFromDom && window.traceAnnotationFromDom('${escapeHtml(anno.id)}')">Trace</button>
        <div class="annotation-label">
          <span>${escapeHtml(anno.message)}</span>
        </div>
      </div>
    `;
  }).join("");

  el.annotationLayer.querySelectorAll("[data-annotation-id]").forEach(node => {
    node.addEventListener("contextmenu", event => {
      event.preventDefault();
      const anno = state.lastResponse.annotations.find(item => item.id === node.dataset.annotationId);
      openTraceForAnnotation(anno);
    });
    node.addEventListener("click", () => {
      const anno = state.lastResponse.annotations.find(item => item.id === node.dataset.annotationId);
      openTraceForAnnotation(anno);
    });
  });

  el.annotationLayer.querySelectorAll("[data-annotation-trace]").forEach(button => {
    button.addEventListener("click", event => {
      event.stopPropagation();
      const anno = state.lastResponse.annotations.find(item => item.id === button.dataset.annotationTrace);
      openTraceForAnnotation(anno);
    });
  });
}

function renderAssistantOutput(response) {
  if (!response) return;
  el.aiMode.textContent = response.mode.includes("gemini") ? "Gemini + tools" : "Backend mock";

  el.assistantOutput.innerHTML = `
    <div class="answer-box">
      <p>${escapeHtml(response.answer)}</p>
      <div class="meta-row">
        <span class="chip computed">confidence: ${escapeHtml(response.confidence)}</span>
        <span class="chip">mode: ${escapeHtml(response.mode)}</span>
      </div>
      ${response.geminiError ? `<div class="meta-row"><span class="chip needs_review">${escapeHtml(response.geminiError)}</span></div>` : ""}
    </div>

    <div class="chip-row">
      ${(response.selfCheck || []).map(check => `
        <span class="chip ${escapeHtml(check.status)}" title="${escapeHtml(check.detail)}">${escapeHtml(check.label)}: ${escapeHtml(check.status)}</span>
      `).join("")}
    </div>

    <div class="claim-list">
      ${(response.claims || []).map(claim => `
        <div class="claim-card">
          <strong>${escapeHtml(claim.type)}</strong>
          <span>${escapeHtml(claim.text)}</span>
        </div>
      `).join("")}
    </div>

    <div class="source-list">
      ${(response.sources || []).map(source => `
        <div class="source-card" data-source-id="${escapeHtml(source.id)}">
          <strong>${escapeHtml(source.title)}</strong>
          <span>${escapeHtml(source.section || source.type)}${source.page ? ` | page ${escapeHtml(source.page)}` : ""}</span>
        </div>
      `).join("")}
    </div>
  `;

  el.assistantOutput.querySelectorAll("[data-source-id]").forEach(card => {
    card.addEventListener("contextmenu", event => {
      event.preventDefault();
      openTraceForSource(card.dataset.sourceId);
    });
    card.addEventListener("click", () => {
      openTraceForSource(card.dataset.sourceId);
    });
  });
}

function openTraceForSource(sourceId) {
  if (!state.lastResponse) return;
  const source = state.lastResponse.sources.find(item => item.id === sourceId);
  if (!source) return;
  openDrawer([source], `Source: ${source.title}`);
}

function openTraceForAnnotation(anno) {
  if (!state.lastResponse || !anno) return;
  const sources = state.lastResponse.sources.filter(source => anno.sourceIds.includes(source.id));
  openDrawer(sources, `Annotation: ${anno.message}`, anno);
}

function openDrawer(sources, intro, annotation) {
  el.sourceDrawer.classList.add("open");
  el.traceIntro.textContent = intro;

  const annotationBlock = annotation ? `
    <div class="trace-card">
      <h3>Visual Annotation</h3>
      <dl>
        <dt>Target</dt><dd>${escapeHtml(annotation.target)}</dd>
        <dt>Severity</dt><dd>${escapeHtml(annotation.severity)}</dd>
        <dt>Lens</dt><dd>${escapeHtml(annotation.lens)}</dd>
        <dt>Action</dt><dd>${escapeHtml(annotation.rightClickAction)}</dd>
      </dl>
      <div class="trace-excerpt">${escapeHtml(annotation.message)}</div>
    </div>
  ` : "";

  const sourceBlocks = sources.length ? sources.map(source => `
    <div class="trace-card">
      <h3>${escapeHtml(source.title)}</h3>
      <dl>
        <dt>Type</dt><dd>${escapeHtml(source.type)}</dd>
        <dt>Section</dt><dd>${escapeHtml(source.section || "n/a")}</dd>
        <dt>Page</dt><dd>${source.page ? escapeHtml(source.page) : "n/a"}</dd>
        <dt>Status</dt><dd>${escapeHtml(source.verificationStatus)}</dd>
        <dt>Action</dt><dd>${escapeHtml(source.rightClickAction)}</dd>
      </dl>
      <div class="trace-excerpt">${escapeHtml(source.exactText)}</div>
    </div>
  `).join("") : `
    <div class="trace-card">
      <h3>No direct source found</h3>
      <div class="trace-excerpt">This annotation did not return a matching source id. In production, this should be blocked or labeled as unsupported.</div>
    </div>
  `;

  el.sourceTraceBody.innerHTML = annotationBlock + sourceBlocks;
}

async function askAssistant(question, screenshotMode = false) {
  if (!question.trim()) return;
  el.askButton.disabled = true;
  el.askButton.textContent = "Checking...";
  el.assistantOutput.innerHTML = `<div class="empty-state">Retrieving project memory, running checks, and preparing annotations.</div>`;

  try {
    const response = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        question,
        section: sectionById(state.activeSection).title,
        selectedElement: state.project.designModel.selectedElement,
        screenshotMode
      })
    });
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.error || "Assistant request failed");
    }
    state.lastResponse = result;
    state.screenshotMode = screenshotMode;
    renderAssistantOutput(result);
    renderAnnotations();
    await refreshProject();
  } catch (error) {
    el.assistantOutput.innerHTML = `<div class="empty-state">Assistant error: ${escapeHtml(error.message)}</div>`;
  } finally {
    el.askButton.disabled = false;
    el.askButton.textContent = "Ask Assistor";
  }
}

async function recordDecision() {
  const current = state.lastResponse;
  const decision = window.prompt("Record architect decision", "Revise the current design based on AI review.");
  if (!decision) return;
  const reason = window.prompt("Reason for decision", "Preserve client intent while resolving project constraints.") || "";
  const response = await fetch("/api/decision", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      section: sectionById(state.activeSection).title,
      decision,
      reason,
      sourceIds: current ? current.sources.map(source => source.id) : [],
      annotationIds: current ? current.annotations.map(anno => anno.id) : []
    })
  });
  if (response.ok) {
    await refreshProject();
    el.assistantOutput.insertAdjacentHTML("afterbegin", `<div class="answer-box"><p>Decision saved into project memory.</p></div>`);
  }
}

async function refreshProject() {
  const response = await fetch("/api/project");
  state.project = await response.json();
  renderProjectHeader();
}

function render() {
  document.body.dataset.activeSection = state.authView ? "dashboard" : state.activeSection;
  document.body.dataset.authView = state.authView || "";
  renderPageChrome();
  renderNav();
  renderProjectHeader();
  renderSection();
  renderIntegrations();
  renderSurface();
  renderAnnotations();
}

async function init() {
  await refreshProject();
  render();

  window.traceAnnotationFromDom = id => {
    if (!state.lastResponse) return;
    const anno = state.lastResponse.annotations.find(item => item.id === id);
    openTraceForAnnotation(anno);
  };

  document.querySelectorAll("[data-question]").forEach(button => {
    button.addEventListener("click", () => {
      el.questionInput.value = button.dataset.question;
      askAssistant(button.dataset.question, false);
    });
  });

  el.askButton.addEventListener("click", () => askAssistant(el.questionInput.value, false));

  el.questionInput.addEventListener("keydown", event => {
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
      askAssistant(el.questionInput.value, false);
    }
  });

  el.homeButton.addEventListener("click", () => {
    state.authView = null;
    state.activeSection = "dashboard";
    state.selectedRole = null;
    render();
  });

  if (el.loginButton) {
    el.loginButton.addEventListener("click", () => {
      state.authView = "login";
      state.activeSection = "dashboard";
      render();
    });
  }

  el.closeDrawer.addEventListener("click", () => {
    el.sourceDrawer.classList.remove("open");
    el.traceIntro.textContent = "Right-click an annotation or source card.";
    el.sourceTraceBody.innerHTML = "";
  });
}

init();
