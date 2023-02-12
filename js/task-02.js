const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listIngredients = document.querySelector('#ingredients');

const itemsIngredient = ingredients.map(item => {
  const ingredient = document.createElement('li');
  ingredient.textContent = item;
  ingredient.classList.add('item');

  return ingredient;
});

listIngredients.append(...itemsIngredient);
