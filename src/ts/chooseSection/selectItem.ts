import { menuState } from '../state/menuState';
import state from '../state/state';
import renderCustom from '../customSection/renderCustomSection';
import render from '../mywaySection/renderMyFavorite';

type Category = {
  id: string,
  name: string,
  calories: number,
  selected: boolean
}

const $mainChoose = document.querySelector('.main__choose') as HTMLElement;
const $sizeList = document.querySelector('.size__item') as HTMLUListElement;
const $size = document.querySelector('.list-static__size') as HTMLElement;

const makeSelectedItem = () => {
  $mainChoose.addEventListener('change', e => {
    const target = e.target as HTMLInputElement;
    if (target.matches('#size1') || target.matches('#size2')) return;
    
    const categoryName = target.id.replace(/[0-9]+/, '');
    const category: Category[] = menuState[categoryName];
    const masterItem: Category = category.filter(item => item.id === target.id)[0];

    if (target.type === 'checkbox') {
      state.selectedItem = target.checked
        ? [...state.selectedItem, masterItem]
        : state.selectedItem.filter(item => item.id !== masterItem.id)
    } else if (target.type === 'radio') {
      state.selectedItem = [...state.selectedItem.filter(item => item.id.replace(/[0-9]+/, '') !== categoryName), ...category.filter(item => item.id === masterItem.id)]
    }

    state.selectedItem = state.selectedItem.map(item => ({ ...item, quantity: 1 }));
  });

  // 사이즈 항목 선택 시 size state 갱신
  $sizeList.addEventListener('click', e => {
    if ((<HTMLElement>e.target).matches('#size1')) {
      state.sizeState.name = '15cm';
      state.sizeState.size = 1;
    } else if ((<HTMLElement>e.target).matches('#size2')) {
      state.sizeState.name = '30cm';
      state.sizeState.size = 2;
    }

    renderCustom();
  });
};

export default makeSelectedItem;