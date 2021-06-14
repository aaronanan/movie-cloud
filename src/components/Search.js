import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { searchMovie } from "../api";
import { IoStar } from "react-icons/io5";

const Search = () => {
  let { value } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    searchMovie(value).then((result) => setSearchResults(result));
  }, [value]);

  //   if (searchResults.total_results == 0) {
  //     return <h1 className="text-white">NOTHING LOADED</h1>;
  //   }

  if (searchResults.results == undefined) return <div></div>;

  return (
    <div>
      <h1 className="text-white text-center mt-20 text-2xl font-medium uppercase">
        Search Results For {value}
      </h1>
      <hr className="search-hr-seperator mb-12 mx-auto mt-6" />

      <div className="flex flex-row flex-wrap md:w-3/4 sm:w-0.9 mx-auto justify-center">
        {searchResults.results
          .filter((movie) => movie.poster_path != null)
          .map((movie) => (
            <a onClick={() => console.log("test")}>
              <div className="hover:scale-100 transform scale-90 duration-150 opacity-80 hover:opacity-100">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  className="sm:w-48 w-40"
                />
                <h1 className="text-white text-md font-semibold sm:w-48 w-40">
                  {movie.title}
                </h1>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
};

export default Search;
