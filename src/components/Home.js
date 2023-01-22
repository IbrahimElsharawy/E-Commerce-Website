import React from "react";
import bg from "../assets/bg.avif";

const Home = () => {
  return (
    <div className="w-full">
      <div className="max-h-[600px] relative -z-10">
        <div className="absolute bg-black/40 w-full h-full max-h-[600px]  ">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">
            <h1 className=" text-2xl sm:text-3xl md:text-5xl lg:text-6lg font-bold uppercase text-white mb-5 ">
              new season arrivals
            </h1>
            <p className=" text-xl sm:text-2xl md:text-3xl lg:text-4lg uppercase text-white  ">
              check out all the trends
            </p>
          </div>
        </div>
        <img className="w-full max-h-[600px] object-cover" src={bg} alt="/" />
      </div>
    </div>
  );
};

export default Home;
