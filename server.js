require('dotenv').config()
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
// routes aren't fully set up
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
};


// defining what's happening in your request lifecycle
app.use(session(sess));

// Inform Express.js on which template engine to use
app.set('views', './views');

const hbs = exphbs.create({
  extname:'hbs',
  defaultLayout: 'main',
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// this is to simplify and organize our routes
app.use(routes);


  app.listen(PORT, () => console.log('Now listening'));


