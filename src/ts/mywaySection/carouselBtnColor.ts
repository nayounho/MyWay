import { carState, getNumOfSlides } from '../state/carouselState';

const $carouselControlNext = document.querySelector('.carousel-control.next') as HTMLButtonElement;
const $carouselControlPrev = document.querySelector('.carousel-control.prev') as HTMLButtonElement;

export default () => {
  if (carState.currentSlide >= carState.numOfSlides - 5 && carState.currentSlide <= 1) {
    $carouselControlNext.style.color = 'gray';
    $carouselControlPrev.style.color = 'gray';
  } else if (carState.currentSlide >= carState.numOfSlides - 5 && carState.currentSlide > 1) {
    $carouselControlNext.style.color = 'gray';
    $carouselControlPrev.style.color = 'greenyellow';
  } else if (carState.currentSlide < carState.numOfSlides - 5 && carState.currentSlide > 1) {
    $carouselControlNext.style.color = 'greenyellow';
    $carouselControlPrev.style.color = 'greenyellow';
  } else {
    $carouselControlNext.style.color = 'greenyellow';
    $carouselControlPrev.style.color = 'gray';
  }
};

