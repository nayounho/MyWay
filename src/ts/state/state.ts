import type { Category } from './types';

const state: { sizeState: { name: string, size: number }, selectedItem: Category[], id: number | null, name: string | null } = {
  sizeState: { name: '15cm', size: 1 },
  selectedItem: [],
  id: null,
  name: null,
}

export default state;