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

/*const checkEmail = () => {
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

    var okay=false;
    for(var i=0,l=checkboxLength;i<l;i++)
    {
        if(checkBoxes[i].checked)
        {
            okay=true;
            break;
        }
    }
    if(okay)alert("Thank you for checking a checkbox");
    else alert("Please check a checkbox");
   
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
*/


let table=document.getElementById('data');
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  submit();
})


const submit=()=>{

    let name = document.querySelector('#name').value;
    let surname = document.querySelector('#surname').value;
    let email = document.querySelector('#email').value;
    let age = document.querySelector('#age').value;
    let color = document.querySelector('#favcolor').value;
    let chckbx = document.querySelector('input[type="checkbox"]').value;

    let newArray = [name,surname,email,age,color,chckbx];

    var table = document.getElementById('data');
    var columnLength = table.getElementsByTagName('tr')[0].children.length;
    

    let rowCnt = table.rows.length;    // get the number of rows.
    let tr = table.insertRow(rowCnt); // table row.
    tr = table.insertRow(rowCnt);
    
    for (let c = 0; c < newArray.length; c++) {
        let td = document.createElement('td');
        td = tr.insertCell(c);
        
    if (c == 0) {   // if its the first column of the table.
        // add a button control.
        const button = document.createElement('input');

        // set the attributes.
        button.setAttribute('type', 'button');
        button.setAttribute('value', 'Remove');

        // add button's "onclick" event.
        button.setAttribute('onclick', 'removeRow(this)');
        

        td.appendChild(button);

    }
    else {
        // the 2nd, 3rd and 4th column, will have textbox.
        //const ele = document.createElement('input');
        //ele.setAttribute('type', 'text');
        //ele.setAttribute('value', '');
        //td.appendChild(ele);
    }
}

    var units = document.getElementsByClassName('unit-table');          
    //var tr = document.createElement('tr');
    tr.className = 'unit-table';
    for (var i = 0; i < columnLength; i++) {              
        var td = document.createElement('td');
        var text = document.createElement('input');
        text.type = 'text';
        text.id = 'text' + i;
        if (i == 0) {
            text.value = name;
        } else if (i == 1) {
            text.value = surname;
        } else if (i == 2) {
            text.value = email;
        } else if (i == 3) {
            text.value = age;
        } else if (i == 4) {
            text.value = color;
        } else if (i == 5) {
            text.value = chckbx;
        }
        td.appendChild(text);
        tr.appendChild(td);
    }
    table.appendChild(tr);


  /*let newArray = [name,surname,email,age,color,chckbx];
  newArray.forEach((item)=>{
    let table = document.querySelector('#data');
    let tr = document.createElement('tr');
    var text = document.createTextNode(item);
    //table.appendChild(text);
 
for (let i = 1; i <= 6; i++) {
	tr.appendChild(text);
}

table.appendChild(tr);

  })

  form.reset();


  var newArray = [name,surname,email,age,color,chckbx];

  var tableRef = document.getElementById('data').getElementsByTagName('tbody')[0];

  for (let index = 0; index < newArray.length; index++){
      //insert Row
      tableRef.insertRow().innerHTML = 
      "<th>" + (index + 1).toString()+ "</th>" + 
      "<td>" +newArray[index]+ "</td>";
  }*/
}


let removeRow = (oButton) => {
    table.deleteRow(oButton.parentNode.parentNode.rowIndex); // buttton -> td -> tr
    var result = confirm("Are you sure you want to delete?");
if (result) {
    //Logic to delete the item
    } else {
        return false;
    }
}


function toArrayOfObjects(table) {
    const columns = Array.from(table.querySelectorAll('th')).map(
      heading => heading.textContent,
    );
  
    const rows = table.querySelectorAll('table > tr');
  
    return Array.from(rows).map(row => {
      const dataCells = Array.from(row.querySelectorAll('td'));
  
      return columns.reduce((obj, column, index) => {
        obj[column] = dataCells[index].textContent;
        return obj;
      }, {});
    });
  }
  
  
  function downloadJSONTable(jsonStr, fileName) {
    const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(
      jsonStr,
    )}`;
  
    const anchorElement = document.createElement('a');
  
    anchorElement.href = dataStr;
    anchorElement.download = `${fileName}.json`;
  
    document.body.appendChild(anchorElement);
    anchorElement.click();
  
    document.body.removeChild(anchorElement);
  }
  
  const downloadButton = document.getElementById('button');
  
  downloadButton.addEventListener('click', () => {
    const jsonStr = JSON.stringify(toArrayOfObjects(table));
  
    downloadJSONTable(jsonStr, 'myFile');
  });
  