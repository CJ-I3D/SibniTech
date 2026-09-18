/* SIBNI product catalogue
   Temporary prices are deliberately easy to change.
   No chip/model information is exposed in the customer-facing catalogue.
*/

const CARABINER_DIMENSIONS = "35 × 62 × 8 mm";

const COLOUR_OPTIONS = [
  { id: "red-white", label: "Red body & White text", body: "Red", text: "White", bodyClass: "swatch-red", textClass: "swatch-white" },
  { id: "black-white", label: "Black body & White text", body: "Black", text: "White", bodyClass: "swatch-black", textClass: "swatch-white" },
  { id: "cream-steel", label: "Light Cream body & Steel Grey text", body: "Light Cream", text: "Steel Grey", bodyClass: "swatch-cream", textClass: "swatch-steel" },
  { id: "translucent-blue", label: "Translucent body & Blue text", body: "Translucent", text: "Blue", bodyClass: "swatch-translucent", textClass: "swatch-blue" },
  { id: "white-green", label: "White body & Green text", body: "White", text: "Green", bodyClass: "swatch-white", textClass: "swatch-green" },
  { id: "random", label: "Random colour combination — 10% off", body: "Random", text: "Random", bodyClass: "swatch-random", textClass: "swatch-random" }
];

const SWATCH_CLASS = { red: "swatch-red", black: "swatch-black", white: "swatch-white", green: "swatch-green", beige: "swatch-cream", gold: "swatch-cream", grey: "swatch-steel", "dark blue": "swatch-blue", transparent: "swatch-translucent" };
function makeColours(pairs) {
  const options = pairs.map(pair => {
    const parts = pair.split(" & ");
    const body = parts[0];
    const text = parts[1] || parts[0];
    const id = pair.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    return { id, label: parts.length > 1 ? `${body} body & ${text} text` : body, body, text, bodyClass: SWATCH_CLASS[body.toLowerCase()] || "swatch-cream", textClass: SWATCH_CLASS[text.toLowerCase()] || "swatch-cream" };
  });
  options.push({ id: "random", label: "Random colour combination — 10% off", body: "Random", text: "Random", bodyClass: "swatch-random", textClass: "swatch-random" });
  return options;
}

const CATALOG = {
  "large-square": {
    name: "Large Square Tag",
    slug: "large-square",
    group: "carry",
    tagline: "Large square design.",
    colourOptions: makeColours(["Red & White", "Black & White", "Green & White"]),
    description: 'A spacious, easy-to-see square tag designed for everyday carry. Its larger surface makes it practical for clear identification, while the durable 3D-printed form is suitable for bags, belongings and personal safety use.',
    icon: "large-square",
    tint: "blue",
    badge: "Square",
    dimensions: "80 × 80 × 5 mm",
    options: [
      { id: "large-square-no-carabiner", label: "Without carabiner", price: 7.99, mount: "Tag only — use your own keychain or lanyard" },
      { id: "large-square-carabiner", label: "With carabiner (+€1) — random colour", price: 8.99, mount: "Tag + carabiner (random colour)" }
    ]
  },
  "small-square": {
    name: "Small Square Tag",
    slug: "small-square",
    group: "carry",
    tagline: "Small square design.",
    colourOptions: makeColours(["Red & White", "Black & White", "Green & White"]),
    description: 'A compact square tag that is easy to carry on keys, bags and everyday items. Its smaller profile is designed for people who want a practical safety tag without adding much bulk.',
    icon: "small-square",
    tint: "green",
    badge: "Square",
    dimensions: "30 × 38 × 5 mm",
    options: [
      { id: "small-square-no-carabiner", label: "Without carabiner", price: 5.99, mount: "Tag only — use your own keychain or lanyard" },
      { id: "small-square-carabiner", label: "With carabiner (+€1) — random colour", price: 6.99, mount: "Tag + carabiner (random colour)" }
    ]
  },
  "large-round": {
    name: "Large Round Tag",
    slug: "large-round",
    group: "carry",
    tagline: "Large round design.",
    colourOptions: makeColours(["Red & White", "Black & White", "Green & White"]),
    description: 'A larger rounded tag combining a generous identification area with a comfortable, easy-to-carry shape. Ideal for bags, personal belongings and everyday safety applications.',
    icon: "large-round",
    tint: "amber",
    badge: "Round",
    dimensions: "58 × 70 × 5 mm",
    options: [
      { id: "large-round-no-carabiner", label: "Without carabiner", price: 7.99, mount: "Tag only — use your own keychain or lanyard" },
      { id: "large-round-carabiner", label: "With carabiner (+€1) — random colour", price: 8.99, mount: "Tag + carabiner (random colour)" }
    ]
  },
  "small-round": {
    name: "Small Round Tag",
    slug: "small-round",
    group: "carry",
    tagline: "Small round design.",
    colourOptions: makeColours(["Red & White", "Black & White", "Green & White"]),
    description: 'A compact rounded tag for discreet everyday carry. Its small footprint makes it suitable for keys, bags and other belongings where space is limited.',
    icon: "small-round",
    tint: "violet",
    badge: "Round",
    dimensions: "30 × 35 × 5 mm",
    options: [
      { id: "small-round-no-carabiner", label: "Without carabiner", price: 5.99, mount: "Tag only — use your own keychain or lanyard" },
      { id: "small-round-carabiner", label: "With carabiner (+€1) — random colour", price: 6.99, mount: "Tag + carabiner (random colour)" }
    ]
  },
  "lace-car": {
    name: "Car Shoelace / Velcro Tag",
    slug: "lace-car",
    group: "lace",
    tagline: 'Car design for shoelaces or velcro.',
    colourOptions: makeColours(["Red & White", "Black & White", "Green & Beige"]),
    description: 'A playful car-shaped tag designed for your own shoelaces or Velcro. It offers a low-profile way to carry a personal safety tag without needing a keychain or lanyard.',
    icon: "car",
    tint: "blue",
    badge: "Shoelace / velcro",
    dimensions: "80 × 30 × 9 mm",
    options: [
      { id: "lace-car", label: "Shoelace / velcro", price: 4.99, mount: "For your own shoelaces / Velcro" }
    ]
  },
  "lace-duck": {
    name: "Duck Shoelace / Velcro Tag",
    slug: "lace-duck",
    group: "lace",
    tagline: 'Duck design for shoelaces or velcro.',
    colourOptions: makeColours(["Gold & White", "Black & White", "Beige & Black"]),
    description: 'A friendly duck-shaped tag designed for your own shoelaces or Velcro. A fun, lightweight option for children and anyone who prefers a character-style design.',
    icon: "duck",
    tint: "amber",
    badge: "Shoelace / velcro",
    dimensions: "35 × 45 × 9 mm",
    options: [
      { id: "lace-duck", label: "Shoelace / velcro", price: 4.99, mount: "For your own shoelaces / Velcro" }
    ]
  },
  "lace-rocket": {
    name: "Rocket Shoelace / Velcro Tag",
    slug: "lace-rocket",
    group: "lace",
    tagline: 'Rocket design for shoelaces or velcro.',
    colourOptions: makeColours(["Red & White", "Grey & Dark Blue", "Transparent & Dark Blue"]),
    description: 'A rocket-shaped tag designed for your own shoelaces or Velcro. Its playful design is ideal for children, space fans and low-profile everyday wear.',
    icon: "rocket",
    tint: "violet",
    badge: "Shoelace / velcro",
    dimensions: "35 × 55 × 9 mm",
    options: [
      { id: "lace-rocket", label: "Shoelace / velcro", price: 4.99, mount: "For your own shoelaces / Velcro" }
    ]
  },
  "lace-bowtie": {
    name: "Bowtie Shoelace / Velcro Tag",
    slug: "lace-bowtie",
    group: "lace",
    tagline: 'Bowtie design for shoelaces or velcro.',
    colourOptions: makeColours(["Gold & White", "Black & White", "Red & White"]),
    description: 'A bowtie-shaped tag designed for your own shoelaces or Velcro. Its distinctive shape adds personality while keeping the tag close to the wearer.',
    icon: "bowtie",
    tint: "green",
    badge: "Shoelace / velcro",
    dimensions: "55 × 50 × 9 mm",
    options: [
      { id: "lace-bowtie", label: "Shoelace / velcro", price: 4.99, mount: "For your own shoelaces / Velcro" }
    ]
  },
  "lace-rectangle": {
    name: "Simple Rectangle Shoelace / Velcro Tag",
    slug: "lace-rectangle",
    group: "lace",
    tagline: 'Simple rectangle design for shoelaces or velcro.',
    colourOptions: makeColours(["Red & White", "Black & White", "Transparent & Dark Blue"]),
    description: 'A clean, simple rectangular tag designed for your own shoelaces or Velcro. Its understated shape is suitable when you want a practical option that blends into everyday footwear or clothing.',
    icon: "rectangle",
    tint: "blue",
    badge: "Shoelace / velcro",
    dimensions: "45 × 30 × 9 mm",
    options: [
      { id: "lace-rectangle", label: "Shoelace / velcro", price: 4.99, mount: "For your own shoelaces / Velcro" }
    ]
  },
  "flower": {
    name: "Flower Tag",
    slug: "flower",
    group: "carry",
    tagline: "Flower-shaped design.",
    colourOptions: makeColours(["Red & White", "Beige & Black", "Green & White"]),
    description: 'A distinctive flower-shaped tag that combines a friendly design with practical everyday safety. A thoughtful option for children, gifts, bags or personal belongings.',
    icon: "flower",
    tint: "violet",
    badge: "Flower",
    dimensions: "55 × 55 × 20 mm",
    options: [
      { id: "flower-no-carabiner", label: "Without carabiner", price: 8.99, mount: "Tag only — use your own keychain or lanyard" },
      { id: "flower-carabiner", label: "With carabiner (+€1) — random colour", price: 9.99, mount: "Tag + carabiner (random colour)" }
    ]
  },
  "bear": {
    name: "Bear Tag",
    slug: "bear",
    group: "carry",
    tagline: "Bear-shaped design.",
    colourOptions: makeColours(["Beige", "Red & Black", "Black", "Red & White", "Gold", "Black & White"]),
    description: 'A playful bear-shaped tag designed for everyday use. Its recognisable shape makes it especially suitable for children, gifts, bags and personal belongings.',
    icon: "bear",
    tint: "amber",
    badge: "Animal",
    dimensions: "40 × 40 × 52 mm",
    options: [
      { id: "bear-no-carabiner", label: "Without carabiner", price: 8.99, mount: "Tag only — use your own keychain or lanyard" },
      { id: "bear-carabiner", label: "With carabiner (+€1) — random colour", price: 9.99, mount: "Tag + carabiner (random colour)" }
    ]
  },
  "car": {
    name: "Car Tag",
    slug: "car",
    group: "carry",
    tagline: "Car-shaped design.",
    colourOptions: makeColours(["Red & White", "Black & White", "Grey & Dark Blue"]),
    description: 'A detailed car-shaped tag for people who enjoy automotive designs. It is suitable for attaching to keys, bags and other everyday belongings while providing a personal safety function.',
    icon: "car",
    tint: "blue",
    badge: "Shape",
    dimensions: "60 × 40 × 25 mm",
    options: [
      { id: "car-no-carabiner", label: "Without carabiner", price: 8.99, mount: "Tag only — use your own keychain or lanyard" },
      { id: "car-carabiner", label: "With carabiner (+€1) — random colour", price: 9.99, mount: "Tag + carabiner (random colour)" }
    ]
  },
  "plane": {
    name: "Plane Tag",
    slug: "plane",
    group: "carry",
    tagline: "Plane-shaped design.",
    colourOptions: makeColours(["Red & White", "Black & White", "Transparent & Dark Blue"]),
    description: 'A plane-shaped tag for travellers, aviation fans and everyday carry. Its distinctive silhouette works well on bags, keys and other belongings.',
    icon: "plane",
    tint: "blue",
    badge: "Shape",
    dimensions: "70 × 80 × 30 mm",
    options: [
      { id: "plane-no-carabiner", label: "Without carabiner", price: 8.99, mount: "Tag only — use your own keychain or lanyard" },
      { id: "plane-carabiner", label: "With carabiner (+€1) — random colour", price: 9.99, mount: "Tag + carabiner (random colour)" }
    ]
  },
  "business-card": {
    name: "Ultra Thin",
    slug: "business-card",
    group: "ultra-thin",
    tagline: "An ultra-thin wallet-friendly format.",
    colourOptions: makeColours(["Red & White", "Black & White", "Green & White"]),
    description: 'An ultra-thin card-format tag designed to fit into a wallet, purse, card holder or pocket. Its slim 2 mm profile makes it a discreet option for everyday personal safety.',
    icon: "business-card",
    tint: "green",
    badge: "Ultra thin",
    dimensions: "90 × 50 × 2 mm",
    options: [
      { id: "business-card", label: "Standard", price: 9.99, mount: "Thin card format" }
    ]
  },
  "custom": {
    name: "Custom Tag",
    slug: "custom",
    group: "custom",
    tagline: "Custom shapes, colours and full-colour direct printing made to your specification.",
    description: "Custom tags can be made to your specification, including custom shapes, custom colours and direct full-colour printing. We can print logos, graphics, text and other artwork directly on the tags. Use the online form to tell us what you need.",
    dimensions: "On request",
    priceOnRequest: true,
    icon: "custom",
    tint: "violet",
    badge: "Made to spec",
    options: [
      { id: "custom", label: "Made to specification", price: 0, mount: "Custom" }
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
      description: product.description,
      icon: product.icon,
      tint: product.tint,
      badge: product.badge,
      mount: option.mount,
      dimensions: product.dimensions || "On request",
      priceOnRequest: !!product.priceOnRequest,
      catalogId,
      colourOptions: product.colourOptions || COLOUR_OPTIONS
    };
  });
});

function isRandomColour(options){ return options?.colour === "random"; }
function unitPrice(item){
  const p=PRODUCTS[item.id];
  if(!p) return 0;
  const base=Number(p.price)||0;
  return isRandomColour(item.options) ? Math.round(base*0.9*100)/100 : base;
}
function cartPricing(items){
  const itemCount=items.reduce((sum,item)=>sum+(Number(item.qty)||0),0);
  const rawSubtotal=items.reduce((sum,item)=>sum+unitPrice(item)*(Number(item.qty)||0),0);
  const bulkDiscount=itemCount>=5 ? Math.round(rawSubtotal*0.10*100)/100 : 0;
  return {itemCount, rawSubtotal, bulkDiscount, total:Math.max(0,Math.round((rawSubtotal-bulkDiscount)*100)/100)};
}
function money(n){ return "€" + Number(n).toFixed(2); }


function productIcon(kind){
  const stroke = 'stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  const label = "";
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
    case "bear":
      return `<svg viewBox="0 0 100 100" ${stroke}><circle cx="34" cy="30" r="10"/><circle cx="66" cy="30" r="10"/><path d="M25 49 Q25 25 50 25 Q75 25 75 49 V62 Q75 79 50 82 Q25 79 25 62Z"/><circle cx="40" cy="52" r="2"/><circle cx="60" cy="52" r="2"/><path d="M45 61 Q50 65 55 61 M50 61 V67"/>${label}</svg>`;
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
