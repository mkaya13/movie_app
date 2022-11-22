const moviesContainer = document.getElementById('movie-container');

const displayMovie = ((movies) => movies.slice(0, 20).forEach((movie) => {
  const content = `
      <div class="card">
          <div class="one">
          <img src="${movie.image.medium}" alt="">
        </div>
        <div class="movie">
          <p class="movie__name">${movie.name}</p>
          <p class="movie__rating">Rating: ${movie.rating.average}</p>
          <button class="view-more btn">Comments</button>
          <button class="view-more btn">Reservation</button>
        </div>
      </div>
`;
  moviesContainer.insertAdjacentHTML('beforeend', content);
}));

export default displayMovie;