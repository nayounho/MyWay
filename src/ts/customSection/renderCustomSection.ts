import { menuState } from '../state/menuState';
import state from '../state/state';

const renderCustom = async () => {
  const $sizeList = document.querySelector('.size__item') as HTMLUListElement;
  const $menuList = document.querySelector('.choose__menu') as HTMLUListElement;
  
  // size
  $sizeList.addEventListener('click', e => {
    if ((<HTMLElement>e.target).matches('#size1')) {
      state.sizeState.name = '15cm';
      state.sizeState.size = 1;
    }
    else if ((<HTMLElement>e.target).matches('#size2')) {
      state.sizeState.name = '30cm';
      state.sizeState.size = 2;
    } else return;
  });
};

export default renderCustom;
