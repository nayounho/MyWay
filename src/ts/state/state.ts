type Category = {
  id: string,
  name: string,
  calories: number,
  selected: boolean,
  quantity: number,
}

const state: { sizeState: { name: string, size: number }, selectedItem: Category[]} = {
  sizeState: { name: '15cm', size: 1 },
  selectedItem: [],
}

export default state;