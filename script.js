const numberOfFilms = +prompt("сколько фильмов вы уже поссмотрели?", "");

const PersonalMovieDb = {
	conut: numberOfFilms,
	movies: {},
	actors: {},
	geners: [],
	privat: false
};

const a = prompt("один из просмотренных последних фильмов?", ""),
	b = prompt("на сколько оцените его?", ""),
	c = prompt("один из просмотренных последних фильмов?", ""),
	d = prompt("на сколько оцените его?", "");

PersonalMovieDb.movies[a] = b;
PersonalMovieDb.movies[c] = d;

console.log(PersonalMovieDb);