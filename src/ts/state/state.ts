type Category = {
  id: string,
  name: string,
  calories: number,
  selected: boolean
}

const state: { sizeState: { name: string, size: number }, selectedItem: Category[]} = {
  sizeState: { name: '15cm', size: 15 },
  selectedItem: [],
}

export default state;