import { getMenu } from './state/menuState';
import chooseSectionRender from './chooseSection/chooseSectionRender';
import renderMyFavorite from './mywaySection/renderMyFavorite';
import { resetTitle, generateName } from './titleSection/generateName';
import myMyWayMain from './mywaySection/myWayMain';
import chooseSectionMain from './chooseSection/chooseSectionMain';
import carousel from './mywaySection/myWaycarousel';
import spinner from './utils/spinner';

chooseSectionMain();
resetTitle();
myMyWayMain();
carousel();

document.addEventListener('DOMContentLoaded', async () => {
  spinner.display();
  await Promise.all([
    new Promise((res, _) => {
      setTimeout(() => {
        res(generateName());
      }, 2000)
    }),
    renderMyFavorite(),
    chooseSectionRender(),
    getMenu(),
  ]);
  spinner.hide();
});
