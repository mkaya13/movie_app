## 📖 Amazin Movies

- A platform for movies/TV shows, where users can like, look at the details and comments on their favourite movie shows. Furthermore, users are able to see other detailed information such as imdb rating, duration of the shows, genres, language, etc of the movies.

## 🚀 Live Demo

[Click here for live demo](https://mkaya13.github.io/movie_app/dist/index.html)

## 🛠 Built With

- HTML

- CSS

- JavaScript

- APIs

## Summary of Tasks

- Add `scripts` folder which runs node.js files for creating corresponding API endpoints with post requests, and checks the API endpoints with get request to test whether they hold data or not.

- `modules` folder are responsible for holding the javascript functions for website operations such as implementing comments, likes, popup, etc functionalities.

- `dist` folder is the output of the webpack that will be used to compile our code inside `src` so that we can compile and use every single libraries that we are working.

- `webpack.config.js` is the config file for webpack.

- Inside our `src` code we have `index.html` that is the base file for our HTML code, `index.js` that is the base file for js codes and `style.css` is responsible for whole styling.

- We have linters file for checking html, css and javascript syntax.

- `__mocks__` and `tests` are responsible for applying unity and integration tests.

- We also store API credentials data but we hide them.

## 💻 SETUP PROJECT

- `npm install` --> For uploading all the necessary packages.

## Run Webpack

- `npm run build`
- `npm start`

## Link to Kanban board

- [Click here](https://github.com/mkaya13/movie_app/projects/2)

## Install Linters

- `npm install hint@7.x stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x --save-dev`

- configure `.hintrc`

- configure `.styleintrc.json`

- configure `.eslintrc.json`

## Run Linters

- `npx hint .`
- `npx stylelint "**/*.{css,scss}"`
- `npx eslint .`

## Environment Variables

- Create an .env file in home path and add the necessary credentials for the project. (And hide it!)

## Node Modules

- Add `"type": "module"` inside package.json

- Run `1-createCommentsAPIEndpoint.js` to create app ID for the API endpoint that we will use for storing data.

  Then add the appId which comes from step 1 as a response to inside `.env` file.

- Run `scripts/2-fillCommentsAPI.js` which sends a post request to add a comment for item 1 inside API endpoint that is responsible for storing API data.

- Run `3-getRequestCommentsAPI.js` sends a get request for retrieving the stored comments data for corresponding item.

- Run `4-postRequestForLikes.js` sends a post request for adding a like inside like API endpoint for storing data.

- Run `5-getAllLikes.js` sends a get request to retrieve data stored for all items.

## 👥 Authors

👤 Mert Kaya

- GitHub: [@mkaya](https://github.com/mkaya13)
- Twitter: [@mkaya133](https://twitter.com/mkaya133)
- LinkedIn: [@mert-kaya](https://www.linkedin.com/in/mert-kaya-0732b717b/)

👤 Seko Dameh

- GitHub: [@SekoViper](https://github.com/SekoViper)
- Twitter: [@SekoViper](https://twitter.com/SekoViper)
- LinkedIn: [@livingstone-dameh](https://www.linkedin.com/in/livingstone-dameh-b755a5151/)

## 🔭 Future Features

- [ ] Improve user experience and interface design.
- [ ] Add a filtering future with respect to movie genres.
- [ ] Sort the movies with respect to their IMDB rating.
- [ ] Add show more button so that users can see more movies in the front end.
- [ ] Add comments edit check

## 🤝 Contributing

- Contributions, issues, and feature requests are welcome!

- Feel free to check the [issues page](https://github.com/mkaya13/movie_app/issues)

## Show your support

- Give a ⭐️ if you like this project!

## 📝 License

- This project is [MIT](./LICENSE) licensed.
