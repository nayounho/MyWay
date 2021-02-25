const axios = require('axios');
const url = 'http://localhost:7000';

import state from '../state/state';
import renderMyFavorite from './renderMyFavorite';
import chooseSectionRender from '../chooseSection/chooseSectionRender';
import { generateName } from '../titleSection/generateName'
import renderSizeInfo from '../customSection/renderSizeInfo';
import { renderBreadName, renderMeatsName, renderDynamicList } from '../customSection/renderSelectedItem';


const $mywayBtn = document.querySelector('.myway-btn') as HTMLButtonElement;
const $titleInput = document.querySelector('.title__input') as HTMLInputElement;
const $calcNumber = document.querySelector('.calc__number') as HTMLSpanElement;

export default () => {
  $mywayBtn.addEventListener('click', async () => {
    if (!state.selectedItem.find((item: { id: string }) => /meats/.test(item.id))
      || !state.selectedItem.find((item: { id: string }) => /bread/.test(item.id))) {
        const $addBtnPopup = document.querySelector('.myway-btn__alertPopup') as HTMLElement;

        $addBtnPopup.classList.add('active');
        $addBtnPopup.addEventListener('animationend', () => {
          $addBtnPopup.classList.remove('active');
        });

        return;
      }
      
    const { data: myFavoriteList } = await axios.get(url + '/myFavorite');
    state.id = state.id === null ? await myFavoriteList.length + 1 : state.id;

    await axios.post(url + '/myFavorite', {
      id: state.id,
      name: $titleInput.value,
      item: state.selectedItem,
      calories: $calcNumber.textContent
    })

    state.id = null;
    $calcNumber.textContent = 0 + '';
    state.selectedItem = [];

    await renderMyFavorite();
    await chooseSectionRender();
    await generateName();
    renderSizeInfo();
    renderBreadName();
    renderMeatsName();
    renderDynamicList();
  })
}