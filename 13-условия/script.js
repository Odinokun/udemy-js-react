"use strict"

const num = 10;

(num < 50) ? console.log('small') : console.log('large');



const switchNum = 51;

//в конструкции switch
//ВСЕГДА
//проверка на строгое стравнение
switch (switchNum) {
  case 49:
    console.log('val = 49');
    break;
  case 51:
    console.log('val = 51');
    break;
  case 50:
    console.log('val = 50');
    break;
  default:
    console.log('Error');
    break;
}
