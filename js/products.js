/* Product catalog — placeholder pricing/copy, swap freely later.
   Real photos: replace the icon() output in each product page's
   .art / .art-big element with an <img> tag once you have renders. */

const PRODUCTS = {
  "lace-tag": {
    name: "Lace & Velcro Tag",
    price: 14.99,
    tagline: "Threads through laces or slides under a velcro strap.",
    description:
      "The original SIBNI tag. A low-profile 3D-printed shell that laces directly into your running shoes or slots under any velcro strap — hiking boots, gym bags, kids' shoes. Small enough to forget it's there until it matters.",
    specs: {
      "Chip": "NXP NTAG216 (888 bytes)",
      "Mount": "Lace channel or velcro loop",
      "Material": "PETG, 3D-printed",
      "Weight": "3.2 g",
    },
    icon: "lace",
    tint: "blue",
    badge: "Shoelace / velcro",
  },
  "keychain-tag": {
    name: "Keychain Tag",
    price: 12.99,
    tagline: "Rides on your keyring, always on you.",
    description:
      "A compact disc that lives on your keyring. If your keys are found, so is your emergency information — no extra habit to build, no separate thing to remember to carry.",
    specs: {
      "Chip": "NXP NTAG216 (888 bytes)",
      "Mount": "Split-ring keyring loop",
      "Material": "PETG, 3D-printed",
      "Weight": "4.0 g",
    },
    icon: "key",
    tint: "green",
    badge: "Keyring",
  },
  "carabiner-tag": {
    name: "Carabiner Tag",
    price: 16.99,
    tagline: "Clips onto packs, belt loops, or gear straps.",
    description:
      "Built around a small aluminium carabiner, this tag clips onto a backpack strap, belt loop, or bike bag in seconds. The pick for climbers, cyclists, and anyone who moves gear between bags often.",
    specs: {
      "Chip": "NXP NTAG216 (888 bytes)",
      "Mount": "Aluminium carabiner clip",
      "Material": "PETG shell + aluminium clip",
      "Weight": "9.5 g",
    },
    icon: "carabiner",
    tint: "amber",
    badge: "Clip-on",
  },
  "lanyard-tag": {
    name: "Lanyard Tag",
    price: 15.99,
    tagline: "Worn around the neck, ID-badge style.",
    description:
      "For situations where visibility matters most — kids at events, elderly relatives, festival crowds. Worn around the neck on a breakaway lanyard, in plain sight and easy for anyone to tap.",
    specs: {
      "Chip": "NXP NTAG216 (888 bytes)",
      "Mount": "Breakaway neck lanyard",
      "Material": "PETG, 3D-printed",
      "Weight": "5.1 g",
    },
    icon: "lanyard",
    tint: "violet",
    badge: "Neck strap",
  },
};

function money(n){ return "€" + n.toFixed(2); }

function productIcon(kind){
  const stroke = 'stroke="currentColor" fill="none" stroke-width="1.4"';
  switch(kind){
    case "lace":
      return `<svg viewBox="0 0 100 100" ${stroke}><path d="M20 15 L20 85 M35 20 L20 30 M35 30 L20 40 M35 40 L20 50 M35 50 L20 60 M35 60 L20 70 M35 70 L20 80"/><rect x="55" y="38" width="26" height="24" rx="6"/><circle cx="68" cy="50" r="4"/></svg>`;
    case "key":
      return `<svg viewBox="0 0 100 100" ${stroke}><circle cx="30" cy="50" r="14"/><path d="M44 50 H80 M68 50 V60 M76 50 V58"/></svg>`;
    case "carabiner":
      return `<svg viewBox="0 0 100 100" ${stroke}><path d="M35 20 a20 20 0 1 0 0.1 0 Z M35 20 L35 40 M35 80 L35 60 M62 30 L80 30 L80 70 L62 70"/></svg>`;
    case "lanyard":
      return `<svg viewBox="0 0 100 100" ${stroke}><path d="M30 10 Q50 40 70 10"/><rect x="38" y="45" width="24" height="34" rx="6"/><circle cx="50" cy="58" r="4"/></svg>`;
    default:
      return `<svg viewBox="0 0 100 100" ${stroke}><rect x="30" y="30" width="40" height="40" rx="8"/></svg>`;
  }
}
