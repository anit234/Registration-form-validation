// const form = document.getElementById('form');
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const passwords = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

//for username error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// for username success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.class = 'form-control success';
}

// function to check if email is valid with regular expression
function checkEmail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(input.value.trim())) {
    showError(input, `${getFieldName(input)} is not valid`);
  } else {
    showSuccess(input);
  }
}

// check the validation of input field
function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//check password length
function checkPasswordLength(input1, input2) {
  console.log(input1.value);
  console.log(input2.value);
  if (input1.value !== input2.value) {
    showError(input2, 'Password did not matched');
  }
}

//check length of input field
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} cannot be less than ${min} character`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} cannot be more than ${max} character`
    );
  } else {
    showSuccess(input);
  }
}

// To make error message's first letter uppercase
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listners
form.addEventListener('submit', function (e) {
  e.preventDefault();
  checkRequired([username, email, password, confirmPassword]);
  checkLength(username, 3, 10);
  checkLength(password, 8, 25);
  checkEmail(email);
  checkPasswordLength(password, confirmPassword);
});
