import { carState, getNumOfSlides } from '../state/carouselState';
import changeBtnColor from './carouselBtnColor';

const axios = require('axios');
const $carouselSlides = document.querySelector('.myway__list') as HTMLElement;
const $carouselControlNext = document.querySelector('.carousel-control.next') as HTMLButtonElement;
const $carouselControlPrev = document.querySelector('.carousel-control.prev') as HTMLButtonElement;

const carouselSetproperty = () => {
  $carouselSlides.style.setProperty('--currentSlide', carState.currentSlide + '');
  $carouselSlides.style.setProperty('--duration', '500');
};

const carousel = async () => {
  await getNumOfSlides();
  
    $carouselControlNext.addEventListener('click', () => {
      // change color of this button
      if (carState.currentSlide >= carState.numOfSlides - 5) 
        $carouselControlNext.style.color = '#bdbdbd';
      
      if (carState.currentSlide >= carState.numOfSlides - 4) 
        return;
      
      $carouselControlPrev.style.color = '#f9d142';
      carState.currentSlide += 1;
      carouselSetproperty();
    });
        
    $carouselControlPrev.addEventListener('click', () => {
      // change color of this button
      if (carState.currentSlide <= 1) 
        $carouselControlPrev.style.color = '#bdbdbd';
      
      if (carState.currentSlide <= 0) 
        return;
      
      $carouselControlNext.style.color = '#f9d142';
      carState.currentSlide -= 1;
      carouselSetproperty();
    });
};

export default carousel;