const axios = require('axios');

let carState = {
  numOfSlides: 0,
  currentSlide: 0
}

const getNumOfSlides = async () => {
  const myFavoriteList = await axios.get('http://localhost:7000/myFavorite');

  carState.numOfSlides = myFavoriteList.data.length;
};

export { carState, getNumOfSlides };