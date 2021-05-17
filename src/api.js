export const movieList = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=12a5356516535d4d67654a936a088c1b"
  );
  const data = await res.json();
  console.log(data.results);
  return data.results;
};

export const getImage = (url) => {
  return `https://image.tmdb.org/t/p/original/${url}`;
};

export const getPopular = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=12a5356516535d4d67654a936a088c1b"
  );
  const data = await res.json();
  return data.results;
};

export const getTopRated = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=12a5356516535d4d67654a936a088c1b"
  );
  const data = await res.json();
  return data.results;
};
export const getNowPlaying = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=12a5356516535d4d67654a936a088c1b"
  );
  const data = await res.json();
  return data.results;
};
