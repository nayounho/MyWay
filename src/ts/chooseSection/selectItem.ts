import { menuState } from '../state/menuState';
import state from '../state/state';
import renderSizeInfo from '../customSection/renderSizeInfo';
import sumCalorie from '../sumCalorie/sumCalorie';
import selectModalTitle from './selectModalTitle';

type Category = {
  id: string,
  name: string,
  calories: number,
  selected: boolean
}

const $mainChoose = document.querySelector('.main__choose') as HTMLElement;
const $sizeList = document.querySelector('.size__item') as HTMLUListElement;
const $checkedItemList = document.querySelector('.custom__list-dynamic') as HTMLUListElement;

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
        : state.selectedItem.filter(item => item.id !== masterItem.id);

      state.selectedItem = state.selectedItem.map(item => ({ ...item, quantity: 1 }));

      const renderCheckedItem = () => {
        let itemName = '';

        category.find((item: Category) => {
          if (item.id === target.id) itemName = item.name;
        });

        $checkedItemList.innerHTML += `<li class="list-dynamic__item">
        <input type="number" id="${target.id}" class="list-dynamic__num" value="1" />
        <label for="${target.id}">${itemName}</label>
        <button class="list-dynamic__del"><i class="fas fa-times-circle"></i></button>
      </li>`;
      };

      renderCheckedItem();
    } else if (target.type === 'radio') {
      state.selectedItem = [...state.selectedItem.filter(item => item.id.replace(/[0-9]+/, '') !== categoryName), ...category.filter(item => item.id === masterItem.id)];
      state.selectedItem = state.selectedItem.map(item => ({ ...item, quantity: 1 }));

      const renderSelectedItem = () => {
        const $node = document.querySelector(`.list-static__${categoryName} > span`) as HTMLElement;
        let html = '';

        category.find((item: Category) => {
          if (item.id === target.id) html = item.name;
        });

        $node.textContent = html;
      };

      renderSelectedItem();
    }

    sumCalorie();
    selectModalTitle(target);
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

    renderSizeInfo();
  });
};

export default makeSelectedItem;