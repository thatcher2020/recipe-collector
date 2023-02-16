require('dotenv').config()
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
// routes aren't fully set up
const routes = require('./controllers');
//helpers aren't fully set up
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

//setting help hbs with helpers
// const hbs = exphbs.create({ helpers });

const hbs = exphbs.create({
  extname:'hbs',
  defaultLayout: 'main',
});

// setting up session
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
  Store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// this is to simplify and organize our routes
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});

  app.listen(PORT, () => console.log('Now listening'));
