import state from '../state/state';

export default (e: Event) => {
  if ((<HTMLElement>e.target).matches('#size1')) {
    state.sizeState.name = '15cm';
    state.sizeState.size = 1;
  } else if ((<HTMLElement>e.target).matches('#size2')) {
    state.sizeState.name = '30cm';
    state.sizeState.size = 2;
  }
}