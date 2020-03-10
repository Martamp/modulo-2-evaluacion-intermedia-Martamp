'use strict';

const btn = document.querySelector('.js-button');
let userNumber = document.querySelector('.js-number');
const textChange = document.querySelector('.js-text');

function getRandomNumber() {
  //genero el numero random
  let myRandomNumber = Math.ceil(Math.random() * 100);
  console.log('el numero random', myRandomNumber);
  //Coge el numero que hay en el input
  let userNumberData = userNumber.value;
  console.log('ha elegido el ', userNumberData);

  // condiciones paracambiar el h3
  if (userNumberData === myRandomNumber) {
    textChange.innerHTML = 'Has ganado campeona!!!';
  } else if (userNumberData < myRandomNumber) {
    textChange.innerHTML = 'Demasiado bajo';
  } else if (userNumberData > myRandomNumber) {
    textChange.innerHTML = 'Demasiado alto';
  }
}

btn.addEventListener('click', getRandomNumber);
