import type { Category } from './types';

const state: { sizeState: { name: string, size: number }, selectedItem: Category[], id: number | null} = {
  sizeState: { name: '15cm', size: 1 },
  selectedItem: [],
  id: null,
}

export default state;