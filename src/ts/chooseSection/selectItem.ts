import { menuState } from '../state/menuState';
import state from '../state/state';
import renderSizeInfo from '../customSection/renderSizeInfo';
import sumCalorie from '../sumCalorie/sumCalorie';
import selectModalTitle from './selectModalTitle';

type Category = {
  id: string,
  name: string,
  calories: number,
  selected: boolean,
  quantity?: number,
}

const $mainChoose = document.querySelector('.main__choose') as HTMLElement;
const $sizeList = document.querySelector('.size__item') as HTMLUListElement;
const $checkedItemList = document.querySelector('.custom__list-dynamic') as HTMLUListElement;

const renderCheckedItem = () => {
  $checkedItemList.innerHTML = '';

  state.selectedItem.forEach((item: Category) => {
    if (item.id.includes('bread') || item.id.includes('meats')) return;

    $checkedItemList.innerHTML += `<li class="list-dynamic__item">
  <input type="number" id="${item.id}" class="list-dynamic__num" value="${item.quantity}" min="1" max="10" />
  <label for="${item.id}">${item.name}</label>
  <button class="list-dynamic__del"><i class="fas fa-times-circle"></i></button>
</li>`;
  });

  if (!$checkedItemList.firstElementChild) $checkedItemList.innerHTML = `<i class="far fa-grin"></i>
  <span>What's your way?</span>`;
};

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

      state.selectedItem = state.selectedItem.map(item => {
        return item.hasOwnProperty('quantity') ? item : { ...item, quantity: 1 };
      });

      renderCheckedItem();
    } else if (target.type === 'radio') {
      state.selectedItem = [...state.selectedItem.filter(item => item.id.replace(/[0-9]+/, '') !== categoryName), ...category.filter(item => item.id === masterItem.id)];
      // state.selectedItem = state.selectedItem.map(item => ({ ...item, quantity: 1 }));
      state.selectedItem = state.selectedItem.map(item => {
        return item.hasOwnProperty('quantity') ? item : { ...item, quantity: 1 };
      })

      const renderSelectedItem = () => {
        const $node = document.querySelector(`.list-static__${categoryName} > span`) as HTMLElement;
        let html = '';

        category.forEach((item: Category) => {
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
    console.log(state);
  });

  // 🎃 input:number의 수량 조정할 경우 state 갱신
  $checkedItemList.addEventListener('change', e => {
    const target = e.target as HTMLInputElement;

    // limit quantity
    if (+target.value <= 0 || +target.value > 10) {
      target.value = '1';

      const $popUp = document.querySelector('.custom__alertPopup') as HTMLElement;

      $popUp.classList.add('active');
      $popUp.addEventListener('animationend', () => {
        $popUp.classList.remove('active');
      });

      return;
    }

    state.selectedItem = state.selectedItem.map(item => {
      return item.id === target.id ? { ...item, quantity: +target.value } : item;
    });
  });
};

export default makeSelectedItem;