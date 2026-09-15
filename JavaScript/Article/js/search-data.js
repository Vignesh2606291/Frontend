/**
 * CHENNAI 2029 – Global Search Database
 * Contains indexed searchable records across all 5 project pages.
 */

const SEARCH_DATABASE = [
  // Page 1: Future of IT
  {
    title: "Global Capability Centres (GCCs) in Chennai",
    page: "future-it.html#gcc-ecosystem",
    badge: "Future IT",
    snippet: "Chennai hosts over 15% of India's GCC talent across 180+ global centers including Ford, Standard Chartered GBS, AstraZeneca, Walmart, and Shell.",
    keywords: ["gcc", "global capability centres", "ford", "standard chartered", "astrazeneca", "it jobs", "omr", "dlf"]
  },
  {
    title: "Artificial Intelligence & Agentic Workflows (2026–2029)",
    page: "future-it.html#ai-automation",
    badge: "Future IT",
    snippet: "Shifting from basic prompt generation to autonomous multi-agent software engineering, predictive maintenance, and local LLM fine-tuning.",
    keywords: ["ai", "artificial intelligence", "agentic", "automation", "llm", "genai", "deep learning"]
  },
  {
    title: "Cloud Infrastructure & Zero-Trust Cybersecurity",
    page: "future-it.html#cloud-cybersecurity",
    badge: "Future IT",
    snippet: "Enterprise migration to sovereign hybrid cloud, quantum-resistant encryption, and automated zero-trust security postures by 2029.",
    keywords: ["cloud", "cybersecurity", "zero trust", "hybrid cloud", "aws", "azure", "quantum encryption"]
  },
  {
    title: "Future Skills Checklist & Tech Readiness",
    page: "future-it.html#skills-readiness",
    badge: "Future IT",
    snippet: "Essential 2029 tech stack: Rust, Go, Kubernetes, Agentic AI architectures, Vector DBs, MLOps, and secure DevSecOps pipelines.",
    keywords: ["skills", "checklist", "rust", "kubernetes", "mlops", "python", "jobs", "students", "bca"]
  },
  {
    title: "IT Industry Future Timeline (2026 to 2029)",
    page: "future-it.html#it-timeline",
    badge: "Future IT",
    snippet: "A 4-year milestone roadmap showing AI code copilots in 2026, hyper-automated DevOps in 2027, enterprise sovereign AI in 2028, and autonomous agents in 2029.",
    keywords: ["timeline", "2026", "2027", "2028", "2029", "trends", "milestones"]
  },

  // Page 2: Chennai Without IT
  {
    title: "Hypothetical Scenario: What If Chennai Had No IT?",
    page: "chennai-without-it.html#counterfactual-premise",
    badge: "Counterfactual",
    snippet: "An academic counterfactual economic model analyzing Chennai's urban fabric, employment, and infrastructure without the IT/ITeS sector.",
    keywords: ["hypothetical", "counterfactual", "without it", "no it companies", "scenario", "academic disclaimer"]
  },
  {
    title: "Impact on OMR Commercial Real Estate & Vacancy",
    page: "chennai-without-it.html#real-estate-impact",
    badge: "Counterfactual",
    snippet: "Analysis of 45+ million sq.ft of Grade-A IT office parks on OMR (Rajiv Gandhi Salai) and how adaptive reuse could convert them into universities or research hubs.",
    keywords: ["omr", "real estate", "office spaces", "vacancy", "commercial buildings", "rentals", "siruseri"]
  },
  {
    title: "Impact on Chennai Metro Rail Phase 2 & Urban Transit",
    page: "chennai-without-it.html#infrastructure-impact",
    badge: "Counterfactual",
    snippet: "Examining how transit planning would adapt, redirecting capital from OMR Corridor 3 toward industrial belts like Sriperumbudur and Oragadam.",
    keywords: ["metro", "phase 2", "transport", "traffic", "infrastructure", "corridor 3", "cmda", "cmrl"]
  },
  {
    title: "Employment Re-balancing: From Software to Heavy Engineering",
    page: "chennai-without-it.html#employment-shift",
    badge: "Counterfactual",
    snippet: "How 800,000 engineering minds would redirect towards automotive R&D, precision robotics, marine engineering, and advanced manufacturing.",
    keywords: ["employment", "jobs", "engineering", "mechanical", "electrical", "labor market"]
  },
  {
    title: "With IT vs Without IT: 7-Pillar Comparative Matrix",
    page: "chennai-without-it.html#comparison-matrix",
    badge: "Counterfactual",
    snippet: "Side-by-side comparative evaluation across Employment, GSDP Contribution, Transit, Education, MSMEs, Investment, and Quality of Life.",
    keywords: ["comparison", "matrix", "with it", "without it", "7 pillars", "interactive"]
  },

  // Page 3: Chennai Beyond IT
  {
    title: "Automobile & Electric Vehicle (EV) Capital of India",
    page: "chennai-beyond-it.html#automotive-ev",
    badge: "Alternative Industries",
    snippet: "Chennai produces ~35% of India's cars and >40% of auto exports. Under TN EV Policy 2023, Tamil Nadu manufactures 70% of electric 2-wheelers.",
    keywords: ["automobile", "ev", "electric vehicles", "detroit of south asia", "hyundai", "renault nissan", "bmw", "daimler", "ather", "ola"]
  },
  {
    title: "Electronics & Hardware Manufacturing Hub",
    page: "chennai-beyond-it.html#electronics-manufacturing",
    badge: "Alternative Industries",
    snippet: "Tamil Nadu is India's #1 electronics exporter ($7.37B in FY24), powered by Foxconn, Pegatron, and Salcomp mega-factories in Sriperumbudur.",
    keywords: ["electronics", "foxconn", "pegatron", "hardware", "manufacturing", "sriperumbudur", "apple iphone"]
  },
  {
    title: "Healthcare Capital & Medical Tourism",
    page: "chennai-beyond-it.html#healthcare-tourism",
    badge: "Alternative Industries",
    snippet: "Chennai commands ~40% of international medical tourists visiting India, anchored by Apollo, MGM, MIOT, and Sankara Nethralaya.",
    keywords: ["healthcare", "medical tourism", "health capital", "apollo", "miot", "sankara nethralaya", "hospitals"]
  },
  {
    title: "Deep-Sea Ports, Maritime Logistics & Trade Gateways",
    page: "chennai-beyond-it.html#ports-logistics",
    badge: "Alternative Industries",
    snippet: "Chennai is Asia's rare coastal hub with 3 major ports within 50 km: Chennai Port, Kamarajar Port Ennore, and Kattupalli Port.",
    keywords: ["ports", "logistics", "maritime", "chennai port", "kamarajar port", "ennore", "kattupalli", "shipping"]
  },
  {
    title: "CMDA Third Master Plan (2026–2046) & Urban Expansion",
    page: "chennai-beyond-it.html#cmda-masterplan",
    badge: "Alternative Industries",
    snippet: "Expanding Chennai Metropolitan Area (CMA) to 5,904 sq.km, focusing on transit-oriented development (TOD) and climate-resilient growth.",
    keywords: ["cmda", "master plan", "cma", "urban planning", "2026-2046", "tiruvallur", "kancheepuram", "chengalpattu"]
  },
  {
    title: "Renewable Energy, Green Hydrogen & Wind Power",
    page: "chennai-beyond-it.html#renewable-energy",
    badge: "Alternative Industries",
    snippet: "Tamil Nadu leads India in renewable energy with 18+ GW installed capacity, pioneering offshore wind off the Tamil Nadu coast.",
    keywords: ["renewable energy", "green hydrogen", "wind energy", "solar", "sustainability", "climate"]
  },
  {
    title: "Chennai Development Roadmap 2026 to 2029",
    page: "chennai-beyond-it.html#development-roadmap",
    badge: "Alternative Industries",
    snippet: "A 4-phase urban and economic roadmap transitioning Chennai into a high-value diversified multi-industrial global metropolis by 2029.",
    keywords: ["roadmap", "2026", "2027", "2028", "2029", "development", "future"]
  },
  {
    title: "Choose an Industry: Career & Startup Simulator",
    page: "chennai-beyond-it.html#industry-simulator",
    badge: "Alternative Industries",
    snippet: "Interactive tool matching career interests with high-growth sectors, certifications, and incubation hubs like IIT Madras Research Park.",
    keywords: ["simulator", "career", "startup", "entrepreneurship", "iit madras", "incubation"]
  },

  // References & Methodology
  {
    title: "Official Government Citations & Economic Data",
    page: "references.html#gov-sources",
    badge: "Research",
    snippet: "Verified official sources from Government of Tamil Nadu, Guidance Tamil Nadu, CMDA, NITI Aayog, Reserve Bank of India, and NASSCOM.",
    keywords: ["references", "citations", "government of tamil nadu", "niti aayog", "rbi", "nasscom", "guidance tn", "bibliography"]
  }
];
