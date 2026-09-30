/**
 * Portfolio Data Configuration
 * Identitas Utama: Angel's Cahaya Sutrisno (Aca)
 */
const portfolioData = {
  profile: {
    name: "Angel's Cahaya Sutrisno",
    title: {
      id: ["Pelajar PPLG SMKN 2 Surakarta", "Junior Web Developer", "Creative Enthusiast"],
      en: ["PPLG Student at SMKN 2 Surakarta", "Junior Web Developer", "Creative Enthusiast"]
    },
    badge: {
      id: "🎓 Pelajar • XI PPLG B • SMKN 2 Surakarta",
      en: "🎓 Student • XI PPLG B • SMKN 2 Surakarta"
    },
    bioShort: {
      id: "Pelajar Pengembangan Perangkat Lunak dan Gim (PPLG) di SMKN 2 Surakarta yang antusias di pengembangan web, pemrograman perangkat lunak, dan eksplorasi teknologi kreatif digital.",
      en: "Software and Game Development (PPLG) student at SMKN 2 Surakarta passionate about web development, software programming, and creative digital technology exploration."
    },
    about: {
      id: `Halo! Saya Angel's Cahaya Sutrisno, akrab disapa Aca. Lahir di Sukoharjo, 9 Mei 2010, dan berdomisili di Sukoharjo, Jawa Tengah, Indonesia. Saat ini saya adalah pelajar kelas XI PPLG B di SMK Negeri 2 Surakarta (2025 – Sekarang) dengan fokus pembelajaran Rekayasa Perangkat Lunak, Pemrograman Berorientasi Objek (OOP), Pengembangan Web (HTML, PHP, MySQL), Dasar Pemrograman Java, dan Pengembangan Aplikasi Mobile (Android Studio). Saya senang berkolaborasi dalam tim, menulis naskah kreatif, dan memecahkan masalah lewat debugging kode dengan teliti.`,
      en: `Hello! I'm Angel's Cahaya Sutrisno, also called Aca. Born in Sukoharjo, May 9th 2010, and based in Sukoharjo, Central Java, Indonesia. I am currently a student of class XI PPLG B at SMK Negeri 2 Surakarta (2025 – Present) focusing on Software Engineering, Object-Oriented Programming (OOP), Web Development (HTML, PHP, MySQL), Java Fundamentals, and Mobile App Development (Android Studio). I enjoy team collaboration, creative scriptwriting, and solving problems through careful code debugging.`
    },
    stats: [
      { number: 1, suffix: "+", label: { id: "Tahun di PPLG", en: "Year in PPLG" } },
      { number: 5, suffix: "+", label: { id: "Proyek Sekolah", en: "School Projects" } },
      { number: 10, suffix: "+", label: { id: "Kolaborasi Tim", en: "Team Collaborations" } },
      { number: 100, suffix: "%", label: { id: "Semangat Belajar", en: "Learning Spirit" } }
    ],
    contactInfo: {
      email: "acaaaprtduwa@gamil.com",
      phone: "+62 81328245425",
      location: "Sukoharjo, Jawa Tengah, Indonesia",
      availability: {
        id: "Pelajar Aktif • Terbuka untuk Kolaborasi & Proyek Sekolah",
        en: "Active Student • Open for Collaboration & School Projects"
      }
    },
    socialLinks: {
      github: "https://github.com/acaaimut",
      linkedin: "https://github.com/acaaimut",
      twitter: "https://github.com/acaaimut",
      instagram: "https://github.com/acaaimut"
    }
  },

  skills: [
    {
      category: "Pemrograman & Database",
      items: [
        { name: "Java (Dasar OOP)", level: 80, icon: "java" },
        { name: "PHP & MySQL", level: 82, icon: "database" },
        { name: "HTML / CSS", level: 88, icon: "html" },
        { name: "JavaScript Dasar", level: 75, icon: "javascript" }
      ]
    },
    {
      category: "Pengembangan Web & Aplikasi",
      items: [
        { name: "Visual Studio Code", level: 90, icon: "vscode" },
        { name: "Android Studio & AVD", level: 78, icon: "android" },
        { name: "Deployment (Vercel)", level: 75, icon: "vercel" },
        { name: "Git & GitHub", level: 85, icon: "git" }
      ]
    },
    {
      category: "Alat, Kreativitas & Soft Skills",
      items: [
        { name: "Microsoft Office & Google Workspace", level: 88, icon: "office" },
        { name: "Kerjasama Tim & Komunikasi", level: 92, icon: "team" },
        { name: "Kreativitas & Penulisan Naskah", level: 90, icon: "creative" },
        { name: "Problem Solving & Manajemen Waktu", level: 87, icon: "brain" }
      ]
    }
  ],

  projects: [
    {
      id: "wawancara-kantin-4",
      category: "web",
      title: {
        id: "Wawancara & Laporan Kewirausahaan - Kantin 4 SMKN 2 Surakarta",
        en: "Entrepreneurship Interview & Report - Canteen 4 SMKN 2 Surakarta"
      },
      description: {
        id: "Riset langsung dan wawancara dengan pelaku usaha Kantin 4 SMKN 2 Surakarta serta penyusunan laporan ringkas sebagai tugas kelompok kewirausahaan (Agustus 2026).",
        en: "Field research and interviews with the owner of Canteen 4 SMKN 2 Surakarta and compiling a concise report as part of an entrepreneurship group assignment (August 2026)."
      },
      gradient: "linear-gradient(135deg, #ff5a9a 0%, #ff85c2 100%)",
      accentColor: "#ff5a9a",
      tags: ["Riset Lapangan", "Wawancara", "Kewirausahaan", "Laporan Kelompok"],
      featured: true,
      demoUrl: "https://github.com/acaaimut",
      githubUrl: "https://github.com/acaaimut",
      highlights: {
        id: [
          "Melakukan observasi dan wawancara langsung dengan pemilik usaha kantin sekolah.",
          "Menyusun laporan ringkas yang terstruktur hasil temuan lapangan bersama tim.",
          "Melatih kemampuan komunikasi, kerjasama tim, dan analisis usaha mikro."
        ],
        en: [
          "Conducted direct observation and interviews with the school canteen business owner.",
          "Compiled a structured concise report of field findings collaboratively.",
          "Trained communication, teamwork, and micro-business analysis skills."
        ]
      }
    },
    {
      id: "naskah-drama-jawa",
      category: "uiux",
      title: {
        id: "Naskah Drama Komedi Berbahasa Jawa - HUT RI ke-81",
        en: "Javanese Comedy Drama Script - 81st Independence Day"
      },
      description: {
        id: "Merancang, menyusun, dan merevisi naskah drama komedi berbahasa Jawa beserta arahan panggung untuk pementasan peringatan HUT Kemerdekaan RI ke-81 di lingkungan masyarakat (Juli – Agustus 2026). Dokumen SKRIP DRAMA lengkap 3 halaman dengan daftar tokoh & pemeran dua kelompok: Ibu-Ibu Arisan dan Anak Muda.",
        en: "Designed, drafted, and revised a Javanese comedy drama script with stage directions for the 81st Independence Day celebration (July – August 2026). Complete 3-page SCRIPT DRAMA document with full cast: Ibu-Ibu Arisan & Anak Muda groups."
      },
      gradient: "linear-gradient(135deg, #ff7eb8 0%, #ffb3d1 100%)",
      accentColor: "#ff7eb8",
      tags: ["Penulisan Kreatif", "Naskah Drama", "Bahasa Jawa", "Sutradara Panggung", "SKRIP DRAMA.docx"],
      featured: true,
      demoUrl: "https://github.com/acaaimut",
      githubUrl: "https://github.com/acaaimut",
      highlights: {
        id: [
          "Menyusun dokumen SKRIP DRAMA: Daftar Tokoh & Pemeran lengkap — 7 karakter Ibu-Ibu Arisan + Kelompok Anak Muda.",
          "Karakter utama: BU HESTI (Nora) Ketua RT kalem & bijak, BU YENI (Dini) biang gosip suka pamer emas, BU YAYUK (Putri) kompor gosip, BU KRIS (Difa) lidah setajam silet, BU TITIN (Nayla) penengah ramah, BU ARUM (Nahs) kritis berpatokan fakta, BU FEBRI ibu Aura/tante Ila gaya Gen Z yang elegan.",
          "Menulis dialog komedi berbahasa Jawa yang menghibur, arahan panggung, dan alur cerita yang mengalir hingga siap pentas — 1.161 kata, 3 halaman."
        ],
        en: [
          "Compiled SKRIP DRAMA document: full Cast & Characters — 7 Ibu-Ibu Arisan characters + Anak Muda group.",
          "Main cast: BU HESTI (Nora) calm & wise RT leader, BU YENI (Dini) gossip queen who flaunts gold, BU YAYUK (Putri) gossip instigator, BU KRIS (Difa) sharp-tongued, BU TITIN (Nayla) friendly mediator, BU ARUM (Nahs) critical fact-based mediator, BU FEBRI — Aura's mother/Ila's aunt, chill Gen Z style defender.",
          "Wrote entertaining Javanese comedy dialogues, stage directions, and flowing storyline — 1,161 words, 3 pages, stage-ready."
        ]
      }
    },
    {
      id: "proyek-pplg-sekolah",
      category: "ai",
      title: {
        id: "Proyek Pengembangan Perangkat Lunak - PPLG SMKN 2 Surakarta",
        en: "Software Development Projects - PPLG SMKN 2 Surakarta"
      },
      description: {
        id: "Kumpulan proyek latihan berbasis Java, integrasi database PHP & MySQL, serta eksplorasi pembuatan aplikasi mobile dasar menggunakan Android Studio selama masa studi di PPLG.",
        en: "Collection of practice projects based on Java, PHP & MySQL database integration, and exploration of basic mobile app creation using Android Studio during PPLG studies."
      },
      gradient: "linear-gradient(135deg, #ff8fab 0%, #ff5a9a 100%)",
      accentColor: "#ff8fab",
      tags: ["Java", "PHP", "MySQL", "Android Studio", "HTML/CSS"],
      featured: true,
      demoUrl: "https://github.com/acaaimut",
      githubUrl: "https://github.com/acaaimut",
      highlights: {
        id: [
          "Membuat program Java berorientasi objek (OOP) sebagai latihan logika dan struktur data.",
          "Membangun CRUD web sederhana dengan PHP & MySQL dan deploy via Vercel.",
          "Eksplorasi aplikasi mobile dasar dengan Android Studio & Android Virtual Device (AVD)."
        ],
        en: [
          "Built object-oriented Java programs to practice logic and data structures.",
          "Developed simple CRUD web apps with PHP & MySQL and deployed via Vercel.",
          "Explored basic mobile apps using Android Studio & Android Virtual Device (AVD)."
        ]
      }
    }
  ],

  experiences: [
    {
      period: "Agustus 2026",
      periodEn: "August 2026",
      role: { id: "Riset & Wawancara Kewirausahaan", en: "Entrepreneurship Research & Interview" },
      company: "Kantin 4 SMKN 2 Surakarta",
      location: "Surakarta — Tugas Kelompok",
      description: {
        id: "Melakukan riset langsung dan wawancara dengan pelaku usaha kantin sekolah serta menyusun laporan ringkas sebagai bagian dari tugas kelompok kewirausahaan. Melatih komunikasi, observasi lapangan, dan penulisan laporan.",
        en: "Conducted field research and interviews with the school canteen entrepreneur and compiled a concise report as part of an entrepreneurship group assignment. Trained communication, field observation, and report writing."
      },
      badges: ["Wawancara", "Riset", "Kewirausahaan", "Kerjasama Tim"]
    },
    {
      period: "Juli – Agustus 2026",
      periodEn: "July – August 2026",
      role: { id: "Penulis Naskah Drama Kreatif", en: "Creative Drama Scriptwriter" },
      company: "Pementasan HUT RI ke-81 Lingkungan Masyarakat",
      location: "Sukoharjo / Karanganyar",
      description: {
        id: "Merancang, menyusun, dan merevisi naskah drama komedi berbahasa Jawa beserta arahan panggung untuk pementasan acara peringatan HUT Kemerdekaan RI ke-81. Mengasah kreativitas, penulisan, dan manajemen pementasan.",
        en: "Designed, drafted, and revised a Javanese comedy drama script with stage directions for the 81st Independence Day celebration. Sharpened creativity, writing, and stage management."
      },
      badges: ["Penulisan Kreatif", "Bahasa Jawa", "Arahan Panggung", "Kreativitas"]
    },
    {
      period: "2025 – Sekarang",
      periodEn: "2025 – Present",
      role: { id: "Pelajar PPLG - Proyek Pengembangan Perangkat Lunak", en: "PPLG Student - Software Development Projects" },
      company: "SMK Negeri 2 Surakarta - XI PPLG B",
      location: "Surakarta",
      description: {
        id: "Mengembangkan berbagai proyek latihan berbasis Java, integrasi database PHP & MySQL, serta eksplorasi pembuatan aplikasi mobile dasar menggunakan Android Studio. Fokus pada Rekayasa Perangkat Lunak, OOP, dan Pengembangan Web.",
        en: "Developing various practice projects based on Java, PHP & MySQL database integration, and basic mobile app exploration using Android Studio. Focused on Software Engineering, OOP, and Web Development."
      },
      badges: ["Java", "PHP", "MySQL", "Android Studio", "HTML/CSS"]
    }
  ],

  education: [
    {
      period: "2025 – Sekarang",
      degree: { id: "SMK Negeri 2 Surakarta - Kelas XI PPLG B", en: "SMK Negeri 2 Surakarta - Class XI PPLG B" },
      institution: "Jurusan Pengembangan Perangkat Lunak dan Gim (PPLG)",
      description: {
        id: "Fokus Pembelajaran: Rekayasa Perangkat Lunak, Pemrograman Berorientasi Objek (OOP), Pengembangan Web (HTML, PHP, MySQL), Dasar Pemrograman Java, dan Pengembangan Aplikasi Mobile (Android Studio). Domisili: Sukoharjo, Jawa Tengah. TTL: Sukoharjo, 9 Mei 2010.",
        en: "Learning Focus: Software Engineering, Object-Oriented Programming (OOP), Web Development (HTML, PHP, MySQL), Java Fundamentals, and Mobile Application Development (Android Studio). Domicile: Sukoharjo, Central Java. Born: Sukoharjo, May 9th 2010."
      }
    },
    {
      period: "Minat & Hobi",
      degree: { id: "Minat Profesional & Hobi Pribadi", en: "Professional Interests & Personal Hobbies" },
      institution: "Pengembangan Diri",
      description: {
        id: "Hobi: Membaca novel, bernyanyi, dan memasak. Minat Profesional: Pengembangan web, pemrograman perangkat lunak, dan eksplorasi teknologi kreatif digital. Soft Skills: Kerjasama tim, komunikasi, problem solving & manajemen waktu.",
        en: "Hobbies: Reading novels, singing, and cooking. Professional Interests: Web development, software programming, and creative digital technology exploration. Soft Skills: Teamwork, communication, problem solving & time management."
      }
    }
  ],

  testimonials: [
    {
      name: "Guru PPLG",
      role: { id: "Pembimbing, SMKN 2 Surakarta", en: "Mentor, SMKN 2 Surakarta" },
      text: {
        id: "Aca adalah siswi yang teliti dalam debugging dan sangat aktif berkolaborasi dalam proyek kelompok. Semangat belajarnya luar biasa.",
        en: "Aca is a meticulous student in debugging and very active in collaborating on group projects. Her learning spirit is outstanding."
      },
      avatarInitial: "GP",
      rating: 5
    },
    {
      name: "Rekan Kelas XI PPLG B",
      role: { id: "Teman Satu Tim Proyek", en: "Project Teammate" },
      text: {
        id: "Kerja bareng Aca sangat menyenangkan. Dia kreatif, komunikatif, dan selalu membantu saat ada error kode yang sulit ditemukan.",
        en: "Working with Aca is a pleasure. She is creative, communicative, and always helpful when there's a tricky code bug."
      },
      avatarInitial: "AK",
      rating: 5
    },
    {
      name: "Panitia HUT RI ke-81",
      role: { id: "Lingkungan Masyarakat", en: "Community Committee" },
      text: {
        id: "Naskah drama komedi berbahasa Jawa karya Aca berhasil menghibur warga dan membuat acara HUT RI semakin meriah!",
        en: "Aca's Javanese comedy drama script successfully entertained the community and made the Independence Day event even more festive!"
      },
      avatarInitial: "PH",
      rating: 5
    }
  ]
};
