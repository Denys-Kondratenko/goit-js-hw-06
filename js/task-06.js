const inputValidation = document.querySelector('#validation-input');

inputValidation.addEventListener('blur', () => {
  if (inputValidation.value.length === Number(inputValidation.dataset.length)) {
    inputValidation.classList.add('valid');
    inputValidation.classList.remove('invalid');
  } else {
    inputValidation.classList.add('invalid');
    inputValidation.classList.remove('valid');
  }
});
