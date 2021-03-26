"use strict"

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?');

  //isNaN возвращает true если в переменной число
  while (numberOfFilms === '' || numberOfFilms == null || isNaN(numberOfFilms) || numberOfFilms === 0) {
    numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?');
  }
}
start();

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let film = prompt('Один из просмотренных фильмов?', ''),
        rating = prompt('На сколько вы оцените его?', '');

    if (film !== '' && rating !== '' && film != null && rating != null && film.length < 50) {
      personalMovieDB.movies[film] = rating;
    } else {
      i--;
    }
  }
}
rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов')
  } else if (personalMovieDB.count <= 30) {
    alert('Вы классный зритель')
  } else if (personalMovieDB.count > 30) {
    alert('Вы киноман')
  } else {
    alert('Произошла ошибка')
  }
}
detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) { //проверяем на правдивость
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
    personalMovieDB.genres.push(genre);
  }
}
writeYourGenres();
