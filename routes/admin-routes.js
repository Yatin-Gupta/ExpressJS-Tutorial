const express = require('express');
const router = express.Router();

// Using router is same as using app, 
// Only diff is app has more capability such as listening on port
// while router is just to handle router
// Otherwise, it works same as app

router.get('/update-user', (req, res) => {
    res.send("<h1>Updated</h1>");
});

// It is just for demo, thus I am not using router.delete
router.get('/delete-user/:id', (req, res) => {
    res.send(`<h1>Deleting user with ${req.params.id}</h1>`);
});

module.exports = router;