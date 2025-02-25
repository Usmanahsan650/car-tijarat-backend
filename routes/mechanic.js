var express = require('express');
var router = express.Router();

const mechanicController = require('../controllers/mechanicController');

router.get('/mechanics', mechanicController.mechanic_list);
router.get('/mechanics/:location', mechanicController.mechanic_by_location);
router.get('/certified_vehicles', mechanicController.mechanic_certified_vehicles);

module.exports = router;