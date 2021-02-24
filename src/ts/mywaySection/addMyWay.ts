const axios = require('axios');
const url = 'http://localhost:7000';

import state from '../state/state';
import renderMyFavorite from './renderMyFavorite';
import chooseSectionRender from '../chooseSection/chooseSectionRender';
import renderCusmtomSection from '../customSection/renderCustomSection';

const $mywayBtn = document.querySelector('.myway-btn') as HTMLButtonElement;
const $titleInput = document.querySelector('.title__input') as HTMLInputElement;
const $calcNumber = document.querySelector('.calc__number') as HTMLSpanElement;

export default () => {
  $mywayBtn.addEventListener('click', async () => {
    if (!state.selectedItem.find((item: { id: string }) => /meats/.test(item.id))
      || !state.selectedItem.find((item: { id: string }) => /bread/.test(item.id))) {
        $mywayBtn.textContent = '빵과 메뉴는 필수 선택 항목입니다.';
        $mywayBtn.style.color = 'red';
        return;
      }
    
    $mywayBtn.textContent = 'MY WAY';
    $mywayBtn.style.color = 'rgba(250, 251, 249, 1)';
      
    const { data: myFavoriteList } = await axios.get(url + '/myFavorite');
    const newIdNum = await myFavoriteList.length + 1;

    await axios.post(url + '/myFavorite', {
      id: newIdNum,
      name: $titleInput.value,
      item: state.selectedItem,
      calories: $calcNumber.textContent
    })

    await renderMyFavorite();
    await chooseSectionRender();
    renderCusmtomSection();
  })
}