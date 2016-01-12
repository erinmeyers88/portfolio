// EXPRESS CONFIGURATION FILE

var config = require('./config'),

    // middleware
    express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    morgan = require('morgan');


module.exports = function () {

    var app = express();

    // configuring the express app
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(morgan('dev'));
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));


    // static assets folder (angular app)
    app.use(express.static('./main/client'));

    return app;
};