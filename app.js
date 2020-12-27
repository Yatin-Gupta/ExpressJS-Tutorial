const express = require('express');
const app = express();

// Setting view engine
app.set('view engine', 'ejs');

app.get("/user/:name", (req, res) => {
    // NOTE: No need to set full views absolute path as you set with sendFile
    // It will by default expect ejs files to be in views directory
    // No need of providing extension. It will pick automatically.
    res.render("user", {
        // This name property can be used directly using <%= name %> in ejs file
        name:req.params.name,
        skills:[
            'NodeJS',
            'ReactJS',
            'Javascript'
        ]
    })
});

app.listen('8080');
