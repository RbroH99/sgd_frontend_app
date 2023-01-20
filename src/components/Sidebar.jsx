import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboard,
  faChartBar,
  faAddressCard,
  faCircleQuestion,
} from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div id="sidebar" className="h-screen flex-row w-56 border-r shadow-none">
      <div id="top">
        <div className="flex m-0 p-3 pb-2 justify-center">
          <span
            id="logo"
            className="pr-7 font-rubik font-extrabold text-3xl text-orange-500 hover:cursor-pointer"
          >
            SIGED
          </span>
        </div>
        <hr className="border-1" />
      </div>

      <div id="center" className="">
        <ul className="pl-3 ">
        <Link to="/" >
              <li className="my-2 py-2 pl-3 ease-out duration-300 cursor-pointer rounded-l hover:bg-gray-100 hover:text-orange-500 text-gray-800 font-semibold">
               <FontAwesomeIcon icon={faClipboard} className="pl-1 text-xl" />
               <span className="ml-3">Dashboard</span> 
              </li> 
          </Link>
          <li className="my-2 py-2 pl-3 ease-out duration-300 cursor-pointer rounded-l hover:bg-gray-100 hover:text-orange-500 text-gray-800 font-semibold">
            <FontAwesomeIcon icon={faChartBar} className=" text-xl" />
            <span className="ml-3">Estadísticas</span>
          </li>
          <li className="my-2 py-2 pl-3 ease-out duration-300 cursor-pointer rounded-l hover:bg-gray-100 hover:text-orange-500 text-gray-800 font-semibold">
            <FontAwesomeIcon icon={faAddressCard} className=" text-xl" />
            <span className="ml-3">Perfil</span>
          </li>
          <li className="my-2 py-2 pl-3 ease-out duration-300 cursor-pointer rounded-l hover:bg-gray-100 hover:text-orange-500 text-gray-800 font-semibold">
            <FontAwesomeIcon icon={faCircleQuestion} className=" text-xl" />
            <span className="ml-3">Sobre</span>
          </li>
        </ul>
      </div>

      <div id="bottom" className=""></div>
    </div>
  );
};
