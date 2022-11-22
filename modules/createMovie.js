const moviesContainer = document.getElementById('movie-container');

const displayMovie = ((movies) => movies.forEach((movie) => {
  const content = `
      <div class="card">
          <div class="one">
          <img src="${movie.image.medium}" alt="">
        </div>
        <div class="movie">
        <p>${movie.name}</p>
          <p>${movie.language}</p>
          <p>${movie.genres}</p>
          <p><a href="${movie.officialSite}">View Live</a></p>
        <p>${movie}</p>
        <button class="view-more">Comments</button>
        </div>
      </div>
`;
  moviesContainer.insertAdjacentHTML('beforeend', content);
}));

export default displayMovie;