const express = require('express');

const menu = {
  bread: [
    {
      id: 'bread1', name: '9-Grain Honey Oat Bread', calories: 230, selected: false
    },
    {
      id: 'bread2', name: '9-Grain Wheat Bread', calories: 210, selected: false
    },
    {
      id: 'bread3', name: 'Artisan Flatbread', calories: 230, selected: false
    },
  ],
  meats: [
    {
      id: 'meats1', name: 'BBQ Pulled Pork', calories: 200, url: 'https://www.subway.co.kr/images/menu/sandwich_pm08.jpg', selected: false
    },
    {
      id: 'meats2', name: 'BBQ Rib Patty', calories: 260, url: 'https://www.subway.co.kr/images/menu/sandwich_pm01.jpg', selected: false
    },
    {
      id: 'meats3', name: 'Buffalo Chicken Strips', calories: 90, url: 'https://www.subway.co.kr/images/menu/sandwich_pm10.jpg', selected: false
    },
  ],
  cheese: [
    {
      id: 'cheese1', name: 'American Cheese', calories: 40, selected: false
    },
    {
      id: 'cheese2', name: 'Cheddar Cheese', calories: 60, selected: false
    },
    {
      id: 'cheese3', name: 'Feta Cheese', calories: 35, selected: false
    },
  ],
  veggies: [
    {
      id: 'veggies1', name: 'Banana Peppers', calories: 0, selected: false
    },
    {
      id: 'veggies2', name: 'Carrots', calories: 5, selected: false
    },
    {
      id: 'veggies3', name: 'Cucumbers', calories: 0, selected: false
    },
  ],
  sauce: [
    {
      id: 'sauce1', name: 'Barbecue Sauce', calories: 35, selected: false
    },
    {
      id: 'sauce2', name: 'Buffalo Sauce', calories: 5, selected: false
    },
    {
      id: 'sauce3', name: 'Chipotle Southwest Sauce', calories: 100, selected: false
    },
  ],
  extras: [
    {
      id: 'extras1', name: 'Avocado', calories: 60, selected: false
    },
    {
      id: 'extras2', name: 'Bacon', calories: 80, selected: false
    },
    {
      id: 'extras3', name: 'Guacamole', calories: 70, selected: false
    },
    {
      id: 'extras4', name: 'Pepperoni', calories: 80, selected: false
    },
  ]
};

let myFavorite = [
  {
    id: 1,
    name: '꿀조합',
    item: [
      {
        id: 'bread1', name: '9-Grain Honey Oat Bread', calories: 230, quantity: 1
      },
      {
        id: 'meats1', name: 'BBQ Pulled Pork', calories: 200, quantity: 2, url: 'https://www.subway.co.kr/images/menu/sandwich_pm08.jpg'
      },
      {
        id: 'cheese1', name: 'American Cheese', calories: 40, quantity: 1
      },
      {
        id: 'veggies1', name: 'Banana Peppers', calories: 0, quantity: 1
      },
      {
        id: 'condiments1', name: 'Barbecue Sauce', calories: 35, quantity: 3
      },
      {
        id: 'extras1', name: 'Avocado', calories: 60, quantity: 1
      },
    ],
    calories: 565,
  },
  {
    id: 2,
    name: '서브프라임모기지',
    item: [
      {
        id: 'bread1', name: '9-Grain Honey Oat Bread', calories: 230, quantity: 1
      },
      {
        id: 'meats1', name: 'BBQ Pulled Pork', calories: 200, quantity: 2, url: 'https://www.subway.co.kr/images/menu/sandwich_pm08.jpg'
      },
      {
        id: 'cheese1', name: 'American Cheese', calories: 40, quantity: 1
      },
      {
        id: 'veggies1', name: 'Banana Peppers', calories: 0, quantity: 1
      },
      {
        id: 'condiments1', name: 'Barbecue Sauce', calories: 35, quantity: 3
      },
      {
        id: 'extras1', name: 'Avocado', calories: 60, quantity: 1
      },
    ],
    calories: 565,
  },
  {
    id: 3,
    name: '베지터블',
    item: [
      {
        id: 'bread1', name: '9-Grain Honey Oat Bread', calories: 230, quantity: 1
      },
      {
        id: 'meats1', name: 'BBQ Pulled Pork', calories: 200, quantity: 2, url: 'https://www.subway.co.kr/images/menu/sandwich_pm08.jpg'
      },
      {
        id: 'cheese1', name: 'American Cheese', calories: 40, quantity: 1
      },
      {
        id: 'veggies1', name: 'Banana Peppers', calories: 0, quantity: 1
      },
      {
        id: 'condiments1', name: 'Barbecue Sauce', calories: 35, quantity: 3
      },
      {
        id: 'extras1', name: 'Avocado', calories: 60, quantity: 1
      },
    ],
    calories: 565,
  },
  {
    id: 4,
    name: '당충전',
    item: [
      {
        id: 'bread1', name: '9-Grain Honey Oat Bread', calories: 230, quantity: 1
      },
      {
        id: 'meats1', name: 'BBQ Pulled Pork', calories: 200, quantity: 2, url: 'https://www.subway.co.kr/images/menu/sandwich_pm08.jpg'
      },
      {
        id: 'cheese1', name: 'American Cheese', calories: 40, quantity: 1
      },
      {
        id: 'veggies1', name: 'Banana Peppers', calories: 0, quantity: 1
      },
      {
        id: 'condiments1', name: 'Barbecue Sauce', calories: 35, quantity: 3
      },
      {
        id: 'extras1', name: 'Avocado', calories: 60, quantity: 1
      },
    ],
    calories: 565,
  },
  {
    id: 5,
    name: '당나라',
    item: [
      {
        id: 'bread1', name: '9-Grain Honey Oat Bread', calories: 230, quantity: 1
      },
      {
        id: 'meats1', name: 'BBQ Pulled Pork', calories: 200, quantity: 2, url: 'https://www.subway.co.kr/images/menu/sandwich_pm08.jpg'
      },
      {
        id: 'cheese1', name: 'American Cheese', calories: 40, quantity: 1
      },
      {
        id: 'veggies1', name: 'Banana Peppers', calories: 0, quantity: 1
      },
      {
        id: 'condiments1', name: 'Barbecue Sauce', calories: 35, quantity: 3
      },
      {
        id: 'extras1', name: 'Avocado', calories: 60, quantity: 1
      },
    ],
    calories: 565,
  },
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
app.get('/menu.meats', (_, res) => {
  res.send(menu.meats);
});
app.get('/menu.cheese', (_, res) => {
  res.send(menu.cheese);
});
app.get('/menu.veggies', (_, res) => {
  res.send(menu.veggies);
});
app.get('/menu.sauce', (_, res) => {
  res.send(menu.sauce);
});
app.get('/menu.extras', (_, res) => {
  res.send(menu.extras);
});
app.get('/menu.:id', (req, res) => {
  const _id = req.params.id;
  const stringId = _id.replace(/[0-9]+/, '');
  res.send(...menu[stringId].filter(v => v.id === _id));
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
    myFavorite = myFavorite.map(v => (v.id === newMyFavorite.id ? newMyFavorite : v));
  } else {
    myFavorite = [...myFavorite, newMyFavorite];
  }
  res.send(_myFavorite);
});

app.patch('/myFavorite/:id', (req, res) => {
  const id = +req.params.id;
  const modifyMyFavorite = req.body;
  const _myFavorite = myFavorite.map(item => (item.id === id
    ? { ...item, ...modifyMyFavorite } : item));
  res.send(_myFavorite);
});

app.delete('/myFavorite/:id', (req, res) => {
  const id = +req.params.id;
  const _myFavorite = myFavorite.filter(diary => diary.id !== id);
  res.send(_myFavorite);
});