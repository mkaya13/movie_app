const APIUrl = process.env.BASE_MOVIE_API;

export const getMovies = async () => {
  const response = await fetch(APIUrl);
  const movies = await response.json();
  console.log(movies);
  return movies;
};

export default getMovies;