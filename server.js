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
    {
      id: 'bread4', name: 'Habanero Wrap', calories: 300, selected: false
    },
    {
      id: 'bread5', name: 'Harvest Bread', calories: 230, selected: false
    },
    {
      id: 'bread6', name: 'Hearty Italian Bread', calories: 210, selected: false
    },
    {
      id: 'bread7', name: 'Italian Herbs & Cheese Bread', calories: 240, selected: false
    },
    {
      id: 'bread8', name: 'Italian White Bread', calories: 200, selected: false
    },
    {
      id: 'bread9', name: 'Jalapeno Cheese/Cheddar Bread', calories: 240, selected: false
    },
    {
      id: 'bread10', name: 'Monterey Cheddar Bread', calories: 240, selected: false
    },
    {
      id: 'bread11', name: 'Parmesan Oregano Bread', calories: 210, selected: false
    },
    {
      id: 'bread12', name: 'Roasted Garlic Bread', calories: 230, selected: false
    },
    {
      id: 'bread13', name: 'Rye Bread', calories: 190, selected: false
    },
    {
      id: 'bread14', name: 'Sourdough Bread', calories: 190, selected: false
    },
    {
      id: 'bread15', name: 'Spinach Wrap', calories: 300, selected: false
    },
    {
      id: 'bread16', name: 'Tomato Basil Wrap', calories: 300, selected: false
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
    {
      id: 'meats4', name: 'Chicken Enchilada', calories: 120, url: 'https://www.subway.co.kr/images/menu/sandwich_fl01.jpg', selected: false
    },
    {
      id: 'meats5', name: 'Chicken Salad', calories: 140, url: 'https://www.subway.co.kr/images/menu/sandwich_fl02.jpg', selected: false
    },
    {
      id: 'meats6', name: 'Chicken Strips', calories: 80, url: 'https://www.subway.co.kr/images/menu/sandwich_fl02.jpg', selected: false
    },
    {
      id: 'meats7', name: 'Cold Cut Combo Meats', calories: 130, url: 'https://www.subway.co.kr/images/menu/sandwich_pm04.jpg', selected: false
    },
    {
      id: 'meats8', name: 'Corned Beef', calories: 150, url: 'https://www.subway.co.kr/images/menu/sandwich_fl04.jpg', selected: false
    },
    {
      id: 'meats9', name: 'Egg Salad', calories: 250, url: 'https://www.subway.co.kr/images/menu/sandwich_cl06.jpg', selected: false
    },
    {
      id: 'meats10', name: 'Falafel', calories: 200, url: 'https://www.subway.co.kr/images/menu/sandwich_pm02.jpg', selected: false
    },
    {
      id: 'meats11', name: 'Fish Filet', calories: 190, url: 'https://www.subway.co.kr/images/menu/sandwich_bf02.jpg', selected: false
    },
    {
      id: 'meats12', name: 'Ham', calories: 60, url: 'https://www.subway.co.kr/images/menu/sandwich_cl04.jpg', selected: false
    },
    {
      id: 'meats13', name: 'Italian B.M.T. Meats', calories: 180, url: 'https://www.subway.co.kr/images/menu/sandwich_cl01.jpg', selected: false
    },
    {
      id: 'meats14', name: 'Italian Hero Meats', calories: 230, url: 'https://www.subway.co.kr/images/menu/sandwich_cl01.jpg', selected: false
    },
    {
      id: 'meats15', name: 'Meatballs', calories: 260, url: 'https://www.subway.co.kr/images/menu/sandwich_cl03.jpg', selected: false
    },
    {
      id: 'meats16', name: 'Orchard Chicken Salad', calories: 140, url: 'https://www.subway.co.kr/images/menu/sandwich_pm07.jpg', selected: false
    },
    {
      id: 'meats17', name: 'Pastrami', calories: 150, url: 'https://www.subway.co.kr/images/menu/sandwich_fl01.jpg', selected: false
    },
    {
      id: 'meats18', name: 'Roast Beef', calories: 90, url: 'https://www.subway.co.kr/images/menu/sandwich_pm01.jpg', selected: false
    },
    {
      id: 'meats19', name: 'Roasted Chicken Patty', calories: 90, url: 'https://www.subway.co.kr/images/menu/sandwich_fl02.jpg', selected: false
    },
    {
      id: 'meats20', name: 'Rotisserie-Style Chicken', calories: 120, url: 'https://www.subway.co.kr/images/menu/sandwich_pm07.jpg', selected: false
    },
    {
      id: 'meats21', name: 'Seafood Sensation', calories: 190, url: 'https://www.subway.co.kr/images/menu/sandwich_pm10.jpg', selected: false
    },
    {
      id: 'meats22', name: 'Steak', calories: 110, url: 'https://www.subway.co.kr/images/menu/sandwich_pm01.jpg', selected: false
    },
    {
      id: 'meats23', name: 'Subway Club Meats', calories: 90, url: 'https://www.subway.co.kr/images/menu/sandwich_fl04.jpg', selected: false
    },
    {
      id: 'meats24', name: 'Teriyaki Glazed Chicken Strips', calories: 100, url: 'https://www.subway.co.kr/images/menu/sandwich_fl01.jpg', selected: false
    },
    {
      id: 'meats25', name: 'Tuna', calories: 250, url: 'https://www.subway.co.kr/images/menu/sandwich_cl05.jpg', selected: false
    },
    {
      id: 'meats26', name: 'Turkey Breast', calories: 50, url: 'https://www.subway.co.kr/images/menu/sandwich_fl05.jpg', selected: false
    },
    {
      id: 'meats27', name: 'Veggie Patty', calories: 160, url: 'https://www.subway.co.kr/images/menu/sandwich_fl06.jpg', selected: false
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
    {
      id: 'cheese4', name: 'Monterey Cheddar Cheese, Shredded', calories: 50, selected: false
    },
    {
      id: 'cheese5', name: 'Mozzarella Cheese, Shredded', calories: 40, selected: false
    },
    {
      id: 'cheese6', name: 'Parmesan Cheese', calories: 5, selected: false
    },
    {
      id: 'cheese7', name: 'Pepperjack Cheese', calories: 50, selected: false
    },
    {
      id: 'cheese8', name: 'Provolone Cheese', calories: 50, selected: false
    },
    {
      id: 'cheese9', name: 'Swiss Cheese', calories: 50, selected: false
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
    {
      id: 'veggies4', name: 'Green Chiles', calories: 0, selected: false
    },
    {
      id: 'veggies5', name: 'Green Peppers', calories: 0, selected: false
    },
    {
      id: 'veggies6', name: 'Jalapeno Peppers', calories: 0, selected: false
    },
    {
      id: 'veggies7', name: 'Lettuce', calories: 0, selected: false
    },
    {
      id: 'veggies8', name: 'Mushrooms', calories: 5, selected: false
    },
    {
      id: 'veggies9', name: 'Olives', calories: 0, selected: false
    },
    {
      id: 'veggies10', name: 'Onions', calories: 0, selected: false
    },
    {
      id: 'veggies11', name: 'Pickles', calories: 0, selected: false
    },
    {
      id: 'veggies12', name: 'Spinach', calories: 0, selected: false
    },
    {
      id: 'veggies13', name: 'Sweet Peppers', calories: 15, selected: false
    },
    {
      id: 'veggies14', name: 'Tomatoes', calories: 5, selected: false
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
    {
      id: 'sauce4', name: 'Creamy Italian', calories: 80, selected: false
    },
    {
      id: 'sauce5', name: 'Creamy Sriracha', calories: 40, selected: false
    },
    {
      id: 'sauce6', name: 'Fire Roasted Tomato Sauce', calories: 80, selected: false
    },
    {
      id: 'sauce7', name: 'Giardiniera', calories: 80, selected: false
    },
    {
      id: 'sauce8', name: 'Golden Italian', calories: 80, selected: false
    },
    {
      id: 'sauce9', name: 'Gorgonzola Sauce', calories: 100, selected: false
    },
    {
      id: 'sauce10', name: 'Honey Mustard Sauce', calories: 30, selected: false
    },
    {
      id: 'sauce11', name: 'Hot Pepper Relish', calories: 0, selected: false
    },
    {
      id: 'sauce12', name: 'Ketchup', calories: 20, selected: false
    },
    {
      id: 'sauce13', name: 'Light Mayonnaise', calories: 50, selected: false
    },
    {
      id: 'sauce14', name: 'Mayonnaise', calories: 110, selected: false
    },
    {
      id: 'sauce15', name: 'Mustard', calories: 5, selected: false
    },
    {
      id: 'sauce16', name: 'Oil', calories: 45, selected: false
    },
    {
      id: 'sauce17', name: 'Ranch Dressing', calories: 110, selected: false
    },
    {
      id: 'sauce18', name: 'Savory Caesar', calories: 130, selected: false
    },
    {
      id: 'sauce19', name: 'Signature Horseradish Sauce', calories: 110, selected: false
    },
    {
      id: 'sauce20', name: 'Subway Vinaigrette', calories: 40, selected: false
    },
    {
      id: 'sauce21', name: 'Subway Vinaigrette Dressing', calories: 110, selected: false
    },
    {
      id: 'sauce22', name: 'Sweet Chili Sauce', calories: 30, selected: false
    },
    {
      id: 'sauce23', name: 'Sweet Onion Sauce', calories: 40, selected: false
    },
    {
      id: 'sauce24', name: 'Sweet Potato Curry', calories: 70, selected: false
    },
    {
      id: 'sauce25', name: 'Thousand Island Dressing', calories: 80, selected: false
    },
    {
      id: 'sauce26', name: 'Tzatziki Sauce', calories: 110, selected: false
    },
    {
      id: 'sauce27', name: 'Vinegar', calories: 0, selected: false
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
        id: 'sauce1', name: 'Barbecue Sauce', calories: 35, quantity: 3
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
        id: 'sauce1', name: 'Barbecue Sauce', calories: 35, quantity: 3
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
        id: 'sauce1', name: 'Barbecue Sauce', calories: 35, quantity: 3
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
        id: 'sauce1', name: 'Barbecue Sauce', calories: 35, quantity: 3
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
        id: 'sauce1', name: 'Barbecue Sauce', calories: 35, quantity: 3
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
  myFavorite = myFavorite.filter(diary => diary.id !== id);

  res.send(myFavorite);
});