const express = require('express');
const app = express();

const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');

const { url } = require('./config/database'); // url.url == {url}

mongoose.connect(url, { useNewUrlParser: true});

require('./config/passport')(passport);

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views')); // where are all views, concat
app.set('view engine', 'ejs'); // config the engine views

//middlewares
app.use(morgan('dev'));  // can see the msgs(request, responses etc) in the console
app.use(cookieParser()); //interpretate and decode cookies
app.use(bodyParser.urlencoded({ extended:false })); //can interpretate the information provided from forms, extended:false for not interpretate images.... , only data
app.use(session({
    secret: 'maximilianotoledo',
    resave: false,
    saveUninitialized: false
}));  //managment express sessions
app.use(passport.initialize()); //define the config for authentication
app.use(passport.session());  //save the user info in a session
app.use(flash()); //comunication for the html pages

//routes
require('./app/routes')(app, passport);

//static files
app.use(express.static(path.join(__dirname, 'public'))); //static archives

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});