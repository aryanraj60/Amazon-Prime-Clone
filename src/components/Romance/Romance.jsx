import React from "react";
import { selectRomace } from "../../features/movie/movieSlice";
import { useSelector } from "react-redux";
import RomanceCard from "./RomanceCard";

const Romance = () => {
  const movies = useSelector(selectRomace);

  return (
    <div className="w-full px-5 h-60 md:h-72 my-8 overflow-x-auto overflow-y-hidden">
      <div className="w-full h-full">
        <h2 className="text-xl md:text-2xl py-2 text-gray-300">Romance</h2>

        <div className="h-[80%] flex flex-row gap-4 justify-between items-center">
          {movies ? (
            movies.map((movie) => <RomanceCard key={movie.id} movie={movie} />)
          ) : (
            <div className="h-full w-full">
              <div class="flex justify-center items-center">
                <div
                  class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
                  role="status"
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Romance;
