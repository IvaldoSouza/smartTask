const express = require('express');

const app = express();

app.use(express.json())

const PORT = 3000;

app.get('/', (req, res) => {
  return res.send('hello world')
});

app.listen(3000, () => {
  console.log(`Server started on port`);
});