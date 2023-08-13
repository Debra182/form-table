var form = document.getElementById('signup');

form.addEventListener('submit', function(e){
	e.preventDefault();
	var checkValid = validatInputs();
	if(checkValid){
		// console.log('No Error');
		form.submit();
	}else{
		// console.log('Error');
	}
});
function validatInputs(){
	var inputs = form.querySelectorAll('.form-control');
	var valid = [];
	var checkboxCheck = false;
	inputs.forEach(function(i,j){
		if(i.getAttribute('type')){
			var checkAttr = i.getAttribute('type');
		}else{
			var checkAttr = i.tagName;
		}
		
		switch(checkAttr){
			case 'checkbox':
				if(!checkboxCheck){
					if(!i.checked){
						// i.parentNode.classList.add("error");
						checkboxCheck = false;
					}else{
						// i.parentNode.classList.remove("error");
						checkboxCheck = true;
					}
				}
				
			break;
			case 'text':
			    var _thisVal = i.value;
				if(i.getAttribute('data-name') == 'name'){
					if(!isNaN(i.value)){
						_thisVal = '';
					}
				}
				if(_thisVal==''){
					i.parentNode.classList.add("error");
					valid.push(i.getAttribute('name'));
				}else{
					i.parentNode.classList.remove("error");
				}
			break;
			case 'email':
				var regEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
				if(i.value=='' || !regEmail.test(i.value)){
					i.parentNode.classList.add("error");
					valid.push(i.getAttribute('name'));
				}else{
					i.parentNode.classList.remove("error");
				}
			break;
			case 'select':
				if(i[select.selectedIndex].value==''){
					i.parentNode.classList.add("error");
					valid.push(i.getAttribute('name'));
				}else{
					i.parentNode.classList.remove("error");
				}
			break;
			default:
				if(i.value==''){
					i.parentNode.classList.add("error");
					valid.push(i.getAttribute('name'));
				}else{
					i.parentNode.classList.remove("error");
				}
			break;
		}
	});
	if(!checkboxCheck){
		// console.log(document.getElementsByClassName('checkbox')[0].classList);
		document.getElementsByClassName('checkbox')[0].classList.add("error");
		valid.push ('checkbox');
	}else{
		document.getElementsByClassName('checkbox')[0].classList.remove("error");
	}

	if(valid.length>0){
		// console.log(valid.length);
		return false;
	}else{
		return true;
	}
	
}
/*
$('#save').on('click', function() {
	var first_name=$('#name').val();
	var last_name=$('surname').val();
	var age=$('#age').val();
	var email=$('#email').val();
	var contact = $('.form-group input').val();
	var select = $('#select').val();
	var count = $('#myTable tr').length;
	if(first_name!="" && last_name !="" && email!=""){
	$('#myTable tbody').append('<tr class="child"><td>'+count+'</td><td>'+first_name+'</td><td>'+last_name+'</td><td>'+email+'</td><td><a href="javascript:void(0);" class="remCF1 btn btn-small btn-danger">Remove</a></td></tr>');
	}
	});
	$(document).on('click','.remCF1',function(){
	$(this).parent().parent().remove();
	$('#myTable tbody tr').each(function(i){            
	 $($(this).find('td')[0]).html(i+1);          
	});
	});


function addData(el) {
	var table = document.getElementById('list');
	var tr = table.insertRow();
	el.form.querySelectorAll('input').forEach(function(el) {
	  var cell = tr.appendChild(document.createElement('td'));
	  cell.textContent = el.value;
	});
  }
	*/

	var tableData = {
		name: "",
		surname: "",
		age: 0,
		email: "",
	
		select: ""
	  };
	  var i = 1;
	  /* This variable is incremented by 1 every time the user clicks the "Submit" button. Display the "No" column, and the position of rows when added to the table 
	   */
	  
	  // Show a table after submit
	  function score_table() {
		document.getElementById("list").style.display = "block";
	  
		// Gathering the data after submit
		tableData.name = document.getElementById("name").value;
		tableData.surname = document.getElementById("surname").value;
		tableData.age = document.getElementById("age").value;
		tableData.email = document.getElementById("email").value;
		
		tableData.select = document.getElementById("select").value;
	
		document.getElementById("name").value = "";
		document.getElementById("surname").value = "";
		document.getElementById("age").value = "";
		document.getElementById("email").value = "";

		document.getElementById("select").value = "";
	  
		// Insert row
		var table = document.getElementById("list");
		var row = table.insertRow(i);
		var number = row.insertCell(0);
		var name = row.insertCell(1);
		var surname = row.insertCell(2);
		var age = row.insertCell(3);
		var email = row.insertCell(4);

		var select = row.insertCell(5);
	  
		number.innerHTML = i;
		name.innerHTML = tableData.name;
		surname.innerHTML = tableData.surname;
		age.innerHTML = tableData.age;
		email.innerHTML = tableData.email;
		
		select.innerHTML = tableData.select;
		i++;
	  }
	