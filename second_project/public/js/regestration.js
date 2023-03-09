const innerText = (id, value) => (document.getElementById(id).innerText = value);
const errors = document.getElementsByClassName('form__error');

const items = {
  firstName: {
    id: 'js-form-first-name-error',
    errors: {
      noName: 'Enter name',
      getMinLength: function () {
        return `Min length - ${items.firstName.minLength} symbol`;
      },
    },
    minLength: 4,
  },
  email: {
    id: 'js-form-email-error',
  },
  userName: {
    id: 'js-form-username-error',
  },
};
const regestration = (e) => {
  // Відміна стандратної поведінки
  e.preventDefault();
  // Створення форми
  const form = new FormData(e.target);
  // * Обробка форми
  // First name
  const firstName = form.get('firstname');

  const lastName = form.get('lastname');

  const password = form.get('password');

  const email = form.get('email');

  const username = form.get('username');

  const disabledSeasonAnimation = !!form.get('disabledSeasonAnimation');

  // * Перевірка First name
  if (!firstName) {
    innerText(items.firstName.id, items.firstName.errors.noName);
    return;
  } else if (firstName.length < items.firstName.minLength) {
    innerText(items.firstName.id, items.firstName.errors.getMinLength());
  } else {
    innerText(items.firstName.id, null);
  }
  const reqestData = {
    role: 1,
    language: 'en',
    firstName,
    lastName,
    email,
    username,
    password,
    disabledSeasonAnimation,
  };

  console.log('reqestData: ', reqestData);
  const URL = 'https://beetroot-solodkui.herokuapp.com/beetroot-solodkui/users/registration';
  console.log('reqestData: ', reqestData);

  fetch(URL, {
    method: 'post',
    body: JSON.stringify(reqestData),
    headers: {
      'content-type': 'application/json',
      // 'Access-Control-Allow-Origin': '*',
    },
    // mode: 'no-cors',
  })
    .then((res) => res.json())
    .then((response) => {
      console.log('response: ', response.success);
      if (response.success) {
        for (const message of errors) {
          message.innerText = '';
        }
        alert(response.message.en);
      } else {
        if (response.message.en === 'A user is already registered under this email') {
          innerText(items.email.id, response.message.en);
        } else {
          innerText(items.email.id, '');
        }
        if (response.message.en === 'This nickname is already taken') {
          innerText(items.userName.id, response.message.en);
        } else {
          innerText(items.userName.id, '');
        }
      }
    });
};
export default regestration;
