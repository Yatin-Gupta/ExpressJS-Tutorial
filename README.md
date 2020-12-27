### Express JS Notes

- Express JS is all about middlewares. Between request and response there can be innumberable middlewares.
- Each middleware receive 3 things in its arguments: request, response and next callback.
- next callback is responsible to call next middleware in the row. If there is no middleware next then response is initiated.
- Middleware are injected after you get **app** object by `const app = express()` and before you pass that app object to `http.createServer` or `app.listen`.
- Last middleware in the row must send the response.
- **request** and **response** objects that we received in NodeJS, have been provided extra capability in Express. Such as now we can use **send** method with **response** object that by default send response with "text/html" content type.
