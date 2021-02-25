import spinner from '../utils/spinner';

const axios = require('axios');

const render = async () => {
  const myFavorites = await axios.get('http://localhost:7000/myFavorite');

  let html = '';

  myFavorites.data.forEach((myFavorite: any) => {
    html += `<li id="${myFavorite.id}" class="myway__item">
    <figure>
      <img
        src="${myFavorite.item.find((item: { id: string }) => /meats/.test(item.id)).url}"
        alt="${myFavorite.item.find((item: { id: string }) => /meats/.test(item.id)).name}"
      />
      <figcaption>${myFavorite.name}</figcaption>
    </figure>
  <div class="item__showmore">
      <button class="showmore__btn">···</button>
      <div class="showmore__popup">
        <button class="edit-myway">
          보기/편집
        </button>
        <button class="delete-myway">
          삭제
        </button>
      </div>
    </div>
  </li>`;

  const $mywayList = document.querySelector('.myway__list') as HTMLUListElement;
  $mywayList.innerHTML = html;
  });
};

export default render;