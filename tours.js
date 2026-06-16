// ===== Datos de los tours (bilingüe ES/EN) =====
// Cada tour tiene su propia página: tour.html?t=<slug>
window.TOURS = {
  'tamarindo': {
    name: { es: 'Tamarindo', en: 'Tamarindo' },
    tagline: { es: 'Surf, atardeceres y vida de playa', en: 'Surf, sunsets, and beach life' },
    region: { es: 'Guanacaste · Pacífico Norte', en: 'Guanacaste · North Pacific' },
    duration: { es: 'Medio día / día completo', en: 'Half / full day' },
    desc: {
      es: 'La playa más famosa de Guanacaste: arena dorada, olas perfectas para aprender a surfear y los atardeceres más espectaculares del Pacífico. Lo llevamos cómodamente desde su hotel hasta Tamarindo y sus alrededores.',
      en: 'Guanacaste’s most famous beach: golden sand, perfect waves to learn to surf, and the most spectacular sunsets on the Pacific. We pick you up at your hotel and drive you straight to Tamarindo and its surroundings.'
    },
    highlights: {
      es: ['Clases de surf para principiantes', 'Atardeceres de postal', 'Restaurantes y vida nocturna', 'Tour en bote por el estuario'],
      en: ['Surf lessons for beginners', 'Postcard sunsets', 'Restaurants and nightlife', 'Estuary boat tour']
    },
    hero: 'assets/tamarindo-aerial.jpg',
    images: [
      { src: 'assets/tamarindo-aerial.jpg', cap: { es: 'Bahía de Tamarindo desde el aire', en: 'Tamarindo bay from above' } },
      { src: 'assets/tamarindo-wide.jpg', cap: { es: 'Caballos al atardecer', en: 'Horses at sunset' } },
      { src: 'assets/hero-tamarindo.jpg', cap: { es: 'Arena dorada y palmeras', en: 'Golden sand and palms' } },
      { src: 'assets/tamarindo-langosta.jpg', cap: { es: 'Playa Langosta, cerca de Tamarindo', en: 'Langosta Beach, near Tamarindo' } }
    ]
  },
  'playa-hermosa': {
    name: { es: 'Playa Hermosa', en: 'Playa Hermosa' },
    tagline: { es: 'Aguas tranquilas en el Golfo de Papagayo', en: 'Calm waters in the Gulf of Papagayo' },
    region: { es: 'Guanacaste · Golfo de Papagayo', en: 'Guanacaste · Gulf of Papagayo' },
    duration: { es: 'Medio día', en: 'Half day' },
    desc: {
      es: 'Una bahía protegida de aguas calmas y arena gris volcánica, ideal para familias, snorkel y nadar con tranquilidad. Una de las playas más relajadas y bonitas del Pacífico Norte.',
      en: 'A sheltered bay of calm waters and grey volcanic sand, ideal for families, snorkeling, and relaxed swimming. One of the most laid-back, beautiful beaches in the North Pacific.'
    },
    highlights: {
      es: ['Aguas tranquilas para nadar', 'Snorkel y kayak', 'Ideal para familias', 'Puestas de sol sobre el golfo'],
      en: ['Calm waters for swimming', 'Snorkeling and kayaking', 'Family-friendly', 'Sunsets over the gulf']
    },
    hero: 'assets/hermosa-sunset.jpg',
    images: [
      { src: 'assets/hermosa-sunset.jpg', cap: { es: 'Atardecer en Playa Hermosa', en: 'Sunset at Playa Hermosa' } },
      { src: 'assets/hermosa-2.jpg', cap: { es: 'La bahía de Playa Hermosa', en: 'Playa Hermosa bay' } },
      { src: 'assets/hermosa-3.jpg', cap: { es: 'Camino a Playa Hermosa', en: 'Road to Playa Hermosa' } }
    ]
  },
  'playa-conchal': {
    name: { es: 'Playa Conchal', en: 'Playa Conchal' },
    tagline: { es: 'Arena de conchas y mar turquesa', en: 'Crushed-shell sand and turquoise sea' },
    region: { es: 'Guanacaste · Pacífico Norte', en: 'Guanacaste · North Pacific' },
    duration: { es: 'Medio día', en: 'Half day' },
    desc: {
      es: 'Una joya única: su arena está hecha de millones de conchas trituradas y el agua es de un turquesa cristalino, perfecta para hacer snorkel. Se llega por Brasilito y es una de las playas más fotografiadas del país.',
      en: 'A one-of-a-kind gem: its sand is made of millions of crushed shells and the water is crystal-clear turquoise, perfect for snorkeling. Reached via Brasilito, it’s one of the most photographed beaches in the country.'
    },
    highlights: {
      es: ['Arena de conchas única', 'Aguas turquesa cristalinas', 'Snorkel entre peces', 'Vistas desde el mirador'],
      en: ['Unique shell sand', 'Crystal turquoise waters', 'Snorkeling among fish', 'Views from the lookout']
    },
    hero: 'assets/conchal-beach.jpg',
    images: [
      { src: 'assets/conchal-beach.jpg', cap: { es: 'Playa Conchal', en: 'Playa Conchal' } },
      { src: 'assets/conchal-2.jpg', cap: { es: 'La bahía de Conchal', en: 'Conchal bay' } },
      { src: 'assets/conchal-3.jpg', cap: { es: 'Arena de conchas', en: 'Crushed-shell sand' } },
      { src: 'assets/brasilito-pano.jpg', cap: { es: 'Bahía de Brasilito y Conchal', en: 'Brasilito and Conchal bay' } }
    ]
  },
  'la-fortuna': {
    name: { es: 'La Fortuna · Volcán Arenal', en: 'La Fortuna · Arenal Volcano' },
    tagline: { es: 'Volcán, catarata y aguas termales', en: 'Volcano, waterfall, and hot springs' },
    region: { es: 'Alajuela · Zona Norte', en: 'Alajuela · Northern Zone' },
    duration: { es: 'Día completo', en: 'Full day' },
    desc: {
      es: 'Un viaje al imponente Volcán Arenal: la espectacular Catarata de La Fortuna, aguas termales naturales y los paisajes verdes más impresionantes de Costa Rica. Un viaje de día completo desde Guanacaste que vale cada kilómetro.',
      en: 'A trip to the towering Arenal Volcano: the spectacular La Fortuna Waterfall, natural hot springs, and the most impressive green landscapes in Costa Rica. A full-day trip from Guanacaste that’s worth every kilometer.'
    },
    highlights: {
      es: ['Vistas del Volcán Arenal', 'Catarata de La Fortuna', 'Aguas termales naturales', 'Lago Arenal'],
      en: ['Arenal Volcano views', 'La Fortuna Waterfall', 'Natural hot springs', 'Lake Arenal']
    },
    hero: 'assets/fortuna.jpg',
    images: [
      { src: 'assets/fortuna.jpg', cap: { es: 'Volcán Arenal', en: 'Arenal Volcano' } },
      { src: 'assets/fortuna-waterfall.jpg', cap: { es: 'Catarata de La Fortuna', en: 'La Fortuna Waterfall' } },
      { src: 'assets/fortuna-2.jpg', cap: { es: 'Paisaje del Arenal', en: 'Arenal landscape' } },
      { src: 'assets/fortuna-lake.jpg', cap: { es: 'Volcán y Lago Arenal', en: 'Volcano and Lake Arenal' } }
    ]
  },
  'rio-celeste': {
    name: { es: 'Río Celeste', en: 'Río Celeste' },
    tagline: { es: 'El río azul del Volcán Tenorio', en: 'The blue river of Tenorio Volcano' },
    region: { es: 'Guanacaste · Parque Nacional Tenorio', en: 'Guanacaste · Tenorio National Park' },
    duration: { es: 'Día completo', en: 'Full day' },
    desc: {
      es: 'Un fenómeno natural increíble: un río y una catarata de un color azul celeste imposible, creado por la mezcla de minerales volcánicos. Una caminata por la selva del Parque Nacional Volcán Tenorio hasta una de las maravillas naturales de Costa Rica.',
      en: 'An incredible natural phenomenon: a river and waterfall of an impossibly sky-blue color, created by the mix of volcanic minerals. A hike through the rainforest of Tenorio Volcano National Park to one of Costa Rica’s natural wonders.'
    },
    highlights: {
      es: ['Catarata azul celeste', 'Caminata por la selva', 'Los Teñideros (nace el azul)', 'Aguas termales y borbollones'],
      en: ['Sky-blue waterfall', 'Rainforest hike', 'Los Teñideros (where the blue is born)', 'Hot springs and bubbling pools']
    },
    hero: 'assets/rio-celeste.jpg',
    images: [
      { src: 'assets/rio-celeste.jpg', cap: { es: 'Catarata de Río Celeste', en: 'Río Celeste waterfall' } },
      { src: 'assets/rio-celeste-2.jpg', cap: { es: 'Aguas color celeste', en: 'Sky-blue waters' } },
      { src: 'assets/rio-celeste-3.jpg', cap: { es: 'Sendero del Tenorio', en: 'Tenorio trail' } },
      { src: 'assets/rio-celeste-4.jpg', cap: { es: 'El río azul', en: 'The blue river' } }
    ]
  },
  'san-jose': {
    name: { es: 'San José', en: 'San José' },
    tagline: { es: 'La capital: cultura, historia y compras', en: 'The capital: culture, history, and shopping' },
    region: { es: 'Valle Central', en: 'Central Valley' },
    duration: { es: 'Día completo', en: 'Full day' },
    desc: {
      es: 'La capital de Costa Rica, en el Valle Central: el majestuoso Teatro Nacional, museos, mercados, gastronomía y las mejores compras del país. Un traslado cómodo desde Guanacaste para conocer el corazón cultural de Costa Rica.',
      en: 'The capital of Costa Rica, in the Central Valley: the majestic National Theatre, museums, markets, cuisine, and the best shopping in the country. A comfortable transfer from Guanacaste to discover the cultural heart of Costa Rica.'
    },
    highlights: {
      es: ['Teatro Nacional', 'Museos del Oro y Jade', 'Mercado Central', 'Compras y gastronomía'],
      en: ['National Theatre', 'Gold & Jade museums', 'Central Market', 'Shopping and cuisine']
    },
    hero: 'assets/san-jose.jpg',
    images: [
      { src: 'assets/san-jose.jpg', cap: { es: 'Teatro Nacional', en: 'National Theatre' } },
      { src: 'assets/san-jose-2.jpg', cap: { es: 'Teatro Nacional de Costa Rica', en: 'National Theatre of Costa Rica' } },
      { src: 'assets/san-jose-3.jpg', cap: { es: 'Centro de San José', en: 'Downtown San José' } },
      { src: 'assets/san-jose-4.jpg', cap: { es: 'Plaza central', en: 'Central square' } }
    ]
  },
  'catarata-la-leona': {
    name: { es: 'Catarata La Leona', en: 'La Leona Waterfall' },
    tagline: { es: 'Un cañón turquesa escondido', en: 'A hidden turquoise canyon' },
    region: { es: 'Guanacaste · Bijagua', en: 'Guanacaste · Bijagua' },
    duration: { es: 'Día completo', en: 'Full day' },
    desc: {
      es: 'Una aventura para los más intrépidos: una caminata entre cañones y ríos hasta una catarata escondida de aguas color turquesa, rodeada de paredes de roca. Un tesoro poco conocido cerca de Bijagua, perfecto para los amantes de la naturaleza.',
      en: 'An adventure for the bold: a hike through canyons and rivers to a hidden waterfall of turquoise water, surrounded by rock walls. A little-known treasure near Bijagua, perfect for nature lovers.'
    },
    highlights: {
      es: ['Catarata turquesa escondida', 'Caminata por cañones y ríos', 'Naturaleza salvaje', 'Aventura fuera de ruta'],
      en: ['Hidden turquoise waterfall', 'Hike through canyons and rivers', 'Wild nature', 'Off-the-beaten-path adventure']
    },
    hero: 'assets/la-leona.jpg',
    note: { es: 'Imagen ilustrativa — próximamente fotos reales.', en: 'Illustrative image — real photos coming soon.' },
    images: [
      { src: 'assets/la-leona.jpg', cap: { es: 'Catarata La Leona (ilustración)', en: 'La Leona Waterfall (illustration)' } }
    ]
  }
};

window.TOUR_ORDER = ['tamarindo', 'playa-hermosa', 'playa-conchal', 'la-fortuna', 'rio-celeste', 'san-jose', 'catarata-la-leona'];
