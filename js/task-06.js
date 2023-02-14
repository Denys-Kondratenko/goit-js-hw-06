const inputValidation = document.querySelector('#validation-input');

inputValidation.addEventListener('blur', () => {
  inputValidation.value = inputValidation.value.trim();

  if (inputValidation.value.length === Number(inputValidation.dataset.length)) {
    inputValidation.classList.add('valid');
    inputValidation.classList.remove('invalid');
  } else {
    inputValidation.classList.add('invalid');
    inputValidation.classList.remove('valid');
  }
});
