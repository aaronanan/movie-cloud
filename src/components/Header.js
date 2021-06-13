import { useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { IoMenu, IoClose, IoFilmOutline } from "react-icons/io5";

const Header = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMenu = () => {
    setMenuClicked(!menuClicked);
  };

  return (
    <>
      <div className="h-16 bg-gray-800 flex-row flex items-center justify-between">
        <div className="pl-2 md:pl-5">
          <a className="flex-row flex items-center" href="#">
            <IoFilmOutline color="white" className="mr-1" />
            <h1 className="text-white uppercase font-medium">Movie</h1>
            <h1 className="text-blue-400 uppercase ml-1 font-medium">Cloud</h1>
          </a>
        </div>
        <div className="px-3 md:px-0">
          <input
            type="search"
            name="serch"
            placeholder="Search"
            class="px-4 rounded-l-full rounded-r-full text-sm focus:outline-none items-center sm:h-9 h-8 lg:w-80 w-70"
          />
        </div>
        <div className="text-white hidden md:block">
          <a
            href="#"
            className="mr-7 focus:text-blue-400 hover:border-blue-400 border-b-2 border-transparent pb-1"
          >
            Upcoming
          </a>
          <a
            href="#"
            className="mr-7 focus:text-blue-400 hover:border-blue-400 border-b-2 border-transparent pb-1"
          >
            Popular
          </a>
          <a
            href="#"
            className="mr-7 focus:text-blue-400 hover:border-blue-400 border-b-2 border-transparent pb-1"
          >
            Top Rated
          </a>
        </div>
        {!menuClicked ? (
          <IoMenu
            size={32}
            className="w-18 md:hidden"
            color="white"
            onClick={toggleMenu}
          />
        ) : (
          <IoClose
            size={32}
            color="white"
            onClick={toggleMenu}
            className="w-18 md:hidden"
          />
        )}
      </div>
      {menuClicked && (
        <div className="h-32 bg-gray-800 flex-col absolute z-50 w-full">
          <div className="py-2 ml-4 text-gray-100">
            <a href="#">Upcoming</a>
          </div>
          <div className="py-2 ml-4 text-gray-100">
            <a href="#">Popular</a>
          </div>
          <div className="py-2 ml-4 text-gray-100">
            <a href="#">Top Rated</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

// {/* <Popover className="sticky bg-white top-0 z-50">
//       {({ open }) => (
//         <>
//           <div className="max-w-7xl mx-auto px-4 sm:px-6">
//             <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:space-x-10">
//               <div className="flex justify-start">
//                 <a href="#">
//                   <span className="sr-only">Workflow</span>
//                   <img
//                     className="h-8 w-auto sm:h-10"
//                     src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
//                     alt=""
//                   />
//                 </a>
//               </div>
//               <div class="w-55 h-10 cursor-pointer border border-gray-300 text-sm rounded-full flex md:hidden">
//                 <input
//                   type="search"
//                   name="serch"
//                   placeholder="Search"
//                   class="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none items-center"
//                 />
//               </div>
//               <div className="-mr-2 -my-2 md:hidden">
//                 <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
//                   <span className="sr-only">Open menu</span>
//                   <MenuIcon className="h-6 w-6" aria-hidden="true" />
//                 </Popover.Button>
//               </div>
//               <div class="w-full md:w-1/3 h-10 cursor-pointer border border-gray-300 text-sm rounded-full md:flex hidden">
//                 <input
//                   type="search"
//                   name="serch"
//                   placeholder="Search"
//                   class="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none items-center"
//                 />
//               </div>
//               <Popover.Group as="nav" className="hidden md:flex space-x-10">
//                 <a
//                   href="#"
//                   className="text-base font-medium text-gray-500 hover:text-gray-900 hover:border-indigo-600 border-b-2 border-transparent"
//                 >
//                   Home
//                 </a>
//                 <a
//                   href="#"
//                   className="text-base font-medium text-gray-500 hover:text-gray-900 hover:border-indigo-600 border-b-2 border-transparent"
//                 >
//                   Discover
//                 </a>
//                 <a
//                   href="#"
//                   className="text-base font-medium text-gray-500 hover:text-gray-900 hover:border-indigo-600 border-b-2 border-transparent"
//                 >
//                   Profile
//                 </a>
//               </Popover.Group>
//               {/* <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
//                 <a
//                   href="#"
//                   className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
//                 >
//                   Sign in
//                 </a>
//                 <a
//                   href="#"
//                   className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
//                 >
//                   Sign up
//                 </a>
//               </div> */}
//             </div>
//           </div>

//           <Transition
//             show={open}
//             as={Fragment}
//             enter="duration-200 ease-out"
//             enterFrom="opacity-0 scale-95"
//             enterTo="opacity-100 scale-100"
//             leave="duration-100 ease-in"
//             leaveFrom="opacity-100 scale-100"
//             leaveTo="opacity-0 scale-95"
//           >
//             <Popover.Panel
//               focus
//               static
//               className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
//             >
//               <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
//                 <div className="pt-5 pb-6 px-5">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <img
//                         className="h-8 w-auto"
//                         src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
//                         alt="Workflow"
//                       />
//                     </div>

//                     <div className="-mr-2">
//                       <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
//                         <span className="sr-only">Close menu</span>
//                         <XIcon className="h-6 w-6" aria-hidden="true" />
//                       </Popover.Button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="py-6 px-5 space-y-6 z-50">
//                   <div className="grid grid-cols-1 gap-y-4 gap-x-8">
//                     <a
//                       href="#"
//                       className="text-base font-medium text-gray-900 hover:text-gray-700"
//                     >
//                       Home
//                     </a>

//                     <a
//                       href="#"
//                       className="text-base font-medium text-gray-900 hover:text-gray-700"
//                     >
//                       Discover
//                     </a>
//                     <a
//                       href="#"
//                       className="text-base font-medium text-gray-900 hover:text-gray-700"
//                     >
//                       Profile
//                     </a>
//                   </div>
//                   <div>
//                     <a
//                       href="#"
//                       className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
//                     >
//                       Sign up
//                     </a>
//                     <p className="mt-6 text-center text-base font-medium text-gray-500">
//                       Existing user?{" "}
//                       <a
//                         href="#"
//                         className="text-indigo-600 hover:text-indigo-500"
//                       >
//                         Sign in
//                       </a>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </Popover.Panel>
//           </Transition>
//         </>
//       )}
//     </Popover> */}
