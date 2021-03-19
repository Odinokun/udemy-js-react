"use strict"

//function declaration
//видна до запуска кода как var
function showFirstMessage(text) {
  console.log(text);
}

showFirstMessage('Hello world');

//function expression
//ее можно вызвать только после ее объявления
const logger = function() {
  console.log('this is expression');
};

logger();

const calc = (a, b) => a + b;

console.log(calc(5, 4));
