import state from '../state/state';
import type { Category, MenuState } from '../state/types';
import commonConfig from '../../common.config';
import axios from 'axios';

export default async () => {
  const { data: totalList }: { data: MenuState } = await axios.get(commonConfig.SERVER_URL + '/menu');

  const selectedCategories = state.selectedItem.map(item => item.id);
  
  selectedCategories.forEach(category => {
    totalList[category.replace(/[0-9]+/, '')] = totalList[category.replace(/[0-9]+/, '')].map((item: Category) => {
      if (item.id === category) {
        item.selected = true;
      }
      return item;
    })
  })
  
  const categories = Object.keys(totalList);
  
  categories.forEach(category => {
    const $parentNode = document.querySelector(`.${category}__item`) as HTMLUListElement;

    $parentNode.innerHTML = totalList[category].map(({ id, name, selected }: Category) => `<li><input type="${category === 'bread' || category === 'meats' ? 'radio' : 'checkbox'}" id="${id}" name="${category}" ${selected ? 'checked' : ''}><label for="${id}">${name}</label></li>`).join('');
  })
}