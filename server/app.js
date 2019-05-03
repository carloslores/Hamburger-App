require('dotenv').config();


const createError = require('http-errors');
const express = require('express');
const path = require('path');
const mongoose     = require('mongoose');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const session       = require('express-session');
const MongoStore    = require('connect-mongo')(session);

const indexRouter = require('./routes/index');

const cors = require('cors');



mongoose
  .connect(process.env.DBURL, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  const app_name = require('./package.json').name;
  const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`)


const app = express();

app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000']
}));

app.use(session({
  secret: "dummyvalue",
  resave: true, 
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection})
}));



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


app.use('/api', require('./routes/file-upload-routes'));
app.use("/api",require("./routes/hamburgers"))

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

// Routings






module.exports = app;
