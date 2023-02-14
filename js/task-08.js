const form = document.querySelector('.login-form');
const loginLabel = form.firstElementChild;
const passwordLabel = form.lastElementChild.previousElementSibling;

const alertLogin = document.createElement('p');
alertLogin.textContent = 'Поле логін повинно бути заповненим!';
alertLogin.style.color = 'red';
alertLogin.style.margin = '0';
alertLogin.style.fontSize = '10px';

const alertPassword = document.createElement('p');
alertPassword.textContent = 'Поле пароль повинно бути заповненим!';
alertPassword.style.color = 'red';
alertPassword.style.margin = '0';
alertPassword.style.fontSize = '10px';

form.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  function loginTextAlert() {
    if (email.value === '') {
      loginLabel.after(alertLogin);
      loginLabel.style.margin = '0';
    } else {
      alertLogin.remove();
      loginLabel.style.marginBottom = '16px';
    }
  }

  function passwordTextAlert() {
    if (password.value === '') {
      passwordLabel.after(alertPassword);
      passwordLabel.style.margin = '0';
    } else {
      alertPassword.remove();
      passwordLabel.style.marginBottom = '16px';
    }
  }

  if (email.value === '' || password.value === '') {
    loginTextAlert();
    passwordTextAlert();
  } else {
    const user = {
      email: email.value,
      password: password.value,
    };
    console.log(user);
    event.currentTarget.reset();

    alertPassword.remove();
    passwordLabel.style.marginBottom = '16px';
    alertLogin.remove();
    loginLabel.style.marginBottom = '16px';
  }
});
