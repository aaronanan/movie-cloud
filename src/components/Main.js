import { useEffect, useState } from "react";
import { movieList, getPopular, getTopRated, getNowPlaying } from "../api";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Main = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  const [movies, setMovies] = useState(null);
  const [popMovies, setPopMovies] = useState(null);
  const [topMovies, setTopMovies] = useState(null);
  //   const [nowPlaying, setNowPlaying] = useState(null);

  useEffect(() => {
    movieList().then((result) => setMovies(result));
    getPopular().then((result) => setPopMovies(result));
    getTopRated().then((result) => setTopMovies(result));
    // getNowPlaying().then((result) => setNowPlaying(result));
  }, []);

  if (movies == null) {
    return <div>Loading...</div>;
  }

  if (popMovies == null) {
    return <div>Loading...</div>;
  }

  if (topMovies == null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pb-40">
      <div className="sm:relative text-white h-full z-0">
        <img
          src="https://image.tmdb.org/t/p/original/6ELCZlTA5lGUops70hKdB83WJxH.jpg"
          alt="Snow"
          className="xl:object-cover xl:w-full img-cover md:opacity-60 opacity-100"
        />
        <div className="sm:absolute bottom-24 left-24 hidden sm:block">
          <p className="text-xl uppercase text-gray-300">Latest</p>
          <p className="text-3xl">Mortal Kombat</p>
          <p className="text-xl text-gray-100">Action / Fantasy | 7.6 Rating</p>
        </div>
      </div>
      <div className="w-4/5 ml-auto mr-auto mt-12">
        <h1 className="ml-2.5 text-2xl font-bold mb-2 text-white uppercase tracking-wider">
          Upcoming
        </h1>

        <Carousel
          responsive={responsive}
          infinite={true}
          draggable={false}
          itemClass="flex justify-center"
        >
          {movies.map((movie) => (
            <a onClick={() => console.log("test")}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className="hover:scale-100 transform scale-90 duration-75 w-48 opacity-80 hover:opacity-100"
              />
            </a>
          ))}
        </Carousel>
      </div>

      <hr className="hr-seperator mt-12" />

      <div className="w-4/5 ml-auto mr-auto mt-12">
        <h1 className="ml-2.5 text-2xl font-bold mb-2 text-white uppercase">
          Popular
        </h1>

        <Carousel
          responsive={responsive}
          infinite={true}
          draggable={false}
          itemClass="flex justify-center"
        >
          {popMovies.map((movie) => (
            <a onClick={() => console.log("test")}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className="hover:scale-100 transform scale-90 duration-150 w-48 opacity-80 hover:opacity-100"
              />
            </a>
          ))}
        </Carousel>
      </div>

      <hr className="hr-seperator mt-12" />

      <div className="w-4/5 ml-auto mr-auto mt-12">
        <h1 className="ml-2.5 text-2xl font-bold mb-2 text-white uppercase">
          Top Rated
        </h1>

        <Carousel
          responsive={responsive}
          infinite={true}
          draggable={false}
          itemClass="flex justify-center"
        >
          {topMovies.map((movie) => (
            <a onClick={() => console.log("test")}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className="hover:scale-100 transform scale-90 duration-150 w-48 opacity-80 hover:opacity-100"
              />
            </a>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Main;
