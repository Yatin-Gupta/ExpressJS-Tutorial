const express = require('express');
const app = express();

app.use('/add-product', (req, res, next) => {
    // Suppose user enters /add-product/product and you do req.url here,
    // so it will not be /add-product/product but instead /product.
    res.send("<h1>Product</h1>");
});

// Routing
// This is the overloaded form of app.use
// This path match is not exact. Instead it means any path starts with /
// Every path starts with /
// This can lead to multiple path selection
// But next save us. Remember we need to call next, then only control passes to next middleware
// So we will not call next and keep more specific route to top. Now to avoid browser to go in 
// infinite loading state, we will send the response in every route middleware
app.use('/', (req, res, next) => {
    res.send("<h1>Send</h1>");
});

app.listen(8080);