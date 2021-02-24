const axios = require('axios');
const url = 'http://localhost:7000';

const getItem = async (item: string, btnType: string) => {
  const { data: items } = await axios.get(url + `/menu.${item}`);
  const $parentNode = document.querySelector(`.${item}__item`) as HTMLUListElement;
  const $title = document.querySelector(`.${item}__title`) as HTMLUListElement;
  
  $parentNode.innerHTML = items.map(({ id, name }: { id: string, name: string }) => `<li><input type="${btnType}" id="${id}" name="${item}"><label for="${id}">${name}</label></li>`).join('');

  ($parentNode.previousElementSibling as HTMLDivElement).textContent = '선택하세요';
  $title.innerHTML = `선택하세요<i class="fas fa-sort-down"></i>`;
}

export default async () => {
  console.log('init');
  await Promise.all([
    getItem('bread', 'radio'),
    getItem('meats', 'radio'),
    getItem('cheese', 'checkbox'),
    getItem('veggies', 'checkbox'),
    getItem('sauce', 'checkbox'),
    getItem('extras', 'checkbox'),
  ])
}