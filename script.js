let numberOfFilms;

// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

writeYourGenres(personalMovieDB);
// rememberMyFilms();
// detectPersonalLevel();
showMyDB(personalMovieDB);

// console.log(personalMovieDB);

function writeYourGenres(object) {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}:`, '');

        object.genres.push(genre);
    }
}

function showMyDB(object) {
    (!object.private) ? console.log(object) : console.log('Нет доступа');
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

function rememberMyFilms() {
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
}

function start() {
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    }
}