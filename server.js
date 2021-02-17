const express = require('express');

const menu = {
  bread: [
    { id: 1, name: '9-Grain Honey Oat Bread', calories: 230 },
    { id: 2, name: '9-Grain Wheat Bread', calories: 210 },
    { id: 3, name: 'Artisan Flatbread', calories: 230 },
  ],
  meatsProteins: [
    { id: 1, name: 'BBQ Pulled Pork', calories: 200 },
    { id: 2, name: 'BBQ Rib Patty', calories: 260 },
    { id: 3, name: 'Buffalo Chicken Strips', calories: 90 },
  ],
  cheese: [
    { id: 1, name: 'American Cheese', calories: 40 },
    { id: 2, name: 'Cheddar Cheese', calories: 60 },
    { id: 3, name: 'Feta Cheese', calories: 35 },
  ],
  veggies: [
    { id: 1, name: 'Banana Peppers', calories: 0 },
    { id: 2, name: 'Carrots', calories: 5 },
    { id: 3, name: 'Cucumbers', calories: 0 },
  ],
  condiments: [
    { id: 1, name: 'Barbecue Sauce', calories: 35 },
    { id: 2, name: 'Buffalo Sauce', calories: 5 },
    { id: 3, name: 'Chipotle Southwest Sauce', calories: 100 },
  ],
  extras: [
    { id: 1, name: 'Avocado', calories: 60 },
    { id: 2, name: 'Bacon', calories: 80 },
    { id: 3, name: 'Guacamole', calories: 70 },
    { id: 3, name: 'Pepperoni', calories: 80 },
  ]
};

const myFavorite = [
  {
    id: 1,
    name: 'My Favorite 1',
    item: [
      { id: 1, name: '9-Grain Honey Oat Bread', calories: 230 },
      { id: 2, name: 'BBQ Pulled Pork', calories: 200 },
      { id: 3, name: 'American Cheese', calories: 40 },
      { id: 4, name: 'Banana Peppers', calories: 0 },
      { id: 5, name: 'Barbecue Sauce', calories: 35 },
      { id: 6, name: 'Avocado', calories: 60 },
    ],
  },
  {
    id: 2,
    name: 'My Favorite 2',
    item: [
      { id: 1, name: '9-Grain Honey Oat Bread', calories: 230 },
      { id: 2, name: 'BBQ Pulled Pork', calories: 200 },
      { id: 3, name: 'American Cheese', calories: 40 },
      { id: 4, name: 'Banana Peppers', calories: 0 },
      { id: 5, name: 'Barbecue Sauce', calories: 35 },
      { id: 6, name: 'Avocado', calories: 60 },
    ],
  },
  {
    id: 3,
    name: 'My Favorite 3',
    item: [
      { id: 1, name: '9-Grain Honey Oat Bread', calories: 230 },
      { id: 2, name: 'BBQ Pulled Pork', calories: 200 },
      { id: 3, name: 'American Cheese', calories: 40 },
      { id: 4, name: 'Banana Peppers', calories: 0 },
      { id: 5, name: 'Barbecue Sauce', calories: 35 },
      { id: 6, name: 'Avocado', calories: 60 },
    ],
  }
];

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.listen('7000', () => {
  console.log('Server is listening on http://localhost:7000');
});

app.get('/menu', (_, res) => {
  res.send(menu);
});
app.get('/menu.bread', (_, res) => {
  res.send(menu.bread);
});
app.get('/menu.meatsProtieins', (_, res) => {
  res.send(menu.meatsProtieins);
});
app.get('/menu.cheese', (_, res) => {
  res.send(menu.cheese);
});
app.get('/menu.veggies', (_, res) => {
  res.send(menu.veggies);
});
app.get('/menu.condiments', (_, res) => {
  res.send(menu.condiments);
});
app.get('/menu.extras', (_, res) => {
  res.send(menu.extras);
});

app.get('/myFavorite', (_, res) => {
  res.send(myFavorite);
});
app.get('/myFavorite/:id', (req, res) => {
  const _myFavorite = myFavorite.filter(item => item.id === +req.params.id);
  res.send(..._myFavorite);
});

app.post('/myFavorite', (req, res) => {
  const newMyFavorite = req.body;
  let _myFavorite;
  if (myFavorite.filter(v => v.id === newMyFavorite.id).length) {
    _myFavorite = myFavorite.map(v => (v.id === newMyFavorite.id ? newMyFavorite : v));
  } else {
    _myFavorite = [...myFavorite, newMyFavorite];
  }
  res.send(_myFavorite);
});

app.patch('/myFavorite/:id', (req, res) => {
  const id = +req.params.id;
  const modifyMyFavorite = req.body;
  const _myFavorite = myFavorite.map(item => item.id === id ? { ...item, ...modifyMyFavorite } : item);
  res.send(_myFavorite);
});

app.delete('/myFavorite/:id', (req, res) => {
  const id = +req.params.id;
  const _myFavorite = myFavorite.filter(diary => diary.id !== id);
  res.send(_myFavorite);
})