import spinner from '../utils/spinner';
import commonConfig from '../../common.config';
import axios from 'axios';

import state from '../state/state';
import renderMyFavorite from './renderMyFavorite';
import chooseSectionRender from '../chooseSection/chooseSectionRender';
import { generateName } from '../titleSection/generateName'
import renderSizeInfo from '../customSection/renderSizeInfo';
import { renderBreadName, renderMeatsName, renderDynamicList } from '../customSection/renderSelectedItem';
import type { myFavoriteItem } from '../state/types';
import { getNumOfSlides } from '../state/carouselState';
import generateId from '../utils/generateId';

const $mywayBtn = document.querySelector('.myway-btn') as HTMLButtonElement;
const $titleInput = document.querySelector('.title__input') as HTMLInputElement;
const $calcNumber = document.querySelector('.calc__number') as HTMLSpanElement;

export default () => {
  $mywayBtn.addEventListener('click', async () => {
    spinner.display();
    if (!state.selectedItem.find((item: { id: string }) => /meats/.test(item.id))
      || !state.selectedItem.find((item: { id: string }) => /bread/.test(item.id))) {
        const $addBtnPopup = document.querySelector('.myway-btn__alertPopup') as HTMLElement;

        $addBtnPopup.classList.add('active');
        $addBtnPopup.addEventListener('animationend', () => {
          $addBtnPopup.classList.remove('active');
        });

        spinner.hide();
        
        return;
      }
      
    const { data: myFavoriteList } = await axios.get(commonConfig.SERVER_URL + '/myFavorite');

    state.id = state.id === null ? await generateId() : state.id;
    state.name = state.name === null ? await myFavoriteList.name : state.name;

    await axios.post(commonConfig.SERVER_URL + '/myFavorite', {
      id: state.id,
      name: $titleInput.value,
      item: state.selectedItem,
      calories: $calcNumber.textContent
    })

    // state 초기화
    state.id = null;
    state.name = null;
    $calcNumber.textContent = 0 + '';
    state.selectedItem = [];

    await renderMyFavorite();
    await chooseSectionRender();
    await generateName();
    await getNumOfSlides();
    renderSizeInfo();
    renderBreadName();
    renderMeatsName();
    renderDynamicList();

    spinner.hide();
  })
}