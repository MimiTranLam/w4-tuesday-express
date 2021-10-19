// gets express module and sets as variable, when this const is used the express framework will help handle http requests at the specific url
const express = require('express');
// create variable called path, this const is a module that allows file paths to interact easily
const path = require('path');
// express middleware that parses cookies (small data that are stored on a client side)
const cookieParser = require('cookie-parser');
// middleware that simplifies process of logging requests and other info to the application, in this case, the app express application
const logger = require('morgan');

// create variable called indexRouter and assign to it the index.js file in routes directory
const indexRouter = require('./routes/index');
// create variable called newsRouter and assign to it the news.js file in routes directory
const newsRouter = require('./routes/news');
//var usersRouter = require('./routes/users');

// create a new express application
const app = express();

// built in logging module in express, logs important info, in this case, logs the dev functionality in app
app.use(logger('dev'));
// detect json raw data and parse (translate) into javascript form for data to be usable   
app.use(express.json());
// middleware that allows to handle url encoded data (req bodies), express translates url characters and spe
app.use(express.urlencoded({ extended: false }));
// callback cookieParser function to the express route
app.use(cookieParser());
// enables express to use static files (files that clients download as they are from the server/files that don't change when your application is running, eg. html, js, css)
// path.join creates a path name by concatenating the directory name of the current file to the file path
// need to set this so that even if you start the app from another directory this path will remain the same (absolute)
app.use(express.static(path.join(__dirname, 'public')));
// baseURL: http://localhost:5000

// when /api is a route in the url, app/express framework will run index.js file
app.use('/api', indexRouter);
//app.use('/users', usersRouter);
// when /news is a route in the url, app/express framework will run news.js file
app.use('/news', newsRouter);

// exports app/express application
module.exports = app;