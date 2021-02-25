export default (target: HTMLInputElement) => {
  const category = target.id.replace('selected-', '').replace(/[0-9]+/, '');

  const $modalList: Array<HTMLInputElement> = Array.from(document.querySelectorAll(`.${category}__item input`));

  $modalList.forEach(($item: HTMLInputElement) => {
    if ($item.id === target.id.replace('selected-', '')) $item.checked = false;
  });
};