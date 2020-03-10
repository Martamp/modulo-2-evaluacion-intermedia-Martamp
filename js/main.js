'use strict';

const btn = document.querySelector('.js-button');
let userNumber = document.querySelector('.js-number');

function getRandomNumber() {
  let myRandomNumber = Math.ceil(Math.random() * 100);
  console.log(myRandomNumber);
  return myRandomNumber;
}

function getInputNumber() {
  let userNumberData = userNumber.value;
  console.log('este es', userNumberData);
}

function getFunctions() {
  getRandomNumber();
  getInputNumber();
}

btn.addEventListener('click', getFunctions);
