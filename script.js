const nameEl = document.querySelector('#name');
const surnameEl = document.querySelector('#surname');
const emailEl = document.querySelector('#email');
const ageEl = document.querySelector('#age');
const colorEl = document.querySelector('#favcolor');
const checkBoxes = document.querySelectorAll('input[type="checkbox"]');

const form = document.querySelector('#signup');

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const checkboxValid = () => {
    let valid = false;
    var cbox = document.forms["signup"]["check"];
    if (
      cbox[0].checked == false &&
      cbox[1].checked == false &&
      cbox[2].checked == false
    ) {
      alert("Please Select Gender");
    } else {
      alert("Successfully Submited");
      valid = true;
    }
}

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}

form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    let isEmailValid = checkEmail(),
    isCheckboxValid = checkboxValid();

    let isFormValid = isEmailValid && isCheckboxValid;
});

