const http = require('http');
const express = require('express');
const app = express();
// No Middleware Injected here
// NOTE: app is nothing but a callback, that when you pass to createServer, it runs the dummy application
const server = http.createServer(app);
server.listen('8080');
/**
 * Line 6 and 7 can be replaced with:
 * app.listen('8080');
 * Because even express is doing same internally
 */