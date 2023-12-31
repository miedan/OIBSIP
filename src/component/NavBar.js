import { useState, useEffect } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { PiLaptopThin } from "react-icons/pi";
import { IoSchoolOutline } from "react-icons/io5";

function Navbar() {

  const [activelink, setactivelink] = useState('HOME')

  const handleLinkClick = (link) => {
    setactivelink(link)
  }

  const Link = ({ text, id }) => (
    <li>
      <a 
        href={`#${text}`}
        className={` hover:text-amber-400 ${
          activelink === id ? "text-amber-400" : ""
        }`}
        onClick={() => handleLinkClick(id)}
      >
        {text}
      </a>
    </li>
  );

 
    return (
      <nav className="bg-zinc-900 text-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <h1 className="text-xl font-bold">Miedan</h1>
        {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center  text-gray-400 -lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          SVG remains the same
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button> */}
        <div className="hidden md:flex  md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col gap-7 text-md  md:p-0 mt-4  text-white bg-zinc-900 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 ">
            <div className="flex items-center gap-2">
              <IoHomeOutline/>
            <Link text="HOME" id="HOME" />
            </div>
         
          <div className="flex items-center gap-2">
          <CgProfile  />
          <Link text="ABOUT ME" id="ABOUT ME" />
          </div>
            
            <div className="flex items-center gap-2">
              <IoSchoolOutline/>
              <Link text="SKILLS" id="SKILLS" />
            </div>
            
            <div className="flex items-center gap-2">
              <PiLaptopThin/>
            <Link text="PROJECTS" id="PROJECTS" />
            </div>
            
            <li>
              <button href="#CONTACT" className={`py-2 px-3 rounded-lg border w-24 flex justify-center items-center   hover:text-amber-400 md:p-0 ${
                  activelink === "CONTACT" ? "font-bold  bg-amber-400"  : " "
                }`} 
                onClick={() => handleLinkClick("CONTACT")}> CONTACT</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        )
  }
  
  export default Navbar;
  