const arrayCategories = document.querySelectorAll('.item');
const numberOfCategories = arrayCategories.length;
console.log('Number of categories:', numberOfCategories);

const firstCategories = arrayCategories[0];
console.log('Category:', firstCategories.firstElementChild.textContent);
console.log('Elements:', firstCategories.lastElementChild.children.length);

const secondCategories = arrayCategories[1];
console.log('Category:', secondCategories.firstElementChild.textContent);
console.log('Elements:', secondCategories.lastElementChild.children.length);

const lastCategories = arrayCategories[2];
console.log('Category:', lastCategories.firstElementChild.textContent);
console.log('Elements:', lastCategories.lastElementChild.children.length);
