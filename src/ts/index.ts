import chooseSectionRender from './chooseSection/chooseSectionRender';
import chooseSectionMain from './chooseSection/chooseSectionMain';
import renderMyFavorite from './renderMyFavorite';
import { resetTitle, generateName } from './generateName';

chooseSectionMain();
resetTitle();

<<<<<<< HEAD
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
  ]);
  $spinnerContainer.style.display = 'none';
});
=======
document.addEventListener('DOMContentLoaded', () => {
  renderMyFavorite();
  chooseSectionRender();
  generateName();
});
>>>>>>> d389fd57d8e6ba2825b1781ab2b374459755b02c
