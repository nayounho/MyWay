const openModal = (menu: string) => {
  const $chooseMenu = document.querySelector('.choose__menu') as HTMLUListElement;

  $chooseMenu.addEventListener('click', e => {
    const target = e.target as HTMLElement;

    if (target.matches(`.${menu}__title`) || target.matches(`.${menu}__title > i`)) {
      document.querySelectorAll('.modal')?.forEach(v => {
        v.classList.toggle('open', v.nextElementSibling === target
          || v.nextElementSibling?.firstElementChild === target);
      });
    }
  })
}

export default () => {
  openModal('size');
  openModal('bread');
  openModal('meats');
  openModal('cheese');
  openModal('veggies');
  openModal('sauce');
  openModal('extra');
}