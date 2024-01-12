import React, { useState } from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { PiLaptopThin } from 'react-icons/pi';
import { IoSchoolOutline } from 'react-icons/io5';
import { MdOutlineContactPhone } from 'react-icons/md';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Navbar() {
  const [activelink, setactivelink] = useState('home');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLinkClick = (link) => {
    setactivelink(link);
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const Link = ({ text, id }) => (
    <li
      className={`hover:text-amber-400 ${activelink === id ? 'text-amber-400' : ''}`}
      onClick={() => handleLinkClick(id)}
    >
      <AnchorLink href={`#${id}`}>{text}</AnchorLink>
    </li>
  );

  return (
    <nav className="bg-zinc-900 text-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <h1 className="text-xl font-bold">Miedan</h1>

        <div className="md:hidden">
          <button
            onClick={toggleDropdown}
            className="text-gray-400 hover:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>

          {showDropdown && (
            <div className="mt-2 space-y-2">
              <Link text="HOME" id="home" />
              <Link text="ABOUT ME" id="aboutme" />
              <Link text="SKILLS" id="skills" />
              <Link text="PROJECTS" id="project" />
              <Link text="CONTACT" id="contact" />
              {/* Add more links as needed */}
            </div>
          )}
        </div>

        <div className={`hidden md:flex md:w-auto ${showDropdown ? 'flex' : 'hidden'}`}>
          <ul className="font-medium flex flex-col gap-7 text-sm md:p-0 mt-4 text-white bg-zinc-900 md:flex-row md:space-x-1 md:mt-0">
            <div className="flex items-center gap-2">
              <IoHomeOutline />
              <Link text="HOME" id="home" />
            </div>

            <div className="flex items-center gap-2">
              <CgProfile />
              <Link text="ABOUT ME" id="aboutme" />
            </div>

            <div className="flex items-center gap-2">
              <IoSchoolOutline />
              <Link text="SKILLS" id="skills" />
            </div>

            <div className="flex items-center gap-2">
              <PiLaptopThin />
              <Link text="PROJECTS" id="project" />
            </div>

            <div className="flex items-center gap-2">
              <MdOutlineContactPhone />
              <Link text="CONTACT" id="contact" />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
