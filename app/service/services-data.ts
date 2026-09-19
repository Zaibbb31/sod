export interface ServiceDeliverable {
  title: string;
  description: string;
}

export interface ServiceDetail {
  slug: string;
  id: string;
  title: string;
  tag?: string;
  shortDescription: string;
  image: string;
  aboutHeading?: string;
  aboutDescription: string;
  whatsIncludedHeading?: string;
  whatsIncludedDescription: string;
  deliverables: ServiceDeliverable[];
}

export const allServices: Record<string, ServiceDetail> = {
  construction: {
    slug: "construction",
    id: "construction",
    title: "Construction",
    tag: "SERVICE",
    shortDescription:
      "Professional construction services managed with precision, quality craftsmanship, and efficient execution from planning to final delivery.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=85",
    aboutHeading: "About service",
    aboutDescription:
      "Cerette provides comprehensive construction services focused on delivering high-quality residential, commercial, and development projects through efficient execution and precise project management. Our construction approach combines technical expertise, skilled craftsmanship, and organized workflows to ensure every project is completed with durability, functionality, and modern construction standards. From early coordination to final delivery, we prioritize quality control, timeline efficiency, and seamless collaboration throughout every stage of the construction process.",
    whatsIncludedHeading: "What’s include in the services?",
    whatsIncludedDescription:
      "Our construction service covers the complete building and execution process required to transform architectural concepts into fully realized spaces. This includes project coordination, construction supervision, technical implementation, quality assurance, and site management tailored to each project requirement. Every stage is carefully managed to maintain construction accuracy, operational efficiency, material consistency, and long-term structural performance for residential and commercial developments.",
    deliverables: [
      {
        title: "Project Management",
        description:
          "Comprehensive coordination and supervision to ensure projects are completed efficiently, accurately, and on schedule.",
      },
      {
        title: "Site Supervision",
        description:
          "Continuous on-site monitoring focused on maintaining construction quality, safety standards, and workflow organization.",
      },
      {
        title: "Quality Control",
        description:
          "Detailed inspection processes designed to ensure structural reliability, material consistency, and finishing precision.",
      },
      {
        title: "Construction Coordination",
        description:
          "Organized collaboration between contractors, suppliers, and project teams throughout every development phase.",
      },
      {
        title: "Material Implementation",
        description:
          "Rigorous sourcing, specification testing, and precision installation of structural and architectural materials adhering to industry excellence.",
      },
    ],
  },
  "residential-interiors": {
    slug: "residential-interiors",
    id: "residential-interiors",
    title: "Residential Interiors",
    tag: "SERVICE",
    shortDescription:
      "Designing warm, refined homes that reflect your lifestyle — through thoughtful layouts, natural materials, and timeless details.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=85",
    aboutHeading: "About service",
    aboutDescription:
      "We create bespoke residential living environments that embody understated elegance, comfort, and functional harmony. Each residence is approached with an understanding of natural light, spatial proportion, and tactile material palettes. From complete home layouts to customized architectural details, we deliver timeless interiors tailored to your daily rituals.",
    whatsIncludedHeading: "What’s include in the services?",
    whatsIncludedDescription:
      "Our residential interior service encompasses the full design journey from preliminary concept boards to final turnkey styling, ensuring every element harmonizes with your personal aesthetic and living patterns.",
    deliverables: [
      {
        title: "Spatial Planning & Layouts",
        description:
          "Optimized 2D and 3D space planning to maximize flow, functionality, and spatial balance across all living zones.",
      },
      {
        title: "Bespoke Material & Finish Curation",
        description:
          "Harmonious palettes of natural timber, polished stone, textured limewash, and tailored hardware selected for longevity.",
      },
      {
        title: "Custom Furniture & Millwork Design",
        description:
          "One-of-a-kind cabinetry, built-in shelving, and tailored furniture pieces crafted specifically to fit your architectural volume.",
      },
      {
        title: "Lighting & Acoustic Design",
        description:
          "Layered architectural lighting schemes and acoustic treatments designed to set welcoming atmospheres throughout the day.",
      },
      {
        title: "Turnkey Styling & Installation",
        description:
          "White-glove delivery, art curation, window treatments, and final decorative styling for immediate move-in readiness.",
      },
    ],
  },
  "commercial-design": {
    slug: "commercial-design",
    id: "commercial-design",
    title: "Commercial Design",
    tag: "SERVICE",
    shortDescription:
      "High-impact retail, workplace, and hospitality environments crafted to elevate brand identity, productivity, and customer engagement.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2200&q=85",
    aboutHeading: "About service",
    aboutDescription:
      "We transform corporate offices, retail flagships, and boutique hospitality venues into compelling physical spaces that reinforce brand identity and maximize operational productivity. By merging ergonomic workflows with striking architectural aesthetics, we craft commercial spaces that resonate with clients and empower teams.",
    whatsIncludedHeading: "What’s include in the services?",
    whatsIncludedDescription:
      "From preliminary brand strategy and test-fits to detailed construction drawings and commercial fit-out management, we oversee every phase of commercial spatial development.",
    deliverables: [
      {
        title: "Brand Spatial Strategy",
        description:
          "Translating your brand ethos, culture, and customer journey into distinctive, immersive architectural environments.",
      },
      {
        title: "Workplace & Traffic Flow Engineering",
        description:
          "High-performance zone layouts balancing open collaboration, acoustic focus pods, executive suites, and public greeting areas.",
      },
      {
        title: "Commercial-Grade Specification",
        description:
          "Durable, fire-rated, and sustainable materials designed to withstand heavy daily footfall while preserving pristine aesthetics.",
      },
      {
        title: "Building Code & Compliance Management",
        description:
          "Rigorous alignment with commercial building regulations, ADA accessibility guidelines, and life-safety requirements.",
      },
      {
        title: "Contractor Coordination & Tender",
        description:
          "Preparation of comprehensive tender packages, MEP coordination, and site supervision through grand opening.",
      },
    ],
  },
  "kitchen-renovations": {
    slug: "kitchen-renovations",
    id: "kitchen-renovations",
    title: "Kitchen Renovations",
    tag: "SERVICE",
    shortDescription:
      "Modern, functional kitchens designed around daily living, culinary passion, and bespoke craftsmanship.",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=2200&q=85",
    aboutHeading: "About service",
    aboutDescription:
      "The kitchen is the culinary and social center of the contemporary home. Our kitchen design philosophy unites ergonomic workflow precision with sculptural focal points — utilizing monolithic marble islands, concealed appliance integration, and handcrafted joinery to create a welcoming culinary retreat.",
    whatsIncludedHeading: "What’s include in the services?",
    whatsIncludedDescription:
      "Our full-scope kitchen renovation covers everything from structural reconfiguration and plumbing rerouting to custom millwork fabrication and stone installation.",
    deliverables: [
      {
        title: "Bespoke Cabinetry & Joinery",
        description:
          "Tailor-made soft-close cabinetry, custom pantry systems, and hidden interior organizers designed for effortless access.",
      },
      {
        title: "Stone Countertops & Splashbacks",
        description:
          "Precision-mitered quartz, quartzite, marble, and porcelain surfaces engineered for beauty and durable daily performance.",
      },
      {
        title: "Integrated Appliance Solutions",
        description:
          "Seamless built-in flush cooktops, concealed refrigeration, wine storage, and smart ventilation systems.",
      },
      {
        title: "Task & Ambient Illumination",
        description:
          "Recessed under-cabinet LED strips, pendant focal lighting, and smart scene dimming for dining and meal preparation.",
      },
      {
        title: "Plumbing & Electrical Upgrades",
        description:
          "Comprehensive MEP coordination including hot water boiling taps, waste disposals, and dedicated circuit infrastructure.",
      },
    ],
  },
  "bathroom-fit-outs": {
    slug: "bathroom-fit-outs",
    id: "bathroom-fit-outs",
    title: "Bathroom Fit-Outs",
    tag: "SERVICE",
    shortDescription:
      "Spa-inspired sanctuaries combining monolithic stone, bespoke brassware, and ambient illumination.",
    image:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=2200&q=85",
    aboutHeading: "About service",
    aboutDescription:
      "We design tranquil, spa-grade bathroom retreats that elevate daily wellness rituals into luxurious sensory experiences. Incorporating seamless waterproof microcement, frameless fluted glass screens, concealed niches, and radiant underfloor heating, each bathroom is built for supreme comfort and longevity.",
    whatsIncludedHeading: "What’s include in the services?",
    whatsIncludedDescription:
      "We manage every phase of the bathroom fit-out from complete rip-out and waterproofing tanking systems to bespoke vanity fabrication and sanitaryware commissioning.",
    deliverables: [
      {
        title: "Waterproofing & Substrate Tanking",
        description:
          "Advanced multi-layer waterproofing membrane systems ensuring 100% moisture protection and structural security.",
      },
      {
        title: "Large-Format Tiling & Microcement",
        description:
          "Flawless stone slabs, textured ceramic tiles, and continuous microcement plaster applied with master craftsmanship.",
      },
      {
        title: "Concealed Sanitaryware & Brassware",
        description:
          "Wall-hung toilets, thermostatic rain showers, freestanding soaker tubs, and brushed brass or gunmetal tapware.",
      },
      {
        title: "Custom Floating Vanities & Basins",
        description:
          "Hand-carved stone basins and floating timber vanities with moisture-sealed integrated storage drawers.",
      },
      {
        title: "Radiant Underfloor Heating",
        description:
          "Programmable electric or hydronic underfloor heating paired with heated towel rails and anti-fog mirror backlighting.",
      },
    ],
  },
  "architectural-extensions": {
    slug: "architectural-extensions",
    id: "architectural-extensions",
    title: "Architectural Extensions",
    tag: "SERVICE",
    shortDescription:
      "Thoughtful spatial extensions and structural additions that harmonize contemporary volumes with existing character.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=85",
    aboutHeading: "About service",
    aboutDescription:
      "Expand your living footprint with light-flooded rear extensions, double-height side returns, and glass pavilions. We seamlessly bridge the gap between existing architectural character and modern open-plan living, creating expansive spaces that connect effortlessly with your outdoor surroundings.",
    whatsIncludedHeading: "What’s include in the services?",
    whatsIncludedDescription:
      "We manage the complete lifecycle of architectural extensions, from preliminary planning permissions and structural engineering to steel installation and glass facade fitting.",
    deliverables: [
      {
        title: "Architectural Planning & Permissions",
        description:
          "Detailed CAD drawings, planning permission submissions, permitted development compliance, and building control liaison.",
      },
      {
        title: "Structural Steelwork & Foundations",
        description:
          "Heavy structural steel frame installation, underpinning, and reinforced concrete foundations engineered for maximum spans.",
      },
      {
        title: "Crittall & Minimalist Glass Facades",
        description:
          "Floor-to-ceiling sliding glass panels, bi-folding doors, and architectural Crittall screens providing seamless garden vistas.",
      },
      {
        title: "Rooflights & Structural Glazing",
        description:
          "Frameless flat rooflights, pitched glass roofs, and walk-on skylights that flood deep floor plans with natural sunlight.",
      },
      {
        title: "Complete Internal Fit-Out",
        description:
          "Full insulation, underfloor heating integration, smooth plastering, and seamless transition flooring to existing zones.",
      },
    ],
  },
};

// Aliases for compatibility
export const serviceSlugAliases: Record<string, string> = {
  kitchen: "kitchen-renovations",
  bathroom: "bathroom-fit-outs",
  loft: "architectural-extensions",
  "full-home": "residential-interiors",
  extensions: "architectural-extensions",
  joinery: "residential-interiors",
  "residential-interiors": "residential-interiors",
  "commercial-design": "commercial-design",
  construction: "construction",
};

export function getServiceBySlug(slug: string): ServiceDetail {
  const normalizedSlug = (slug || "").toLowerCase().trim();
  const directMatch = allServices[normalizedSlug];
  if (directMatch) return directMatch;

  const aliasKey = serviceSlugAliases[normalizedSlug];
  if (aliasKey && allServices[aliasKey]) {
    return allServices[aliasKey];
  }

  // Case-insensitive match or fallback to construction
  const key = Object.keys(allServices).find(
    (k) => k.toLowerCase() === normalizedSlug
  );
  if (key) return allServices[key];

  return allServices.construction;
}
