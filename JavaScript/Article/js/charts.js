/**
 * CHENNAI 2029 – Interactive Visualizations (Chart.js)
 * Manages responsive data charts across the 3 core pages.
 */

// Helper to determine chart text/grid colors based on active theme
function getChartThemeColors() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  return {
    textColor: isDark ? '#cbd5e1' : '#475569',
    gridColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
    accentBlue: '#3b82f6',
    accentCyan: '#06b6d4',
    accentPurple: '#8b5cf6',
    accentAmber: '#f59e0b',
    accentEmerald: '#10b981'
  };
}

let activeFutureItChart = null;
let activeCounterfactualChart = null;
let activeBeyondChart = null;

/**
 * PAGE 1: Future IT Growth Projections Chart
 */
function initFutureItChart() {
  const ctx = document.getElementById('futureItChart');
  if (!ctx) return;

  const colors = getChartThemeColors();

  // Dataset configurations
  const datasetsConfig = {
    exports: {
      label: 'TN IT/Software Exports (₹ Thousand Crore)',
      data: [158, 182, 205, 238, 275, 315, 360, 410],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.15)',
      fill: true,
      unit: '₹k Cr'
    },
    gcc: {
      label: 'Chennai GCC Headcount (in Thousands)',
      data: [105, 128, 165, 195, 230, 260, 290, 320],
      borderColor: '#06b6d4',
      backgroundColor: 'rgba(6, 182, 212, 0.15)',
      fill: true,
      unit: 'k Professionals'
    },
    ai: {
      label: 'Enterprise AI & Automation Adoption (%)',
      data: [8, 16, 29, 46, 64, 76, 85, 91],
      borderColor: '#8b5cf6',
      backgroundColor: 'rgba(139, 92, 246, 0.15)',
      fill: true,
      unit: '%'
    }
  };

  const labels = ['2022 (Fact)', '2023 (Fact)', '2024 (Fact)', '2025 (Est)', '2026 (Proj)', '2027 (Proj)', '2028 (Proj)', '2029 (Proj)'];

  if (activeFutureItChart) {
    activeFutureItChart.destroy();
  }

  activeFutureItChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: datasetsConfig.exports.label,
        data: datasetsConfig.exports.data,
        borderColor: datasetsConfig.exports.borderColor,
        backgroundColor: datasetsConfig.exports.backgroundColor,
        tension: 0.35,
        fill: true,
        pointBackgroundColor: datasetsConfig.exports.borderColor,
        pointRadius: 5,
        pointHoverRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: colors.textColor, font: { family: 'Plus Jakarta Sans', weight: '600' } }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return ` ${context.dataset.label}: ${context.raw}`;
            }
          }
        }
      },
      scales: {
        x: {
          ticks: { color: colors.textColor, font: { family: 'Plus Jakarta Sans' } },
          grid: { color: colors.gridColor }
        },
        y: {
          ticks: { color: colors.textColor, font: { family: 'Plus Jakarta Sans' } },
          grid: { color: colors.gridColor }
        }
      }
    }
  });

  // Toggle buttons
  const buttons = document.querySelectorAll('[data-future-chart-metric]');
  buttons.forEach(btn => {
    btn.addEventListener('click', function() {
      buttons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const metric = this.getAttribute('data-future-chart-metric');
      const selected = datasetsConfig[metric];

      if (activeFutureItChart && selected) {
        activeFutureItChart.data.datasets[0].label = selected.label;
        activeFutureItChart.data.datasets[0].data = selected.data;
        activeFutureItChart.data.datasets[0].borderColor = selected.borderColor;
        activeFutureItChart.data.datasets[0].backgroundColor = selected.backgroundColor;
        activeFutureItChart.data.datasets[0].pointBackgroundColor = selected.borderColor;
        activeFutureItChart.update();
      }
    });
  });
}

/**
 * PAGE 2: Counterfactual Economic Model Chart
 */
function initCounterfactualChart() {
  const ctx = document.getElementById('counterfactualChart');
  if (!ctx) return;

  const colors = getChartThemeColors();

  if (activeCounterfactualChart) {
    activeCounterfactualChart.destroy();
  }

  const sectors = [
    'Automotive & Heavy Industry',
    'Electronics & Component Hardware',
    'Healthcare & Medical Tourism',
    'Maritime Ports & Logistics',
    'Education & Deep R&D',
    'IT & Digital Software Services'
  ];

  activeCounterfactualChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: sectors,
      datasets: [
        {
          label: 'Baseline Actual Economy (% Share of Output)',
          data: [32, 16, 11, 12, 9, 20],
          backgroundColor: '#3b82f6',
          borderRadius: 6
        },
        {
          label: 'Hypothetical Non-IT Scenario (% Illustrative Share)',
          data: [47, 24, 16, 15, 12, 0],
          backgroundColor: '#ea580c',
          borderRadius: 6
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          labels: { color: colors.textColor, font: { family: 'Plus Jakarta Sans', weight: '600' } }
        },
        tooltip: {
          callbacks: {
            afterLabel: function() {
              return 'Illustrative comparative model';
            }
          }
        }
      },
      scales: {
        x: {
          ticks: { color: colors.textColor, font: { family: 'Plus Jakarta Sans', size: 11 } },
          grid: { color: colors.gridColor }
        },
        y: {
          ticks: { 
            color: colors.textColor,
            callback: value => value + '%'
          },
          grid: { color: colors.gridColor },
          suggestedMax: 55
        }
      }
    }
  });
}

/**
 * PAGE 3: Alternative Industries Diversification Radar Chart
 */
function initBeyondChart() {
  const ctx = document.getElementById('beyondDiversificationChart');
  if (!ctx) return;

  const colors = getChartThemeColors();

  if (activeBeyondChart) {
    activeBeyondChart.destroy();
  }

  activeBeyondChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: [
        'Automotive & EV',
        'Electronics Hardware',
        'Medical Value Tourism',
        'Deep-Sea Maritime Ports',
        'Clean Energy & Offshore Wind',
        'IIT-M Deep R&D Incubation',
        'Heritage & Creative Culture',
        'Agro-Logistics & Aquaculture'
      ],
      datasets: [{
        label: 'Chennai 2029 Non-IT Growth Readiness (Index 0-100)',
        data: [96, 92, 91, 88, 84, 90, 76, 74],
        backgroundColor: 'rgba(5, 150, 105, 0.25)',
        borderColor: '#059669',
        pointBackgroundColor: '#10b981',
        pointBorderColor: '#ffffff',
        pointHoverBackgroundColor: '#ffffff',
        pointHoverBorderColor: '#059669',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: colors.textColor, font: { family: 'Plus Jakarta Sans', weight: '600' } }
        }
      },
      scales: {
        r: {
          angleLines: { color: colors.gridColor },
          grid: { color: colors.gridColor },
          pointLabels: {
            color: colors.textColor,
            font: { family: 'Plus Jakarta Sans', size: 11, weight: '600' }
          },
          ticks: {
            backdropColor: 'transparent',
            color: colors.textColor,
            stepSize: 20
          },
          suggestedMin: 50,
          suggestedMax: 100
        }
      }
    }
  });
}

// Re-render charts when theme changes
window.addEventListener('themeChanged', () => {
  if (activeFutureItChart) initFutureItChart();
  if (activeCounterfactualChart) initCounterfactualChart();
  if (activeBeyondChart) initBeyondChart();
});

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  initFutureItChart();
  initCounterfactualChart();
  initBeyondChart();
});
