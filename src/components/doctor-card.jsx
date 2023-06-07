import React from "react";
import "../css/doctor-card.css";

function DoctorCard(props) {
  return (
    <div className="card max-w-xs outline outline-nethraBlue p-4 rounded-2xl lg:relative lg:overflow-hidden min-w-[320px] ml-3 md:ml-6 lg:ml-3">
      <div className="mb-6 lg:mb-0">
        <img
          src={props.img}
          alt=""
          className="w-full rounded-lg aspect-square lg:h-80 object-cover mb-3 lg:mb-6"
        />
        <div className="capitalize text-center">
          <h4 className="font-medium text-2xl">{props.name}</h4>
          <p className="italic">{props.speci}</p>
        </div>
      </div>
      <div className="schedule lg:absolute lg:top-full lg:opacity-0 lg:p-4 lg:left-0 lg:bg-nethraBlue lg:outline lg:outline-nethraBlue lg:rounded-2xl lg:min-h-full lg:min-w-full lg:flex lg:flex-col capitalize lg:text-white lg:ease-in-out lg:transition-all lg:duration-300">
        <p className="hidden lg:block lg:text-center lg:py-5 text-lg">
          Appointment Hours
        </p>
        <div className="flex flex-col gap-3">
          {props.monday && (
            <div className="">
              <div className="flex justify-between px-3 mb-3">
                <p>Monday</p>
                <p>{props.monday}</p>
              </div>
              <hr className="lg:opacity-50" />
            </div>
          )}

          {props.tuesday && (
            <div className="">
              <div className="flex justify-between px-3 mb-3">
                <p>Tuesday</p>
                <p>{props.tuesday}</p>
              </div>
              <hr className="lg:opacity-50" />
            </div>
          )}

          {props.wednesday && (
            <div className="">
              <div className="flex justify-between px-3 mb-3">
                <p>Wednesday</p>
                <p>{props.wednesday}</p>
              </div>
              <hr className="lg:opacity-50" />
            </div>
          )}

          {props.thursday && (
            <div className="">
              <div className="flex justify-between px-3 mb-3">
                <p>Thursday</p>
                <p>{props.thursday}</p>
              </div>
              <hr className="lg:opacity-50" />
            </div>
          )}

          {props.friday && (
            <div className="">
              <div className="flex justify-between px-3 mb-3">
                <p>Friday</p>
                <p>{props.friday}</p>
              </div>
              <hr className="lg:opacity-50" />
            </div>
          )}

          {props.saturday && (
            <div className="">
              <div className="flex justify-between px-3 mb-3">
                <p>Saturday</p>
                <p>{props.saturday}</p>
              </div>
              <hr className="lg:opacity-50" />
            </div>
          )}

          {props.sunday && (
            <div className="">
              <div className="flex justify-between px-3 mb-3">
                <p>Sunday</p>
                <p>{props.sunday}</p>
              </div>
              <hr className="lg:opacity-50" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;
