const router = require('express').Router();
const gamesController = require('../controller/gamesController.js');

router.route('/').get((req, res) => gamesController.getAll(req, res));
router.route('/').post((req, res) => gamesController.create(req, res));

module.exports = router;