# SibniTech catalogue update

This is a drop-in update pack for the revised Sibni product range.

## Files to copy into the repository

- `js/products.js` — replaces the old product catalogue and removes chip-model data from the customer-facing product data.
- `products.html` — new catalogue.
- `product.html` — new generic product page with attachment/variant selection.
- `index.html` — updated homepage wording and catalogue preview.
- `how-to.html` — corrected setup wording: tags are not described as blank; they arrive with HELP. SCAN NFC and are ready for the buyer to write their own NFC content.
- `faq.html` — corrected FAQ and removed chip-model question.
- `cart.html` — updated cart to show the new product variants.
- `checkout.html` — updated order summary.
- `css/sibni-update.css` — extra styles used by the new product selector.

## Old product pages to remove

These are no longer used:

- `product-lace.html`
- `product-keychain.html`
- `product-carabiner.html`
- `product-lanyard.html`

The new product page is `product.html?id=...`, which works on GitHub Pages because the page reads the query string in the browser.

## Temporary prices

These are placeholders only and are intended for you to review:

- Large Square: €12.99 / €15.99 with carabiner
- Small Square: €10.99 / €13.99 with carabiner
- Large Round: €12.99 / €15.99 with carabiner
- Small Round: €10.99 / €13.99 with carabiner
- Car/Duck/Rocket/Bowtie shoelace or velcro: €11.99
- Simple Rectangle shoelace or velcro: €10.99
- Flower: €12.99 / €15.99 with carabiner
- Dog/Cat/Car/Plane: €13.99 / €16.99 with carabiner
- Business Card: €14.99
- Custom: from €24.99

## Important

The existing `cart.js` can stay as-is. It uses product IDs from `PRODUCTS`, and the new catalogue keeps that interface.

No NFC chip model is displayed in the new catalogue/product/FAQ copy.
