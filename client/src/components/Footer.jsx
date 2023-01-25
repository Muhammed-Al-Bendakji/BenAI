import React from "react";
import { logo } from "../assets";

const Footer = () => (
  <footer className=" p-4 shadow md:px-6 md:py-8 bg-slate-900">
    <div className="justify-center sm:flex sm:items-center">
      <a href="" className="flex items-center mb-4 sm:mb-0">
        <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
      </a>
      <div className="wrapper">
        <div className="icon facebook">
          <div className="tooltip">Facebook</div>
          <span>
            <a href="https://www.facebook.com/bendkji">
              <i className="fab fa-facebook-f"></i>
            </a>
          </span>
        </div>
        <div className="icon github">
          <div className="tooltip">github</div>
          <span>
            <a href="https://github.com/Muhammed-Al-Bendakji">
              <i className="fab fa-github"></i>
            </a>
          </span>
        </div>
      </div>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
      Made with ❤️ by Muhammad Al-Bendakji
    </span>
  </footer>
);

export default Footer;
