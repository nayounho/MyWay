import { carState, getNumOfSlides } from '../state/carouselState';
import changeBtnColor from './carouselBtnColor';
import { Category } from "../state/types";

const axios = require('axios');

const carousel = async () => {
  await getNumOfSlides();
  
  const $carouselSlides = document.querySelector('.myway__list') as HTMLElement;
  const $carouselControlNext = document.querySelector('.carousel-control.next') as HTMLButtonElement;
  const $carouselControlPrev = document.querySelector('.carousel-control.prev') as HTMLButtonElement;

  if (carState.numOfSlides > 4) {
    $carouselControlNext.addEventListener('click', () => {
      // change color of this button
      if (carState.currentSlide >= carState.numOfSlides - 5) {
        $carouselControlNext.style.color = 'gray';
      }

      if (carState.currentSlide >= carState.numOfSlides - 4) {
        return;
      }

      $carouselControlPrev.style.color = 'greenyellow';
      carState.currentSlide += 1;
      $carouselSlides.style.setProperty('--currentSlide', carState.currentSlide + '');
      $carouselSlides.style.setProperty('--duration', '500');
    });
        
    $carouselControlPrev.addEventListener('click', () => {
      // change color of this button
      if (carState.currentSlide <= 1) {
        $carouselControlPrev.style.color = 'gray';
      }

      if (carState.currentSlide <= 0) {
        return;
      }

      $carouselControlNext.style.color = 'greenyellow';
      carState.currentSlide -= 1;
      $carouselSlides.style.setProperty('--currentSlide', carState.currentSlide + '');
      $carouselSlides.style.setProperty('--duration', '500');
    });
  }
};

export default carousel;