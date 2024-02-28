const router = require('express').Router();
const gamesRouter = require('./games.js');

router.use('/games',  gamesRouter);

module.exports = router;