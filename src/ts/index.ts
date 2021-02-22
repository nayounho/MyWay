import fetchMyFavorite from './myFavoriteRender';
import { resetTitle, generateName } from './generateName';

generateName();
resetTitle();

document.addEventListener('DOMContentLoaded', fetchMyFavorite);
