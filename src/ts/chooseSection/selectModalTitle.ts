import state from '../state/state';

export default (target: HTMLInputElement) => {
  if (target.type === 'number') {
    const category = target.id.replace('selected-', '').replace(/[0-9]+/, '');
    const title = state.selectedItem.filter(item => item.id.replace(/[0-9]+/, '') === category).map(item => item.name).join(', ');

    const $targetNameTitle = document.querySelector(`.${category}__title`) as HTMLDivElement;
    const $targetNameModalTitle = document.querySelector(`.menu__${category} > .modal > div`) as HTMLDivElement;

    $targetNameTitle.innerHTML = title === '' ? '선택하세요<i class="fas fa-sort-down"></i>' : title;
    $targetNameModalTitle.innerHTML = title === '' ? '선택하세요<i class="fas fa-sort-down"></i>' : title;

    return;
  }

  const $targetNameTitle = document.querySelector(`.${target.name}__title`) as HTMLDivElement;
  const $targetNameModalTitle = document.querySelector(`.menu__${target.name} > .modal > div`) as HTMLDivElement;
  const name = state.selectedItem.filter(item => item.id.replace(/[0-9]+/, '') === target.name).map(item => item.name).join(', ');

  if (target.matches('#size1') || target.matches('#size2')) {
    $targetNameTitle.textContent = state.sizeState.name;
    $targetNameModalTitle.textContent = state.sizeState.name;

    return;
  } else if (target.type === 'checkbox' || target.type === 'radio') {
    $targetNameTitle.innerHTML = name === '' ? '선택하세요<i class="fas fa-sort-down"></i>' : name;
    $targetNameModalTitle.innerHTML = name === '' ? '선택하세요<i class="fas fa-sort-down"></i>' : name;
  } else return;
};