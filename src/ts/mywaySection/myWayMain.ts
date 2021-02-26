import addMyWay from './addMyWay';
import loadMyFavorite from './loadMyFavorite';
import deleteMyWay from './deleteMyWay';

export default () => {
  addMyWay();
  loadMyFavorite('.edit-myway');
  deleteMyWay();
}