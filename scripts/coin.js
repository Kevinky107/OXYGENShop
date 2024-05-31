// COIN CHANGE SCRIPT

// Elements with money

let basic = document.getElementById("basic");
let professional = document.getElementById("professional");
let premium = document.getElementById("premium");

const selectors = document.getElementById("coins").children;

const basicM = 0;
const professionalM = 25;
const premiumM = 60;

const jsonUrl = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json';

async function changeCoin(money){

  try{
    const response = await fetch(jsonUrl);
    const coins = await response.json();
    let change;

    switch(money) {
      case 'EUR':
        change = coins.usd.eur;
        basic.childNodes.item(0).data = `${parseInt(basicM*change)}€`;
        professional.childNodes.item(0).data = `${parseInt(professionalM*change)}€`;
        premium.childNodes.item(0).data = `${parseInt(premiumM*change)}€`;
        break;
      case 'USD':
        change = coins.usd.usd;
        basic.childNodes.item(0).data = `$${parseInt(basicM*change)}`;
        professional.childNodes.item(0).data = `$${parseInt(professionalM*change)}`;
        premium.childNodes.item(0).data = `$${parseInt(premiumM*change)}`;
        break;
      case 'GBP':
        change = coins.usd.gbp;
        basic.childNodes.item(0).data = `£${parseInt(basicM*change)}`;
        professional.childNodes.item(0).data = `£${parseInt(professionalM*change)}`;
        premium.childNodes.item(0).data = `£${parseInt(premiumM*change)}`;
        break;
    }
  } catch (e) {
    console.log(e);
  }

}

for(let i = 0; i < selectors.length; i++){
  selectors.item(i).addEventListener("click", function(){changeCoin(selectors.item(i).textContent)});
}

