import { React, useState } from "react";

import Logo from "../assets/img/nethra-logo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Action when clicking on link in nav bar
  const linkClick = () => {
    isOpen ? setIsOpen(!isOpen) : setIsOpen(isOpen); // This checks whether mobile navigation bar is open and close the mobile navbar if user click on a link
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); // This scrolls the website to the top when user click on a link in nav bar
  };
  return (
    <nav
      className={
        isOpen
          ? "fixed w-full z-30 lg:flex lg:justify-between lg:px-10 backdrop-blur h-[100vh] bg-white/70 transition-all duration-300 ease-in-out"
          : "fixed w-full z-30 lg:flex lg:justify-between lg:px-10 backdrop-blur h-20 transition-all duration-300 ease-in-out bg-white/70"
      }
    >
      <div className="flex justify-between items-center px-8 py-6 lg:px-0">
        <img
          onClick={linkClick}
          src={Logo}
          className="w-32 z-[1001] cursor-pointer"
          alt=""
        />
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={
            isOpen
              ? "ham-open flex gap-1 flex-col scale-90 lg:hidden z-[1001]"
              : "ham-menu flex gap-1 flex-col scale-90 lg:hidden z-[1001]"
          }
        >
          <div className="bg-nethraBlue h-1 w-7"></div>
          <div className="bg-nethraBlue h-1 w-7"></div>
          <div className="bg-nethraBlue h-1 w-7"></div>
        </div>
      </div>

      <div
        className={
          isOpen
            ? "uppercase nav-links flex flex-col w-full min-h-screen items-center justify-center fixed top-0 text-3xl gap-10 lg:flex lg:flex-row lg:min-h-fit lg:text-base lg:static lg:justify-end"
            : "hidden uppercase nav-links flex-col w-full min-h-screen items-center justify-center fixed top-0 text-3xl gap-10 lg:flex lg:flex-row lg:min-h-fit lg:text-base lg:static lg:justify-end"
        }
      >
        <a
          onClick={linkClick}
          href="#services"
          className="hover:text-nethraBlue transition-colors duration-300 ease-in-out"
        >
          Services
        </a>
        <a
          onClick={linkClick}
          href="#doctors"
          className="hover:text-nethraBlue transition-colors duration-300 ease-in-out"
        >
          Doctors
        </a>
        <a
          onClick={linkClick}
          href="#contact"
          className="hover:text-nethraBlue transition-colors duration-300 ease-in-out"
        >
          Contact Us
        </a>
        <a
          onClick={linkClick}
          href="#"
          className="bg-nethraBlue text-white px-4 py-2 rounded-md hover:bg-nethraBlueDark transition-colors ease-in-out duration-300"
        >
          Appointments
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
