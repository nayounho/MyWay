import type { MenuState } from './types';

const axios = require('axios');
const url = 'http://localhost:7000';

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