import React from "react";

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="bg-nethraBlue text-white flex flex-col justify-center items-center text-center px-4 py-10 gap-5 lg:gap-8">
        <svg
          className="fill-white w-48"
          width="252"
          height="65"
          viewBox="0 0 252 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M115.625 33.3C115.625 33.3 89.3151 60.125 57.4663 60.125C25.6175 60.125 0 33.3 0 33.3C0 33.3 29.0793 3.69998 57.4663 3.69998C85.8533 3.69998 115.625 33.3 115.625 33.3ZM65.0823 31.45C65.0823 24.2979 62.2925 18.5 58.851 18.5C55.4096 18.5 52.6198 24.2979 52.6198 31.45C52.6198 38.6021 55.4096 44.4 58.851 44.4C62.2925 44.4 65.0823 38.6021 65.0823 31.45Z" />
          <path d="M130.923 28V8.568H132.771L133.555 11.62V28H130.923ZM144.363 28L132.435 12.068L132.771 8.568L144.727 24.472L144.363 28ZM144.363 28L143.579 25.116V8.568H146.211V28H144.363ZM150.801 28V8.568H153.433V28H150.801ZM152.593 28V25.592H163.737V28H152.593ZM152.593 19.208V16.912H162.813V19.208H152.593ZM152.593 10.976V8.568H163.597V10.976H152.593ZM171.731 28V9.128H174.363V28H171.731ZM165.123 10.976V8.568H180.943V10.976H165.123ZM184.079 28V8.568H186.711V28H184.079ZM196.623 28V8.568H199.255V28H196.623ZM185.871 19.152V16.744H197.267V19.152H185.871ZM205.612 19.544V17.332H210.876C212.015 17.332 212.892 17.0427 213.508 16.464C214.124 15.8853 214.432 15.1013 214.432 14.112C214.432 13.1787 214.124 12.404 213.508 11.788C212.911 11.172 212.043 10.864 210.904 10.864H205.612V8.568H210.988C212.22 8.568 213.294 8.81067 214.208 9.296C215.123 9.76267 215.823 10.4067 216.308 11.228C216.812 12.0493 217.064 12.992 217.064 14.056C217.064 15.1573 216.812 16.1187 216.308 16.94C215.823 17.7613 215.123 18.4053 214.208 18.872C213.294 19.32 212.22 19.544 210.988 19.544H205.612ZM203.848 28V8.568H206.48V28H203.848ZM215.048 28L207.992 19.292L210.484 18.424L218.38 28H215.048ZM219.045 28L226.997 8.568H228.901L236.825 28H233.969L227.445 11.564H228.425L221.845 28H219.045ZM222.825 23.604V21.308H233.045V23.604H222.825Z" />
          <path d="M132.365 57V41.038H134.527V57H132.365ZM133.837 57V55.022H142.991V57H133.837ZM133.837 49.778V47.892H142.232V49.778H133.837ZM133.837 43.016V41.038H142.876V43.016H133.837ZM150.677 50.514L144.398 41.038H146.905L151.965 48.789H150.838L155.921 41.038H158.382L152.057 50.514H150.677ZM150.309 57V49.088H152.471V57H150.309ZM160.351 57V41.038H162.513V57H160.351ZM161.823 57V55.022H170.977V57H161.823ZM161.823 49.778V47.892H170.218V49.778H161.823ZM161.823 43.016V41.038H170.862V43.016H161.823ZM185.947 57.23C184.797 57.23 183.731 57.023 182.75 56.609C181.769 56.1797 180.91 55.5893 180.174 54.838C179.453 54.0867 178.894 53.2127 178.495 52.216C178.096 51.2193 177.897 50.1537 177.897 49.019C177.897 47.869 178.096 46.7957 178.495 45.799C178.894 44.8023 179.453 43.936 180.174 43.2C180.91 42.4487 181.761 41.866 182.727 41.452C183.708 41.0227 184.774 40.808 185.924 40.808C187.181 40.808 188.285 41.0227 189.236 41.452C190.187 41.8813 191.03 42.464 191.766 43.2L190.271 44.695C189.765 44.1277 189.144 43.683 188.408 43.361C187.687 43.039 186.859 42.878 185.924 42.878C185.081 42.878 184.306 43.0313 183.601 43.338C182.896 43.6293 182.282 44.051 181.761 44.603C181.24 45.155 180.833 45.8067 180.542 46.558C180.266 47.3093 180.128 48.1297 180.128 49.019C180.128 49.9083 180.266 50.7287 180.542 51.48C180.833 52.2313 181.24 52.883 181.761 53.435C182.282 53.987 182.896 54.4163 183.601 54.723C184.306 55.0143 185.081 55.16 185.924 55.16C186.921 55.16 187.787 54.999 188.523 54.677C189.259 54.3397 189.88 53.8873 190.386 53.32L191.881 54.792C191.145 55.5587 190.279 56.1567 189.282 56.586C188.301 57.0153 187.189 57.23 185.947 57.23ZM192.96 57L199.492 41.038H201.056L207.565 57H205.219L199.86 43.499H200.665L195.26 57H192.96ZM196.065 53.389V51.503H204.46V53.389H196.065ZM211.417 50.054V48.237H215.741C216.676 48.237 217.397 47.9993 217.903 47.524C218.409 47.0487 218.662 46.4047 218.662 45.592C218.662 44.8253 218.409 44.189 217.903 43.683C217.412 43.177 216.699 42.924 215.764 42.924H211.417V41.038H215.833C216.845 41.038 217.726 41.2373 218.478 41.636C219.229 42.0193 219.804 42.5483 220.203 43.223C220.617 43.8977 220.824 44.672 220.824 45.546C220.824 46.4507 220.617 47.2403 220.203 47.915C219.804 48.5897 219.229 49.1187 218.478 49.502C217.726 49.87 216.845 50.054 215.833 50.054H211.417ZM209.968 57V41.038H212.13V57H209.968ZM219.168 57L213.372 49.847L215.419 49.134L221.905 57H219.168ZM224.14 57V41.038H226.302V57H224.14ZM225.612 57V55.022H234.766V57H225.612ZM225.612 49.778V47.892H234.007V49.778H225.612ZM225.612 43.016V41.038H234.651V43.016H225.612Z" />
        </svg>
        <p className="font-light text-sm md:text-base md:max-w-xl">
          Transform your vision and enhance your quality of life with our
          personalized and comprehensive eye care services that are tailored to
          meet your unique needs and preferences.
        </p>
        <div className="uppercase flex flex-wrap gap-x-4 gap-y-2 justify-center lg:gap-x-10">
          <a
            href=""
            className="hover:text-blue-300 transition-colors duration-300 ease-in-out"
          >
            Services
          </a>
          <a
            href=""
            className="hover:text-blue-300 transition-colors duration-300 ease-in-out"
          >
            Doctors
          </a>
          <a
            href=""
            className="hover:text-blue-300 transition-colors duration-300 ease-in-out"
          >
            Gallery
          </a>
          <a
            href=""
            className="hover:text-blue-300 transition-colors duration-300 ease-in-out"
          >
            About
          </a>
          <a
            href=""
            className="hover:text-blue-300 transition-colors duration-300 ease-in-out"
          >
            Contact Us
          </a>
        </div>
        <div className="flex gap-4 lg:text-lg">
          <FaFacebookF
            className="hover:text-blue-300 transition-colors duration-300 ease-in-out cursor-pointer"
            target="_blank"
          />
          <FaInstagram
            className="hover:text-blue-300 transition-colors duration-300 ease-in-out cursor-pointer"
            target="_blank"
          />
          <FaTwitter
            className="hover:text-blue-300 transition-colors duration-300 ease-in-out cursor-pointer"
            target="_blank"
          />
        </div>
      </div>
      <div className="bg-nethraBlueDark text-white p-4 text-center font-light text-xs gap-2 flex flex-col md:text-sm lg:flex-row lg:justify-between lg:px-10">
        <p>Copyright © 2023. Nethra Eye Hospitals. All rights reserved.</p>
        <div className="flex justify-center flex-wrap">
          <p>Design and developed by&#160;</p>
          <a
            href="https://revengerx.dev/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-300 duration-300 ease-in-out transition-colors"
          >
            RevengerX
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
