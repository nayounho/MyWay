import state from '../state/state';

export default (target: HTMLInputElement) => {
  const name = state.selectedItem.filter(item => item.id.replace(/[0-9]+/, '') === target.name).map(item => item.name).join(', ');

  const $targetNameTitle = document.querySelector(`.${target.name}__title`) as HTMLDivElement;
  const $targetNameModalTitle = document.querySelector(`.menu__${target.name} > .modal > div`) as HTMLDivElement;

  if (target.matches('#size1') || target.matches('#size2')) {
    $targetNameTitle.textContent = state.sizeState.name;
    $targetNameModalTitle.textContent = state.sizeState.name;

    return;
  } else if (target.type === 'checkbox' || target.type === 'radio') {
    $targetNameTitle.textContent = name === '' ? '선택하세요' : name;
    $targetNameModalTitle.textContent = name === '' ? '선택하세요' : name;
  } else return;
};