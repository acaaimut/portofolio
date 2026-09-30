/**
 * Main Interactive Application Script
 * Features: Multi-language support (ID/EN), Dark/Light theme, Particle constellation canvas,
 * dynamic typewriter, animated counters, project filtering, modal viewer, testimonial slider,
 * contact form handler, and responsive navigation.
 */

// State Management
let currentLang = localStorage.getItem('portfolio_lang') || 'id';
let currentTheme = localStorage.getItem('portfolio_theme') || 'dark';
let activeFilter = 'all';
let currentTestimonialIndex = 0;
let typewriterInterval = null;

// Translation Dictionary for Static UI Elements
const translations = {
  id: {
    navHome: "Beranda",
    navAbout: "Tentang",
    navSkills: "Keahlian",
    navProjects: "Proyek",
    navExp: "Pengalaman",
    navContact: "Kontak",
    hireMe: "Hubungi Saya",
    heroGreeting: "Halo, Saya",
    btnViewWork: "Eksplorasi Proyek",
    btnResume: "Lihat CV / Resume",
    aboutSubtitle: "Mengenal Saya",
    aboutTitle: "Membawa Ide Menjadi Solusi Digital Berkualitas",
    aboutDesc: "Komitmen terhadap kode bersih, antarmuka elegan, dan teknologi berdampak nyata.",
    hiTitle1: "Clean & Modular Code",
    hiDesc1: "Arsitektur kode terstruktur, mudah di-maintenance, dan siap diskalakan ke jutaan pengguna.",
    hiTitle2: "Integrasi AI Mutakhir",
    hiDesc2: "Penerapan model LLM, Retrieval-Augmented Generation (RAG), dan agen pintar untuk efisiensi bisnis.",
    hiTitle3: "Performa Cepat & SEO",
    hiDesc3: "Optimasi Core Web Vitals maksimal, pemuatan instan, dan struktur ramah mesin pencari.",
    hiTitle4: "Desain Interaktif & Ramah",
    hiDesc4: "Visual memikat dengan micro-interactions yang mulus dan standar aksesibilitas WCAG.",
    skillsSubtitle: "Keahlian & Teknologi",
    skillsTitle: "Keahlian Teknis & Toolkit",
    skillsDesc: "Teknologi pilihan yang digunakan untuk mewujudkan solusi digital tangguh dan modern.",
    projectsSubtitle: "Portofolio Karya",
    projectsTitle: "Proyek Pilihan & Studi Kasus",
    projectsDesc: "Kumpulan proyek unggulan dari aplikasi web berkinerja tinggi hingga implementasi kecerdasan buatan.",
    filterAll: "Semua Proyek",
    filterWeb: "Web App",
    filterAI: "AI & Machine Learning",
    filterMobile: "Mobile / IoT",
    filterUIUX: "UI/UX Design",
    expSubtitle: "Perjalanan Karir",
    expTitle: "Pengalaman & Pendidikan",
    expDesc: "Rekam jejak profesional, kontribusi industri, dan latar belakang akademis.",
    btnExperience: "Pengalaman Kerja",
    btnEducation: "Pendidikan & Sertifikasi",
    testiSubtitle: "Testimoni",
    testiTitle: "Apa Kata Rekan & Klien",
    testiDesc: "Ulasan tulus dari kolaborator dan pemimpin tim yang pernah bekerja sama.",
    contactSubtitle: "Hubungi Saya",
    contactTitle: "Mari Memulai Kolaborasi",
    contactDesc: "Punya proyek menarik atau ingin berdiskusi seputar teknologi? Pintu saya selalu terbuka.",
    contactInfoHeading: "Informasi Kontak",
    contactInfoSub: "Silakan kirim pesan melalui formulir atau kontak langsung melalui saluran di bawah.",
    formName: "Nama Lengkap *",
    formEmail: "Alamat Email *",
    formSubject: "Subjek / Topik *",
    formMessage: "Pesan *",
    btnSendMsg: "Kirim Pesan Sekarang",
    footerRights: "Seluruh Hak Cipta Dilindungi. Dibuat dengan presisi dan performa tinggi.",
    modalKeyHighlights: "Pencapaian & Fitur Utama",
    modalLiveDemo: "Kunjungi Live Demo",
    modalViewRepo: "Lihat Source Code",
    resumeModalTitle: "Curriculum Vitae",
    resumeSummaryTitle: "Ringkasan Profesional",
    resumeTechCore: "Keahlian Utama",
    btnPrintResume: "Cetak / Simpan PDF",
    toastSuccess: "Terima kasih! Pesan Anda telah berhasil terkirim.",
    toastFieldsRequired: "Harap isi semua kolom formulir dengan benar."
  },
  en: {
    navHome: "Home",
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navExp: "Experience",
    navContact: "Contact",
    hireMe: "Get in Touch",
    heroGreeting: "Hello, I am",
    btnViewWork: "Explore Projects",
    btnResume: "View CV / Resume",
    aboutSubtitle: "About Me",
    aboutTitle: "Transforming Ideas into High-Impact Digital Solutions",
    aboutDesc: "Dedicated to clean architecture, captivating interfaces, and high-performance engineering.",
    hiTitle1: "Clean & Modular Code",
    hiDesc1: "Structured codebases designed for maintainability and effortless scalability to millions.",
    hiTitle2: "Cutting-Edge AI Integration",
    hiDesc2: "Leveraging LLMs, Retrieval-Augmented Generation (RAG), and smart agentic workflows.",
    hiTitle3: "Blazing Speed & SEO",
    hiDesc3: "Maximized Core Web Vitals, instantaneous load times, and search-optimized semantic markup.",
    hiTitle4: "Delightful UX & Accessibility",
    hiDesc4: "Captivating visuals with fluid micro-interactions adhering to WCAG standards.",
    skillsSubtitle: "Skills & Stack",
    skillsTitle: "Technical Expertise & Toolkit",
    skillsDesc: "Proven technologies applied to build robust, modern, and mission-critical products.",
    projectsSubtitle: "Featured Portfolio",
    projectsTitle: "Showcased Projects & Case Studies",
    projectsDesc: "Curated work spanning high-throughput web applications to applied artificial intelligence.",
    filterAll: "All Projects",
    filterWeb: "Web Apps",
    filterAI: "AI & ML",
    filterMobile: "Mobile / IoT",
    filterUIUX: "UI/UX Design",
    expSubtitle: "Career Journey",
    expTitle: "Experience & Education",
    expDesc: "Professional track record, industry accomplishments, and academic foundations.",
    btnExperience: "Work Experience",
    btnEducation: "Education & Certs",
    testiSubtitle: "Testimonials",
    testiTitle: "What Colleagues & Clients Say",
    testiDesc: "Genuine feedback from collaborators, engineering leaders, and founders.",
    contactSubtitle: "Get in Touch",
    contactTitle: "Let's Build Something Exceptional",
    contactDesc: "Have an exciting project or want to discuss engineering ideas? Let's connect.",
    contactInfoHeading: "Contact Details",
    contactInfoSub: "Drop a line through the form or reach out directly through any of the channels below.",
    formName: "Full Name *",
    formEmail: "Email Address *",
    formSubject: "Subject / Topic *",
    formMessage: "Message *",
    btnSendMsg: "Send Message Now",
    footerRights: "All Rights Reserved. Engineered with precision and peak performance.",
    modalKeyHighlights: "Key Architecture & Highlights",
    modalLiveDemo: "Visit Live Demo",
    modalViewRepo: "View Source Code",
    resumeModalTitle: "Curriculum Vitae",
    resumeSummaryTitle: "Executive Summary",
    resumeTechCore: "Core Competencies",
    btnPrintResume: "Print / Save PDF",
    toastSuccess: "Thank you! Your message has been sent successfully.",
    toastFieldsRequired: "Please fill out all required fields properly."
  }
};

/* ==========================================================================
   DOM Elements & Initialization
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initCanvasParticles();
  initNavbar();
  renderProfile();
  renderStats();
  renderSkills();
  renderMarquee();
  renderProjects();
  renderTimeline('exp');
  renderTestimonial(0);
  initModals();
  initContactForm();
  initScrollAnimations();
});

/* ==========================================================================
   Theme Management (Dark / Light)
   ========================================================================== */
function initTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon();

  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', currentTheme);
      localStorage.setItem('portfolio_theme', currentTheme);
      updateThemeIcon();
    });
  }
}

function updateThemeIcon() {
  const moonIcon = document.getElementById('theme-icon-moon');
  const sunIcon = document.getElementById('theme-icon-sun');
  if (currentTheme === 'light') {
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
  } else {
    moonIcon.style.display = 'block';
    sunIcon.style.display = 'none';
  }
}

/* ==========================================================================
   Language Management (ID / EN)
   ========================================================================== */
function initLanguage() {
  const langBtn = document.getElementById('lang-toggle-btn');
  const langIndicator = document.getElementById('lang-indicator');
  
  if (langIndicator) {
    langIndicator.textContent = currentLang === 'id' ? 'EN' : 'ID';
  }

  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'id' ? 'en' : 'id';
      localStorage.setItem('portfolio_lang', currentLang);
      langIndicator.textContent = currentLang === 'id' ? 'EN' : 'ID';
      applyTranslations();
      renderProfile();
      renderStats();
      renderProjects();
      renderTimeline(document.getElementById('toggle-edu-btn').classList.contains('active') ? 'edu' : 'exp');
      renderTestimonial(currentTestimonialIndex);
    });
  }

  applyTranslations();
}

function applyTranslations() {
  const dict = translations[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update HTML lang attribute
  document.documentElement.setAttribute('lang', currentLang);
}

/* ==========================================================================
   Dynamic Profile Rendering
   ========================================================================== */
function renderProfile() {
  const { profile } = portfolioData;

  document.getElementById('hero-name').textContent = profile.name;
  document.getElementById('hero-badge-text').textContent = profile.badge[currentLang];
  document.getElementById('hero-bio-short').textContent = profile.bioShort[currentLang];
  document.getElementById('about-long-bio').textContent = profile.about[currentLang];
  document.getElementById('footer-year').textContent = new Date().getFullYear();

  // Resume modal info
  const resumeName = document.getElementById('resume-name');
  if (resumeName) resumeName.textContent = profile.name;
  const resumeSummary = document.getElementById('resume-summary');
  if (resumeSummary) resumeSummary.textContent = profile.about[currentLang];

  // Render Social Links
  const socialsContainer = document.getElementById('hero-socials');
  const contactSocialsContainer = document.getElementById('contact-socials');
  const footerSocialsContainer = document.getElementById('footer-socials');

  const socialIconsHtml = `
    <a href="${profile.socialLinks.github}" target="_blank" rel="noopener noreferrer" class="social-link" title="GitHub" aria-label="GitHub">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    </a>
    <a href="${profile.socialLinks.linkedin}" target="_blank" rel="noopener noreferrer" class="social-link" title="LinkedIn" aria-label="LinkedIn">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    </a>
    <a href="${profile.socialLinks.twitter}" target="_blank" rel="noopener noreferrer" class="social-link" title="X / Twitter" aria-label="X Twitter">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
      </svg>
    </a>
    <a href="${profile.socialLinks.instagram}" target="_blank" rel="noopener noreferrer" class="social-link" title="Instagram" aria-label="Instagram">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    </a>
  `;

  if (socialsContainer) socialsContainer.innerHTML = socialIconsHtml;
  if (contactSocialsContainer) contactSocialsContainer.innerHTML = socialIconsHtml;
  if (footerSocialsContainer) footerSocialsContainer.innerHTML = socialIconsHtml;

  // Render About Info List
  const aboutInfoList = document.getElementById('about-info-list');
  if (aboutInfoList) {
    aboutInfoList.innerHTML = `
      <div class="about-info-item">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        <span><strong>Email:</strong> ${profile.contactInfo.email}</span>
      </div>
      <div class="about-info-item">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        <span><strong>${currentLang === 'id' ? 'Lokasi' : 'Location'}:</strong> ${profile.contactInfo.location}</span>
      </div>
      <div class="about-info-item">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        <span><strong>Status:</strong> ${profile.contactInfo.availability[currentLang]}</span>
      </div>
    `;
  }

  // Render Contact Channels
  const contactChannels = document.getElementById('contact-channels');
  if (contactChannels) {
    contactChannels.innerHTML = `
      <div class="contact-item">
        <div class="contact-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        </div>
        <div>
          <div class="contact-item-label">Email</div>
          <div class="contact-item-value">${profile.contactInfo.email}</div>
        </div>
      </div>
      <div class="contact-item">
        <div class="contact-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </div>
        <div>
          <div class="contact-item-label">WhatsApp / Phone</div>
          <div class="contact-item-value">${profile.contactInfo.phone}</div>
        </div>
      </div>
      <div class="contact-item">
        <div class="contact-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        </div>
        <div>
          <div class="contact-item-label">${currentLang === 'id' ? 'Lokasi Kerja' : 'Work Base'}</div>
          <div class="contact-item-value">${profile.contactInfo.location}</div>
        </div>
      </div>
    `;
  }

  // Start or restart typewriter
  startTypewriter();
}

/* ==========================================================================
   Typewriter Animation
   ========================================================================== */
function startTypewriter() {
  if (typewriterInterval) clearInterval(typewriterInterval);
  const words = portfolioData.profile.title[currentLang];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const targetElement = document.getElementById('typewriter-text');
  if (!targetElement) return;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      targetElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      targetElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? 40 : 90;

    if (!isDeleting && charIndex === currentWord.length) {
      speed = 1800; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      speed = 400; // Pause before typing next word
    }

    typewriterInterval = setTimeout(type, speed);
  }

  type();
}

/* ==========================================================================
   Stats Bar Counter Animation
   ========================================================================== */
function renderStats() {
  const container = document.getElementById('stats-container');
  if (!container) return;

  container.innerHTML = portfolioData.profile.stats.map(stat => `
    <div class="stat-card">
      <div class="stat-number" data-target="${stat.number}">${stat.number}${stat.suffix}</div>
      <div class="stat-label">${stat.label[currentLang]}</div>
    </div>
  `).join('');
}

/* ==========================================================================
   Skills Matrix & Progress Bars
   ========================================================================== */
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = portfolioData.skills.map(cat => `
    <div class="glass-card skill-category-card">
      <h3 class="skill-category-title">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
        ${cat.category}
      </h3>
      <div class="skill-list">
        ${cat.items.map(item => `
          <div class="skill-item">
            <div class="skill-info">
              <span>${item.name}</span>
              <span>${item.level}%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" data-level="${item.level}" style="width: 0%;"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  // Trigger progress bar animations when in view
  animateSkillBars();
}

function animateSkillBars() {
  const bars = document.querySelectorAll('.skill-progress');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const level = bar.getAttribute('data-level');
        bar.style.width = level + '%';
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.2 });

  bars.forEach(bar => observer.observe(bar));
}

/* ==========================================================================
   Tech Marquee Ribbon
   ========================================================================== */
function renderMarquee() {
  const marquee = document.getElementById('marquee-content');
  if (!marquee) return;

  const techs = [
    "React.js", "Next.js 14", "TypeScript", "Python", "FastAPI",
    "OpenAI API", "PostgreSQL", "Docker", "Tailwind CSS", "Node.js",
    "GraphQL", "Redis", "Figma", "Git CI/CD", "AWS Cloud"
  ];

  // Repeat twice for seamless infinite loop
  const list = [...techs, ...techs];
  marquee.innerHTML = list.map(t => `
    <div class="tech-tag">
      <span style="color:var(--accent-primary);">⚡</span> ${t}
    </div>
  `).join('');
}

/* ==========================================================================
   Projects Grid & Filtering
   ========================================================================== */
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const filtered = activeFilter === 'all'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === activeFilter);

  grid.innerHTML = filtered.map(p => `
    <div class="glass-card project-card" onclick="openProjectModal('${p.id}')">
      <div class="project-preview" style="background: ${p.gradient};">
        <div class="project-preview-mockup">
          <div class="mockup-header">
            <span class="mockup-dot"></span>
            <span class="mockup-dot"></span>
            <span class="mockup-dot"></span>
          </div>
          <div class="mockup-body">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
            <div style="font-weight:700; font-size: 0.95rem;">${p.title[currentLang]}</div>
          </div>
        </div>
      </div>

      <div class="project-body">
        <div class="project-tags">
          ${p.tags.slice(0, 3).map(tag => `<span class="tag-badge">${tag}</span>`).join('')}
          ${p.tags.length > 3 ? `<span class="tag-badge">+${p.tags.length - 3}</span>` : ''}
        </div>

        <h3 class="project-title">${p.title[currentLang]}</h3>
        <p class="project-desc">${p.description[currentLang]}</p>

        <div class="project-footer">
          <span class="project-view-detail">
            ${currentLang === 'id' ? 'Detail Proyek' : 'View Case Study'}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </span>

          <div class="project-actions" onclick="event.stopPropagation()">
            <a href="${p.demoUrl}" target="_blank" rel="noopener noreferrer" class="project-action-btn" title="Live Demo">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
            <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-action-btn" title="GitHub Repo">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  // Setup filter button click handlers
  document.querySelectorAll('#projects-filter .filter-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('#projects-filter .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter');
      renderProjects();
    };
  });
}

/* ==========================================================================
   Project Details Modal
   ========================================================================== */
function openProjectModal(projectId) {
  const project = portfolioData.projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('project-modal');
  const banner = document.getElementById('modal-banner');
  const tagsContainer = document.getElementById('modal-tags');
  const title = document.getElementById('modal-project-title');
  const desc = document.getElementById('modal-project-desc');
  const highlightsList = document.getElementById('modal-highlights-list');
  const demoBtn = document.getElementById('modal-demo-btn');
  const githubBtn = document.getElementById('modal-github-btn');

  banner.style.background = project.gradient;
  title.textContent = project.title[currentLang];
  desc.textContent = project.description[currentLang];

  tagsContainer.innerHTML = project.tags.map(t => `<span class="tag-badge">${t}</span>`).join('');

  highlightsList.innerHTML = project.highlights[currentLang].map(h => `
    <li>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>${h}</span>
    </li>
  `).join('');

  demoBtn.href = project.demoUrl;
  githubBtn.href = project.githubUrl;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

/* ==========================================================================
   Experience & Education Timeline
   ========================================================================== */
function renderTimeline(type) {
  const container = document.getElementById('timeline-container');
  const expBtn = document.getElementById('toggle-exp-btn');
  const eduBtn = document.getElementById('toggle-edu-btn');

  if (type === 'exp') {
    expBtn.classList.add('active');
    eduBtn.classList.remove('active');

    container.innerHTML = portfolioData.experiences.map(item => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="glass-card timeline-content">
          <div class="timeline-period">${currentLang === 'id' ? item.period : item.periodEn}</div>
          <h3 class="timeline-role">${item.role[currentLang]}</h3>
          <div class="timeline-org">
            <span>${item.company}</span>
            <span>•</span>
            <span style="font-size: 0.85rem; color: var(--text-muted);">${item.location}</span>
          </div>
          <p class="timeline-desc">${item.description[currentLang]}</p>
          <div class="timeline-badges">
            ${item.badges.map(b => `<span class="tag-badge">${b}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
  } else {
    eduBtn.classList.add('active');
    expBtn.classList.remove('active');

    container.innerHTML = portfolioData.education.map(item => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="glass-card timeline-content">
          <div class="timeline-period">${item.period}</div>
          <h3 class="timeline-role">${item.degree[currentLang]}</h3>
          <div class="timeline-org">${item.institution}</div>
          <p class="timeline-desc">${item.description[currentLang]}</p>
        </div>
      </div>
    `).join('');
  }
}

// Timeline Toggle Listeners
document.getElementById('toggle-exp-btn')?.addEventListener('click', () => renderTimeline('exp'));
document.getElementById('toggle-edu-btn')?.addEventListener('click', () => renderTimeline('edu'));

/* ==========================================================================
   Testimonial Slider
   ========================================================================== */
function renderTestimonial(index) {
  const card = document.getElementById('testimonial-card');
  const dotsContainer = document.getElementById('testimonial-dots');
  const { testimonials } = portfolioData;
  if (!card || !dotsContainer) return;

  const t = testimonials[index];
  currentTestimonialIndex = index;

  const starsHtml = Array(t.rating).fill('★').join('');

  card.innerHTML = `
    <div class="testimonial-stars" style="font-size: 1.2rem;">${starsHtml}</div>
    <p class="testimonial-quote">“${t.text[currentLang]}”</p>
    <div class="testimonial-author">
      <div class="author-avatar">${t.avatarInitial}</div>
      <div>
        <div class="author-name">${t.name}</div>
        <div class="author-role">${t.role[currentLang]}</div>
      </div>
    </div>
  `;

  dotsContainer.innerHTML = testimonials.map((_, i) => `
    <button class="testimonial-dot-btn ${i === index ? 'active' : ''}" onclick="renderTestimonial(${i})" aria-label="Slide ${i+1}"></button>
  `).join('');
}

// Auto-advance testimonials every 6 seconds
setInterval(() => {
  const next = (currentTestimonialIndex + 1) % portfolioData.testimonials.length;
  renderTestimonial(next);
}, 6000);

/* ==========================================================================
   Modals & Resume Viewer
   ========================================================================== */
function initModals() {
  // Project Modal listeners
  const projectModal = document.getElementById('project-modal');
  const projectCloseBtn = document.getElementById('modal-close-btn');

  projectCloseBtn?.addEventListener('click', closeProjectModal);
  projectModal?.addEventListener('click', (e) => {
    if (e.target === projectModal) closeProjectModal();
  });

  // Resume Modal listeners
  const resumeModal = document.getElementById('resume-modal');
  const downloadCvBtn = document.getElementById('btn-download-cv');
  const resumeCloseBtn = document.getElementById('resume-modal-close-btn');

  downloadCvBtn?.addEventListener('click', () => {
    resumeModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  resumeCloseBtn?.addEventListener('click', () => {
    resumeModal.classList.remove('active');
    document.body.style.overflow = '';
  });

  resumeModal?.addEventListener('click', (e) => {
    if (e.target === resumeModal) {
      resumeModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // ESC key to close any active modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      resumeModal?.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

/* ==========================================================================
   Contact Form Submission & Toast
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !subject || !message) {
      showToast(translations[currentLang].toastFieldsRequired);
      return;
    }

    // Submit Simulation
    const submitBtn = document.getElementById('btn-submit-message');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Mengirim...</span>`;

    setTimeout(() => {
      showToast(translations[currentLang].toastSuccess);
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }, 1000);
  });
}

function showToast(msg) {
  const toast = document.getElementById('toast-notification');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

/* ==========================================================================
   Navbar Behavior & Mobile Menu
   ========================================================================== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky navbar shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Highlight active section link
    const scrollPos = window.scrollY + 120;
    document.querySelectorAll('section[id]').forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // Mobile hamburger toggle
  hamburger?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Close mobile menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
}

/* ==========================================================================
   Interactive Constellation Particle Canvas
   ========================================================================== */
function initCanvasParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const numParticles = Math.min(Math.floor((width * height) / 18000), 70);
  const particles = [];

  for (let i = 0; i < numParticles; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: Math.random() * 2 + 1
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const particleColor = isDark ? 'rgba(99, 102, 241, 0.4)' : 'rgba(99, 102, 241, 0.25)';
    const lineColor = isDark ? 'rgba(168, 85, 247, 0.08)' : 'rgba(99, 102, 241, 0.06)';

    // Update & draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = particleColor;
      ctx.fill();

      // Connect close particles with lines
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = lineColor;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  draw();
}

/* ==========================================================================
   Scroll Reveal Animations
   ========================================================================== */
function initScrollAnimations() {
  const cards = document.querySelectorAll('.glass-card, .highlight-box');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    card.style.opacity = '0.9';
    card.style.transform = 'translateY(10px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(card);
  });
}
