import chooseSectionRender from './chooseSection/chooseSectionRender';
import chooseSectionMain from './chooseSection/chooseSectionMain';
import renderMyFavorite from './renderMyFavorite';
import { resetTitle, generateName } from './generateName';
import { getMenu } from './state/menuState';

chooseSectionMain();
resetTitle();

document.addEventListener('DOMContentLoaded', async () => {
  const $spinnerContainer = document.querySelector('.spinner-container') as HTMLElement;
  await Promise.all([
    new Promise((res, rej) => {
      setTimeout(() => {
        res(generateName());
      }, 2000)
    }),
    renderMyFavorite(),
    chooseSectionRender(),
    getMenu(),
  ]);
  $spinnerContainer.style.display = 'none';
});
