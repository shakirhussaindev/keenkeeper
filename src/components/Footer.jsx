import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill, RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center text-base-content p-10 bg-green-900 -space-y-2 geist">
      
        <h2 className="text-[clamp(1rem,3vw,2.5rem)] text-white font-extrabold pt-10">
          KeenKeeper
        </h2>
        <p className="text-base text-white geist">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <p className="text-white text-xl font-medium geist">Social Links</p>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a className="bg-white p-2.5 rounded-full">
              <RiInstagramFill className="text-xl" />
            </a>
            <a className="bg-white p-2.5 rounded-full">
              <FaFacebookSquare className="text-xl" />
            </a>
            <a className="bg-white p-2.5 rounded-full">
              <RiTwitterXFill className="text-xl" />
            </a>
          </div>
        </nav>
        <aside className="text-white/70 flex items-center justify-between w-9/12 mx-auto pt-3 border-t border-green-800">
          <p>© {new Date().getFullYear()} KeenKeeper. All right reserved</p>
          <ul className="flex gap-5">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookies</li>
          </ul>
        </aside>
      
    </footer>
  );
};

export default Footer;
