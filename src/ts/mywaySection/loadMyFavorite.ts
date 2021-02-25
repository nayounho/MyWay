import { Category, MenuState, myFavorite, myFavoriteItem } from '../state/types';
import state from '../state/state';
import renderSizeInfo from '../customSection/renderSizeInfo'
import { renderBreadName, renderMeatsName, renderDynamicList } from '../customSection/renderSelectedItem'
import selectModalTitle from '../chooseSection/selectModalTitle';
import spinner from '../utils/spinner';

const axios = require('axios');
const url = 'http://localhost:7000';

const $mywayList = document.querySelector('.myway__list') as HTMLUListElement;
const $titleInput = document.querySelector('.title__input') as HTMLInputElement;

const renderChooseSection = (totalList: MenuState) => {
  const categories = Object.keys(totalList);
  
  categories.forEach(category => {
    const $parentNode = document.querySelector(`.${category}__item`) as HTMLUListElement;

    $parentNode.innerHTML = totalList[category].map(({ id, name, selected }: Category) => `<li><input type="${category === 'bread' || category === 'meats' ? 'radio' : 'checkbox'}" id="${id}" name="${category}" ${selected ? 'checked' : ''}><label for="${id}">${name}</label></li>`).join('');
  })
}

export default () => {
  $mywayList.addEventListener('click', async (e: Event) => {
    spinner.display();

    const target = e.target as HTMLElement;
    const targetPrent = target.closest('li') as HTMLElement
    const $calcNumber = document.querySelector('.calc__number') as HTMLSpanElement;

    if (!target.matches('.edit-myway')) return;
    state.selectedItem = [];

    const { data: list }: { data: myFavorite } = await axios.get(url + '/myFavorite');

    const item = list.find(item => item.id === +targetPrent.id) as myFavoriteItem;

    $titleInput.value = item.name;
    $calcNumber.textContent = item.calories + '';
    
    state.selectedItem = item.item;
    state.id = item.id;
    state.name = item.name;

    const { data: totalList }: { data: MenuState } = await axios.get(url + '/menu');

    const selectedCategories = state.selectedItem.map(item => item.id);
    
    selectedCategories.forEach(category => {
      totalList[category.replace(/[0-9]+/, '')] = totalList[category.replace(/[0-9]+/, '')].map((item: Category) => {
        if (item.id === category) {
          item.selected = true;
        }
        return item;
      })
    })

    renderSizeInfo();
    renderBreadName();
    renderMeatsName();
    renderDynamicList();
    renderChooseSection(totalList);

    const totalCategory = Object.keys(totalList);

    totalCategory.forEach(category => {
      const node = document.querySelector(`.${category}__item input`) as HTMLInputElement;
      selectModalTitle(node);
    })

    spinner.hide();
  })
}