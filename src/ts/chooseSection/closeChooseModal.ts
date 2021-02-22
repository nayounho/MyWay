const $modals = document.querySelectorAll('.modal');

const closeModal = () => {
  document.querySelectorAll('.modal')?.forEach(v => {
    v.classList.remove('open');
  })
}

export default () => {
  $modals.forEach(modal => {
    modal.addEventListener('mouseleave', closeModal)
  })
}