import { menuState } from '../state/menuState'

const $choose = document.querySelector('.main__choose') as HTMLElement;

type category = {
  id: string,
  name: string,
  calories: number,
  selected: boolean
};

const sumCalorie = () => {
  $choose?.addEventListener('click', () => {
    menuState.filter( bread: (category) => {

    })
  })  
}

export default sumCalorie;