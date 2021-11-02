const routes = require('express').Router();
const { read, create, deleteAnnotation } = require('../controllers/annotationController');
const { readPriority, updatePriority } = require('../controllers/priorityController');


routes.post('/annotations', create);
routes.get('/annotations', read);
routes.delete('annotations/:id', deleteAnnotation);

routes.get('/priorities', readPriority);
routes.post('/priorities', updatePriority);


module.exports = routes;