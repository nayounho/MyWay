import chooseSectionRender from './chooseSection/chooseSectionRender';
import chooseSectionMain from './chooseSection/chooseSectionMain';
import { getMenu } from './state/menuState';
import renderMyFavorite from './mywaySection/renderMyFavorite';
import { resetTitle, generateName } from './titleSection/generateName';
import addMyWay from './mywaySection/myWayMain';
import sumCalorie from './sumCalorie/sumCalorie';

chooseSectionMain();
resetTitle();
addMyWay();

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