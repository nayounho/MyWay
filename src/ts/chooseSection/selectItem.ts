import { menuState } from '../state/menuState';
import state from '../state/state';

type Category = {
  id: string,
  name: string,
  calories: number,
  selected: boolean
}

const $mainChoose = document.querySelector('.main__choose') as HTMLElement;

const makeSelectedItem = () => {
  $mainChoose.addEventListener('change', e => {
    const target = e.target as HTMLInputElement;
    
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

    state.selectedItem = state.selectedItem.map(item => ({ ...item, quantity: 1 }))
  })
}

export default makeSelectedItem;