type Category = {
  id: string,
  name: string,
  calories: number,
  selected: boolean,
  quantity: number,
};

type MenuState = { 
  bread: Category[],
  meats: Category[],
  cheese: Category[],
  veggies: Category[],
  sauce: Category[],
  extras: Category[],
  [proName: string]: any
};

type myFavoriteItem = {
  id: number,
  name: string,
  item: Category[],
  calories: number,
};

type myFavorite = myFavoriteItem[]

export type { Category, MenuState, myFavoriteItem, myFavorite }