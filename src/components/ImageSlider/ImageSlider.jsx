import React from "react";
import Image from "./Image";

const imageSlider = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide relative overflow-hidden h-48 md:h-96 mt-3"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div className="carousel-inner relative w-full h-full overflow-hidden">
        <div className="carousel-item active relative float-left w-full h-full">
          <img
            src={
              "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_Fall/bbe24bee-f556-4548-b38e-787c3d970d81._UR3000,600_SX1500_FMwebp_.jpeg"
            }
            className="block w-full h-full"
            alt="..."
          />
          <div className="carousel-caption hidden md:block absolute text-center">
            {/* <h5 className="text-xl">First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p> */}
          </div>
        </div>
        <Image
          image={
            "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_ZackSnyderJusticeLeague/6450b104-9933-41d6-ae2d-0c3f446b8159._UR3000,600_SX1500_FMwebp_.jpeg"
          }
        />
        <Image
          image={
            "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_Enforcer/5e8d6502-fc4f-4e40-8155-ebc96865fb33._UR3000,600_SX1500_FMwebp_.jpeg"
          }
        />
        <Image
          image={
            "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_TicketToParadise_119/9c8a74db-43cb-47dc-a294-29495ecc60bb._UR3000,600_SX1500_FMwebp_.jpeg"
          }
        />
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default imageSlider;
