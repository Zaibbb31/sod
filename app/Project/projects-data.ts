export interface ProjectDetail {
  id: string;
  title: string;
  client: string;
  type: string;
  category: "Residential" | "Commercial" | "Hospitality";
  size: string;
  location: string;
  completed: string;
  heroQuote: string;
  mainHeadline: string;
  description: string;
  heroImage: string;
  process: string[];
  carousel: {
    image: string;
    caption: string;
  }[];
  bento: {
    image: string;
    alt: string;
  }[];
}

export const allProjects: Record<string, ProjectDetail> = {
  "maison-doree": {
    id: "maison-doree",
    title: "Maison Dorée",
    client: "Ciel Penthouse",
    type: "Residential",
    category: "Residential",
    size: "290 sqft",
    location: "Casablanca, Morocco",
    completed: "2024",
    heroQuote:
      "a rooftop residence in Casablanca suspended between the Atlantic horizon and the city below.",
    mainHeadline:
      "A 290 sqft penthouse in Casablanca — designed to dissolve the boundary between interior and sky, between the private world and the vast Atlantic beyond it.",
    description:
      "intr ® was appointed to design a penthouse where the brief was ultimately defined by what lay outside it. Uninterrupted views west toward the ocean demanded an interior that never competed — that receded entirely to allow the horizon to do its work. Every finish was chosen for its ability to disappear: soft white plaster, bleached oak, hand-thrown ceramic, and sheer linen. Furniture sits low throughout. Sightlines were protected in every room. No surface was allowed to draw attention to itself. The architecture of the view was treated as the primary material of the project — everything else was in service of it.",
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2560&q=85",
    process: [
      "Pre-Concept",
      "Concept Design",
      "Schematic Design",
      "Detail Design",
      "Tender Documentation",
      "Construction Support",
    ],
    carousel: [
      {
        image:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85",
        caption:
          "An uninterrupted view toward the Atlantic that allows natural light to sculpt the minimalist interior.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85",
        caption:
          "A continuous stone floor running from inside to outside, erasing the boundary between the interior and the sky.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
        caption:
          "Custom curved bouclé lounge seating tailored specifically for the open living floorplan.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
        caption:
          "Bespoke monolithic travertine vanity counter paired with seamless arched architectural transitions.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1600&q=85",
        caption:
          "Monochromatic plaster bedroom retreat featuring understated ambient perimeter cove illumination.",
      },
    ],
    bento: [
      {
        image:
          "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=85",
        alt: "Materiality and tactile travertine stone detail",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85",
        alt: "Outdoor sunlit terrace panoramic with bespoke curved sofa",
      },
      {
        image:
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85",
        alt: "Serene bedroom sanctuary with textured bouclé bed",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
        alt: "Living lounge perspective viewed through curved arched entryway",
      },
    ],
  },
  birchwood: {
    id: "birchwood",
    title: "The Birchwood Residence",
    client: "The Whitfield Family",
    type: "Residential",
    category: "Residential",
    size: "4,200 sqft",
    location: "Cotswolds, United Kingdom",
    completed: "2024",
    heroQuote:
      "a country estate celebrating monolithic English limestone, warm timber, and timeless proportion.",
    mainHeadline:
      "A 4,200 sqft countryside estate designed to weave natural light, organic materials, and refined craft into daily living.",
    description:
      "Set against the rolling landscape of the Cotswolds, The Birchwood Residence brings calm elegance to rural living. We composed an architectural journey centered on continuous daylight, raw textural stone, and handcrafted joinery that ages gracefully over generations.",
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2560&q=85",
    process: [
      "Pre-Concept",
      "Concept Design",
      "Schematic Design",
      "Detail Design",
      "Tender Documentation",
      "Construction Support",
    ],
    carousel: [
      {
        image:
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
        caption:
          "Double-height living space framed with floor-to-ceiling blackened bronze windows.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
        caption:
          "Handcrafted smoked oak kitchen island with integrated natural marble slab countertop.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85",
        caption:
          "Tranquil primary suite capturing panoramic sunrise vistas across the private garden.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1600&q=85",
        caption:
          "Custom architectural fireplace crafted in solid fluted travertine block.",
      },
    ],
    bento: [
      {
        image:
          "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=85",
        alt: "Textural details and architectural hardware",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85",
        alt: "Outdoor garden terrace and stone water feature",
      },
      {
        image:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85",
        alt: "Light-filled lounge with natural linen drapery",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
        alt: "Bespoke library alcove with integrated book shelving",
      },
    ],
  },
  kestrel: {
    id: "kestrel",
    title: "Kestrel & Co Headquarters",
    client: "Kestrel & Co",
    type: "Commercial",
    category: "Commercial",
    size: "8,500 sqft",
    location: "Mayfair, London",
    completed: "2025",
    heroQuote:
      "a multidisciplinary workspace harmonizing executive hospitality, acoustic privacy, and architectural precision.",
    mainHeadline:
      "An 8,500 sqft corporate headquarters in Mayfair reimagined as a warm, human-centered sanctuary for modern enterprise.",
    description:
      "Designed for a progressive investment firm, Kestrel Headquarters balances quiet luxury with high-performance functionality. Seamless acoustic wall paneling, fluted glass partitions, and sculptural furniture create an inspiring workplace that feels more like an exclusive private club.",
    heroImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2560&q=85",
    process: [
      "Pre-Concept",
      "Concept Design",
      "Schematic Design",
      "Detail Design",
      "Tender Documentation",
      "Construction Support",
    ],
    carousel: [
      {
        image:
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
        caption:
          "Executive reception lounge adorned with custom walnut millwork and brushed brass.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
        caption:
          "Boardroom with monolithic quartzite conference table and micro-perforated acoustic ceiling.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
        caption:
          "Breakout hospitality salon designed for collaborative thought and informal meetings.",
      },
    ],
    bento: [
      {
        image:
          "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=85",
        alt: "Architectural lighting and tactile millwork",
      },
      {
        image:
          "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1600&q=85",
        alt: "Open-plan gallery and meeting corridor",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
        alt: "Private partner office with curated art collection",
      },
      {
        image:
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
        alt: "Acoustic booths and private call nooks",
      },
    ],
  },
  marlowe: {
    id: "marlowe",
    title: "Marlowe Coastal Retreat",
    client: "Marlowe Family",
    type: "Residential",
    category: "Residential",
    size: "3,800 sqft",
    location: "St Ives, Cornwall",
    completed: "2024",
    heroQuote:
      "a cliffside sanctuary where floor-to-ceiling ocean vistas meet raw cedar, tumbled stone, and soft linen.",
    mainHeadline:
      "A 3,800 sqft cliffside retreat in Cornwall crafted to celebrate rugged coastal light and effortless family calm.",
    description:
      "Perched directly above the Atlantic shore, the Marlowe Coastal Retreat was built to withstand the elements while providing a deeply nurturing sanctuary. Earthy lime washes, solid oak flooring, and organic ceramic finishes reflect the surrounding dunes and sea breeze.",
    heroImage:
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=2560&q=85",
    process: [
      "Pre-Concept",
      "Concept Design",
      "Schematic Design",
      "Detail Design",
      "Tender Documentation",
      "Construction Support",
    ],
    carousel: [
      {
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
        caption:
          "Panoramic ocean terrace with sunken seating pit and integrated fire bowl.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85",
        caption:
          "Sunlit living hall featuring bleached timber beams and sheer Belgian linen curtains.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
        caption:
          "Bespoke culinary island with fluted quartzite base and concealed pantry.",
      },
    ],
    bento: [
      {
        image:
          "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=85",
        alt: "Coastal texture and hand-thrown ceramic detail",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85",
        alt: "Outdoor cedar deck overlooking the sea",
      },
      {
        image:
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85",
        alt: "Master bedroom suite with ocean view balcony",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
        alt: "Ensuite bath with monolithic freestanding tub",
      },
    ],
  },
  sloane: {
    id: "sloane",
    title: "Sloane Square Penthouse",
    client: "Private Client",
    type: "Residential",
    category: "Residential",
    size: "3,100 sqft",
    location: "Chelsea, London",
    completed: "2024",
    heroQuote:
      "a refined duplex apartment balancing classical London architectural heritage with avant-garde minimalism.",
    mainHeadline:
      "A 3,100 sqft duplex penthouse in Sloane Square combining historic plaster mouldings with contemporary Italian marble.",
    description:
      "Overlooking the historic canopy of Chelsea, this penthouse underwent a full structural re-imagining. Classical Georgian proportions were enhanced with custom bronze pivot doors, chevron oak floors, and a monolithic Nero Marquina floating staircase.",
    heroImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2560&q=85",
    process: [
      "Pre-Concept",
      "Concept Design",
      "Schematic Design",
      "Detail Design",
      "Tender Documentation",
      "Construction Support",
    ],
    carousel: [
      {
        image:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85",
        caption:
          "Living salon showcasing restored heritage cornicing alongside minimal modern furniture.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
        caption:
          "Sculptural floating staircase illuminated with recessed architectural LEDs.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85",
        caption:
          "Private rooftop terrace with panoramic views across the London skyline.",
      },
    ],
    bento: [
      {
        image:
          "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=85",
        alt: "Nero Marquina marble craftsmanship",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
        alt: "Rooftop terrace entertaining area",
      },
      {
        image:
          "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1600&q=85",
        alt: "Formal dining space with bespoke glass chandelier",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
        alt: "Primary dressing room with smoked glass wardrobes",
      },
    ],
  },
  aura: {
    id: "aura",
    title: "Aura Wellness Sanctuary",
    client: "Aura Collective",
    type: "Commercial",
    category: "Commercial",
    size: "6,000 sqft",
    location: "Zurich, Switzerland",
    completed: "2025",
    heroQuote:
      "a holistic thermal sanctuary combining monolithic basalt stone, warm steam, and ambient darkness.",
    mainHeadline:
      "A 6,000 sqft luxury wellness retreat in Zurich rooted in elemental serenity and restorative spatial rhythm.",
    description:
      "Designed as an oasis for urban rejuvenation, Aura Wellness Sanctuary utilizes tactile natural stone, acoustically tuned water walls, and circadian lighting to transport guests into a deep state of stillness.",
    heroImage:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=2560&q=85",
    process: [
      "Pre-Concept",
      "Concept Design",
      "Schematic Design",
      "Detail Design",
      "Tender Documentation",
      "Construction Support",
    ],
    carousel: [
      {
        image:
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85",
        caption:
          "Hydrothermal bath surrounded by monolithic fluted basalt slabs and indirect lighting.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
        caption:
          "Relaxation pavilion featuring ergonomic heated stone loungers and herbal tea bar.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85",
        caption:
          "Treatment suites wrapped in natural cedar wood and acoustic fabric.",
      },
    ],
    bento: [
      {
        image:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
        alt: "Basalt stone and water fountain detail",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85",
        alt: "Outdoor thermal infinity pool",
      },
      {
        image:
          "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1600&q=85",
        alt: "Meditation hall with filtered skylight",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
        alt: "Private sauna with panoramic forest view",
      },
    ],
  },
  kensington: {
    id: "kensington",
    title: "Kensington Villa & Garden",
    client: "Sterling Estate",
    type: "Residential",
    category: "Residential",
    size: "5,400 sqft",
    location: "Kensington, London",
    completed: "2024",
    heroQuote:
      "a grand Victorian townhouse brought into the light through architectural glass, limestone, and bespoke joinery.",
    mainHeadline:
      "A 5,400 sqft Victorian townhouse in Kensington reborn with light-wells, courtyard gardens, and bespoke Italian millwork.",
    description:
      "A comprehensive historic renovation celebrating the original 19th-century facade while introducing a bright, modern open-plan interior. A central glass atrium links the formal reception rooms with a private rear garden terrace.",
    heroImage:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=2560&q=85",
    process: [
      "Pre-Concept",
      "Concept Design",
      "Schematic Design",
      "Detail Design",
      "Tender Documentation",
      "Construction Support",
    ],
    carousel: [
      {
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
        caption:
          "Garden-level dining atrium seamlessly connected to landscaped sunken terrace.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85",
        caption:
          "Formal drawing room with restored marble fireplace and hand-applied lime plaster.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
        caption:
          "Custom chef's kitchen featuring honed Calacatta marble and integrated wine display.",
      },
    ],
    bento: [
      {
        image:
          "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=85",
        alt: "Artisan brass details and custom ironmongery",
      },
      {
        image:
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85",
        alt: "Sunken private courtyard garden",
      },
      {
        image:
          "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1600&q=85",
        alt: "Primary bedroom suite overlooking private gardens",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
        alt: "Private screening lounge and library",
      },
    ],
  },
  pavilion: {
    id: "pavilion",
    title: "The Pavilion Studio",
    client: "Studio Arch Ltd",
    type: "Commercial",
    category: "Commercial",
    size: "2,800 sqft",
    location: "SoHo, New York",
    completed: "2024",
    heroQuote:
      "a light-flooded architectural studio celebrating cast iron columns, polished concrete, and raw oak partitions.",
    mainHeadline:
      "A 2,800 sqft cast-iron loft in SoHo transformed into an airy design workshop and gallery space.",
    description:
      "Located in the heart of SoHo's historic cast-iron district, The Pavilion Studio blends industrial character with refined minimalist finishes. Custom steel pivot partitions, exposed brickwork, and warm diffused lighting foster an inspiring creative environment.",
    heroImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2560&q=85",
    process: [
      "Pre-Concept",
      "Concept Design",
      "Schematic Design",
      "Detail Design",
      "Tender Documentation",
      "Construction Support",
    ],
    carousel: [
      {
        image:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85",
        caption:
          "Open studio floor with communal solid oak workbenches and oversized skylights.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
        caption:
          "Material sample library with bespoke sliding display trays in powder-coated steel.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1600&q=85",
        caption:
          "Acoustic client lounge with integrated media presentation screens.",
      },
    ],
    bento: [
      {
        image:
          "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=85",
        alt: "Industrial steel and cast iron column joint",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85",
        alt: "Studio workshop and prototyping table",
      },
      {
        image:
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85",
        alt: "Coffee bar and team gathering area",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
        alt: "Private focus booths and phone pods",
      },
    ],
  },
  highland: {
    id: "highland",
    title: "Highland Stone Residence",
    client: "The MacLeod Estate",
    type: "Residential",
    category: "Residential",
    size: "4,600 sqft",
    location: "Scottish Highlands, UK",
    completed: "2025",
    heroQuote:
      "a monolithic stone retreat echoing the dramatic geological contours of the Scottish Highlands.",
    mainHeadline:
      "A 4,600 sqft modern highland lodge designed around heavy dry-stone masonry, charred larch, and blazing hearths.",
    description:
      "Constructed from local granite and reclaimed Scottish larch, Highland Stone Residence merges seamlessly with the wild moorland. Expansive picture windows frame mountain panoramas, while warm wool textiles and deep hearths provide comforting shelter.",
    heroImage:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2560&q=85",
    process: [
      "Pre-Concept",
      "Concept Design",
      "Schematic Design",
      "Detail Design",
      "Tender Documentation",
      "Construction Support",
    ],
    carousel: [
      {
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
        caption:
          "Great hall with soaring cathedral timber ceiling and central open hearth.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85",
        caption:
          "Dining lodge overlooking the mist-covered loch and private forest grounds.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
        caption:
          "Primary bedroom featuring custom tartan upholstery and raw granite walls.",
      },
    ],
    bento: [
      {
        image:
          "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=85",
        alt: "Local granite masonry and timber joinery",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85",
        alt: "External terrace with panoramic Highland loch view",
      },
      {
        image:
          "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1600&q=85",
        alt: "Cozy library with built-in leather window seat",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
        alt: "Boot room and gun room with bespoke oak storage",
      },
    ],
  },
  lumiere: {
    id: "lumiere",
    title: "Lumière Boutique Atelier",
    client: "Maison Lumière",
    type: "Commercial",
    category: "Commercial",
    size: "2,200 sqft",
    location: "Paris, France",
    completed: "2024",
    heroQuote:
      "a Parisian haute couture boutique crafted in champagne brass, curved fluted plaster, and honed velvet.",
    mainHeadline:
      "A 2,200 sqft Parisian fashion atelier designed as a softly glowing jewel box on Rue Saint-Honoré.",
    description:
      "Designed for an iconic Parisian fashion house, Lumière Boutique Atelier reinterprets classical Haussmannian elegance through organic curves, luminous translucent fabric scrims, and sculptured display podiums in Portuguese pink marble.",
    heroImage:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2560&q=85",
    process: [
      "Pre-Concept",
      "Concept Design",
      "Schematic Design",
      "Detail Design",
      "Tender Documentation",
      "Construction Support",
    ],
    carousel: [
      {
        image:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85",
        caption:
          "Central salon with custom velvet banquette seating and floating jewelry vitrines.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
        caption:
          "VIP fitting salon enclosed in curved floor-to-ceiling silk acoustic drapery.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
        caption:
          "Bespoke champagne brass hanging rails and sculpted marble accessory podiums.",
      },
    ],
    bento: [
      {
        image:
          "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=85",
        alt: "Handcrafted champagne brass hardware detail",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85",
        alt: "Atelier storefront facade on Rue Saint-Honoré",
      },
      {
        image:
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85",
        alt: "Private couture styling lounge",
      },
      {
        image:
          "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=85",
        alt: "Archway leading to private client dressing suites",
      },
    ],
  },
};

export function getProjectBySlug(slug: string): ProjectDetail {
  // Normalize slug
  const cleanSlug = slug.toLowerCase().replace(/[^a-z0-9-]/g, "");
  if (allProjects[cleanSlug]) {
    return allProjects[cleanSlug];
  }
  // If slug contains 'doree' or 'maison'
  if (cleanSlug.includes("dore") || cleanSlug.includes("maison")) {
    return allProjects["maison-doree"];
  }
  // Return first project by default if not found
  return allProjects[cleanSlug] || allProjects["maison-doree"];
}
