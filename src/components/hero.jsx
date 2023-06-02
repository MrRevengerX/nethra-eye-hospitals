import React from "react";

import heroImg1 from "../assets/img/hero-img-1.png";
import heroImg2 from "../assets/img/hero-img-2.png";

function Hero() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center text-center  p-6 md:max-w-2xl mx-auto lg:grid lg:grid-cols-2	lg:gap-20 lg:max-w-6xl">
      <div className="flex flex-col gap-5 md:gap-10 lg:order-2">
        <h2 className="text-xl font-medium md:text-3xl lg:text-2xl">
          Welcome to <span className="text-nethraBlue">Nethra Eye Care</span>
        </h2>
        <h1 className="text-4xl font-medium uppercase md:text-5xl lg:text-4xl">
          Elevate your vision to new heights
        </h1>
        <p className="text-sm font-light md:text-lg lg:text-base">
          Where we're committed to protecting your sight and enhancing your
          vision. Trust us for personalized eye care and a world of clarity.
        </p>
      </div>

      <div className="relative w-96 md:max-w-xl h-80 md:scale-90 md:h-96 lg:md:w-[500px] lg:order-1 lg:scale-90 lg:-ml-10">
        <img
          src={heroImg1}
          className="rounded-2xl absolute top-0 right-9 scale-50 md:scale-75 lg:-left-9 lg:-top-14"
          alt=""
        />
        <img
          src={heroImg2}
          className="rounded-xl absolute top-10 left-9 scale-50 md:scale-75 lg:left-28"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
