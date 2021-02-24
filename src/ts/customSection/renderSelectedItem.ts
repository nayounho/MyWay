import type { Category } from '../state/types';
import { menuState } from '../state/menuState';
import state from '../state/state';

const renderStaticList = (target: HTMLInputElement) => {
  const categoryName = target.id.replace(/[0-9]+/, '');
  const category: Category[] = menuState[categoryName];

  const $node = document.querySelector(`.list-static__${categoryName} > span`) as HTMLElement;
  let html = '';

  category.forEach((item: Category) => {
    if (item.id === target.id) html = item.name;
  });

  $node.textContent = html;
};

const renderDynamicList = () => {
  const $checkedItemList = document.querySelector('.custom__list-dynamic') as HTMLUListElement;
  
  $checkedItemList.innerHTML = '';

  state.selectedItem.forEach((item) => {
    if (item.id.includes('bread') || item.id.includes('meats')) return;

    $checkedItemList.innerHTML += `<li class="list-dynamic__item">
  <input type="number" id="selected-${item.id}" class="list-dynamic__num" value="${item.quantity}" min="1" max="10" />
  <label for="selected-${item.id}">${item.name}</label>
  <button class="list-dynamic__del"><i class="fas fa-times-circle"></i></button>
</li>`;
  });

  if (!$checkedItemList.firstElementChild) $checkedItemList.innerHTML = `<i class="far fa-grin"></i>
  <span>What's your way?</span>`;
};

export { renderStaticList, renderDynamicList }