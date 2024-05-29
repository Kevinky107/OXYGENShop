// COIN CHANGE SCRIPT

// Elements with money

let basic = document.getElementById("basic");
let professional = document.getElementById("professional");
let premium = document.getElementById("premium");

const basicM = 0;
const professionalM = 25;
const premiumM = 60;

const jsonUrl = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json';

async function changeCoin(money){

  const response = await fetch(jsonUrl);
  const coins = await response.json();
  let change;

  switch(money) {
    case 'eur':
      change = coins.usd.eur;
      basic.childNodes.item(0).data = `${parseInt(basicM*change)}€`;
      professional.childNodes.item(0).data = `${parseInt(professionalM*change)}€`;
      premium.childNodes.item(0).data = `${parseInt(premiumM*change)}€`;
      break;
    case 'usd':
      change = coins.usd.usd;
      basic.childNodes.item(0).data = `$${parseInt(basicM*change)}`;
      professional.childNodes.item(0).data = `$${parseInt(professionalM*change)}`;
      premium.childNodes.item(0).data = `$${parseInt(premiumM*change)}`;
      break;
    case 'gbp':
      change = coins.usd.gbp;
      basic.childNodes.item(0).data = `£${parseInt(basicM*change)}`;
      professional.childNodes.item(0).data = `£${parseInt(professionalM*change)}`;
      premium.childNodes.item(0).data = `£${parseInt(premiumM*change)}`;
      break;
  }

}