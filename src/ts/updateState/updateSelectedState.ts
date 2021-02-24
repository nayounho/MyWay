import type { Category } from '../state/types';
import state from '../state/state';
import { menuState } from '../state/menuState';

const updateDynamicList = (target: HTMLInputElement) => {
  const categoryName = target.id.replace(/[0-9]+/, '');
  const category: Category[] = menuState[categoryName];
  const masterItem: Category = category.filter(item => item.id === target.id)[0];

  state.selectedItem = target.checked
    ? [...state.selectedItem, masterItem]
    : state.selectedItem.filter(item => item.id !== masterItem.id);

  state.selectedItem = state.selectedItem.map(item => {
    return item.hasOwnProperty('quantity') ? item : { ...item, quantity: 1 };
  });
}

const updateStaticList = (target: HTMLInputElement) => {
  const categoryName = target.id.replace(/[0-9]+/, '');
  const category: Category[] = menuState[categoryName];
  const masterItem: Category = category.filter(item => item.id === target.id)[0];

  state.selectedItem = [...state.selectedItem.filter(item => item.id.replace(/[0-9]+/, '') !== categoryName), ...category.filter(item => item.id === masterItem.id)];
  state.selectedItem = state.selectedItem.map(item => {
    return item.hasOwnProperty('quantity') ? item : { ...item, quantity: 1 };
  });
}

const deleteCheckedItem = (target: HTMLElement) => {
  console.log(state.selectedItem);
};

export { updateStaticList, updateDynamicList, deleteCheckedItem }