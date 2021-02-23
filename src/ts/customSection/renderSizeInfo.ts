import state from '../state/state';

const renderSizeInfo = () => {
  const $sizeInfo = document.querySelector('.list-static__size > span') as HTMLElement;

  $sizeInfo.textContent = state.sizeState.name;
};

export default renderSizeInfo;
