const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// NOTE: app.use can take any request either it be GET, POST etc but by default it consider all requests as GET request
// We can also use app.post, app.put, app.delete, app.patch
// Also, note .get, .post, .put, .delete do the exact match of route. It is not same as .use

// Without urlencoded, control will stuck in bodyParser middleware itself
// To eliminate deprecated undefined extended warning, pass {extended:false}
app.use(bodyParser.urlencoded({extended:false}));

app.use("/product", (req, res) => {
    // NodeJS provide body property with request, but don't try to parse it
    // Untill explicitly handled. In Express we can use body-parser middleware 
    // To get value of request body. body-parser middleware cannot be used for files etc. 
    // It can be use only for simple data
    //console.log(req.body);
    console.log(req.body);
    /**
     * What earlier we do as:
     * res.writeHead(302, {
     *  'Location':'/'
     * });
     * res.end();
     * is done directly with redirect method
     */
    res.redirect("/");
});

app.use("/", (req, res) => {
    res.send(`<html>
        <body>
            <form action="/product" method="POST">
                <input type="text" name="message" />
                <input type="submit" />
            </form>
        </body>
    </html>`);
});

app.listen("8080");
