import renderMyFavorite from './renderMyFavorite';
import { resetTitle, generateName } from './generateName';

generateName();
resetTitle();

document.addEventListener('DOMContentLoaded', () => {
  renderMyFavorite();
});
