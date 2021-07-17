/* API key and the base URL for MovieDB */

const apiKey = "4aef5771f22a1dd81b17be641119d984";
const baseURL = "https://api.themoviedb.org/3/";


/* Fetch data from API */

let actionMovieContainer = document.querySelector('.action-movie-container');
let comedyMovieContainer = document.querySelector('.comedy-movie-container');
let romanceMovieContainer = document.querySelector('.romance-movie-container');


async function fetchData(fullUrl, container) {
    let response = fetch(fullUrl)
        .then(response => response.json()).then(data => {
            printMovies(data.results, container);
        });
}

/* Print movies with foreach loop getting information from API */

function printMovies(data, container) {
    data.forEach(movie => {

        let movieContainer = document.createElement('div');
        movieContainer.className = "movie";

        let movieTitle = document.createElement('h3');
        movieTitle.className = "movie-title";

        let movieLink = document.createElement('a');
        movieLink.setAttribute('href', 'movieview.html?' + movie.id)

        movieLink.innerHTML = movie.title;
        movieTitle.append(movieLink);

        let movieImg = document.createElement('img');
        movieImg.className = "movie-img";
        movieImg.srcset = "https://image.tmdb.org/t/p/w200" + movie.poster_path;

        let imgLink = document.createElement('a');
        imgLink.setAttribute('href', 'movieview.html?' + movie.id)
        imgLink.appendChild(movieImg);

        movieContainer.appendChild(movieTitle);
        movieContainer.appendChild(imgLink);

        container.appendChild(movieContainer);
    });
}

/*
Genre codes
Action:28
Comedy:35
Romance:10749
*/

fetchData(baseURL + "discover/movie?api_key=" + apiKey + "&with_genres=28", actionMovieContainer);

fetchData(baseURL + "discover/movie?api_key=" + apiKey + "&with_genres=35", comedyMovieContainer);

fetchData(baseURL + "discover/movie?api_key=" + apiKey + "&with_genres=10749", romanceMovieContainer);

/* Movie Controller */

let scrollLeftControl = document.querySelectorAll('.scroll-left-control');
let scrollRightControl = document.querySelectorAll('.scroll-right-control');

scrollLeftControl.forEach(element => {
    element.addEventListener('click', scrollLeft);
});

scrollRightControl.forEach(element => {
    element.addEventListener('click', scrollRight);
});

function scrollLeft(event) {
    let src = event;
    let movieContainer = src.path[1].children[2];
    console.log(movieContainer);

    let currentStyle = getComputedStyle(movieContainer);
    let currentPos = parseInt(currentStyle.getPropertyValue('left'));

    if (currentPos < 0) {
        movieContainer.style.left = currentPos + 400 + "px";
    }
}

function scrollRight(event) {
    let src = event;
    let movieContainer = src.path[1].children[2];
    console.log(movieContainer);

    let currentStyle = getComputedStyle(movieContainer);
    let currentPos = parseInt(currentStyle.getPropertyValue('left'));

    if (currentPos > -2500) {
        movieContainer.style.left = currentPos - 400 + "px";
    }
}

/* Navbar change */

let nav = document.getElementById('navbar');

window.onscroll = function () {
    if (window.pageYOffset > 100) {
        nav.classList.add("navbar-scrolling");
    } else {
        nav.classList.remove("navbar-scrolling");
    }
}

/* Burger Menu */

// let burgerMenu = document.querySelector('.gg-menu-boxed');
// burgerMenu.addEventListener('click', toggleMenu);


