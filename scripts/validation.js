// FORM VALIDATION SCRIPT

// Form elements
const forms = document.getElementsByTagName("form");

const url = 'https://jsonplaceholder.typicode.com/posts';
const color = "rgb(202, 202, 202)" //default color

function validateForm(event, form) {

  event.preventDefault();

  let nameForm = form.elements[0];
  let emailForm = form.elements[1];
  let consentForm = form.elements[2];

  let ok = true;
  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //name validation
  if(nameForm.value.length < 2 || nameForm.value.length > 100)
  {
    ok = false;
    nameForm.className = "contact__form__input--wrong";
  }
  else
    nameForm.className = "contact__form__input";

  //checkbox validation
  if(!consentForm.checked)
  {
    ok = false;
    consentForm.className = "contact__form__div__check--wrong";
  }
  else
    consentForm.className = "contact__form__div__check";

  //email validation
  if(!pattern.test(emailForm.value))
  {
    ok = false
    emailForm.className = "contact__form__input--wrong";
  }
  else 
    emailForm.className = "contact__form__input";

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
  .then((response) => response.json()).catch(error => console.log(error))
  .then(window.alert("INFORMATION UPLOADED CORRECTLY 👌"))
}

for(let i = 0; i < forms.length; i++) {
  forms.item(i).addEventListener("submit", function(event){validateForm(event, forms.item(i))});
}