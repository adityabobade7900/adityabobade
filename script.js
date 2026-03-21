
/* ── EmailJS init ── */
window.addEventListener('load', () => {
  if (typeof emailjs !== 'undefined') {
    emailjs.init({ publicKey: '0N2fESVNhnOSRN8Xa' });
    console.log('%c✅ EmailJS initialised', 'color:#00d4ff;font-weight:bold');
  } else {
    console.error('❌ EmailJS SDK not found');
  }
});

/**
 * ADITYA BOBADE — PORTFOLIO SCRIPT
 * Data Analyst | Digital Noir Portfolio
 * -----------------------------------------------
 * Sections:
 *  1. Data (Skills, Projects, Metrics)
 *  2. Loader
 *  3. Custom Cursor
 *  4. Theme Toggle (Dark/Light, localStorage)
 *  5. Navbar (Scroll + Mobile)
 *  6. Typing Animation
 *  7. Particle Background
 *  8. Skills Render + Filter + Progress Bars
 *  9. Projects Render + Filter + Modal
 * 10. Metrics Counter Animation
 * 11. Carousel (Dashboard)
 * 12. Contact Form Validation
 * 13. Back to Top
 * 14. AOS Init
 * 15. Smooth Scroll
 */

'use strict';

/* ==========================================
   1. DATA
   ========================================== */

const SKILLS = [
  { name: 'Python', cat: 'programming', icon: 'fab fa-python', level: 85, color: '#3776ab' },
  { name: 'Pandas', cat: 'analysis', icon: 'fas fa-table', level: 70, color: '#150458' },
  { name: 'NumPy', cat: 'analysis', icon: 'fas fa-calculator', level: 65, color: '#013243' },
  { name: 'Power BI', cat: 'visualization', icon: 'fas fa-chart-pie', level: 80, color: '#f2c811' },
  { name: 'Matplotlib', cat: 'visualization', icon: 'fas fa-chart-line', level: 65, color: '#11557c' },
  { name: 'MySQL', cat: 'database', icon: 'fas fa-database', level: 75, color: '#00758f' },
  { name: 'Scikit-learn', cat: 'ml', icon: 'fas fa-brain', level: 60, color: '#f89939' },
  { name: 'SQL', cat: 'database', icon: 'fas fa-server', level: 75, color: '#336791' },
  { name: 'Seaborn', cat: 'visualization', icon: 'fas fa-chart-bar', level: 65, color: '#4c72b0' },
  { name: 'Excel', cat: 'analysis', icon: 'fas fa-file-excel', level: 80, color: '#217346' },
  { name: 'Git', cat: 'programming', icon: 'fab fa-git-alt', level: 80, color: '#f05032' },
  { name: 'Jupyter', cat: 'programming', icon: 'fas fa-code', level: 85, color: '#f37626' },
];

const PROJECTS = [
  {
    id: 'finsight',
    title: 'FinSight',
    subtitle: 'Financial Fraud Detection System',
    desc: 'End-to-end ML pipeline analyzing 284,807 credit card transactions to detect fraud with 98.7% precision and 0.908 ROC-AUC.',
    icon: '🔍',
    cats: ['ml', 'data'],
    badges: ['ML', 'Python', 'Power BI'],
    metrics: [
      { val: '98.7%', lbl: 'Precision' },
      { val: '0.908', lbl: 'ROC-AUC' },
      { val: '284K', lbl: 'Records' },
    ],
    tech: ['Python', 'Pandas', 'Scikit-learn', 'RandomForest', 'Power BI', 'Matplotlib'],
    github: 'https://github.com/adityabobade7900/FinSight-Financial-Anomaly-Detection',
    modal: {
      fullDesc: `FinSight is a production-grade fraud detection system built on the Kaggle Credit Card Fraud dataset — 284,807 real-world transactions. The core challenge: extreme class imbalance (only 0.17% fraud). I solved this with SMOTE oversampling and class-weight balancing, then built and tuned a Random Forest classifier.\n\nThe final model achieves 98.7% precision and 0.908 ROC-AUC — meaning almost every transaction flagged as fraud actually is fraud, minimizing false positives that frustrate genuine customers.`,
      insights: [
        'Handled extreme class imbalance (0.17% fraud rate) using SMOTE + class_weight balancing',
        'Feature importance analysis revealed V14, V4, V12 as top predictors — hidden PCA-transformed fraud signals',
        'Built interactive Power BI dashboard for executive-level reporting with drill-down capability',
        'Optimized decision threshold to minimize false positives while maintaining high recall',
        'Compared Logistic Regression, Decision Tree, Random Forest — RF outperformed by 12%',
      ],
      impact: 'In the real world, this system would flag ~8 fraudulent transactions per hour in a mid-size bank, potentially saving millions annually while keeping false alarm rates below 1.3%.',
      metrics: [
        { val: '98.7%', lbl: 'Precision' },
        { val: '0.908', lbl: 'ROC-AUC' },
        { val: '284,807', lbl: 'Transactions' },
        { val: '0.17%', lbl: 'Fraud Rate' },
      ],
    }
  },
  {
    id: 'ems',
    title: 'Employee Management System',
    subtitle: 'Full-Stack CRUD Application',
    desc: 'A Python + MySQL powered desktop application for complete employee lifecycle management — onboarding, records, departments, and reporting.',
    icon: '👥',
    cats: ['app', 'data'],
    badges: ['Python', 'MySQL', 'Tkinter'],
    metrics: [
      { val: '6', lbl: 'CRUD Ops' },
      { val: '4', lbl: 'Modules' },
      { val: '100%', lbl: 'Test Pass' },
    ],
    tech: ['Python', 'MySQL', 'mysql-connector', 'tkinter'],
    github: 'https://github.com/adityabobade7900/EMS_Project',
    modal: {
      fullDesc: `A real-world Employee Management System demonstrating full-stack thinking with Python and MySQL. Built for HR workflows — from onboarding a new hire to running departmental salary reports.\n\nDesigned with normalized database schemas, proper foreign key constraints, and input validation to mirror production-quality code. The GUI (tkinter) keeps it accessible for non-technical HR staff.`,
      insights: [
        'Normalized 3NF database schema with Employees, Departments, Salaries, and Attendance tables',
        'Implemented parameterized queries to prevent SQL injection vulnerabilities',
        'Built search and filter functionality across 4 employee attributes simultaneously',
        'Export-to-CSV feature for payroll integration with third-party systems',
        'Role-based access control differentiating HR managers vs regular employees',
      ],
      impact: 'Designed to handle 500+ employees with sub-second query response times. A starting point for enterprise HR tools that save 3-5 hours of manual record-keeping per week.',
      metrics: [
        { val: '6', lbl: 'CRUD Ops' },
        { val: '4', lbl: 'DB Tables' },
        { val: '3NF', lbl: 'DB Design' },
        { val: '500+', lbl: 'Employees' },
      ],
    }
  },
];

const METRICS = [
  { icon: '🚀', val: 2, suffix: '+', label: 'Projects Completed', duration: 1000 },
  { icon: '📊', val: 284807, suffix: '', label: 'Rows Analyzed', duration: 2200 },
  { icon: '🎯', val: 98.7, suffix: '%', label: 'Highest Accuracy', duration: 1800, isFloat: true },
  { icon: '🛠️', val: 10, suffix: '+', label: 'Tools Mastered', duration: 1400 },
];

/* ==========================================
   2. LOADER
   ========================================== */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.classList.add('hidden');
  }, 2000);
});

/* ==========================================
   3. CUSTOM CURSOR
   ========================================== */
const cursorDot = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');

let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;
let rafId;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top = mouseY + 'px';
});

function animateRing() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  cursorRing.style.left = ringX + 'px';
  cursorRing.style.top = ringY + 'px';
  rafId = requestAnimationFrame(animateRing);
}
animateRing();

// Hover effect on interactive elements
const hoverTargets = 'a, button, .skill-card, .project-card, .proj-filter, .skill-filter-btn';
document.addEventListener('mouseover', (e) => {
  if (e.target.closest(hoverTargets)) {
    cursorRing.classList.add('hover');
  }
});
document.addEventListener('mouseout', (e) => {
  if (e.target.closest(hoverTargets)) {
    cursorRing.classList.remove('hover');
  }
});

/* ==========================================
   4. THEME TOGGLE
   ========================================== */
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const html = document.documentElement;

// Restore saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeIcon(next);
});

function updateThemeIcon(theme) {
  themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

/* ==========================================
   5. NAVBAR
   ========================================== */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Scroll effect
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  // Active nav link
  const sections = document.querySelectorAll('section[id]');
  sections.forEach(section => {
    const top = section.offsetTop - 90;
    const bottom = top + section.offsetHeight;
    const link = document.querySelector(`.nav-link[href="#${section.id}"]`);
    if (link) link.classList.toggle('active', window.scrollY >= top && window.scrollY < bottom);
  });
});

// Mobile menu
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close menu on link click
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* ==========================================
   6. TYPING ANIMATION
   ========================================== */
const typedEl = document.getElementById('typedText');
const words = ['Data Analyst', 'Machine Learning Enthusiast', 'Turning Data into Insights'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimer;

function typeLoop() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    typedEl.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let delay = isDeleting ? 60 : 100;

  if (!isDeleting && charIndex === currentWord.length) {
    delay = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    delay = 400;
  }

  typingTimer = setTimeout(typeLoop, delay);
}

setTimeout(typeLoop, 800);

/* ==========================================
   7. PARTICLE BACKGROUND
   ========================================== */
(function initParticles() {
  const container = document.getElementById('particles');
  const count = window.innerWidth < 768 ? 20 : 50;

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const x = Math.random() * 100;
    const delay = Math.random() * 20;
    const duration = 15 + Math.random() * 25;
    const size = 1 + Math.random() * 3;

    p.style.cssText = `
      left: ${x}%;
      bottom: -10px;
      width: ${size}px;
      height: ${size}px;
      animation-delay: ${delay}s;
      animation-duration: ${duration}s;
    `;
    container.appendChild(p);
  }
})();

/* ==========================================
   8. SKILLS — RENDER + FILTER + PROGRESS
   ========================================== */
function renderSkills(filter = 'all') {
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = '';
  const filtered = filter === 'all' ? SKILLS : SKILLS.filter(s => s.cat === filter);

  filtered.forEach((skill, i) => {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.setAttribute('data-cat', skill.cat);
    card.style.animationDelay = `${i * 60}ms`;
    card.innerHTML = `
      <div class="skill-icon">
        <i class="${skill.icon}" style="color: ${skill.color}"></i>
      </div>
      <div class="skill-name">${skill.name}</div>
      <div class="skill-cat">${getCatLabel(skill.cat)}</div>
      <div class="skill-bar-wrap">
        <div class="skill-bar" data-level="${skill.level}" style="width: 0%"></div>
      </div>
      <div class="skill-level">${skill.level}%</div>
    `;
    grid.appendChild(card);
  });

  // Trigger progress bars after a short delay (visible animation)
  setTimeout(animateSkillBars, 200);
}

function getCatLabel(cat) {
  const labels = {
    programming: 'Programming', analysis: 'Data Analysis',
    visualization: 'Visualization', database: 'Database', ml: 'Machine Learning',
  };
  return labels[cat] || cat;
}

function animateSkillBars() {
  document.querySelectorAll('.skill-bar').forEach(bar => {
    const level = bar.getAttribute('data-level');
    bar.style.width = level + '%';
  });
}

// Also trigger when section enters viewport
const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) animateSkillBars(); });
}, { threshold: 0.2 });

const skillsSection = document.getElementById('skills');
if (skillsSection) skillsObserver.observe(skillsSection);

// Filter buttons
document.querySelectorAll('.skill-filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.skill-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderSkills(btn.dataset.filter);
  });
});

renderSkills(); // Initial render

/* ==========================================
   9. PROJECTS — RENDER + FILTER + MODAL
   ========================================== */
function renderProjects(cat = 'all') {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = '';

  const filtered = cat === 'all' ? PROJECTS : PROJECTS.filter(p => p.cats.includes(cat));

  filtered.forEach((project, i) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', i * 100);

    card.innerHTML = `
      <div class="proj-header">
        <div class="proj-icon">${project.icon}</div>
        <div class="proj-badges">
          ${project.badges.map(b => `<span class="proj-badge">${b}</span>`).join('')}
        </div>
      </div>
      <div class="proj-body">
        <h3 class="proj-title">${project.title}</h3>
        <div class="proj-subtitle">${project.subtitle}</div>
        <p class="proj-desc">${project.desc}</p>
        <div class="proj-metrics">
          ${project.metrics.map(m => `
            <div class="proj-metric">
              <span class="pm-val">${m.val}</span>
              <span class="pm-lbl">${m.lbl}</span>
            </div>
          `).join('')}
        </div>
        <div class="proj-stack">
          ${project.tech.map(t => `<span class="proj-tech">${t}</span>`).join('')}
        </div>
      </div>
      <div class="proj-footer">
        <button class="proj-btn-detail" data-id="${project.id}">
          View Details <i class="fas fa-arrow-right"></i>
        </button>
        <a href="${project.github}" target="_blank" rel="noopener" class="proj-gh" aria-label="GitHub">
          <i class="fab fa-github"></i>
        </a>
      </div>
    `;

    grid.appendChild(card);
    AOS.refresh();
  });

  // Bind detail buttons
  document.querySelectorAll('.proj-btn-detail').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.id));
  });
}

// Project filter
document.querySelectorAll('.proj-filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.proj-filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.cat);
  });
});

// Modal
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

function openModal(id) {
  const project = PROJECTS.find(p => p.id === id);
  if (!project) return;

  const m = project.modal;
  modalContent.innerHTML = `
    <div class="modal-icon">${project.icon}</div>
    <h2 class="modal-title">${project.title}</h2>
    <div class="modal-sub">${project.subtitle}</div>
    <p class="modal-desc">${m.fullDesc.replace(/\n/g, '<br/><br/>')}</p>

    <div class="modal-section-title">Key Metrics</div>
    <div class="modal-metrics">
      ${m.metrics.map(met => `
        <div class="modal-metric">
          <span class="mm-val">${met.val}</span>
          <span class="mm-lbl">${met.lbl}</span>
        </div>
      `).join('')}
    </div>

    <div class="modal-section-title">Key Insights</div>
    <div class="modal-insights">
      ${m.insights.map(ins => `
        <div class="modal-insight-item">
          <i class="fas fa-check-circle mi-icon"></i>
          <span class="mi-text">${ins}</span>
        </div>
      `).join('')}
    </div>

    <div class="modal-section-title">Business Impact</div>
    <p class="modal-desc">${m.impact}</p>

    <div class="modal-section-title">Tech Stack</div>
    <div class="modal-tech">
      ${project.tech.map(t => `<span class="modal-tech-tag">${t}</span>`).join('')}
    </div>

    <div class="modal-ctas">
      <a href="${project.github}" target="_blank" rel="noopener" class="btn-primary">
        <i class="fab fa-github"></i> View on GitHub
      </a>
      <button class="btn-ghost" onclick="closeModal()">Close</button>
    </div>
  `;

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

renderProjects(); // Initial render

/* ==========================================
   10. METRICS COUNTER ANIMATION
   ========================================== */
function renderMetrics() {
  const grid = document.getElementById('metricsGrid');
  METRICS.forEach(m => {
    const el = document.createElement('div');
    el.className = 'metric-item';
    el.innerHTML = `
      <div class="metric-icon">${m.icon}</div>
      <div class="metric-val">
        <span class="counter"
          data-target="${m.val}"
          data-duration="${m.duration}"
          data-float="${m.isFloat || false}">0</span><span class="metric-suffix">${m.suffix}</span>
      </div>
      <div class="metric-label">${m.label}</div>
    `;
    grid.appendChild(el);
  });
}

function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const duration = parseInt(el.dataset.duration);
  const isFloat = el.dataset.float === 'true';
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = eased * target;
    el.textContent = isFloat ? current.toFixed(1) : Math.floor(current).toLocaleString();
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = isFloat ? target.toFixed(1) : target.toLocaleString();
  }

  requestAnimationFrame(update);
}

// Trigger counters when metrics section is in view
const metricsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.counter').forEach(animateCounter);
      metricsObserver.disconnect();
    }
  });
}, { threshold: 0.3 });

renderMetrics();
const metricsSection = document.getElementById('metrics');
if (metricsSection) metricsObserver.observe(metricsSection);

/* ==========================================
   11. CAROUSEL (Dashboard Showcase)
   ========================================== */
(function initCarousel() {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.car-dots .dot');
  const prevBtn = document.getElementById('car-prev');
  const nextBtn = document.getElementById('car-next');

  if (!slides.length) return;

  let current = 0;
  let autoPlayTimer;

  function goTo(index) {
    slides[current].classList.remove('active');
    dots[current] && dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current] && dots[current].classList.add('active');
  }

  dots.forEach((dot, i) => dot.addEventListener('click', () => { goTo(i); resetAutoPlay(); }));
  prevBtn && prevBtn.addEventListener('click', () => { goTo(current - 1); resetAutoPlay(); });
  nextBtn && nextBtn.addEventListener('click', () => { goTo(current + 1); resetAutoPlay(); });

  function autoPlay() { autoPlayTimer = setInterval(() => goTo(current + 1), 4000); }
  function resetAutoPlay() { clearInterval(autoPlayTimer); autoPlay(); }

  autoPlay();
})();

/* ==========================================
   12. CONTACT FORM VALIDATION
   ========================================== */
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function setError(inputId, errorId, message) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);
  if (input) input.classList.add('error');
  if (error) error.textContent = message;
}

function clearError(inputId, errorId) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);
  if (input) input.classList.remove('error');
  if (error) error.textContent = '';
}

// Live validation
['cName', 'cEmail', 'cMessage'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('input', () => {
    if (el.value.trim()) el.classList.remove('error');
  });
});

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('cName').value.trim();
  const email = document.getElementById('cEmail').value.trim();
  const message = document.getElementById('cMessage').value.trim();
  let valid = true;

  // Clear previous errors
  clearError('cName', 'nameError');
  clearError('cEmail', 'emailError');
  clearError('cMessage', 'msgError');
  formFeedback.className = 'form-feedback';
  formFeedback.style.display = 'none';

  // Validate
  if (!name) { setError('cName', 'nameError', 'Name is required'); valid = false; }
  if (!email) { setError('cEmail', 'emailError', 'Email is required'); valid = false; }
  else if (!validateEmail(email)) { setError('cEmail', 'emailError', 'Enter a valid email address'); valid = false; }
  if (!message) { setError('cMessage', 'msgError', 'Message cannot be empty'); valid = false; }
  if (message.length < 10) { setError('cMessage', 'msgError', 'Message too short (min 10 chars)'); valid = false; }

  if (!valid) return;

  const submitBtn = document.getElementById('formSubmit');
  const submitText = document.getElementById('submitText');
  const submitIcon = document.getElementById('submitIcon');
  const subject = document.getElementById('cSubject').value.trim() || 'New message from Portfolio';

  // ─────────────────────────────────────────────
  // 🔑 EMAILJS CONFIG — Replace these 3 values
  //    after setting up at emailjs.com (FREE)
  // ─────────────────────────────────────────────
  const EMAILJS_SERVICE_ID = 'service_7oqs88p';   // ✅ Connected — bobade1436@gmail.com
  const EMAILJS_TEMPLATE_ID = 'template_xpkcxya';  // ⚠️ Paste your Template ID here
  const EMAILJS_PUBLIC_KEY = '0N2fESVNhnOSRN8Xa';   // ⚠️ Paste your Public Key here
  // ─────────────────────────────────────────────

  submitBtn.classList.add('loading');
  submitText.textContent = 'Sending...';
  submitIcon.className = 'fas fa-spinner fa-spin';

  try {
    // Check if EmailJS is loaded
    if (typeof emailjs === 'undefined') {
      throw new Error('EmailJS not loaded. Add the EmailJS script to index.html.');
    }

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        name: name,
        email: email,
        title: subject,
        message: message,
        time: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
      },
      { publicKey: EMAILJS_PUBLIC_KEY }
    );

    // ✅ SUCCESS — message landed in your inbox!
    submitBtn.classList.remove('loading');
    submitText.textContent = 'Send Message';
    submitIcon.className = 'fas fa-paper-plane';

    formFeedback.textContent = '✅ Message sent! I\'ll get back to you within 24 hours.';
    formFeedback.className = 'form-feedback success';
    contactForm.reset();

  } catch (err) {
    // ❌ ERROR
    console.error('EmailJS Error:', err);
    submitBtn.classList.remove('loading');
    submitText.textContent = 'Send Message';
    submitIcon.className = 'fas fa-paper-plane';

    // If keys aren't set yet, show a helpful dev message
    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') {
      formFeedback.textContent = '⚠️ EmailJS not configured yet. See script.js line ~650 to add your keys.';
    } else {
      formFeedback.textContent = '❌ Something went wrong. Please email me directly at aditya.bobade@email.com';
    }
    formFeedback.className = 'form-feedback error';
  }

  // Auto-hide feedback after 6 seconds
  setTimeout(() => {
    formFeedback.className = 'form-feedback';
  }, 6000);
});

/* ==========================================
   13. BACK TO TOP
   ========================================== */
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 400);
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ==========================================
   14. AOS INIT
   ========================================== */
AOS.init({
  duration: 700,
  easing: 'ease-out-cubic',
  once: true,
  offset: 80,
});

/* ==========================================
   15. SMOOTH SCROLL (fallback for older browsers)
   ========================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const top = target.offsetTop - (parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 72);
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ==========================================
   BONUS: Keyboard navigation for modal
   ========================================== */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab' && modalOverlay.classList.contains('open')) {
    const modal = document.getElementById('projectModal');
    const focusable = modal.querySelectorAll('a, button, input, textarea');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

console.log('%c👋 Hey recruiter! Built by Aditya Bobade — Let\'s connect.',
  'background: linear-gradient(135deg, #00d4ff, #7c3aed); color: white; font-size: 14px; padding: 8px 16px; border-radius: 4px;');
