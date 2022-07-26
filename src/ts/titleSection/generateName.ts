import state from '../state/state';
import spinner from '../utils/spinner';
import commonConfig from '../../common.config';
import axios from 'axios';

const $titleInput = document.querySelector('.title__input') as HTMLInputElement;
let initalInputValue = '';

const generateName = async () => {
  spinner.display();

  const { data: myFavorite } = await axios.get(commonConfig.SERVER_URL + '/myFavorite');
  initalInputValue = `My best one pick - ${myFavorite.length + 1}`;
  $titleInput.value = initalInputValue;
  
  spinner.hide();
};

const resetTitle = () => {
  $titleInput.addEventListener('click', () => {
    $titleInput.value = '';
  });

  $titleInput.addEventListener('focusout', () => {
    if ($titleInput.value === '') {
     $titleInput.value = state.name === 
     null ? initalInputValue : state.name;
    }
  });
};

export { resetTitle, generateName };
