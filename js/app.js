/**
 * ==========================================================================
 * MIX WITH DJ KEVIN - THE ULTIMATE DJ RESOURCE
 * Official Application Engine (js/app.js)
 * Clean, Modular, High-Performance Vanilla JavaScript
 * ==========================================================================
 */

// Global App State
const DJApp = {
  // Config
  whatsappNumber: "919082535931", // DJ Kevin Official WhatsApp
  superprofileBase: "https://superprofile.bio/mixwithdjkevin",
  
  // Data Store
  products: [
    {
      id: "prod-001",
      title: "17GB Mega Bollywood & English Commercial MP3 Bundle",
      category: "mega-bundles",
      categoryLabel: "Mega Bundle",
      description: "17GB collection of Bollywood and English commercial DJ tracks. Perfect for clubs, weddings, private events and professional DJs.",
      price: "₹1,200",
      badge: "🔥 BEST SELLER",
      image: "images/products/17gb-mega-bundle.png",
      buyLink: "https://superprofile.bio/vp/🔥-17gb-new-year-2026-dj-mega-bundle",
      isBestSeller: true,
      isFeatured: true,
      isFree: false,
      tracklist: [
        "128 BPM - Bollywood Commercial Club Refix",
        "130 BPM - English Peak Hour Festival Intro Edit",
        "100 BPM - Punjabi Dancehall Drum Fix",
        "126 BPM - Retro Bollywood Disco Re-Drum",
        "128 BPM - Global Mainstage Anthem Cut"
      ]
    },
    {
      id: "prod-002",
      title: "17GB Rekordbox + Serato Hot Cue Mega Bundle",
      category: "mega-bundles",
      categoryLabel: "Mega Bundle",
      description: "Professional Rekordbox and Serato playlist bundle with hot cues ready for live performance.",
      price: "₹1,999",
      badge: "⭐ PRO DJ PICK",
      image: "images/products/rekordbox-serato-bundle.png",
      buyLink: "https://superprofile.bio/vp/🔥-new-year-2026-–-17gb-rekordbox-dj-playlist-bundle-🔥",
      isBestSeller: true,
      isFeatured: true,
      isFree: false,
      tracklist: [
        "A Cue: 8-Bar Intro Clean Beat",
        "B Cue: Vocal Hook Drop Marker",
        "C Cue: Snare Roll Build-Up Trigger",
        "D Cue: High-Energy Drop Hot Cue",
        "E Cue: Outro 8-Bar Loop Buffer"
      ]
    },
    {
      id: "prod-003",
      title: "DJ Original Extended Mega Pack – 10GB",
      category: "original-playlists",
      categoryLabel: "Original Playlist",
      description: "Extended DJ edits designed for seamless professional mixing.",
      price: "₹399",
      badge: "🎵 DJ ESSENTIAL",
      image: "images/products/dj-original-extended-pack.png",
      buyLink: "https://superprofile.bio/vp/dj-original-extended-mega-pack-–-10gb",
      isBestSeller: false,
      isFeatured: true,
      isFree: false,
      tracklist: [
        "Bollywood Extended Intro Club Edit (320kbps)",
        "Commercial Dance Extended Re-Drum Cut",
        "Afro Beat Extended Rhythm Fix",
        "Deep House Extended Transition Mix"
      ]
    },
    {
      id: "prod-004",
      title: "11GB Roadshow MP3 Collection – Haldi, Visarjan & More",
      category: "roadshow-collection",
      categoryLabel: "Roadshow Collection",
      description: "Roadshow collection for Haldi, Visarjan, processions and outdoor DJ events.",
      price: "₹399",
      badge: "🎉 EVENT READY",
      image: "images/products/11gb-roadshow-collection.png",
      buyLink: "https://superprofile.bio/vp/🎶-11gb-roadshow-mp3-collection-–-haldi--visarjan---more-🎶",
      isBestSeller: false,
      isFeatured: true,
      isFree: false,
      tracklist: [
        "Haldi Ceremony High Energy Dholak Beat",
        "Visarjan Procession Heavy Bass Tasha Cut",
        "Street Baraat Brass Horns Smasher",
        "Ganpati Utsav Loud Speaker Soundcheck Fix"
      ]
    },
    {
      id: "prod-005",
      title: "Bollywood Wedding Dance Hits – Rekordbox Hot Cues",
      category: "wedding-collection",
      categoryLabel: "Wedding Collection",
      description: "Professional Bollywood wedding playlist prepared with Rekordbox Hot Cues.",
      price: "₹599",
      badge: "💍 WEDDING ESSENTIAL",
      image: "images/products/bollywood-wedding-rekordbox.png",
      buyLink: "https://superprofile.bio/vp/🎧-bollywood-wedding-dance-hits-–-original---remix-pack--rekordbox---mp3-",
      isBestSeller: true,
      isFeatured: true,
      isFree: false,
      tracklist: [
        "Bride Entrance Slow Strings & Flute Build",
        "Sangeet High Energy Family Group Dance Cut",
        "Baraat High Tempo Dhol Slam (Cue Tagged)",
        "Couple Romantic First Dance Soft Grid"
      ]
    },
    {
      id: "prod-006",
      title: "Bollywood Wedding Dance Hits – MP3 Version",
      category: "wedding-collection",
      categoryLabel: "Wedding Collection",
      description: "Wedding DJ playlist in MP3 format.",
      price: "₹399",
      badge: "🎵 MP3 COLLECTION",
      image: "images/products/bollywood-wedding-mp3.png",
      buyLink: "https://superprofile.bio/vp/🎧-bollywood-wedding-dance-hits-–-original---remix-pack--mp3-version-",
      isBestSeller: false,
      isFeatured: true,
      isFree: false,
      tracklist: [
        "Wedding Sangeet Hit Medley MP3",
        "Celebration Dhol & Brass Mashup",
        "Bollywood Couple Dance MP3 Master",
        "Party Finale Peak Hour MP3 Cut"
      ]
    },
    {
      id: "prod-007",
      title: "Bollywood Original Hot Cues",
      category: "remix-hot-cues",
      categoryLabel: "Hot Cue Collection",
      description: "Professional Bollywood original playlist with Hot Cues.",
      price: "₹1,500",
      badge: "🔥 MOST POPULAR",
      image: "images/products/bollywood-original-hot-cues.png",
      buyLink: "https://superprofile.bio/vp/bollywood-original-hot-cues--your-instant-party-starter--634",
      isBestSeller: true,
      isFeatured: true,
      isFree: false,
      tracklist: [
        "Original Track A: 8-Bar Intro & Vocal Cue",
        "Original Track B: Beat-grid Mapped Chorus Cue",
        "Original Track C: Clean Outro Loop Cue",
        "Original Track D: Instant Drop Marker"
      ]
    },
    {
      id: "prod-008",
      title: "Bollywood Remix Hot Cues",
      category: "remix-hot-cues",
      categoryLabel: "Hot Cue Collection",
      description: "High-energy Bollywood remix playlist with professionally prepared Hot Cues.",
      price: "₹999",
      badge: "⚡ REMIX EDITION",
      image: "images/products/bollywood-remix-hot-cues.png",
      buyLink: "https://superprofile.bio/vp/bollywood-dance-remix-hot-cues--your-instant-party-starter-",
      isBestSeller: false,
      isFeatured: true,
      isFree: false,
      tracklist: [
        "Remix Cut A: Toneplay Scratch Cue",
        "Remix Cut B: Bass Drop Fire Trigger",
        "Remix Cut C: Snare Roll Build Cue",
        "Remix Cut D: Outro 8-Bar Fade Marker"
      ]
    },
    {
      id: "prod-009",
      title: "Garba 15GB Pack 2026",
      category: "festival-collection",
      categoryLabel: "Festival Collection",
      description: "Professional Navratri Garba playlist collection.",
      price: "₹399",
      badge: "🪔 FESTIVAL SPECIAL",
      image: "images/products/garba-15gb-pack.png",
      buyLink: "https://superprofile.bio/vp/15gb-navratri-garba-pack-",
      isBestSeller: false,
      isFeatured: true,
      isFree: false,
      tracklist: [
        "Dodhiya 2-Taali Traditional Rhythm Pack",
        "3-Taali High Energy Garba Beats",
        "Sanledo Non-Stop Fusion Beats",
        "Mataji Aarti & Raas Garba Finale"
      ]
    },
    {
      id: "prod-010",
      title: "Free Rekordbox Demo Playlist",
      category: "free-downloads",
      categoryLabel: "Free Download",
      description: "Download a free Rekordbox demo playlist and experience the quality before purchasing.",
      price: "FREE",
      badge: "🎁 FREE DOWNLOAD",
      image: "images/products/free-rekordbox-demo.png",
      buyLink: "https://superprofile.bio/vp/free-demo-rekordbox-playlist-with-hot-cue",
      isBestSeller: false,
      isFeatured: true,
      isFree: true,
      tracklist: [
        "Free Demo Track 1 (Rekordbox Cue Mapped)",
        "Free Demo Track 2 (8-Bar Intro Cut)",
        "Free Demo Track 3 (Camelot Key Mapped)"
      ]
    }
  ],

  courses: [
    {
      id: "course-online",
      title: "ONLINE DJ MASTERCLASS (PRO CERTIFIED)",
      subtitle: "Learn Professional DJing From Anywhere In The World",
      badge: "Most Popular",
      level: "Beginner to Advanced",
      duration: "6 Weeks (Live 1-on-1 + HD Video Portal)",
      price: "₹14,999",
      image: "images/hero/academy-studio.png",
      syllabus: [
        "Beatmatching by ear & phrase matching fundamentals",
        "Rekordbox & Serato DJ Pro full ecosystem setup",
        "Music curation, key matching & library management",
        "Creative EQing, FX transitions & loop slicing",
        "Hot cue preparation & live toneplay techniques",
        "Gig preparation, branding & client booking strategies"
      ]
    },
    {
      id: "course-offline",
      title: "OFFLINE IN-STUDIO ACADEMY PROGRAM",
      subtitle: "Hands-On Practical Training On Pioneer CDJ-3000 & DJM-A9",
      badge: "In-Studio Experience",
      level: "Comprehensive Hands-On",
      duration: "8 Weeks (In-Person Studio Batch)",
      price: "₹29,999",
      image: "images/hero/dj-kevin-about.png",
      syllabus: [
        "Direct physical training on industry standard Pioneer flagship gear",
        "Scratching, turntablism, transformer & chirp scratch drills",
        "Club acoustic control, booth monitors & mixer gain staging",
        "Live audience reading, energy management & peak-hour sets",
        "Studio recording your first official 60-minute promo mix",
        "Lifetime access to DJ Kevin's VIP playlist vault & mentorship"
      ]
    }
  ],

  freeDownloads: [
    {
      id: "dl-101",
      title: "DJ Separator File — 90 to 160 BPM",
      desc: "DJ separator files covering 90–160 BPM for DJ practice, edits and creative mixing.",
      fileUrl: "https://www.mediafire.com/folder/gzo42tuhoyhea/DJ+KEVIN+SEPARATOR",
      image: "images/downloads/dl-01-separator.svg",
      category: "AUDIO TOOLS",
      tag: "90–160 BPM"
    },
    {
      id: "dl-102",
      title: "Rekordbox & MP3 Playlist Demo",
      desc: "Free Rekordbox and MP3 playlist demo files for DJs who want to explore playlist organization and DJ preparation.",
      fileUrl: "https://www.mediafire.com/folder/vb9xkvdpbfkka/DJ+KEVIN+FREE",
      image: "images/downloads/dl-02-rekordbox-demo.svg",
      category: "PLAYLIST DEMO",
      tag: "REKORDBOX & MP3"
    },
    {
      id: "dl-103",
      title: "Bollywood Original Dance Tracklist",
      desc: "A useful Bollywood original dance tracklist for DJs looking for tracks and ideas for their sets.",
      fileUrl: "https://www.mediafire.com/file/1x81cwdp1kwc58y/BOLLY_ORG_DANCE_pdf.pdf/file",
      image: "images/downloads/dl-03-bollywood-tracklist.svg",
      category: "TRACKLIST PDF",
      tag: "BOLLYWOOD ORIGINAL"
    },
    {
      id: "dl-104",
      title: "Independence Day MP3 Files — 2026",
      desc: "Free Independence Day MP3 files for DJ sets and events in 2026.",
      fileUrl: "https://drive.google.com/drive/folders/1jDop4lzvcXihbg3FIK-KxjoI7nKhMRKH?usp=sharing",
      image: "images/downloads/dl-04-independence-day.svg",
      category: "EVENT MP3 PACK",
      tag: "2026 EDITION"
    },
    {
      id: "dl-105",
      title: "Free Deep House Bollywood",
      desc: "Free Deep House and Bollywood music resources for DJs and music lovers.",
      fileUrl: "https://drive.google.com/drive/folders/1aRmZ8QE71GxRfUKj1NFzv7j2obSnEpif?usp=sharing",
      image: "images/downloads/dl-05-deep-house-bollywood.svg",
      category: "MUSIC RESOURCE",
      tag: "DEEP HOUSE & BOLLYWOOD"
    },
    {
      id: "dl-106",
      title: "DJ Kevin Instrumentals for Events",
      desc: "Free DJ Kevin instrumental tracks suitable for events, background music and DJ use.",
      fileUrl: "https://drive.google.com/file/d/1pBhGzlB3OlQNXTFGKkT5ga1UoWvHvChw/view?usp=drive_link",
      image: "images/downloads/dl-06-event-instrumentals.svg",
      category: "INSTRUMENTALS",
      tag: "EVENT BACKGROUND"
    },
    {
      id: "dl-107",
      title: "Free Rekordbox Sample Pack",
      desc: "Free DJ sample pack for Rekordbox. Download the sample pack and import it into Rekordbox using the appropriate library/import workflow.",
      fileUrl: "https://www.mediafire.com/file/cb2w8ydrosgurzh/SAMPLE_PACK.spp/file",
      image: "images/downloads/dl-07-rekordbox-sample-pack.svg",
      category: "SAMPLE PACK",
      tag: ".SPP FORMAT"
    },
    {
      id: "dl-108",
      title: "Pioneer Unlock Device Settings & Service PDFs",
      desc: "Useful PDF resources covering Pioneer DJ unlock-device settings and service-location information.",
      fileUrl: "https://www.mediafire.com/folder/mm3a49frli1jt/pdf",
      image: "images/downloads/dl-08-pioneer-unlock-pdf.svg",
      category: "TECHNICAL PDF",
      tag: "PIONEER DJ GUIDES"
    },
    {
      id: "dl-109",
      title: "DJ Folder Structure for Samples",
      desc: "A useful folder-organization structure for DJs who want to keep samples and DJ resources properly organized.",
      fileUrl: "https://drive.google.com/file/d/1Bhs5sLiOATscsI5ieyrtFnaHj3wG25TO/view?usp=drive_link",
      image: "images/downloads/dl-09-folder-structure.svg",
      category: "ORGANIZATION",
      tag: "DIRECTORY TEMPLATE"
    },
    {
      id: "dl-110",
      title: "DJ Track List for Beginners",
      desc: "A beginner-friendly DJ tracklist to help new DJs understand what tracks they can start with and how to build their music library.",
      fileUrl: "https://drive.google.com/drive/folders/1o6Dpf7CGW_shBAXeKAJlyHGtze1cBfST?usp=drive_link",
      image: "images/downloads/dl-10-beginner-tracklist.svg",
      category: "BEGINNER GUIDE",
      tag: "STARTER TRACKLIST"
    }
  ],

  // Init Method
  init() {
    this.setupHeaderScroll();
    this.setupMobileDrawer();
    this.renderProducts();
    this.renderCourses();
    this.renderFreeDownloads();
    this.setupSearchAndFilter();
    this.setupContactForms();
    console.log("Mix With DJ Kevin - App Engine Loaded successfully.");
  },

  // Header Scroll Blur
  setupHeaderScroll() {
    const header = document.querySelector(".site-header");
    if (!header) return;
    
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  },

  // Mobile Nav Drawer
  setupMobileDrawer() {
    const toggleBtn = document.getElementById("mobileToggle");
    const closeBtn = document.getElementById("drawerClose");
    const drawer = document.getElementById("mobileDrawer");
    const backdrop = document.getElementById("drawerBackdrop");

    if (!toggleBtn || !drawer) return;

    const openDrawer = () => {
      drawer.classList.add("open");
      if (backdrop) backdrop.classList.add("open");
      document.body.style.overflow = "hidden";
    };

    const closeDrawer = () => {
      drawer.classList.remove("open");
      if (backdrop) backdrop.classList.remove("open");
      document.body.style.overflow = "auto";
    };

    toggleBtn.addEventListener("click", openDrawer);
    if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
    if (backdrop) backdrop.addEventListener("click", closeDrawer);

    // Close on drawer link click
    const drawerLinks = drawer.querySelectorAll("a");
    drawerLinks.forEach(link => link.addEventListener("click", closeDrawer));
  },

  // Render Product Grid
  renderProducts(filteredList = null) {
    const grid = document.getElementById("productGrid");
    if (!grid) return;

    const listToRender = filteredList || this.products;

    if (listToRender.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-secondary);">
          <i class="ri-disc-line" style="font-size: 3rem; color: var(--gold-primary); display: block; margin-bottom: 1rem;"></i>
          <h3>No products found matching your filter</h3>
          <p style="margin-top:0.5rem; font-size:0.95rem;">Try selecting another category or resetting search terms.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = listToRender.map(product => `
      <div class="product-card" data-category="${product.category}">
        <div class="product-media">
          <img src="${product.image}" alt="${product.title}" loading="lazy" referrerPolicy="no-referrer" />
          <span class="product-tag">${product.categoryLabel}</span>
          ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        </div>
        <div class="product-body">
          <h3 class="product-title">${product.title}</h3>
          <p class="product-desc">${product.description}</p>
          
          <div class="product-features-list">
            <div class="feature-item"><i class="ri-checkbox-circle-fill"></i> <span><strong>Instant Download</strong> & Lifetime Access</span></div>
            <div class="feature-item"><i class="ri-checkbox-circle-fill"></i> <span><strong>High Quality 320kbps MP3</strong> Audio</span></div>
            <div class="feature-item"><i class="ri-checkbox-circle-fill"></i> <span><strong>Organized Folders</strong> for Instant Mixing</span></div>
            <div class="feature-item"><i class="ri-checkbox-circle-fill"></i> <span><strong>DJ Ready:</strong> Rekordbox, Serato, VirtualDJ & Traktor</span></div>
          </div>

          <div style="margin-bottom: 1.25rem;">
            <button class="btn btn-outline-gold btn-sm btn-full" onclick="DJApp.openTracklistModal('${product.id}')">
              <i class="ri-list-check-2"></i> Tracklist & Pack Details
            </button>
          </div>

          <div class="product-footer">
            <div class="price-box">
              <span class="price-current">${product.price}</span>
            </div>
            <a href="${product.buyLink}" target="_blank" rel="noopener noreferrer" class="btn btn-gold btn-sm">
              ${product.isFree ? 'Free Download <i class="ri-download-cloud-line"></i>' : 'Buy Now <i class="ri-arrow-right-line"></i>'}
            </a>
          </div>

          <div class="card-guarantees">
            <span><i class="ri-shield-check-fill"></i> Verified Quality</span>
            <span><i class="ri-lock-2-fill"></i> Secure Payment</span>
            <span><i class="ri-customer-service-2-fill"></i> DJ Support</span>
          </div>
        </div>
      </div>
    `).join("");
  },

  // Render Academy Courses
  renderCourses() {
    const grid = document.getElementById("coursesGrid");
    if (!grid) return;

    grid.innerHTML = this.courses.map(course => `
      <div class="course-card">
        <div class="course-header">
          <span class="course-badge">${course.badge}</span>
          <h3 class="course-title">${course.title}</h3>
          <p class="course-subtitle">${course.subtitle}</p>
        </div>
        <div class="course-body">
          <div style="display: flex; gap: 1rem; color: var(--gold-primary); font-weight: 600; font-size: 0.9rem; margin-bottom: 1.5rem; background: var(--bg-surface); padding: 0.8rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
            <div><i class="ri-time-line"></i> ${course.duration}</div>
            <div>•</div>
            <div><i class="ri-award-line"></i> ${course.level}</div>
          </div>
          
          <div class="course-syllabus">
            <h4 style="font-size: 1rem; color: #FFF; margin-bottom: 1rem; text-transform: uppercase;">Curriculum Highlights:</h4>
            ${course.syllabus.map(item => `
              <div class="syllabus-item">
                <i class="ri-checkbox-circle-fill"></i>
                <span>${item}</span>
              </div>
            `).join("")}
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--border-subtle); padding-top: 1.5rem; margin-top: 1rem;">
            <div>
              <span style="font-size: 0.8rem; color: var(--text-muted); display: block;">Course Investment</span>
              <span style="font-size: 1.5rem; font-weight: 800; color: var(--gold-primary); font-family: var(--font-heading);">${course.price}</span>
            </div>
            <a href="https://wa.me/${this.whatsappNumber}?text=Hi%20DJ%20Kevin,%20I%20want%20to%20enquire%20about%20the%20${encodeURIComponent(course.title)}" target="_blank" class="btn btn-whatsapp">
              <i class="ri-whatsapp-line" style="font-size: 1.2rem;"></i> WhatsApp Enquiry
            </a>
          </div>
        </div>
      </div>
    `).join("");
  },

  // Render Free Downloads
  renderFreeDownloads() {
    const grid = document.getElementById("freeDownloadsGrid");
    if (!grid) return;

    grid.innerHTML = this.freeDownloads.map(dl => `
      <div class="feature-card" style="display: flex; flex-direction: column; justify-content: space-between; height: 100%; padding: 0; overflow: hidden; background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); transition: all 0.3s ease;">
        <div>
          <div style="position: relative; overflow: hidden; border-bottom: 1px solid var(--border-subtle);">
            <img src="${dl.image}" alt="${dl.title}" style="width: 100%; height: 200px; object-fit: cover; display: block;" />
          </div>
          <div style="padding: 1.5rem 1.5rem 0.5rem 1.5rem;">
            <div style="display: flex; gap: 0.5rem; margin-bottom: 0.75rem; flex-wrap: wrap;">
              <span class="badge-gold" style="margin-bottom:0; font-size: 0.72rem; padding: 0.2rem 0.6rem;">${dl.category}</span>
              <span class="badge-gold" style="margin-bottom:0; font-size: 0.72rem; padding: 0.2rem 0.6rem; border-color: rgba(255,255,255,0.15); color: var(--text-secondary);">${dl.tag}</span>
            </div>
            <h3 style="font-size: 1.15rem; color: #FFF; margin-bottom: 0.6rem; font-weight: 700; line-height: 1.35;">${dl.title}</h3>
            <p style="color: var(--text-secondary); font-size: 0.88rem; line-height: 1.5; margin-bottom: 1.25rem;">${dl.desc}</p>
          </div>
        </div>
        <div style="padding: 0 1.5rem 1.5rem 1.5rem;">
          <a href="${dl.fileUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-gold btn-full" style="text-align: center; justify-content: center; display: inline-flex; align-items: center; gap: 0.5rem;">
            <i class="ri-download-line"></i> DOWNLOAD FREE
          </a>
        </div>
      </div>
    `).join("");
  },

  // Search & Filter Setup
  setupSearchAndFilter() {
    const searchInput = document.getElementById("storeSearch");
    const sortSelect = document.getElementById("storeSort");
    const filterTabs = document.querySelectorAll(".filter-tab");

    let currentCategory = "all";
    let searchQuery = "";

    const applyFilters = () => {
      let result = [...this.products];

      if (currentCategory !== "all") {
        result = result.filter(p => p.category === currentCategory);
      }

      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        result = result.filter(p => 
          p.title.toLowerCase().includes(query) || 
          p.description.toLowerCase().includes(query) ||
          p.categoryLabel.toLowerCase().includes(query)
        );
      }

      if (sortSelect) {
        if (sortSelect.value === "price-low") {
          result.sort((a, b) => parseInt(a.price.replace(/\D/g, '')) - parseInt(b.price.replace(/\D/g, '')));
        } else if (sortSelect.value === "price-high") {
          result.sort((a, b) => parseInt(b.price.replace(/\D/g, '')) - parseInt(a.price.replace(/\D/g, '')));
        } else if (sortSelect.value === "popular") {
          result.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
        }
      }

      this.renderProducts(result);
    };

    filterTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        filterTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        currentCategory = tab.dataset.category || "all";
        applyFilters();
      });
    });

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        applyFilters();
      });
    }

    if (sortSelect) {
      sortSelect.addEventListener("change", applyFilters);
    }
  },

  // Tracklist Modal
  openTracklistModal(productId) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    const modalHtml = `
      <div class="modal-overlay open" id="tracklistModal">
        <div class="modal-container">
          <div class="modal-header">
            <h3><i class="ri-disc-line gold-gradient-text"></i> ${product.title}</h3>
            <button class="modal-close" onclick="DJApp.closeModal('tracklistModal')">&times;</button>
          </div>
          <div class="modal-body">
            <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Tracklist contents included in this pack:</p>
            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.25rem;">
              <ul style="display: flex; flex-direction: column; gap: 0.8rem;">
                ${product.tracklist ? product.tracklist.map((track, i) => `
                  <li style="display: flex; align-items: center; gap: 0.75rem; font-size: 0.9rem; color: #FFF; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.6rem;">
                    <span style="color: var(--gold-primary); font-weight: 700; width: 24px;">${i + 1}.</span>
                    <span>${track}</span>
                  </li>
                `).join("") : ''}
              </ul>
            </div>
            <div style="margin-top: 1.75rem; display: flex; justify-content: space-between; align-items: center;">
              <div class="price-box">
                <span class="price-current">${product.price}</span>
              </div>
              <a href="${product.buyLink}" target="_blank" rel="noopener noreferrer" class="btn btn-gold">${product.isFree ? 'Free Download Now' : 'Buy Complete Pack Now'}</a>
            </div>
          </div>
        </div>
      </div>
    `;

    // Remove existing modal if any
    this.closeModal('tracklistModal');
    document.body.insertAdjacentHTML('beforeend', modalHtml);
  },

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.remove();
    }
  },

  // Handle Free Downloads
  handleDownload(title, fileUrl) {
    this.showToast(`Preparing download: ${title}...`);
    setTimeout(() => {
      window.open(fileUrl, "_blank", "noopener,noreferrer");
    }, 1200);
  },

  // Contact & Form Handlers
  setupContactForms() {
    const contactForm = document.getElementById("contactForm");
    if (!contactForm) return;

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("formName").value;
      const phone = document.getElementById("formPhone").value;
      const message = document.getElementById("formMessage").value;

      const text = `Hi DJ Kevin,%0A%0AMy Name: ${encodeURIComponent(name)}%0AMy Phone: ${encodeURIComponent(phone)}%0AMessage: ${encodeURIComponent(message)}`;
      const waUrl = `https://wa.me/${this.whatsappNumber}?text=${text}`;

      this.showToast("Redirecting to WhatsApp to send message...");
      setTimeout(() => {
        window.open(waUrl, "_blank");
      }, 1000);
    });
  },

  // Toast Notification System
  showToast(message) {
    let container = document.querySelector(".toast-container");
    if (!container) {
      container = document.createElement("div");
      container.className = "toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<i class="ri-notification-badge-line"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(50px)";
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }
};

// Auto Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  DJApp.init();
});
