import state from '../state/state';

export default (target: HTMLInputElement) => {
  const name = state.selectedItem.filter(item => item.id.replace(/[0-9]+/, '') === target.name).map(item => item.name).join(', ')

  const $targetNameTitle = document.querySelector(`.${target.name}__title`) as HTMLDivElement;
  const $targetNameModalTitle = document.querySelector(`.menu__${target.name} > .modal > div`) as HTMLDivElement;

  $targetNameTitle.textContent = name === '' ? '선택하세요' : name;
  $targetNameModalTitle.textContent = name === '' ? '선택하세요' : name;
}