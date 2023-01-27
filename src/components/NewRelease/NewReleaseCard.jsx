import React from "react";

const NewReleaseCard = ({ movie: { cardImg } }) => {
  return (
    <img
      className="h-full border-4 border-gray-800 hover:border-white hover:scale-105 transition duration-300 ease-in-out rounded-xl shadow-lg shadow-slate-800"
      src={cardImg}
    />
  );
};

export default NewReleaseCard;
