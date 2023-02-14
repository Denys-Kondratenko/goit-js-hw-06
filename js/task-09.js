function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const btnChangeColor = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

btnChangeColor.addEventListener('click', event => {
  const color = getRandomHexColor();

  body.style.backgroundColor = color;
  colorName.textContent = color;
});
