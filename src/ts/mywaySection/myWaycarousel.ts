import { Category } from "../state/types";

const axios = require('axios');

const carousel = async () => {
  const myFavoriteList = await axios.get('http://localhost:7000/myFavorite');
  
  const $carouselSlides = document.querySelector('.myway__list') as HTMLElement;
  const $carouselControlNext = document.querySelector('.carousel-control.next') as HTMLButtonElement;
  const $carouselControlPrev = document.querySelector('.carousel-control.prev') as HTMLButtonElement;
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
        
        $carouselControlPrev.addEventListener('click', () => {
          if (currentSlide <= 0) return $carouselControlPrev.style.color = 'gray';
          
          $carouselControlNext.style.color = 'greenyellow';
          currentSlide -= 1;
          $carouselSlides.style.setProperty('--currentSlide', currentSlide + '');
          $carouselSlides.style.setProperty('--duration', '500');
      });
    }
}

export default carousel;