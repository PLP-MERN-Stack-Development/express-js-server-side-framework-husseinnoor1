const express = require('express');
// PUT /api/products/:id
router.put(
'/:id',
validateProduct,
asyncHandler(async (req, res) => {
const idx = products.findIndex(p => p.id === req.params.id);
if (idx === -1) throw new NotFoundError('Product not found');


const { name, description, price, category, inStock } = req.body;
const updated = Object.assign(products[idx], {
name,
description,
price,
category,
inStock: Boolean(inStock)
});


res.json(updated);
})
);


// DELETE /api/products/:id
router.delete(
'/:id',
asyncHandler(async (req, res) => {
const idx = products.findIndex(p => p.id === req.params.id);
if (idx === -1) throw new NotFoundError('Product not found');
const deleted = products.splice(idx, 1)[0];
res.json({ message: 'Product deleted', product: deleted });
})
);


// SEARCH endpoint: GET /api/products/search?name=...
router.get(
'/search',
asyncHandler(async (req, res) => {
const { name } = req.query;
if (!name) return res.json({ data: [] });
const q = name.toLowerCase();
const found = products.filter(p => p.name.toLowerCase().includes(q));
res.json({ total: found.length, data: found });
})
);


// STATS: GET /api/products/stats
router.get(
'/stats',
asyncHandler(async (req, res) => {
const counts = products.reduce((acc, p) => {
const cat = p.category || 'Uncategorized';
acc[cat] = (acc[cat] || 0) + 1;
return acc;
}, {});
res.json({ total: products.length, counts });
})
);


module.exports = router;