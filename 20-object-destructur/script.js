"use strict"

const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  },
  makeTest: function () {
    console.log('Make test');
  }
};

options.makeTest();

//удаляем свойство объекта
delete options.name;

//узнаем длину объекта
let counter = 0;

for (let key in options) {
  counter++;
  if (typeof(options[key]) === 'object') {
    for (let i in options[key]) {
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
    }
  } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
  }
}

//вывод длины объекта через цикл
console.log(`длина объекта = ${counter}`);
//вывод длины объекта через метод
console.log(`длина объекта = ${Object.keys(options).length}`);
