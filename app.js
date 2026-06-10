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
    title: "Site Intelligence Module",
    stage: "Verified site knowledge",
    desc: "Evidence, survey, GIS, policy, environmental, utility, risk, opportunity, and digital twin records.",
    goal: "Transform raw site information into a verified design knowledge system.",
    actions: ["Intake evidence", "Verify claims", "Score risks", "Package decisions"],
    ai: ["Explains what is verified", "Flags missing inputs", "Recommends next best actions"]
  },
  {
    id: "data",
    title: "Database / Data Storage + CSV",
    stage: "Structured project memory",
    desc: "Store project facts, sustainability metrics, flood strategy, initiative data, custom case studies, and JSON/CSV exports.",
    goal: "Keep project information reusable across GIS, AI, design, reports, case studies, and external tools.",
    actions: ["Review saved data", "Generate case studies", "Download JSON", "Download CSV"],
    ai: ["Detects missing data", "Builds case records", "Explains export-ready evidence"]
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
    title: "ArcGIS Pro / Spatial Mapping",
    stage: "Spatial intelligence",
    desc: "ArcGIS web maps, ArcGIS Pro project handoff, GIS layers, site context, risks, and opportunities.",
    goal: "Understand the site as a layered spatial system connected to ArcGIS Pro and web map evidence.",
    actions: ["Embed ArcGIS map", "Track Pro package", "Compare overlays", "Publish map findings"],
    ai: ["Interprets overlaps", "Links ArcGIS layers", "Suggests placement reviews"]
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
const policySourceOptions = ["Manual entry", "Manual reviewer entry", "Municipal zoning map", "County parcel viewer", "Parcel database", "ArcGIS REST service", "Policy PDF", "GIS layer", "Uploaded GIS layer", "Other"];
const siteAspectCategoryOptions = ["Survey", "GIS", "Environmental", "Utilities", "Zoning / Policy", "Hazard", "Sensor", "Access", "Easement", "Other"];
const gisLayerTypeOptions = ["Parcel boundary", "Zoning district", "Overlay district", "Flood / hydrology", "Topography / contours", "Soils", "Utilities", "Vegetation", "Viewshed", "Transportation", "Environmental constraint", "Custom research"];
const lookupMethodOptions = ["Manual entry", "Municipal GIS", "County parcel viewer", "ArcGIS REST service", "Uploaded GIS layer", "Policy PDF", "Surveyor entry", "Other"];
const evidenceStrictnessOptions = ["Balanced", "Flexible concept", "Permit-ready"];
const riskToleranceOptions = ["Conservative", "Exploratory", "Permit cautious"];
const policyConfidenceOptions = ["Entered", "Reviewed", "Source linked", "Verified only"];
const sustainabilityPriorityOptions = ["Balanced performance", "Operational energy first", "Low carbon first", "Water + landscape first", "Accessibility + wellness first"];
const assistantModeOptions = ["Qwen local + deterministic fallback", "Qwen + DeepSeek review", "Deterministic only", "Gemini if configured"];
const ragDepthOptions = ["Evidence pack", "Strict citations", "Broad project memory"];
const reasoningSpecialistOptions = ["DeepSeek R1 on complex checks", "Qwen only", "Manual consultant review"];
const wcagPriorityOptions = ["WCAG AA", "High contrast / large target", "Keyboard-first"];

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
      clientName: "Residential client / research review",
      architectName: "HCT / ASTRA design team",
      parcelNumber: "Pending parcel lookup",
      municipality: "Aalborg Municipality",
      projectType: "Residential prototype",
      projectStage: "Site feasibility / concept planning",
      currentLandUse: "Demo residential parcel",
      desiredFutureUse: "Daylight-rich low-energy residence",
      architectNotes: "Preserve landscape connection, daylight, and clear design rationale while tracking site risk and regulatory constraints.",
      clientGoals: "Daylight, energy efficiency, low carbon, accessibility, landscape preservation, and a disciplined budget target.",
      annualEnergyUse: "Target pending ASHRAE model",
      embodiedCarbon: "Low-carbon timber strategy under review",
      constructionCost: "Budget target pending client approval",
      daylightFactor: "High daylight priority with glare checks",
      walkability: "Site access and frontage under review",
      stormwaterRetention: "Rainwater-supported planting and western low-point mitigation",
      surveyorName: "",
      surveyorCompany: "",
      surveyDate: "",
      verifiedBy: "",
      sourceConfidence: "Medium",
      uploadDocumentType: "Topographic Survey",
      uploadOtherDocumentType: "",
      uploadSourceName: "",
      uploadSourceUrl: "",
      uploadUploadedBy: "",
      uploadVerificationStatus: "unverified",
      benchmarkDatum: "Demo survey benchmark D-01 / surveyor datum",
      minElevation: "102.4 ft",
      maxElevation: "114.8 ft",
      contourInterval: "2 ft",
      averageSlope: "8%",
      slopeDirection: "north-east",
      spotElevations: "West low point: 102.4 ft; central buildable bench: 109.6 ft; south frontage: 112.1 ft.",
      existingStructures: "None confirmed",
      accessNotes: "Southern frontage",
      easementNotes: "Easements pending confirmation",
      drainageNotes: "Western low point should be reviewed before placement.",
      addressLookup: "Demo Parcel, Cold Climate Zone",
      parcelApn: "DEMO-R1-014520",
      cityCounty: "Aalborg / Demo County",
      stateRegion: "North Jutland Region",
      country: "Denmark",
      latitude: "57.0488",
      longitude: "9.9217",
      jurisdiction: "Aalborg Municipality",
      zoningDistrict: "Residential",
      detectedZoneArea: "R-1 Demo Residential",
      overlays: "Stormwater flow path, view corridor",
      policySourceUrl: "Demo City Zoning Ordinance pp. 42-45; Demo Sustainable Building Incentive Guide p. 12",
      policyLookupStatus: "source linked",
      lastPolicyCheck: "2026-06-09",
      zoneInitiatives: "Solar-ready roof area, passive design documentation, rainwater retention landscape strategy, and expedited sustainability review are available as demo initiative paths once source eligibility is confirmed.",
      policySummary: "R-1 Demo Residential basis: 20 ft front setback, 10 ft side setback, 35 ft height limit, stormwater/view corridor overlays, and residential low-impact development review.",
      buildingCodeSummary: "Confirm adopted local residential code, fire access, egress, envelope performance, structural loads, stormwater coordination, and ASHRAE-informed energy assumptions before permit-ready claims.",
      elevationPolicy: "Use the demo survey datum, 102.4-114.8 ft elevation range, 2 ft contour interval, and 8% north-east slope to keep primary structure out of the western stormwater low point.",
      riskPrevention: "Shift primary massing away from the western low point, keep setbacks visible during layout, document solar-ready/passive measures, and reserve consultant review for geotechnical, drainage, and fire access items.",
      permittingProcedures: "1. Confirm parcel and zoning source. 2. Verify overlays and flood/stormwater requirements. 3. Resolve setback/height conflicts. 4. Attach sustainability initiative evidence. 5. Package drawings, calculations, and consultant notes for review.",
      permittingSpeed: "Standard review assumption: 6-10 weeks. Expedited sustainability review may be possible if the solar-ready envelope, passive design, and stormwater retention initiative evidence is complete.",
      issueRecoveryProcedures: "If a rule conflict appears, freeze the affected design decision, identify the source record, compare the current model value, propose a massing/material/site adjustment, and route unresolved items to planner or consultant review.",
      environmentalHazards: "Medium stormwater flow at the western low point, 8% slope/foundation coordination, unknown geotechnical confirmation, and late-day solar heat gain from southwest orientation.",
      policyDesignImplications: "Keep the buildable envelope east/north-east of the stormwater low point, lower or step the 39 ft massing toward the 35 ft height rule, preserve the west/southwest view corridor, and pair daylight goals with shading and high-performance glazing.",
      lookupMethod: "Manual entry",
      gisSourceUrl: "Demo GIS layer stack: parcel, stormwater, viewshed, vegetation",
      gisLookupStatus: "active",
      arcgisPortalUrl: "https://www.arcgis.com",
      arcgisProInstallStatus: "not installed",
      arcgisProInstallUrl: "https://doc.esri.com/en/arcgis-pro/latest/get-started/install-and-sign-in-to-arcgis-pro.html",
      arcgisProProductUrl: "https://www.esri.com/en-us/arcgis/products/arcgis-pro/overview",
      arcgisProLicenseStatus: "unknown",
      arcgisProVersion: "",
      arcgisWebMapId: "",
      arcgisEmbedUrl: "",
      arcgisFeatureServiceUrl: "",
      arcgisSceneUrl: "",
      arcgisProProjectName: "Aalborg HCT Site Intelligence.aprx",
      arcgisProProjectPath: "",
      arcgisProPackageName: "astra-site-intelligence.ppkx",
      arcgisCoordinateSystem: "WGS 84 / Web Mercator auxiliary sphere",
      arcgisLayerSyncStatus: "not connected",
      arcgisProWorkflow: "Open the exported ArcGIS Pro handoff JSON, add saved feature service or GIS package layers to the Pro project, then publish a web map or paste its embed URL here.",
      evidenceStrictness: "Balanced",
      riskTolerance: "Conservative",
      opportunityThreshold: "75",
      policyConfidenceRequired: "Source linked",
      sustainabilityPriority: "Balanced performance",
      assistantMode: "Qwen local + deterministic fallback",
      ragDepth: "Evidence pack",
      reasoningSpecialist: "DeepSeek R1 on complex checks",
      wcagPriority: "WCAG AA"
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
      { name: "Solar orientation", impact: 95, value: "Southwest orientation supports daylight goals but should be paired with shading and envelope review." },
      { name: "Views to preserve", impact: 90, value: "Best long view is toward the west/southwest edge of the parcel." },
      { name: "Stormwater reuse", impact: 85, value: "Rainwater and landscape systems can connect client sustainability goals to hydrology findings." },
      { name: "Passive cooling", impact: 82, value: "Tree line and open edges can be studied for seasonal wind buffering and cross-ventilation." },
      { name: "Building placement", impact: 80, value: "Use the verified slope and stormwater path to avoid placing the primary mass in the low western flow area." },
      { name: "Landscape strategy", impact: 76, value: "Northern tree line can provide seasonal wind buffering." }
    ],
    sourceFindings: [
      { aspect: "Parcel area", category: "Survey", value: "14,520 sq ft", documentType: "Topographic Survey", otherDocumentType: "", sourceName: "Surveyor upload", sourceUrl: "", owner: "Land Surveyor", status: "verified", verifiedBy: "Land Surveyor", lastChecked: "" },
      { aspect: "Medium stormwater risk", category: "GIS", value: "Western low point intersects a medium-risk stormwater flow path.", documentType: "GIS Layer", otherDocumentType: "", sourceName: "Stormwater overlay", sourceUrl: "", owner: "GIS Analyst", status: "active", verifiedBy: "GIS Analyst", lastChecked: "" },
      { aspect: "Residential zone assumption", category: "Zoning / Policy", value: "Residential district must be confirmed with official municipal source.", documentType: "Zoning Policy", otherDocumentType: "", sourceName: "Manual reviewer entry", sourceUrl: "", owner: "Planner / Reviewer", status: "pending lookup", verifiedBy: "", lastChecked: "" }
    ],
    additionalAspects: [
      { name: "Neighbor privacy", category: "Other", value: "Confirm adjacent sight lines before final window placement.", documentType: "Field Note", otherDocumentType: "", sourceName: "Site visit note", sourceUrl: "", status: "needs review", verifiedBy: "", lastChecked: "" }
    ],
    gisFindings: [
      { name: "Parcel boundary", layerType: "Parcel boundary", finding: "Boundary should be checked against the survey baseline before design lock.", geometry: "Parcel polygon", sourceName: "Survey / parcel GIS", sourceUrl: "", status: "needs review", usedFor: "Massing fit, setbacks, parcel export", documentType: "GIS Layer", otherDocumentType: "", verifiedBy: "", lastChecked: "" },
      { name: "Flood risk overlay", layerType: "Flood / hydrology", finding: "Western low point intersects a medium-risk stormwater flow path.", geometry: "Western site low point", sourceName: "Stormwater overlay", sourceUrl: "", status: "active", usedFor: "Site hazards, grading, stormwater strategy", documentType: "GIS Layer", otherDocumentType: "", verifiedBy: "GIS Analyst", lastChecked: "" },
      { name: "Primary view corridor", layerType: "Viewshed", finding: "Best long view is toward the west/southwest edge of the parcel.", geometry: "West / southwest view cone", sourceName: "Custom research layer", sourceUrl: "", status: "active", usedFor: "Orientation, glazing, exterior spaces", documentType: "GIS Layer", otherDocumentType: "", verifiedBy: "GIS Analyst", lastChecked: "" }
    ],
    hazards: [
      { name: "Flooding", severity: "High", value: "Western low point intersects a medium-risk stormwater flow path.", documentType: "GIS Layer", sourceName: "Stormwater overlay", status: "active", verifiedBy: "GIS Analyst", lastChecked: "" },
      { name: "Slope", severity: "Medium", value: "Average slope should be verified against spot elevations before foundation assumptions.", documentType: "Topographic Survey", sourceName: "Surveyor field record", status: "needs review", verifiedBy: "", lastChecked: "" },
      { name: "Soil unknown", severity: "High", value: "Geotechnical report needed before excavation or structural assumptions.", documentType: "Soil / Geotechnical", sourceName: "Pending geotech", status: "missing", verifiedBy: "", lastChecked: "" },
      { name: "Utility conflict", severity: "Medium", value: "Coordinate water-east, power-south, and stormwater-west with service entries and massing.", documentType: "Utility Locate", sourceName: "Utility locate / civil review", status: "needs review", verifiedBy: "", lastChecked: "" }
    ],
    sensors: [
      { name: "West low-point moisture", sensorType: "Moisture", location: "Western drainage low point", latestReading: "No live feed connected", unit: "", timestamp: "", status: "missing", sourceName: "Sensor / IoT Feed" },
      { name: "Boundary noise reading", sensorType: "Noise", location: "Southern frontage", latestReading: "Pending field reading", unit: "dBA", timestamp: "", status: "needs review", sourceName: "Field sensor" },
      { name: "On-site temperature", sensorType: "Temperature", location: "Center parcel", latestReading: "Manual weather lookup needed", unit: "F", timestamp: "", status: "needs review", sourceName: "Weather / field feed" },
      { name: "Traffic observation", sensorType: "Other", location: "Southern frontage", latestReading: "Manual count pending", unit: "vehicles/hr", timestamp: "", status: "missing", sourceName: "Traffic feed" }
    ],
    policyLookups: [
      { name: "Zoning district lookup", address: "Demo Parcel, Cold Climate Zone", parcelApn: "DEMO-R1-014520", jurisdiction: "Aalborg Municipality", result: "R-1 Demo Residential district with 20 ft front setback, 10 ft side setback, and 35 ft height limit.", documentType: "Zoning Policy", sourceName: "Demo City Zoning Ordinance", sourceUrl: "Demo City Zoning Ordinance pp. 42-45", status: "source linked", verifiedBy: "Planner / Policy Reviewer", lastChecked: "2026-06-09" },
      { name: "Overlay check", address: "Demo Parcel, Cold Climate Zone", parcelApn: "DEMO-R1-014520", jurisdiction: "Aalborg Municipality", result: "Stormwater flow path and west/southwest view corridor overlays affect placement, grading, and landscape preservation decisions.", documentType: "GIS Layer", sourceName: "Demo GIS overlay stack", sourceUrl: "Demo GIS layer stack: stormwater, viewshed, vegetation", status: "active", verifiedBy: "GIS Analyst", lastChecked: "2026-06-09" },
      { name: "Sustainability initiative review", address: "Demo Parcel, Cold Climate Zone", parcelApn: "DEMO-R1-014520", jurisdiction: "Aalborg Municipality", result: "Solar-ready roof area, passive design measures, and rainwater retention landscape strategy may support expedited sustainability review once eligibility is confirmed.", documentType: "Zoning Policy", sourceName: "Demo Sustainable Building Incentive Guide", sourceUrl: "Demo Sustainable Building Incentive Guide p. 12", status: "needs review", verifiedBy: "", lastChecked: "2026-06-09" },
      { name: "Flood and stormwater procedure", address: "Demo Parcel, Cold Climate Zone", parcelApn: "DEMO-R1-014520", jurisdiction: "Aalborg Municipality", result: "Primary massing should avoid the western low point and maintain a landscape/stormwater retention strategy before final grading assumptions.", documentType: "GIS Layer", sourceName: "Stormwater overlay and demo survey datum", sourceUrl: "Demo GIS layer stack / survey benchmark D-01", status: "active", verifiedBy: "GIS Analyst", lastChecked: "2026-06-09" }
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
    caseStudies: [
      {
        title: "Outcome-Led Low-Energy Residence",
        audience: "Client / design review",
        desiredOutcome: "Warm, daylight-rich, low-energy residence with natural materials and a clear landscape relationship.",
        focus: "Desired outcome + sustainability metrics",
        sustainabilityMetrics: "Target pending ASHRAE model, low-carbon timber strategy, daylight score 82, embodied carbon comparison -14%.",
        floodStrategy: "Keep the primary massing out of the western low point and pair landscape preservation with rainwater-supported planting.",
        initiativeDevelopment: "Use solar-ready roof area, passive design evidence, and rainwater retention as initiative-based development supports.",
        designResponse: "Orient primary living spaces toward west/southwest views while balancing glare, shading, and envelope performance.",
        evidenceBasis: "Client brief, sun study V4, ASHRAE/sustainability result V4, material carbon comparison V2, stormwater GIS overlay.",
        recommendedActions: "Resolve height/front setback conflicts, confirm ASHRAE target, document shading, and verify eligibility for expedited sustainability review.",
        status: "source linked",
        documentType: "Case Study",
        sourceName: "ASTRA generated from saved project data",
        sourceUrl: "",
        verifiedBy: "ASTRA deterministic generator",
        lastChecked: "2026-06-09",
        generated: true
      },
      {
        title: "Limited Flooding + Stormwater Resilience",
        audience: "Planner / civil coordination",
        desiredOutcome: "Limit flood exposure while preserving design quality and landscape value.",
        focus: "Limited flooding + risk prevention",
        sustainabilityMetrics: "Stormwater retention priority, rainwater-supported planting, western low-point mitigation, and open space preservation.",
        floodStrategy: "Maintain a no-build/low-impact landscape zone at the western low point, route runoff through retention planting, and verify grading before foundation lock.",
        initiativeDevelopment: "Frame stormwater management as a low-impact development initiative tied to landscape preservation and permitting readiness.",
        designResponse: "Shift massing eastward/north-east, protect view corridors, and coordinate service entries away from mapped stormwater conflict areas.",
        evidenceBasis: "Flood risk overlay, topographic survey benchmark, drainage notes, utility locate, and risk register.",
        recommendedActions: "Request civil review, add stormwater details to GIS package, verify soil/geotechnical assumptions, and keep moisture monitoring as a digital twin item.",
        status: "active",
        documentType: "Case Study",
        sourceName: "ASTRA generated from saved project data",
        sourceUrl: "",
        verifiedBy: "GIS Analyst / ASTRA",
        lastChecked: "2026-06-09",
        generated: true
      },
      {
        title: "Initiative-Based Sustainable Development",
        audience: "Permit / sustainability review",
        desiredOutcome: "Use policy initiatives to improve permitting readiness and design quality without fragmenting the workflow.",
        focus: "Initiative based development",
        sustainabilityMetrics: "Solar-ready envelope, passive design measures, low embodied carbon material strategy, and rainwater retention package.",
        floodStrategy: "Tie stormwater retention to landscape and flood-risk mitigation rather than treating it as a late civil correction.",
        initiativeDevelopment: "Package solar-ready roof area, passive design, low-carbon timber, and rainwater retention as a coordinated initiative path.",
        designResponse: "Create a policy-ready design narrative that explains why orientation, materials, envelope, and landscape are connected decisions.",
        evidenceBasis: "Demo Sustainable Building Incentive Guide, verified policy rules, material intent, ASHRAE result, and Site Intelligence Package.",
        recommendedActions: "Confirm initiative eligibility, attach source pages, update design model values, and export case study CSV for review tracking.",
        status: "needs review",
        documentType: "Case Study",
        sourceName: "ASTRA generated from saved project data",
        sourceUrl: "Demo Sustainable Building Incentive Guide p. 12",
        verifiedBy: "",
        lastChecked: "2026-06-09",
        generated: true
      }
    ],
    packageItems: [
      { name: "Executive summary", included: true },
      { name: "Site summary", included: true },
      { name: "Survey summary", included: true },
      { name: "GIS summary", included: true },
      { name: "Policy summary", included: true },
      { name: "Environmental summary", included: true },
      { name: "Utility summary", included: true },
      { name: "Risk register", included: true },
      { name: "Opportunity register", included: true },
      { name: "Design implications", included: true },
      { name: "Sustainability implications", included: true },
      { name: "Recommended actions", included: true },
      { name: "Missing information", included: true },
      { name: "Compliance readiness", included: true },
      { name: "AI confidence score", included: true }
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

function mergeSiteFields(baseFields, savedFields) {
  const saved = savedFields && typeof savedFields === "object" ? savedFields : {};
  const merged = { ...baseFields };
  Object.entries(saved).forEach(([key, value]) => {
    const hasSavedValue = String(value ?? "").trim() !== "";
    if (hasSavedValue || !baseFields[key]) merged[key] = value;
  });
  return merged;
}

function mergeSiteRecordsByName(baseItems, savedItems) {
  if (!Array.isArray(savedItems)) return baseItems;
  const keyFor = item => String(item.id || item.name || item.title || item.aspect || "").trim().toLowerCase();
  const savedByKey = new Map(savedItems.map(item => [keyFor(item), item]));
  const mergedBase = baseItems.map(baseItem => {
    const savedItem = savedByKey.get(keyFor(baseItem));
    if (!savedItem) return baseItem;
    const merged = { ...baseItem };
    Object.entries(savedItem).forEach(([key, value]) => {
      const hasSavedValue = String(value ?? "").trim() !== "";
      if (hasSavedValue || !baseItem[key]) merged[key] = value;
    });
    return merged;
  });
  const baseKeys = new Set(baseItems.map(keyFor));
  const extraSaved = savedItems.filter(item => !baseKeys.has(keyFor(item)));
  return [...mergedBase, ...extraSaved];
}

function mergeSiteSurvey(saved) {
  const base = initialSiteSurvey();
  if (!saved || typeof saved !== "object") return base;
  return {
    ...base,
    ...saved,
    fields: mergeSiteFields(base.fields, saved.fields),
    uploads: Array.isArray(saved.uploads) ? saved.uploads : base.uploads,
    environmental: Array.isArray(saved.environmental) ? saved.environmental : base.environmental,
    utilities: Array.isArray(saved.utilities) ? saved.utilities : base.utilities,
    constraints: Array.isArray(saved.constraints) ? saved.constraints : base.constraints,
    opportunities: Array.isArray(saved.opportunities) ? saved.opportunities : base.opportunities,
    sourceFindings: Array.isArray(saved.sourceFindings) ? saved.sourceFindings : base.sourceFindings,
    additionalAspects: Array.isArray(saved.additionalAspects) ? saved.additionalAspects : base.additionalAspects,
    gisFindings: Array.isArray(saved.gisFindings) ? saved.gisFindings : base.gisFindings,
    hazards: Array.isArray(saved.hazards) ? saved.hazards : base.hazards,
    sensors: Array.isArray(saved.sensors) ? saved.sensors : base.sensors,
    policyLookups: mergeSiteRecordsByName(base.policyLookups, saved.policyLookups),
    evidence: Array.isArray(saved.evidence) ? saved.evidence : base.evidence,
    aiInterpretation: Array.isArray(saved.aiInterpretation) ? saved.aiInterpretation : base.aiInterpretation,
    caseStudies: mergeSiteRecordsByName(base.caseStudies, saved.caseStudies),
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

function initialActiveSection() {
  if (typeof window === "undefined") return "dashboard";
  const requested = new URLSearchParams(window.location.search).get("section") || window.location.hash.replace("#", "");
  return sections.some(section => section.id === requested) ? requested : "dashboard";
}

const state = {
  project: null,
  activeSection: initialActiveSection(),
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
  localAdviceHistory: [],
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
  assistantRecommendations: document.getElementById("assistantRecommendations"),
  questionInput: document.getElementById("questionInput"),
  askButton: document.getElementById("askButton"),
  assistantOutput: document.getElementById("assistantOutput"),
  adviceHistory: document.getElementById("adviceHistory"),
  annotationLayer: document.getElementById("annotationLayer"),
  sourceDrawer: document.getElementById("sourceDrawer"),
  sourceTraceBody: document.getElementById("sourceTraceBody"),
  traceIntro: document.getElementById("traceIntro"),
  closeDrawer: document.getElementById("closeDrawer"),
  aiMode: document.getElementById("aiMode"),
  homeButton: document.getElementById("homeButton"),
  loginButton: document.getElementById("loginButton"),
  toTopButton: document.getElementById("toTopButton"),
  exportInfoModal: document.getElementById("exportInfoModal"),
  exportInfoEyebrow: document.getElementById("exportInfoEyebrow"),
  exportInfoTitle: document.getElementById("exportInfoTitle"),
  exportInfoBody: document.getElementById("exportInfoBody"),
  exportInfoList: document.getElementById("exportInfoList"),
  exportInfoDownload: document.getElementById("exportInfoDownload")
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
      ${siteRowInput(group, index, "sourceUrl", item.sourceUrl || "", "Source URL / citation")}
      ${siteRowSelect(group, index, "status", item.status || "unverified", "Verification status", siteVerificationStatusOptions)}
      ${siteRowInput(group, index, "verifiedBy", item.verifiedBy || "", "Verified by")}
      ${siteRowInput(group, index, "lastChecked", item.lastChecked || "", "Last checked", "date")}
    </div>
  `;
}

function sourceStatusText(item) {
  const documentType = item.documentType === "Other" && item.otherDocumentType ? item.otherDocumentType : item.documentType;
  return [documentType, item.sourceName, item.sourceUrl, item.status].filter(Boolean).join(" / ") || "source pending";
}

function siteSurveyAssistantFindings(survey) {
  const fields = survey.fields || {};
  const allEvidence = [
    ...(survey.sourceFindings || []),
    ...(survey.additionalAspects || []),
    ...(survey.gisFindings || []),
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

function siteStatusClass(value) {
  return String(value || "unknown").toLowerCase().replace(/[^a-z0-9]+/g, "-") || "unknown";
}

function siteEvidenceRecords(survey) {
  return [
    ...(survey.sourceFindings || []),
    ...(survey.additionalAspects || []),
    ...(survey.gisFindings || []),
    ...(survey.evidence || []),
    ...(survey.hazards || []),
    ...(survey.policyLookups || []),
    ...(survey.uploads || [])
  ];
}

function isVerifiedSiteStatus(status) {
  return ["verified", "active", "source linked", "approved"].includes(String(status || "").toLowerCase());
}

function clampNumber(value, min, max) {
  const number = Number(value);
  if (!Number.isFinite(number)) return min;
  return Math.max(min, Math.min(max, number));
}

function optionValue(value, options, fallback) {
  const current = String(value || "");
  return options.includes(current) ? current : fallback;
}

function siteAdjustmentSettings(survey) {
  const fields = survey.fields || {};
  const evidenceStrictness = optionValue(fields.evidenceStrictness, evidenceStrictnessOptions, "Balanced");
  const riskTolerance = optionValue(fields.riskTolerance, riskToleranceOptions, "Conservative");
  const opportunityThreshold = clampNumber(fields.opportunityThreshold || 75, 0, 100);
  const policyConfidenceRequired = optionValue(fields.policyConfidenceRequired, policyConfidenceOptions, "Source linked");
  const sustainabilityPriority = optionValue(fields.sustainabilityPriority, sustainabilityPriorityOptions, "Balanced performance");
  const assistantMode = optionValue(fields.assistantMode, assistantModeOptions, "Qwen local + deterministic fallback");
  const ragDepth = optionValue(fields.ragDepth, ragDepthOptions, "Evidence pack");
  const reasoningSpecialist = optionValue(fields.reasoningSpecialist, reasoningSpecialistOptions, "DeepSeek R1 on complex checks");
  const wcagPriority = optionValue(fields.wcagPriority, wcagPriorityOptions, "WCAG AA");

  const strictnessProfiles = {
    "Flexible concept": { verifiedWeight: 3.1, reviewPenalty: 1.1, missingPenalty: 4.5, riskPenalty: 2.4, note: "Concept guidance can use reviewed records, but it still labels them as non-final." },
    Balanced: { verifiedWeight: 2.8, reviewPenalty: 2.4, missingPenalty: 7, riskPenalty: 3, note: "Balanced mode allows early design advice while keeping unresolved records visible." },
    "Permit-ready": { verifiedWeight: 2.2, reviewPenalty: 4.2, missingPenalty: 10, riskPenalty: 4.6, note: "Permit-ready mode penalizes missing sources and review-needed records more heavily." }
  };
  const riskProfiles = {
    Exploratory: { riskOffset: -1.2, note: "Exploratory mode keeps creative options open while flagging unresolved risk." },
    Conservative: { riskOffset: 0, note: "Conservative mode protects against cost, permitting, and consultant surprises." },
    "Permit cautious": { riskOffset: 1.6, note: "Permit cautious mode treats high risk and missing evidence as stronger blockers." }
  };

  return {
    evidenceStrictness,
    riskTolerance,
    opportunityThreshold,
    policyConfidenceRequired,
    sustainabilityPriority,
    assistantMode,
    ragDepth,
    reasoningSpecialist,
    wcagPriority,
    ...strictnessProfiles[evidenceStrictness],
    riskPenalty: strictnessProfiles[evidenceStrictness].riskPenalty + riskProfiles[riskTolerance].riskOffset,
    riskNote: riskProfiles[riskTolerance].note
  };
}

function siteOpportunityScore(item, index = 0) {
  const defaults = [95, 90, 85, 82, 80, 76, 72, 68];
  return clampNumber(item.impact ?? defaults[index % defaults.length], 0, 100);
}

function siteRiskSeverity(item) {
  if (item.severity) return item.severity;
  const status = String(item.status || "").toLowerCase();
  const text = `${item.name || ""} ${item.value || ""}`.toLowerCase();
  if (status.includes("missing") || text.includes("flood") || text.includes("soil")) return "High";
  if (status.includes("needs") || status.includes("conflict")) return "Medium";
  return "Low";
}

function siteIntelligenceStats(survey) {
  const settings = siteAdjustmentSettings(survey);
  const evidence = siteEvidenceRecords(survey);
  const verified = evidence.filter(item => isVerifiedSiteStatus(item.status)).length;
  const missing = evidence.filter(item => String(item.status || "").toLowerCase().includes("missing")).length;
  const needsReview = evidence.filter(item => String(item.status || "").toLowerCase().includes("review") || String(item.status || "").toLowerCase().includes("pending")).length;
  const criticalRisks = (survey.hazards || []).filter(item => siteRiskSeverity(item).toLowerCase() === "high").length;
  const opportunityScores = (survey.opportunities || []).map((item, index) => siteOpportunityScore(item, index));
  const opportunityAverage = opportunityScores.length
    ? Math.round(opportunityScores.reduce((sum, score) => sum + score, 0) / opportunityScores.length)
    : 0;
  const opportunityHits = opportunityScores.filter(score => score >= settings.opportunityThreshold).length;
  const confidence = clampNumber(
    55 +
    verified * settings.verifiedWeight -
    missing * settings.missingPenalty -
    needsReview * settings.reviewPenalty -
    criticalRisks * settings.riskPenalty +
    opportunityAverage * 0.1 +
    opportunityHits * 1.4,
    28,
    96
  );

  return {
    evidenceTotal: evidence.length,
    verified,
    missing,
    needsReview,
    criticalRisks,
    opportunityAverage,
    opportunityHits,
    confidence: Math.round(confidence),
    settings
  };
}

function siteRecordName(item) {
  return item.name || item.aspect || item.layerType || item.documentType || item.sourceName || "Unnamed record";
}

function siteRecordText(item) {
  return item.value || item.finding || item.result || item.latestReading || item.notes || "";
}

function siteDisplayValue(value) {
  const text = String(value ?? "").trim();
  return text ? text : "--";
}

function siteFactRecord(records, terms) {
  const list = Array.isArray(records) ? records : [];
  const needles = terms.map(term => String(term || "").toLowerCase());
  return list.find(item => {
    const haystack = `${item.name || ""} ${item.aspect || ""} ${item.category || ""} ${item.documentType || ""} ${siteRecordText(item)}`.toLowerCase();
    return needles.some(term => haystack.includes(term));
  }) || null;
}

function siteFactValueFromRecord(records, terms, fallback = "") {
  const record = siteFactRecord(records, terms);
  return siteDisplayValue(record ? siteRecordText(record) : fallback);
}

function siteFactDetailFromRecord(record, fallback = "No saved fact yet") {
  if (!record) return fallback;
  const source = sourceStatusText(record);
  const status = record.status ? `Status: ${record.status}` : "Status: --";
  return `${status}${source && source !== "source pending" ? ` / ${source}` : ""}`;
}

function siteFactGrid(rows, label = "Saved facts") {
  return `
    <div class="site-fact-grid" aria-label="${escapeHtml(label)}">
      ${rows.map(row => {
        const value = siteDisplayValue(row.value);
        const missing = value === "--";
        const tone = missing ? "missing" : siteStatusClass(row.status || "active");
        return `
          <article class="${escapeHtml(tone)}">
            <span>${escapeHtml(row.label)}</span>
            <strong>${escapeHtml(value)}</strong>
            <p>${escapeHtml(row.detail || (missing ? "No saved fact yet" : "Saved project fact"))}</p>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function siteEvidenceFactRows(survey, stats) {
  const records = siteEvidenceRecords(survey);
  const latestSource = [
    ...(survey.uploads || []),
    ...(survey.sourceFindings || []),
    ...(survey.evidence || [])
  ].find(item => item.sourceName || item.sourceUrl || item.name || item.aspect);
  const uncertain = stats.needsReview + stats.missing;

  return [
    {
      label: "Uploaded sources",
      value: (survey.uploads || []).length ? String((survey.uploads || []).length) : "--",
      detail: (survey.uploads || []).length ? "Saved uploaded-source metadata" : "No uploaded source saved yet",
      status: (survey.uploads || []).length ? "active" : "missing"
    },
    {
      label: "Verified facts",
      value: records.length ? String(stats.verified) : "--",
      detail: records.length ? `${records.length} total saved evidence records` : "No evidence records saved yet",
      status: stats.verified ? "verified" : "needs review"
    },
    {
      label: "Needs review",
      value: records.length ? String(uncertain) : "--",
      detail: records.length ? "Pending, review-needed, or missing records" : "No review queue yet",
      status: uncertain ? "needs review" : "verified"
    },
    {
      label: "Latest source",
      value: latestSource ? (latestSource.sourceName || latestSource.name || latestSource.aspect) : "--",
      detail: siteFactDetailFromRecord(latestSource, "No saved source yet"),
      status: latestSource?.status || "missing"
    }
  ];
}

function siteEnvironmentalFactRows(survey, fields) {
  const records = survey.environmental || [];
  const sun = siteFactRecord(records, ["sun", "solar", "daylight"]);
  const climate = siteFactRecord(records, ["climate", "ashrae", "degree"]);
  const wind = siteFactRecord(records, ["wind"]);
  const water = siteFactRecord(records, ["water", "runoff", "precip", "drain"]);
  const ecology = siteFactRecord(records, ["vegetation", "tree", "habitat", "species", "ecology"]);
  const verified = records.filter(item => isVerifiedSiteStatus(item.status)).length;

  return [
    { label: "Solar / daylight", value: siteDisplayValue(sun ? siteRecordText(sun) : fields.daylightFactor), detail: siteFactDetailFromRecord(sun), status: sun?.status || "active" },
    { label: "Climate basis", value: siteDisplayValue(climate ? siteRecordText(climate) : fields.climateZone), detail: siteFactDetailFromRecord(climate), status: climate?.status || "active" },
    { label: "Wind cue", value: siteDisplayValue(wind ? siteRecordText(wind) : ""), detail: siteFactDetailFromRecord(wind), status: wind?.status || "active" },
    { label: "Water / runoff", value: siteDisplayValue(water ? siteRecordText(water) : ""), detail: siteFactDetailFromRecord(water), status: water?.status || "active" },
    { label: "Ecology / landscape", value: siteDisplayValue(ecology ? siteRecordText(ecology) : ""), detail: siteFactDetailFromRecord(ecology), status: ecology?.status || "active" },
    { label: "Verified conditions", value: records.length ? String(verified) : "--", detail: records.length ? `${records.length} environmental records saved` : "No environmental records saved yet", status: verified ? "verified" : "needs review" }
  ];
}

function siteUtilityFactRows(survey) {
  const records = survey.utilities || [];
  const water = siteFactRecord(records, ["water"]);
  const sewer = siteFactRecord(records, ["sewer"]);
  const electrical = siteFactRecord(records, ["electrical", "power", "grid"]);
  const stormwater = siteFactRecord(records, ["stormwater", "drain"]);
  const telecom = siteFactRecord(records, ["internet", "fiber", "telecom", "wireless"]);
  const verified = records.filter(item => isVerifiedSiteStatus(item.status)).length;

  return [
    { label: "Water", value: siteFactValueFromRecord(records, ["water"]), detail: siteFactDetailFromRecord(water), status: water?.status || "missing" },
    { label: "Sewer", value: siteFactValueFromRecord(records, ["sewer"]), detail: siteFactDetailFromRecord(sewer), status: sewer?.status || "missing" },
    { label: "Electrical", value: siteFactValueFromRecord(records, ["electrical", "power", "grid"]), detail: siteFactDetailFromRecord(electrical), status: electrical?.status || "missing" },
    { label: "Stormwater", value: siteFactValueFromRecord(records, ["stormwater", "drain"]), detail: siteFactDetailFromRecord(stormwater), status: stormwater?.status || "missing" },
    { label: "Telecom / fiber", value: siteFactValueFromRecord(records, ["internet", "fiber", "telecom", "wireless"]), detail: siteFactDetailFromRecord(telecom), status: telecom?.status || "missing" },
    { label: "Verified utilities", value: records.length ? String(verified) : "--", detail: records.length ? `${records.length} utility records saved` : "No utility records saved yet", status: verified ? "verified" : "needs review" }
  ];
}

function siteStatusSummary(items) {
  const records = Array.isArray(items) ? items : [];
  const verified = records.filter(item => isVerifiedSiteStatus(item.status)).length;
  const needsReview = records.filter(item => String(item.status || "").toLowerCase().includes("review") || String(item.status || "").toLowerCase().includes("pending")).length;
  const missing = records.filter(item => String(item.status || "").toLowerCase().includes("missing")).length;
  return `${records.length} entered / ${verified} verified or active / ${needsReview} review / ${missing} missing`;
}

function siteTopOpportunity(survey) {
  const ranked = (survey.opportunities || [])
    .map((item, index) => ({ ...item, score: siteOpportunityScore(item, index) }))
    .sort((a, b) => b.score - a.score);
  return ranked[0] || null;
}

function siteDominantRisk(survey) {
  const severityRank = { high: 3, medium: 2, low: 1 };
  const ranked = (survey.hazards || [])
    .map(item => ({ ...item, severity: siteRiskSeverity(item) }))
    .sort((a, b) => (severityRank[String(b.severity || "").toLowerCase()] || 0) - (severityRank[String(a.severity || "").toLowerCase()] || 0));
  return ranked[0] || null;
}

function siteSectionInsightCard(title, body, basis = [], adjust = "", tone = "active") {
  return `
    <aside class="site-explain-card ${escapeHtml(siteStatusClass(tone))}">
      <div>
        <span class="mini-label">What this means</span>
        <strong>${escapeHtml(title)}</strong>
        <p>${escapeHtml(body)}</p>
      </div>
      ${basis.length ? `
        <ul>
          ${basis.map(item => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      ` : ""}
      ${adjust ? `<em>${escapeHtml(adjust)}</em>` : ""}
    </aside>
  `;
}

function siteSubsectionIntro(symbol, title, detail) {
  return `
    <div class="site-subsection-intro">
      <span>${escapeHtml(symbol)}</span>
      <div>
        <strong>${escapeHtml(title)}</strong>
        <p>${escapeHtml(detail)}</p>
      </div>
    </div>
  `;
}

function siteDecisionIllustration(stats) {
  const settings = stats.settings;
  return `
    <div class="site-logic-illustration" aria-label="Evidence to decision path">
      <div>
        <span>1</span>
        <strong>Entered data</strong>
        <p>${stats.evidenceTotal} evidence records and ${stats.criticalRisks} critical risks.</p>
      </div>
      <div>
        <span>2</span>
        <strong>RAG check</strong>
        <p>${settings.ragDepth}; ${settings.evidenceStrictness.toLowerCase()} evidence strictness.</p>
      </div>
      <div>
        <span>3</span>
        <strong>Advisor</strong>
        <p>${settings.assistantMode}; ${settings.reasoningSpecialist}.</p>
      </div>
      <div>
        <span>4</span>
        <strong>Decision</strong>
        <p>${stats.confidence}% readiness, ${stats.opportunityHits} opportunities above threshold.</p>
      </div>
    </div>
  `;
}

function siteExperienceArc(stats, survey, topOpportunity, dominantRisk) {
  const settings = stats.settings;
  const arc = [
    {
      key: "sense",
      label: "Sense",
      title: "Collect the site",
      detail: `${stats.evidenceTotal} records, ${stats.verified} verified or active.`,
      cue: "Evidence"
    },
    {
      key: "read",
      label: "Read",
      title: "Understand the limits",
      detail: dominantRisk ? `${dominantRisk.name}: ${dominantRisk.severity} risk.` : "Risk register is ready for entries.",
      cue: "Risk"
    },
    {
      key: "imagine",
      label: "Imagine",
      title: "Shape design direction",
      detail: topOpportunity ? `${topOpportunity.name} leads at ${siteOpportunityScore(topOpportunity)} impact.` : "Score opportunities to reveal creative direction.",
      cue: "Opportunity"
    },
    {
      key: "ask",
      label: "Ask",
      title: "Use ASTRA as colleague",
      detail: `${settings.ragDepth}; ${settings.evidenceStrictness.toLowerCase()} facts-first guidance.`,
      cue: "AI"
    },
    {
      key: "commit",
      label: "Commit",
      title: "Package what is ready",
      detail: `${stats.confidence}% readiness, with uncertain claims kept reviewable.`,
      cue: "Package"
    }
  ];

  return `
    <section class="site-experience-arc" aria-label="Site intelligence experience arc">
      <div class="experience-arc-copy">
        <span class="mini-label">Experience flow</span>
        <h3>From facts to creative direction, without fragmenting the work.</h3>
        <p>Each stage keeps evidence, design judgment, and ASTRA guidance in one connected path.</p>
      </div>
      <div class="experience-arc-track">
        ${arc.map((item, index) => `
          <article class="${escapeHtml(item.key)}">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <em>${escapeHtml(item.cue)}</em>
            <strong>${escapeHtml(item.title)}</strong>
            <p>${escapeHtml(item.detail)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function siteAgentStackRows(stats) {
  const settings = stats.settings;
  return [
    ["Main agent", settings.assistantMode.includes("Qwen") ? "Qwen via Ollama when configured" : settings.assistantMode, "Answers from the saved project, site survey, and evidence records first."],
    ["Deep reasoning", settings.reasoningSpecialist, "Reserved for compliance conflicts, ASHRAE tradeoffs, material placement, sun study, and sustainability decisions."],
    ["RAG memory", settings.ragDepth, `${stats.evidenceTotal} records available; citations stay attached to source names and verification status.`],
    ["Fallback", "Deterministic evidence engine", "No API key is required. If Ollama is not connected, ASTRA still gives bounded guidance from entered data."]
  ];
}

function siteAstraRecommendationRows(stats, survey, topOpportunity, dominantRisk) {
  const settings = stats.settings;
  return [
    {
      symbol: "NEXT",
      title: stats.missing || stats.needsReview ? "Close the evidence gaps first" : "Use this package for early design",
      detail: stats.missing || stats.needsReview
        ? `${stats.missing} missing and ${stats.needsReview} review-needed records are holding back confidence.`
        : "Verified records are strong enough for early massing, orientation, and package export.",
      tone: stats.missing || stats.needsReview ? "review" : "ready",
      question: "What is missing, and what should I investigate first?"
    },
    {
      symbol: "DES",
      title: topOpportunity ? topOpportunity.name : "Find a design driver",
      detail: topOpportunity
        ? `${siteOpportunityScore(topOpportunity)} impact; use it to guide massing, daylight, landscape, or material decisions.`
        : "Add scored opportunities to turn raw data into creative design direction.",
      tone: "creative",
      question: "Which site opportunities should shape the massing strategy?"
    },
    {
      symbol: "RISK",
      title: dominantRisk ? `${dominantRisk.name} needs attention` : "Risk register is open",
      detail: dominantRisk
        ? `${dominantRisk.severity} severity under ${settings.riskTolerance.toLowerCase()} mode.`
        : "No dominant hazard is entered yet; add risks before relying on site feasibility.",
      tone: dominantRisk && String(dominantRisk.severity).toLowerCase() === "high" ? "critical" : "review",
      question: "What can be designed today, and what needs consultant review?"
    },
    {
      symbol: "AI",
      title: "Keep ASTRA in the workflow",
      detail: `${settings.assistantMode}; ${settings.ragDepth}; ${settings.sustainabilityPriority}.`,
      tone: "ai",
      question: "What sustainability decisions should be made from the current evidence?"
    }
  ];
}

function siteAstraRailMarkup(stats, survey, advisorPrompts, topOpportunity, dominantRisk) {
  const recommendations = siteAstraRecommendationRows(stats, survey, topOpportunity, dominantRisk);
  return `
    <aside class="site-astra-rail" aria-label="ASTRA AI colleague">
      <header class="astra-rail-head">
        <span>AI</span>
        <div>
          <strong>ASTRA colleague</strong>
          <p>Recommendations first, chat underneath. It reads the current section and the saved evidence.</p>
        </div>
      </header>
      <div class="astra-rail-recommendations">
        <span class="mini-label">Recommendations</span>
        ${recommendations.map(item => `
          <button type="button" class="astra-rec-card ${escapeHtml(item.tone)}" data-site-agent-question="${escapeHtml(item.question)}">
            <span>${escapeHtml(item.symbol)}</span>
            <strong>${escapeHtml(item.title)}</strong>
            <p>${escapeHtml(item.detail)}</p>
          </button>
        `).join("")}
      </div>
      <div class="site-agent-stack compact-agent-stack">
        ${siteAgentStackRows(stats).slice(0, 3).map(row => `
          <article>
            <span>${escapeHtml(row[0])}</span>
            <strong>${escapeHtml(row[1])}</strong>
            <p>${escapeHtml(row[2])}</p>
          </article>
        `).join("")}
      </div>
      <div class="astra-rail-chat">
        <span class="mini-label">Ask ASTRA</span>
        <textarea data-site-agent-input rows="5" placeholder="Ask about this section, evidence, policy, risk, sustainability, ASHRAE, Lumion, sun studies, or the next design move."></textarea>
        <button class="add-row-button" data-site-agent-submit>Ask AI Colleague</button>
        <div class="site-advisor-prompts">
          ${advisorPrompts.slice(0, 4).map(prompt => `<button type="button" data-site-agent-question="${escapeHtml(prompt)}">${escapeHtml(prompt)}</button>`).join("")}
        </div>
        <div id="siteAdvisorOutput" class="site-advisor-output" aria-live="polite" tabindex="0">
          <div class="empty-state">ASTRA is ready. Ask for design direction, evidence gaps, policy implications, or next actions.</div>
        </div>
      </div>
    </aside>
  `;
}

function siteWorkflowSteps() {
  return [
    "Site Intake",
    "Survey Collection",
    "GIS Analysis",
    "Policy + Zoning Analysis",
    "Environmental Analysis",
    "Utility Verification",
    "Risk Assessment",
    "Site Opportunity Discovery",
    "AI Interpretation",
    "Site Intelligence Package"
  ];
}

function siteEvidenceCategoryRows(survey) {
  const categoryNames = ["Survey", "GIS", "Policy", "Environmental", "Utility", "Sensor", "Consultant Reports"];
  const records = siteEvidenceRecords(survey);
  return categoryNames.map(category => {
    const matching = records.filter(item => {
      const haystack = `${item.category || ""} ${item.documentType || ""} ${item.type || ""} ${item.name || ""} ${item.aspect || ""}`.toLowerCase();
      return haystack.includes(category.toLowerCase().replace("consultant reports", "consultant"));
    });
    const verified = matching.filter(item => isVerifiedSiteStatus(item.status)).length;
    return {
      category,
      total: matching.length,
      status: matching.length
        ? verified === matching.length ? "verified" : "needs review"
        : "missing"
    };
  });
}

function siteLayerStatus(label, survey) {
  const haystack = (survey.gisFindings || []).map(item => `${item.name || ""} ${item.layerType || ""} ${item.finding || ""}`).join(" ").toLowerCase();
  const lower = label.toLowerCase();
  if (haystack.includes(lower) || (lower.includes("flood") && haystack.includes("hydrology")) || (lower.includes("vegetation") && haystack.includes("tree"))) {
    return "active";
  }
  if (lower.includes("wetlands") || lower.includes("noise") || lower.includes("solar")) return "missing";
  return "needs review";
}

function siteLayerRows(survey) {
  return ["Parcel Boundary", "Floodplain", "Wetlands", "Soil", "Transportation", "Utility", "Vegetation", "Viewshed", "Solar", "Noise"]
    .map(layer => ({ layer, status: siteLayerStatus(layer, survey) }));
}

function siteOverviewRows(fields) {
  return [
    ["Project Name", fields.projectName],
    ["Client", fields.clientName || fields.ownerClient],
    ["Architect", fields.architectName],
    ["Address", fields.parcelAddress],
    ["Parcel Number", fields.parcelNumber || fields.parcelApn],
    ["Municipality", fields.municipality || fields.jurisdiction],
    ["Country", fields.country || "Pending"],
    ["Site Area", fields.siteSize],
    ["Existing Land Use", fields.currentLandUse],
    ["Proposed Use", fields.desiredFutureUse],
    ["Project Stage", fields.projectStage]
  ];
}

function siteKpiRows(fields) {
  return [
    ["Annual Energy Use", fields.annualEnergyUse],
    ["Embodied Carbon", fields.embodiedCarbon],
    ["Construction Cost", fields.constructionCost],
    ["Daylight Factor", fields.daylightFactor],
    ["Walkability", fields.walkability],
    ["Stormwater Retention", fields.stormwaterRetention]
  ];
}

function siteDigitalTwinRows(survey) {
  const liveFeeds = [
    ["Weather", "manual"],
    ["Noise", "pending"],
    ["Moisture", "missing"],
    ["Temperature", "pending"],
    ["Traffic", "missing"],
    ["Air Quality", "missing"],
    ["Energy", "not connected"],
    ["Water", "not connected"]
  ];
  return liveFeeds.map(([feed, fallback]) => {
    const sensor = (survey.sensors || []).find(item => `${item.name || ""} ${item.sensorType || ""}`.toLowerCase().includes(feed.toLowerCase()));
    return {
      feed,
      status: sensor?.status || fallback,
      reading: sensor ? `${sensor.latestReading || "Reading pending"} ${sensor.unit || ""}`.trim() : "No live feed",
      update: sensor?.timestamp || "No update"
    };
  });
}

function siteAdvisorPrompts() {
  return [
    "What is verified, missing, and risky in the Site Intelligence Package?",
    "What can be designed today, and what needs consultant review?",
    "Which site opportunities should shape the massing strategy?",
    "What zoning or policy constraints could delay permitting?",
    "What sustainability decisions should be made from the current evidence?"
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
  const traceSection = ["design", "gis"].includes(state.activeSection);

  el.workspaceTitle.textContent = isDashboard ? "Project Flow Guide" : `${shortTitle} Workspace`;
  el.workspaceDescription.textContent = isDashboard
    ? "Choose a phase to enter its page."
    : traceSection
      ? "Trace overlays are reserved for design review and GIS context."
      : "Fact cards, saved inputs, ASTRA guidance, and exports stay in one workspace.";
  el.canvasMode.textContent = isDashboard ? "Flow navigation" : section.stage;

  el.assistantTitle.textContent = isDashboard ? "ASTRA AI Colleague" : `${shortTitle} + ASTRA`;
  el.assistantDescription.textContent = isDashboard
    ? "Ask where to start, how to find a process, or what the next fact-backed step should be."
    : `Always-on factual direction, design critique, and source checks for ${section.stage.toLowerCase()}.`;
  renderAssistantRecommendations(section, isDashboard);
}

function assistantRecommendationRows(section, isDashboard) {
  const project = state.project;
  const current = isDashboard ? "the overall project flow" : section.title;
  const rows = [
    {
      symbol: "FIND",
      title: isDashboard ? "Find the process" : "Find where this fits",
      detail: isDashboard
        ? "Ask where to start or which page holds the workflow you need."
        : `Ask how this page connects to the overall ASTRA process and what evidence supports the next move.`,
      question: isDashboard
        ? "How do I find the right process, and where should I start?"
        : `Where does ${section.title} fit in the overall process?`,
      tone: "source"
    },
    {
      symbol: "NEXT",
      title: isDashboard ? "Choose the next workspace" : "Guide the next move",
      detail: isDashboard
        ? "Ask ASTRA which workflow should come first based on risk, missing data, and design priority."
        : `Use ${section.stage.toLowerCase()} context to decide what to do next without leaving this page.`,
      question: isDashboard
        ? "Which project section should I open next, and why?"
        : `What should I do next in ${section.title}?`,
      tone: "direction"
    },
    {
      symbol: "LOOK",
      title: "Check what looks off",
      detail: "Use this when a massing, render, diagram, material board, or workflow feels wrong but the reason is unclear.",
      question: "Does anything look off in the current design or visual workspace?",
      tone: "visual",
      screenshot: true
    },
    {
      symbol: "DES",
      title: "Improve the design choice",
      detail: "Ask for a higher-quality option that protects client goals, site constraints, creativity, and simplicity.",
      question: `What design choice would improve ${current} without adding cognitive load?`,
      tone: "creative"
    },
    {
      symbol: "SRC",
      title: "Verify before deciding",
      detail: "Find what is missing, uncertain, or consultant-bound before it becomes a weak decision.",
      question: `What evidence is missing before I trust decisions in ${current}?`,
      tone: "source"
    }
  ];

  if (project && section.id === "design") {
    rows.unshift({
      symbol: "WARN",
      title: "Review massing conflicts",
      detail: `${project.designModel.frontDistanceFt} ft front distance, ${project.designModel.heightFt} ft height, and ${project.designModel.southGlazingPercent}% south glazing need design judgment.`,
      question: "What looks off in the current massing, placement, height, or glazing?",
      tone: "critical",
      screenshot: true
    });
  }

  if (section.id === "survey" || section.id === "gis" || section.id === "policy") {
    rows.unshift({
      symbol: "SITE",
      title: "Turn evidence into direction",
      detail: "Ask which entered data can guide design today and which items should stay review-only.",
      question: "What can be designed today, and what needs consultant review?",
      tone: "source"
    });
  }

  return rows.slice(0, 5);
}

function renderAssistantRecommendations(section, isDashboard) {
  if (!el.assistantRecommendations) return;
  const rows = assistantRecommendationRows(section, isDashboard);
  el.assistantRecommendations.innerHTML = `
    <span class="mini-label">ASTRA recommendations</span>
    ${rows.map(item => `
      <button type="button" class="assistant-rec ${escapeHtml(item.tone)}" data-question="${escapeHtml(item.question)}" ${item.screenshot ? 'data-screenshot-question="true"' : ""}>
        <span>${escapeHtml(item.symbol)}</span>
        <strong>${escapeHtml(item.title)}</strong>
        <p>${escapeHtml(item.detail)}</p>
      </button>
    `).join("")}
  `;
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
    ["database", "data"],
    ["csv", "data"],
    ["data", "data"],
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
  makeJourneyStage("data", "Database + CSV", "Store project facts, sustainability metrics, flood strategy, initiatives, custom case studies, and JSON/CSV exports.", "Use this when information needs to move cleanly between tools or become downloadable project and case-study data.", ["Database", "Cases", "JSON", "CSV"]),
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
  makeJourneyStage("data", "Intake + Cases", "Confirm records, sustainability/flood facts, initiative data, and export-ready case-study evidence.", "Use this when intake completeness or downloadable review data needs to be checked.", ["Data", "Cases", "CSV"]),
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
  makeJourneyStage("data", "Database + CSV", "Load parcel records, GIS-ready fields, case studies, and JSON/CSV export values.", "Use this before mapping, exporting, or sharing structured project data.", ["Database", "JSON", "CSV"]),
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
  makeJourneyStage("data", "Records + Cases", "Prepare survey fields, flood strategy, initiative notes, and case-study exports.", "Use this when survey data needs to be reused by design, permit, or reporting tools.", ["Data", "Cases", "CSV"]),
  makeJourneyStage("archive", "Deliver", "Package the verified parcel record and source-linked survey evidence.", "Use this when the surveyor needs to hand off a clean deliverable.", ["Archive", "Parcel"])
]);

roleJourneys.reviewer.label = "Reviewer";
roleJourneys.reviewer.title = "Reviewer";
roleJourneys.reviewer.intro = "Review plans against zoning, code, safety, accessibility, completeness, and submission standards.";
roleJourneys.reviewer.stages = renumberJourney([
  makeJourneyStage("data", "Data Intake", "Confirm application records, project facts, case-study evidence, JSON/CSV outputs, and required attachments.", "Use this when the review package first arrives or needs export-ready structure.", ["Data", "Cases", "Checklist"]),
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
  makeJourneyStage("data", "Assignment Data", "Confirm inspection type, project records, case-study summaries, required documents, and approval status.", "Use this when the inspector needs export-ready context for what must be checked on site.", ["Data", "Permit", "CSV"]),
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
  const gisFindings = survey.gisFindings?.length ? survey.gisFindings : project.gisLayers.map(layer => ({
    name: layer.name,
    layerType: "Custom research",
    finding: layer.finding,
    geometry: "",
    sourceName: layer.source,
    sourceUrl: "",
    status: layer.status,
    usedFor: "Site context",
    documentType: "GIS Layer"
  }));
  const stats = siteIntelligenceStats(survey);
  const settings = stats.settings;
  const evidenceCategoryRows = siteEvidenceCategoryRows(survey);
  const evidenceFactRows = siteEvidenceFactRows(survey, stats);
  const environmentalFactRows = siteEnvironmentalFactRows(survey, fields);
  const utilityFactRows = siteUtilityFactRows(survey);
  const layerRows = siteLayerRows(survey);
  const riskRows = (survey.hazards || []).map(item => ({ ...item, severity: siteRiskSeverity(item) }));
  const digitalTwinRows = siteDigitalTwinRows(survey);
  const advisorPrompts = siteAdvisorPrompts();
  const topOpportunity = siteTopOpportunity(survey);
  const dominantRisk = siteDominantRisk(survey);
  const setbackConstraint = (survey.constraints || []).find(item => `${item.name || ""} ${item.value || ""}`.toLowerCase().includes("setback")) || {};
  const activePolicyLookup = (survey.policyLookups || []).find(item => isVerifiedSiteStatus(item.status)) || (survey.policyLookups || [])[0] || {};

  return `
    <div class="surface-pad site-survey-workspace">
      <header class="site-survey-hero">
        <button class="journey-link" data-section="dashboard">Back to flow</button>
        <div>
          <span class="mini-label">ASTRA site intelligence module</span>
          <h3>Verified site knowledge system</h3>
          <p>Transform raw site information into a design-ready intelligence package for feasibility, zoning, AI generation, sustainability, engineering, costing, and construction planning.</p>
        </div>
        <div class="site-output-card">
          <span>AI confidence score</span>
          <strong>Site Intelligence Package</strong>
          <p>${stats.confidence}% readiness based on verified evidence, unresolved risks, missing information, and scored site opportunities.</p>
        </div>
      </header>

      <section class="site-command-grid" aria-label="Site intelligence summary">
        ${[
          ["Verified Evidence", stats.verified, `${stats.evidenceTotal} total records`],
          ["Missing Inputs", stats.missing, `${stats.needsReview} need review`],
          ["Critical Risks", stats.criticalRisks, "consultant attention"],
          ["Opportunity Score", stats.opportunityAverage, `${stats.opportunityHits} above ${settings.opportunityThreshold}`]
        ].map(item => `
          <article>
            <span>${escapeHtml(item[0])}</span>
            <strong>${escapeHtml(item[1])}</strong>
            <p>${escapeHtml(item[2])}</p>
          </article>
        `).join("")}
      </section>

      <section class="site-workflow-band" aria-label="Site intelligence workflow">
        ${siteWorkflowSteps().map((step, index) => `
          <div class="${index < 3 ? "done" : index === 8 ? "active" : index > 8 ? "next" : ""}">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <strong>${escapeHtml(step)}</strong>
          </div>
        `).join("")}
      </section>

      ${siteExperienceArc(stats, survey, topOpportunity, dominantRisk)}

      <section class="site-adjustment-panel" aria-label="Adjustable AI decision settings">
        <div class="site-adjustment-copy">
          <span class="mini-label">Adjustable decision model</span>
          <h3>Tune how strict ASTRA should be before it recommends action.</h3>
          <p>${escapeHtml(settings.note)} ${escapeHtml(settings.riskNote)} The page recalculates readiness and explanation text from the saved inputs.</p>
        </div>
        <div class="site-adjustment-grid">
          ${siteFieldSelect("evidenceStrictness", "Evidence strictness", evidenceStrictnessOptions)}
          ${siteFieldSelect("riskTolerance", "Risk tolerance", riskToleranceOptions)}
          ${siteFieldInput("opportunityThreshold", "Opportunity threshold", "number")}
          ${siteFieldSelect("policyConfidenceRequired", "Policy confidence required", policyConfidenceOptions)}
          ${siteFieldSelect("sustainabilityPriority", "Sustainability priority", sustainabilityPriorityOptions)}
          ${siteFieldSelect("wcagPriority", "Accessibility target", wcagPriorityOptions)}
          ${siteFieldSelect("assistantMode", "AI agent mode", assistantModeOptions)}
          ${siteFieldSelect("ragDepth", "RAG retrieval scope", ragDepthOptions)}
          ${siteFieldSelect("reasoningSpecialist", "Reasoning specialist", reasoningSpecialistOptions)}
        </div>
        ${siteDecisionIllustration(stats)}
      </section>

      <div class="site-workbench-layout">
        <main class="site-main-stack" aria-label="Site intelligence sections">
      <section class="site-survey-section site-intake-panel">
        <div>
          <span class="mini-label">Section 1 / Project overview</span>
          <h3>Project Information, Goals + KPIs</h3>
          <p>Basic project identity anchors every survey, GIS, code, AI, cost, and design decision that follows.</p>
        </div>
        ${siteSubsectionIntro("ID", "Project identity", "Keep the stable facts together so every downstream policy, survey, cost, and AI response references the same project basis.")}
        <div class="site-intake-grid">
          ${siteFieldInput("projectName", "Project name")}
          ${siteFieldInput("clientName", "Client")}
          ${siteFieldInput("architectName", "Architect")}
          ${siteFieldInput("parcelAddress", "Parcel / address")}
          ${siteFieldInput("parcelNumber", "Parcel number")}
          ${siteFieldInput("municipality", "Municipality")}
          ${siteFieldInput("country", "Country")}
          ${siteFieldInput("siteSize", "Site size")}
          ${siteFieldInput("ownerClient", "Property owner / client")}
          ${siteFieldInput("projectType", "Project type")}
          ${siteFieldInput("projectStage", "Project stage")}
          ${siteFieldInput("currentLandUse", "Current land use")}
          ${siteFieldInput("desiredFutureUse", "Desired future use")}
          ${siteFieldTextarea("architectNotes", "Architect / client notes")}
          ${siteFieldTextarea("clientGoals", "Client goals")}
        </div>
        ${siteSubsectionIntro("GOAL", "Design priorities", "Use these as simple decision filters, not another long checklist. ASTRA can weigh them when advising on massing, daylight, access, carbon, and budget.")}
        <div class="site-goal-grid">
          ${["Daylight", "Energy Efficiency", "Low Carbon", "Accessibility", "Landscape Preservation", "Budget Target"].map(goal => `<span>${escapeHtml(goal)}</span>`).join("")}
        </div>
        ${siteSubsectionIntro("KPI", "Success measures", "The KPI cards turn client intent into measurable targets so design quality can be discussed without splitting into separate tools.")}
        <div class="site-kpi-grid">
          ${siteKpiRows(fields).map(row => `
            <article>
              <span>${escapeHtml(row[0])}</span>
              <strong>${escapeHtml(row[1] || "Pending")}</strong>
            </article>
          `).join("")}
        </div>
        ${siteSectionInsightCard(
          "The brief is now part of the reasoning layer",
          `${fields.projectStage || "The current stage"} uses the client goals and KPI fields as decision filters before ASTRA recommends massing, materials, sun study moves, or consultant review.`,
          [
            `Client goals: ${fields.clientGoals || "pending"}`,
            `Sustainability priority: ${settings.sustainabilityPriority}`,
            `Accessibility target: ${settings.wcagPriority}`
          ],
          "Adjust the goals or KPI fields above to change how the advisor weighs daylight, energy, carbon, access, landscape, and budget."
        )}
      </section>

      <section class="site-survey-section survey-upload-panel">
        <div class="survey-section-head">
          <div>
            <span class="mini-label">Section 2 / Evidence library</span>
            <h3>Every Claim Comes From Evidence</h3>
            <p>Upload or identify the source, then record the exact site fact, policy fact, GIS condition, or survey value taken from it.</p>
          </div>
          <label class="site-upload-control">
            <span>Upload source document</span>
            <input type="file" multiple data-site-upload>
          </label>
        </div>
        ${siteSubsectionIntro("SRC", "Source identity", "Name the document, author, URL, and verification state before the system treats an item as evidence.")}
        <div class="site-intake-grid">
          ${siteFieldSelect("uploadDocumentType", "Document type for upload", siteDocumentTypeOptions)}
          ${siteFieldInput("uploadOtherDocumentType", "Other document type")}
          ${siteFieldInput("uploadSourceName", "Source / document name")}
          ${siteFieldInput("uploadSourceUrl", "Source URL / citation")}
          ${siteFieldInput("uploadUploadedBy", "Uploaded by")}
          ${siteFieldSelect("uploadVerificationStatus", "Verification status", siteVerificationStatusOptions)}
        </div>
        ${siteSubsectionIntro("LIB", "Evidence coverage", "The category tiles show which parts of the project have support and which parts still need review.")}
        ${siteFactGrid(evidenceFactRows, "Evidence facts")}
        <div class="evidence-category-grid">
          ${evidenceCategoryRows.map(item => `
            <article class="${escapeHtml(siteStatusClass(item.status))}">
              <span>${escapeHtml(item.category)}</span>
              <strong>${escapeHtml(item.total ? item.status : "--")}</strong>
              <p>${item.total ? `${escapeHtml(item.total)} evidence record${item.total === 1 ? "" : "s"}` : "--"}</p>
            </article>
          `).join("")}
        </div>
        ${siteSectionInsightCard(
          "Evidence controls what the AI may claim",
          `${stats.verified} records are verified or active, while ${stats.needsReview + stats.missing} remain uncertain. In ${settings.evidenceStrictness.toLowerCase()} mode, uncertain records reduce the confidence score before ASTRA recommends design action.`,
          [
            `Evidence library: ${siteStatusSummary(siteEvidenceRecords(survey))}`,
            `Policy confidence required: ${settings.policyConfidenceRequired}`,
            `RAG scope: ${settings.ragDepth}`
          ],
          "Add source URLs, document names, verification status, and reviewer names to turn uncertain claims into traceable project knowledge.",
          stats.missing ? "needs review" : "active"
        )}
        ${survey.uploads.length ? `
          ${siteSubsectionIntro("FILE", "Uploaded records", "Uploaded file metadata stays visible here so the user can see what ASTRA can reference later.")}
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
        ${siteSubsectionIntro("FACT", "Extracted claims", "Pull only the exact facts needed for decisions. This keeps the AI grounded and keeps the user from hunting through documents.")}
        <div class="survey-section-head compact-head">
          <div>
            <span class="mini-label">Evidence-backed findings</span>
            <h3>What Was Taken From The Source?</h3>
            <p>Each row is a claim the system may use later. If it does not have a document type, source, and status, the AI should treat it as uncertain.</p>
          </div>
          <button class="add-row-button" data-add-site-row="sourceFindings">Add Source-Backed Finding</button>
        </div>
        <div class="site-ai-question-grid source-finding-grid">
          ${survey.sourceFindings.map((item, index) => `
            <article>
              ${siteRowInput("sourceFindings", index, "aspect", item.aspect || "", "Aspect / data point")}
              ${siteRowSelect("sourceFindings", index, "category", item.category || "Other", "Category", siteAspectCategoryOptions)}
              ${siteRowInput("sourceFindings", index, "owner", item.owner || "", "Responsible role")}
              ${siteRowTextarea("sourceFindings", index, "value", item.value || "", "Exact finding / extracted value")}
              ${siteSourceControls("sourceFindings", index, item)}
            </article>
          `).join("")}
        </div>
        ${siteSubsectionIntro("TYPE", "Accepted evidence types", "Use this checklist as a lightweight mental model for what belongs in the evidence library.")}
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
          <span class="mini-label">Section 3 / Survey intelligence</span>
          <h3>Boundary, Topography + Hydrology Conditions</h3>
          <p>The surveyor can enter field-confirmed boundaries, easements, encroachments, structures, elevation range, contour interval, slope, and drainage notes before the AI treats them as design inputs.</p>
        </div>
        ${siteSubsectionIntro("FIELD", "Field verification", "Record who confirmed the survey and what datum/source confidence ASTRA should use before translating field data into design advice.")}
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
        ${siteSectionInsightCard(
          "Survey data sets the buildable starting point",
          `ASTRA is reading ${fields.averageSlope || "unknown slope"} toward ${fields.slopeDirection || "unknown direction"} with ${fields.drainageNotes || "drainage notes pending"}. This affects grading, foundation assumptions, stormwater, access, and early placement.`,
          [
            `Benchmark: ${fields.benchmarkDatum || "pending"}`,
            `Elevation range: ${fields.minElevation || "min pending"} to ${fields.maxElevation || "max pending"}`,
            `Contour interval: ${fields.contourInterval || "pending"}`
          ],
          "Enter surveyor-confirmed elevation and hydrology values before treating the placement as engineer-ready.",
          fields.minElevation && fields.maxElevation ? "verified" : "needs review"
        )}
      </section>

      <section class="site-survey-section gis-context-panel">
        <div class="survey-section-head">
          <div>
            <span class="mini-label">Section 4 / GIS intelligence</span>
            <h3>Spatial Layers + Interactive Parcel Context</h3>
            <p>Connect the surveyed parcel to zoning, floodplain, wetlands, soils, transportation, utility, vegetation, viewshed, solar, and noise layers.</p>
          </div>
          <div class="map-status">${escapeHtml(project.site.verifiedBy)} verified</div>
        </div>
        ${siteSubsectionIntro("LAY", "Layer status", "Scan which spatial layers are active, missing, or review-only before relying on GIS for design moves.")}
        <div class="gis-layer-status-grid">
          ${layerRows.map(item => `
            <article class="${escapeHtml(siteStatusClass(item.status))}">
              <span>${escapeHtml(item.layer)}</span>
              <strong>${escapeHtml(item.status)}</strong>
            </article>
          `).join("")}
        </div>
        <div class="site-section-actions">
          <button class="add-row-button" type="button">Toggle Layers</button>
          <button class="add-row-button" data-download="gis">Export GIS Data</button>
          <button class="add-row-button" data-download="parcel">Generate GIS Report</button>
        </div>
        ${siteSubsectionIntro("LOOK", "Parcel and jurisdiction lookup", "Keep address, coordinates, zoning, overlays, and source URLs together so policy interpretation remains traceable.")}
        <div class="site-intake-grid">
          ${siteFieldInput("addressLookup", "Lookup address")}
          ${siteFieldInput("parcelApn", "Parcel / APN")}
          ${siteFieldInput("cityCounty", "City / county")}
          ${siteFieldInput("stateRegion", "State / region")}
          ${siteFieldInput("country", "Country")}
          ${siteFieldInput("latitude", "Latitude")}
          ${siteFieldInput("longitude", "Longitude")}
          ${siteFieldInput("jurisdiction", "Jurisdiction")}
          ${siteFieldInput("zoningDistrict", "Zoning district")}
          ${siteFieldInput("detectedZoneArea", "Zone / area")}
          ${siteFieldSelect("lookupMethod", "Lookup method", lookupMethodOptions)}
          ${siteFieldTextarea("overlays", "Known overlays")}
          ${siteFieldInput("policySourceUrl", "Policy source URL / reference")}
          ${siteFieldInput("gisSourceUrl", "GIS source URL / service")}
          ${siteFieldSelect("policyLookupStatus", "Lookup status", siteVerificationStatusOptions)}
          ${siteFieldSelect("gisLookupStatus", "GIS lookup status", siteVerificationStatusOptions)}
          ${siteFieldInput("lastPolicyCheck", "Last policy check", "date")}
        </div>
        <div class="site-section-actions">
          <button class="add-row-button" data-policy-lookup-create>Create Lookup Record From Address</button>
          <button class="add-row-button" data-add-site-row="policyLookups">Add Custom Policy Record</button>
          <button class="add-row-button" data-add-site-row="gisFindings">Add Custom GIS Finding</button>
        </div>
        ${siteSubsectionIntro("RULE", "Policy interpretation", "Turn zoning and overlay facts into design implications only when the supporting lookup record is visible.")}
        <div class="policy-interpretation-card">
          <span class="mini-label">Section 5 / Policy intelligence</span>
          <h3>AI Policy Interpretation</h3>
          <div>
            <strong>${escapeHtml(setbackConstraint.name || "Setback / buildable limit")}</strong>
            <p>${escapeHtml(setbackConstraint.value || activePolicyLookup.result || "Policy rule pending. Add a source-backed zoning or code record before permit-ready claims.")}</p>
          </div>
          <div>
            <strong>Design Recommendation</strong>
            <p>${escapeHtml(isVerifiedSiteStatus(setbackConstraint.status || activePolicyLookup.status)
              ? "Use this rule in early massing, CAD/Rhino checks, and the Site Intelligence Package while keeping the source citation visible."
              : "Treat this as a planning assumption until the jurisdiction, source URL, and verification status are confirmed.")}</p>
          </div>
        </div>
        ${siteSectionInsightCard(
          "GIS and policy are linked before design advice",
          `${gisFindings.length} GIS findings and ${survey.policyLookups.length} policy lookup records are feeding the map, layer status, and zoning recommendation. The assistant should only make compliance claims when the lookup status meets the selected confidence target.`,
          [
            `Jurisdiction: ${fields.jurisdiction || fields.municipality || "pending"}`,
            `Zoning district: ${fields.zoningDistrict || "pending"}`,
            `Known overlays: ${fields.overlays || "none entered"}`
          ],
          "Add municipal GIS, policy PDF, or parcel viewer citations to make zoning and overlay guidance dependable.",
          fields.policyLookupStatus
        )}
        ${siteSubsectionIntro("CODE", "Policy records", "Store each rule as an adjustable record so ASTRA can cite, question, or downgrade uncertain compliance claims.")}
        <div class="site-ai-question-grid policy-record-grid">
          ${survey.policyLookups.map((item, index) => `
            <article>
              ${siteRowInput("policyLookups", index, "name", item.name || "", "Policy / lookup name")}
              ${siteRowInput("policyLookups", index, "address", item.address || "", "Address")}
              ${siteRowInput("policyLookups", index, "parcelApn", item.parcelApn || "", "Parcel / APN")}
              ${siteRowInput("policyLookups", index, "jurisdiction", item.jurisdiction || "", "Jurisdiction")}
              ${siteRowTextarea("policyLookups", index, "result", item.result || "", "Lookup result / rule found")}
              ${siteRowSelect("policyLookups", index, "sourceName", item.sourceName || "Manual reviewer entry", "Lookup source type", policySourceOptions)}
              ${siteRowInput("policyLookups", index, "sourceUrl", item.sourceUrl || "", "Source URL / citation")}
              ${siteSourceControls("policyLookups", index, item)}
            </article>
          `).join("")}
        </div>
        ${siteSubsectionIntro("MAP", "Spatial findings and viewer", "Connect visible map context to the exact GIS records being used for survey, feasibility, and policy decisions.")}
        <div class="survey-section-head compact-head">
          <div>
            <span class="mini-label">GIS findings feeding this section</span>
            <h3>Spatial Data Used By Survey + Policy</h3>
          </div>
        </div>
        <div class="site-ai-question-grid gis-finding-grid">
          ${gisFindings.map((item, index) => `
            <article>
              ${siteRowInput("gisFindings", index, "name", item.name || "", "GIS layer / finding")}
              ${siteRowSelect("gisFindings", index, "layerType", item.layerType || "Custom research", "Layer type", gisLayerTypeOptions)}
              ${siteRowTextarea("gisFindings", index, "finding", item.finding || "", "Finding")}
              ${siteRowInput("gisFindings", index, "geometry", item.geometry || "", "Area / geometry")}
              ${siteRowTextarea("gisFindings", index, "usedFor", item.usedFor || "", "Used for")}
              ${siteSourceControls("gisFindings", index, item)}
            </article>
          `).join("")}
        </div>
        <div class="site-map-grid">
          <div class="simple-map-wrap">
            ${projectMapMarkup(project)}
          </div>
          <div class="site-layer-stack">
            ${gisFindings.map(layer => `
              <article>
                <span><i class="status-dot"></i>${escapeHtml(layer.status)}</span>
                <strong>${escapeHtml(layer.name)}</strong>
                <p>${escapeHtml(layer.finding || layer.value || "")}</p>
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
            <span class="mini-label">Section 6 / Environmental intelligence</span>
            <h3>Solar, Climate, Wind, Water + Ecology</h3>
            <p>Record sun path, solar access, exposure, climate zone, wind, humidity, precipitation, vegetation, protected species, tree inventory, noise, and other environmental conditions.</p>
          </div>
          <button class="add-row-button" data-add-site-row="environmental">Add Custom Condition</button>
        </div>
        ${siteSubsectionIntro("CLIM", "Climate and solar cues", "Use compact environmental records to guide ASHRAE assumptions, sun studies, Lumion context, material exposure, and passive design.")}
        ${siteFactGrid(environmentalFactRows, "Environmental facts")}
        <div class="environment-grid">
          ${survey.environmental.map((item, index) => `
            <article>
              ${siteRowInput("environmental", index, "name", item.name || "", "Condition")}
              ${siteRowTextarea("environmental", index, "value", item.value || "", "Finding")}
              ${siteSourceControls("environmental", index, item)}
            </article>
          `).join("")}
        </div>
        ${siteSectionInsightCard(
          "Environmental records drive ASHRAE, Lumion, and sun study choices",
          `${survey.environmental.length} environmental conditions are entered. ASTRA uses them to decide what belongs in sun path review, climate assumptions, wind response, material exposure, and simulation notes.`,
          [
            `Solar/daylight cue: ${(survey.environmental.find(item => `${item.name || ""}`.toLowerCase().includes("sun")) || {}).value || fields.daylightFactor || "pending"}`,
            `Climate cue: ${(survey.environmental.find(item => `${item.name || ""}`.toLowerCase().includes("climate")) || {}).value || "pending"}`,
            `Sustainability priority: ${settings.sustainabilityPriority}`
          ],
          "Edit the environmental rows when ASHRAE climate, Lumion scene context, or sun study conclusions change."
        )}
      </section>

      <section class="site-survey-section utilities-panel">
        <div class="survey-section-head">
          <div>
            <span class="mini-label">Section 7 / Utility intelligence</span>
            <h3>Capacity, Distance, Upgrade Need + Risk</h3>
            <p>Track water, sewer, electrical, telecommunications, fire access, renewable potential, IoT readiness, service entries, and any infrastructure uncertainty the civil team must verify.</p>
          </div>
          <button class="add-row-button" data-add-site-row="utilities">Add Custom Utility</button>
        </div>
        ${siteSubsectionIntro("SERV", "Service readiness", "Keep capacity, distance, upgrade need, renewable potential, and IoT readiness in one place before cost or placement advice is trusted.")}
        ${siteFactGrid(utilityFactRows, "Utility facts")}
        <div class="utility-review-grid">
          ${survey.utilities.map((item, index) => `
            <div>
              ${siteRowInput("utilities", index, "name", item.name || "", "Utility / infrastructure item")}
              ${siteRowInput("utilities", index, "value", item.value || "", "Finding")}
              ${siteSourceControls("utilities", index, item)}
            </div>
          `).join("")}
        </div>
        ${siteSectionInsightCard(
          "Utility certainty changes cost and placement advice",
          `Utilities are currently ${siteStatusSummary(survey.utilities)}. Capacity, distance, and upgrade risk should affect service-entry placement, electrical room planning, renewable readiness, and civil coordination.`,
          [
            `Water/electrical clue: ${survey.utilities.slice(0, 4).map(siteRecordName).join(", ") || "pending"}`,
            `Risk tolerance: ${settings.riskTolerance}`,
            `Consultant boundary: utility capacity and fire access remain review items until verified.`
          ],
          "Mark utility capacity and service distances as verified before using them for final cost or construction planning.",
          survey.utilities.some(item => String(item.status || "").toLowerCase().includes("missing")) ? "needs review" : "active"
        )}
      </section>

      <section class="site-survey-section hazards-panel">
        <div class="survey-section-head">
          <div>
            <span class="mini-label">Section 8 / Risk intelligence</span>
            <h3>Project-Wide Risk Engine</h3>
            <p>Hazards become project memory so the AI can monitor severity, status, mitigation actions, permit delay risk, engineering review needs, and cost exposure.</p>
          </div>
          <button class="add-row-button" data-add-site-row="hazards">Add Custom Hazard</button>
        </div>
        ${siteSubsectionIntro("RISK", "Risk dashboard", "Start with severity and status so users can quickly see what blocks design, what needs review, and what can keep moving.")}
        <div class="risk-dashboard-grid">
          ${riskRows.map(item => `
            <article class="${escapeHtml(siteStatusClass(item.severity))}">
              <span>${escapeHtml(item.name || "Risk")}</span>
              <strong>${escapeHtml(item.severity)}</strong>
              <em>${escapeHtml(item.status || "needs review")}</em>
              <p>${escapeHtml(item.value || "Mitigation action pending.")}</p>
            </article>
          `).join("")}
        </div>
        ${siteSectionInsightCard(
          "Risk severity changes what can be designed today",
          dominantRisk
            ? `${dominantRisk.name} is the strongest current risk signal at ${dominantRisk.severity} severity. In ${settings.riskTolerance.toLowerCase()} mode, this reduces readiness until mitigation or consultant review is recorded.`
            : "No hazards are entered yet, so ASTRA cannot evaluate site risk beyond the base project memory.",
          [
            `Risk register: ${siteStatusSummary(survey.hazards)}`,
            `Critical risks counted: ${stats.criticalRisks}`,
            `Readiness impact: ${stats.confidence}% current confidence`
          ],
          "Lower the severity only when a source-backed mitigation, consultant review, or new evidence changes the risk record.",
          dominantRisk?.severity || "active"
        )}
        ${siteSubsectionIntro("MIT", "Mitigation records", "Edit the underlying records when new evidence, consultant review, or mitigation actions change the risk picture.")}
        <div class="site-ai-question-grid hazard-record-grid">
          ${survey.hazards.map((item, index) => `
            <article>
              ${siteRowInput("hazards", index, "name", item.name || "", "Hazard")}
              ${siteRowInput("hazards", index, "severity", item.severity || siteRiskSeverity(item), "Severity")}
              ${siteRowTextarea("hazards", index, "value", item.value || "", "Site impact / design concern")}
              ${siteSourceControls("hazards", index, item)}
            </article>
          `).join("")}
        </div>
      </section>

      <section class="site-survey-section sensor-panel">
        <div class="survey-section-head">
          <div>
            <span class="mini-label">Section 10 / Site digital twin</span>
            <h3>Live Site Data + Sensor Health</h3>
            <p>Use this for real-time weather, noise, moisture, temperature, traffic, air quality, energy, and water feeds later, or manual readings now.</p>
          </div>
          <button class="add-row-button" data-add-site-row="sensors">Add Sensor Reading</button>
        </div>
        ${siteSubsectionIntro("LIVE", "Live feed overview", "Show only the current signal first, then let detailed sensor records expand below when the data affects design or construction decisions.")}
        <div class="digital-twin-grid">
          ${digitalTwinRows.map(item => `
            <article class="${escapeHtml(siteStatusClass(item.status))}">
              <span>${escapeHtml(item.feed)}</span>
              <strong>${escapeHtml(item.reading)}</strong>
              <p>${escapeHtml(item.status)} / ${escapeHtml(item.update)}</p>
            </article>
          `).join("")}
        </div>
        ${siteSectionInsightCard(
          "Live readings become evidence when they are timestamped",
          `${survey.sensors.length} sensor or manual reading records are entered. ASTRA treats readings without timestamps or active status as context, not verified live data.`,
          [
            `Digital twin: ${siteStatusSummary(survey.sensors)}`,
            `Most recent feed: ${digitalTwinRows.find(item => item.update !== "No update")?.feed || "none connected"}`,
            `Use case: weather, noise, moisture, traffic, air quality, energy, and water decisions.`
          ],
          "Add timestamps and source names when readings influence site placement, material exposure, or construction sequencing."
        )}
        ${siteSubsectionIntro("LOG", "Sensor records", "Timestamped records can become evidence; untimestamped readings stay contextual until verified.")}
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
          ${siteSubsectionIntro("LIMIT", "Constraints to protect", "Use this side for rules and physical limits that should shape the envelope before creative options are scored.")}
          <div class="survey-section-head compact-head">
            <div>
              <span class="mini-label">Policy + design constraints</span>
              <h3>Buildable Limits</h3>
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
          ${siteSubsectionIntro("IDEA", "Opportunities to amplify", "Score design opportunities so creativity stays connected to evidence instead of becoming a separate brainstorming pile.")}
          <div class="survey-section-head compact-head">
            <div>
              <span class="mini-label">Section 9 / Opportunity intelligence</span>
              <h3>Scored Site Opportunities</h3>
            </div>
            <button class="add-row-button" data-add-site-row="opportunities">Add Opportunity</button>
          </div>
          <div class="opportunity-list">
            ${survey.opportunities.map((item, index) => `
              <article>
                <div class="opportunity-score">
                  <span>Impact</span>
                  <strong>${siteOpportunityScore(item, index)}</strong>
                  <i style="--score:${siteOpportunityScore(item, index)}%"></i>
                </div>
                ${siteRowInput("opportunities", index, "name", item.name || "", "Opportunity")}
                ${siteRowInput("opportunities", index, "impact", siteOpportunityScore(item, index), "Impact score", "number")}
                ${siteRowTextarea("opportunities", index, "value", item.value || "", "Design implication")}
                ${siteSourceControls("opportunities", index, item)}
              </article>
            `).join("")}
          </div>
          ${siteSectionInsightCard(
            "Opportunities are scored before they shape design",
            topOpportunity
              ? `${topOpportunity.name} is the strongest opportunity at ${siteOpportunityScore(topOpportunity)} impact. Opportunities at or above ${settings.opportunityThreshold} are treated as design drivers.`
              : "No opportunities are entered yet, so ASTRA cannot prioritize passive design, views, renewables, construction efficiency, or user experience.",
            [
              `Average impact: ${stats.opportunityAverage}`,
              `Above threshold: ${stats.opportunityHits}`,
              `Sustainability filter: ${settings.sustainabilityPriority}`
            ],
            "Raise or lower impact scores to change which ideas become massing, material, sun-study, or sustainability drivers."
          )}
        </div>
      </section>

      <section class="site-survey-section verification-panel">
        <div class="survey-section-head">
          <div>
            <span class="mini-label">Evidence verification</span>
            <h3>Trust + Missing Information</h3>
            <p>Every claim should show who uploaded it, what evidence supports it, and whether it is verified, pending, missing, or conflicting.</p>
          </div>
          <button class="add-row-button" data-add-site-row="evidence">Add Evidence Record</button>
        </div>
        ${siteSubsectionIntro("TRUST", "Trust register", "Use this to make missing, pending, conflicting, and verified claims obvious before ASTRA or the team acts on them.")}
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

      <section class="site-survey-section additional-aspects-panel">
        <div class="survey-section-head">
          <div>
            <span class="mini-label">Custom intelligence records</span>
            <h3>Additional Site, GIS, Policy, Or Survey Data</h3>
            <p>Use this when the project needs a data point that does not fit the predefined categories. It still receives a category, source, document type, and verification status.</p>
          </div>
          <button class="add-row-button" data-add-site-row="additionalAspects">Add Additional Aspect</button>
        </div>
        ${siteSubsectionIntro("CUSTOM", "Project-specific records", "Add unusual project intelligence here without breaking the flow or forcing users into another tool.")}
        <div class="site-ai-question-grid additional-aspects-grid">
          ${survey.additionalAspects.map((item, index) => `
            <article>
              ${siteRowInput("additionalAspects", index, "name", item.name || "", "Aspect")}
              ${siteRowSelect("additionalAspects", index, "category", item.category || "Other", "Category", siteAspectCategoryOptions)}
              ${siteRowTextarea("additionalAspects", index, "value", item.value || "", "Why it matters / value")}
              ${siteSourceControls("additionalAspects", index, item)}
            </article>
          `).join("")}
        </div>
      </section>

      <section class="site-survey-section ai-site-panel">
        <div class="survey-section-head">
          <div>
            <span class="mini-label">Section 11 / AI site advisor</span>
            <h3>From Verified Evidence To Decisions</h3>
            <p>The free local ASTRA advisor reads the saved forms and source records, then tells the architect what is verified, missing, risky, ready for design use, likely to delay permitting, or likely to increase cost.</p>
          </div>
          <button class="add-row-button" data-add-site-row="aiInterpretation">Add AI Question</button>
        </div>
        ${siteSectionInsightCard(
          "AI is part of the workflow, not an afterthought",
          "ASTRA stays visible in the right rail so the user can ask questions while working through each section. This keeps process guidance, design insight, source memory, and recommendations in one flow.",
          [
            `Current agent mode: ${settings.assistantMode}`,
            `Retrieval scope: ${settings.ragDepth}`,
            `Confidence score: ${stats.confidence}%`
          ],
          "Use the right-side recommendations and chat while editing each section; this avoids jumping between fragmented tools."
        )}
        ${siteSubsectionIntro("ASK", "Always-on checks", "ASTRA surfaces what is verified, missing, risky, design-ready, permit-sensitive, or cost-sensitive while the user stays in the same workspace.")}
        <div class="site-ai-checks">
          ${assistantFindings.map(item => `
            <article class="ai-check-card ${escapeHtml(item.level.replace(/\s+/g, "-"))}">
              <span>${escapeHtml(item.level)}</span>
              <strong>${escapeHtml(item.title)}</strong>
              <p>${escapeHtml(item.detail)}</p>
            </article>
          `).join("")}
        </div>
        ${siteSubsectionIntro("Q", "Reusable advisor prompts", "Store recurring project questions so the same reasoning can be updated as facts, policy, and site data change.")}
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
          <span class="mini-label">Section 12 / Site intelligence package</span>
          <h3>Automated Final Deliverable</h3>
          <p>The page produces a reusable package for design, sun studies, ASHRAE/material sustainability, zoning, engineering, compliance, permit review, BIM handoff, and ASTRA project memory.</p>
        </div>
        ${siteSubsectionIntro("OUT", "Deliverable scope", "Select what should move forward so the final package is complete without forcing the user through separate export screens.")}
        <div class="package-grid">
          ${survey.packageItems.map((item, index) => `
            <label>
              <input type="checkbox" data-site-package="${index}" ${item.included ? "checked" : ""}>
              <span>${escapeHtml(item.name)}</span>
            </label>
          `).join("")}
        </div>
        ${siteSubsectionIntro("EXP", "Exports", "Send the same verified knowledge package to reports, spreadsheets, GIS, BIM, and ASTRA project memory.")}
        <div class="download-actions">
          <button data-download="parcel">PDF-ready Report JSON</button>
          <button data-download="csv">CSV</button>
          <button data-download="gis">GIS Package</button>
          <button data-download="bim">BIM Package</button>
          <button data-download="astra">ASTRA Project Package</button>
        </div>
      </section>
        </main>
      </div>

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

function policyPrimaryLookup(survey) {
  const records = Array.isArray(survey?.policyLookups) ? survey.policyLookups : [];
  return records.find(item => isVerifiedSiteStatus(item.status))
    || records.find(item => item.address || item.jurisdiction || item.result)
    || records[0]
    || null;
}

function policyFieldStatus(value, fallbackStatus = "missing") {
  return siteDisplayValue(value) === "--" ? fallbackStatus : "saved";
}

function policyRuleValue(rule) {
  const value = siteDisplayValue(rule?.value);
  const unit = String(rule?.unit || "").trim();
  return value === "--" ? "--" : `${value}${unit ? ` ${unit}` : ""}`;
}

function policyRuleImpactRows(project) {
  const design = project.designModel || {};
  return (project.verifiedRules || []).map(rule => {
    const ruleValue = Number(rule.value);
    const status = String(rule.verificationStatus || "needs_review").toLowerCase();
    let measured = "--";
    let outOfNorm = false;
    let impact = "This rule should remain visible while the design is being developed.";
    let improve = "Keep the exact source, page, reviewer, and status attached before making permit-ready claims.";

    if (rule.ruleType === "front_setback") {
      measured = Number.isFinite(Number(design.frontDistanceFt)) ? `${design.frontDistanceFt} ft current front distance` : "--";
      outOfNorm = Number.isFinite(ruleValue) && Number(design.frontDistanceFt) < ruleValue;
      impact = outOfNorm
        ? "The current massing appears inside the required front setback, which can reduce buildable area and delay permitting."
        : "The current front distance appears compatible with the entered rule, pending source review.";
      improve = outOfNorm
        ? "Shift the building envelope back, reduce projections, or mark this as variance-review before design lock."
        : "Keep this rule connected to the survey boundary and update it if the parcel line changes.";
    }

    if (rule.ruleType === "side_setback") {
      measured = Number.isFinite(Number(design.sideDistanceFt)) ? `${design.sideDistanceFt} ft current side distance` : "--";
      outOfNorm = Number.isFinite(ruleValue) && Number(design.sideDistanceFt) < ruleValue;
      impact = outOfNorm
        ? "The side yard assumption may affect wall placement, service access, openings, and neighbor privacy."
        : "The side yard appears usable for early layout, pending source and survey confirmation.";
      improve = outOfNorm
        ? "Compress the side massing, move service entries, or verify whether projections are exempt."
        : "Use this as a layout guardrail while checking easements and fire/service access.";
    }

    if (rule.ruleType === "height_limit") {
      measured = Number.isFinite(Number(design.heightFt)) ? `${design.heightFt} ft current massing height` : "--";
      outOfNorm = Number.isFinite(ruleValue) && Number(design.heightFt) > ruleValue;
      impact = outOfNorm
        ? "The current massing exceeds the entered height rule, which can trigger redesign, variance, or review delay."
        : "The height appears compatible with the entered limit, pending how the jurisdiction measures height.";
      improve = outOfNorm
        ? "Lower roof volume, step the massing, verify grade-plane measurement, or route this to variance review."
        : "Confirm the jurisdiction's height measurement method before final elevations.";
    }

    if (rule.ruleType === "incentive") {
      measured = policyRuleValue(rule);
      outOfNorm = status.includes("review") || status.includes("pending");
      impact = "This may improve permitting speed or sustainability review if the project documents the required measures.";
      improve = "Attach the incentive guide, confirm eligibility, and connect it to solar, roof area, passive design, and energy modeling evidence.";
    }

    return {
      rule,
      label: outOfNorm ? "Reconsider" : status.includes("review") ? "Verify" : "Use",
      measured,
      outOfNorm,
      impact,
      improve
    };
  });
}

function policyFactRows(project, survey) {
  const fields = survey.fields || {};
  const lookup = policyPrimaryLookup(survey);
  const rules = project.verifiedRules || [];
  const hazards = survey.hazards || [];
  const verifiedRules = rules.filter(rule => isVerifiedSiteStatus(rule.verificationStatus)).length;
  const elevationBasis = [
    fields.minElevation ? `Min ${fields.minElevation}` : "",
    fields.maxElevation ? `Max ${fields.maxElevation}` : "",
    fields.averageSlope ? `Slope ${fields.averageSlope}` : "",
    fields.slopeDirection ? `Toward ${fields.slopeDirection}` : ""
  ].filter(Boolean).join(" / ");
  const hazardSummary = hazards.length
    ? hazards.map(item => `${item.name || "Hazard"} (${siteRiskSeverity(item)})`).slice(0, 3).join(" / ")
    : "";

  return [
    { label: "Address", value: fields.addressLookup || fields.parcelAddress, detail: "Entered lookup basis for parcel and zoning discovery", status: policyFieldStatus(fields.addressLookup || fields.parcelAddress) },
    { label: "Jurisdiction", value: fields.jurisdiction || fields.municipality, detail: "Policy authority used for zoning, code, and procedure checks", status: policyFieldStatus(fields.jurisdiction || fields.municipality) },
    { label: "Zone", value: fields.detectedZoneArea || fields.zoningDistrict, detail: "Detected or entered zone/policy area", status: fields.policyLookupStatus || policyFieldStatus(fields.detectedZoneArea || fields.zoningDistrict) },
    { label: "Overlays", value: fields.overlays, detail: "Overlay districts, mapped policy areas, or risk layers", status: policyFieldStatus(fields.overlays) },
    { label: "Initiatives", value: fields.zoneInitiatives, detail: "Local incentives, sustainability initiatives, or design-supportive programs", status: policyFieldStatus(fields.zoneInitiatives) },
    { label: "Policies", value: fields.policySummary || lookup?.result, detail: lookup ? siteFactDetailFromRecord(lookup) : "No saved policy lookup yet", status: lookup?.status || policyFieldStatus(fields.policySummary) },
    { label: "Building codes", value: fields.buildingCodeSummary || (rules.length ? `${verifiedRules}/${rules.length} verified rule records` : ""), detail: "Code basis or verified rule coverage", status: rules.length ? "saved" : policyFieldStatus(fields.buildingCodeSummary) },
    { label: "Elevation", value: fields.elevationPolicy || elevationBasis, detail: "Elevation, slope, datum, or flood-related height basis", status: policyFieldStatus(fields.elevationPolicy || elevationBasis) },
    { label: "Risk prevention", value: fields.riskPrevention, detail: "Preventive actions for known zoning, hazard, utility, or permit risks", status: policyFieldStatus(fields.riskPrevention) },
    { label: "Recovery procedure", value: fields.issueRecoveryProcedures, detail: "What to do when a review, hazard, or field conflict appears", status: policyFieldStatus(fields.issueRecoveryProcedures) },
    { label: "Permit speed", value: fields.permittingSpeed, detail: "Expected review speed, bottlenecks, or expedited path notes", status: policyFieldStatus(fields.permittingSpeed) },
    { label: "Environmental hazards", value: fields.environmentalHazards || hazardSummary, detail: hazards.length ? `${hazards.length} hazard records saved` : "No hazard records saved yet", status: hazards.length ? "saved" : policyFieldStatus(fields.environmentalHazards) }
  ];
}

function policyCommandRows(project, survey) {
  const fields = survey.fields || {};
  const rules = project.verifiedRules || [];
  const verifiedRules = rules.filter(rule => isVerifiedSiteStatus(rule.verificationStatus)).length;
  const lookup = policyPrimaryLookup(survey);
  const hazardCount = Array.isArray(survey.hazards) ? survey.hazards.length : 0;

  return [
    ["Zone", fields.detectedZoneArea || fields.zoningDistrict || "--", fields.jurisdiction || fields.municipality || "jurisdiction pending"],
    ["Policy Sources", lookup ? sourceStatusText(lookup) : "--", lookup?.status || "lookup pending"],
    ["Rules", rules.length ? `${verifiedRules}/${rules.length}` : "--", "verified rule records"],
    ["Risks", hazardCount ? String(hazardCount) : "--", "hazards / prevention items"]
  ];
}

function policyProcedureRows(survey) {
  const fields = survey.fields || {};
  return [
    { label: "Prevent", value: fields.riskPrevention, detail: "Reduce code, hazard, utility, or permit risk before design lock." },
    { label: "Recover", value: fields.issueRecoveryProcedures, detail: "Steps to take when zoning, site, consultant, or hazard issues appear." },
    { label: "Procedure", value: fields.permittingProcedures, detail: "Review sequence, required contacts, submittals, and approvals." },
    { label: "Speed", value: fields.permittingSpeed, detail: "Expected review duration, expedited review path, or likely bottleneck." }
  ];
}

function policyHazardRows(survey) {
  return (survey.hazards || []).map(item => ({
    name: item.name || "Hazard",
    severity: siteRiskSeverity(item),
    value: siteRecordText(item),
    status: item.status || "needs review",
    source: sourceStatusText(item)
  }));
}

function safeExternalMapUrl(value) {
  const text = String(value || "").trim();
  if (!text) return "";
  try {
    const url = new URL(text);
    return ["https:", "http:"].includes(url.protocol) ? url.href : "";
  } catch (error) {
    return "";
  }
}

function arcgisPortalBase(fields) {
  const portal = safeExternalMapUrl(fields.arcgisPortalUrl) || "https://www.arcgis.com/";
  return portal.replace(/\/+$/, "");
}

function arcgisEmbedUrl(fields) {
  const explicit = safeExternalMapUrl(fields.arcgisEmbedUrl);
  if (explicit) return explicit;
  const webMapId = String(fields.arcgisWebMapId || "").trim();
  if (!webMapId) return "";
  return `${arcgisPortalBase(fields)}/apps/Embed/index.html?webmap=${encodeURIComponent(webMapId)}&legend=true&details=true&zoom=true&scale=true&disable_scroll=true`;
}

function arcgisMapViewerUrl(fields) {
  const webMapId = String(fields.arcgisWebMapId || "").trim();
  const base = arcgisPortalBase(fields);
  return webMapId
    ? `${base}/apps/mapviewer/index.html?webmap=${encodeURIComponent(webMapId)}`
    : `${base}/apps/mapviewer/index.html`;
}

function arcgisProHandoffPackage(project) {
  const survey = state.siteSurvey;
  const fields = survey.fields || {};
  return {
    exportedAt: new Date().toISOString(),
    intent: "ArcGIS Pro handoff from ASTRA GIS Intelligence",
    note: "ArcGIS Pro is a desktop application, so this package stores the Pro project metadata, source layers, and web map references used by the browser workspace.",
    project: {
      name: project.project.name,
      location: project.project.location,
      phase: project.project.phase
    },
    arcgis: {
      portalUrl: fields.arcgisPortalUrl || "",
      proInstallStatus: fields.arcgisProInstallStatus || "",
      proInstallUrl: fields.arcgisProInstallUrl || "",
      proProductUrl: fields.arcgisProProductUrl || "",
      proLicenseStatus: fields.arcgisProLicenseStatus || "",
      proVersion: fields.arcgisProVersion || "",
      webMapId: fields.arcgisWebMapId || "",
      embedUrl: arcgisEmbedUrl(fields),
      mapViewerUrl: arcgisMapViewerUrl(fields),
      featureServiceUrl: fields.arcgisFeatureServiceUrl || "",
      sceneUrl: fields.arcgisSceneUrl || "",
      proProjectName: fields.arcgisProProjectName || "",
      proProjectPath: fields.arcgisProProjectPath || "",
      proPackageName: fields.arcgisProPackageName || "",
      coordinateSystem: fields.arcgisCoordinateSystem || "",
      layerSyncStatus: fields.arcgisLayerSyncStatus || "",
      workflow: fields.arcgisProWorkflow || ""
    },
    parcel: {
      address: fields.addressLookup || fields.parcelAddress || "",
      parcelApn: fields.parcelApn || "",
      jurisdiction: fields.jurisdiction || "",
      zoningDistrict: fields.zoningDistrict || "",
      detectedZoneArea: fields.detectedZoneArea || "",
      latitude: fields.latitude || "",
      longitude: fields.longitude || "",
      overlays: fields.overlays || ""
    },
    site: project.site,
    gisLayers: project.gisLayers,
    gisFindings: survey.gisFindings || [],
    policyLookups: survey.policyLookups || [],
    hazards: survey.hazards || [],
    opportunities: survey.opportunities || []
  };
}

function caseStudyRecords() {
  return Array.isArray(state.siteSurvey.caseStudies) ? state.siteSurvey.caseStudies : [];
}

function caseStudyMetricSummary(project, survey) {
  const fields = survey.fields || {};
  const analysis = project?.analysisResults || {};
  return [
    fields.annualEnergyUse ? `Energy: ${fields.annualEnergyUse}` : "",
    fields.embodiedCarbon ? `Carbon: ${fields.embodiedCarbon}` : "",
    fields.daylightFactor ? `Daylight: ${fields.daylightFactor}` : "",
    fields.stormwaterRetention ? `Stormwater: ${fields.stormwaterRetention}` : "",
    analysis.sunStudy?.daylightScore ? `Sun study daylight score ${analysis.sunStudy.daylightScore}` : "",
    analysis.ashrae?.coolingImpactPercent ? `ASHRAE cooling impact +${analysis.ashrae.coolingImpactPercent}%` : "",
    analysis.carbon?.embodiedCarbonChange ? `Embodied carbon ${analysis.carbon.embodiedCarbonChange}` : ""
  ].filter(Boolean).join(" / ");
}

function buildGeneratedCaseStudies(project) {
  const survey = state.siteSurvey;
  const fields = survey.fields || {};
  const discovery = state.projectDiscovery || {};
  const analysis = project.analysisResults || {};
  const topOpportunity = siteTopOpportunity(survey);
  const dominantRisk = siteDominantRisk(survey);
  const metrics = caseStudyMetricSummary(project, survey);
  const floodFact = fields.environmentalHazards || fields.drainageNotes || siteRecordText((survey.hazards || []).find(item => String(item.name || "").toLowerCase().includes("flood"))) || "--";
  const initiative = fields.zoneInitiatives || "Initiative path pending";
  const desiredOutcome = fields.desiredFutureUse || discovery.outcomes || project.clientIntent.summary;
  const today = new Date().toISOString().slice(0, 10);
  const sourceName = "ASTRA generated from saved project data";

  return [
    {
      title: "Desired Outcome Case Study",
      audience: "Client / design review",
      desiredOutcome,
      focus: "Desired outcome, client intent, and design quality",
      sustainabilityMetrics: metrics || "--",
      floodStrategy: floodFact,
      initiativeDevelopment: initiative,
      designResponse: fields.policyDesignImplications || `Use ${topOpportunity?.name || "the strongest saved opportunity"} as the design driver while keeping ${dominantRisk?.name || "known risks"} visible.`,
      evidenceBasis: [
        "Client brief",
        fields.projectStage || "Project stage",
        analysis.sunStudy?.sourceTitle,
        analysis.ashrae?.sourceTitle,
        analysis.carbon?.sourceTitle
      ].filter(Boolean).join(" / "),
      recommendedActions: "Confirm measurable targets, revise massing conflicts, and export this case study for client or reviewer alignment.",
      status: "source linked",
      documentType: "Case Study",
      sourceName,
      sourceUrl: "",
      verifiedBy: "ASTRA deterministic generator",
      lastChecked: today,
      generated: true
    },
    {
      title: "Limited Flooding + Resilience Case Study",
      audience: "Planner / civil coordination",
      desiredOutcome: "Limit flooding and stormwater exposure without reducing the creative quality of the design.",
      focus: "Limited flooding, elevation, stormwater, and recovery procedure",
      sustainabilityMetrics: fields.stormwaterRetention || metrics || "--",
      floodStrategy: `${floodFact}. ${fields.riskPrevention || ""}`.trim(),
      initiativeDevelopment: "Use stormwater retention and landscape preservation as a low-impact development strategy.",
      designResponse: "Keep the primary mass out of the western low point, preserve the view corridor, and coordinate grading before foundation assumptions are locked.",
      evidenceBasis: "Flood risk overlay / topographic survey / drainage notes / hazard register",
      recommendedActions: fields.issueRecoveryProcedures || "Route unresolved stormwater, soil, or grading conflicts to civil/geotechnical review.",
      status: dominantRisk ? dominantRisk.status || "active" : "active",
      documentType: "Case Study",
      sourceName,
      sourceUrl: fields.gisSourceUrl || "",
      verifiedBy: "ASTRA deterministic generator",
      lastChecked: today,
      generated: true
    },
    {
      title: "Initiative-Based Development Case Study",
      audience: "Permit / sustainability review",
      desiredOutcome: "Use incentives and policy initiatives to make the design more sustainable and easier to explain.",
      focus: "Initiative based development",
      sustainabilityMetrics: metrics || fields.zoneInitiatives || "--",
      floodStrategy: fields.stormwaterRetention || "Stormwater retention strategy pending",
      initiativeDevelopment: initiative,
      designResponse: "Package solar-ready roof area, passive design, low-carbon material intent, and rainwater retention as one coordinated development path.",
      evidenceBasis: `${fields.policySourceUrl || "Policy source pending"} / verified policy rules / Site Intelligence Package`,
      recommendedActions: "Verify initiative eligibility, attach source pages, update model values, and export case-study CSV for review tracking.",
      status: fields.policyLookupStatus || "needs review",
      documentType: "Case Study",
      sourceName,
      sourceUrl: fields.policySourceUrl || "",
      verifiedBy: "",
      lastChecked: today,
      generated: true
    },
    {
      title: "Sustainability Metrics Case Study",
      audience: "ASHRAE / material review",
      desiredOutcome: "Translate energy, daylight, carbon, and material goals into design decisions that can be checked.",
      focus: "Sustainability metrics and material performance",
      sustainabilityMetrics: metrics || "--",
      floodStrategy: fields.environmentalHazards || "--",
      initiativeDevelopment: fields.zoneInitiatives || "--",
      designResponse: `${analysis.ashrae?.summary || "ASHRAE result pending"} ${analysis.carbon?.summary || "Carbon comparison pending"}`.trim(),
      evidenceBasis: "ASHRAE / Sustainability Result V4 / Material Carbon Comparison V2 / Sun Study Result V4",
      recommendedActions: "Pair daylight expansion with shading, verify envelope assumptions, and keep embodied-carbon claims tied to the material comparison.",
      status: "needs review",
      documentType: "Case Study",
      sourceName,
      sourceUrl: "",
      verifiedBy: "ASTRA deterministic generator",
      lastChecked: today,
      generated: true
    }
  ];
}

function caseStudyCsv(project) {
  const rows = [
    ["title", "audience", "desired_outcome", "focus", "sustainability_metrics", "flood_strategy", "initiative_development", "design_response", "evidence_basis", "recommended_actions", "status", "source"]
  ];
  caseStudyRecords().forEach(item => {
    rows.push([
      item.title,
      item.audience,
      item.desiredOutcome,
      item.focus,
      item.sustainabilityMetrics,
      item.floodStrategy,
      item.initiativeDevelopment,
      item.designResponse,
      item.evidenceBasis,
      item.recommendedActions,
      item.status,
      sourceStatusText(item)
    ]);
  });
  return rows.map(row => row.map(csvValue).join(",")).join("\n");
}

function caseStudyJson(project) {
  return JSON.stringify({
    exportedAt: new Date().toISOString(),
    project: project.project,
    desiredOutcome: state.siteSurvey.fields.desiredFutureUse,
    sustainabilityMetrics: caseStudyMetricSummary(project, state.siteSurvey),
    caseStudies: caseStudyRecords()
  }, null, 2);
}

function dataStorageStats(project) {
  const survey = state.siteSurvey;
  const evidence = siteEvidenceRecords(survey);
  const records = [
    ...Object.keys(survey.fields || {}),
    ...(survey.uploads || []),
    ...(survey.environmental || []),
    ...(survey.utilities || []),
    ...(survey.constraints || []),
    ...(survey.opportunities || []),
    ...(survey.sourceFindings || []),
    ...(survey.additionalAspects || []),
    ...(survey.gisFindings || []),
    ...(survey.hazards || []),
    ...(survey.sensors || []),
    ...(survey.policyLookups || []),
    ...(survey.evidence || []),
    ...(survey.caseStudies || []),
    ...(state.programSpaces || []),
    ...(project.verifiedRules || []),
    ...(project.gisLayers || [])
  ];
  const verified = evidence.filter(item => isVerifiedSiteStatus(item.status)).length;
  const review = evidence.filter(item => String(item.status || "").toLowerCase().includes("review") || String(item.status || "").toLowerCase().includes("pending")).length;
  return {
    total: records.length,
    verified,
    review,
    cases: caseStudyRecords().length,
    csvRows: projectCsv(project).split("\n").length - 1
  };
}

function dataStorageFactRows(project) {
  const fields = state.siteSurvey.fields || {};
  return [
    { label: "Desired outcome", value: fields.desiredFutureUse || state.projectDiscovery.outcomes, detail: "Primary narrative basis for generated case studies", status: policyFieldStatus(fields.desiredFutureUse || state.projectDiscovery.outcomes) },
    { label: "Sustainability metrics", value: caseStudyMetricSummary(project, state.siteSurvey), detail: "Energy, carbon, daylight, stormwater, ASHRAE, and material facts", status: "saved" },
    { label: "Limited flooding", value: fields.environmentalHazards || fields.drainageNotes, detail: "Flood, slope, stormwater, and recovery data for resilience case studies", status: policyFieldStatus(fields.environmentalHazards || fields.drainageNotes) },
    { label: "Initiatives", value: fields.zoneInitiatives, detail: "Initiative-based development and expedited review notes", status: fields.policyLookupStatus || policyFieldStatus(fields.zoneInitiatives) },
    { label: "Policy zone", value: fields.detectedZoneArea || fields.zoningDistrict, detail: fields.policySourceUrl || "Policy source pending", status: fields.policyLookupStatus || "needs review" },
    { label: "Case records", value: caseStudyRecords().length ? String(caseStudyRecords().length) : "--", detail: "Custom case studies saved in project memory", status: caseStudyRecords().length ? "active" : "missing" }
  ];
}

function dataCount(value, label = "records") {
  const count = Number(value || 0);
  return count ? `${count} ${label}` : "--";
}

function dataStorageMemoryRows(project) {
  const survey = state.siteSurvey;
  const fields = survey.fields || {};
  const discovery = state.projectDiscovery || {};
  return [
    {
      symbol: "BRF",
      title: "Client brief + goals",
      count: dataCount(project.clientIntent.priorities.length + topProjectValues(discovery, 8).length, "items"),
      stored: discovery.projectName || project.clientIntent.summary || "--",
      csv: "discovery_* / client_priority",
      use: "Sets design intent, desired outcome, values, and client-facing case-study language.",
      status: policyFieldStatus(discovery.projectName || project.clientIntent.summary)
    },
    {
      symbol: "SITE",
      title: "Site survey facts",
      count: dataCount(Object.keys(fields).length + (survey.evidence || []).length, "fields"),
      stored: fields.parcelAddress || fields.addressLookup || project.project.location || "--",
      csv: "site_survey_form / site_evidence",
      use: "Keeps address, parcel, survey, source, and verification facts available for every later page.",
      status: policyFieldStatus(fields.parcelAddress || fields.addressLookup)
    },
    {
      symbol: "GIS",
      title: "GIS + ArcGIS layers",
      count: dataCount((survey.gisFindings || []).length + (project.gisLayers || []).length, "layers"),
      stored: fields.arcgisWebMapId || fields.gisSourceUrl || "--",
      csv: "site_gis_finding / gis_layer",
      use: "Carries mapped constraints, ArcGIS references, layer findings, and spatial design implications.",
      status: fields.gisLookupStatus || policyFieldStatus(fields.arcgisWebMapId || fields.gisSourceUrl)
    },
    {
      symbol: "LAW",
      title: "Policy + code records",
      count: dataCount((survey.policyLookups || []).length + (project.verifiedRules || []).length, "records"),
      stored: fields.detectedZoneArea || fields.zoningDistrict || "--",
      csv: "site_policy_lookup / policy_rule",
      use: "Stores zone, overlays, setbacks, sources, reviewer state, and permit-relevant code facts.",
      status: fields.policyLookupStatus || policyFieldStatus(fields.detectedZoneArea || fields.zoningDistrict)
    },
    {
      symbol: "SUS",
      title: "Sustainability metrics",
      count: caseStudyMetricSummary(project, survey) ? "saved" : "--",
      stored: caseStudyMetricSummary(project, survey) || "--",
      csv: "success_metric / site_case_study",
      use: "Feeds ASHRAE, daylight, embodied carbon, stormwater, and low-carbon case-study exports.",
      status: caseStudyMetricSummary(project, survey) ? "saved" : "missing"
    },
    {
      symbol: "CASE",
      title: "Case study library",
      count: dataCount(caseStudyRecords().length, "cases"),
      stored: caseStudyRecords().map(item => item.title).join(" / ") || "--",
      csv: "site_case_study",
      use: "Packages desired outcome, limited flooding, sustainability, initiatives, evidence, and actions.",
      status: caseStudyRecords().length ? "exportable" : "missing"
    }
  ];
}

function dataCaseStudyOutcomeRows(project) {
  const fields = state.siteSurvey.fields || {};
  const survey = state.siteSurvey;
  const dominantRisk = siteDominantRisk(survey);
  const topOpportunity = siteTopOpportunity(survey);
  return [
    {
      symbol: "OUT",
      title: "Desired outcome",
      fact: fields.desiredFutureUse || state.projectDiscovery.outcomes || project.clientIntent.summary || "--",
      output: "Desired Outcome Case Study",
      check: "Shows whether the design direction still matches client goals, constraints, and saved evidence."
    },
    {
      symbol: "FLD",
      title: "Limited flooding",
      fact: fields.environmentalHazards || fields.drainageNotes || dominantRisk?.value || "--",
      output: "Limited Flooding + Resilience Case Study",
      check: "Connects flood, slope, stormwater, elevation, prevention, and recovery procedures to design moves."
    },
    {
      symbol: "DEV",
      title: "Initiative development",
      fact: fields.zoneInitiatives || fields.policySummary || "--",
      output: "Initiative-Based Development Case Study",
      check: "Packages incentive, policy, sustainability, and procedure notes for planning or permit review."
    },
    {
      symbol: "MET",
      title: "Sustainability metrics",
      fact: caseStudyMetricSummary(project, survey) || topOpportunity?.value || "--",
      output: "Sustainability Metrics Case Study",
      check: "Uses energy, carbon, daylight, stormwater, ASHRAE, and material facts without inventing missing values."
    }
  ];
}

function dataStorageSurface(project) {
  const stats = dataStorageStats(project);
  const caseStudies = caseStudyRecords();
  const memoryRows = dataStorageMemoryRows(project);
  const outcomeRows = dataCaseStudyOutcomeRows(project);

  return `
    <div class="surface-pad site-survey-workspace data-storage-workspace">
      <header class="site-survey-hero data-storage-hero">
        <button class="journey-link" data-section="dashboard">Back to flow</button>
        <div>
          <span class="mini-label">Database / data storage + CSV</span>
          <h3>Project Memory, CSV + Case Study Data Hub</h3>
          <p>Store actual project facts, sustainability metrics, flood-limitation strategies, policy initiatives, ArcGIS data, and generated case studies in one exportable system.</p>
        </div>
        <div class="site-output-card">
          <span>Output</span>
          <strong>JSON + CSV Data Package</strong>
          <p>${stats.csvRows} CSV rows, ${stats.total} stored records, and ${stats.cases} case-study records are ready for download.</p>
        </div>
      </header>

      <section class="site-command-grid data-command-grid" aria-label="Data storage summary">
        ${[
          ["Stored Records", stats.total, "fields, evidence, rules, GIS, cases"],
          ["Verified Evidence", stats.verified, "active or source-linked records"],
          ["Needs Review", stats.review, "pending or review records"],
          ["Case Studies", stats.cases, "custom generated narratives"]
        ].map(item => `
          <article>
            <span>${escapeHtml(item[0])}</span>
            <strong>${escapeHtml(item[1])}</strong>
            <p>${escapeHtml(item[2])}</p>
          </article>
        `).join("")}
      </section>

      <div class="site-workbench-layout">
        <main class="site-main-stack" aria-label="Data storage and case study sections">
          <section class="site-survey-section data-memory-panel">
            <div>
              <span class="mini-label">1. Unified data memory</span>
              <h3>What Is Saved, What Is Missing, Where It Exports</h3>
              <p>Each data domain reads from the current project memory. Empty or unverified inputs stay visible as -- so ASTRA can explain gaps instead of fabricating facts.</p>
            </div>
            <div class="data-memory-grid">
              ${memoryRows.map(item => `
                <article class="${escapeHtml(item.status)}">
                  <span>${escapeHtml(item.symbol)}</span>
                  <strong>${escapeHtml(item.title)}</strong>
                  <div><b>Saved</b><em>${escapeHtml(item.count)}</em></div>
                  <p><b>Current fact</b>${escapeHtml(siteDisplayValue(item.stored))}</p>
                  <p><b>CSV field</b>${escapeHtml(item.csv)}</p>
                  <p>${escapeHtml(item.use)}</p>
                </article>
              `).join("")}
            </div>
            ${siteFactGrid(dataStorageFactRows(project), "Data storage facts")}
          </section>

          <section class="site-survey-section data-generator-panel">
            <div>
              <span class="mini-label">2. Generator inputs</span>
              <h3>Case Study Basis</h3>
              <p>These saved fields are the inputs for custom case studies. Update them, generate again, and the JSON/CSV export will reflect the current project direction.</p>
            </div>
            <div class="site-intake-grid case-study-input-grid">
              ${siteFieldTextarea("desiredFutureUse", "Desired outcome / future use", 3)}
              ${siteFieldTextarea("clientGoals", "Client goals", 3)}
              ${siteFieldInput("annualEnergyUse", "Annual energy use target")}
              ${siteFieldInput("embodiedCarbon", "Embodied carbon target")}
              ${siteFieldInput("daylightFactor", "Daylight / sun metric")}
              ${siteFieldInput("stormwaterRetention", "Stormwater retention metric")}
              ${siteFieldTextarea("environmentalHazards", "Flooding / environmental hazards", 3)}
              ${siteFieldTextarea("zoneInitiatives", "Initiative-based development", 3)}
              ${siteFieldTextarea("policyDesignImplications", "Design implications", 3)}
            </div>
          </section>

          <section class="site-survey-section data-outcome-panel">
            <div class="survey-section-head">
              <div>
                <span class="mini-label">3. Outcome-based case studies</span>
                <h3>Generate Cases From Actual Stored Inputs</h3>
                <p>These cards preview the source facts used for each generated case study. When a fact is missing, the generated record keeps -- until the project data is updated.</p>
              </div>
              <button class="add-row-button" data-case-study-generate>Generate Outcome Cases</button>
            </div>
            <div class="data-outcome-grid">
              ${outcomeRows.map(item => `
                <article>
                  <span>${escapeHtml(item.symbol)}</span>
                  <strong>${escapeHtml(item.title)}</strong>
                  <p><b>Fact used</b>${escapeHtml(siteDisplayValue(item.fact))}</p>
                  <p><b>Creates</b>${escapeHtml(item.output)}</p>
                  <p>${escapeHtml(item.check)}</p>
                </article>
              `).join("")}
            </div>
          </section>

          <section class="site-survey-section case-study-library-panel">
            <div class="survey-section-head">
              <div>
                <span class="mini-label">4. Custom case studies</span>
                <h3>Saved Case Study Library</h3>
                <p>Each case study is editable and stored with the project, then exported as JSON or CSV for downstream reports and reviews.</p>
              </div>
              <button class="add-row-button" data-add-site-row="caseStudies">Add Custom Case Study</button>
            </div>
            <div class="site-ai-question-grid case-study-record-grid">
              ${caseStudies.map((item, index) => `
                <article>
                  ${siteRowInput("caseStudies", index, "title", item.title || "", "Title")}
                  ${siteRowInput("caseStudies", index, "audience", item.audience || "", "Audience")}
                  ${siteRowInput("caseStudies", index, "focus", item.focus || "", "Focus")}
                  ${siteRowTextarea("caseStudies", index, "desiredOutcome", item.desiredOutcome || "", "Desired outcome", 3)}
                  ${siteRowTextarea("caseStudies", index, "sustainabilityMetrics", item.sustainabilityMetrics || "", "Sustainability metrics", 3)}
                  ${siteRowTextarea("caseStudies", index, "floodStrategy", item.floodStrategy || "", "Limited flooding / resilience strategy", 3)}
                  ${siteRowTextarea("caseStudies", index, "initiativeDevelopment", item.initiativeDevelopment || "", "Initiative-based development", 3)}
                  ${siteRowTextarea("caseStudies", index, "designResponse", item.designResponse || "", "Design response", 3)}
                  ${siteRowTextarea("caseStudies", index, "evidenceBasis", item.evidenceBasis || "", "Evidence basis", 3)}
                  ${siteRowTextarea("caseStudies", index, "recommendedActions", item.recommendedActions || "", "Recommended actions", 3)}
                  ${siteSourceControls("caseStudies", index, item, ["Case Study", ...siteDocumentTypeOptions])}
                </article>
              `).join("") || `<div class="empty-state">No case studies saved yet. Generate from current data to create the first set.</div>`}
            </div>
          </section>

          <section class="site-survey-section data-schema-panel">
            <div>
              <span class="mini-label">5. Storage map</span>
              <h3>What the CSV Contains</h3>
              <p>The export keeps data reusable across AI retrieval, GIS, sustainability review, policy checks, case studies, and reporting.</p>
            </div>
            <div class="database-list data-schema-list">
              ${[
                ["site_survey_form", "All intake, policy, sustainability, elevation, and case-study input fields", "saved"],
                ["site_policy_lookup", "Address, zone, source, status, policy result, and reviewer metadata", "source linked"],
                ["site_hazard", "Flooding, slope, soil, utility, severity, source, and mitigation data", "risk"],
                ["site_case_study", "Desired outcome, sustainability metrics, flood strategy, initiatives, evidence, actions", "exportable"],
                ["policy_rule", "Verified rules, values, units, sections, and source titles", "verified"],
                ["gis_layer", "GIS overlay name, status, finding, source, and downstream use", "active"]
              ].map(row => `
                <div>
                  <strong>${escapeHtml(row[0])}</strong>
                  <span>${escapeHtml(row[1])}</span>
                  <em>${escapeHtml(row[2])}</em>
                </div>
              `).join("")}
            </div>
          </section>

          <section class="site-survey-section data-export-panel">
            <div class="survey-section-head">
              <div>
                <span class="mini-label">6. Final export center</span>
                <h3>Download Stored Project Data</h3>
                <p>Export only after the memory, generator inputs, case studies, and storage map have been reviewed.</p>
              </div>
              <button class="add-row-button" data-download="csv">Download Project CSV</button>
            </div>
            <div class="data-export-grid">
              <button type="button" data-export-info="parcel"><span>JSON</span><strong>Full ASTRA Project</strong><em>Project, site survey, rules, GIS, model, and cases</em></button>
              <button type="button" data-export-info="csv"><span>CSV</span><strong>Project Data Table</strong><em>All saved records in a spreadsheet-ready table</em></button>
              <button type="button" data-export-info="case-json"><span>JSON</span><strong>Case Studies</strong><em>Custom generated narratives with source fields</em></button>
              <button type="button" data-export-info="case-csv"><span>CSV</span><strong>Case Study Table</strong><em>Desired outcome, metrics, flood, initiatives, actions</em></button>
            </div>
          </section>
        </main>
      </div>
      <div id="annotationLayer" class="annotation-layer"></div>
    </div>
  `;
}

function policySurface(project) {
  const survey = state.siteSurvey;
  const fields = survey.fields || {};
  const stats = siteIntelligenceStats(survey);
  const lookup = policyPrimaryLookup(survey);
  const factRows = policyFactRows(project, survey);
  const commandRows = policyCommandRows(project, survey);
  const ruleRows = policyRuleImpactRows(project);
  const procedureRows = policyProcedureRows(survey);
  const hazardRows = policyHazardRows(survey);

  return `
    <div class="surface-pad site-survey-workspace policy-workspace">
      <header class="site-survey-hero policy-hero">
        <button class="journey-link" data-section="dashboard">Back to flow</button>
        <div>
          <span class="mini-label">ASTRA policy intelligence</span>
          <h3>Address, Zone, Code + Risk Procedure Finder</h3>
          <p>Enter a site address, identify the zone, record policy and code sources, then connect risk prevention, recovery procedures, environmental hazards, and elevation constraints to design decisions.</p>
        </div>
        <div class="site-output-card">
          <span>Output</span>
          <strong>Policy Intelligence Package</strong>
          <p>${stats.confidence}% readiness. Missing facts remain shown as -- so ASTRA does not turn assumptions into claims.</p>
        </div>
      </header>

      <section class="site-command-grid policy-command-grid" aria-label="Policy intelligence summary">
        ${commandRows.map(item => `
          <article>
            <span>${escapeHtml(item[0])}</span>
            <strong>${escapeHtml(item[1])}</strong>
            <p>${escapeHtml(item[2])}</p>
          </article>
        `).join("")}
      </section>

      <div class="site-workbench-layout">
        <main class="site-main-stack" aria-label="Policy intelligence sections">
          <section class="site-survey-section policy-discovery-panel">
            <div class="survey-section-head">
              <div>
                <span class="mini-label">1. Address to zone</span>
                <h3>Discover the Jurisdiction + Zone</h3>
                <p>Use the address as the starting point, then save the jurisdiction, zoning district, overlays, source URL, lookup method, and verification state as a traceable policy record.</p>
              </div>
              <button class="add-row-button" data-policy-lookup-create>Save / Discover Zone Record</button>
            </div>
            ${siteSubsectionIntro("ADR", "Location lookup", "The section can only be as factual as the entered parcel, municipal GIS, zoning map, or policy PDF source. Unknown values stay visible as --.")}
            <div class="policy-discovery-grid">
              <div class="site-intake-grid policy-address-form">
                ${siteFieldInput("addressLookup", "Address")}
                ${siteFieldInput("parcelApn", "Parcel / APN")}
                ${siteFieldInput("cityCounty", "City / county")}
                ${siteFieldInput("stateRegion", "State / region")}
                ${siteFieldInput("country", "Country")}
                ${siteFieldInput("latitude", "Latitude")}
                ${siteFieldInput("longitude", "Longitude")}
                ${siteFieldInput("jurisdiction", "Jurisdiction")}
                ${siteFieldInput("zoningDistrict", "Zoning district")}
                ${siteFieldInput("detectedZoneArea", "Zone / policy area")}
                ${siteFieldSelect("lookupMethod", "Lookup method", lookupMethodOptions)}
                ${siteFieldSelect("policyLookupStatus", "Lookup status", siteVerificationStatusOptions)}
                ${siteFieldInput("policySourceUrl", "Policy source URL / citation")}
                ${siteFieldInput("lastPolicyCheck", "Last checked", "date")}
                ${siteFieldTextarea("overlays", "Overlay districts / mapped policy areas")}
              </div>
              <aside class="policy-zone-snapshot">
                <span class="mini-label">Current policy read</span>
                <strong>${escapeHtml(siteDisplayValue(fields.detectedZoneArea || fields.zoningDistrict))}</strong>
                <p><b>Jurisdiction</b>${escapeHtml(siteDisplayValue(fields.jurisdiction || fields.municipality))}</p>
                <p><b>Source</b>${escapeHtml(lookup ? sourceStatusText(lookup) : siteDisplayValue(fields.policySourceUrl))}</p>
                <p><b>Status</b>${escapeHtml(fields.policyLookupStatus || lookup?.status || "--")}</p>
              </aside>
            </div>
            ${siteFactGrid(factRows, "Policy facts")}
            ${siteSectionInsightCard(
              "Facts drive the policy assistant",
              `${siteDisplayValue(fields.addressLookup || fields.parcelAddress)} is the current lookup basis. ASTRA can explain implications from entered policy records, but missing source URLs, zoning districts, or verification states should remain non-final.`,
              [
                `Zone: ${siteDisplayValue(fields.detectedZoneArea || fields.zoningDistrict)}`,
                `Overlays: ${siteDisplayValue(fields.overlays)}`,
                `Lookup status: ${fields.policyLookupStatus || "--"}`
              ],
              "Add a municipal source, parcel viewer link, policy PDF, or reviewer name before treating the result as permit-ready.",
              fields.policyLookupStatus
            )}
          </section>

          <section class="site-survey-section policy-rules-panel">
            <div class="survey-section-head">
              <div>
                <span class="mini-label">2. Rules + initiatives</span>
                <h3>Zoning, Policy Initiatives + Design Impact</h3>
                <p>Each rule is shown as a design review item so the user sees what is verified, what looks off, and how to improve the design response.</p>
              </div>
              <button class="add-row-button" data-add-site-row="policyLookups">Add Policy Record</button>
            </div>
            ${siteSubsectionIntro("RULE", "Rule impact review", "These cards compare saved policy rules with the current design model where a measurable check exists. They are advisory, not a substitute for jurisdiction review.")}
            <div class="policy-rule-review-grid">
              ${ruleRows.map(item => `
                <article class="${item.outOfNorm ? "reconsider" : escapeHtml(siteStatusClass(item.rule.verificationStatus))}">
                  <span class="status-token ${escapeHtml(item.outOfNorm ? "attention" : item.rule.verificationStatus || "needs_review")}">${escapeHtml(item.label)}</span>
                  <strong>${escapeHtml(item.rule.section || item.rule.ruleType || "Policy rule")}</strong>
                  <p><b>What I see:</b> ${escapeHtml(item.measured)} against ${escapeHtml(policyRuleValue(item.rule))}.</p>
                  <p><b>How I think it will impact the design:</b> ${escapeHtml(item.impact)}</p>
                  <p><b>How I could improve it:</b> ${escapeHtml(item.improve)}</p>
                  <em>${escapeHtml(item.rule.sourceTitle || "Source pending")}${item.rule.page ? ` / page ${escapeHtml(item.rule.page)}` : ""}</em>
                </article>
              `).join("") || `<div class="empty-state">No verified policy rules have been added yet.</div>`}
            </div>
            ${siteSubsectionIntro("INIT", "Local initiatives and policy notes", "Record incentives, sustainability initiatives, code programs, and design implications in plain language so the assistant can reuse them.")}
            <div class="site-intake-grid policy-notes-grid">
              ${siteFieldTextarea("zoneInitiatives", "Zone initiatives / incentives", 4)}
              ${siteFieldTextarea("policySummary", "Policy and zoning summary", 4)}
              ${siteFieldTextarea("policyDesignImplications", "Design implications", 4)}
            </div>
          </section>

          <section class="site-survey-section policy-code-panel">
            <div>
              <span class="mini-label">3. Building code + review process</span>
              <h3>Codes, Procedures, Speed + Evidence</h3>
              <p>Keep building-code basis and review procedure in the same workspace as zoning so the user does not fragment between policy, permit, and design decisions.</p>
            </div>
            ${siteSubsectionIntro("CODE", "Code and permit basis", "Use this area for building-code references, required procedures, review speed, and any path to expedited or delayed review.")}
            <div class="site-intake-grid policy-notes-grid">
              ${siteFieldTextarea("buildingCodeSummary", "Building code basis / applicable code notes", 4)}
              ${siteFieldTextarea("permittingProcedures", "Procedures, contacts, submittals, and review sequence", 4)}
              ${siteFieldTextarea("permittingSpeed", "Expected review speed / bottlenecks / expedited paths", 3)}
            </div>
            <div class="policy-procedure-grid">
              ${procedureRows.map(item => {
                const value = siteDisplayValue(item.value);
                return `
                  <article class="${value === "--" ? "missing" : "saved"}">
                    <span>${escapeHtml(item.label)}</span>
                    <strong>${escapeHtml(value)}</strong>
                    <p>${escapeHtml(item.detail)}</p>
                  </article>
                `;
              }).join("")}
            </div>
          </section>

          <section class="site-survey-section policy-risk-panel">
            <div class="survey-section-head">
              <div>
                <span class="mini-label">4. Elevation, hazards + prevention</span>
                <h3>Risk Prevention and Recovery</h3>
                <p>Connect topography, environmental hazards, and policy issues to prevention and recovery actions before they become late-stage surprises.</p>
              </div>
              <button class="add-row-button" data-add-site-row="hazards">Add Hazard</button>
            </div>
            ${siteSubsectionIntro("ELEV", "Elevation and hazard logic", "Elevation rules, flood concerns, slope limits, and hazard overlays should be explained with source-backed data whenever possible.")}
            <div class="site-intake-grid policy-notes-grid">
              ${siteFieldTextarea("elevationPolicy", "Elevation / slope / flood policy basis", 3)}
              ${siteFieldTextarea("environmentalHazards", "Environmental hazards from policy, GIS, or field review", 4)}
              ${siteFieldTextarea("riskPrevention", "Risk prevention actions", 4)}
              ${siteFieldTextarea("issueRecoveryProcedures", "Issue recovery procedures", 4)}
            </div>
            <div class="risk-dashboard-grid policy-hazard-grid">
              ${hazardRows.map(item => `
                <article class="${escapeHtml(String(item.severity || "").toLowerCase())}">
                  <span>${escapeHtml(item.status)}</span>
                  <strong>${escapeHtml(item.name)}</strong>
                  <em>${escapeHtml(item.severity)} severity</em>
                  <p>${escapeHtml(siteDisplayValue(item.value))}</p>
                  <small>${escapeHtml(item.source)}</small>
                </article>
              `).join("") || `<div class="empty-state">No hazard records saved yet.</div>`}
            </div>
          </section>

          <section class="site-survey-section policy-record-panel">
            <div class="survey-section-head">
              <div>
                <span class="mini-label">5. Source-backed records</span>
                <h3>Policy Lookup Library</h3>
                <p>Every policy claim should have a source type, URL or source name, status, reviewer, and last-checked date.</p>
              </div>
              <button class="add-row-button" data-add-site-row="policyLookups">Add Custom Policy Record</button>
            </div>
            <div class="site-ai-question-grid policy-record-grid">
              ${(survey.policyLookups || []).map((item, index) => `
                <article>
                  ${siteRowInput("policyLookups", index, "name", item.name || "", "Policy / lookup name")}
                  ${siteRowInput("policyLookups", index, "address", item.address || "", "Address")}
                  ${siteRowInput("policyLookups", index, "parcelApn", item.parcelApn || "", "Parcel / APN")}
                  ${siteRowInput("policyLookups", index, "jurisdiction", item.jurisdiction || "", "Jurisdiction")}
                  ${siteRowTextarea("policyLookups", index, "result", item.result || "", "Lookup result / rule found")}
                  ${siteRowSelect("policyLookups", index, "sourceName", item.sourceName || "Manual reviewer entry", "Lookup source type", policySourceOptions)}
                  ${siteRowInput("policyLookups", index, "sourceUrl", item.sourceUrl || "", "Source URL / citation")}
                  ${siteSourceControls("policyLookups", index, item)}
                </article>
              `).join("")}
            </div>
          </section>

          <section class="site-survey-section policy-agent-panel">
            <div>
              <span class="mini-label">6. Ask ASTRA from policy context</span>
              <h3>Policy Advice That Stays Grounded</h3>
              <p>Use these prompts when the user is unsure what to do next, what fact is missing, or why a policy condition affects the design.</p>
            </div>
            <div class="site-advisor-prompts">
              ${[
                "What zoning facts are verified for this address?",
                "What is missing before this can guide permit-ready design?",
                "Which policy issue could delay permitting the most?",
                "How should the design respond to the elevation and hazard facts?",
                "Which code or initiative could improve design quality?"
              ].map(prompt => `<button data-site-agent-question="${escapeHtml(prompt)}">${escapeHtml(prompt)}</button>`).join("")}
            </div>
            <div class="download-actions">
              <button data-download="parcel">Download Policy JSON</button>
              <button data-download="csv">Download Project CSV</button>
            </div>
          </section>
        </main>
      </div>
      <div id="annotationLayer" class="annotation-layer"></div>
    </div>
  `;
}

function gisSurface(project) {
  const survey = state.siteSurvey;
  const fields = survey.fields;
  const gisFindings = survey.gisFindings?.length ? survey.gisFindings : [];
  const embedUrl = arcgisEmbedUrl(fields);
  const mapViewerUrl = arcgisMapViewerUrl(fields);
  const proInstallUrl = safeExternalMapUrl(fields.arcgisProInstallUrl) || "https://doc.esri.com/en/arcgis-pro/latest/get-started/install-and-sign-in-to-arcgis-pro.html";
  const proProductUrl = safeExternalMapUrl(fields.arcgisProProductUrl) || "https://www.esri.com/en-us/arcgis/products/arcgis-pro/overview";

  return `
    <div class="surface-pad site-survey-workspace gis-workspace">
      <header class="site-survey-hero">
        <button class="journey-link" data-section="dashboard">Back to flow</button>
        <div>
          <span class="mini-label">GIS analyst workspace</span>
          <h3>ArcGIS Pro / Spatial Mapping</h3>
          <p>Embed an ArcGIS web map, track ArcGIS Pro project/package metadata, identify the correct zone or policy area, and pass source-linked spatial findings into site survey and policy review.</p>
        </div>
        <div class="site-output-card">
          <span>Output</span>
          <strong>ArcGIS Pro Handoff</strong>
          <p>Portal, web map, feature service, Pro project/package, GIS layer findings, source URLs, and design implications.</p>
        </div>
      </header>

      <section class="site-survey-section gis-lookup-panel">
        <div class="survey-section-head">
          <div>
            <span class="mini-label">1. Locate the parcel</span>
            <h3>Zone / Area Finder</h3>
            <p>This identifies the city, county, jurisdiction, parcel/APN, coordinates, zone district, overlays, and lookup source needed before policy rules can be trusted.</p>
          </div>
          <button class="add-row-button" data-policy-lookup-create>Create Policy Lookup Record</button>
        </div>
        <div class="site-intake-grid">
          ${siteFieldInput("addressLookup", "Address")}
          ${siteFieldInput("parcelApn", "Parcel / APN")}
          ${siteFieldInput("cityCounty", "City / county")}
          ${siteFieldInput("stateRegion", "State / region")}
          ${siteFieldInput("country", "Country")}
          ${siteFieldInput("latitude", "Latitude")}
          ${siteFieldInput("longitude", "Longitude")}
          ${siteFieldInput("jurisdiction", "Jurisdiction")}
          ${siteFieldInput("zoningDistrict", "Zoning district")}
          ${siteFieldInput("detectedZoneArea", "Zone / policy area")}
          ${siteFieldSelect("lookupMethod", "Lookup method", lookupMethodOptions)}
          ${siteFieldInput("gisSourceUrl", "GIS source URL / service")}
          ${siteFieldInput("policySourceUrl", "Policy source URL")}
          ${siteFieldSelect("gisLookupStatus", "GIS lookup status", siteVerificationStatusOptions)}
          ${siteFieldSelect("policyLookupStatus", "Policy lookup status", siteVerificationStatusOptions)}
          ${siteFieldInput("lastPolicyCheck", "Last checked", "date")}
          ${siteFieldTextarea("overlays", "Overlay districts / mapped areas")}
        </div>
      </section>

      <section class="site-survey-section gis-arcgis-install-panel">
        <div class="survey-section-head">
          <div>
            <span class="mini-label">2. ArcGIS Pro install</span>
            <h3>Install ArcGIS Pro, Then Connect It</h3>
            <p>ArcGIS Pro is a Windows desktop GIS application. The web app cannot install or run it inside the browser, so this step stores install, license, and version status before the web map handoff begins.</p>
          </div>
          <a class="add-row-button arcgis-open-link" href="${escapeHtml(proInstallUrl)}" target="_blank" rel="noopener noreferrer">Open Install Guide</a>
        </div>
        ${siteSubsectionIntro("APP", "Desktop setup", "Use the official Esri install guide or ArcGIS Pro product page, then record install status here so ASTRA knows whether GIS work can move into Pro or should stay as web-map review.")}
        <div class="arcgis-install-grid">
          <article>
            <span>1</span>
            <strong>Get ArcGIS Pro</strong>
            <p>Use an Esri account, organization license, or trial path before assuming Pro is available.</p>
            <a href="${escapeHtml(proProductUrl)}" target="_blank" rel="noopener noreferrer">ArcGIS Pro product page</a>
          </article>
          <article>
            <span>2</span>
            <strong>Install on Windows</strong>
            <p>Install ArcGIS Pro locally, then confirm version, install context, and optional components.</p>
            <a href="${escapeHtml(proInstallUrl)}" target="_blank" rel="noopener noreferrer">Install documentation</a>
          </article>
          <article>
            <span>3</span>
            <strong>Connect ASTRA data</strong>
            <p>Use the ArcGIS Pro handoff JSON, feature service, web map, or GIS package to move saved site data into Pro.</p>
            <button type="button" data-download="arcgis-pro">Download Pro Handoff</button>
          </article>
        </div>
        <div class="site-intake-grid arcgis-install-config-grid">
          ${siteFieldSelect("arcgisProInstallStatus", "ArcGIS Pro install status", ["not installed", "downloaded", "installed", "needs update", "blocked", "unknown"])}
          ${siteFieldSelect("arcgisProLicenseStatus", "ArcGIS Pro license status", ["unknown", "trial", "named user", "single use", "concurrent use", "not licensed", "blocked"])}
          ${siteFieldInput("arcgisProVersion", "ArcGIS Pro version")}
          ${siteFieldInput("arcgisProInstallUrl", "ArcGIS Pro install guide URL")}
          ${siteFieldInput("arcgisProProductUrl", "ArcGIS Pro product / trial URL")}
        </div>
      </section>

      <section class="site-survey-section gis-arcgis-panel">
        <div class="survey-section-head">
          <div>
            <span class="mini-label">3. ArcGIS Pro connection</span>
            <h3>Embedded ArcGIS Web Map + Pro Handoff</h3>
            <p>After Pro is installed, the browser can embed an ArcGIS web map or Enterprise portal view while storing the ArcGIS Pro project and package metadata needed for handoff.</p>
          </div>
          <a class="add-row-button arcgis-open-link" href="${escapeHtml(mapViewerUrl)}" target="_blank" rel="noopener noreferrer">Open ArcGIS Map Viewer</a>
        </div>
        ${siteSubsectionIntro("PRO", "ArcGIS source and project metadata", "Paste a Web Map ID or ArcGIS embed URL to load the live ArcGIS map here. Use the Pro fields to keep the .aprx, .ppkx, feature service, and coordinate system tied to ASTRA project memory.")}
        <div class="arcgis-workbench-grid">
          <div class="arcgis-frame-shell">
            ${embedUrl ? `
              <iframe
                title="ArcGIS embedded web map"
                src="${escapeHtml(embedUrl)}"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox">
              </iframe>
            ` : `
              <div class="arcgis-empty-state">
                <span class="mini-label">ArcGIS map not connected</span>
                <strong>Paste an ArcGIS embed URL or Web Map ID</strong>
                <p>The local parcel diagram remains available below. Once a web map is linked, this frame becomes the live ArcGIS viewer for layers, parcels, overlays, and policy geography.</p>
              </div>
            `}
          </div>
          <div class="site-intake-grid arcgis-config-grid">
            ${siteFieldInput("arcgisPortalUrl", "ArcGIS portal / organization URL")}
            ${siteFieldInput("arcgisWebMapId", "ArcGIS web map ID")}
            ${siteFieldInput("arcgisEmbedUrl", "ArcGIS embed URL")}
            ${siteFieldInput("arcgisFeatureServiceUrl", "Feature service URL")}
            ${siteFieldInput("arcgisSceneUrl", "Scene / 3D web scene URL")}
            ${siteFieldInput("arcgisProProjectName", "ArcGIS Pro project name")}
            ${siteFieldInput("arcgisProProjectPath", "ArcGIS Pro .aprx path / reference")}
            ${siteFieldInput("arcgisProPackageName", "ArcGIS Pro package name")}
            ${siteFieldInput("arcgisCoordinateSystem", "Coordinate system")}
            ${siteFieldSelect("arcgisLayerSyncStatus", "ArcGIS layer sync status", ["not connected", "draft", "linked", "active", "needs review", "source linked", "verified"])}
            ${siteFieldTextarea("arcgisProWorkflow", "ArcGIS Pro workflow / handoff notes", 4)}
          </div>
        </div>
        <div class="arcgis-handoff-grid">
          ${[
            ["Portal", fields.arcgisPortalUrl || "--"],
            ["Web map", fields.arcgisWebMapId || "--"],
            ["Feature service", fields.arcgisFeatureServiceUrl || "--"],
            ["Pro package", fields.arcgisProPackageName || "--"],
            ["Coordinate system", fields.arcgisCoordinateSystem || "--"],
            ["Sync status", fields.arcgisLayerSyncStatus || "--"]
          ].map(item => `
            <article>
              <span>${escapeHtml(item[0])}</span>
              <strong>${escapeHtml(siteDisplayValue(item[1]))}</strong>
            </article>
          `).join("")}
        </div>
        <div class="download-actions">
          <button data-download="arcgis-pro">Download ArcGIS Pro Handoff JSON</button>
          <button data-download="gis">Download GIS Package JSON</button>
        </div>
      </section>

      <section class="site-survey-section gis-map-panel">
        <div class="survey-section-head">
          <div>
            <span class="mini-label">4. GIS map</span>
            <h3>Mapped Conditions</h3>
            <p>The visual map shows the current parcel context while the editable layer stack below records the source-linked findings that become project memory.</p>
          </div>
          <button class="add-row-button" data-add-site-row="gisFindings">Add GIS Layer / Finding</button>
        </div>
        <div class="site-map-grid">
          <div class="simple-map-wrap">
            ${projectMapMarkup(project)}
          </div>
          <div class="site-layer-stack">
            ${gisFindings.map(layer => `
              <article>
                <span><i class="status-dot"></i>${escapeHtml(layer.status)}</span>
                <strong>${escapeHtml(layer.name)}</strong>
                <p>${escapeHtml(layer.finding || "")}</p>
              </article>
            `).join("")}
          </div>
        </div>
      </section>

      <section class="site-survey-section gis-layer-editor">
        <div class="survey-section-head">
          <div>
            <span class="mini-label">5. Layer findings</span>
            <h3>Data Found Through GIS</h3>
            <p>Every spatial finding can be used by the survey page, policy page, design workspace, and final handoff once its source and status are recorded.</p>
          </div>
          <button class="add-row-button" data-add-site-row="additionalAspects">Add Related Aspect</button>
        </div>
        <div class="site-ai-question-grid gis-finding-grid">
          ${gisFindings.map((item, index) => `
            <article>
              ${siteRowInput("gisFindings", index, "name", item.name || "", "GIS layer / finding")}
              ${siteRowSelect("gisFindings", index, "layerType", item.layerType || "Custom research", "Layer type", gisLayerTypeOptions)}
              ${siteRowTextarea("gisFindings", index, "finding", item.finding || "", "Finding")}
              ${siteRowInput("gisFindings", index, "geometry", item.geometry || "", "Area / geometry")}
              ${siteRowTextarea("gisFindings", index, "usedFor", item.usedFor || "", "Used for / design implication")}
              ${siteSourceControls("gisFindings", index, item)}
            </article>
          `).join("")}
        </div>
      </section>

      <section class="site-survey-section package-panel">
        <div>
          <span class="mini-label">6. Connected outputs</span>
          <h3>Send GIS Data Forward</h3>
          <p>ArcGIS, GIS findings, and Pro handoff data are saved into the same project memory used by Site + Survey Intelligence, Zoning + Policy Intelligence, CAD/Rhino review, and export downloads.</p>
        </div>
        <div class="download-actions">
          <button data-download="arcgis-pro">Download ArcGIS Pro Handoff</button>
          <button data-download="gis">Download GIS Package</button>
          <button data-download="parcel">Download Site JSON</button>
          <button data-download="csv">Download Project CSV</button>
        </div>
      </section>
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
    : state.activeSection === "data"
    ? dataStorageSurface(project)
    : state.activeSection === "survey"
    ? siteSurveySurface(project)
    : state.activeSection === "gis"
    ? gisSurface(project)
    : state.activeSection === "policy"
    ? policySurface(project)
    : projectPageSurface(project, section);
  document.getElementById("visualWorkspace").innerHTML = html;
  el.annotationLayer = document.getElementById("annotationLayer");
  if (state.authView || state.activeSection === "dashboard") bindDashboardFlow();
  bindSimpleProjectPage();
  if (state.activeSection === "survey" || state.activeSection === "gis" || state.activeSection === "policy" || state.activeSection === "data") bindSiteSurveyPage();
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
    ...state.siteSurvey.opportunities.map((item, index) => ["site_opportunity", item.name, `impact ${siteOpportunityScore(item, index)} | ${item.value || ""} | ${sourceStatusText(item)}`, item.status || "saved"]),
    ...state.siteSurvey.sourceFindings.map(item => ["site_source_finding", item.aspect, `${item.category || ""} | ${item.value || ""} | owner: ${item.owner || ""} | ${sourceStatusText(item)}`, item.status || "saved"]),
    ...state.siteSurvey.additionalAspects.map(item => ["site_additional_aspect", item.name, `${item.category || ""} | ${item.value || ""} | ${sourceStatusText(item)}`, item.status || "saved"]),
    ...state.siteSurvey.gisFindings.map(item => ["site_gis_finding", item.name, `${item.layerType || ""} | ${item.geometry || ""} | ${item.finding || ""} | used for: ${item.usedFor || ""} | ${sourceStatusText(item)}`, item.status || "saved"]),
    ...state.siteSurvey.hazards.map(item => ["site_hazard", item.name, `${siteRiskSeverity(item)} | ${item.value || ""} | ${sourceStatusText(item)}`, item.status || "saved"]),
    ...state.siteSurvey.sensors.map(item => ["site_sensor", item.name, `${item.sensorType || ""} | ${item.location || ""} | ${item.latestReading || ""} ${item.unit || ""} | ${item.timestamp || ""} | ${item.sourceName || ""}`, item.status || "saved"]),
    ...state.siteSurvey.policyLookups.map(item => ["site_policy_lookup", item.name, `${item.address || ""} | ${item.jurisdiction || ""} | ${item.result || ""} | ${item.sourceUrl || ""} | ${sourceStatusText(item)}`, item.status || "saved"]),
    ...state.siteSurvey.evidence.map(item => ["site_evidence", item.name, `${item.owner || ""}: ${item.value || ""} | ${sourceStatusText(item)}`, item.status || "saved"]),
    ...state.siteSurvey.aiInterpretation.map(item => ["site_ai_interpretation", item.question, item.answer, "saved"]),
    ...caseStudyRecords().map(item => ["site_case_study", item.title, `${item.audience || ""} | ${item.focus || ""} | desired: ${item.desiredOutcome || ""} | metrics: ${item.sustainabilityMetrics || ""} | flood: ${item.floodStrategy || ""} | initiative: ${item.initiativeDevelopment || ""} | actions: ${item.recommendedActions || ""} | ${sourceStatusText(item)}`, item.status || "saved"]),
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

const exportInfoRecords = {
  parcel: {
    eyebrow: "Section 6 / JSON",
    title: "Full ASTRA Project",
    body: "This is the complete project-memory package. Use it when another tool, reviewer, or future ASTRA workspace needs the whole record, not just a table.",
    includes: ["Project identity and client intent", "Site survey, evidence, policy, GIS, and ArcGIS handoff data", "Program spaces, rules, model values, risks, opportunities, and case studies"],
    download: "parcel",
    downloadLabel: "Download Full JSON"
  },
  csv: {
    eyebrow: "Section 6 / CSV",
    title: "Project Data Table",
    body: "This is the spreadsheet-ready project table. Use it when project information needs to move cleanly into CSV workflows, QA logs, databases, or external reporting tools.",
    includes: ["Category, name, value, and status columns", "Client, discovery, site, GIS, policy, sustainability, and program rows", "Saved records only; missing facts remain visible as blank or -- values"],
    download: "csv",
    downloadLabel: "Download Project CSV"
  },
  "case-json": {
    eyebrow: "Section 6 / JSON",
    title: "Case Studies",
    body: "This package stores the generated and manually edited case-study records as reusable project memory.",
    includes: ["Desired outcome and audience", "Sustainability metrics, flood strategy, initiative development, and design response", "Evidence basis, source status, reviewer, and recommended actions"],
    download: "case-json",
    downloadLabel: "Download Case JSON"
  },
  "case-csv": {
    eyebrow: "Section 6 / CSV",
    title: "Case Study Table",
    body: "This is the focused case-study spreadsheet for review meetings, grant or initiative tracking, planning narratives, and sustainability reporting.",
    includes: ["Desired outcome, metrics, flooding, initiatives, and actions", "Audience, focus, design response, evidence basis, and status", "One row per saved case study"],
    download: "case-csv",
    downloadLabel: "Download Case CSV"
  }
};

function downloadByKind(kind) {
  if (!state.project) return;
  if (kind === "parcel") {
    triggerDownload("hct-parcel.json", "application/json", parcelJson(state.project));
  }
  if (kind === "csv") {
    triggerDownload("hct-project-data.csv", "text/csv", projectCsv(state.project));
  }
  if (kind === "case-json") {
    triggerDownload("astra-case-studies.json", "application/json", caseStudyJson(state.project));
  }
  if (kind === "case-csv") {
    triggerDownload("astra-case-studies.csv", "text/csv", caseStudyCsv(state.project));
  }
  if (kind === "gis") {
    triggerDownload("astra-gis-package.json", "application/json", JSON.stringify({
      site: state.project.site,
      gisLayers: state.project.gisLayers,
      gisFindings: state.siteSurvey.gisFindings,
      layerStatus: siteLayerRows(state.siteSurvey),
      arcgis: arcgisProHandoffPackage(state.project).arcgis
    }, null, 2));
  }
  if (kind === "arcgis-pro") {
    triggerDownload("astra-arcgis-pro-handoff.json", "application/json", JSON.stringify(arcgisProHandoffPackage(state.project), null, 2));
  }
  if (kind === "bim") {
    triggerDownload("astra-bim-package.json", "application/json", JSON.stringify({
      project: state.project.project,
      designModel: state.project.designModel,
      constraints: state.siteSurvey.constraints,
      risks: state.siteSurvey.hazards,
      opportunities: state.siteSurvey.opportunities
    }, null, 2));
  }
  if (kind === "astra") {
    triggerDownload("astra-project-package.json", "application/json", parcelJson(state.project));
  }
}

function openExportInfo(kind) {
  const record = exportInfoRecords[kind];
  if (!record || !el.exportInfoModal) return;
  el.exportInfoEyebrow.textContent = record.eyebrow;
  el.exportInfoTitle.textContent = record.title;
  el.exportInfoBody.textContent = record.body;
  el.exportInfoList.innerHTML = record.includes.map(item => `<div>${escapeHtml(item)}</div>`).join("");
  el.exportInfoDownload.textContent = record.downloadLabel;
  el.exportInfoDownload.dataset.exportDownload = record.download;
  el.exportInfoModal.hidden = false;
  requestAnimationFrame(() => {
    el.exportInfoModal.classList.add("open");
    el.exportInfoDownload.focus();
  });
}

function closeExportInfo() {
  if (!el.exportInfoModal) return;
  el.exportInfoModal.classList.remove("open");
  el.exportInfoModal.hidden = true;
  if (el.exportInfoDownload) el.exportInfoDownload.dataset.exportDownload = "";
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
    opportunities: () => ({ name: "Custom opportunity", impact: 70, value: "", ...common }),
    sourceFindings: () => ({ aspect: "Custom source-backed finding", category: "Other", value: "", owner: "", sourceUrl: "", ...common }),
    additionalAspects: () => ({ name: "Custom additional aspect", category: "Other", value: "", sourceUrl: "", ...common }),
    gisFindings: () => ({
      name: "Custom GIS layer",
      layerType: "Custom research",
      finding: "",
      geometry: "",
      sourceName: "",
      sourceUrl: "",
      status: "needs review",
      usedFor: "",
      documentType: "GIS Layer",
      otherDocumentType: "",
      verifiedBy: "",
      lastChecked: today
    }),
    hazards: () => ({ name: "Custom hazard", severity: "Medium", value: "", ...common }),
    evidence: () => ({ name: "Custom evidence record", owner: "", value: "", ...common }),
    caseStudies: () => ({
      title: "Custom case study",
      audience: "Client / review team",
      desiredOutcome: state.siteSurvey.fields.desiredFutureUse || "",
      focus: "Desired outcome",
      sustainabilityMetrics: caseStudyMetricSummary(state.project, state.siteSurvey),
      floodStrategy: state.siteSurvey.fields.environmentalHazards || state.siteSurvey.fields.drainageNotes || "",
      initiativeDevelopment: state.siteSurvey.fields.zoneInitiatives || "",
      designResponse: "",
      evidenceBasis: "",
      recommendedActions: "",
      status: "draft",
      documentType: "Case Study",
      otherDocumentType: "",
      sourceName: "Manual case study entry",
      sourceUrl: "",
      verifiedBy: "",
      lastChecked: today,
      generated: false
    }),
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
    parcelApn: fields.parcelApn || "",
    jurisdiction: fields.jurisdiction || "",
    result: [
      fields.cityCounty ? `City/county: ${fields.cityCounty}` : "",
      fields.stateRegion ? `State/region: ${fields.stateRegion}` : "",
      fields.zoningDistrict ? `Zoning district: ${fields.zoningDistrict}` : "",
      fields.detectedZoneArea ? `Zone / area: ${fields.detectedZoneArea}` : "",
      fields.overlays ? `Overlays: ${fields.overlays}` : ""
    ].filter(Boolean).join("\n"),
    documentType: "Zoning Policy",
    otherDocumentType: "",
    sourceName: fields.lookupMethod || "Manual reviewer entry",
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
      downloadByKind(button.dataset.download);
    });
  });

  document.querySelectorAll("[data-export-info]").forEach(button => {
    button.addEventListener("click", () => openExportInfo(button.dataset.exportInfo));
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

  document.querySelectorAll("[data-case-study-generate]").forEach(button => {
    button.addEventListener("click", () => {
      const manualCases = caseStudyRecords().filter(item => !item.generated);
      state.siteSurvey.caseStudies = [
        ...buildGeneratedCaseStudies(state.project),
        ...manualCases
      ];
      persistSiteSurvey();
      render();
    });
  });

  document.querySelectorAll("[data-site-agent-question]").forEach(button => {
    button.addEventListener("click", () => {
      const question = button.dataset.siteAgentQuestion || "";
      const input = document.querySelector("[data-site-agent-input]");
      if (input) input.value = question;
      askAssistant(question, false);
    });
  });

  document.querySelectorAll("[data-site-agent-submit]").forEach(button => {
    button.addEventListener("click", () => {
      const input = document.querySelector("[data-site-agent-input]");
      askAssistant(input?.value || "", false);
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
        sourceUrl: state.siteSurvey.fields.uploadSourceUrl || "",
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
  const traceSection = ["design", "gis"].includes(state.activeSection);
  if (!traceSection) {
    el.annotationLayer.innerHTML = "";
    return;
  }
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

function humanizeToken(value) {
  return String(value || "current design")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function firstSentence(text) {
  const raw = String(text || "").trim();
  if (!raw) return "";
  const match = raw.match(/^(.{1,180}?[.!?])(\s|$)/);
  return match ? match[1] : raw.slice(0, 180);
}

function impactCopyForReview(item, response) {
  const lens = String(item.lens || item.type || "").toLowerCase();
  const severity = String(item.severity || item.status || "").toLowerCase();
  const message = String(item.message || item.text || "").toLowerCase();

  if (severity === "critical" || message.includes("setback") || message.includes("height")) {
    return "This can block permitting, force massing changes, or make downstream documentation unreliable until corrected.";
  }
  if (lens.includes("performance") || message.includes("glazing") || message.includes("ashrae") || message.includes("cooling")) {
    return "This can improve daylight or expression, but may increase glare, cooling load, comfort issues, or facade complexity.";
  }
  if (lens.includes("spatial") || message.includes("drainage") || message.includes("flood") || message.includes("slope")) {
    return "This can affect placement, grading, stormwater strategy, constructability, and consultant review timing.";
  }
  if (severity.includes("review") || severity.includes("estimate")) {
    return "This is useful as design guidance, but it should not become a final claim until the metric or source is verified.";
  }
  return `This changes the confidence of the decision. Current response confidence: ${response.confidence || "not stated"}.`;
}

function improvementCopyForReview(item, response) {
  const target = String(item.target || item.type || item.label || "").toLowerCase();
  const message = String(item.message || item.text || item.detail || "").toLowerCase();
  const next = (response.recommendedNext || []).slice(0, 3).join(", ");

  if (target.includes("front") || message.includes("setback")) {
    return "Move the building edge back, reduce projections, or keep the assumption marked as variance-review until the policy source allows it.";
  }
  if (target.includes("height") || message.includes("height")) {
    return "Lower or step the massing, redistribute program area, or confirm an exception before advancing permit-ready drawings.";
  }
  if (target.includes("glaz") || message.includes("glaz") || message.includes("daylight")) {
    return "Balance the window rhythm, add exterior shading, test glare, and verify the ASHRAE or sun-study metric before adding more glass.";
  }
  if (message.includes("missing") || message.includes("review")) {
    return "Add the missing source, reviewer, date, and status; keep the item as advisory until evidence is verified.";
  }
  return next ? `Use the next-step path: ${next}.` : "Ask ASTRA for a focused comparison, then record the decision and source basis.";
}

function severityLabel(value) {
  const severity = String(value || "").toLowerCase();
  if (["critical", "high", "needs_review", "visual_estimate", "missing", "conflict"].some(term => severity.includes(term))) {
    return "Reconsider";
  }
  if (["medium", "computed", "pending"].some(term => severity.includes(term))) {
    return "Review";
  }
  return "Monitor";
}

function buildReviewItems(response) {
  const annotations = (response.annotations || []).map(anno => ({
    id: anno.id,
    label: severityLabel(anno.severity),
    tone: anno.severity || "medium",
    what: anno.message || "Area needs review",
    where: `${humanizeToken(anno.target)} / ${humanizeToken(anno.lens)}`,
    impact: impactCopyForReview(anno, response),
    improve: improvementCopyForReview(anno, response),
    itsImpact: `${humanizeToken(anno.severity)} severity. Trace opens ${anno.sourceIds?.length || 0} source reference${anno.sourceIds?.length === 1 ? "" : "s"}.`,
    sourceIds: anno.sourceIds || []
  }));

  const flaggedClaims = (response.claims || [])
    .filter(claim => /needs_review|visual_estimate|computed_result|ai_interpretation/i.test(claim.type || ""))
    .slice(0, 2)
    .map(claim => ({
      id: claim.id,
      label: severityLabel(claim.type),
      tone: claim.type || "needs_review",
      what: claim.text || "Metric or interpretation needs review",
      where: humanizeToken(claim.type),
      impact: impactCopyForReview({ ...claim, status: claim.type }, response),
      improve: improvementCopyForReview(claim, response),
      itsImpact: `${humanizeToken(claim.type)}. Keep this tied to its source before treating it as final.`,
      sourceIds: claim.sourceIds || []
    }));

  const flaggedChecks = (response.selfCheck || [])
    .filter(check => /needs_review|visual_estimate|missing|conflict/i.test(check.status || ""))
    .slice(0, 1)
    .map(check => ({
      id: `check-${normalizeLabel(check.label)}`,
      label: "Reconsider",
      tone: check.status || "needs_review",
      what: `${check.label}: ${check.detail || check.status}`,
      where: "self check",
      impact: "This may be out of the normal evidence path, use the wrong certainty level, or need another source before the design relies on it.",
      improve: "Confirm the metric, add the source or reviewer, then ask ASTRA to reassess the same decision.",
      itsImpact: `${humanizeToken(check.status)} status in ASTRA's response check.`,
      sourceIds: []
    }));

  const combined = [...annotations, ...flaggedClaims, ...flaggedChecks];
  if (!combined.length && response.answer) {
    combined.push({
      id: "general-review",
      label: "Review",
      tone: "medium",
      what: firstSentence(response.answer),
      where: "current section",
      impact: `This is advice with ${response.confidence || "unknown"} confidence.`,
      improve: improvementCopyForReview({}, response),
      itsImpact: "Use the sources and next actions before committing.",
      sourceIds: []
    });
  }

  const seen = new Set();
  return combined.filter(item => {
    const key = `${item.label}-${item.what}-${item.where}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, 4);
}

function reviewItemsMarkup(response) {
  const items = buildReviewItems(response);
  if (!items.length) return "";
  return `
    <section class="astra-review-stack" aria-label="ASTRA review cards">
      <div class="review-stack-head">
        <span class="mini-label">ASTRA review</span>
        <strong>Issues, improvements, and impact</strong>
      </div>
      ${items.map(item => `
        <article class="astra-review-card ${escapeHtml(siteStatusClass(item.tone))}">
          <div class="review-card-title">
            <span>${escapeHtml(item.label)}</span>
            <strong>${escapeHtml(item.where)}</strong>
          </div>
          <dl>
            <dt>What I see</dt>
            <dd>${escapeHtml(item.what)}</dd>
            <dt>How I think it will impact the design</dt>
            <dd>${escapeHtml(item.impact)}</dd>
            <dt>How I could improve it</dt>
            <dd>${escapeHtml(item.improve)}</dd>
            <dt>Its impact</dt>
            <dd>${escapeHtml(item.itsImpact)}</dd>
          </dl>
        </article>
      `).join("")}
    </section>
  `;
}

function combinedAdviceHistory() {
  const records = [
    ...(state.localAdviceHistory || []),
    ...(state.project?.aiTranscript || [])
  ];
  const seen = new Set();
  return records.filter(item => {
    const key = item.id || `${item.timestamp || ""}-${item.question || ""}-${item.answer || ""}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function adviceHistoryMarkup() {
  const transcript = combinedAdviceHistory();
  if (!transcript.length) {
    return `
      <div class="history-empty">
        <span class="mini-label">Advice history</span>
        <p>ASTRA's recent advice will stay here after you ask a question.</p>
      </div>
    `;
  }

  return `
    <div class="history-head">
      <span class="mini-label">Advice history</span>
      <strong>Look back</strong>
    </div>
    <div class="history-list">
      ${transcript.slice(0, 6).map((item, index) => `
        <button type="button" class="history-item" data-advice-history="${index}">
          <span>${escapeHtml(item.confidence || "review")}</span>
          <strong>${escapeHtml(item.question || "ASTRA advice")}</strong>
          <p>${escapeHtml(firstSentence(item.answer || ""))}</p>
        </button>
      `).join("")}
    </div>
  `;
}

function renderAdviceHistory() {
  if (!el.adviceHistory) return;
  el.adviceHistory.innerHTML = adviceHistoryMarkup();
}

function renderArchivedAdvice(item) {
  if (!item || !el.assistantOutput) return;
  el.assistantOutput.innerHTML = `
    <div class="answer-box archived-answer">
      <span class="mini-label">Advice history</span>
      <p>${escapeHtml(item.answer || "No saved answer text.")}</p>
      <div class="meta-row">
        <span class="chip computed">confidence: ${escapeHtml(item.confidence || "unknown")}</span>
        <span class="chip">section: ${escapeHtml(item.section || "saved advice")}</span>
      </div>
    </div>
    ${(item.recommendedNext || []).length ? `
      <div class="source-list">
        <div class="claim-card">
          <strong>Recommended next actions</strong>
          <span>${item.recommendedNext.map(action => escapeHtml(action)).join(" / ")}</span>
        </div>
      </div>
    ` : ""}
  `;
}

function renderAssistantOutput(response) {
  if (!response) return;
  el.aiMode.textContent = response.mode.includes("ollama")
    ? "Qwen / Ollama"
    : response.mode.includes("gemini")
      ? "Gemini + tools"
      : "ASTRA local";

  const outputHtml = `
    ${reviewItemsMarkup(response)}

    <div class="answer-box">
      <p>${escapeHtml(response.answer)}</p>
      <div class="meta-row">
        <span class="chip computed">confidence: ${escapeHtml(response.confidence)}</span>
        <span class="chip">mode: ${escapeHtml(response.mode)}</span>
      </div>
      ${response.geminiError ? `<div class="meta-row"><span class="chip needs_review">${escapeHtml(response.geminiError)}</span></div>` : ""}
      ${response.ollamaError ? `<div class="meta-row"><span class="chip needs_review">${escapeHtml(response.ollamaError)}</span></div>` : ""}
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

    ${(response.recommendedNext || []).length ? `
      <div class="source-list">
        <div class="claim-card">
          <strong>Recommended next actions</strong>
          <span>${response.recommendedNext.map(item => escapeHtml(item)).join(" / ")}</span>
        </div>
      </div>
    ` : ""}
  `;

  const outputContainers = [el.assistantOutput, document.getElementById("siteAdvisorOutput")].filter(Boolean);
  outputContainers.forEach(container => {
    container.innerHTML = outputHtml;
    container.querySelectorAll("[data-source-id]").forEach(card => {
      card.addEventListener("contextmenu", event => {
        event.preventDefault();
        openTraceForSource(card.dataset.sourceId);
      });
      card.addEventListener("click", () => {
        openTraceForSource(card.dataset.sourceId);
      });
    });
  });
  renderAdviceHistory();
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
  const setAssistantStatus = html => {
    el.assistantOutput.innerHTML = html;
    const siteOutput = document.getElementById("siteAdvisorOutput");
    if (siteOutput) siteOutput.innerHTML = html;
  };
  el.askButton.disabled = true;
  el.askButton.textContent = "Checking...";
  setAssistantStatus(`<div class="empty-state">Retrieving project memory, running evidence checks, and preparing source-linked guidance.</div>`);

  try {
    const response = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        question,
        section: sectionById(state.activeSection).title,
        selectedElement: state.project.designModel.selectedElement,
        siteSurvey: state.siteSurvey,
        screenshotMode
      })
    });
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.error || "Assistant request failed");
    }
    state.lastResponse = result;
    state.screenshotMode = screenshotMode;
    if (result.saved && state.project) {
      state.localAdviceHistory = [
        result.saved,
        ...(state.localAdviceHistory || []).filter(item => item.id !== result.saved.id)
      ].slice(0, 30);
      const existing = state.project.aiTranscript || [];
      state.project.aiTranscript = [
        result.saved,
        ...existing.filter(item => item.id !== result.saved.id)
      ].slice(0, 30);
    }
    renderAssistantOutput(result);
    renderAnnotations();
    await refreshProject();
  } catch (error) {
    setAssistantStatus(`<div class="empty-state">Assistant error: ${escapeHtml(error.message)}</div>`);
  } finally {
    el.askButton.disabled = false;
    el.askButton.textContent = "Ask ASTRA";
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
  renderAdviceHistory();
}

function activeScrollTop() {
  const workspace = document.getElementById("visualWorkspace");
  const pageTop = window.scrollY || document.documentElement.scrollTop || 0;
  return Math.max(pageTop, workspace?.scrollTop || 0);
}

function updateToTopButton() {
  if (!el.toTopButton) return;
  el.toTopButton.classList.toggle("visible", activeScrollTop() > 220);
}

function returnToTop() {
  const workspace = document.getElementById("visualWorkspace");
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  workspace?.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  document.querySelector(".main")?.scrollTo?.({ top: 0, left: 0, behavior: "smooth" });
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
  updateToTopButton();
}

async function init() {
  await refreshProject();
  render();

  window.traceAnnotationFromDom = id => {
    if (!state.lastResponse) return;
    const anno = state.lastResponse.annotations.find(item => item.id === id);
    openTraceForAnnotation(anno);
  };

  document.querySelector(".assistant-panel")?.addEventListener("click", event => {
    const historyButton = event.target.closest("[data-advice-history]");
    if (historyButton) {
      const index = Number(historyButton.dataset.adviceHistory);
      const item = combinedAdviceHistory()[index];
      renderArchivedAdvice(item);
      return;
    }

    const button = event.target.closest("[data-question]");
    if (!button) return;
    const question = button.dataset.question || "";
    el.questionInput.value = question;
    askAssistant(question, button.dataset.screenshotQuestion === "true");
  });

  el.askButton.addEventListener("click", () => askAssistant(el.questionInput.value, false));

  if (el.toTopButton) {
    el.toTopButton.addEventListener("click", returnToTop);
    window.addEventListener("scroll", updateToTopButton, { passive: true });
    document.getElementById("visualWorkspace")?.addEventListener("scroll", updateToTopButton, { passive: true });
  }

  document.querySelectorAll("[data-export-close]").forEach(button => {
    button.addEventListener("click", closeExportInfo);
  });

  if (el.exportInfoDownload) {
    el.exportInfoDownload.addEventListener("click", () => {
      downloadByKind(el.exportInfoDownload.dataset.exportDownload);
      closeExportInfo();
    });
  }

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && el.exportInfoModal && !el.exportInfoModal.hidden) {
      closeExportInfo();
    }
  });

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
