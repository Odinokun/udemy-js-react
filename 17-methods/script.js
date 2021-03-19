"use strict"

const str = 'test';

//ТЕКСТОВЫЕ СВОЙСТВА
console.log(str.length); //свойство
console.log(str[0]); //выведет первый символ

//ТЕКСТОВЫЕ МЕТОДЫ
console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit = 'Some fruit';

//вернет индекс начала фразы либо -1
//можно делать проверки на наличие слова в тексте
console.log(fruit.indexOf('fru'));

const logg = "Hello world";

//вырезаем кусок текста,
// указываем первый и последний символ которые вернутся
// последний символ не возвращается
// в данном примере вернется worl
console.log(logg.slice(6, 10));
// вырежет кусок текста с 6го символа и до конца
console.log(logg.slice(6));
// первое значение - с какого символа
// второе значение - сколько символов вырезать
console.log(logg.substr(6, 5));

//ЧИСЕЛЬНЫЕ СВОЙСТВА
const num = 12.2

//округляет до ближайшего целого
console.log(Math.round(num));//12


//ЧИСЕЛЬНЫЕ МЕТОДЫ
