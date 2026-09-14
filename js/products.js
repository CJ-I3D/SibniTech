/* SIBNI product catalogue
   Temporary prices are deliberately easy to change.
   No chip/model information is exposed in the customer-facing catalogue.
*/

const CATALOG = {
  "large-square": {
    name: "Large Square Tag",
    slug: "large-square",
    tagline: 'Large square design with "HELP. SCAN NFC" text.',
    icon: "large-square",
    tint: "blue",
    badge: "Square",
    options: [
      { id: "large-square-no-carabiner", label: "Without carabiner", price: 12.99, mount: "Tag only" },
      { id: "large-square-carabiner", label: "With carabiner", price: 15.99, mount: "Aluminium carabiner" }
    ]
  },
  "small-square": {
    name: "Small Square Tag",
    slug: "small-square",
    tagline: 'Small square design with "HELP. SCAN NFC" text.',
    icon: "small-square",
    tint: "green",
    badge: "Square",
    options: [
      { id: "small-square-no-carabiner", label: "Without carabiner", price: 10.99, mount: "Tag only" },
      { id: "small-square-carabiner", label: "With carabiner", price: 13.99, mount: "Aluminium carabiner" }
    ]
  },
  "large-round": {
    name: "Large Round Tag",
    slug: "large-round",
    tagline: 'Large round design with "HELP. SCAN NFC" text.',
    icon: "large-round",
    tint: "amber",
    badge: "Round",
    options: [
      { id: "large-round-no-carabiner", label: "Without carabiner", price: 12.99, mount: "Tag only" },
      { id: "large-round-carabiner", label: "With carabiner", price: 15.99, mount: "Aluminium carabiner" }
    ]
  },
  "small-round": {
    name: "Small Round Tag",
    slug: "small-round",
    tagline: 'Small round design with "HELP. SCAN NFC" text.',
    icon: "small-round",
    tint: "violet",
    badge: "Round",
    options: [
      { id: "small-round-no-carabiner", label: "Without carabiner", price: 10.99, mount: "Tag only" },
      { id: "small-round-carabiner", label: "With carabiner", price: 13.99, mount: "Aluminium carabiner" }
    ]
  },
  "lace-car": {
    name: "Car Shoelace / Velcro Tag",
    slug: "lace-car",
    tagline: 'Car design for shoelaces or velcro.',
    icon: "car",
    tint: "blue",
    badge: "Shoelace / velcro",
    options: [
      { id: "lace-car-shoelace", label: "Shoelace", price: 11.99, mount: "Shoelace mount" },
      { id: "lace-car-velcro", label: "Velcro", price: 11.99, mount: "Velcro mount" }
    ]
  },
  "lace-duck": {
    name: "Duck Shoelace / Velcro Tag",
    slug: "lace-duck",
    tagline: 'Duck design for shoelaces or velcro.',
    icon: "duck",
    tint: "amber",
    badge: "Shoelace / velcro",
    options: [
      { id: "lace-duck-shoelace", label: "Shoelace", price: 11.99, mount: "Shoelace mount" },
      { id: "lace-duck-velcro", label: "Velcro", price: 11.99, mount: "Velcro mount" }
    ]
  },
  "lace-rocket": {
    name: "Rocket Shoelace / Velcro Tag",
    slug: "lace-rocket",
    tagline: 'Rocket design for shoelaces or velcro.',
    icon: "rocket",
    tint: "violet",
    badge: "Shoelace / velcro",
    options: [
      { id: "lace-rocket-shoelace", label: "Shoelace", price: 11.99, mount: "Shoelace mount" },
      { id: "lace-rocket-velcro", label: "Velcro", price: 11.99, mount: "Velcro mount" }
    ]
  },
  "lace-bowtie": {
    name: "Bowtie Shoelace / Velcro Tag",
    slug: "lace-bowtie",
    tagline: 'Bowtie design for shoelaces or velcro.',
    icon: "bowtie",
    tint: "green",
    badge: "Shoelace / velcro",
    options: [
      { id: "lace-bowtie-shoelace", label: "Shoelace", price: 11.99, mount: "Shoelace mount" },
      { id: "lace-bowtie-velcro", label: "Velcro", price: 11.99, mount: "Velcro mount" }
    ]
  },
  "lace-rectangle": {
    name: "Simple Rectangle Shoelace / Velcro Tag",
    slug: "lace-rectangle",
    tagline: 'Simple rectangle design for shoelaces or velcro.',
    icon: "rectangle",
    tint: "blue",
    badge: "Shoelace / velcro",
    options: [
      { id: "lace-rectangle-shoelace", label: "Shoelace", price: 10.99, mount: "Shoelace mount" },
      { id: "lace-rectangle-velcro", label: "Velcro", price: 10.99, mount: "Velcro mount" }
    ]
  },
  "flower": {
    name: "Flower Tag",
    slug: "flower",
    tagline: 'Flower-shaped design with "HELP. SCAN NFC" text.',
    icon: "flower",
    tint: "violet",
    badge: "Flower",
    options: [
      { id: "flower-no-carabiner", label: "Without carabiner", price: 12.99, mount: "Tag only" },
      { id: "flower-carabiner", label: "With carabiner", price: 15.99, mount: "Aluminium carabiner" }
    ]
  },
  "dog": {
    name: "Dog Tag",
    slug: "dog",
    tagline: 'Dog-shaped design with "HELP. SCAN NFC" text.',
    icon: "dog",
    tint: "amber",
    badge: "Animal",
    options: [
      { id: "dog-no-carabiner", label: "Without carabiner", price: 13.99, mount: "Tag only" },
      { id: "dog-carabiner", label: "With carabiner", price: 16.99, mount: "Aluminium carabiner" }
    ]
  },
  "cat": {
    name: "Cat Tag",
    slug: "cat",
    tagline: 'Cat-shaped design with "HELP. SCAN NFC" text.',
    icon: "cat",
    tint: "green",
    badge: "Animal",
    options: [
      { id: "cat-no-carabiner", label: "Without carabiner", price: 13.99, mount: "Tag only" },
      { id: "cat-carabiner", label: "With carabiner", price: 16.99, mount: "Aluminium carabiner" }
    ]
  },
  "car": {
    name: "Car Tag",
    slug: "car",
    tagline: 'Car-shaped design with "HELP. SCAN NFC" text.',
    icon: "car",
    tint: "blue",
    badge: "Shape",
    options: [
      { id: "car-no-carabiner", label: "Without carabiner", price: 13.99, mount: "Tag only" },
      { id: "car-carabiner", label: "With carabiner", price: 16.99, mount: "Aluminium carabiner" }
    ]
  },
  "plane": {
    name: "Plane Tag",
    slug: "plane",
    tagline: 'Plane-shaped design with "HELP. SCAN NFC" text.',
    icon: "plane",
    tint: "blue",
    badge: "Shape",
    options: [
      { id: "plane-no-carabiner", label: "Without carabiner", price: 13.99, mount: "Tag only" },
      { id: "plane-carabiner", label: "With carabiner", price: 16.99, mount: "Aluminium carabiner" }
    ]
  },
  "business-card": {
    name: "Business Card Tag",
    slug: "business-card",
    tagline: "A very thin, wallet-friendly business-card shape.",
    icon: "business-card",
    tint: "green",
    badge: "Ultra thin",
    options: [
      { id: "business-card", label: "Standard", price: 14.99, mount: "Thin card format" }
    ]
  },
  "custom": {
    name: "Custom Tag",
    slug: "custom",
    tagline: "A custom shape or size made to your specification.",
    icon: "custom",
    tint: "violet",
    badge: "Made to spec",
    options: [
      { id: "custom", label: "Made to specification", price: 24.99, mount: "Custom" }
    ]
  }
};

/* Flatten variants for the existing cart system. */
const PRODUCTS = {};
Object.entries(CATALOG).forEach(([catalogId, product]) => {
  product.options.forEach(option => {
    PRODUCTS[option.id] = {
      name: product.name + (product.options.length > 1 ? " — " + option.label : ""),
      baseName: product.name,
      price: option.price,
      tagline: product.tagline,
      icon: product.icon,
      tint: product.tint,
      badge: product.badge,
      mount: option.mount,
      catalogId
    };
  });
});

function money(n){ return "€" + Number(n).toFixed(2); }

function tagLabelSvg(){
  return `<text x="50" y="78" text-anchor="middle" font-family="Arial, sans-serif" font-size="7" font-weight="700" fill="currentColor">HELP. SCAN NFC</text>`;
}

function productIcon(kind){
  const stroke = 'stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  const label = tagLabelSvg();
  switch(kind){
    case "large-square":
      return `<svg viewBox="0 0 100 100" ${stroke}><rect x="12" y="12" width="76" height="76" rx="10"/><circle cx="76" cy="24" r="5"/>${label}</svg>`;
    case "small-square":
      return `<svg viewBox="0 0 100 100" ${stroke}><rect x="22" y="22" width="56" height="56" rx="8"/><circle cx="69" cy="30" r="4"/>${label}</svg>`;
    case "large-round":
      return `<svg viewBox="0 0 100 100" ${stroke}><circle cx="50" cy="50" r="38"/><circle cx="76" cy="24" r="5"/>${label}</svg>`;
    case "small-round":
      return `<svg viewBox="0 0 100 100" ${stroke}><circle cx="50" cy="50" r="28"/><circle cx="69" cy="31" r="4"/>${label}</svg>`;
    case "flower":
      return `<svg viewBox="0 0 100 100" ${stroke}><path d="M50 44 C39 25 18 31 27 48 C8 45 5 66 26 66 C17 83 39 88 50 70 C61 88 83 83 74 66 C95 66 92 45 73 48 C82 31 61 25 50 44Z"/><circle cx="50" cy="55" r="8"/>${label}</svg>`;
    case "dog":
      return `<svg viewBox="0 0 100 100" ${stroke}><path d="M30 38 L19 25 L16 48 Q16 73 50 76 Q84 73 84 48 L81 25 L70 38"/><circle cx="38" cy="51" r="2"/><circle cx="62" cy="51" r="2"/><path d="M45 60 Q50 64 55 60"/>${label}</svg>`;
    case "cat":
      return `<svg viewBox="0 0 100 100" ${stroke}><path d="M25 42 L23 22 L40 31 Q50 27 60 31 L77 22 L75 42 Q82 64 50 76 Q18 64 25 42Z"/><circle cx="39" cy="51" r="2"/><circle cx="61" cy="51" r="2"/><path d="M46 60 Q50 63 54 60"/>${label}</svg>`;
    case "car":
      return `<svg viewBox="0 0 100 100" ${stroke}><path d="M20 58 L27 40 H73 L80 58 V70 H20Z"/><path d="M33 40 L39 29 H61 L67 40"/><circle cx="32" cy="68" r="6"/><circle cx="68" cy="68" r="6"/>${label}</svg>`;
    case "plane":
      return `<svg viewBox="0 0 100 100" ${stroke}><path d="M50 14 L57 47 L83 60 L78 66 L57 60 L54 82 L62 88 L50 91 L38 88 L46 82 L43 60 L22 66 L17 60 L43 47Z"/>${label}</svg>`;
    case "duck":
      return `<svg viewBox="0 0 100 100" ${stroke}><circle cx="48" cy="52" r="26"/><circle cx="69" cy="36" r="15"/><path d="M79 39 L91 43 L79 47"/><circle cx="72" cy="33" r="2"/>${label}</svg>`;
    case "rocket":
      return `<svg viewBox="0 0 100 100" ${stroke}><path d="M50 14 Q72 29 63 62 L50 78 L37 62 Q28 29 50 14Z"/><circle cx="50" cy="40" r="5"/><path d="M37 55 L23 64 L36 67 M63 55 L77 64 L64 67 M44 74 L39 88 L50 82 L61 88 L56 74"/>${label}</svg>`;
    case "bowtie":
      return `<svg viewBox="0 0 100 100" ${stroke}><path d="M50 50 L18 31 L12 36 L20 50 L12 64 L18 69Z"/><path d="M50 50 L82 31 L88 36 L80 50 L88 64 L82 69Z"/><rect x="44" y="43" width="12" height="14" rx="3"/>${label}</svg>`;
    case "rectangle":
      return `<svg viewBox="0 0 100 100" ${stroke}><rect x="16" y="34" width="68" height="32" rx="5"/><circle cx="77" cy="42" r="3"/>${label}</svg>`;
    case "business-card":
      return `<svg viewBox="0 0 100 100" ${stroke}><rect x="10" y="28" width="80" height="44" rx="4"/><path d="M20 42 H80 M20 52 H55 M20 60 H42"/>${label}</svg>`;
    case "custom":
      return `<svg viewBox="0 0 100 100" ${stroke}><path d="M20 28 Q50 8 80 28 L72 70 Q50 88 28 70Z"/><path d="M34 50 H66 M50 34 V66"/>${label}</svg>`;
    default:
      return `<svg viewBox="0 0 100 100" ${stroke}><rect x="25" y="25" width="50" height="50" rx="8"/>${label}</svg>`;
  }
}
