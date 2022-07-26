import axios from 'axios';
import commonConfig from '../../common.config';

import type { myFavoriteItem } from '../state/types';

export default async () => {
  const {
    data: myFavoriteList
  } = await axios.get(commonConfig.SERVER_URL + '/myFavorite');
  let newId = -1;

  await myFavoriteList.forEach((item: myFavoriteItem) => {
    if (item.id >= newId) newId = item.id;
  });

  newId += 1;

  return newId;
};