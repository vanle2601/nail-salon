import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="flex flex-col sm:flex-row items-center justify-between gap-1 p-5">
        {/* Logo */}
        <Link to="/" className="logo">
          <img className="h-20 w-auto" src={logo} alt="logo" />
        </Link>

        {/* Hamburger icon for small screens */}
        <div
          className="sm:hidden cursor-pointer fixed left-80 top-24 bottom-18"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>

        {/* Desktop menu */}
        <div className="hidden sm:flex items-center space-x-8">
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/booking" className="flex bg-button-pink px-5 py-4">
            <span>Book Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </div>

        {/* Hamburger menu items for small screens */}
        <div
          className={`sm:hidden fixed left-24 top-32 bottom-18 bg-pink px-2 py-3 w-64 overflow-y-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <Link to="/services" className="block py-2">
            Services
          </Link>
          <Link to="/contact" className="block py-2">
            Contact
          </Link>
          <Link to="/booking" className="flex bg-button-pink px-2 py-4">
            <span>Book Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
