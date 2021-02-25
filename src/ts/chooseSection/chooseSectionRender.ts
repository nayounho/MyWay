import type { Category } from '../state/types'

const axios = require('axios');
const url = 'http://localhost:7000';

const renderMenuList = async (item: string, btnType: string) => {
  const { data: items }: { data: Category[] } = await axios.get(url + `/menu.${item}`);

  const $parentNode = document.querySelector(`.${item}__item`) as HTMLUListElement;
  const $title = document.querySelector(`.${item}__title`) as HTMLUListElement;
  
  $parentNode.innerHTML = items.map(({ id, name, selected }) => `<li><input type="${btnType}" id="${id}" name="${item}" ${selected ? 'checked' : ''}><label for="${id}">${name}</label></li>`).join('');

  ($parentNode.previousElementSibling as HTMLDivElement).textContent = '선택하세요';
  $title.innerHTML = `선택하세요<i class="fas fa-sort-down"></i>`;
}

export default async () => {
  await Promise.all([
    renderMenuList('bread', 'radio'),
    renderMenuList('meats', 'radio'),
    renderMenuList('cheese', 'checkbox'),
    renderMenuList('veggies', 'checkbox'),
    renderMenuList('sauce', 'checkbox'),
    renderMenuList('extras', 'checkbox'),
  ])
}