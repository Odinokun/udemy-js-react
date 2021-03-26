"use strict"

function learnJS(lang, callback) {
  console.log(`Я учу ${lang}`);
  callback();
}

learnJS('React', function () {
  console.log('Вызвана коллбек функция!');
})

function done() {
  console.log('Это не анонимная функция');
}

learnJS('Svelte', done);
