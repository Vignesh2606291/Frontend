/**
 * CHENNAI 2029: BEYOND THE IT INDUSTRY
 * Core Interactive JavaScript
 * BCA College Project | Academic Year 2025-2026
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initReadingProgressBar();
  initSearch();
  initTimeline();
  initSkillsChecklist();
  initScenarioComparison();
  initIndustryFilter();
  initIndustryModal();
  initRoadmap();
  initQuiz();
  initCharts();
});

/* ==========================================================================
   1. Theme Management (Dark / Light Mode)
   ========================================================================== */
function initTheme() {
  const themeToggleButtons = document.querySelectorAll('.theme-toggle-btn');
  const savedTheme = localStorage.getItem('chennai2029_theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  applyTheme(savedTheme);

  themeToggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('chennai2029_theme', newTheme);
      updateChartsTheme(newTheme);
    });
  });
}

function applyTheme(theme) {
  const isDark = theme === 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  
  if (document.body) {
    document.body.classList.toggle('dark-mode', isDark);
  }
  document.documentElement.classList.toggle('dark-mode', isDark);

  const themeToggleButtons = document.querySelectorAll('.theme-toggle-btn');
  themeToggleButtons.forEach(btn => {
    if (isDark) {
      btn.innerHTML = '<i class="bi bi-sun-fill" style="color: #d4af37; font-size: 1.1rem;"></i>';
      btn.setAttribute('title', 'Switch to Light Mode');
      btn.setAttribute('aria-label', 'Switch to Light Mode');
    } else {
      btn.innerHTML = '<i class="bi bi-moon-stars-fill" style="color: #111111; font-size: 1.1rem;"></i>';
      btn.setAttribute('title', 'Switch to Dark Night Mode');
      btn.setAttribute('aria-label', 'Switch to Dark Night Mode');
    }
  });

  if (typeof updateChartsTheme === 'function') {
    updateChartsTheme(theme);
  }
}

/* ==========================================================================
   2. Reading / Scroll Progress Bar
   ========================================================================== */
function initReadingProgressBar() {
  const bar = document.getElementById('reading-progress-bar');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    bar.style.width = scrolled + '%';
  });
}

/* ==========================================================================
   3. Search Modal & Index
   ========================================================================== */
const searchDatabase = [
  {
    title: "AI & Autonomous Agentic Workflows",
    category: "Technology",
    page: "future-it.html",
    url: "future-it.html#tech-ai",
    snippet: "Enterprise LLMs, agentic developer workflows, code synthesis, and autonomous testing replacing manual routines."
  },
  {
    title: "Cloud Computing & FinOps 2026-2029",
    category: "Technology",
    page: "future-it.html",
    url: "future-it.html#tech-cloud",
    snippet: "Sovereign cloud compliance under DPDP Act 2023, hybrid edge orchestration, and aggressive FinOps cost governance."
  },
  {
    title: "Post-Quantum Cryptography & Zero Trust",
    category: "Cybersecurity",
    page: "future-it.html",
    url: "future-it.html#tech-security",
    snippet: "NIST-standardized quantum-resistant cryptographic algorithms and identity-first micro-segmentation."
  },
  {
    title: "IT Industry Trends & Revenue Metamorphosis",
    category: "Business Models",
    page: "future-it.html",
    url: "future-it.html#trends-timeline",
    snippet: "Pivoting from Time & Material billing to outcome-based contracts and IP-based SaaS licensing."
  },
  {
    title: "Chennai's OMR IT Corridor Baseline",
    category: "Economy",
    page: "chennai-without-it.html",
    url: "chennai-without-it.html#omr-baseline",
    snippet: "Direct employment of ~600,000 professionals, TIDEL Park, Siruseri SIPCOT, and secondary consumer multipliers."
  },
  {
    title: "Real Estate & Office Space Vacancy Risks",
    category: "Urban Impact",
    page: "chennai-without-it.html",
    url: "chennai-without-it.html#real-estate",
    snippet: "Over 80 million sq. ft. of Grade-A office inventory and potential adaptive reuse for electronics labs and universities."
  },
  {
    title: "Silver Linings: De-escalating Living Costs & Core Engineering",
    category: "Counterfactual",
    page: "chennai-without-it.html",
    url: "chennai-without-it.html#silver-linings",
    snippet: "Reduction in hyper-inflated suburban rentals, alleviated OMR traffic bottlenecks, and revival of mechanical/civil core disciplines."
  },
  {
    title: "Automobile & Electric Vehicles (EV) Capital",
    category: "Industry Pillar 1",
    page: "chennai-beyond-it.html",
    url: "chennai-beyond-it.html#pillar-auto-ev",
    snippet: "Chennai produces over 35% of India's auto components and Tamil Nadu manufactures ~45% of India's electric two-wheelers."
  },
  {
    title: "Electronics & Advanced Hardware Manufacturing",
    category: "Industry Pillar 2",
    page: "chennai-beyond-it.html",
    url: "chennai-beyond-it.html#pillar-electronics",
    snippet: "Sriperumbudur mega-factories: Foxconn, Pegatron, Salcomp driving high-volume smartphone and component exports."
  },
  {
    title: "Maritime Trade, Ports & Logistics Triad",
    category: "Industry Pillar 3",
    page: "chennai-beyond-it.html",
    url: "chennai-beyond-it.html#pillar-ports",
    snippet: "Chennai Port, Kamarajar Port (Ennore), and Kattupalli Port handling over 115 million metric tonnes annually alongside Mappedu MMLP."
  },
  {
    title: "Healthcare & Medical Tourism Capital",
    category: "Industry Pillar 4",
    page: "chennai-beyond-it.html",
    url: "chennai-beyond-it.html#pillar-healthcare",
    snippet: "Attracts ~40% of international medical tourists arriving in India, supported by Apollo, MIOT, and Madras Medical Mission."
  },
  {
    title: "Higher Education & 'Naan Mudhalvan' Upskilling",
    category: "Industry Pillar 5",
    page: "chennai-beyond-it.html",
    url: "chennai-beyond-it.html#pillar-education",
    snippet: "IIT Madras Research Park, Anna University, and over 450 engineering colleges powering Tamil Nadu's 47% Higher Education GER."
  },
  {
    title: "Renewable Energy & Green Hydrogen Ecosystem",
    category: "Industry Pillar 7",
    page: "chennai-beyond-it.html",
    url: "chennai-beyond-it.html#pillar-renewable",
    snippet: "Offshore wind feasibility along the Coromandel coast and Ennore green hydrogen export corridor."
  },
  {
    title: "Research Bibliography & Government Sources",
    category: "References",
    page: "references.html",
    url: "references.html#sources-gov",
    snippet: "Official citations: NASSCOM Strategic Review, Guidance Tamil Nadu, CMDA Third Master Plan, RBI State Finances."
  }
];

function initSearch() {
  const searchModal = document.getElementById('search-modal');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  const searchTriggers = document.querySelectorAll('.search-trigger-btn');
  const searchClose = document.getElementById('search-close-btn');

  if (!searchModal || !searchInput || !searchResults) return;

  const openSearch = () => {
    searchModal.classList.add('active');
    searchInput.value = '';
    renderSearchResults('');
    setTimeout(() => searchInput.focus(), 50);
  };

  const closeSearch = () => {
    searchModal.classList.remove('active');
  };

  searchTriggers.forEach(btn => btn.addEventListener('click', openSearch));
  if (searchClose) searchClose.addEventListener('click', closeSearch);

  searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) closeSearch();
  });

  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      searchModal.classList.contains('active') ? closeSearch() : openSearch();
    }
    if (e.key === 'Escape' && searchModal.classList.contains('active')) {
      closeSearch();
    }
  });

  searchInput.addEventListener('input', (e) => {
    renderSearchResults(e.target.value.trim());
  });

  function renderSearchResults(query) {
    if (!query) {
      searchResults.innerHTML = `
        <div class="text-center py-4 text-muted">
          <i class="bi bi-search display-6 d-block mb-2"></i>
          <p class="small mb-0">Type keywords to search research topics (e.g. <em>EV, Foxconn, OMR, AI, Ports</em>)...</p>
        </div>
      `;
      return;
    }

    const lowerQuery = query.toLowerCase();
    const matches = searchDatabase.filter(item => 
      item.title.toLowerCase().includes(lowerQuery) ||
      item.snippet.toLowerCase().includes(lowerQuery) ||
      item.category.toLowerCase().includes(lowerQuery)
    );

    if (matches.length === 0) {
      searchResults.innerHTML = `
        <div class="text-center py-4 text-muted">
          <p class="mb-0">No matching research sections found for "<strong>${escapeHtml(query)}</strong>".</p>
        </div>
      `;
      return;
    }

    searchResults.innerHTML = matches.map(item => `
      <a href="${item.url}" class="search-result-item" onclick="document.getElementById('search-modal').classList.remove('active')">
        <div class="d-flex justify-content-between align-items-center mb-1">
          <span class="search-result-title">${escapeHtml(item.title)}</span>
          <span class="search-result-page">${escapeHtml(item.category)}</span>
        </div>
        <p class="search-result-snippet mb-0">${escapeHtml(item.snippet)}</p>
      </a>
    `).join('');
  }
}

function escapeHtml(string) {
  return String(string).replace(/[&<>"'`=\/]/g, function (s) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '/': '&#x2F;',
      '`': '&#x60;',
      '=': '&#x3D;'
    }[s];
  });
}

/* ==========================================================================
   4. Interactive 2026-2029 Timeline (Page 1)
   ========================================================================== */
function initTimeline() {
  const stepButtons = document.querySelectorAll('.timeline-step-btn');
  const cards = document.querySelectorAll('.timeline-content-card');

  if (stepButtons.length === 0 || cards.length === 0) return;

  stepButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetYear = btn.getAttribute('data-year');

      stepButtons.forEach(b => b.classList.remove('active'));
      cards.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const targetCard = document.getElementById(`timeline-year-${targetYear}`);
      if (targetCard) targetCard.classList.add('active');
    });
  });
}

/* ==========================================================================
   5. Interactive Future Tech Skills Checklist (Page 1)
   ========================================================================== */
function initSkillsChecklist() {
  const checkboxes = document.querySelectorAll('.skill-checkbox');
  const progressBar = document.getElementById('skills-progress-bar');
  const percentageLabel = document.getElementById('skills-percentage-label');
  const feedbackLabel = document.getElementById('skills-feedback-label');

  if (!progressBar || !percentageLabel || checkboxes.length === 0) return;

  function updateScore() {
    const total = checkboxes.length;
    let checkedCount = 0;

    checkboxes.forEach(cb => {
      const parent = cb.closest('.skill-check-item');
      if (cb.checked) {
        checkedCount++;
        if (parent) parent.classList.add('checked');
      } else {
        if (parent) parent.classList.remove('checked');
      }
    });

    const percent = Math.round((checkedCount / total) * 100);
    progressBar.style.width = percent + '%';
    percentageLabel.innerText = `${percent}%`;

    if (feedbackLabel) {
      if (percent === 0) {
        feedbackLabel.innerHTML = `<span class="text-muted">Select your technical competencies above to calculate your 2029 readiness score.</span>`;
      } else if (percent < 40) {
        feedbackLabel.innerHTML = `<span class="text-warning font-weight-bold">Emerging Foundation:</span> You have begun adapting. Focus on Agentic Orchestration and Cloud FinOps to bridge future gaps.`;
      } else if (percent < 80) {
        feedbackLabel.innerHTML = `<span class="text-info font-weight-bold">Solid 2027 Baseline:</span> High competence in modern workflows. Expand into Post-Quantum security and hardware-aware systems.`;
      } else {
        feedbackLabel.innerHTML = `<span class="text-success font-weight-bold"><i class="bi bi-patch-check-fill"></i> Exemplary 2029 Architect:</span> You possess the high-value specialized skill matrix needed for next-gen software leadership!`;
      }
    }
  }

  checkboxes.forEach(cb => cb.addEventListener('change', updateScore));
  updateScore(); // Initial run
}

/* ==========================================================================
   6. Scenario Comparison Switcher (Page 2)
   ========================================================================== */
function initScenarioComparison() {
  const scenarioButtons = document.querySelectorAll('.scenario-tab-btn');
  const rows = document.querySelectorAll('.comparison-row');

  if (scenarioButtons.length === 0 || rows.length === 0) return;

  scenarioButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      scenarioButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      rows.forEach(row => {
        if (filter === 'all' || row.getAttribute('data-category') === filter) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   7. Multi-Category Industry Filter (Page 3)
   ========================================================================= */
function initIndustryFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.industry-card');

  if (filterButtons.length === 0 || cards.length === 0) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* ==========================================================================
   8. Dynamic Industry Details Modal (Page 3)
   ========================================================================== */
const industryDeepDives = {
  "auto-ev": {
    title: "Automobile & Electric Vehicles Ecosystem",
    subheading: "The 'Detroit of Asia' evolving into South Asia's Premier EV Manufacturing Corridor",
    zones: "Sriperumbudur, Oragadam, Maraimalai Nagar, Vallam Vadagal SIPCOT",
    keyCompanies: "Hyundai Motor India, Renault-Nissan Alliance, BMW, Ashok Leyland, TVS Motor, Daimler Commercial Vehicles, Ola Electric, Ather Energy, BYD",
    swot: {
      strengths: "Decades of deep supplier networks (over 350 tier-1 component makers); ports within 45 km radius; skilled mechanical & mechatronics workforce.",
      weaknesses: "High dependence on imported rare-earth battery components and power electronics.",
      opportunities: "Tamil Nadu EV Policy 2023 offering 100% electricity tax exemption and capital subsidies; rapid fleet electrification for urban logistics.",
      threats: "Global supply chain disruptions and competitive incentives from neighboring states."
    },
    policy: "Tamil Nadu Electric Vehicles Policy 2023 & Tamil Nadu Industrial Policy 2021-2025 (Guidance Tamil Nadu)."
  },
  "electronics": {
    title: "Electronics & Advanced Hardware Manufacturing",
    subheading: "India's Leading Hub for High-Tech Smartphone Assembly & Precision Hardware",
    zones: "Sriperumbudur SEZ, Sunguvarchatram, Oragadam Electronics Industrial Park",
    keyCompanies: "Foxconn (Hon Hai), Pegatron, Salcomp, Tata Electronics, Flex, Dell India, Sanmina-SCI",
    swot: {
      strengths: "Rapid expansion of Apple ecosystem contract manufacturers; plug-and-play industrial estates; dedicated women's industrial dormitories.",
      weaknesses: "Low indigenous value addition (~18-22% domestic content, predominantly assembly stage).",
      opportunities: "Semiconductor Assembly & Testing (OSAT) incentives; expansion into medical devices, defence electronics, and IoT sensor design.",
      threats: "Stringent global tariff shifts and component supply chain bottlenecks."
    },
    policy: "Tamil Nadu Electronics Hardware Manufacturing Policy 2020 (ELCOT / TIDCO)."
  },
  "ports": {
    title: "Maritime Trade, Ports & Logistics Triad",
    subheading: "Tri-Port Gateway to South-East Asia and European Maritime Trade Lanes",
    zones: "Chennai Port, Kamarajar Port (Ennore), Kattupalli Port (Adani), Mappedu Multi-Modal Logistics Park",
    keyCompanies: "Chennai Port Authority, Kamarajar Port Limited, DP World, PSA International, CONCOR, Adani Ports",
    swot: {
      strengths: "Natural deep-water draft at Ennore (up to 18m); direct container feeder connectivity to Singapore and Colombo; dedicated Ro-Ro automobile berths.",
      weaknesses: "Urban traffic congestion around Chennai Port gates (mitigated by the ongoing double-decker elevated expressway).",
      opportunities: "Mappedu Multi-Modal Logistics Park (MMLP) under Bharatmala Pariyojana; transshipment growth and green maritime bunkering.",
      threats: "Competition from neighboring eastern ports and international container freight rate volatility."
    },
    policy: "Maritime India Vision 2030 (Ministry of Ports, Shipping and Waterways) & PM Gati Shakti National Master Plan."
  },
  "healthcare": {
    title: "Healthcare & Medical Tourism Capital",
    subheading: "India's Health Capital with Globally Accredited Super-Specialty Medical Infrastructure",
    zones: "Greams Road Corridor, Guindy, Velachery, Manapakkam, Porur Health Corridor",
    keyCompanies: "Apollo Hospitals Enterprise, MIOT International, Fortis Malar, Madras Medical Mission, Sri Ramachandra Institute, Adyar Cancer Institute",
    swot: {
      strengths: "Treatment costs at 20-30% of Western nations; highest concentration of JCI/NABH accredited hospitals; renowned cardiac and oncology surgeons.",
      weaknesses: "Public healthcare tertiary capacity bottlenecks during seasonal epidemic surges.",
      opportunities: "High-value wellness tourism, clinical genomics, robotic surgery specialization, and direct medical visa fast-tracking.",
      threats: "Medical inflation and competition from Southeast Asian medical hubs (Thailand, Malaysia)."
    },
    policy: "Tamil Nadu Medical Tourism Promotion Cell & Tamil Nadu Health Systems Reform Project (World Bank assisted)."
  },
  "education": {
    title: "Higher Education, R&D & Skill Development",
    subheading: "Innovation Engine Anchored by India's Top Technical & Research Institutions",
    zones: "IIT Madras Research Park (Taramani), Anna University (Guindy), Maraimalai Nagar University Belt",
    keyCompanies: "IIT Madras Incubation Cell, Anna University Biotech Park, Naan Mudhalvan Skilling Portal, Loyola Institute",
    swot: {
      strengths: "Tamil Nadu Gross Enrolment Ratio (GER) ~47% (highest among major Indian states); deep synergy between academia and industry at IITMRP.",
      weaknesses: "Employability variance across tier-2 and tier-3 rural engineering institutions.",
      opportunities: "'Naan Mudhalvan' upskilling mission training 1.3 million youth annually; specialized technical vocational centres (ITIs) upgraded with Industry 4.0 equipment.",
      threats: "Brain drain of top-tier postgraduate researchers to overseas institutions."
    },
    policy: "Tamil Nadu Higher Education Vision & 'Naan Mudhalvan' Scheme (Government of Tamil Nadu)."
  },
  "tourism": {
    title: "Heritage, Cultural & Eco-Tourism",
    subheading: "Gateway to South Indian Heritage, Classical Arts, and Coastal Leisure Corridors",
    zones: "Mahabalipuram UNESCO World Heritage Circuit, Mylapore Cultural Precinct, Covelong Surf Point",
    keyCompanies: "Tamil Nadu Tourism Development Corporation (TTDC), DakshinaChitra, Taj Fisherman's Cove, Sterling Resorts",
    swot: {
      strengths: "7th-century Pallava shore temples; world's second-longest urban beach (Marina); December Madras Music & Dance Season.",
      weaknesses: "Seasonal footfall peaks (winter-heavy); inadequate multilingual heritage interpretation signage.",
      opportunities: "Coastal highway eco-tourism, curated culinary tourism, luxury cruise terminal at Chennai Port.",
      threats: "Coastal erosion and extreme climate events."
    },
    policy: "Tamil Nadu Tourism Policy 2023 (TTDC / Ministry of Tourism)."
  },
  "renewable": {
    title: "Renewable Energy & Green Hydrogen",
    subheading: "Clean Energy Transition Integrating Wind Corridors, Solar Parks & Clean Fuel Hubs",
    zones: "Ennore Green Hydrogen Corridor, Coromandel Coast Offshore Zones, Sriperumbudur Solar Parks",
    keyCompanies: "TANGEDCO, ReNew Power, Tata Power Solar, Adani Green, L&T Energy, Greenko",
    swot: {
      strengths: "Tamil Nadu is a national leader in installed renewable energy capacity (>20 GW); robust high-voltage inter-state grid transmission.",
      weaknesses: "Grid curtailment during peak windy seasons and storage intermittency.",
      opportunities: "Offshore wind installations in Gulf of Mannar and Ennore green hydrogen bunkering for container ships.",
      threats: "High initial capex for electrolyzers and grid storage batteries."
    },
    policy: "Tamil Nadu Green Hydrogen Policy 2024 & Tamil Nadu Renewable Energy Policy 2022."
  },
  "msme": {
    title: "Startups & Precision Engineering MSMEs",
    subheading: "Backbone of Precision Components, Tooling, Defence & Aerospace Subsystems",
    zones: "Ambattur Industrial Estate (one of South Asia's largest), Guindy SIDCO, Thirumazhisai MSME Hub",
    keyCompanies: "Over 2,500 precision machining MSMEs, Roots Group, Ucal Fuel Systems, Defence Industrial Corridor Nodes",
    swot: {
      strengths: "Decades of tool & die craftsmanship; tight integration with aerospace, railway coach (ICF Chennai), and automobile supply chains.",
      weaknesses: "Limited access to low-cost expansion capital and high compliance burden.",
      opportunities: "Tamil Nadu Defence Industrial Corridor (TNDIC); common facility testing centres (CFCs) established by SIDCO.",
      threats: "Raw material price volatility (steel, aluminum) and automation lag."
    },
    policy: "Tamil Nadu MSME Policy 2021 & Tamil Nadu Defence Industrial Corridor (TIDCO)."
  },
  "food": {
    title: "Food Processing & Marine Exports",
    subheading: "Utilizing 1,076 km Coastline and Agricultural Hinterland for Value-Added Exports",
    zones: "Kasimedu Marine Terminal, Ennore Agro-Processing Belt, Chengalpattu Agro SEZ",
    keyCompanies: "MPEDA accredited exporters, Hatsun Agro, CavinKare, Apex Frozen Foods, ITC Agro",
    swot: {
      strengths: "Proximity to major fishing harbours; cold-storage infrastructure at Chennai and Ennore ports; established frozen shrimp export pipelines to US/EU.",
      weaknesses: "Stringent antibiotic residue norms in European markets; cold-chain gaps in inland transport.",
      opportunities: "Modernization of Kasimedu Fishing Harbour; seaweed farming and value-added marine collagen exports.",
      threats: "Monsoon cyclonic disruptions and marine stock depletion."
    },
    policy: "Pradhan Mantri Matsya Sampada Yojana (PMMSY) & Tamil Nadu Food Processing Policy."
  },
  "gov-infra": {
    title: "Government Infrastructure & Industrial Corridors",
    subheading: "Planned Spatial Expansion under the CMDA Third Master Plan 2026-2046",
    zones: "Chennai-Bengaluru Industrial Corridor (CBIC), Ponneri Smart City, Outer Ring Road (ORR) Growth Nodes",
    keyCompanies: "CMDA, SIPCOT, TIDCO, Chennai Metro Rail Limited (CMRL Phase 2), NHAI",
    swot: {
      strengths: "Aggressive infrastructure spending: CMRL 116 km Phase 2 network; SIPCOT industrial land banks; Chennai Peripheral Ring Road (CPRR).",
      weaknesses: "Land acquisition timelines and urban flood mitigation challenges in low-lying peri-urban belts.",
      opportunities: "Decentralized satellite town development (Thirumazhisai, Chengalpattu) preventing central urban choke.",
      threats: "Macroeconomic inflation in infrastructure civil construction inputs."
    },
    policy: "CMDA Third Master Plan 2026-2046 & Tamil Nadu Infrastructure Development Act (TNIDA)."
  }
};

function initIndustryModal() {
  const modalEl = document.getElementById('industry-detail-modal');
  if (!modalEl) return;

  const modalTitle = document.getElementById('modal-industry-title');
  const modalSub = document.getElementById('modal-industry-sub');
  const modalZones = document.getElementById('modal-industry-zones');
  const modalCompanies = document.getElementById('modal-industry-companies');
  const modalStrengths = document.getElementById('modal-industry-strengths');
  const modalWeaknesses = document.getElementById('modal-industry-weaknesses');
  const modalOpportunities = document.getElementById('modal-industry-opps');
  const modalThreats = document.getElementById('modal-industry-threats');
  const modalPolicy = document.getElementById('modal-industry-policy');

  const triggers = document.querySelectorAll('.industry-modal-trigger');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const industryKey = trigger.getAttribute('data-industry');
      const data = industryDeepDives[industryKey];

      if (!data) return;

      modalTitle.innerText = data.title;
      modalSub.innerText = data.subheading;
      modalZones.innerText = data.zones;
      modalCompanies.innerText = data.keyCompanies;
      modalStrengths.innerText = data.swot.strengths;
      modalWeaknesses.innerText = data.swot.weaknesses;
      modalOpportunities.innerText = data.swot.opportunities;
      modalThreats.innerText = data.swot.threats;
      modalPolicy.innerText = data.policy;

      const bsModal = new bootstrap.Modal(modalEl);
      bsModal.show();
    });
  });
}

/* ==========================================================================
   9. Interactive 2026-2029 Alternative Roadmap (Page 3)
   ========================================================================== */
function initRoadmap() {
  const roadmapSteps = document.querySelectorAll('.roadmap-interactive-step');
  if (roadmapSteps.length === 0) return;

  roadmapSteps.forEach(step => {
    step.addEventListener('click', () => {
      roadmapSteps.forEach(s => s.classList.remove('active-step'));
      step.classList.add('active-step');
    });
  });
}

/* ==========================================================================
   10. Interactive BCA Project Quiz
   ========================================================================== */
const quizQuestions = [
  {
    question: "Approximately what percentage of India's electric two-wheelers are produced in Tamil Nadu's industrial ecosystem?",
    options: [
      "Around 10%",
      "Around 40% - 45%",
      "Less than 5%",
      "Over 90%"
    ],
    answer: 1,
    explanation: "Official data from Guidance Tamil Nadu and Ministry of Heavy Industries confirms Tamil Nadu manufactures approximately 40% to 45% of all electric two-wheelers sold across India, led by clusters around Hosur and Chennai-Sriperumbudur."
  },
  {
    question: "Which landmark initiative in Chennai's Taramani (2000) catalyzed the city's modern IT software corridor?",
    options: [
      "Ambattur Industrial Estate",
      "TIDEL Park",
      "Integral Coach Factory (ICF)",
      "Madras Export Processing Zone (MEPZ)"
    ],
    answer: 1,
    explanation: "TIDEL Park, inaugurated in 2000 at Taramani, became the foundational catalyst for developing Old Mahabalipuram Road (OMR) into the world-famous Rajiv Gandhi IT Expressway."
  },
  {
    question: "Why is Chennai widely referred to as the 'Health Capital of India'?",
    options: [
      "It has the largest pharmaceutical factory in Asia",
      "It attracts ~40% of international medical tourists arriving in India",
      "It employs over 50% of Indian nurses",
      "It is the sole manufacturing base for MRI machines"
    ],
    answer: 1,
    explanation: "Chennai receives roughly 40% of all international patients visiting India for advanced healthcare treatments, driven by JCI-accredited super-specialty hospitals like Apollo, Fortis, and MIOT."
  },
  {
    question: "In a counterfactual scenario where Chennai had zero IT firms, what structural challenge would the city encounter?",
    options: [
      "Immediate total collapse of all sea ports",
      "Difficulty absorbing ~150,000 engineering graduates emerging annually from Tamil Nadu colleges",
      "Inability to manufacture commercial automobiles",
      "Loss of all higher education institutions"
    ],
    answer: 1,
    explanation: "Tamil Nadu produces over 150,000 engineering graduates annually. Without IT and ITeS bulk recruitment, absorbing this massive technical cohort would demand substantial expansion in core hardware, mechatronics, and manufacturing."
  },
  {
    question: "Which of the following is NOT an IT-reliant alternative growth pillar for Chennai's future?",
    options: [
      "High-Tech Automobile & EV corridors (Oragadam/Sriperumbudur)",
      "Tri-port maritime logistics and container transshipment",
      "Time & Material (T&M) software maintenance outsourcing",
      "Offshore wind and green hydrogen energy transition"
    ],
    answer: 2,
    explanation: "T&M software maintenance outsourcing is a traditional IT services model, whereas EV manufacturing, maritime trade, and green hydrogen represent foundational non-IT alternative economic growth engines."
  }
];

function initQuiz() {
  const quizBox = document.getElementById('project-quiz-container');
  if (!quizBox) return;

  let currentQuestion = 0;
  let score = 0;

  function renderQuestion() {
    const q = quizQuestions[currentQuestion];
    quizBox.innerHTML = `
      <div class="card-header-flex">
        <span class="badge bg-primary-subtle text-primary fw-bold">Question ${currentQuestion + 1} of ${quizQuestions.length}</span>
        <span class="small text-muted">Current Score: ${score}/${currentQuestion}</span>
      </div>
      <h5 class="my-3">${escapeHtml(q.question)}</h5>
      <div class="quiz-options-list">
        ${q.options.map((opt, idx) => `
          <button class="quiz-option" data-idx="${idx}">
            <span class="fw-bold me-2">${String.fromCharCode(65 + idx)}.</span> ${escapeHtml(opt)}
          </button>
        `).join('')}
      </div>
      <div class="quiz-explanation" id="quiz-exp-box"></div>
      <div class="d-flex justify-content-between align-items-center mt-3" style="display:none;" id="quiz-nav-row">
        <span class="small text-muted" id="quiz-status-indicator"></span>
        <button class="btn btn-primary btn-sm px-4" id="quiz-next-btn">
          ${currentQuestion + 1 === quizQuestions.length ? 'View Final Results' : 'Next Question <i class="bi bi-arrow-right"></i>'}
        </button>
      </div>
    `;

    const optionButtons = quizBox.querySelectorAll('.quiz-option');
    const expBox = quizBox.querySelector('#quiz-exp-box');
    const navRow = quizBox.querySelector('#quiz-nav-row');
    const nextBtn = quizBox.querySelector('#quiz-next-btn');

    optionButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const selectedIdx = parseInt(btn.getAttribute('data-idx'));
        optionButtons.forEach(b => b.disabled = true);

        if (selectedIdx === q.answer) {
          btn.classList.add('correct');
          score++;
        } else {
          btn.classList.add('incorrect');
          optionButtons[q.answer].classList.add('correct');
        }

        expBox.style.display = 'block';
        expBox.innerHTML = `<strong>Explanation:</strong> ${escapeHtml(q.explanation)}`;
        navRow.style.display = 'flex';
      });
    });

    nextBtn.addEventListener('click', () => {
      currentQuestion++;
      if (currentQuestion < quizQuestions.length) {
        renderQuestion();
      } else {
        renderQuizCompletion();
      }
    });
  }

  function renderQuizCompletion() {
    const pct = Math.round((score / quizQuestions.length) * 100);
    quizBox.innerHTML = `
      <div class="text-center py-4">
        <div class="display-4 text-primary mb-3">
          <i class="bi bi-trophy-fill text-warning"></i>
        </div>
        <h4 class="fw-bold">Quiz Completed!</h4>
        <p class="lead mb-2">You scored <strong>${score} out of ${quizQuestions.length}</strong> (${pct}%)</p>
        <p class="text-muted small max-w-500 mx-auto">
          ${pct >= 80 ? 'Exceptional grasp of Chennai\'s economic architecture, IT history, and non-IT industrial diversity!' :
            pct >= 60 ? 'Well done! You have a solid understanding of Tamil Nadu\'s multi-pillar economic foundations.' :
            'Good effort! Review the detailed research sections on the three core project pages and try again.'}
        </p>
        <button class="btn btn-outline-primary btn-sm mt-3 px-4" id="quiz-retry-btn">
          <i class="bi bi-arrow-repeat me-1"></i> Retake Quiz
        </button>
      </div>
    `;

    document.getElementById('quiz-retry-btn').addEventListener('click', () => {
      currentQuestion = 0;
      score = 0;
      renderQuestion();
    });
  }

  renderQuestion();
}

/* ==========================================================================
   11. Research Visualizations (Chart.js Integration - Premium Gold & Charcoal)
   ========================================================================== */
let activeCharts = [];

function initCharts() {
  if (typeof Chart === 'undefined') return;

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const textColor = isDark ? '#D1D5DB' : '#222222';
  const gridColor = isDark ? 'rgba(212, 175, 55, 0.15)' : 'rgba(17, 17, 17, 0.08)';

  // Chart 1: IT Exports & Projection (future-it.html) - Gold & Charcoal
  const itExportCanvas = document.getElementById('chart-it-exports');
  if (itExportCanvas) {
    const ctx = itExportCanvas.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['2021-22 (Actual)', '2022-23 (Actual)', '2023-24 (Actual)', '2024-25 (Est)', '2026 (Proj)', '2027 (Proj)', '2028 (Proj)', '2029 (Proj)'],
        datasets: [{
          label: 'Tamil Nadu Software Exports (₹ in Lakh Crores)',
          data: [1.54, 1.80, 2.07, 2.30, 2.58, 2.88, 3.22, 3.60],
          borderColor: '#D4AF37',
          backgroundColor: 'rgba(212, 175, 55, 0.12)',
          borderWidth: 2.5,
          tension: 0.3,
          fill: true,
          pointBackgroundColor: '#D4AF37',
          pointBorderColor: '#111111',
          pointBorderWidth: 1.5,
          pointRadius: 4.5,
          pointHoverRadius: 6.5
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: textColor, font: { weight: '600' } } },
          tooltip: {
            callbacks: {
              afterLabel: function(context) {
                if (context.dataIndex >= 4) {
                  return 'Consensus Projection (Labeled as Estimate)';
                }
                return 'Official ELCOT / NASSCOM Reported Metric';
              }
            }
          }
        },
        scales: {
          x: { ticks: { color: textColor }, grid: { color: gridColor } },
          y: { 
            ticks: { color: textColor }, 
            grid: { color: gridColor },
            title: { display: true, text: '₹ Lakh Crores', color: textColor }
          }
        }
      }
    });
    activeCharts.push(chart);
  }

  // Chart 2: Tech Adoption Radar / Bar (future-it.html) - Charcoal vs Gold
  const techAdoptionCanvas = document.getElementById('chart-tech-adoption');
  if (techAdoptionCanvas) {
    const ctx = techAdoptionCanvas.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['GenAI & Agents', 'Cloud FinOps', 'Zero-Trust Cyber', 'Platform Eng', 'WebAssembly/Edge'],
        datasets: [
          {
            label: '2026 Enterprise Adoption (%)',
            data: [34, 48, 55, 42, 22],
            backgroundColor: '#374151',
            borderRadius: 4
          },
          {
            label: '2029 Projected Adoption (%)',
            data: [88, 85, 92, 79, 64],
            backgroundColor: '#D4AF37',
            borderRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: textColor, font: { weight: '600' } } }
        },
        scales: {
          x: { ticks: { color: textColor }, grid: { color: gridColor } },
          y: { 
            ticks: { color: textColor }, 
            grid: { color: gridColor },
            min: 0, 
            max: 100,
            title: { display: true, text: 'Adoption Rate (%)', color: textColor }
          }
        }
      }
    });
    activeCharts.push(chart);
  }

  // Chart 3: Illustrative Economic Resilience (chennai-without-it.html) - Black & Gold Radar
  const resilienceCanvas = document.getElementById('chart-resilience');
  if (resilienceCanvas) {
    const ctx = resilienceCanvas.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: [
          'Direct Jobs Capacity',
          'Export Revenue Stability',
          'Infrastructure Adaptability',
          'SME Multiplier Effect',
          'Skill Diversification',
          'Real Estate Absorption'
        ],
        datasets: [
          {
            label: 'Scenario A: Chennai Current (IT Dependent)',
            data: [85, 90, 75, 80, 70, 92],
            borderColor: '#374151',
            backgroundColor: 'rgba(55, 65, 81, 0.25)',
            pointBackgroundColor: '#374151',
            borderWidth: 2
          },
          {
            label: 'Scenario B: Hypothetical Diversified Core (Non-IT Focused)',
            data: [72, 78, 88, 92, 85, 68],
            borderColor: '#D4AF37',
            backgroundColor: 'rgba(212, 175, 55, 0.25)',
            pointBackgroundColor: '#D4AF37',
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: textColor, font: { weight: '600' } } },
          tooltip: {
            footerFontStyle: 'normal',
            callbacks: {
              afterBody: () => 'Note: Illustrative econometric simulation model.'
            }
          }
        },
        scales: {
          r: {
            ticks: { display: false },
            grid: { color: gridColor },
            pointLabels: { color: textColor, font: { size: 11, weight: '600' } },
            angleLines: { color: gridColor },
            suggestedMin: 30,
            suggestedMax: 100
          }
        }
      }
    });
    activeCharts.push(chart);
  }

  // Chart 4: Non-IT Sectors Employment & Growth (chennai-beyond-it.html) - Gold & Charcoal
  const nonItGrowthCanvas = document.getElementById('chart-non-it-growth');
  if (nonItGrowthCanvas) {
    const ctx = nonItGrowthCanvas.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Auto & EV', 'Electronics Mfg', 'Ports & Logistics', 'Healthcare', 'Renewable Energy'],
        datasets: [
          {
            label: 'Estimated Direct/Indirect Employment (Lakhs)',
            data: [12.5, 4.2, 3.8, 4.5, 1.8],
            backgroundColor: '#111111',
            borderColor: '#D4AF37',
            borderWidth: 1.5,
            borderRadius: 4,
            yAxisID: 'y'
          },
          {
            label: 'Projected CAGR to 2029 (%)',
            data: [14.2, 22.5, 11.0, 15.8, 26.4],
            type: 'line',
            borderColor: '#D4AF37',
            backgroundColor: '#D4AF37',
            borderWidth: 2.5,
            yAxisID: 'y1',
            tension: 0.3,
            pointBackgroundColor: '#D4AF37'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: textColor, font: { weight: '600' } } }
        },
        scales: {
          x: { ticks: { color: textColor }, grid: { color: gridColor } },
          y: { 
            type: 'linear', 
            position: 'left', 
            ticks: { color: textColor }, 
            grid: { color: gridColor },
            title: { display: true, text: 'Employment (in Lakhs)', color: textColor }
          },
          y1: {
            type: 'linear',
            position: 'right',
            grid: { drawOnChartArea: false },
            ticks: { color: textColor },
            title: { display: true, text: 'Projected CAGR (%)', color: textColor }
          }
        }
      }
    });
    activeCharts.push(chart);
  }
}

function updateChartsTheme(theme) {
  const isDark = theme === 'dark';
  const textColor = isDark ? '#D1D5DB' : '#222222';
  const gridColor = isDark ? 'rgba(212, 175, 55, 0.15)' : 'rgba(17, 17, 17, 0.08)';

  activeCharts.forEach(chart => {
    if (chart.options.plugins && chart.options.plugins.legend) {
      chart.options.plugins.legend.labels.color = textColor;
    }
    if (chart.options.scales) {
      Object.keys(chart.options.scales).forEach(scaleKey => {
        const scale = chart.options.scales[scaleKey];
        if (scale.ticks) scale.ticks.color = textColor;
        if (scale.grid) scale.grid.color = gridColor;
        if (scale.title) scale.title.color = textColor;
        if (scale.pointLabels) scale.pointLabels.color = textColor;
        if (scale.angleLines) scale.angleLines.color = gridColor;
      });
    }
    chart.update();
  });
}
