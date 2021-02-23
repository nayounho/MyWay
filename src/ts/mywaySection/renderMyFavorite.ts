const axios = require('axios');

const render = async () => {
  const myFavorites = await axios.get('http://localhost:7000/myFavorite');

  let html = '';
  
  myFavorites.data.forEach((myFavorite: any) => {
    html += `<li id="${myFavorite.id}" class="myway__item">
    <figure>
      <img
        src="${myFavorite.item[1].url}"
        alt="${myFavorite.item[1].name}"
      />
      <figcaption>${myFavorite.name}</figcaption>
    </figure>
  </li>`;

  const $mywayList = document.querySelector('.myway__list') as HTMLUListElement;
  $mywayList.innerHTML = html;
  });
};

export default render;