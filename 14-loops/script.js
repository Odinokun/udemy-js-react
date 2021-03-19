"use strict"

let numWhile = 50;

while (numWhile < 55) {
  console.log(numWhile);
  numWhile++;
}

let numDoWhile = 50;

do {
  console.log(numDoWhile);
  numDoWhile++;
} while (numDoWhile < 55)

for (let i = 0; i < 10; i++) {
  console.log(i);

  if (i === 6) {
    break; //прерываем цикл
  }

  if (i === 3) {
    continue; //пропустит только этот шаг
  }
}
