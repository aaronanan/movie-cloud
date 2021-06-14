import { useEffect, useState } from "react";
import {
  movieList,
  getPopular,
  getTopRated,
  getNowPlaying,
  genreList,
} from "../api";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoStar } from "react-icons/io5";

const Main = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  const [movies, setMovies] = useState(null);
  const [popMovies, setPopMovies] = useState(null);
  const [topMovies, setTopMovies] = useState(null);
  const [genres, setGenres] = useState([]);
  //   const [nowPlaying, setNowPlaying] = useState(null);

  useEffect(() => {
    movieList().then((result) => setMovies(result));
    getPopular().then((result) => setPopMovies(result));
    getTopRated().then((result) => setTopMovies(result));
    genreList().then((result) => setGenres(result));
    // getNowPlaying().then((result) => setNowPlaying(result));
  }, []);

  if (movies == null) {
    return <div></div>;
  }

  if (popMovies == null) {
    return <div></div>;
  }

  if (topMovies == null) {
    return <div></div>;
  }

  //TODO:
  // 1. Click Poster for more info
  // 2. Main Image Background Image make it work dynamically
  // 3. Add Genres for each poster dynamically

  return (
    <div className="pb-40">
      <div className="relative text-white h-full z-0">
        <img
          src="https://image.tmdb.org/t/p/original/6ELCZlTA5lGUops70hKdB83WJxH.jpg"
          alt="Snow"
          className="xl:object-cover xl:w-full img-cover opacity-60"
        />
        <div className="absolute sm:bottom-24 sm:left-24 bottom-10 left-10">
          <p className="text-xl uppercase text-gray-300">Latest</p>
          <p className="text-3xl">Mortal Kombat</p>
          <p className="text-xl text-gray-100">Action / Fantasy | 7.6 Rating</p>
        </div>
      </div>
      <div className="w-4/5 ml-auto mr-auto mt-12" id="upcoming">
        <h1 className="ml-2.5 text-2xl font-bold mb-2 text-white uppercase tracking-wider">
          Upcoming
        </h1>

        <Carousel
          responsive={responsive}
          infinite={true}
          draggable={false}
          swipeable={false}
          itemClass="flex justify-center"
        >
          {movies.map((movie) => (
            <a onClick={() => console.log("test")}>
              <div className="hover:scale-100 transform scale-90 duration-75 opacity-70 hover:opacity-100">
                <div className="absolute text-white flex flex-row items-center ml-1 mt-1">
                  <IoStar />
                  <h1 className="ml-1">{movie.vote_average}</h1>
                </div>

                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  className="w-48"
                />
                <h1 className="text-white text-md font-semibold">
                  {movie.title}
                </h1>
              </div>
            </a>
          ))}
        </Carousel>
      </div>

      <hr className="hr-seperator mt-12" />

      <div className="w-4/5 ml-auto mr-auto mt-12" id="popular">
        <h1 className="ml-2.5 text-2xl font-bold mb-2 text-white uppercase">
          Popular
        </h1>

        <Carousel
          responsive={responsive}
          swipeable={false}
          infinite={true}
          draggable={false}
          itemClass="flex justify-center"
        >
          {popMovies.map((movie) => (
            <a onClick={() => console.log("test")}>
              <div className="hover:scale-100 transform scale-90 duration-75 opacity-70 hover:opacity-100">
                <div className="absolute text-white flex flex-row items-center ml-1 mt-1">
                  <IoStar />
                  <h1 className="ml-1">{movie.vote_average}</h1>
                </div>

                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  className="w-48"
                />
                <h1 className="text-white text-md font-semibold">
                  {movie.title}
                </h1>
              </div>
            </a>
          ))}
        </Carousel>
      </div>

      <hr className="hr-seperator mt-12" />

      <div className="w-4/5 ml-auto mr-auto mt-12" id="toprated">
        <h1 className="ml-2.5 text-2xl font-bold mb-2 text-white uppercase">
          Top Rated
        </h1>

        <Carousel
          responsive={responsive}
          infinite={true}
          swipeable={false}
          draggable={false}
          itemClass="flex justify-center"
        >
          {topMovies.map((movie) => (
            <a onClick={() => console.log("test")}>
              <div className="hover:scale-100 transform scale-90 duration-75 opacity-70 hover:opacity-100">
                <div className="absolute text-white flex flex-row items-center ml-1 mt-1">
                  <IoStar />
                  <h1 className="ml-1">{movie.vote_average}</h1>
                </div>

                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  className="w-48"
                />
                <h1 className="text-white text-md font-semibold">
                  {movie.title}
                </h1>
              </div>
            </a>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Main;
