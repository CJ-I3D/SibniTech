/* SIBNI cart — localStorage based.
   Note: localStorage persists on real hosting (sibni.tech) once deployed.
   It may not persist inside an in-chat preview sandbox — that's expected
   and not a bug in the code. */

const CART_KEY = "sibni_cart_v1";

function getCart(){
  try{
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : {};
  }catch(e){
    return {};
  }
}

function saveCart(cart){
  try{ localStorage.setItem(CART_KEY, JSON.stringify(cart)); }
  catch(e){ /* storage unavailable — fail silently, cart just won't persist */ }
  updateCartBadge();
}

function addToCart(id, qty){
  qty = qty || 1;
  const cart = getCart();
  cart[id] = (cart[id] || 0) + qty;
  saveCart(cart);
}

function setQty(id, qty){
  const cart = getCart();
  if (qty <= 0){ delete cart[id]; }
  else { cart[id] = qty; }
  saveCart(cart);
}

function removeFromCart(id){
  const cart = getCart();
  delete cart[id];
  saveCart(cart);
}

function cartCount(){
  const cart = getCart();
  return Object.values(cart).reduce((a,b) => a + b, 0);
}

function cartTotal(){
  const cart = getCart();
  let total = 0;
  Object.entries(cart).forEach(([id, qty]) => {
    const p = PRODUCTS[id];
    if (p) total += p.price * qty;
  });
  return total;
}

function updateCartBadge(){
  document.querySelectorAll("[data-cart-count]").forEach(el => {
    el.textContent = cartCount();
  });
}

function initNav(){
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links){
    toggle.addEventListener("click", () => links.classList.toggle("open"));
  }
  updateCartBadge();
}

document.addEventListener("DOMContentLoaded", initNav);
