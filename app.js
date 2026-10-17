/**
 * ZemoLabs Portfolio Application Logic
 * Clean, lightweight, and optimized for GitHub Pages static deployment.
 */

const GAMES_DATA = [
  {
    id: 'animal-blast',
    title: 'Animal Blast',
    category: 'puzzle',
    categoryLabel: 'Blast & Match',
    tagline: 'Casual Match-2 Puzzle Adventure',
    banner: 'assets/castle.png',
    icon: 'assets/animal_blast_icon.png',
    fallbackEmoji: '💥',
    platforms: ['iOS', 'Android'],
    engine: 'Unity 6 (URP)',
    shortDesc: 'A flagship casual match-2 blast puzzle featuring animal companions, 50+ custom hindrances, and explosive booster combos.',
    description: 'Animal Blast is a high-polish casual puzzle game built for smooth tactile feel and long-term retention. Players clear vibrant animal-themed boards using intelligent cluster matching, triggering cascades of rockets, bombs, and color discs. Engineered with zero runtime allocations in core gameplay loops to guarantee locked 60 FPS performance across all devices.',
    features: [
      '50+ authored hindrances including cages, vines, ice, and bubble locks',
      'Firebase cloud synchronization for clan events and team leaderboards',
      'Mega Levels featuring multi-stage objectives and dynamic boss mechanics',
      'Zero-allocation match detection loop optimized for low-end to flagship phones'
    ]
  },
  {
    id: 'monsterdoku',
    title: 'Monsterdoku',
    category: 'puzzle',
    categoryLabel: 'Deductive Logic',
    tagline: 'Gothic Sudoku Logic Hybrid',
    banner: 'assets/monster_heads.png',
    icon: 'assets/monsterdoku_icon.png',
    fallbackEmoji: '👹',
    platforms: ['iOS (iPadOS Tested)', 'Android'],
    engine: 'Unity 6 (URP)',
    shortDesc: 'A tactile logic puzzle blending block placement with classic Sudoku rules, featuring 8 original handcrafted monsters.',
    description: 'Monsterdoku reimagines deductive number puzzles with charming gothic characters. Players place unique monsters across grid matrices ensuring no duplicates exist in any row or column. Includes note-marking mode, mistake counters, and multi-tier hints, designed to run completely offline with zero account requirements.',
    features: [
      '8 original monster characters: Medusa, Vampire, Witch, Ghost, Mummy, Werewolf, Pumpkin, Golem',
      'Dual-input interaction: Single-tap marking ("X" notes) and double-tap placement',
      'Heart counter mistake handling, two-stage hints, and undo/restart tools',
      '100% offline-ready with zero user tracking or account requirements'
    ]
  },
  {
    id: 'victory-road',
    title: 'Victory Road',
    category: 'action',
    categoryLabel: 'Arcade Hopper',
    tagline: 'Precision Action Hopper',
    banner: 'assets/victory_road_gameplay.png',
    icon: 'assets/victory_road_results.png',
    fallbackEmoji: '🐸',
    platforms: ['Windows', 'iOS', 'Android'],
    engine: 'Unity 6 (URP)',
    shortDesc: 'A fast-paced isometric action hopper validated through extensive 500-row automated soak testing.',
    description: 'Victory Road brings precision controls to procedural obstacle traversal. Players navigate dynamic traffic rows, rapid rivers, and moving terrain in an isometric world. Built on modern Unity 6 architecture with dual input system support and verified with automated 500-hop soak runs without runtime exceptions.',
    features: [
      'Automated 500-row continuous soak tested for flawless stability',
      'Dual input system: Seamless support for modern touch gestures and classic keyboard',
      'Procedural road traffic, floating log rivers, and dynamic train lines',
      'Smooth isometric camera tracking with locked 60 FPS mobile target'
    ]
  },
  {
    id: 'spooky-payday',
    title: 'Spooky Payday',
    category: 'strategy',
    categoryLabel: 'Board & Raids',
    tagline: 'Casual Board Game & Village Raids',
    banner: 'assets/spooky_payday_icons.webp',
    icon: 'assets/coins.png',
    fallbackEmoji: '🎲',
    platforms: ['iOS', 'Android'],
    engine: 'Unity 6 (URP)',
    shortDesc: 'A 2.5D casual board game combining dice-based traversal with combat encounters, village upgrades, and asynchronous raids.',
    description: 'Spooky Payday combines social board traversal with strategic village construction. Roll dice to collect resources, unlock mystical weapons, fortify your settlement, and launch raids against rival player vaults in an underworld setting.',
    features: [
      'Circular 2.5D board movement with dynamic coin and ammo collection',
      'Underworld boss battles and tactical villain confrontation encounters',
      'Village building system with landmark upgrades and shield fortifications',
      'Collectible monster card sets and seasonal competitive tournaments'
    ]
  },
  {
    id: 'spooky-blast',
    title: 'Spooky Blast',
    category: 'puzzle',
    categoryLabel: 'Blast & Match',
    tagline: 'Haunted Match-2 Puzzles',
    banner: 'assets/spooky_blast_icon.png',
    icon: 'assets/spooky_blast_icon.png',
    fallbackEmoji: '🎃',
    platforms: ['iOS', 'Android'],
    engine: 'Unity 6 (URP)',
    shortDesc: 'A gothic twist on the Match-2 genre featuring spooky obstacles, cauldrons, and interactive bonus minigames.',
    description: 'Spooky Blast introduces atmospheric horror aesthetics to casual blast mechanics. Clear cauldrons, floating specters, and cursed tombstones while unlocking special bonus stages and cooperative team challenges.',
    features: [
      'Gothic-themed obstacles: Witch cauldrons, specters, and cursed tombstones',
      'Exclusive built-in "Mole in Hole" bonus challenge mini-event',
      'Responsive juice feedback with screen shake and orchestral audio design',
      'Multiplayer team chat, team tournaments, and cloud save synchronization'
    ]
  },
  {
    id: 'soldier-blast',
    title: 'Soldier Blast',
    category: 'puzzle',
    categoryLabel: 'Tactical Match-2',
    tagline: 'Military Blast Operations',
    banner: 'assets/soldier_event_icon.png',
    icon: 'assets/soldier_event_icon.png',
    fallbackEmoji: '🎖️',
    platforms: ['Android', 'iOS'],
    engine: 'Unity 6 (URP)',
    shortDesc: 'A military strategy blast puzzle with tactical munitions, airstrikes, radar sweeps, and alliance operations.',
    description: 'Soldier Blast merges military aesthetics with explosive Match-2 mechanics. Call in airstrikes, drop artillery rockets, and blast through sandbag fortifications while competing in global alliance warfare.',
    features: [
      'Tactical munitions: Airstrikes, artillery rockets, and bunker-busting bombs',
      'Strategic hindrances: Sandbag barriers, radar jammers, and barbed wire locks',
      'Competitive squad leaderboards and team war operations',
      'High-speed deterministic board logic with zero frame drops'
    ]
  },
  {
    id: 'animal-fall',
    title: 'Animal Fall',
    category: 'action',
    categoryLabel: 'Physics & Drop',
    tagline: 'Physics-Driven Drop Arcade',
    banner: 'assets/cards.png',
    icon: 'assets/cards.png',
    fallbackEmoji: '🪂',
    platforms: ['Android', 'iOS'],
    engine: 'Unity 6 (URP)',
    shortDesc: 'A physics arcade falling game featuring a comprehensive registry of 50 authored hindrances across 60+ levels.',
    description: 'Animal Fall tests player reflexes as charming animals descend through hazardous obstacle courses. Navigate black holes, gravity fields, and ice patches with non-allocating gesture controls and deterministic physics simulation.',
    features: [
      '50 fully implemented hindrance IDs with distinct interactive behaviors',
      '60 curated levels with escalating challenge ratings and mega milestones',
      'Non-allocating pointer path routing touch inputs with hit priority',
      'Dynamic environment modifiers including low gravity, vortexes, and bounce pads'
    ]
  },
  {
    id: 'idle-jungle-kingdom',
    title: 'Idle Jungle Kingdom',
    category: 'idle',
    categoryLabel: 'Idle Tycoon',
    tagline: 'Wildlife Sanctuary Simulator',
    banner: 'assets/jungle_bg.png',
    icon: 'assets/company_logo.png',
    fallbackEmoji: '🦁',
    platforms: ['Android', 'iOS'],
    engine: 'Unity 6 (URP)',
    shortDesc: 'An idle tycoon simulation where players construct animal habitats, manage visitor queues, and expand safari zones.',
    description: 'Build and manage a bustling safari park. Coordinate ticketing booths, visitor gates, cash collection logistics, and unlock sprawling wildlife zones home to exotic creatures.',
    features: [
      'Queue management system for ticketing, gates, and safari tours',
      'Automated cash stacking, conveyor delivery, and collector logistics',
      'Multiple unlockable jungle zones with exotic wildlife species',
      'Logarithmic idle progression curve with offline income accumulation'
    ]
  },
  {
    id: 'idle-lazy-thief',
    title: 'Idle Lazy Thief',
    category: 'idle',
    categoryLabel: 'Idle Tycoon',
    tagline: 'Heist Syndicate Management',
    banner: 'assets/lazy_thief_player.webp',
    icon: 'assets/lazy_thief_player.webp',
    fallbackEmoji: '🥷',
    platforms: ['Android', 'iOS'],
    engine: 'Unity 6 (URP)',
    shortDesc: 'A humorous heist management simulator. Run sneak operations, manage vaults, and launder loot.',
    description: 'Lead a comedic syndicate of pickpockets and thieves. Manage loot shelves, crack high-security vaults, launder ill-gotten gains, and upgrade disguise wardrobes to outwit the law.',
    features: [
      'Heist management: Shelves, vaults, storage rooms, and getaway logistics',
      'Automated pickpocket crews and covert laundering operations',
      'Stylized cartoon art direction with comical character rigs',
      'Upgradable security bypass tools and disguise wardrobes'
    ]
  },
  {
    id: 'idle-potion-shop',
    title: 'Idle Potion Shop',
    category: 'idle',
    categoryLabel: 'Crafting Tycoon',
    tagline: 'Cozy Fantasy Alchemy Atelier',
    banner: 'assets/victory.png',
    icon: 'assets/victory.png',
    fallbackEmoji: '🧪',
    platforms: ['Android', 'iOS', 'WebGL'],
    engine: 'Unity 6 (URP)',
    shortDesc: 'A cozy fantasy crafting tycoon where players brew potions in magical cauldrons and upgrade workshop ateliers.',
    description: 'Step into the shoes of a fantasy alchemist. Brew enchanted concoctions, fulfill whimsical customer requests, hire apprentices, and expand your magical workshop into a thriving business.',
    features: [
      'Cauldron alchemy mechanics with rare herb and mineral combinations',
      'Workshop expansions with apprentice assistants and aging shelves',
      'Cozy medieval aesthetic with ambient acoustic soundscapes',
      'Multi-tier potion mastery and guild delivery contracts'
    ]
  },
  {
    id: 'payday-idle-calendar',
    title: 'Payday: Idle Calendar',
    category: 'strategy',
    categoryLabel: 'Board & Empire',
    tagline: 'Calendar-Based Strategy Board',
    banner: 'assets/coins.png',
    icon: 'assets/castle.png',
    fallbackEmoji: '📅',
    platforms: ['Android', 'iOS'],
    engine: 'Unity 6 (URP)',
    shortDesc: 'A calendar-based strategy board game where each month unfolds new seasons, landmarks, and raiding opportunities.',
    description: 'Progress through a year of empire building on a calendar-themed board. Each month presents unique seasonal challenges, landmark upgrades, raid defenses, and fortune card draws.',
    features: [
      'Calendar board progression moving through the 12 months with seasonal changes',
      'Village structure construction, landmark fortifications, and raid defense',
      'Centralized service architecture with asynchronous state persistence',
      'Dynamic event scheduling and fortune card multipliers'
    ]
  },
  {
    id: 'research-division',
    title: 'ZemoLabs R&D',
    category: 'action',
    categoryLabel: 'Experimental Lab',
    tagline: 'Next-Generation Mechanics Incubator',
    banner: 'assets/animal_blast_logo.png',
    icon: 'assets/company_logo.png',
    fallbackEmoji: '🔬',
    platforms: ['Internal Builds'],
    engine: 'Unity 6 (URP)',
    shortDesc: 'An internal incubator exploring experimental game mechanics including physics suction, crowd routing, and reflex evasion.',
    description: 'The ZemoLabs R&D Sandbox is where our team prototypes novel interaction concepts before integrating them into production titles. Current explorations include high-density debris suction physics, real-time crowd evacuation pathfinding, and ultra-fast reflex dodging mechanics.',
    features: [
      'Vacuumverse: High-density particle suction and debris vortex physics',
      'Evacuation: Real-time emergency crowd navigation and flocking algorithms',
      'Dodge Runner: Procedural reflex runner testing sub-millisecond input curves',
      'Rapid gameplay feel validation and mobile GPU stress-testing'
    ]
  }
];

class ZemoLabsApp {
  constructor() {
    this.gamesGrid = document.getElementById('games-grid');
    this.categoryTabs = document.getElementById('category-tabs');
    this.searchInput = document.getElementById('game-search');
    this.modal = document.getElementById('game-modal');
    this.modalContent = document.getElementById('modal-content');
    this.modalCloseBtn = document.getElementById('modal-close');

    this.currentCategory = 'all';
    this.searchQuery = '';

    this.init();
  }

  init() {
    this.renderCatalog();
    this.bindEvents();
  }

  bindEvents() {
    // Segmented Control Tabs
    this.categoryTabs?.addEventListener('click', (e) => {
      const btn = e.target.closest('.segment-btn');
      if (!btn) return;
      this.categoryTabs.querySelectorAll('.segment-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      this.currentCategory = btn.dataset.category;
      this.renderCatalog();
    });

    // Search Input
    this.searchInput?.addEventListener('input', (e) => {
      this.searchQuery = e.target.value.trim().toLowerCase();
      this.renderCatalog();
    });

    // Modal Close
    this.modalCloseBtn?.addEventListener('click', () => this.closeModal());
    window.addEventListener('click', (e) => {
      if (e.target === this.modal) this.closeModal();
    });
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeModal();
    });
  }

  renderCatalog() {
    if (!this.gamesGrid) return;

    const filtered = GAMES_DATA.filter(g => {
      const matchesCat = this.currentCategory === 'all' || g.category === this.currentCategory;
      const matchesSearch = !this.searchQuery ||
        g.title.toLowerCase().includes(this.searchQuery) ||
        g.tagline.toLowerCase().includes(this.searchQuery) ||
        g.categoryLabel.toLowerCase().includes(this.searchQuery) ||
        g.shortDesc.toLowerCase().includes(this.searchQuery);

      return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
      this.gamesGrid.innerHTML = `
        <div class="no-results">
          <p>No matching titles found.</p>
        </div>
      `;
      return;
    }

    this.gamesGrid.innerHTML = filtered.map(game => `
      <div class="game-card" data-id="${game.id}">
        <div class="card-media">
          <img src="${game.banner}" alt="${game.title}" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\\'card-media-fallback\\'>${game.fallbackEmoji}</div>'">
          <span class="card-category-tag">${game.categoryLabel}</span>
        </div>

        <div class="card-body">
          <div class="card-header-row">
            <img src="${game.icon}" alt="${game.title} Icon" class="card-icon" onerror="this.src='assets/company_logo.png'">
            <div class="card-title-group">
              <h3 class="card-title">${game.title}</h3>
              <p class="card-tagline">${game.tagline}</p>
            </div>
          </div>

          <p class="card-description">${game.shortDesc}</p>

          <div class="card-footer">
            <div class="platform-pills">
              ${game.platforms.map(p => `<span class="platform-pill">${p}</span>`).join('')}
            </div>
            <span class="card-link">View Details &rarr;</span>
          </div>
        </div>
      </div>
    `).join('');

    // Attach card click handlers
    this.gamesGrid.querySelectorAll('.game-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.dataset.id;
        this.openModal(id);
      });
    });
  }

  openModal(id) {
    const game = GAMES_DATA.find(g => g.id === id);
    if (!game || !this.modalContent) return;

    this.modalContent.innerHTML = `
      <div class="modal-banner">
        <img src="${game.banner}" alt="${game.title}" onerror="this.onerror=null; this.parentElement.style.display='none'">
      </div>

      <div class="modal-header-row">
        <img src="${game.icon}" alt="${game.title} Icon" class="modal-header-icon" onerror="this.src='assets/company_logo.png'">
        <div>
          <h2 class="modal-title">${game.title}</h2>
          <p class="modal-tagline">${game.tagline}</p>
        </div>
      </div>

      <div class="modal-meta-grid">
        <div class="modal-meta-item">
          <span>Genre</span>
          <span>${game.categoryLabel}</span>
        </div>
        <div class="modal-meta-item">
          <span>Engine</span>
          <span>${game.engine}</span>
        </div>
        <div class="modal-meta-item">
          <span>Platforms</span>
          <span>${game.platforms.join(', ')}</span>
        </div>
      </div>

      <h3 class="modal-section-heading">Overview</h3>
      <p class="modal-paragraph">${game.description}</p>

      <h3 class="modal-section-heading">Key Highlights</h3>
      <ul class="modal-features">
        ${game.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
    `;

    this.modal.classList.add('open');
    this.modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.modal?.classList.remove('open');
    this.modal?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ZemoLabsApp();
});
