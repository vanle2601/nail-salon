import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="max-h-screen">
        <NavBar />
        <div className="custom-background items-center justify-center h-screen py-4">
          <h1 className="text-4xl italic text-gray-900 sm:text-6xl mt-20 text-center">
            Treat yourself to a <br /> pampering session with us
          </h1>

          <Link
            to="/booking"
            className=" flex flex-col items-center justify-center p-1 mt-12"
          >
            <div className="bg-button-pink p-3">
              <span>Book Now</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 inline-block ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
