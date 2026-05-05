// No image imports needed until you add project screenshots
 import kveImg from "./assets/images/kve.png";
 import ecommerceImg from "./assets/images/ecommerce.png";
 import safariImg from "./assets/images/safaris.png";

export const siteConfig = {
  name: "Tonny Maina",
  title: "Tonny Maina - Full-Stack Web Developer",
  description: "Full-Stack Web Developer and IT professional based in Mombasa, Kenya. Specializing in React, Next.js, Node.js and building responsive, user-centric web applications.",
  url: "https://your-portfolio-url.vercel.app", // 🔁 Replace with your actual URL
  email: "gmbnostudios@gmail.com",
  social: {
    github: "https://github.com/your-github-handle", // 🔁 Replace with your actual GitHub
    linkedin: "https://www.linkedin.com/in/your-linkedin", // 🔁 Replace with your actual LinkedIn
  },
};

export const projects = [
  {
    slug: "kve",
    name: "Kenya Varsity Esports — kve.co.ke",
    shortName: "KVE",
    tagline: "Kenya's premier university esports platform",
    description: "A full-stack web application connecting university gaming communities across Kenya, featuring tournament brackets, team registrations, and live leaderboards. Built and maintained solely by Tonny Maina.",
    type: "Full-Stack Web App • Esports",
    year: "2024",
    tools: ["React.js", "Tailwind CSS", "Node.js", "REST APIs", "JWT", "Vercel"],
    image: kveImg, // 🔁 Replace with your image import
    link: "https://www.kve.co.ke",
    liveUrl: "https://www.kve.co.ke",
    featured: true,
    status: "Live on kve.co.ke",
    role: "Sole Developer",
    team: "Solo",
    platform: "Web Application",
    tldr: {
      what: "Kenya's premier university esports platform with tournaments, team management and live leaderboards",
      who: "University students and gaming communities across Kenya",
      challenge: "Building and deploying a full production platform solo — from architecture to DNS and SSL",
      outcome: "Live platform actively used by university students across Kenya",
      whyItMatters: "Gives Kenyan university esports communities a dedicated, professional home online"
    },
    problem: {
      intro: "University esports in Kenya lacked a dedicated, structured platform for competition and community.",
      points: [
        "No central hub for university gaming tournament organisation",
        "Team registrations and match scheduling were handled manually",
        "No live leaderboards or results tracking for university leagues",
        "Gaming communities were fragmented across social media with no official presence"
      ],
      coreInsight: "Kenyan university esports needed more than a social page — it needed a proper platform with real infrastructure behind it."
    },
    nonGoals: [
      "Compete with global esports platforms like Battlefy",
      "Support professional or paid tournament circuits",
      "Build native mobile apps in the initial version"
    ],
    systemOverview: {
      intro: "KVE is built around a structured esports community loop:",
      steps: [
        { title: "User Authentication", description: "Secure sign-up and login for students" },
        { title: "Team Registration", description: "Students form and manage their university teams" },
        { title: "Tournament Brackets", description: "Admins create and manage tournament draws" },
        { title: "Live Leaderboards", description: "Real-time score and standings updates" },
        { title: "News & Announcements", description: "Admin CMS for publishing updates without touching the codebase" }
      ],
      note: "Every feature was designed to reduce admin overhead while keeping the community informed and engaged."
    },
    technicalDecisions: [
      {
        title: "React.js + Tailwind CSS Frontend",
        points: [
          "Component-driven architecture for a complex, multi-page application",
          "Tailwind enabled rapid, consistent UI development optimised for both desktop and mobile",
          "High-energy design language tailored to a gaming audience"
        ],
        outcome: "Fully responsive UI that works well for both desktop gaming setups and mobile browsers"
      },
      {
        title: "Custom REST API Backend",
        points: [
          "Built the entire API layer covering auth, team management, match scheduling and score updates",
          "JWT-based authentication with secure user isolation",
          "Connected front-end to relational and non-relational databases"
        ],
        outcome: "Stable, maintainable backend that supports all platform features without third-party dependencies"
      },
      {
        title: "Admin CMS Workflow",
        points: [
          "Implemented a content management workflow so admins can publish news and results",
          "No direct codebase access required for day-to-day operations"
        ],
        outcome: "Platform can be operated independently without developer involvement for routine updates"
      }
    ],
    techStack: [
      { label: "Frontend", value: "React.js + Tailwind CSS" },
      { label: "Backend", value: "Node.js + REST API" },
      { label: "Auth", value: "JWT" },
      { label: "Hosting", value: "Vercel" },
      { label: "Domain", value: ".co.ke TLD with custom DNS & SSL" },
    ],
    challenges: [
      {
        title: "Solo Full-Stack Ownership",
        problem: "Every layer — frontend, backend, devops, DNS — was the sole responsibility of one developer.",
        fix: "Established clear separation of concerns early, used Vercel for CI/CD to reduce deployment overhead"
      },
      {
        title: "Real-Time Leaderboard Updates",
        problem: "Score updates needed to feel live without overcomplicating the backend.",
        fix: "Implemented efficient API polling with optimistic UI updates to maintain perceived responsiveness"
      },
      {
        title: "Designing for a Gaming Audience",
        problem: "Generic UI patterns felt flat for an esports platform.",
        fix: "Developed a high-energy visual system using Tailwind, custom typography and a competitive colour palette"
      }
    ],
    observations: [
      "Platform is live and actively used by university students across Kenya",
      "Admin CMS reduced operational dependency on the developer significantly",
      "Mobile responsiveness was critical — most users access via phone"
    ],
    ethics: [
      "Auth-protected access to all user and team data",
      "No unnecessary data collection beyond what the platform requires",
      "Designed for accessibility across low-bandwidth environments"
    ],
    learnings: [
      "Shipping solo teaches you the cost of every architectural decision",
      "CMS workflows are as important as the product features themselves",
      "Production DNS and SSL work is unglamorous but critical",
      "Gaming audiences respond strongly to visual identity"
    ],
    futureWork: [
      "Native mobile app for iOS and Android",
      "Live match streaming integration",
      "Expanded university league support",
      "Sponsor and partnership management features"
    ],
    finalNote: "KVE is the project that pushed me from developer to product owner. Building it solo — from the first component to DNS configuration — gave me a complete picture of what it takes to ship and maintain a production web platform."
  },
  {
    slug: "ecommerce-storefront",
    name: "E-Commerce Storefront",
    shortName: "E-Commerce",
    tagline: "Full-stack shopping with Mpesa integration",
    description: "A full-stack e-commerce application featuring product catalogue, cart management, Mpesa payment integration, and an admin dashboard for order tracking.",
    type: "Full-Stack Web App • E-Commerce",
    year: "2024",
    tools: ["React.js", "Node.js", "Tailwind CSS", "REST APIs", "Mpesa API", "MongoDB"],
    image: ecommerceImg, 
    link: "https://haitham-frontend-rc53.vercel.app/", 
    featured: true,
    status: "Client Project — Delivered",
    role: "Full-Stack Developer",
    team: "Solo",
    platform: "Web Application",
    tldr: {
      what: "A complete e-commerce platform with product catalogue, cart, Mpesa payments and admin dashboard",
      who: "A Kenyan retail client needing an online storefront with local payment support",
      challenge: "Integrating Mpesa's payment API reliably within a full-stack checkout flow",
      outcome: "Fully delivered client project with live payment processing",
      whyItMatters: "Mpesa is how Kenya pays — a storefront without it isn't a real option for local businesses"
    },
    problem: {
      intro: "Most off-the-shelf e-commerce solutions don't account for the Kenyan payment landscape.",
      points: [
        "International payment gateways have poor adoption among Kenyan consumers",
        "Mpesa integration requires custom API work not supported by generic platforms",
        "Client needed an admin dashboard to manage orders without developer involvement"
      ],
      coreInsight: "Building for a Kenyan market means Mpesa isn't optional — it's the primary payment method."
    },
    nonGoals: [
      "Compete with Jumia or large e-commerce platforms",
      "Support international payment gateways in v1",
      "Build a multi-vendor marketplace"
    ],
    systemOverview: {
      intro: "The storefront follows a standard e-commerce flow with local payment integration:",
      steps: [
        { title: "Product Catalogue", description: "Browsable, filterable product listings" },
        { title: "Cart Management", description: "Add, update and remove items" },
        { title: "Mpesa Checkout", description: "STK push payment integration" },
        { title: "Order Confirmation", description: "Automated on successful payment" },
        { title: "Admin Dashboard", description: "Order tracking and management" }
      ],
      note: "Mpesa STK push was prioritised as the primary checkout path — card payments were secondary."
    },
    technicalDecisions: [
      {
        title: "Mpesa STK Push Integration",
        points: [
          "Implemented Safaricom Daraja API for real-time payment initiation",
          "Handled callback URLs for payment confirmation within the order flow",
          "Built retry and error handling logic for failed transactions"
        ],
        outcome: "Reliable local payment processing that matches how Kenyan customers actually pay"
      }
    ],
    techStack: [
      { label: "Frontend", value: "React.js + Tailwind CSS" },
      { label: "Backend", value: "Node.js + Express" },
      { label: "Database", value: "MongoDB" },
      { label: "Payments", value: "Mpesa Daraja API" },
    ],
    challenges: [
      {
        title: "Mpesa Callback Reliability",
        problem: "Payment callbacks from Safaricom are asynchronous and can arrive with delays.",
        fix: "Implemented webhook handling with order status polling as a fallback"
      }
    ],
    observations: [
      "Mpesa STK push had near-universal adoption among test users",
      "Admin dashboard significantly reduced client support requests post-launch"
    ],
    ethics: [
      "Payment data handled securely via Safaricom's official Daraja API",
      "No card details stored on application servers"
    ],
    learnings: [
      "Payment integration is where most e-commerce projects either succeed or stall",
      "Local market context (Mpesa) matters more than technical best practices imported from elsewhere",
      "Admin tooling is as important to a client as the customer-facing product"
    ],
    futureWork: [
      "Card payment support via Stripe or Flutterwave",
      "Inventory management features",
      "SMS order notifications via Africa's Talking"
    ],
    finalNote: "This project reinforced that building for a specific market means deeply understanding how that market operates — Mpesa first, everything else second."
  },
  {
  slug: "papa-jillo-safaris",
  name: "Papa Jillo Safaris — scavengersafaris.org",
  shortName: "Papa Jillo Safaris",
  tagline: "A premium safari booking experience for Kenya's wild side",
  description: "A fully responsive safari company website for Papa Jillo Safaris, featuring destination showcases, detailed package listings with pricing, a media gallery with lightbox, WhatsApp booking integration, and a contact form — live at scavengersafaris.org.",
  type: "Client Website • Tourism & Hospitality",
  year: "2024",
  tools: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Responsive Design"],
  image: safariImg, // 🔁 Replace with your screenshot
  link: "https://www.scavengersafaris.org",
  liveUrl: "https://www.scavengersafaris.org",
  featured: true,
  status: "Live — scavengersafaris.org",
  role: "Frontend Developer",
  team: "Solo",
  platform: "Web (Client Site)",
  tldr: {
    what: "A premium, fully responsive website for a Mombasa-based safari company showcasing destinations, packages and gallery",
    who: "Papa Jillo Safaris — a Kenya-based tour operator targeting both local residents and international visitors",
    challenge: "Delivering a high-energy, visually immersive experience that converts visitors into WhatsApp booking leads",
    outcome: "Live production site with package listings, gallery lightbox and direct WhatsApp booking integration",
    whyItMatters: "For a tourism business, the website is the first impression — it has to sell the experience before the client even picks up the phone"
  },
  problem: {
    intro: "Safari companies in Kenya often rely on word-of-mouth and social media with no professional web presence to capture leads.",
    points: [
      "No central platform to showcase packages with clear pricing for residents and non-residents",
      "Potential clients had no easy way to enquire or book without a proper contact interface",
      "Existing tourism sites in the region felt generic and failed to convey the experience",
      "A mobile-first audience needed a site that worked flawlessly on phones"
    ],
    coreInsight: "Tourism is an emotional purchase — the website needed to make visitors feel the safari before they booked it."
  },
  nonGoals: [
    "Build a full online payment system in v1",
    "Create a backend CMS for the client to manage packages",
    "Compete with large travel aggregator platforms"
  ],
  systemOverview: {
    intro: "The site is structured around a clear visitor journey:",
    steps: [
      { title: "Hero & Brand", description: "Immediate visual impact with the safari landscape and brand identity" },
      { title: "Destinations", description: "Showcase of key locations across Kenya — Maasai Mara, Mombasa beaches, wildlife parks" },
      { title: "Packages", description: "Detailed listings with duration, inclusions, exclusions and resident/non-resident pricing" },
      { title: "Gallery", description: "Immersive photo and video gallery with lightbox viewer" },
      { title: "Contact & Booking", description: "WhatsApp direct booking CTA and contact form throughout the page" }
    ],
    note: "WhatsApp was prioritised as the primary conversion action — it's how Kenyan tourism clients actually book."
  },
  technicalDecisions: [
    {
      title: "WhatsApp as the Primary Booking CTA",
      points: [
        "Integrated wa.me deep links throughout the site for instant booking initiation",
        "Reduced friction by meeting clients on the platform they already use daily",
        "Eliminated the need for a complex backend booking system in v1"
      ],
      outcome: "Low-friction conversion path that matches real-world Kenyan tourism booking behaviour"
    },
    {
      title: "Gallery Lightbox with Video Support",
      points: [
        "Built a custom lightbox viewer for both images and embedded video content",
        "Swipeable gallery optimised for mobile browsing",
        "Lazy loading applied to all gallery assets to maintain performance"
      ],
      outcome: "Immersive media experience without sacrificing page load speed"
    },
    {
      title: "Dual Pricing Display (Resident & Non-Resident)",
      points: [
        "Package cards show both KES resident pricing and USD non-resident pricing side by side",
        "Reflects how Kenyan national parks actually structure entry fees",
        "Avoids pricing confusion for international visitors"
      ],
      outcome: "Transparent pricing that serves both local and international audiences without a separate page"
    }
  ],
  techStack: [
    { label: "Frontend", value: "HTML + CSS + JavaScript" },
    { label: "Styling", value: "Tailwind CSS" },
    { label: "Booking", value: "WhatsApp API (wa.me)" },
    { label: "Media", value: "Custom lightbox gallery" },
    { label: "Hosting", value: "Live on scavengersafaris.org" },
  ],
  challenges: [
    {
      title: "Conveying Luxury on a Client Budget",
      problem: "The client needed a premium feel without the cost of custom photography or video production beyond what they had.",
      fix: "Maximised impact through strong typography, full-bleed imagery, and a carefully chosen colour palette that evoked the Kenyan landscape"
    },
    {
      title: "Package Complexity",
      problem: "Each safari package has different durations, inclusions, exclusions and pricing tiers — hard to present clearly.",
      fix: "Designed structured package cards with consistent layout, collapsible detail sections and clear pricing hierarchy"
    },
    {
      title: "Mobile-First for a Tourism Audience",
      problem: "Most Kenyan users browse on mobile with varying connection speeds.",
      fix: "Implemented responsive layouts, lazy-loaded images and kept JavaScript minimal to ensure fast load times on 3G/4G"
    }
  ],
  observations: [
    "WhatsApp booking CTA drives direct client enquiries without any backend infrastructure",
    "Gallery is the most visually engaging section — critical for a tourism product",
    "Dual resident/non-resident pricing removes a common friction point for international visitors",
    "Mobile responsiveness was non-negotiable for the target audience"
  ],
  ethics: [
    "No user data stored — contact form submissions go directly to the client",
    "No third-party tracking beyond what the hosting provider includes",
    "Pricing displayed transparently with full inclusions and exclusions listed"
  ],
  learnings: [
    "Tourism clients need the website to sell an emotion, not just list information",
    "Meeting users where they are (WhatsApp) beats building a custom booking flow",
    "Consistent package card design matters more than feature depth for hospitality sites",
    "Performance on low-bandwidth mobile connections is a real constraint in the Kenyan market"
  ],
  futureWork: [
    "Admin panel for the client to update packages and pricing without developer involvement",
    "Online payment integration via Mpesa and card",
    "Review and rating system per package",
    "SEO optimisation for international safari search traffic"
  ],
  finalNote: "Papa Jillo Safaris is a reminder that great client work means understanding the market, not just executing a brief. Building for Kenyan tourism means WhatsApp-first, mobile-first, and experience-first — in that order."
},
];

{
  slug: "tembo-trails",
  name: "TemboTrails",
  shortName: "TemboTrails",
  tagline: "Discover and explore Kenya's wildlife destinations",
  description: "A responsive tourism discovery platform showcasing Kenya's national parks and wildlife destinations with an interactive interface, built as a front-end exploration project.",
  type: "Front-End Project - Tourism & Discovery",
  year: "2024",
  tools: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Responsive Design"],
  image: "/assets/images/tembo.png", // Add your screenshot import here
  link: "https://kweng-zz.github.io/TemboTrails/",
  liveUrl: "https://kweng-zz.github.io/TemboTrails/",
  featured: true,
  status: "Live on GitHub Pages",
  role: "Frontend Developer",
  team: "Solo",
  platform: "Web Application",
  tldr: {
    what: "A discovery platform for Kenya's national parks and wildlife destinations with interactive listings",
    who: "Tourists and residents looking to explore Kenya's wildlife destinations",
    challenge: "Creating an engaging, mobile-friendly browsing experience for parks and destinations across Kenya",
    outcome: "Fully responsive site deployed on GitHub Pages showcasing Kenya's major wildlife destinations",
    whyItMatters: "Makes Kenya's world-class wildlife destinations discoverable in one clean, accessible web interface"
  },
  problem: {
    intro: "Information about Kenya's national parks is scattered across different tourism sites, making it hard to compare and discover destinations.",
    points: [
      "No single, clean interface to browse Kenya's national parks and game reserves",
      "Tourism information is fragmented across multiple sources with inconsistent presentation",
      "Mobile users needed a fast, visual way to explore destination options"
    ],
    coreInsight: "Before booking a safari, people need to discover and dream - TemboTrails serves that discovery phase."
  },
  nonGoals: [
    "Process bookings or payments",
    "Include real-time availability or pricing data",
    "Replace official KWS or tour operator sites"
  ],
  systemOverview: {
    intro: "TemboTrails is built as a browsable discovery experience:",
    steps: [
      { title: "Destination Cards", description: "Visual cards showcasing each park with key highlights" },
      { title: "Interactive Navigation", description: "Filterable and searchable destination listings" },
      { title: "Detail Views", description: "Dedicated sections for each destination with key information" }
    ],
    note: "The focus is on visual browsing and discovery - letting the destinations sell themselves through imagery and clear information."
  },
  technicalDecisions: [
    {
      title: "Static Front-End Architecture",
      points: [
        "No backend required - all content is static and loads instantly",
        "GitHub Pages deployment for zero-cost, reliable hosting",
        "Fast load times ideal for users on varying internet speeds"
      ],
      outcome: "Lightweight, fast-loading site that works well even on slower Kenyan mobile connections"
    },
    {
      title: "Visual-First Design",
      points: [
        "Prioritised large imagery to showcase the beauty of each destination",
        "Clean card-based layout for easy browsing and comparison",
        "Responsive design that works from mobile to desktop"
      ],
      outcome: "Immersive browsing experience that captures the visual appeal of Kenya's wildlife"
    }
  ],
  techStack: [
    { label: "Frontend", value: "HTML + CSS + JavaScript" },
    { label: "Styling", value: "Tailwind CSS" },
    { label: "Hosting", value: "GitHub Pages" },
  ],
  challenges: [
    {
      title: "Curating Destination Content",
      problem: "Each park has unique features, but the interface needed to present them consistently.",
      fix: "Designed a uniform card structure that adapts to highlight each park's distinct characteristics while maintaining visual consistency"
    },
    {
      title: "Performance with Visual Content",
      problem: "Heavy imagery could slow down mobile browsing.",
      fix: "Optimised assets and used lazy loading to maintain fast page loads without sacrificing visual quality"
    }
  ],
  observations: [
    "Static architecture proved ideal for a discovery platform - fast and reliable",
    "Visual-first approach engaged users more effectively than text-heavy alternatives",
    "GitHub Pages provided perfect hosting for this type of project"
  ],
  ethics: [
    "No user tracking or data collection",
    "All destination information sourced from publicly available data",
    "Respectful representation of Kenya's wildlife heritage"
  ],
  learnings: [
    "Discovery experiences thrive on strong visuals and clean layout",
    "Static sites can deliver rich, engaging experiences without a backend",
    "GitHub Pages is a viable deployment option for front-end projects targeting Kenyan users",
    "Consistent content structure helps users compare and explore efficiently"
  ],
  futureWork: [
    "Add more parks and reserves as the dataset expands",
    "Integrate weather data for each destination",
    "Add a trip planning feature with multi-destination routes",
    "Include visitor tips and best seasons for each park"
  ],
  finalNote: "TemboTrails complements Papa Jillo Safaris - while the safari site drives bookings, TemboTrails serves the earlier discovery phase. Together they bookend the tourism customer journey from dreaming to booking."
}

export const skills = {
  expertise: [
    "Full-Stack Development",
    "Web Design",
    "UI/UX Design",
    "Technical Support",
  ],
  tools: [
    "React.js",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "MongoDB",
    "PostgreSQL",
    "REST APIs",
    "Git / GitHub",
    "Figma",
    "Docker",
  ],
};

export const achievements = [
  {
    title: "Sole Developer — Kenya Varsity Esports (kve.co.ke)",
    organization: "Live Project",
    period: "2024 – Present",
    highlight:
      "Architected and launched Kenya's premier university esports platform solo — handling full-stack development, DNS, SSL, and production deployment on the .co.ke TLD.",
  },
  {
    title: "Responsive Web Design Certification",
    organization: "freeCodeCamp",
    period: "2024",
    highlight:
      "Certified in modern HTML & CSS, responsive layouts, and accessibility best practices.",
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    organization: "freeCodeCamp",
    period: "2024",
    highlight:
      "Certified in ES6+, OOP, functional programming, and algorithmic problem solving.",
  },
  {
    title: "Front-End Development Libraries (React & Redux)",
    organization: "freeCodeCamp",
    period: "2023",
    highlight:
      "Certified in component-driven UI development, state management with Redux, and React hooks.",
  },
];
