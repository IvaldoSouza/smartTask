const routesPriority = require('express').Router();
const { readPriority, updatePriority } = require('../controllers/priorityController');

routesPriority.get('/', readPriority);
routesPriority.post('/', updatePriority);


module.exports = routesPriority;