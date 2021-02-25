const $mywayList = document.querySelector('.myway__list');

export default $mywayList?.addEventListener('click', e => {
  const $target = e.target as HTMLElement;

  if ($target.matches('.showmore__btn')) {
    const $popup = $target.nextElementSibling as HTMLElement;

    $popup?.classList.add('active');

    // close popup
    $popup.addEventListener('mouseleave', () => {
      $popup?.classList.remove('active');
    });
  }
});