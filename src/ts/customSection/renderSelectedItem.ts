import { Category } from '../state/types';
import state from '../state/state';

const renderBreadName = () => {
  const $listStaticBread = document.querySelector('.list-static__bread > span') as HTMLElement;
  const breadName = state.selectedItem.find(item => /bread/.test(item.id)) as Category;
  $listStaticBread.textContent = breadName.name;
}

const renderMeatsName = () => {
  const $listStaticMeats = document.querySelector('.list-static__meats > span') as HTMLElement;
  const meatsName = state.selectedItem.find(item => /meats/.test(item.id)) as Category;
  $listStaticMeats.textContent = meatsName.name;
}

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

export { renderBreadName, renderMeatsName, renderDynamicList }