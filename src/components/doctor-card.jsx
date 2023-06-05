import React from "react";
import "../css/doctor-card.css";

import Doctor from "../assets/img/doctor.jpg";

function DoctorCard() {
  return (
    <div className="card max-w-xs outline outline-nethraBlue p-4 rounded-2xl lg:relative overflow-hidden">
      <div className="mb-6 lg:mb-0">
        <img
          src={Doctor}
          alt=""
          className="w-full rounded-lg aspect-square lg:h-80 object-cover mb-3 lg:mb-6"
        />
        <div className="capitalize text-center">
          <h4 className="font-medium text-2xl">Dr. jane doe</h4>
          <p className="italic">eye surgeon</p>
        </div>
      </div>
      <div className="schedule lg:absolute lg:top-full lg:opacity-0 lg:p-4 lg:left-0 lg:bg-nethraBlue lg:outline lg:outline-nethraBlue lg:rounded-2xl lg:min-h-full lg:min-w-full lg:flex lg:flex-col capitalize lg:text-white lg:ease-in-out lg:transition-all lg:duration-300">
        <p className="hidden lg:block lg:text-center lg:py-5 text-lg">
          Appointment Hours
        </p>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between px-3">
            <p>monday</p>
            <p>7.30AM - 6.30PM</p>
          </div>
          <hr className="lg:opacity-50" />

          <div className="flex justify-between px-3">
            <p>monday</p>
            <p>7.30AM - 6.30PM</p>
          </div>
          <hr className="lg:opacity-50" />
          <div className="flex justify-between px-3">
            <p>Saturday</p>
            <p>9.30AM - 5.30PM</p>
          </div>
          <hr className="lg:opacity-50" />
          <div className="flex justify-between px-3">
            <p>Sunday</p>
            <p>10.30AM - 6.30PM</p>
          </div>
          <hr className="lg:opacity-50" />
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;
