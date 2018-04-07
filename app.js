var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var layouts = require('express-ejs-layouts');

var indexRouter = require('./routes/index');
var myProfile = require('./routes/my-profile')
var profilsPublicRouter = require('./routes/profils-public');


var connection = require('./database');
var app = express();

connection
    .then(() => {
      // view engine setup
      app.set('views', path.join(__dirname, 'views'));
      app.set('view engine', 'ejs');
      app.set('view options', { layout: 'layout.ejs' });

      app.use(logger('dev'));
      app.use(express.json());
      app.use(express.urlencoded({ extended: false }));
      app.use(cookieParser());
      app.use(express.static(path.join(__dirname, 'public')));
      app.use(layouts);

      app.use('/', indexRouter);
      app.use('/my-profile', myProfile);
      app.use('/profils-public', profilsPublicRouter);

      // catch 404 and forward to error handler
      app.use(function(req, res, next) {
        next(createError(404));
      });
    });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
