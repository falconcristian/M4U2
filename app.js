var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');


var indexRouter = require('./routes/index');
var nosotrosRouter =require('./routes/nosotros');
var contactoRouter =require('./routes/contacto');
var galeriaRouter =require('./routes/galeria');
var novedadesRouter =require('./routes/novedades');
var serviciosRouter =require('./routes/servicios');
var homeRouter =require('./routes/home');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/nosotros', nosotrosRouter)
app.use('/contacto', contactoRouter)
app.use('/galeria', galeriaRouter)
app.use('/novedades', novedadesRouter)
app.use('/servicios', serviciosRouter)
app.use('/home', homeRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
