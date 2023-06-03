import React from "react";

import Logo from "../assets/img/nethra-logo.svg";

function Navbar() {
  return (
    <nav className="fixed w-full z-30 lg:flex lg:justify-between lg:px-10 backdrop-blur">
      <div className="flex justify-between items-center px-8 py-6 lg:px-0">
        <img src={Logo} className="w-32" alt="" />
        <div className="ham-menu flex gap-1 flex-col scale-90 lg: hidden">
          <div className="bg-nethraBlue h-1 w-7"></div>
          <div className="bg-nethraBlue h-1 w-7"></div>
          <div className="bg-nethraBlue h-1 w-7"></div>
        </div>
      </div>

      <div className="uppercase nav-links flex flex-col w-full min-h-screen items-center justify-center fixed top-0 text-3xl gap-10 hidden lg:flex lg:flex-row lg:min-h-fit lg:text-base lg:static lg:justify-end">
        <a
          href=""
          className="hover:text-nethraBlue transition-colors duration-300 ease-in-out"
        >
          Services
        </a>
        <a
          href=""
          className="hover:text-nethraBlue transition-colors duration-300 ease-in-out"
        >
          Doctors
        </a>
        <a
          href=""
          className="hover:text-nethraBlue transition-colors duration-300 ease-in-out"
        >
          Gallery
        </a>
        <a
          href=""
          className="hover:text-nethraBlue transition-colors duration-300 ease-in-out"
        >
          About
        </a>
        <a
          href=""
          className="hover:text-nethraBlue transition-colors duration-300 ease-in-out"
        >
          Contact Us
        </a>
        <a
          href=""
          className="bg-nethraBlue text-white px-4 py-2 rounded-md hover:bg-nethraBlueDark transition-colors ease-in-out duration-300"
        >
          Appointments
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
