const nameEl = document.querySelector('#name');
const surnameEl = document.querySelector('#surname');
const emailEl = document.querySelector('#email');
const ageEl = document.querySelector('#age');
const colorEl = document.querySelector('#favcolor');
const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
//const checkedOne = Array.prototype.slice.call(checkBoxes).some(x => x.checked);
const checkboxLength = checkBoxes.length;
const firstCheckbox = checkboxLength > 0 ? checkBoxes[0] : null;

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

const checkAge = () => {

    if (ageEl.value>120) {
        showError(ageEl, 'Age must be less than 120');
        return false;
    } else {
        showSuccess(ageEl);
    }
return true;
}

const checkboxValid = () => {

    document.getElementById('submit').addEventListener('click', getData); //add a click event to the save button

   //let error = true;

    function getData() { // this function will get called when the save button is clicked
        checkBoxes.forEach(item => { // loop all the checkbox item
            if (item.checked) {  //if the check box is checked
                showSuccess(checkBoxes);
            }
            else {
                showError(checkBoxes, 'Minimum one color you have to pick..');
                return false;
            }
        });
 
    }

   
    /*const cbox = document.forms["signup"]["check"];
    if (isRequired(
      cbox[0].checked == false &&
      cbox[1].checked == false &&
      cbox[2].checked == false)
    ) {
        alert("Please Select Gender");
    } else {
        alert("Successfully Submited");
      valid = true;
    }*/
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
    isAgeValid = checkAge(),
    isCheckboxValid = checkboxValid();

    let isFormValid = isEmailValid && isAgeValid && isCheckboxValid;

    if (isFormValid) {

    }
});

const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'email':
            checkEmail();
            break;
        case 'age':
            checkAge();
            break;
        case 'check':
            checkboxValid();
            break;
    }
}));

