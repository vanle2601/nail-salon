import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <header className="flex items-center justify-between gap-1 p-5 ">
        <Link to="/" className="logo">
          <img className="h-20 w-auto" src={logo} alt="logo" />
        </Link>

        <div className="flex space-x-8">
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/booking">Book Appointment</Link>
        </div>

        <div className="flex items-center">
          <Link to="/login" className="flex gap-2 cursor-pointer pr-4">
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
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            <span>Login</span>
          </Link>

          <Link to="/booking" className="flex bg-button-pink px-5 py-5">
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
