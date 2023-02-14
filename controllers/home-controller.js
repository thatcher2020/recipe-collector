const router = require('express').Router();


//homepage route 
// this is how you render the handlebars
router.get('/', (req, res) => {
    res.render('home');
});

//login/sign up route


//log out route


//recipes route


//view recipe


//add/edit recipe


module.exports = router