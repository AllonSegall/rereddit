////////////////////////////////    REQUIRE   //////////////////////////////////

var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var routes = require("./routes/index");
var users = require("./routes/users");


///////////////////////////////////    APP   //////////////////////////////////

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use("/", routes);
app.use("/users", users);

var port = process.env.PORT || "4000";
app.listen(port);
