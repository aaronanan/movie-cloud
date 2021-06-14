import { useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { IoMenu, IoClose, IoFilmOutline, IoSearchSharp } from "react-icons/io5";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMenu = () => {
    setMenuClicked(!menuClicked);
  };

  const handleSearch = (e) => {
    !e.target.value
      ? history.push(`/`)
      : history.push(`/search-results/${e.target.value}`);
  };

  return (
    <>
      <div className="h-16 bg-gray-800 flex-row flex items-center justify-between">
        <div className="pl-2 md:pl-5">
          <Link className="flex-row flex items-center" to="/">
            <IoFilmOutline color="white" className="mr-1" />
            <h1 className="text-white uppercase font-medium">Movie</h1>
            <h1 className="text-blue-400 uppercase ml-1 font-medium">Cloud</h1>
          </Link>
        </div>
        <div className="pr-3 md:px-0 flex-row flex items-center">
          <input
            type="text"
            name="search"
            placeholder="Search"
            class="px-4 rounded-l-full rounded-r-full text-sm focus:outline-none items-center sm:h-9 h-8 lg:w-80 w-70"
            onChange={handleSearch}
          />
          <IoSearchSharp className="sm:-ml-10 -ml-8 text-blue-400" size={20} />
        </div>
        <div className="text-white hidden md:block">
          <a
            href="/#upcoming"
            className="mr-7 hover:border-blue-400 border-b-2 border-transparent pb-1"
          >
            Upcoming
          </a>
          <a
            href="/#popular"
            className="mr-7 hover:border-blue-400 border-b-2 border-transparent pb-1"
          >
            Popular
          </a>
          <a
            href="/#toprated"
            className="mr-7 hover:border-blue-400 border-b-2 border-transparent pb-1"
          >
            Top Rated
          </a>
        </div>
        {!menuClicked ? (
          <IoMenu
            size={32}
            className="w-18 md:hidden mr-1"
            color="white"
            onClick={toggleMenu}
          />
        ) : (
          <IoClose
            size={32}
            color="white"
            onClick={toggleMenu}
            className="w-18 md:hidden mr-1"
          />
        )}
      </div>
      {menuClicked && (
        <div className="h-32 bg-gray-800 flex-col absolute z-50 w-full">
          <div className="py-2 ml-4 text-gray-100">
            <a href="/#upcoming">Upcoming</a>
          </div>
          <div className="py-2 ml-4 text-gray-100">
            <a href="/#popular">Popular</a>
          </div>
          <div className="py-2 ml-4 text-gray-100">
            <a href="/#toprated">Top Rated</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
