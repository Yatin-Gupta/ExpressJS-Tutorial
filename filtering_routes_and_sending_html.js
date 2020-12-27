const express = require('express');
const app = express();
const adminRouter = require('./routes/admin-routes');
const path = require('path');
const rootDir = require('./utils/root-dir');

// Making public directory statically served directory
app.use(express.static(path.join(rootDir, 'public')));
// Now if I want that any asset file path should be prefixed with /assets, then I can specify static files as:
// app.use('/assets', express.static(path.join(rootDir, 'public')));

app.use(adminRouter);
// If you want to prepend prefix to all your admin routes, either you can manually update all route there, or you can write:
//app.use("/admin", adminRouter);

app.get("/", (req, res) => {
    // This path has to be changes if this route is moved to any sub route suppose in routes folder
    // In routes folder it will be __dirname, .., 'views', 'index.html'
    //res.sendFile(path.join(__dirname, 'views', 'index.html'));
    // To avoid change in case of movement of code, we can use rootDir as:
    res.sendFile(path.join(rootDir, 'views', 'index.html'));
    // You can use req.query to get the Query Parameters
});

app.use((req, res) => {
    // In this way we can chain multiple methods
    // Like we can also do res.writeHead(..).send(..),
    // or res.status(..).setHeader(..).send(..)
    // Just keep in mind send must be the last method.
    res.status(404).send('<h1>404</h1>');
});

app.listen(8080);