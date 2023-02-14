const arrayCategories = document.querySelectorAll('.item');
console.log(arrayCategories);
const numberOfCategories = arrayCategories.length;
console.log('Number of categories:', numberOfCategories);

arrayCategories.forEach(element => {
  console.log('Category:', element.firstElementChild.textContent);
  console.log('Elements:', element.lastElementChild.children.length);
});
