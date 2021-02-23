import { menuState } from '../state/menuState';
import sizeState from '../state/sizeState';

const renderCustom = async () => {
  const $sizeList = document.querySelector('.size__item') as HTMLUListElement;
  const $menuList = document.querySelector('.choose__menu') as HTMLUListElement;
  
  // size
  $sizeList.addEventListener('click', e => {
    if ((<HTMLElement>e.target).matches('#size1')) {
      sizeState.name = '15cm';
      sizeState.size = 15;
    }
    else if ((<HTMLElement>e.target).matches('#size2')) {
      sizeState.name = '30cm';
      sizeState.size = 30;
    } else return;
  });
};

export default renderCustom;
