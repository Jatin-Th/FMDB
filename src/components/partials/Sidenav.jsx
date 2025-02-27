import React from "react";
import { Link } from "react-router-dom";

function Sidenav() {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 px-5 py-3 overflow-auto ">
      <h1 className="text-2xl text-white font-bold ">
        <i className="text-[#6556cd] ri-tv-fill mr-2 "></i>
        <span className="text-2xl ">FMDB</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-xl gap-2 ">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5 ">
          New Feeds
        </h1>
        <Link to='/trending' className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-5  ">
          <i className="mr-2 ri-fire-fill"></i>
          Trending
        </Link>
        <Link to='/popular' className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-5  ">
          <i className="mr-2 ri-magic-fill"></i>
          Popular
        </Link>
        <Link to='movie' className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-5  ">
          <i className="mr-2 ri-movie-2-line"></i>
          Movies
        </Link>
        <Link to='tv' className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-5  ">
          <i className="mr-2 ri-tv-line"></i>
          TV Shows
        </Link>
        <Link to='person' className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-5  ">
          <i className="mr-2 ri-user-5-line"></i>
          People
        </Link>
      </nav>

      <hr className="border-none h-[1px] bg-zinc-400 " />

      <nav className="flex flex-col text-zinc-400 text-xl gap-3 ">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5 ">
          Website Info.
        </h1>
        <Link className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-5  ">
          <i className="mr-2 ri-information-line"></i>
          About FMDB
        </Link>
        <Link className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-5  ">
          <i className="mr-2 ri-contacts-line"></i>
          Contact Us
        </Link>
      </nav>
    </div>
  );
}

export default Sidenav;
