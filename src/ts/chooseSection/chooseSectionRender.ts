const axios = require('axios');
const url = 'http://localhost:7000';

const getMenu = async () => {
  const { data: menu } = axios.get(url + '/menu')
}

const getItem = async (item: string, btnType: string) => {
  const { data: items } = await axios.get(url + `/menu.${item}`);
  const $parentNode = document.querySelector(`.${item}__item`) as HTMLUListElement;
  
  $parentNode.innerHTML = items.map(({ id, name }: { id: string, name: string }) => `<li><input type="${btnType}" id="${id}" name="${item}"><label for="${id}">${name}</label></li>`).join('');
}

export default async () => {
  await Promise.all([
    getItem('bread', 'radio'),
    getItem('meats', 'radio'),
    getItem('cheese', 'checkbox'),
    getItem('veggies', 'checkbox'),
    getItem('sauce', 'checkbox'),
    getItem('extras', 'checkbox'),
  ])
}