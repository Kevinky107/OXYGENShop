// FORM VALIDATION SCRIPT

// Form elements

const url = 'https://jsonplaceholder.typicode.com/posts';
const color = "rgb(202, 202, 202)" //default color

function validateForm(e, form) {
  e.preventDefault();

  let myForm = document.getElementById(form);
  let nameForm = myForm.elements[0];
  let emailForm = myForm.elements[1];
  let consentForm = myForm.elements[2];

  let ok = true;
  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //name validation
  if(nameForm.value.length < 2 || nameForm.value.length > 100)
  {
    ok = false;
    nameForm.style.borderColor = "red";
  }
  else
    nameForm.style.borderColor = color;

  //checkbox validation
  if(!consentForm.checked)
  {
    ok = false;
    consentForm.style.borderColor = "red";
  }
  else
    consentForm.style.borderColor = color;

  //email validation
  if(!pattern.test(emailForm.value))
  {
    ok = false
    emailForm.style.borderColor = "red";
  }
  else 
    emailForm.style.borderColor = color;

  if(ok)
    uploadForm(nameForm, emailForm);

}

function uploadForm(nameForm, emailForm) {

  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      name: nameForm.value,
      email: emailForm.value,
      consentAgree: true,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .catch(error => console.log(error))
  .then((response) => response.json())
  .then(window.alert("INFORMATION UPLOADED CORRECTLY 👌"));
}