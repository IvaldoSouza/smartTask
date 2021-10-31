const routes = require('express').Router();
const { read, create, deleteAnnotation } = require('../controllers/annotationController');

routes.post('/annotations', create);
routes.get('/annotations', read);
routes.delete('/annotations/:id', deleteAnnotation)


module.exports = routes;