const router = require('express').Router();
const projectRoutes = require('./projectRoutes');
const recipeRoutes = require('./recipe-routes');
const userRoutes = require('./user-routes');

router.use('/projects', projectRoutes);
router.use('/recipes', recipeRoutes);
router.use('/users', userRoutes);

//adding error handling?


module.exports = router;
