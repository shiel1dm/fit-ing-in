const router = require('express').Router();
const exercise = require('./workoutRoute')

router.use('/', exercise);

module.exports = router