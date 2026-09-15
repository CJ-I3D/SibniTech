/* SIBNI cart — localStorage based, with per-line colour and urgency preferences. */
const CART_KEY="sibni_cart_v2";
const OLD_CART_KEY="sibni_cart_v1";
function getCart(){
  try{
    const raw=localStorage.getItem(CART_KEY);
    if(raw){ const parsed=JSON.parse(raw); if(Array.isArray(parsed)) return parsed; }
    const old=localStorage.getItem(OLD_CART_KEY);
    if(old){
      const obj=JSON.parse(old)||{};
      return Object.entries(obj).map(([id,qty])=>({key:id,id,qty,options:{colour:"no-preference",colourLabel:"No preference",urgency:"standard"}}));
    }
  }catch(e){}
  return [];
}
function saveCart(items){try{localStorage.setItem(CART_KEY,JSON.stringify(items))}catch(e){}updateCartBadge()}
function makeCartKey(id,options){return id+"::"+(options?.colour||options?.colourLabel||"No preference").toLowerCase().replace(/[^a-z0-9]+/g,"-")+"::"+(options?.urgency||"standard")}
function addToCart(id,qty,options={}){
  qty=Math.max(1,qty||1);
  const normalized={colour:options.colour||"no-preference",colourLabel:options.colourLabel||options.colour||"No preference",urgency:options.urgency||"standard"};
  const items=getCart(),key=makeCartKey(id,normalized);
  const existing=items.find(i=>i.key===key);
  if(existing) existing.qty+=qty;
  else items.push({key,id,qty,options:normalized});
  saveCart(items);
}
function setQty(key,qty){const items=getCart();const item=items.find(i=>i.key===key);if(!item)return;if(qty<=0){removeFromCart(key);return;}item.qty=qty;saveCart(items)}
function removeFromCart(key){saveCart(getCart().filter(i=>i.key!==key))}
function cartCount(){return getCart().reduce((a,b)=>a+(Number(b.qty)||0),0)}
function cartTotal(){return cartPricing(getCart()).total}
function updateCartBadge(){document.querySelectorAll("[data-cart-count]").forEach(el=>el.textContent=cartCount())}
function initNav(){const toggle=document.querySelector(".nav-toggle"),links=document.querySelector(".nav-links");if(toggle&&links)toggle.addEventListener("click",()=>links.classList.toggle("open"));updateCartBadge()}
document.addEventListener("DOMContentLoaded",initNav);
