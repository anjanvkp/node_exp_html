const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require("body-parser");
var session = require('express-session');

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files....
app.use(express.static(__dirname + '/resources'));

// Send all requests to index.html
app.use('/', require('./app/routes/index.js'));
app.use('/auth', require('./app/routes/user_route.js'))

require("./app/routes/customer.routes.js")(app);

// default Heroku PORT
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });