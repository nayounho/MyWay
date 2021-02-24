export default (target: HTMLInputElement) => {
  if (+target.value <= 0 || +target.value > 10) {
    target.value = '1';
  
    const $popUp = document.querySelector('.custom__alertPopup') as HTMLElement;
  
    $popUp.classList.add('active');
    $popUp.addEventListener('animationend', () => {
      $popUp.classList.remove('active');
    });
  
    return;
  }
}