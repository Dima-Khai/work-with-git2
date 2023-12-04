const express = require('express');
const products = require('./products');
const {blockSpecialBrand} = require('./middleware');

const router = express.Router();

router.get('/products', (req, res) => {
    return res.json(products);
})

// router.get('/products/:brand', blockSpecialBrand, (req, res) => {
//     const {brand} = req.params;
//
//     const filteredProducts = products.filter(product => product.brand === brand);
//
//     res.json(filteredProducts);
// });

router.get('/products/:id', (req, res) => {
    const {id} = req.params;

    const foundProduct = products.find(product => product.id == id);

    if (foundProduct) res.json(foundProduct);
    else res.send('Product not found!');
});

router.get('/productswitherror', (req, res) => {
    let err = new Error("processing error ");
    err.statusCode = 400;
    throw err;
});

module.exports = router;
