import { menuState } from '../state/menuState'
import state from '../state/state';

const $choose = document.querySelector('.main__choose') as HTMLElement;
const $calcnumber = document.querySelector('.calc__number') as HTMLSpanElement;

// type category = {
//   id: string,
//   name: string,
//   calories: number,
//   selected: boolean
// };

const sumCalorie = () => {
  let sumCal: number = 0;  
    state.selectedItem.forEach( item => {
      sumCal += (item.calories * item.quantity);
    });

    sumCal *= state.sizeState.size;
  $calcnumber.textContent = `${sumCal}`;
};

export default sumCalorie;