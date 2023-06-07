import React from "react";
import DoctorCard from "./doctor-card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

// Create a disctionary with id, name, speciality
const doctors = [
  {
    id: 1,
    name: "Ravindu Senarathna",
    speciality: "eye specialist",
  },
  {
    id: 2,
    name: "Devmal Amantha",
    speciality: "skin specialist",
  },
  {
    id: 3,
    name: "Ravindu",
    speciality: "Speciality",
  },
  {
    id: 4,
    name: "Ravindu",
    speciality: "Speciality",
  },
  {
    id: 5,
    name: "Ravindu",
    speciality: "Speciality",
  },
  {
    id: 6,
    name: "Ravindu",
    speciality: "Speciality",
  },
];

function Doctors(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 670 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 670, min: 0 },
      items: 1,
    },
  };

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
      <div className="container lg:max-w-5xl">
        <Carousel
          className="py-5"
          swipeable={true}
          arrows={true}
          draggable={true}
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={1000}
          showDots={true}
          keyBoardControl={true}
          centerMode={false}
          transitionDuration={500}
          containerClass="container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {props.doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              name={doctor.name}
              speci={doctor.specialty}
              img={doctor.image.url}
              monday={doctor.monday}
              tuesday={doctor.tuesday}
              wednesday={doctor.wednesday}
              thursday={doctor.thursday}
              friday={doctor.friday}
              saturday={doctor.saturday}
              sunday={doctor.sunday}
            />
          ))}
          {/* <DoctorCard key={1} name={"Ravindu"} speci={"Speciality"} />
          <DoctorCard key={2} name={"Binusha"} speci={"Speciality"} />
          <DoctorCard key={3} name={"Ravindu"} speci={"Speciality"} />
          <DoctorCard key={4} name={"Ravindu"} speci={"Speciality"} />
          <DoctorCard key={5} name={"Ravindu"} speci={"Speciality"} />
          <DoctorCard key={6} name={"Ravindu"} speci={"Speciality"} /> */}
        </Carousel>
      </div>
    </div>
  );
}

export default Doctors;
