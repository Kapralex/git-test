import Swiper from 'swiper';

const global = {
  currentPage: window.location.pathname,
  api: {
    apiKey: '9a665f1cf0b45e951f9cf773f746280e',
    apiUrl: 'https://api.themoviedb.org/3/',
  },
};

// display slideer movies
async function displaySlider() {
  const { results } = await fetchAPIData('movie/now_playing');

  results.forEach(movie => {
    const div = document.createElement('div');
    div.classList.add('swiper-slide');

    div.innerHTML = `
      <a class="slide-link" href="#">
        <img src="https://www.themoviedb.org/t/p/w300${movie.poster_path}" alt="${movie.title}"/>
        <h3 class="slide-rating">
          <i class="fa-regular fa-star"></i>
            ${movie.vote_average}
          </h3>
      </a>
    `;

    document.querySelector('.swiper-wrapper').appendChild(div);
  })

  initSwiper();
}


/* swiper */
function initSwiper() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    breakpoints: {
      500: {
        slidesPerView: 2,
      },
      700: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
}
/* END swiper */


// Fetch data from TMDB API
async function fetchAPIData(endpoint) {
  const API_KEY = global.api.apiKey;
  const API_URL = global.api.apiUrl;


  showSpinner();

  const response = await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}`
  );

  const data = await response.json();

  hideSpinner();

  return data;
}

// display 20 most popular movies
async function displayPopularMovies() {
  const { results } = await fetchAPIData('/movie/popular');

  results.forEach(movie => {
    const div = document.createElement('div');
    div.classList.add('movie');
    div.innerHTML = `
      <a class="movie-link" href="#">
      ${movie.poster_path
        ?
        `<img src="https://www.themoviedb.org/t/p/w300${movie.poster_path}" alt="${movie.title}" />`
        :
        `<img src="../img/no-image.jpg" alt="${movie.title}" />`
      }
        <h3 class="movie-rating">
          <i class="fa-regular fa-star"></i>
            ${movie.vote_average}
          </h3>
        <div class="movie-descr">
          <h3 class="movie-title">${movie.title}</h3>
          <p class="movie-subtitle">
            Release:
            <small class="movie-muted">${movie.release_date}</small>
          </p>
        </div>
      </a>
    `;

    document.querySelector('.popular-movies').appendChild(div);
  })
}

// highlight active link
function highlightActiveLink() {
  const links = document.querySelectorAll('.header-nav__link');
  console.log(links);
  links.forEach(link => {
    if(link.getAttribute('href') === global.currentPage) {
      link.classList.add('active');
    }
  })
}

highlightActiveLink()

function init() {
  switch (global.currentPage) {
    case '/':
    case '/index.html':
      displaySlider();
      displayPopularMovies();
      break;
  }
}

/* button-group */
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();

    document.querySelector('.button.active').classList.remove('active');
    event.currentTarget.classList.add('active');
  })
})


/* spinner */
function showSpinner() {
  document.querySelector('.spinner').classList.add('show');
}


function hideSpinner() {
  document.querySelector('.spinner').classList.remove('show');
}


document.addEventListener('DOMContentLoaded', init); // инициализация слайдера при загрузке страницы