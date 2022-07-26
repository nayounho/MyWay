import { MenuState, myFavorite, myFavoriteItem } from '../state/types';
import state from '../state/state';
import constant from '../state/constant';
import spinner from '../utils/spinner';
import renderSizeInfo from '../customSection/renderSizeInfo'
import { renderBreadName, renderMeatsName, renderDynamicList } from '../customSection/renderSelectedItem'
import renderChooseSection from '../chooseSection/renderChooseSectionByMyFavorite';
import selectModalTitle from '../chooseSection/selectModalTitle';
import axios from 'axios';

const $mywayList = document.querySelector('.myway__list') as HTMLUListElement;
const $titleInput = document.querySelector('.title__input') as HTMLInputElement;
const $calcNumber = document.querySelector('.calc__number') as HTMLSpanElement;

const loadMyFavorite = (eventTarget: string) => {
  $mywayList.addEventListener('click', async (e: Event) => {
    spinner.display();

    const target = e.target as HTMLElement;
    
    if (!target.matches(eventTarget)) return;
    
    try {
      const { data: myFavoriteObj }: { data: myFavorite } = await axios.get(constant.url + '/myFavorite');
      const { data: totalList }: { data: MenuState } = await axios.get(constant.url + '/menu');
      const $targetParent = target.closest('li') as HTMLLIElement;
      const item = myFavoriteObj.find(item => item.id === +$targetParent.id) as myFavoriteItem;
      const totalCategory = Object.keys(totalList);
      
      // state 초기화
      state.selectedItem = [];
  
      // state 최신화
      state.selectedItem = item.item;
      state.id = item.id;
      state.name = item.name;
      
      // state 기준 렌더링
      $titleInput.value = item.name;
      $calcNumber.textContent = item.calories + '';
      totalCategory.forEach(category => {
        const node = document.querySelector(`.${category}__item input`) as HTMLInputElement;
        selectModalTitle(node);
      })
    } catch (err) {
      console.log(err);
    }

    renderSizeInfo();
    renderBreadName();
    renderMeatsName();
    renderDynamicList();
    renderChooseSection();

    spinner.hide();
  })
}

export default loadMyFavorite;