import state from '../state/state';

type Category = {
  id: string,
  name: string,
  calories: number,
  selected: boolean
}

type MenuState = { 
  bread: Category[],
  meats: Category[],
  cheese: Category[],
  veggies: Category[],
  sauce: Category[],
  extras: Category[]
};

const renderCustom = () => {
  const $sizeList = document.querySelector('.size__item') as HTMLUListElement;
  const $menuList = document.querySelector('.choose__menu') as HTMLUListElement;
  const $size = document.querySelector('.list-static__size > span') as HTMLElement;

  // $size.textContent = state.sizeState.name;

  // radio type


  // checkbox type
};

export default renderCustom;
