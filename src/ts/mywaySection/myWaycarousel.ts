import { Category } from "../state/types";

const axios = require('axios');

const carousel = async () => {
  const myFavoriteList = await axios.get('http://localhost:7000/myFavorite');
  
  const listData = myFavoriteList.data;

  console.log(listData.length);
  

  listData.forEach((list: Category) => {
    if (listData.length > 3) console.log(listData.length);
  })
}

export default carousel;