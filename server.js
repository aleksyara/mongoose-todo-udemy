// var createError = require('http-errors');
var express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');
require('./config/database');//require db file to establish connection

var indexRouter = require('./routes/index');
var itemsRouter = require('./routes/items');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));
app.use(logger('dev')); //info about request is logged in terminal
app.use(express.json()); // add properties to req.body
app.use(express.urlencoded({ extended: true })); // same as ^^ but for data sumbited via FORMreq.body
app.use(cookieParser());// add properties to req.body for cookies in HTTP
app.use(express.static(path.join(__dirname, 'public'))); //handles request for static assests & responsds with that file (ending the request)

app.use('/', indexRouter);
app.use('/items', itemsRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
