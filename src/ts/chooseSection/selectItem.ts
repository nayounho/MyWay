import renderSizeInfo from '../customSection/renderSizeInfo';
import sumCalorie from '../titleSection/sumCalorie';
import selectModalTitle from './selectModalTitle';
import updateSizeState from '../updateState/updateSizeState';
import checkQuantity from '../customSection/checkQuantity';
import updateQuantityState from '../updateState/updateQuantityState';
import { renderStaticList, renderDynamicList } from '../customSection/renderSelectedItem';
import { updateStaticList, updateDynamicList } from '../updateState/updateSelectedState'

const $mainChoose = document.querySelector('.main__choose') as HTMLElement;
const $checkedItemList = document.querySelector('.custom__list-dynamic') as HTMLUListElement;
const $sizeList = document.querySelector('.size__item') as HTMLUListElement;

export default () => {
  $mainChoose.addEventListener('change', e => {
    const target = e.target as HTMLInputElement;

    if (target.matches('#size1') || target.matches('#size2')) return;

    if (target.type === 'checkbox') {
      updateDynamicList(target);
      renderDynamicList();
    } else if (target.type === 'radio') {
      updateStaticList(target);
      renderStaticList(target);
    }

    sumCalorie();
    selectModalTitle(target);
  });

  $sizeList.addEventListener('click', e => {
    updateSizeState(e);
    renderSizeInfo();
    sumCalorie();
    selectModalTitle(<HTMLInputElement>e.target);
  });

  $checkedItemList.addEventListener('change', e => {
    const target = e.target as HTMLInputElement;

    checkQuantity(target);
    updateQuantityState(target);
    sumCalorie();
  });
};