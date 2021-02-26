import renderSizeInfo from '../customSection/renderSizeInfo';
import sumCalorie from '../titleSection/sumCalorie';
import selectModalTitle from './selectModalTitle';
import updateSizeState from '../updateState/updateSizeState';
import checkQuantity from '../customSection/checkQuantity';
import updateQuantityState from '../updateState/updateQuantityState';
import { renderBreadName, renderMeatsName, renderDynamicList } from '../customSection/renderSelectedItem';
import { updateStaticList, updateDynamicList, deleteCheckedItem } from '../updateState/updateSelectedState'
import uncheckItem from '../chooseSection/uncheckItem';

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
      // renderStaticList();
      if (target.name === 'bread') renderBreadName();
      else if (target.name === 'meats') renderMeatsName();
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

    if (+target.value === 1 || +target.value === 10) {
      target.addEventListener('click', function addActiveClass() {
        const $popUp = document.querySelector('.custom__alertPopup') as HTMLElement;

        $popUp.classList.add('active');
        $popUp.addEventListener('animationend', () => {
          $popUp.classList.remove('active');
          target.removeEventListener('click', addActiveClass);
        });
      });
    }

    checkQuantity(target);
    updateQuantityState(target);
    sumCalorie();
  });

  // 현재는 choose section과 custom section에 대한 이벤트 모두 이 파일에서 처리하고 있음.
  // 파일 분리 필요한가요?
  $checkedItemList.addEventListener('click', e => {
    const target = e.target as HTMLElement;

    if (target.matches('i.fa-times-circle')) {
      const $upperInput = target.parentNode?.parentNode?.firstElementChild as HTMLInputElement;

      deleteCheckedItem($upperInput);
      renderDynamicList();
      selectModalTitle($upperInput);
      uncheckItem($upperInput);
    }
  });
};