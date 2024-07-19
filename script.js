const numberOfFilms = prompt("Сколько фильмов Вы уже посмотрели?", ""),
      personalMovieDB = {
          count: numberOfFilms,
          movies: {},
          actors: {},
          genres: [],
          privat: false
      };

let film = prompt('Один из последних просмотренных фильмов?', ''),
    evaluation = prompt('На сколько оцените его?', '');

personalMovieDB.movies = {
    [film]: evaluation
};

console.log(personalMovieDB);