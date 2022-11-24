const moviesContainer = document.getElementById('movie-container');

export const displayMovie = ((movies, like) => movies.slice(0, 20).forEach((movie, index) => {
  const content = `
      <div class="cards">
          <div class="one">
          <img src="${movie.image.medium}" alt="">
        </div>
        <div class="movie">
          <p class="movie__name">${movie.name}</p>
          <p class="movie__likes"><span class="material-symbols-outlined favorite" id="like-btn">
          favorite
          </span> <span id="like-count"> ${like[index] ? like[index].likes : 0}</span></p>

          <div class="popup-section container-md">
          <button class="view-more button" type="button" data-bs-toggle="modal" data-bs-target="#myModal-${movie.id}"> See Project </button>
            <div class="modal" id="myModal-${movie.id}">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">

                  <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                  </div>

                  <div class="popup-first-section modal-header">
                    <h2> ${movie.name} </h2>
                    <img class="popup-image" src="${movie.image.original}" alt="">
                  </div>

                  <div class="popup-second-section modal-header">
                    <span class="span-feature">
                      Country: ${movie.network.country.name}
                    </span>
                    <span class="span-feature">
                      Average Runtime: ${movie.averageRuntime}
                    </span>
                    <span class="span-feature">
                      Genre: ${movie.genres}
                    </span>
                    <span class="span-feature">
                      Status: ${movie.status}
                    </span>
                  </div>

                  <div class="popup-third-section modal-header">
                    <h2> Summary </h2>
                    ${movie.summary}
                  </div>

                  <div class="popup-forth-section modal-header">
                  <h2> Comments </h2>
                  <p>...</p>
                </div>

                </div>
              <div>
            </div>
          </div>
        </div>
      </div>
`;

  moviesContainer.insertAdjacentHTML('beforeend', content);
})
);

export default { displayMovie };
