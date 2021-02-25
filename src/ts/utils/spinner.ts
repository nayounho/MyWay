const $spinnerContainer = document.querySelector('.spinner-container') as HTMLElement;

export default {
  display () {
    $spinnerContainer.style.display = 'block';
  },
  hide () {
    $spinnerContainer.style.display = 'none';
  }
}