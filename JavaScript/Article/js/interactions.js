/**
 * CHENNAI 2029 – Interactive Logic & User Features
 * Handles timeline filtering, skills scoring, comparative scenario toggle,
 * industry filtering, roadmap stepper, career simulator, quiz, and citation tool.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTimelineFilter();
  initSkillsCalculator();
  initScenarioFilter();
  initIndustryFilter();
  initRoadmapStepper();
  initCareerSimulator();
  initQuiz();
  initReferencesCitationTool();
});

/**
 * 1. Future IT Timeline Filter (future-it.html)
 */
function initTimelineFilter() {
  const filterBtns = document.querySelectorAll('[data-timeline-filter]');
  const timelineItems = document.querySelectorAll('.timeline-item');
  if (!filterBtns.length || !timelineItems.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active', 'btn-modern-primary'));
      filterBtns.forEach(b => b.classList.add('btn-modern-outline'));
      btn.classList.add('active', 'btn-modern-primary');
      btn.classList.remove('btn-modern-outline');

      const filterValue = btn.getAttribute('data-timeline-filter');
      timelineItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/**
 * 2. Future Skills Readiness Calculator (future-it.html)
 */
function initSkillsCalculator() {
  const checkboxes = document.querySelectorAll('.skill-check');
  const scoreDisplay = document.getElementById('skillScoreValue');
  const scoreBar = document.getElementById('skillScoreProgressBar');
  const feedbackMsg = document.getElementById('skillFeedbackText');
  if (!checkboxes.length || !scoreDisplay) return;

  function updateScore() {
    let totalPoints = 0;
    let checkedCount = 0;

    checkboxes.forEach(cb => {
      if (cb.checked) {
        totalPoints += parseInt(cb.getAttribute('data-weight') || 10, 10);
        checkedCount++;
      }
    });

    // Animate score number
    scoreDisplay.textContent = totalPoints + '%';
    if (scoreBar) {
      scoreBar.style.width = totalPoints + '%';
      if (totalPoints < 40) scoreBar.className = 'progress-bar bg-warning';
      else if (totalPoints < 75) scoreBar.className = 'progress-bar bg-info';
      else scoreBar.className = 'progress-bar bg-success';
    }

    if (feedbackMsg) {
      if (totalPoints >= 80) {
        feedbackMsg.innerHTML = '<strong>Elite 2029 Architect Ready:</strong> Outstanding alignment with autonomous multi-agent systems, sovereign cloud, and secure DevSecOps pipelines. You are positioned for senior engineering roles in Chennai GCCs.';
      } else if (totalPoints >= 50) {
        feedbackMsg.innerHTML = '<strong>Promising Industry Competitor:</strong> Solid baseline understanding. Focus next on mastering agentic frameworks, Vector DBs, and Zero-Trust architecture to thrive in Chennai’s next-gen tech hubs.';
      } else {
        feedbackMsg.innerHTML = '<strong>Foundation Level:</strong> Good start on core concepts. Deepen hands-on skills in Python/Go, cloud containers (Docker/Kubernetes), and AI fine-tuning to meet 2026–2029 enterprise hiring standards.';
      }
    }
  }

  checkboxes.forEach(cb => cb.addEventListener('change', updateScore));
  updateScore(); // Initial run
}

/**
 * 3. What Could Change? Sector Scenario Filter (chennai-without-it.html)
 */
function initScenarioFilter() {
  const filterBtns = document.querySelectorAll('[data-scenario-filter]');
  const scenarioCards = document.querySelectorAll('.scenario-col');
  if (!filterBtns.length || !scenarioCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-scenario-filter');
      scenarioCards.forEach(card => {
        const cat = card.getAttribute('data-sector');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * 4. Alternative Industry Filter & Dynamic Inspector (chennai-beyond-it.html)
 */
function initIndustryFilter() {
  const filterBtns = document.querySelectorAll('.industry-filter-btn');
  const cards = document.querySelectorAll('.industry-item-col');
  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * 5. Chennai 2026-2029 Development Roadmap Stepper (chennai-beyond-it.html)
 */
function initRoadmapStepper() {
  const stepBtns = document.querySelectorAll('.step-indicator-btn');
  const panes = document.querySelectorAll('.roadmap-pane');
  if (!stepBtns.length || !panes.length) return;

  stepBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      stepBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetYear = btn.getAttribute('data-year');
      panes.forEach(pane => {
        if (pane.getAttribute('data-year') === targetYear) {
          pane.style.display = 'block';
        } else {
          pane.style.display = 'none';
        }
      });
    });
  });
}

/**
 * 6. Choose an Industry Simulator (chennai-beyond-it.html)
 */
function initCareerSimulator() {
  const select = document.getElementById('careerSectorSelect');
  const resultCard = document.getElementById('simulatorResultCard');
  if (!select || !resultCard) return;

  const simulationProfiles = {
    ev_auto: {
      title: "Automotive & Electric Mobility Engineering",
      hubs: "Sriperumbudur & Oragadam High-Tech Automotive Belts",
      roles: "EV Battery Management Engineer, Autonomous Driving Algorithm Specialist, Heavy Component Tooling Engineer",
      training: "Naan Mudhalvan EV Design Specialization, ARAI Certifications, CAD/FEA simulation suites",
      incubation: "IIT Madras Center for Battery Engineering and EVs (C-BEE), SIPCOT Industrial R&D Centers"
    },
    hardware_electronics: {
      title: "Semiconductor Packaging & Electronics Hardware",
      hubs: "Foxconn / Pegatron clusters in Sriperumbudur & Chengalpattu",
      roles: "Surface-Mount Technology (SMT) Specialist, Hardware Quality Verification Engineer, Supply Chain Logistics Lead",
      training: "IPC-A-610 Electronics Assembly Certification, Six Sigma Green Belt, VLSI Layout Basics",
      incubation: "IIT Madras Research Park Semiconductor Labs, Guidance TN Electronics Facilitation Hub"
    },
    medical_tourism: {
      title: "Healthcare Administration & Medical Value Travel",
      hubs: "Greams Road (Apollo Hub), Porur (SRMC), Manapakkam (MIOT)",
      roles: "International Patient Concierge Director, Healthcare Informatics Analyst, Clinical Research Associate",
      training: "NABH / JCI Hospital Accreditation Courses, Multilingual Healthcare Diplomas (French/Arabic/Swahili)",
      incubation: "IITM Bioincubator, Tamil Nadu MedTech Park (Chengalpattu)"
    },
    maritime_logistics: {
      title: "Port Logistics, Supply Chain & Marine Operations",
      hubs: "Kamarajar Port (Ennore), Chennai Port Trust, Kattupalli Adani Terminal",
      roles: "Port Terminal Automation Engineer, Multi-Modal Freight Coordinator, Maritime Trade Compliance Officer",
      training: "FIATA Freight Forwarding Diploma, Port Container Management Systems, Customs Clearance Regulations",
      incubation: "National Technology Centre for Ports, Waterways & Coasts (NTCPWC) at IIT Madras"
    },
    clean_energy: {
      title: "Renewable Energy & Green Hydrogen Infrastructure",
      hubs: "Manali Petrochemical Corridor & Off-Shore Coastal Energy Zones",
      roles: "Solar Micro-Grid Architect, Electrolyzer Operations Engineer, Carbon Accounting Auditor",
      training: "Global Green Hydrogen Standards, TANGEDCO Renewable Integration Guidelines, ESG Reporting Frameworks",
      incubation: "IITM Zero Emission Hydrogen Research Cluster, TN Green Energy Corporation"
    }
  };

  select.addEventListener('change', () => {
    const val = select.value;
    if (!val || !simulationProfiles[val]) {
      resultCard.classList.remove('active');
      return;
    }

    const data = simulationProfiles[val];
    document.getElementById('simTitle').textContent = data.title;
    document.getElementById('simHubs').textContent = data.hubs;
    document.getElementById('simRoles').textContent = data.roles;
    document.getElementById('simTraining').textContent = data.training;
    document.getElementById('simIncubation').textContent = data.incubation;

    resultCard.classList.add('active');
  });
}

/**
 * 7. College Project Knowledge Quiz (index.html)
 */
function initQuiz() {
  const container = document.getElementById('quizContainer');
  if (!container || typeof QUIZ_QUESTIONS === 'undefined') return;

  let currentQuestionIndex = 0;
  let userScore = 0;
  let answersRecord = [];

  function renderQuestion() {
    if (currentQuestionIndex >= QUIZ_QUESTIONS.length) {
      renderQuizSummary();
      return;
    }

    const q = QUIZ_QUESTIONS[currentQuestionIndex];
    container.innerHTML = `
      <div class="card p-4 border-0 shadow-sm rounded-4" style="background: var(--bg-surface);">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <span class="badge bg-primary px-3 py-2 rounded-pill font-mono">Question ${currentQuestionIndex + 1} of ${QUIZ_QUESTIONS.length}</span>
          <span class="text-muted small">Current Score: ${userScore}</span>
        </div>
        <h5 class="fw-bold mb-3" style="color: var(--text-primary);">${q.question}</h5>
        <div class="options-list d-flex flex-column gap-2 mb-4">
          ${q.options.map((opt, idx) => `
            <button class="btn btn-outline-secondary text-start p-3 rounded-3 option-btn" data-index="${idx}" style="border-color: var(--border-subtle); color: var(--text-secondary);">
              <span class="fw-bold me-2">${String.fromCharCode(65 + idx)}.</span> ${opt}
            </button>
          `).join('')}
        </div>
        <div id="quizFeedbackBox" class="p-3 rounded-3 mb-3 d-none"></div>
        <div class="d-flex justify-content-end">
          <button id="nextQuestionBtn" class="btn btn-modern-primary px-4 d-none">Next Question &rarr;</button>
        </div>
      </div>
    `;

    const optionBtns = container.querySelectorAll('.option-btn');
    const feedbackBox = container.querySelector('#quizFeedbackBox');
    const nextBtn = container.querySelector('#nextQuestionBtn');

    optionBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const selectedIdx = parseInt(this.getAttribute('data-index'), 10);
        optionBtns.forEach(b => b.disabled = true);

        const isCorrect = selectedIdx === q.correctIndex;
        if (isCorrect) {
          userScore++;
          this.classList.remove('btn-outline-secondary');
          this.classList.add('btn-success');
          feedbackBox.className = 'p-3 rounded-3 mb-3 bg-success bg-opacity-10 border border-success text-success';
          feedbackBox.innerHTML = `<strong>Correct!</strong> ${q.explanation}`;
        } else {
          this.classList.remove('btn-outline-secondary');
          this.classList.add('btn-danger');
          optionBtns[q.correctIndex].classList.remove('btn-outline-secondary');
          optionBtns[q.correctIndex].classList.add('btn-success');
          feedbackBox.className = 'p-3 rounded-3 mb-3 bg-danger bg-opacity-10 border border-danger text-danger';
          feedbackBox.innerHTML = `<strong>Incorrect.</strong> ${q.explanation}`;
        }

        feedbackBox.classList.remove('d-none');
        nextBtn.classList.remove('d-none');
        answersRecord.push({ question: q.question, correct: isCorrect });
      });
    });

    nextBtn.addEventListener('click', () => {
      currentQuestionIndex++;
      renderQuestion();
    });
  }

  function renderQuizSummary() {
    const percentage = Math.round((userScore / QUIZ_QUESTIONS.length) * 100);
    container.innerHTML = `
      <div class="card p-4 border-0 shadow-sm rounded-4 text-center" style="background: var(--bg-surface);">
        <div class="display-4 fw-bold mb-2 text-primary">${userScore} / ${QUIZ_QUESTIONS.length}</div>
        <h4 class="fw-bold mb-3" style="color: var(--text-primary);">Quiz Completed (${percentage}%)</h4>
        <p class="text-secondary max-w-lg mx-auto mb-4">
          ${percentage >= 80 ? 'Exceptional mastery of Chennai 2029 research data, policy frameworks, and economic indicators!' : 'Good job! You have explored the core economic foundations and research findings of this BCA project.'}
        </p>
        <div class="d-flex justify-content-center gap-3">
          <button id="restartQuizBtn" class="btn btn-modern-primary">Retake Quiz</button>
          <a href="references.html" class="btn btn-modern-outline">Explore Research Sources</a>
        </div>
      </div>
    `;

    document.getElementById('restartQuizBtn').addEventListener('click', () => {
      currentQuestionIndex = 0;
      userScore = 0;
      answersRecord = [];
      renderQuestion();
    });
  }

  renderQuestion();
}

/**
 * 8. References Filter & 1-Click Citation Copy (references.html)
 */
function initReferencesCitationTool() {
  const filterBtns = document.querySelectorAll('[data-ref-filter]');
  const citationCards = document.querySelectorAll('.citation-card-col');
  const copyBtns = document.querySelectorAll('.copy-citation-btn');

  if (filterBtns.length && citationCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-ref-filter');
        citationCards.forEach(card => {
          const category = card.getAttribute('data-ref-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  copyBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const citationText = this.getAttribute('data-citation');
      if (!citationText) return;

      navigator.clipboard.writeText(citationText).then(() => {
        const origHtml = this.innerHTML;
        this.innerHTML = `<i class="bi bi-check2"></i> Copied!`;
        this.classList.add('btn-success');
        setTimeout(() => {
          this.innerHTML = origHtml;
          this.classList.remove('btn-success');
        }, 2000);
      }).catch(err => {
        console.error('Clipboard copy failed:', err);
      });
    });
  });
}
