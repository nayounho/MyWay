import type { Category } from './types';

const state: { sizeState: { name: string, size: number }, selectedItem: Category[]} = {
  sizeState: { name: '15cm', size: 1 },
  selectedItem: [],
}

export default state;