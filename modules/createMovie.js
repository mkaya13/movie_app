const moviesContainer = document.getElementById('movie-container');

export const displayMovie = (movies) => movies.forEach((movie) => {
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

          <div class="popup-section container-md">
          <button class="view-more" type="button" data-bs-toggle="modal" data-bs-target="#myModal-${movie.id}"> See Project </button>
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
});

export default { displayMovie };
