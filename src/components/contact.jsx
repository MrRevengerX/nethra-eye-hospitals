import React from "react";

import { RiTimeFill, RiMapPin2Fill, RiPhoneFill } from "react-icons/ri";

import { IoMail } from "react-icons/io5";

function Contact() {
  return (
    <>
      <div className="px-4 py-8" id="contact">
        <h1 className="font-semibold text-4xl lg:text-5xl text-center pb-7 lg:pb-16">
          Contact Us
        </h1>
        <div className="flex flex-col gap-6 md:max-w-sm md:mx-auto lg:max-w-5xl lg:flex-row lg:gap-28">
          <div className="">
            <div className="flex items-center gap-2 text-xl pb-2">
              <RiTimeFill className="text-nethraBlue" />
              <h3 className="uppercase font-medium">open hours</h3>
            </div>
            <div className="flex flex-col gap-2 max-w-sm lg:min-w-[350px]">
              <div className="flex justify-between uppercase">
                <p>monday - friday</p>
                <p>7.30AM - 6.30PM</p>
              </div>
              <hr />
              <div className="flex justify-between uppercase">
                <p>Saturday</p>
                <p>9.30AM - 5.30PM</p>
              </div>
              <hr />
              <div className="flex justify-between uppercase">
                <p>Sunday</p>
                <p>10.30AM - 6.30PM</p>
              </div>
              <hr />
            </div>
          </div>
          <div className="">
            <div className="flex items-center gap-2 text-xl pb-1">
              <RiMapPin2Fill className="text-nethraBlue" />
              <h3 className="uppercase font-medium">visit us</h3>
            </div>
            <p className="uppercase">
              Nethra eye care,
              <br /> Wariyapola Road,
              <br /> Chilaw.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="">
              <div className="flex items-center gap-2 text-xl pb-1">
                <IoMail className="text-nethraBlue" />
                <h3 className="uppercase font-medium">mail us</h3>
              </div>
              <a
                className="uppercase cursor-pointer"
                href="mailto:contact@nethraeyehospitals.com"
              >
                contact@nethraeyehospitals.com
              </a>
            </div>
            <div className="">
              <div className="flex items-center gap-2 text-xl pb-1">
                <RiPhoneFill className="text-nethraBlue" />
                <h3 className="uppercase font-medium">call us</h3>
              </div>
              <a className="cursor-pointer" href="tel:+94713824824">
                +94 71 382 4824
              </a>
            </div>
          </div>
        </div>
      </div>
      <iframe
        className="w-full h-48 lg:h-96"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15819.922112983058!2d79.7994477!3d7.5770979!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2c96c914fdd87%3A0xc60aa1a39869caa7!2sNethra%20Eye%20Care!5e0!3m2!1sen!2slk!4v1685722896684!5m2!1sen!2slk"
        loading="lazy"
      ></iframe>
    </>
  );
}

export default Contact;
