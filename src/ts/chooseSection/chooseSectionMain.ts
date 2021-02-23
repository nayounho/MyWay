import openChooseModal from './openChooseModal'
import closeChooseModal from './closeChooseModal'
import makeSelectedItem from './selectedItemState';

export default () => {
  openChooseModal();
  closeChooseModal();
  makeSelectedItem();
}