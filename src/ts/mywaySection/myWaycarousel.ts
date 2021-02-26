import { carState, getNumOfSlides } from '../state/carouselState';
import changeBtnColor from './carouselBtnColor';
import { Category } from "../state/types";

const axios = require('axios');

const carousel = async () => {
  await getNumOfSlides();
  
  const $carouselSlides = document.querySelector('.myway__list') as HTMLElement;
  const $carouselControlNext = document.querySelector('.carousel-control.next') as HTMLButtonElement;
  const $carouselControlPrev = document.querySelector('.carousel-control.prev') as HTMLButtonElement;
<<<<<<< HEAD
  const listData = myFavoriteList.data;  
  let currentSlide = 0;
  // let numOfSlides = listData.length;
  console.log(currentSlide);
  if (listData.length > 4) {
    $carouselControlNext?.addEventListener('click', () => {
      // let currentSlide = 1;
      
      const carousel1 = async () => {
        const myFavoriteList = await axios.get('http://localhost:7000/myFavorite');
        let numOfSlides = myFavoriteList.data.length;
        console.log(currentSlide);
          
          if (currentSlide >= numOfSlides - 4) return $carouselControlNext.style.color = 'gray';

          $carouselControlPrev.style.color = 'greenyellow';
          currentSlide += 1;
          $carouselSlides.style.setProperty('--currentSlide', currentSlide + '');
          $carouselSlides.style.setProperty('--duration', '500');
          }
          carousel1();
        });
=======

  if (carState.numOfSlides > 4) {
    $carouselControlNext.addEventListener('click', () => {
      // change color of this button
      if (carState.currentSlide >= carState.numOfSlides - 5) {
        $carouselControlNext.style.color = '#bdbdbd';
      }

      if (carState.currentSlide >= carState.numOfSlides - 4) {
        return;
      }

      $carouselControlPrev.style.color = '#f9d142';
      carState.currentSlide += 1;
      $carouselSlides.style.setProperty('--currentSlide', carState.currentSlide + '');
      $carouselSlides.style.setProperty('--duration', '500');
    });
>>>>>>> c4911555d60db2a2bcf1c6f9ccbd31dcdc7c4301
        
    $carouselControlPrev.addEventListener('click', () => {
      // change color of this button
      if (carState.currentSlide <= 1) {
        $carouselControlPrev.style.color = '#bdbdbd';
      }

      if (carState.currentSlide <= 0) {
        return;
      }

      $carouselControlNext.style.color = '#f9d142';
      carState.currentSlide -= 1;
      $carouselSlides.style.setProperty('--currentSlide', carState.currentSlide + '');
      $carouselSlides.style.setProperty('--duration', '500');
    });
  }
};

export default carousel;