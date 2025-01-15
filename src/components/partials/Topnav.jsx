import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.webp";

function Topnav() {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    GetSearches();
  }, [query]);

  return (
    <div className="w-[80%] h-[10vh] relative flex mx-auto items-center ">
      <i className="text-3xl text-zinc-400 ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[80%] h-[60%] text-white text-center mx-10 text-xl p-5 outline-none border-none bg-zinc-600 rounded-full"
        type="text"
        placeholder="search anything..."
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className=" text-3xl text-zinc-400 ri-close-fill right-0"
        ></i>
      )}

      <div className="z-[100] w-[82%] max-h-[40vh] bg-zinc-800 absolute top-[100%] left-[5%] overflow-auto scrollbar-hide rounded">
        {searches.map((s, i) => (
          <Link
            to={`/${s.media_type}/details/${s.id}`}
            key={i}
            className="hover:text-zinc-100 hover:bg-[#6556cd] duration-300 font-semibold text-zinc-400 w-[100%] p-4 flex justify-start items-center border-b-2 border-zinc-500 "
          >
            <img
              className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg "
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path
                    }`
                  : noimage
              }
              alt=""
            />
            <span>
              {s.name || s.title || s.original_name || s.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Topnav;
