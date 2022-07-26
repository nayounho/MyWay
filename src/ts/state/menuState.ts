import type { MenuState } from './types';
import commonConfig from '../../common.config';
import axios from 'axios';

let menuState: MenuState = {
  bread: [],
  meats: [],
  cheese: [],
  veggies: [],
  sauce: [],
  extras: [],
}

const getMenu = async () => {
  const { data : menu }: { data: MenuState } = await axios.get(commonConfig.SERVER_URL + '/menu')
  menuState = menu;
}

export { getMenu, menuState };