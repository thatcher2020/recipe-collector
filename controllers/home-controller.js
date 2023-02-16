const router = require('express').Router();


//homepage route 
// this is how you render the handlebars
router.get('/', (req, res) => {
    res.render('home');
});

//login/sign up route
router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});


//log out route
router.get('/logout', (req, res) => {
    res.redirect('login')
});


//recipes route
router.get('/recipes', (req, res) => {
    res.render('recipes');
});

//view recipe
router.get('/recipe', (req, res) => {
    res.render('recipe');
});


//add/edit recipe
router.get('/recipe/add', (req, res) => {
    res.render('edit-recipe',{});
});

router.get('/recipe/edit/:id', (req, res) => {
    res.render('edit-recipe');
});


module.exports = router