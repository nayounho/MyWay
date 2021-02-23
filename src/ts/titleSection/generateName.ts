const axios  = require('axios');
const url = 'http://localhost:7000';

const $titleInput = document.querySelector('.title__input') as HTMLInputElement;
let initalInputValue = '';

const generateName = async () => {
  const { data: myFavorite } = await axios.get(url + '/myFavorite');
  initalInputValue = `My best one pick - ${myFavorite.length + 1}`;
  $titleInput.value = initalInputValue;
};

const resetTitle = () => {
  const $inputTitle = document.querySelector('.title__input') as HTMLInputElement;
  
  $inputTitle.addEventListener('click', () => {
    
    $inputTitle.value = '';
  });

  $inputTitle.addEventListener('focusout', () => {
    if ($inputTitle.value === '') {
     $inputTitle.value = initalInputValue;
    }
  });
};

export { resetTitle, generateName };
