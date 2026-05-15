import React from "react";
import { LuChartLine, LuClock3 } from "react-icons/lu";
import { RiHome2Line } from "react-icons/ri";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm geist">
        <div className="flex items-center justify-between w-11/12 mx-auto">
          <h2 className="text-[clamp(1rem,3vw,1.5rem)] font-extrabold text-[#1F2937]">
            Keen<span className="text-[#244D3F]">Keeper</span>
          </h2>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 font-semibold gap-3">
              <li>
                <NavLink to={"/"} className={({isActive})=>`${isActive?'bg-green-800 text-white':'text-gray-500'}`}>
                  <RiHome2Line className="text-lg" />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/timeline"} className={({isActive})=>`${isActive?'bg-green-800 text-white':'text-gray-500'}`}>
                  <LuClock3 className="text-lg" />
                  Timeline
                </NavLink>
              </li>
              <li>
                <NavLink to={"/stats"} className={({isActive})=>`${isActive?'bg-green-800 text-white':'text-gray-500'}`}>
                  <LuChartLine className="text-lg" />
                  Stats
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
