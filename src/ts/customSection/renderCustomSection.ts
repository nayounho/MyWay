import { menuState } from '../state/menuState';
import state from '../state/state';

const renderCustom = () => {
  const $sizeList = document.querySelector('.size__item') as HTMLUListElement;
  const $menuList = document.querySelector('.choose__menu') as HTMLUListElement;
  const $size = document.querySelector('.list-static__size > span') as HTMLElement;

  $size.textContent = state.sizeState.name;
};

export default renderCustom;
