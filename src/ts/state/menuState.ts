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

  // menuState.bread = menu.bread.map(item => ({ ...item, selected: false }))
  // menuState.meats = menu.meats.map(item => ({ ...item, selected: false }))
  // menuState.cheese = menu.cheese.map(item => ({ ...item, selected: false }))
  // menuState.veggies = menu.veggies.map(item => ({ ...item, selected: false }))
  // menuState.sauce = menu.sauce.map(item => ({ ...item, selected: false }))
  // menuState.extras = menu.extras.map(item => ({ ...item, selected: false }))

  const menuItemName = Object.keys(menu)
  menuItemName.forEach((name: string) => {
    menuState[name] = menu[name].map((item: Category) => ({ ...item, selected: false }))
  })
}

export { getMenu, menuState };