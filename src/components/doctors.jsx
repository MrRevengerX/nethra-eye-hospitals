import React from "react";
import DoctorCard from "./doctor-card";

function Doctors() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col px-5">
      <div className="text-center pb-8 lg:max-w-2xl lg:mx-auto">
        <h1 className="font-semibold text-4xl pb-3 lg:text-5xl">Doctors</h1>
        <p>
          Our team of experienced ophthalmologists and optometrists is dedicated
          to providing personalized and compassionate eye care using the latest
          technologies and techniques.
        </p>
      </div>
      <DoctorCard />
    </div>
  );
}

export default Doctors;
