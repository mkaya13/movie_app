import { getMovies } from '../modules/getMovies.js';
import { show } from '../modules/movies.js';
import { showComponent } from '../modules/nav.js';
import './style.css';

getMovies();
show();
showComponent();