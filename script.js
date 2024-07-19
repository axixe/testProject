let numberOfFilms;
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 1; i <= personalMovieDB.count; i++) {
    const film = prompt('Один из последних просмотренных фильмов?', ''),
          evaluation = prompt('На сколько оцените его?', '');

    console.log(film);
    console.log(evaluation);

    if (film == null || evaluation == null) {
        alert('Поля должны быть заполнены');
        i--;
        continue;
    }

    if (film.length == 0 || evaluation.length == 0 || film.length >= 50) {
        alert('Какое-то из полей пустое или название фильма имеет больше 50-ти символов.');
        i--;
        continue;
    }

    personalMovieDB.movies[film] = evaluation;
}

console.log(personalMovieDB);



function start() {
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    }
}