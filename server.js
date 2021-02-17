const express = require('express');

const todos = [
  { id: 3, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'HTML', completed: false }
];

const app = express();

app.use(express.static('public'));

app.listen('7000', () => {
  console.log('Server is listening on http://localhost:7000');
});