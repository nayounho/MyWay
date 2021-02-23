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
  let sum: number = 0;
    state.selectedItem.forEach( v => {
    sum += v.calories;
    sum *= state.sizeState.size;
  $calcnumber.textContent = `${sum}`;
  }) 
}

export default sumCalorie;