/* Sibni shipping & pickup options.
   Selection is stored in localStorage so it persists between the cart
   and checkout pages, same pattern as the cart itself.

   International pricing is MaltaPost "Documents - Untracked" rate at
   100g, by zone, plus a flat €1.50 admin/packing markup. MaltaPost
   prices by zone, not by country, so adding a new supported country
   later is just one line in INTL_COUNTRIES mapping it to an existing
   zone - no new price needs figuring out. */

const SHIPPING_KEY = "sibni_shipping_v2";

const SHIPPING_OPTIONS = {
  pickup: {
    id: "pickup",
    label: "Free pickup at Invent3D",
    price: 0,
    description: "Collect in person. We'll also help you write your NFC data on the spot, free of charge.",
  },
  malta: {
    id: "malta",
    label: "Courier delivery - Malta",
    price: 7.00,
    description: "Flat-rate courier delivery anywhere in Malta. We'll contact you to schedule a convenient delivery slot.",
  },
  gozo: {
    id: "gozo",
    label: "Courier delivery - Gozo",
    price: 15.00,
    description: "Flat-rate courier delivery anywhere in Gozo. We'll contact you to schedule a convenient delivery slot.",
  },
  international: {
    id: "international",
    label: "International (MaltaPost)",
    price: null, // resolved per-country below - pick a country to get a price
    description: "Sent via MaltaPost, untracked. Choose your country to see the price. Only major destinations MaltaPost covers are listed - if yours isn't there, contact us.",
  },
};

/* MaltaPost zone rates for a 100g untracked item, + €1.50 admin/packing,
   rounded up to the nearest €0.50 for a clean checkout price. */
const INTL_ZONE_PRICES = {
  A1: 4.50, // Europe
  A2: 5.00, // North Africa / Levant
  B:  5.50, // incl. USA, Canada, Gulf, sub-Saharan Africa
  C:  5.50, // incl. Australia, Latin America, parts of Asia
};

/* Curated "major destinations" list, grouped by MaltaPost zone.
   Extend by adding a line here - the zone already has a price. */
const INTL_COUNTRIES = {
  // Zone A1 - Europe
  "Austria":"A1","Belgium":"A1","Bulgaria":"A1","Croatia":"A1","Cyprus":"A1","Czech Republic":"A1",
  "Denmark":"A1","Estonia":"A1","Finland":"A1","France":"A1","Germany":"A1","Greece":"A1","Hungary":"A1",
  "Iceland":"A1","Ireland":"A1","Italy":"A1","Latvia":"A1","Lithuania":"A1","Luxembourg":"A1","Netherlands":"A1",
  "Norway":"A1","Poland":"A1","Portugal":"A1","Romania":"A1","Slovakia":"A1","Slovenia":"A1","Spain":"A1",
  "Sweden":"A1","Switzerland":"A1","Turkey":"A1","Ukraine":"A1","United Kingdom":"A1",
  // Zone A2 - North Africa / Levant
  "Algeria":"A2","Egypt":"A2","Israel":"A2","Kazakhstan":"A2","Lebanon":"A2","Libya":"A2","Morocco":"A2",
  "Syria":"A2","Tunisia":"A2",
  // Zone B - curated majors (Americas, Gulf, Africa)
  "United States":"B","Canada":"B","United Arab Emirates":"B","Saudi Arabia":"B","South Africa":"B",
  // Zone C - curated majors (Oceania, Latin America, Asia)
  "Australia":"C","Argentina":"C","Chile":"C","Hong Kong":"C","Thailand":"C",
};

function getShippingChoice(){
  try{
    const raw = localStorage.getItem(SHIPPING_KEY);
    return raw ? JSON.parse(raw) : null; // { method, country? }
  }catch(e){ return null; }
}

function setShippingChoice(method, country){
  try{ localStorage.setItem(SHIPPING_KEY, JSON.stringify({ method, country: country || null })); }
  catch(e){ /* storage unavailable - selection just won't persist */ }
}

function getShippingOption(){
  const sel = getShippingChoice();
  return sel ? SHIPPING_OPTIONS[sel.method] : null;
}

function shippingFee(){
  const sel = getShippingChoice();
  if (!sel) return 0;
  const opt = SHIPPING_OPTIONS[sel.method];
  if (!opt) return 0;
  if (sel.method === "international"){
    const zone = sel.country ? INTL_COUNTRIES[sel.country] : null;
    return zone ? INTL_ZONE_PRICES[zone] : 0;
  }
  return typeof opt.price === "number" ? opt.price : 0;
}

function shippingIsChosen(){
  const sel = getShippingChoice();
  if (!sel || !SHIPPING_OPTIONS[sel.method]) return false;
  if (sel.method === "international") return !!(sel.country && INTL_COUNTRIES[sel.country]);
  return true;
}

function shippingLabel(){
  const sel = getShippingChoice();
  if (!sel) return "";
  const opt = SHIPPING_OPTIONS[sel.method];
  if (!opt) return "";
  if (sel.method === "international" && sel.country) return `International - ${sel.country}`;
  return opt.label;
}
