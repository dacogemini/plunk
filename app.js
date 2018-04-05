const express = require('express');
var exphbs  = require('express-handlebars');
const app = express();
var port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const mysql = require('mysql');

var Job = require('./models/jobs.js');


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('views', './views'); // Set location to look for views
app.set('view engine', 'pug'); // Specify default app engine

app.use(express.static("public"));
app.use(express.static("node_modules/bootstrap/dist"));

/* app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars'); */

// Require connection 
var connection = require("./config/connection.js");

// Import routes and give the server access to them.
var routes = require("./controllers/JobsContoller.js");
app.use(routes);


// port must be set to 8080 because incoming http requests are routed from port 80 to port 8080
app.listen(port, function () {
    console.log('Node app is running on port ' + port +'...');
});
