// import required module
const express = require('express');

const PORT = 1245;

const app = express();

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// Export as a module
module.exports = app;
