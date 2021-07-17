const apiKey = "4aef5771f22a1dd81b17be641119d984";
const baseURL = "https://api.themoviedb.org/3/";

let url = window.location.href;
let movieId = url.substring(url.indexOf('?') + 1);

let movieTitle = document.getElementsByClassName('movie-title')[0];
let moviePoster = document.getElementsByClassName('movie-poster')[0];
let movieDescription = document.getElementsByClassName('movie-description')[0];
let movieReleaseDate = document.getElementsByClassName('movie-release-date')[0];
let movieRuntime = document.getElementsByClassName('movie-runtime')[0];
let movieGenres = document.getElementsByClassName('movie-genres')[0];

async function fetchData(fullUrl) {
    let response = fetch(fullUrl)
        .then(response => response.json()).then(data => {
            printMovieInfo(data);
        });
}

function printMovieInfo(data) {
    movieTitle.innerHTML = data.title;
    moviePoster.setAttribute('src', 'https://image.tmdb.org/t/p/w400' + data.poster_path);
    movieDescription.innerHTML = data.overview;
    movieReleaseDate.innerHTML = "Release date: " + data.release_date;
    movieRuntime.innerHTML = "Runtime: " + data.runtime + " minutes";

    data.genres.forEach(element => {
        let genre = document.createElement('li');
        genre.innerHTML = element.name;
        movieGenres.appendChild(genre);
    });

}
https: //api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
    fetchData(baseURL + "/movie/" + movieId + "?api_key=" + apiKey)