const axios = require('axios');
const url = 'http://localhost:7000';

type Category = {
  id: string,
  name: string,
  calories: number,
  selected: boolean
}[]

type MenuState = { 
  bread: Category[],
  meats: Category[],
  cheese: Category[],
  veggies: Category[],
  sauce: Category[],
  extras: Category[]
};

let menuState: MenuState = {
  bread: [],
  meats: [],
  cheese: [],
  veggies: [],
  sauce: [],
  extras: [],
}

const getMenu = async () => {
  const { data : menu }: { data: MenuState } = await axios.get(url + '/menu')
  menuState = menu;
}

export { getMenu, menuState };