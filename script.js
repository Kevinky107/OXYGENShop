// NAVIGATION SCRIPT

// Navigation elements
var nav = document.getElementById("nav");
var navIcon = document.getElementById("burguer");
var scroller = document.getElementById("scroller");
var topBtn = document.getElementById("floatBtn");

// Call to the navigation scroll indicator
window.onscroll = function() {updateScroll()};


// Navigation functions

function changeNav() {
    
  if (nav.style.display === "block") {
    nav.style.display = "none";
    navIcon.src = "resources/Menu.png";
  } else {
    nav.style.display = "block";
    navIcon.src = "resources/cross.png";
  }
}

function updateScroll() {

  var totalHeight = document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = totalHeight / height;

  scroller.style.width = scrolled*100 + "%";
  showButton(scrolled)

}

function showButton(scrolled) {

  if((scrolled*100) > 25)
    topBtn.style.display = "block";
  else
    topBtn.style.display = "none";

}

function goTop() {

  setTimeout(() => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }, 200);
  
}


// FORM VALIDATION SCRIPT

// Form elements

var form = document.getElementById("contactForm");
var nameForm = document.getElementById("name");
var emailForm = document.getElementById("email");
var consentForm = document.getElementById("consent");

const url = 'https://jsonplaceholder.typicode.com/posts';
const color = nameForm.style.borderColor;

function validateForm(e) {
  
  e.preventDefault();
  var ok = true;
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
    uploadForm();

}

function uploadForm() {

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
  .then((response) => response.json())
  .then((json) => console.log(json));

}


// COIN CHANGE SCRIPT

// Elements with money

var basic = document.getElementById("basic");
var professional = document.getElementById("professional");
var premium = document.getElementById("premium");

const basicM = 0;
const professionalM = 25;
const premiumM = 60;

const jsonUrl = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json';

async function changeCoin(money){

  const response = await fetch(jsonUrl);
  const coins = await response.json();

  switch(money) {
    case 'eur':
      var change = coins.usd.eur;
      basic.childNodes.item(0).data = `${parseInt(basicM*change)}€`;
      professional.childNodes.item(0).data = `${parseInt(professionalM*change)}€`;
      premium.childNodes.item(0).data = `${parseInt(premiumM*change)}€`;
      break;
    case 'usd':
      var change = coins.usd.usd;
      basic.childNodes.item(0).data = `$${parseInt(basicM*change)}`;
      professional.childNodes.item(0).data = `$${parseInt(professionalM*change)}`;
      premium.childNodes.item(0).data = `$${parseInt(premiumM*change)}`;
      break;
    case 'gbp':
      var change = coins.usd.gbp;
      basic.childNodes.item(0).data = `£${parseInt(basicM*change)}`;
      professional.childNodes.item(0).data = `£${parseInt(professionalM*change)}`;
      premium.childNodes.item(0).data = `£${parseInt(premiumM*change)}`;
      break;
  }

}