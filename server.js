var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var mongoose = require('mongoose');

var connectionString = 'mongodb://localhost/cs4550'

if (process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
  connectionString = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
    process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
    process.env.OPENSHIFT_MONGODB_DB_HOST + ":" +
    process.env.OPENSHIFT_MONGODB_DB_PORT + "/" +
    process.env.OPENSHIFT_APP_NAME;
}

var db = mongoose.connect(connectionString);

var app = express();
app.use(multer());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

require("./public/assignment/server/app.js")(app, db, mongoose);
require("./public/project/server/app.js")(app, db, mongoose);

app.listen(port, ipaddress);
