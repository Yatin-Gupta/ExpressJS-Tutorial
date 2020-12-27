const express = require('express');
const app = express();

// NOTE: We can pass multiple callbacks(means multiple middlewares) in app.use itself
app.use((req, res, next) => {
    console.log('In Middleware 1');
    next();
}, (req, res, next) => {
    console.log('In Middleware 1.5');
    next();
});

app.use((req, res, next) => {
    console.log('In Middleware 2');
    // If you don't send response from last middleware then loader will keep rotating and response will never end.
    // By default for string type input, it set Content-Type to text/html and for any other to application/json
    res.send("<h1>In Last Middleware</h1>");
});

app.listen(8080);