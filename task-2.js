const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createIngredientItem = ingredient => {
  const itemRef = document.createElement('li');
  itemRef.textContent = ingredient;
  return itemRef;
};
const ingredientItems = ingredients.map(item => createIngredientItem(item));

const ingredientsListRef = document.querySelector('#ingredients');

ingredientsListRef.append(...ingredientItems);
