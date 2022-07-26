import axios from 'axios';
import commonConfig from '../../common.config';

let carState = {
  numOfSlides: 0,
  currentSlide: 0
}

const getNumOfSlides = async () => {
  const myFavoriteList = await axios.get(`${commonConfig.SERVER_URL}/myFavorite`);

  carState.numOfSlides = myFavoriteList.data.length;
};

export { carState, getNumOfSlides };