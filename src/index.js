const express = require('express');
require('./model/connection');
const routes = require('./routes/routesAnnotation');
// const routesPriority = require('./routes/routesPriority');
const errorsMessage = require('./helper/errorsMessages');

const app = express();

app.use(express.json())

const PORT = 3000; 

// app.get('/', (req, res) => {
//   return res.send();
// });

app.use('/', routes);
app.use('/', routes);

app.use(errorsMessage);

app.listen(PORT, () => {
  console.log(`Server started on port`);
});