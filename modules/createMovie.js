const moviesContainer = document.getElementById('movie-container');

export const displayMovie = ((movies, like) => movies.slice(0, 500).forEach((movie, index) => {
  try {
    const content = `
      <div class="cards">
        <div class="one">
          <img src="${movie.image.medium}" alt="${movie.image.medium}">
        </div>
        <div class="movie">
          <p class="movie__name">${movie.name}</p>
          <p class="movie__rating">Rating: ${movie.rating.average}</p>
          <p class="movie__likes" id="movie__likes-${movie.id}"><i class="fa-regular fa-heart" id="like-button-${movie.id}" style="cursor:pointer;"></i><span id="like-number-${movie.id}">${like[index] ? like[index].likes : 0}</span></p>

          <div class="popup-section container-md">
          <button class="view-more" id="details-${movie.id}" type="button" data-bs-toggle="modal" data-bs-target="#myModal-${movie.id}"> Details </button>
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
                    <div class="comments-title">
                      <h2> Comments </h2>
                      <span class="comment-count-${movie.id}">(0)</span>
                    </div>
                    <div class="get-comments-tag-${movie.id}">
                    </div>
                  </div>

                  <div class="popup-fiveth-section modal-header">
                    <h2> Create a Comment </h2>
                    <form class="add-comments" id=${movie.id} method="post">
                      <input id="input-name-${movie.id}" class="form-input" type="text" placeholder="Your Name" value="" required>
                      <textarea name="user_message" id="input-comments-${movie.id}" class="form-text-area" placeholder="Your Comments" value="" maxlength="500" required></textarea>
                      <div class="form-submit-buttons">
                        <button type="submit" class="form-submit-button">Submit</button>
                        <button class="form-refresh-button" id="form-refresh-${movie.id}">Refresh</button>
                      <div>
                    </form>
                  </div>
                </div>
              <div>
            </div>
          </div>
        </div>
      </div>
`;

    moviesContainer.insertAdjacentHTML('beforeend', content);
  } catch (err) {
    const content = `
      <div class="cards">
        <div class="one">
          <img src="${movie.image.medium}" alt="${movie.image.medium}">
        </div>
        <div class="movie">
          <p class="movie__name">${movie.name}</p>
          <p class="movie__rating">Rating: ${movie.rating.average}</p>
          <p class="movie__likes" id="movie__likes-${movie.id}"><i class="fa-regular fa-heart" id="like-button-${movie.id}" style="cursor:pointer;"></i><span id="like-number-${movie.id}">${like[index] ? like[index].likes : 0}</span></p>

          <div class="popup-section container-md">
          <button class="view-more" id="details-${movie.id}" type="button" data-bs-toggle="modal" data-bs-target="#myModal-${movie.id}"> Details </button>
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
                      Country: 
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
                    <div class="comments-title">
                      <h2> Comments </h2>
                      <span class="comment-count-${movie.id}">(0)</span>
                    </div>
                    <div class="get-comments-tag-${movie.id}">
                    </div>
                  </div>

                  <div class="popup-fiveth-section modal-header">
                    <h2> Create a Comment </h2>
                    <form class="add-comments" id=${movie.id} method="post">
                      <input id="input-name-${movie.id}" class="form-input" type="text" placeholder="Your Name" value="" required>
                      <textarea name="user_message" id="input-comments-${movie.id}" class="form-text-area" placeholder="Your Comments" value="" maxlength="500" required></textarea>
                      <div class="form-submit-buttons">
                        <button type="submit" class="form-submit-button">Submit</button>
                        <button class="form-refresh-button" id="form-refresh-${movie.id}">Refresh</button>
                      <div>
                    </form>
                  </div>
                </div>
              <div>
            </div>
          </div>
        </div>
      </div>
    `;
    moviesContainer.insertAdjacentHTML('beforeend', content);
  }
})
);

export default { displayMovie };
