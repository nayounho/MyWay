import state from '../state/state';

const $calcnumber = document.querySelector('.calc__number') as HTMLSpanElement;

const sumCalorie = () => {
  let sumCal: number = 0;  
    state.selectedItem.forEach( item => {
      sumCal += (item.calories * item.quantity);
    });

    sumCal *= state.sizeState.size;
  $calcnumber.textContent = `${sumCal}`;
};

export default sumCalorie;