const express = require('express');
const app = express();
const port = 5000;


app.get('/', (req, res) => {
  res.send('Hello from the Node Server');
});

app.listen(5000);