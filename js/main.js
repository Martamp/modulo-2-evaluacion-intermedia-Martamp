'use strict';

const btn = document.querySelector('.js-button');

function getRandomNumber() {
  let myNumber = Math.ceil(Math.random() * 100);
  console.log(myNumber);
  return myNumber;
}

btn.addEventListener('click', getRandomNumber);
