import { getNumOfSlides } from '../state/carouselState';
import spinner from '../utils/spinner';
import commonConfig from '../../common.config';
import axios from 'axios';

import state from '../state/state';
import renderMyFavorite from './renderMyFavorite';
import showMorePopup from './showMorePopup';

const $mywayList = document.querySelector('.myway__list') as HTMLUListElement;

showMorePopup;

export default () => {
  $mywayList.addEventListener('click', async e => {
    spinner.display();

    const $target = e.target as HTMLElement;

    if ($target.matches('.delete-myway')) {
      const $li = $target.parentNode?.parentNode?.parentNode as HTMLElement;

      await axios.delete(commonConfig.SERVER_URL + `/myFavorite/${$li.id}`);

      await renderMyFavorite();
      await getNumOfSlides();
    }

    spinner.hide();
  });
};