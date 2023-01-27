import React from "react";

const Image = ({ image }) => {
  return (
    <div className="carousel-item relative float-left w-full h-full">
      <img src={image} className="block w-full h-full" alt="..." />
      <div className="carousel-caption hidden md:block absolute text-center">
        {/* <h5 className="text-xl">Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p> */}
      </div>
    </div>
  );
};

export default Image;
