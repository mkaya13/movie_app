"use strict";
(self["webpackChunkmovie_app"] = self["webpackChunkmovie_app"] || []).push([["index"],{

/***/ "./modules/createMovie.js":
/*!********************************!*\
  !*** ./modules/createMovie.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "displayMovie": () => (/* binding */ displayMovie)
/* harmony export */ });
const moviesContainer = document.getElementById('movie-container');

const displayMovie = ((movies, like) => movies.slice(0, 500).forEach((movie, index) => {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ displayMovie });


/***/ }),

/***/ "./modules/fetchComments.js":
/*!**********************************!*\
  !*** ./modules/fetchComments.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fetchComments": () => (/* binding */ fetchComments),
/* harmony export */   "populateComments": () => (/* binding */ populateComments)
/* harmony export */ });
const fetchComments = async (API_PATH) => {
  const fetchedData = await fetch(API_PATH, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .catch((error) => error);
  return fetchedData;
};

const populateComments = (comments, itemId) => {
  const getCommentsTag = document.querySelector(`.get-comments-tag-${itemId}`);
  getCommentsTag.innerHTML = '';
  const listItems = document.createElement('ul');
  listItems.className = 'comment-items';
  comments.forEach((comment) => {
    listItems.innerHTML += `
        <li class="each-comment">
          <span class="item-holder"> <span class="comment-username">${comment.creation_date} ${comment.username}:</span>   ${comment.comment}</span>
        </li>
      `;
  });
  getCommentsTag.appendChild(listItems);
  const commentTag = document.querySelector(`.comment-count-${itemId}`);
  commentTag.innerHTML = `(${comments.length})`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ fetchComments, populateComments });


/***/ }),

/***/ "./modules/getCommentCounts.js":
/*!*************************************!*\
  !*** ./modules/getCommentCounts.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getCommentCounts": () => (/* binding */ getCommentCounts)
/* harmony export */ });
/* harmony import */ var _fetchComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchComments.js */ "./modules/fetchComments.js");


const getCommentCounts = async (
  BASE_COMMENTS_API,
  APP_ENDPOINT_ID,
) => {
  await (0,_fetchComments_js__WEBPACK_IMPORTED_MODULE_0__.fetchComments)();

  document.querySelectorAll('.view-more').forEach((button) => {
    button.addEventListener('click', async () => {
      const itemId = button.id[button.id.length - 1];

      const API_PATH = BASE_COMMENTS_API.concat(
        `apps/${APP_ENDPOINT_ID}/comments?item_id=${itemId}`,
      );

      const comments = await (0,_fetchComments_js__WEBPACK_IMPORTED_MODULE_0__.fetchComments)(API_PATH);

      const commentsCount = comments.length;

      return commentsCount;
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ getCommentCounts });


/***/ }),

/***/ "./modules/getLikes.js":
/*!*****************************!*\
  !*** ./modules/getLikes.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getLikes": () => (/* binding */ getLikes)
/* harmony export */ });
const getLikes = async () => {
  const LIKES_API_ENDPOINT = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fHo7lmvhk7zd67CQ0T7l/likes" || 0;
  const res = await fetch(LIKES_API_ENDPOINT);
  const data = await res.json();
  return data;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ getLikes });


/***/ }),

/***/ "./modules/getMovies.js":
/*!******************************!*\
  !*** ./modules/getMovies.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getMovies": () => (/* binding */ getMovies)
/* harmony export */ });
const APIUrl = "https://api.tvmaze.com/shows";

const getMovies = async () => {
  const response = await fetch(APIUrl);
  const movies = await response.json();
  return movies;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ getMovies });


/***/ }),

/***/ "./modules/movies.js":
/*!***************************!*\
  !*** ./modules/movies.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "show": () => (/* binding */ show)
/* harmony export */ });
/* harmony import */ var _createMovie_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createMovie.js */ "./modules/createMovie.js");
/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLikes.js */ "./modules/getLikes.js");
/* harmony import */ var _getMovies_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getMovies.js */ "./modules/getMovies.js");




const show = async () => {
  const movies = await (0,_getMovies_js__WEBPACK_IMPORTED_MODULE_2__.getMovies)();
  const likes = await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_1__.getLikes)();
  (0,_createMovie_js__WEBPACK_IMPORTED_MODULE_0__.displayMovie)(movies, likes);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ show });


/***/ }),

/***/ "./modules/nav.js":
/*!************************!*\
  !*** ./modules/nav.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "showComponent": () => (/* binding */ showComponent)
/* harmony export */ });
const navItems = document.querySelectorAll('.nav-items');
const movieSection = document.getElementById('movie-section');
const episodeSection = document.getElementById('episode-section');
const contactSection = document.getElementById('contact-section');

const showComponent = (componentId) => {
  switch (componentId) {
    case 'movie-section':
      movieSection.classList.add('visible');
      episodeSection.classList.remove('visible');
      contactSection.classList.remove('visible');
      break;
    case 'episode-section':
      movieSection.classList.remove('visible');
      episodeSection.classList.add('visible');
      contactSection.classList.remove('visible');
      break;
    case 'contact-section':
      movieSection.classList.remove('visible');
      episodeSection.classList.remove('visible');
      contactSection.classList.add('visible');
      break;
    default:
      break;
  }
};

navItems.forEach((navItem) => {
  navItem.addEventListener('click', (event) => {
    const componentId = event.target.getAttribute('showComponent');
    showComponent(componentId);
  });
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showComponent);


/***/ }),

/***/ "./modules/postRequestLike.js":
/*!************************************!*\
  !*** ./modules/postRequestLike.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyLike": () => (/* binding */ applyLike),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "postRequestLike": () => (/* binding */ postRequestLike)
/* harmony export */ });
const postRequestLike = async (itemId) => {
  const LIKES_API_ENDPOINT = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fHo7lmvhk7zd67CQ0T7l/likes" || 0;
  fetch(LIKES_API_ENDPOINT, {
    method: 'POST',
    body: JSON.stringify({
      item_id: (Number(itemId) + 1).toString(),
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response)
    .catch((error) => error);
};
const applyLike = async () => {
  document.querySelectorAll('.fa-regular,.fa-heart').forEach((likeButton) => {
    likeButton.addEventListener('click', async (event) => {
      event.preventDefault();
      if (likeButton.className === 'fa-regular fa-heart') {
        const itemId = likeButton.id[likeButton.id.length - 1];
        const likeNumberTag = document.getElementById(`like-number-${itemId}`);
        likeButton.className = 'fa-solid fa-heart';
        await postRequestLike(itemId);
        const likeNumber = Number(likeNumberTag.innerText);
        likeNumberTag.innerText = (likeNumber + 1).toString();
      } else {
        likeButton.className = 'fa-regular fa-heart';
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ postRequestLike, applyLike });


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/hero-MOVIE-app.webp */ "./src/img/hero-MOVIE-app.webp"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: 18px;\r\n  font-family: 'Lato', sans-serif;\r\n}\r\n\r\np {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1.5rem 2% 0 2%;\r\n}\r\n\r\n.nav-list {\r\n  display: flex;\r\n  list-style: none;\r\n  padding-right: 5%;\r\n  gap: 5rem;\r\n}\r\n\r\n.logo p {\r\n  color: orange;\r\n  cursor: pointer;\r\n  font-size: 28px;\r\n  text-shadow:\r\n    1px 0 0 #fff,\r\n    -1px 0 0 #fff,\r\n    0 1px 0 #fff,\r\n    0 -1px 0 #fff,\r\n    1px 1px #fff,\r\n    -1px -1px 0 #fff,\r\n    1px -1px 0 #fff,\r\n    -1px 1px 0 #fff;\r\n}\r\n\r\n.nav-items {\r\n  cursor: pointer;\r\n  color: #d3d3d3;\r\n}\r\n\r\n.hide-menu {\r\n  display: none;\r\n}\r\n\r\n.wrapper {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.footer {\r\n  color: white;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 50px;\r\n  margin-top: 30px;\r\n  padding: 35px;\r\n  background-color: #9400d3;\r\n}\r\n\r\n.cards {\r\n  flex: 1;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  text-align: center;\r\n  gap: 3px;\r\n}\r\n\r\n.one img {\r\n  width: 220px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n#header {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-position: center;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.header-content {\r\n  padding: 2.5rem 0;\r\n}\r\n\r\n.movie__likes {\r\n  padding: 10px 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 13px;\r\n}\r\n\r\n.header-content__title {\r\n  font-size: 3.9vw;\r\n  font-weight: 600;\r\n  letter-spacing: -0.01em;\r\n  line-height: 140%;\r\n  color: #fff;\r\n}\r\n\r\n.header-content__title-small {\r\n  font-weight: 100;\r\n  font-size: 2.9vw;\r\n  display: block;\r\n  line-height: 1;\r\n}\r\n\r\n.header-content__desc {\r\n  color: #fff;\r\n  padding: 2rem 17rem 2rem 0;\r\n  line-height: 1.3;\r\n}\r\n\r\n.button {\r\n  border: none;\r\n  padding: 10px 15px;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn:hover {\r\n  border: 1px solid;\r\n}\r\n\r\n.btn-primary {\r\n  background-color: #fff;\r\n}\r\n\r\n.btn-secondary {\r\n  background-color: transparent;\r\n  border: 1px solid #fff;\r\n  color: #fff;\r\n}\r\n\r\n.movie-section {\r\n  margin-top: 3rem;\r\n}\r\n\r\n.visible {\r\n  display: flex !important;\r\n}\r\n\r\n#movie-section,\r\n#episode-section,\r\n#contact-section {\r\n  display: none;\r\n}\r\n\r\n.movie__name {\r\n  font-size: 23px;\r\n}\r\n\r\n.popup-section {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.modal-dialog {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.popup-first-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-content: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.popup-second-section {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-content: center;\r\n  justify-content: center;\r\n  gap: 1rem 3rem;\r\n}\r\n\r\n.popup-image {\r\n  width: 50%;\r\n  height: 25rem;\r\n}\r\n\r\n.popup-feature {\r\n  font-size: 22px;\r\n}\r\n\r\n.popup-feature-content {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n  text-align: center;\r\n  align-items: center;\r\n}\r\n\r\n.popup-feature-header {\r\n  font-size: 20px;\r\n}\r\n\r\n.popup-third-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  gap: 0.2rem 0;\r\n}\r\n\r\n.movie-summary {\r\n  display: flex;\r\n  height: 20%;\r\n  justify-content: center;\r\n  text-align: center;\r\n}\r\n\r\n.popup-fiveth-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.2rem 0;\r\n}\r\n\r\n.add-comments {\r\n  display: flex;\r\n  width: 60%;\r\n  flex-direction: column;\r\n  gap: 2rem 0;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.form-input {\r\n  height: 2rem;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.form-text-area {\r\n  height: 5rem;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.form-submit-buttons {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n  align-items: center;\r\n  gap: 3rem;\r\n  margin-left: 1.5rem;\r\n}\r\n\r\n.form-submit-button {\r\n  width: 5rem;\r\n  padding: 0.25rem;\r\n}\r\n\r\n.form-refresh-button {\r\n  width: 5rem;\r\n  padding: 0.25rem;\r\n}\r\n\r\n.popup-forth-section {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  width: 100%;\r\n  flex-direction: column;\r\n  gap: 0.25rem 0;\r\n}\r\n\r\n.comment-username {\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n}\r\n\r\n.comment-items {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  flex-direction: column;\r\n  gap: 0.25rem 0;\r\n}\r\n\r\n.comments-title {\r\n  display: flex;\r\n}\r\n\r\n.material-symbols-outlined {\r\n  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;\r\n}\r\n\r\n.view-more {\r\n  color: white;\r\n  padding: 0.15rem 0.5rem 0.15rem 0.5rem;\r\n  border-radius: 0.25rem;\r\n  background-color: black;\r\n}\r\n\r\n.view-more:hover {\r\n  background-color: white;\r\n  color: black;\r\n}\r\n\r\n.show-more {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n  align-items: center;\r\n  margin: auto;\r\n  color: white;\r\n  padding: 0.15rem 0.5rem 0.15rem 0.5rem;\r\n  border-radius: 0.25rem;\r\n  background-color: #4169e1;\r\n}\r\n\r\n.show-more:hover {\r\n  background-color: white;\r\n  color: black;\r\n}\r\n\r\n.bottom-arrow {\r\n  width: 10px;\r\n  height: 10px;\r\n  transition: 0.5s;\r\n  float: right;\r\n  box-shadow: -2px 2px 0 #ec5242;\r\n  transform: rotate(-45deg);\r\n  margin-bottom: 7%;\r\n  margin-left: 10px;\r\n}\r\n\r\n/* desktop version */\r\n@media screen and (min-width: 768px) {\r\n  .span-feature {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    align-content: center;\r\n    text-align: center;\r\n    width: 40%;\r\n    height: 5rem;\r\n  }\r\n}\r\n\r\n/* mobile version */\r\n@media screen and (max-width: 768px) {\r\n  .nav-list {\r\n    display: none;\r\n  }\r\n\r\n  .hide-menu {\r\n    display: none;\r\n    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;\r\n  }\r\n\r\n  .popup-second-section {\r\n    gap: 0.5rem 3rem;\r\n  }\r\n\r\n  .popup-image {\r\n    height: 15rem;\r\n  }\r\n\r\n  .span-feature {\r\n    display: flex;\r\n    align-content: center;\r\n    width: 35%;\r\n    height: 5rem;\r\n  }\r\n\r\n  .header-content__title {\r\n    font-size: 11vw;\r\n    font-weight: 800;\r\n    line-height: 120%;\r\n  }\r\n\r\n  .header-content__title-small {\r\n    font-size: 4.9vw;\r\n    line-height: 3;\r\n    letter-spacing: 0.3rem;\r\n  }\r\n\r\n  .header-content__desc {\r\n    padding: 1rem 0;\r\n    line-height: 1.3;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: 18px;\r\n  font-family: 'Lato', sans-serif;\r\n}\r\n\r\np {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1.5rem 2% 0 2%;\r\n}\r\n\r\n.nav-list {\r\n  display: flex;\r\n  list-style: none;\r\n  padding-right: 5%;\r\n  gap: 5rem;\r\n}\r\n\r\n.logo p {\r\n  color: orange;\r\n  cursor: pointer;\r\n  font-size: 28px;\r\n  text-shadow:\r\n    1px 0 0 #fff,\r\n    -1px 0 0 #fff,\r\n    0 1px 0 #fff,\r\n    0 -1px 0 #fff,\r\n    1px 1px #fff,\r\n    -1px -1px 0 #fff,\r\n    1px -1px 0 #fff,\r\n    -1px 1px 0 #fff;\r\n}\r\n\r\n.nav-items {\r\n  cursor: pointer;\r\n  color: #d3d3d3;\r\n}\r\n\r\n.hide-menu {\r\n  display: none;\r\n}\r\n\r\n.wrapper {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.footer {\r\n  color: white;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 50px;\r\n  margin-top: 30px;\r\n  padding: 35px;\r\n  background-color: #9400d3;\r\n}\r\n\r\n.cards {\r\n  flex: 1;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  text-align: center;\r\n  gap: 3px;\r\n}\r\n\r\n.one img {\r\n  width: 220px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n#header {\r\n  background-image: url(./img/hero-MOVIE-app.webp);\r\n  background-position: center;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.header-content {\r\n  padding: 2.5rem 0;\r\n}\r\n\r\n.movie__likes {\r\n  padding: 10px 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 13px;\r\n}\r\n\r\n.header-content__title {\r\n  font-size: 3.9vw;\r\n  font-weight: 600;\r\n  letter-spacing: -0.01em;\r\n  line-height: 140%;\r\n  color: #fff;\r\n}\r\n\r\n.header-content__title-small {\r\n  font-weight: 100;\r\n  font-size: 2.9vw;\r\n  display: block;\r\n  line-height: 1;\r\n}\r\n\r\n.header-content__desc {\r\n  color: #fff;\r\n  padding: 2rem 17rem 2rem 0;\r\n  line-height: 1.3;\r\n}\r\n\r\n.button {\r\n  border: none;\r\n  padding: 10px 15px;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn:hover {\r\n  border: 1px solid;\r\n}\r\n\r\n.btn-primary {\r\n  background-color: #fff;\r\n}\r\n\r\n.btn-secondary {\r\n  background-color: transparent;\r\n  border: 1px solid #fff;\r\n  color: #fff;\r\n}\r\n\r\n.movie-section {\r\n  margin-top: 3rem;\r\n}\r\n\r\n.visible {\r\n  display: flex !important;\r\n}\r\n\r\n#movie-section,\r\n#episode-section,\r\n#contact-section {\r\n  display: none;\r\n}\r\n\r\n.movie__name {\r\n  font-size: 23px;\r\n}\r\n\r\n.popup-section {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.modal-dialog {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.popup-first-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-content: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.popup-second-section {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-content: center;\r\n  justify-content: center;\r\n  gap: 1rem 3rem;\r\n}\r\n\r\n.popup-image {\r\n  width: 50%;\r\n  height: 25rem;\r\n}\r\n\r\n.popup-feature {\r\n  font-size: 22px;\r\n}\r\n\r\n.popup-feature-content {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n  text-align: center;\r\n  align-items: center;\r\n}\r\n\r\n.popup-feature-header {\r\n  font-size: 20px;\r\n}\r\n\r\n.popup-third-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  gap: 0.2rem 0;\r\n}\r\n\r\n.movie-summary {\r\n  display: flex;\r\n  height: 20%;\r\n  justify-content: center;\r\n  text-align: center;\r\n}\r\n\r\n.popup-fiveth-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.2rem 0;\r\n}\r\n\r\n.add-comments {\r\n  display: flex;\r\n  width: 60%;\r\n  flex-direction: column;\r\n  gap: 2rem 0;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.form-input {\r\n  height: 2rem;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.form-text-area {\r\n  height: 5rem;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.form-submit-buttons {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n  align-items: center;\r\n  gap: 3rem;\r\n  margin-left: 1.5rem;\r\n}\r\n\r\n.form-submit-button {\r\n  width: 5rem;\r\n  padding: 0.25rem;\r\n}\r\n\r\n.form-refresh-button {\r\n  width: 5rem;\r\n  padding: 0.25rem;\r\n}\r\n\r\n.popup-forth-section {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  width: 100%;\r\n  flex-direction: column;\r\n  gap: 0.25rem 0;\r\n}\r\n\r\n.comment-username {\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n}\r\n\r\n.comment-items {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  flex-direction: column;\r\n  gap: 0.25rem 0;\r\n}\r\n\r\n.comments-title {\r\n  display: flex;\r\n}\r\n\r\n.material-symbols-outlined {\r\n  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;\r\n}\r\n\r\n.view-more {\r\n  color: white;\r\n  padding: 0.15rem 0.5rem 0.15rem 0.5rem;\r\n  border-radius: 0.25rem;\r\n  background-color: black;\r\n}\r\n\r\n.view-more:hover {\r\n  background-color: white;\r\n  color: black;\r\n}\r\n\r\n.show-more {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n  align-items: center;\r\n  margin: auto;\r\n  color: white;\r\n  padding: 0.15rem 0.5rem 0.15rem 0.5rem;\r\n  border-radius: 0.25rem;\r\n  background-color: #4169e1;\r\n}\r\n\r\n.show-more:hover {\r\n  background-color: white;\r\n  color: black;\r\n}\r\n\r\n.bottom-arrow {\r\n  width: 10px;\r\n  height: 10px;\r\n  transition: 0.5s;\r\n  float: right;\r\n  box-shadow: -2px 2px 0 #ec5242;\r\n  transform: rotate(-45deg);\r\n  margin-bottom: 7%;\r\n  margin-left: 10px;\r\n}\r\n\r\n/* desktop version */\r\n@media screen and (min-width: 768px) {\r\n  .span-feature {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    align-content: center;\r\n    text-align: center;\r\n    width: 40%;\r\n    height: 5rem;\r\n  }\r\n}\r\n\r\n/* mobile version */\r\n@media screen and (max-width: 768px) {\r\n  .nav-list {\r\n    display: none;\r\n  }\r\n\r\n  .hide-menu {\r\n    display: none;\r\n    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;\r\n  }\r\n\r\n  .popup-second-section {\r\n    gap: 0.5rem 3rem;\r\n  }\r\n\r\n  .popup-image {\r\n    height: 15rem;\r\n  }\r\n\r\n  .span-feature {\r\n    display: flex;\r\n    align-content: center;\r\n    width: 35%;\r\n    height: 5rem;\r\n  }\r\n\r\n  .header-content__title {\r\n    font-size: 11vw;\r\n    font-weight: 800;\r\n    line-height: 120%;\r\n  }\r\n\r\n  .header-content__title-small {\r\n    font-size: 4.9vw;\r\n    line-height: 3;\r\n    letter-spacing: 0.3rem;\r\n  }\r\n\r\n  .header-content__desc {\r\n    padding: 1rem 0;\r\n    line-height: 1.3;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_getMovies_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/getMovies.js */ "./modules/getMovies.js");
/* harmony import */ var _modules_movies_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/movies.js */ "./modules/movies.js");
/* harmony import */ var _modules_nav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/nav.js */ "./modules/nav.js");
/* harmony import */ var _modules_fetchComments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/fetchComments.js */ "./modules/fetchComments.js");
/* harmony import */ var _modules_getCommentCounts_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/getCommentCounts.js */ "./modules/getCommentCounts.js");
/* harmony import */ var _modules_getLikes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/getLikes.js */ "./modules/getLikes.js");
/* harmony import */ var _modules_postRequestLike_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/postRequestLike.js */ "./modules/postRequestLike.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





// import { refreshButton } from '../modules/utils.js';




const BASE_COMMENTS_API = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/" || 0;
const APP_ENDPOINT_ID = "fHo7lmvhk7zd67CQ0T7l" || 0;

let itemId = '';

const sendComments = async () => {
  document.querySelectorAll('.add-comments').forEach((button) => {
    button.addEventListener('submit', async (e) => {
      e.preventDefault();

      itemId = button.id;
      const inputNameTag = document.getElementById(`input-name-${itemId}`);
      const inputCommentsTag = document.getElementById(`input-comments-${itemId}`);

      const APIEndpoint = BASE_COMMENTS_API.concat(
        `apps/${APP_ENDPOINT_ID}/comments`,
      );

      await fetch(APIEndpoint, {
        method: 'POST',
        body: JSON.stringify({
          item_id: itemId,
          username: inputNameTag.value,
          comment: inputCommentsTag.value,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response)
        .catch((error) => error);

      inputNameTag.value = '';
      inputCommentsTag.value = '';

      const API_PATH = BASE_COMMENTS_API.concat(
        `apps/${APP_ENDPOINT_ID}/comments?item_id=${itemId}`,
      );
      const comments = await (0,_modules_fetchComments_js__WEBPACK_IMPORTED_MODULE_3__.fetchComments)(API_PATH);

      (0,_modules_fetchComments_js__WEBPACK_IMPORTED_MODULE_3__.populateComments)(comments, itemId);
    });
  });
};

const fillComments = async () => {
  document.querySelectorAll('.view-more').forEach((detailButton) => {
    detailButton.addEventListener('click', async (event) => {
      event.preventDefault();
      const itemId = detailButton.id[detailButton.id.length - 1];

      const API_PATH = BASE_COMMENTS_API.concat(
        `apps/${APP_ENDPOINT_ID}/comments?item_id=${itemId}`,
      );

      const comments = await (0,_modules_fetchComments_js__WEBPACK_IMPORTED_MODULE_3__.fetchComments)(API_PATH);
      const listItems = document.createElement('ul');
      listItems.className = 'comment-items';
      (0,_modules_fetchComments_js__WEBPACK_IMPORTED_MODULE_3__.populateComments)(comments, itemId, listItems);
    });
  });
};

const arrangeFunctionRuns = async () => {
  await (0,_modules_movies_js__WEBPACK_IMPORTED_MODULE_1__.show)();
  (0,_modules_nav_js__WEBPACK_IMPORTED_MODULE_2__.showComponent)();
  await (0,_modules_getMovies_js__WEBPACK_IMPORTED_MODULE_0__.getMovies)();
  await (0,_modules_postRequestLike_js__WEBPACK_IMPORTED_MODULE_6__.applyLike)();
  await (0,_modules_getLikes_js__WEBPACK_IMPORTED_MODULE_5__.getLikes)();
  await (0,_modules_getCommentCounts_js__WEBPACK_IMPORTED_MODULE_4__.getCommentCounts)(BASE_COMMENTS_API, APP_ENDPOINT_ID);
  await fillComments();
  await sendComments();
};

arrangeFunctionRuns();

// refreshButton();


/***/ }),

/***/ "./src/img/hero-MOVIE-app.webp":
/*!*************************************!*\
  !*** ./src/img/hero-MOVIE-app.webp ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aaa1a3c5097a8631106c.webp";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sS0FBSyxV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QUNmLFFBQVEsZ0VBQVM7QUFDakIsUUFBUSxzRUFBUztBQUNqQixRQUFRLDhEQUFRO0FBQ2hCLFFBQVEsOEVBQWdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL21vdmllX2FwcC8uL21vZHVsZXMvY3JlYXRlTW92aWUuanMiLCJ3ZWJwYWNrOi8vbW92aWVfYXBwLy4vbW9kdWxlcy9mZXRjaENvbW1lbnRzLmpzIiwid2VicGFjazovL21vdmllX2FwcC8uL21vZHVsZXMvZ2V0Q29tbWVudENvdW50cy5qcyIsIndlYnBhY2s6Ly9tb3ZpZV9hcHAvLi9tb2R1bGVzL2dldExpa2VzLmpzIiwid2VicGFjazovL21vdmllX2FwcC8uL21vZHVsZXMvZ2V0TW92aWVzLmpzIiwid2VicGFjazovL21vdmllX2FwcC8uL21vZHVsZXMvbW92aWVzLmpzIiwid2VicGFjazovL21vdmllX2FwcC8uL21vZHVsZXMvbmF2LmpzIiwid2VicGFjazovL21vdmllX2FwcC8uL21vZHVsZXMvcG9zdFJlcXVlc3RMaWtlLmpzIiwid2VicGFjazovL21vdmllX2FwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbW92aWVfYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9tb3ZpZV9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL21vdmllX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL21vdmllX2FwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9tb3ZpZV9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbW92aWVfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9tb3ZpZV9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbW92aWVfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL21vdmllX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL21vdmllX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL21vdmllX2FwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb3ZpZXNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW92aWUtY29udGFpbmVyJyk7XG5cbmV4cG9ydCBjb25zdCBkaXNwbGF5TW92aWUgPSAoKG1vdmllcywgbGlrZSkgPT4gbW92aWVzLnNsaWNlKDAsIDUwMCkuZm9yRWFjaCgobW92aWUsIGluZGV4KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgY29udGVudCA9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwib25lXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIke21vdmllLmltYWdlLm1lZGl1bX1cIiBhbHQ9XCIke21vdmllLmltYWdlLm1lZGl1bX1cIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb3ZpZVwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwibW92aWVfX25hbWVcIj4ke21vdmllLm5hbWV9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwibW92aWVfX3JhdGluZ1wiPlJhdGluZzogJHttb3ZpZS5yYXRpbmcuYXZlcmFnZX08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJtb3ZpZV9fbGlrZXNcIiBpZD1cIm1vdmllX19saWtlcy0ke21vdmllLmlkfVwiPjxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1oZWFydFwiIGlkPVwibGlrZS1idXR0b24tJHttb3ZpZS5pZH1cIiBzdHlsZT1cImN1cnNvcjpwb2ludGVyO1wiPjwvaT48c3BhbiBpZD1cImxpa2UtbnVtYmVyLSR7bW92aWUuaWR9XCI+JHtsaWtlW2luZGV4XSA/IGxpa2VbaW5kZXhdLmxpa2VzIDogMH08L3NwYW4+PC9wPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLXNlY3Rpb24gY29udGFpbmVyLW1kXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInZpZXctbW9yZVwiIGlkPVwiZGV0YWlscy0ke21vdmllLmlkfVwiIHR5cGU9XCJidXR0b25cIiBkYXRhLWJzLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS1icy10YXJnZXQ9XCIjbXlNb2RhbC0ke21vdmllLmlkfVwiPiBEZXRhaWxzIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsXCIgaWQ9XCJteU1vZGFsLSR7bW92aWUuaWR9XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgbW9kYWwtbGdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLWNsb3NlXCIgZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIj48L2J1dHRvbj4gXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLWZpcnN0LXNlY3Rpb24gbW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj4gJHttb3ZpZS5uYW1lfSA8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicG9wdXAtaW1hZ2VcIiBzcmM9XCIke21vdmllLmltYWdlLm9yaWdpbmFsfVwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1zZWNvbmQtc2VjdGlvbiBtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzcGFuLWZlYXR1cmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICBDb3VudHJ5OiAke21vdmllLm5ldHdvcmsuY291bnRyeS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Bhbi1mZWF0dXJlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgQXZlcmFnZSBSdW50aW1lOiAke21vdmllLmF2ZXJhZ2VSdW50aW1lfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Bhbi1mZWF0dXJlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgR2VucmU6ICR7bW92aWUuZ2VucmVzfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Bhbi1mZWF0dXJlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgU3RhdHVzOiAke21vdmllLnN0YXR1c31cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC10aGlyZC1zZWN0aW9uIG1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+IFN1bW1hcnkgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgJHttb3ZpZS5zdW1tYXJ5fVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1mb3J0aC1zZWN0aW9uIG1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudHMtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDI+IENvbW1lbnRzIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb21tZW50LWNvdW50LSR7bW92aWUuaWR9XCI+KDApPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdldC1jb21tZW50cy10YWctJHttb3ZpZS5pZH1cIj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLWZpdmV0aC1zZWN0aW9uIG1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+IENyZWF0ZSBhIENvbW1lbnQgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJhZGQtY29tbWVudHNcIiBpZD0ke21vdmllLmlkfSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiaW5wdXQtbmFtZS0ke21vdmllLmlkfVwiIGNsYXNzPVwiZm9ybS1pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJZb3VyIE5hbWVcIiB2YWx1ZT1cIlwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwidXNlcl9tZXNzYWdlXCIgaWQ9XCJpbnB1dC1jb21tZW50cy0ke21vdmllLmlkfVwiIGNsYXNzPVwiZm9ybS10ZXh0LWFyZWFcIiBwbGFjZWhvbGRlcj1cIllvdXIgQ29tbWVudHNcIiB2YWx1ZT1cIlwiIG1heGxlbmd0aD1cIjUwMFwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tc3VibWl0LWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiZm9ybS1zdWJtaXQtYnV0dG9uXCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZm9ybS1yZWZyZXNoLWJ1dHRvblwiIGlkPVwiZm9ybS1yZWZyZXNoLSR7bW92aWUuaWR9XCI+UmVmcmVzaDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5gO1xuXG4gICAgbW92aWVzQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgY29udGVudCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZHNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm9uZVwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiJHttb3ZpZS5pbWFnZS5tZWRpdW19XCIgYWx0PVwiJHttb3ZpZS5pbWFnZS5tZWRpdW19XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW92aWVcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cIm1vdmllX19uYW1lXCI+JHttb3ZpZS5uYW1lfTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cIm1vdmllX19yYXRpbmdcIj5SYXRpbmc6ICR7bW92aWUucmF0aW5nLmF2ZXJhZ2V9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwibW92aWVfX2xpa2VzXCIgaWQ9XCJtb3ZpZV9fbGlrZXMtJHttb3ZpZS5pZH1cIj48aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtaGVhcnRcIiBpZD1cImxpa2UtYnV0dG9uLSR7bW92aWUuaWR9XCIgc3R5bGU9XCJjdXJzb3I6cG9pbnRlcjtcIj48L2k+PHNwYW4gaWQ9XCJsaWtlLW51bWJlci0ke21vdmllLmlkfVwiPiR7bGlrZVtpbmRleF0gPyBsaWtlW2luZGV4XS5saWtlcyA6IDB9PC9zcGFuPjwvcD5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1zZWN0aW9uIGNvbnRhaW5lci1tZFwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ2aWV3LW1vcmVcIiBpZD1cImRldGFpbHMtJHttb3ZpZS5pZH1cIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1icy10b2dnbGU9XCJtb2RhbFwiIGRhdGEtYnMtdGFyZ2V0PVwiI215TW9kYWwtJHttb3ZpZS5pZH1cIj4gRGV0YWlscyA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbFwiIGlkPVwibXlNb2RhbC0ke21vdmllLmlkfVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nIG1vZGFsLWxnXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1jbG9zZVwiIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCI+PC9idXR0b24+IFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1maXJzdC1zZWN0aW9uIG1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+ICR7bW92aWUubmFtZX0gPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInBvcHVwLWltYWdlXCIgc3JjPVwiJHttb3ZpZS5pbWFnZS5vcmlnaW5hbH1cIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtc2Vjb25kLXNlY3Rpb24gbW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Bhbi1mZWF0dXJlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgQ291bnRyeTogXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzcGFuLWZlYXR1cmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICBBdmVyYWdlIFJ1bnRpbWU6ICR7bW92aWUuYXZlcmFnZVJ1bnRpbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzcGFuLWZlYXR1cmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICBHZW5yZTogJHttb3ZpZS5nZW5yZXN9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzcGFuLWZlYXR1cmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICBTdGF0dXM6ICR7bW92aWUuc3RhdHVzfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLXRoaXJkLXNlY3Rpb24gbW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj4gU3VtbWFyeSA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAke21vdmllLnN1bW1hcnl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLWZvcnRoLXNlY3Rpb24gbW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50cy10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMj4gQ29tbWVudHMgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbW1lbnQtY291bnQtJHttb3ZpZS5pZH1cIj4oMCk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2V0LWNvbW1lbnRzLXRhZy0ke21vdmllLmlkfVwiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtZml2ZXRoLXNlY3Rpb24gbW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj4gQ3JlYXRlIGEgQ29tbWVudCA8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImFkZC1jb21tZW50c1wiIGlkPSR7bW92aWUuaWR9IG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJpbnB1dC1uYW1lLSR7bW92aWUuaWR9XCIgY2xhc3M9XCJmb3JtLWlucHV0XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgTmFtZVwiIHZhbHVlPVwiXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJ1c2VyX21lc3NhZ2VcIiBpZD1cImlucHV0LWNvbW1lbnRzLSR7bW92aWUuaWR9XCIgY2xhc3M9XCJmb3JtLXRleHQtYXJlYVwiIHBsYWNlaG9sZGVyPVwiWW91ciBDb21tZW50c1wiIHZhbHVlPVwiXCIgbWF4bGVuZ3RoPVwiNTAwXCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1zdWJtaXQtYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJmb3JtLXN1Ym1pdC1idXR0b25cIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJmb3JtLXJlZnJlc2gtYnV0dG9uXCIgaWQ9XCJmb3JtLXJlZnJlc2gtJHttb3ZpZS5pZH1cIj5SZWZyZXNoPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIG1vdmllc0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGNvbnRlbnQpO1xuICB9XG59KVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgeyBkaXNwbGF5TW92aWUgfTtcbiIsImV4cG9ydCBjb25zdCBmZXRjaENvbW1lbnRzID0gYXN5bmMgKEFQSV9QQVRIKSA9PiB7XG4gIGNvbnN0IGZldGNoZWREYXRhID0gYXdhaXQgZmV0Y2goQVBJX1BBVEgsIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICB9KVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yKTtcbiAgcmV0dXJuIGZldGNoZWREYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IHBvcHVsYXRlQ29tbWVudHMgPSAoY29tbWVudHMsIGl0ZW1JZCkgPT4ge1xuICBjb25zdCBnZXRDb21tZW50c1RhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5nZXQtY29tbWVudHMtdGFnLSR7aXRlbUlkfWApO1xuICBnZXRDb21tZW50c1RhZy5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgbGlzdEl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgbGlzdEl0ZW1zLmNsYXNzTmFtZSA9ICdjb21tZW50LWl0ZW1zJztcbiAgY29tbWVudHMuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgIGxpc3RJdGVtcy5pbm5lckhUTUwgKz0gYFxuICAgICAgICA8bGkgY2xhc3M9XCJlYWNoLWNvbW1lbnRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIml0ZW0taG9sZGVyXCI+IDxzcGFuIGNsYXNzPVwiY29tbWVudC11c2VybmFtZVwiPiR7Y29tbWVudC5jcmVhdGlvbl9kYXRlfSAke2NvbW1lbnQudXNlcm5hbWV9Ojwvc3Bhbj4gICAke2NvbW1lbnQuY29tbWVudH08L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICBgO1xuICB9KTtcbiAgZ2V0Q29tbWVudHNUYWcuYXBwZW5kQ2hpbGQobGlzdEl0ZW1zKTtcbiAgY29uc3QgY29tbWVudFRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21tZW50LWNvdW50LSR7aXRlbUlkfWApO1xuICBjb21tZW50VGFnLmlubmVySFRNTCA9IGAoJHtjb21tZW50cy5sZW5ndGh9KWA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7IGZldGNoQ29tbWVudHMsIHBvcHVsYXRlQ29tbWVudHMgfTtcbiIsImltcG9ydCB7IGZldGNoQ29tbWVudHMgfSBmcm9tICcuL2ZldGNoQ29tbWVudHMuanMnO1xuXG5leHBvcnQgY29uc3QgZ2V0Q29tbWVudENvdW50cyA9IGFzeW5jIChcbiAgQkFTRV9DT01NRU5UU19BUEksXG4gIEFQUF9FTkRQT0lOVF9JRCxcbikgPT4ge1xuICBhd2FpdCBmZXRjaENvbW1lbnRzKCk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZpZXctbW9yZScpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1JZCA9IGJ1dHRvbi5pZFtidXR0b24uaWQubGVuZ3RoIC0gMV07XG5cbiAgICAgIGNvbnN0IEFQSV9QQVRIID0gQkFTRV9DT01NRU5UU19BUEkuY29uY2F0KFxuICAgICAgICBgYXBwcy8ke0FQUF9FTkRQT0lOVF9JRH0vY29tbWVudHM/aXRlbV9pZD0ke2l0ZW1JZH1gLFxuICAgICAgKTtcblxuICAgICAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBmZXRjaENvbW1lbnRzKEFQSV9QQVRIKTtcblxuICAgICAgY29uc3QgY29tbWVudHNDb3VudCA9IGNvbW1lbnRzLmxlbmd0aDtcblxuICAgICAgcmV0dXJuIGNvbW1lbnRzQ291bnQ7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgeyBnZXRDb21tZW50Q291bnRzIH07XG4iLCJleHBvcnQgY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IExJS0VTX0FQSV9FTkRQT0lOVCA9IHByb2Nlc3MuZW52LkxJS0VTX0FQSV9QQVRIIHx8ICcnO1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChMSUtFU19BUElfRU5EUE9JTlQpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7IGdldExpa2VzIH07XG4iLCJjb25zdCBBUElVcmwgPSBwcm9jZXNzLmVudi5CQVNFX01PVklFX0FQSTtcblxuZXhwb3J0IGNvbnN0IGdldE1vdmllcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChBUElVcmwpO1xuICBjb25zdCBtb3ZpZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBtb3ZpZXM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7IGdldE1vdmllcyB9O1xuIiwiaW1wb3J0IHsgZGlzcGxheU1vdmllIH0gZnJvbSAnLi9jcmVhdGVNb3ZpZS5qcyc7XG5pbXBvcnQgeyBnZXRMaWtlcyB9IGZyb20gJy4vZ2V0TGlrZXMuanMnO1xuaW1wb3J0IHsgZ2V0TW92aWVzIH0gZnJvbSAnLi9nZXRNb3ZpZXMuanMnO1xuXG5leHBvcnQgY29uc3Qgc2hvdyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbW92aWVzID0gYXdhaXQgZ2V0TW92aWVzKCk7XG4gIGNvbnN0IGxpa2VzID0gYXdhaXQgZ2V0TGlrZXMoKTtcbiAgZGlzcGxheU1vdmllKG1vdmllcywgbGlrZXMpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgeyBzaG93IH07XG4iLCJjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtaXRlbXMnKTtcbmNvbnN0IG1vdmllU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb3ZpZS1zZWN0aW9uJyk7XG5jb25zdCBlcGlzb2RlU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcGlzb2RlLXNlY3Rpb24nKTtcbmNvbnN0IGNvbnRhY3RTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3Qtc2VjdGlvbicpO1xuXG5leHBvcnQgY29uc3Qgc2hvd0NvbXBvbmVudCA9IChjb21wb25lbnRJZCkgPT4ge1xuICBzd2l0Y2ggKGNvbXBvbmVudElkKSB7XG4gICAgY2FzZSAnbW92aWUtc2VjdGlvbic6XG4gICAgICBtb3ZpZVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgZXBpc29kZVNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgICAgY29udGFjdFNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZXBpc29kZS1zZWN0aW9uJzpcbiAgICAgIG1vdmllU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgICBlcGlzb2RlU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICBjb250YWN0U2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdjb250YWN0LXNlY3Rpb24nOlxuICAgICAgbW92aWVTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICAgIGVwaXNvZGVTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICAgIGNvbnRhY3RTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxufTtcblxubmF2SXRlbXMuZm9yRWFjaCgobmF2SXRlbSkgPT4ge1xuICBuYXZJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgY29tcG9uZW50SWQgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdzaG93Q29tcG9uZW50Jyk7XG4gICAgc2hvd0NvbXBvbmVudChjb21wb25lbnRJZCk7XG4gIH0pO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHNob3dDb21wb25lbnQ7XG4iLCJleHBvcnQgY29uc3QgcG9zdFJlcXVlc3RMaWtlID0gYXN5bmMgKGl0ZW1JZCkgPT4ge1xuICBjb25zdCBMSUtFU19BUElfRU5EUE9JTlQgPSBwcm9jZXNzLmVudi5MSUtFU19BUElfUEFUSCB8fCAnJztcbiAgZmV0Y2goTElLRVNfQVBJX0VORFBPSU5ULCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogKE51bWJlcihpdGVtSWQpICsgMSkudG9TdHJpbmcoKSxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgIH0sXG4gIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvcik7XG59O1xuZXhwb3J0IGNvbnN0IGFwcGx5TGlrZSA9IGFzeW5jICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhLXJlZ3VsYXIsLmZhLWhlYXJ0JykuZm9yRWFjaCgobGlrZUJ1dHRvbikgPT4ge1xuICAgIGxpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAobGlrZUJ1dHRvbi5jbGFzc05hbWUgPT09ICdmYS1yZWd1bGFyIGZhLWhlYXJ0Jykge1xuICAgICAgICBjb25zdCBpdGVtSWQgPSBsaWtlQnV0dG9uLmlkW2xpa2VCdXR0b24uaWQubGVuZ3RoIC0gMV07XG4gICAgICAgIGNvbnN0IGxpa2VOdW1iZXJUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbGlrZS1udW1iZXItJHtpdGVtSWR9YCk7XG4gICAgICAgIGxpa2VCdXR0b24uY2xhc3NOYW1lID0gJ2ZhLXNvbGlkIGZhLWhlYXJ0JztcbiAgICAgICAgYXdhaXQgcG9zdFJlcXVlc3RMaWtlKGl0ZW1JZCk7XG4gICAgICAgIGNvbnN0IGxpa2VOdW1iZXIgPSBOdW1iZXIobGlrZU51bWJlclRhZy5pbm5lclRleHQpO1xuICAgICAgICBsaWtlTnVtYmVyVGFnLmlubmVyVGV4dCA9IChsaWtlTnVtYmVyICsgMSkudG9TdHJpbmcoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpa2VCdXR0b24uY2xhc3NOYW1lID0gJ2ZhLXJlZ3VsYXIgZmEtaGVhcnQnO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCB7IHBvc3RSZXF1ZXN0TGlrZSwgYXBwbHlMaWtlIH07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvaGVyby1NT1ZJRS1hcHAud2VicFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEuNXJlbSAyJSAwIDIlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiA1JTtcXHJcXG4gIGdhcDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28gcCB7XFxyXFxuICBjb2xvcjogb3JhbmdlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgdGV4dC1zaGFkb3c6XFxyXFxuICAgIDFweCAwIDAgI2ZmZixcXHJcXG4gICAgLTFweCAwIDAgI2ZmZixcXHJcXG4gICAgMCAxcHggMCAjZmZmLFxcclxcbiAgICAwIC0xcHggMCAjZmZmLFxcclxcbiAgICAxcHggMXB4ICNmZmYsXFxyXFxuICAgIC0xcHggLTFweCAwICNmZmYsXFxyXFxuICAgIDFweCAtMXB4IDAgI2ZmZixcXHJcXG4gICAgLTFweCAxcHggMCAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW1zIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiAjZDNkM2QzO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZS1tZW51IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi53cmFwcGVyIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG4gIHBhZGRpbmc6IDM1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTQwMGQzO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZHMge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGdhcDogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ub25lIGltZyB7XFxyXFxuICB3aWR0aDogMjIwcHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItY29udGVudCB7XFxyXFxuICBwYWRkaW5nOiAyLjVyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllX19saWtlcyB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAxM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWNvbnRlbnRfX3RpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMy45dnc7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XFxyXFxuICBsaW5lLWhlaWdodDogMTQwJTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWNvbnRlbnRfX3RpdGxlLXNtYWxsIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxuICBmb250LXNpemU6IDIuOXZ3O1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1jb250ZW50X19kZXNjIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZzogMnJlbSAxN3JlbSAycmVtIDA7XFxyXFxuICBsaW5lLWhlaWdodDogMS4zO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjpob3ZlciB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1wcmltYXJ5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5idG4tc2Vjb25kYXJ5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtc2VjdGlvbiB7XFxyXFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udmlzaWJsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbiNtb3ZpZS1zZWN0aW9uLFxcclxcbiNlcGlzb2RlLXNlY3Rpb24sXFxyXFxuI2NvbnRhY3Qtc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWVfX25hbWUge1xcclxcbiAgZm9udC1zaXplOiAyM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtc2VjdGlvbiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtZGlhbG9nIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtZmlyc3Qtc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtc2Vjb25kLXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAxcmVtIDNyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1pbWFnZSB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgaGVpZ2h0OiAyNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWZlYXR1cmUge1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtZmVhdHVyZS1jb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1mZWF0dXJlLWhlYWRlciB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC10aGlyZC1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZ2FwOiAwLjJyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLXN1bW1hcnkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogMjAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1maXZldGgtc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMC4ycmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY29tbWVudHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAycmVtIDA7XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1pbnB1dCB7XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5mb3JtLXRleHQtYXJlYSB7XFxyXFxuICBoZWlnaHQ6IDVyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5mb3JtLXN1Ym1pdC1idXR0b25zIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogM3JlbTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5mb3JtLXN1Ym1pdC1idXR0b24ge1xcclxcbiAgd2lkdGg6IDVyZW07XFxyXFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1yZWZyZXNoLWJ1dHRvbiB7XFxyXFxuICB3aWR0aDogNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1mb3J0aC1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDAuMjVyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtdXNlcm5hbWUge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWl0ZW1zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAwLjI1cmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy10aXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxyXFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogJ0ZJTEwnIDAsICd3Z2h0JyA0MDAsICdHUkFEJyAwLCAnb3BzeicgNDg7XFxyXFxufVxcclxcblxcclxcbi52aWV3LW1vcmUge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogMC4xNXJlbSAwLjVyZW0gMC4xNXJlbSAwLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi52aWV3LW1vcmU6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5zaG93LW1vcmUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDAuMTVyZW0gMC41cmVtIDAuMTVyZW0gMC41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTY5ZTE7XFxyXFxufVxcclxcblxcclxcbi5zaG93LW1vcmU6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5ib3R0b20tYXJyb3cge1xcclxcbiAgd2lkdGg6IDEwcHg7XFxyXFxuICBoZWlnaHQ6IDEwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgYm94LXNoYWRvdzogLTJweCAycHggMCAjZWM1MjQyO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDclO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIGRlc2t0b3AgdmVyc2lvbiAqL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAuc3Bhbi1mZWF0dXJlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBoZWlnaHQ6IDVyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIG1vYmlsZSB2ZXJzaW9uICovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5uYXYtbGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGlkZS1tZW51IHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6ICdGSUxMJyAwLCAnd2dodCcgNDAwLCAnR1JBRCcgMCwgJ29wc3onIDQ4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcHVwLXNlY29uZC1zZWN0aW9uIHtcXHJcXG4gICAgZ2FwOiAwLjVyZW0gM3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3B1cC1pbWFnZSB7XFxyXFxuICAgIGhlaWdodDogMTVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc3Bhbi1mZWF0dXJlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMzUlO1xcclxcbiAgICBoZWlnaHQ6IDVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGVyLWNvbnRlbnRfX3RpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMXZ3O1xcclxcbiAgICBmb250LXdlaWdodDogODAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTIwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkZXItY29udGVudF9fdGl0bGUtc21hbGwge1xcclxcbiAgICBmb250LXNpemU6IDQuOXZ3O1xcclxcbiAgICBsaW5lLWhlaWdodDogMztcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuM3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkZXItY29udGVudF9fZGVzYyB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtFQUNmLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGVBQWU7RUFDZjs7Ozs7Ozs7bUJBUWlCO0FBQ25COztBQUVBO0VB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bnRlbnRcIjpbXCIqIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxLjVyZW0gMiUgMCAyJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZy1yaWdodDogNSU7XFxyXFxuICBnYXA6IDVyZW07XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHAge1xcclxcbiAgY29sb3I6IG9yYW5nZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gIHRleHQtc2hhZG93OlxcclxcbiAgICAxcHggMCAwICNmZmYsXFxyXFxuICAgIC0xcHggMCAwICNmZmYsXFxyXFxuICAgIDAgMXB4IDAgI2ZmZixcXHJcXG4gICAgMCAtMXB4IDAgI2ZmZixcXHJcXG4gICAgMXB4IDFweCAjZmZmLFxcclxcbiAgICAtMXB4IC0xcHggMCAjZmZmLFxcclxcbiAgICAxcHggLTFweCAwICNmZmYsXFxyXFxuICAgIC0xcHggMXB4IDAgI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtcyB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogI2QzZDNkMztcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUtbWVudSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuICBwYWRkaW5nOiAzNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk0MDBkMztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRzIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBnYXA6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLm9uZSBpbWcge1xcclxcbiAgd2lkdGg6IDIyMHB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL2hlcm8tTU9WSUUtYXBwLndlYnApO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItY29udGVudCB7XFxyXFxuICBwYWRkaW5nOiAyLjVyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllX19saWtlcyB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAxM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWNvbnRlbnRfX3RpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMy45dnc7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XFxyXFxuICBsaW5lLWhlaWdodDogMTQwJTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWNvbnRlbnRfX3RpdGxlLXNtYWxsIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxuICBmb250LXNpemU6IDIuOXZ3O1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1jb250ZW50X19kZXNjIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZzogMnJlbSAxN3JlbSAycmVtIDA7XFxyXFxuICBsaW5lLWhlaWdodDogMS4zO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjpob3ZlciB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1wcmltYXJ5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5idG4tc2Vjb25kYXJ5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtc2VjdGlvbiB7XFxyXFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udmlzaWJsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbiNtb3ZpZS1zZWN0aW9uLFxcclxcbiNlcGlzb2RlLXNlY3Rpb24sXFxyXFxuI2NvbnRhY3Qtc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWVfX25hbWUge1xcclxcbiAgZm9udC1zaXplOiAyM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtc2VjdGlvbiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtZGlhbG9nIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtZmlyc3Qtc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtc2Vjb25kLXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAxcmVtIDNyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1pbWFnZSB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgaGVpZ2h0OiAyNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWZlYXR1cmUge1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtZmVhdHVyZS1jb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1mZWF0dXJlLWhlYWRlciB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC10aGlyZC1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZ2FwOiAwLjJyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLXN1bW1hcnkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogMjAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1maXZldGgtc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMC4ycmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY29tbWVudHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAycmVtIDA7XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1pbnB1dCB7XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5mb3JtLXRleHQtYXJlYSB7XFxyXFxuICBoZWlnaHQ6IDVyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5mb3JtLXN1Ym1pdC1idXR0b25zIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogM3JlbTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5mb3JtLXN1Ym1pdC1idXR0b24ge1xcclxcbiAgd2lkdGg6IDVyZW07XFxyXFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1yZWZyZXNoLWJ1dHRvbiB7XFxyXFxuICB3aWR0aDogNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1mb3J0aC1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDAuMjVyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtdXNlcm5hbWUge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWl0ZW1zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAwLjI1cmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy10aXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxyXFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogJ0ZJTEwnIDAsICd3Z2h0JyA0MDAsICdHUkFEJyAwLCAnb3BzeicgNDg7XFxyXFxufVxcclxcblxcclxcbi52aWV3LW1vcmUge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogMC4xNXJlbSAwLjVyZW0gMC4xNXJlbSAwLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi52aWV3LW1vcmU6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5zaG93LW1vcmUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDAuMTVyZW0gMC41cmVtIDAuMTVyZW0gMC41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTY5ZTE7XFxyXFxufVxcclxcblxcclxcbi5zaG93LW1vcmU6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5ib3R0b20tYXJyb3cge1xcclxcbiAgd2lkdGg6IDEwcHg7XFxyXFxuICBoZWlnaHQ6IDEwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgYm94LXNoYWRvdzogLTJweCAycHggMCAjZWM1MjQyO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDclO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIGRlc2t0b3AgdmVyc2lvbiAqL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAuc3Bhbi1mZWF0dXJlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBoZWlnaHQ6IDVyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIG1vYmlsZSB2ZXJzaW9uICovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5uYXYtbGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGlkZS1tZW51IHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6ICdGSUxMJyAwLCAnd2dodCcgNDAwLCAnR1JBRCcgMCwgJ29wc3onIDQ4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcHVwLXNlY29uZC1zZWN0aW9uIHtcXHJcXG4gICAgZ2FwOiAwLjVyZW0gM3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3B1cC1pbWFnZSB7XFxyXFxuICAgIGhlaWdodDogMTVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc3Bhbi1mZWF0dXJlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMzUlO1xcclxcbiAgICBoZWlnaHQ6IDVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGVyLWNvbnRlbnRfX3RpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMXZ3O1xcclxcbiAgICBmb250LXdlaWdodDogODAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTIwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkZXItY29udGVudF9fdGl0bGUtc21hbGwge1xcclxcbiAgICBmb250LXNpemU6IDQuOXZ3O1xcclxcbiAgICBsaW5lLWhlaWdodDogMztcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuM3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkZXItY29udGVudF9fZGVzYyB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGdldE1vdmllcyB9IGZyb20gJy4uL21vZHVsZXMvZ2V0TW92aWVzLmpzJztcbmltcG9ydCB7IHNob3cgfSBmcm9tICcuLi9tb2R1bGVzL21vdmllcy5qcyc7XG5pbXBvcnQgeyBzaG93Q29tcG9uZW50IH0gZnJvbSAnLi4vbW9kdWxlcy9uYXYuanMnO1xuaW1wb3J0IHsgZmV0Y2hDb21tZW50cywgcG9wdWxhdGVDb21tZW50cyB9IGZyb20gJy4uL21vZHVsZXMvZmV0Y2hDb21tZW50cy5qcyc7XG5pbXBvcnQgeyBnZXRDb21tZW50Q291bnRzIH0gZnJvbSAnLi4vbW9kdWxlcy9nZXRDb21tZW50Q291bnRzLmpzJztcbi8vIGltcG9ydCB7IHJlZnJlc2hCdXR0b24gfSBmcm9tICcuLi9tb2R1bGVzL3V0aWxzLmpzJztcbmltcG9ydCB7IGdldExpa2VzIH0gZnJvbSAnLi4vbW9kdWxlcy9nZXRMaWtlcy5qcyc7XG5pbXBvcnQgeyBhcHBseUxpa2UgfSBmcm9tICcuLi9tb2R1bGVzL3Bvc3RSZXF1ZXN0TGlrZS5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgQkFTRV9DT01NRU5UU19BUEkgPSBwcm9jZXNzLmVudi5CQVNFX0NPTU1FTlRTX0FQSSB8fCAnJztcbmNvbnN0IEFQUF9FTkRQT0lOVF9JRCA9IHByb2Nlc3MuZW52LkFQUF9FTkRQT0lOVF9JRCB8fCAnJztcblxubGV0IGl0ZW1JZCA9ICcnO1xuXG5jb25zdCBzZW5kQ29tbWVudHMgPSBhc3luYyAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGQtY29tbWVudHMnKS5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaXRlbUlkID0gYnV0dG9uLmlkO1xuICAgICAgY29uc3QgaW5wdXROYW1lVGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGlucHV0LW5hbWUtJHtpdGVtSWR9YCk7XG4gICAgICBjb25zdCBpbnB1dENvbW1lbnRzVGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGlucHV0LWNvbW1lbnRzLSR7aXRlbUlkfWApO1xuXG4gICAgICBjb25zdCBBUElFbmRwb2ludCA9IEJBU0VfQ09NTUVOVFNfQVBJLmNvbmNhdChcbiAgICAgICAgYGFwcHMvJHtBUFBfRU5EUE9JTlRfSUR9L2NvbW1lbnRzYCxcbiAgICAgICk7XG5cbiAgICAgIGF3YWl0IGZldGNoKEFQSUVuZHBvaW50LCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaXRlbV9pZDogaXRlbUlkLFxuICAgICAgICAgIHVzZXJuYW1lOiBpbnB1dE5hbWVUYWcudmFsdWUsXG4gICAgICAgICAgY29tbWVudDogaW5wdXRDb21tZW50c1RhZy52YWx1ZSxcbiAgICAgICAgfSksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3IpO1xuXG4gICAgICBpbnB1dE5hbWVUYWcudmFsdWUgPSAnJztcbiAgICAgIGlucHV0Q29tbWVudHNUYWcudmFsdWUgPSAnJztcblxuICAgICAgY29uc3QgQVBJX1BBVEggPSBCQVNFX0NPTU1FTlRTX0FQSS5jb25jYXQoXG4gICAgICAgIGBhcHBzLyR7QVBQX0VORFBPSU5UX0lEfS9jb21tZW50cz9pdGVtX2lkPSR7aXRlbUlkfWAsXG4gICAgICApO1xuICAgICAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBmZXRjaENvbW1lbnRzKEFQSV9QQVRIKTtcblxuICAgICAgcG9wdWxhdGVDb21tZW50cyhjb21tZW50cywgaXRlbUlkKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBmaWxsQ29tbWVudHMgPSBhc3luYyAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52aWV3LW1vcmUnKS5mb3JFYWNoKChkZXRhaWxCdXR0b24pID0+IHtcbiAgICBkZXRhaWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBpdGVtSWQgPSBkZXRhaWxCdXR0b24uaWRbZGV0YWlsQnV0dG9uLmlkLmxlbmd0aCAtIDFdO1xuXG4gICAgICBjb25zdCBBUElfUEFUSCA9IEJBU0VfQ09NTUVOVFNfQVBJLmNvbmNhdChcbiAgICAgICAgYGFwcHMvJHtBUFBfRU5EUE9JTlRfSUR9L2NvbW1lbnRzP2l0ZW1faWQ9JHtpdGVtSWR9YCxcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgZmV0Y2hDb21tZW50cyhBUElfUEFUSCk7XG4gICAgICBjb25zdCBsaXN0SXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgbGlzdEl0ZW1zLmNsYXNzTmFtZSA9ICdjb21tZW50LWl0ZW1zJztcbiAgICAgIHBvcHVsYXRlQ29tbWVudHMoY29tbWVudHMsIGl0ZW1JZCwgbGlzdEl0ZW1zKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBhcnJhbmdlRnVuY3Rpb25SdW5zID0gYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBzaG93KCk7XG4gIHNob3dDb21wb25lbnQoKTtcbiAgYXdhaXQgZ2V0TW92aWVzKCk7XG4gIGF3YWl0IGFwcGx5TGlrZSgpO1xuICBhd2FpdCBnZXRMaWtlcygpO1xuICBhd2FpdCBnZXRDb21tZW50Q291bnRzKEJBU0VfQ09NTUVOVFNfQVBJLCBBUFBfRU5EUE9JTlRfSUQpO1xuICBhd2FpdCBmaWxsQ29tbWVudHMoKTtcbiAgYXdhaXQgc2VuZENvbW1lbnRzKCk7XG59O1xuXG5hcnJhbmdlRnVuY3Rpb25SdW5zKCk7XG5cbi8vIHJlZnJlc2hCdXR0b24oKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==