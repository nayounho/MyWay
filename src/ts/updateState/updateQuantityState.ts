import state from '../state/state';

export default (target: HTMLInputElement) => {
  state.selectedItem = state.selectedItem.map(item => {
    return 'selected-' + item.id === target.id ? { ...item, quantity: +target.value } : item;
  });
}