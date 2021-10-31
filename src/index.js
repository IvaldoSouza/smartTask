const express = require('express');
const routes = require('./routes/routesAnnotation');
const errorsMessage = require('./helper/errorsMessages');

const app = express();

app.use(express.json())

const PORT = 3000;

app.get('/', (req, res) => {
  return res.send();
});

app.use(routes);

app.use(errorsMessage);

app.listen(3000, () => {
  console.log(`Server started on port`);
});