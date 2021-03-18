"use strict"

//просто уведомление
alert('Hello world');

//варианты да/нет
// присвоит переменной true/false
const result = confirm("Are you here?")
console.log(result);

//вариант с полем для ответа
//вторые пустые кавычки для дефолтного ответа
//возвращает СТРОКУ
//при выборе "отмена" вернется null
const answer = prompt("Are you 18?", "");
console.log(answer);
console.log(typeof(answer));
