const axios = require('axios');
const url = 'http://localhost:7000';

import type { myFavoriteItem } from '../state/types';

export default async () => {
  const {
    data: myFavoriteList
  } = await axios.get(url + '/myFavorite');
  let newId = -1;

  await myFavoriteList.forEach((item: myFavoriteItem) => {
    if (item.id >= newId) newId = item.id;
  });

  newId += 1;

  return newId;
};