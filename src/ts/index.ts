import chooseSectionRender from './chooseSection/chooseSectionRender';
import chooseSectionMain from './chooseSection/chooseSectionMain';
import renderMyFavorite from './renderMyFavorite';
import { resetTitle, generateName } from './generateName';



chooseSectionMain();
generateName();
resetTitle();

document.addEventListener('DOMContentLoaded', () => {
  renderMyFavorite();
  chooseSectionRender();
});
