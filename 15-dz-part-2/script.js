"use strict"

const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?');

if (numberOfFilms < 10) {
  alert('Просмотрено довольно мало фильмов')
} else if (numberOfFilms <= 30) {
  alert('Вы классный зритель')
} else if (numberOfFilms > 30) {
  alert('Вы киноман')
} else ('Произошла ошибка')

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for (let i = 0; i < 2; i++) {
  let film = prompt('Один из последних просмотренных фильмов?', ''),
      rating = prompt('На сколько вы оцените его?', '');

  if (film !== '' && rating !== '' && film != null && rating != null && film.length < 50) {
    personalMovieDB.movies[film] = rating;
  } else {
    i--;
  }
}

console.log(personalMovieDB);
