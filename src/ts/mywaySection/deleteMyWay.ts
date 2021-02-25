const axios = require('axios');
const url = 'http://localhost:7000';

import state from '../state/state';
import renderMyFavorite from './renderMyFavorite';
import showMorePopup from './showMorePopup';

const $mywayList = document.querySelector('.myway__list') as HTMLUListElement;

showMorePopup;

export default () => {
  // id 뽑아내기
  $mywayList.addEventListener('click', async e => {
    const $target = e.target as HTMLElement;

    if ($target.matches('.delete-myway')) {
      const $li = $target.parentNode?.parentNode?.parentNode as HTMLElement;

      const { data: newMyFavoriteList } = await axios.delete(url + `/myFavorite/${$li.id}`);

      await console.log(newMyFavoriteList);
      await renderMyFavorite();
    }
  });

  // 해당 항목에 대한 delete 요청
};