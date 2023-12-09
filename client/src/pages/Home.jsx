import React from "react";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="bg-pink flex justify-center h-screen py-4 my-4">
        <h1 className="text-4xl italic text-gray-900 sm:text-6xl mt-20 text-center">
          Treat yourself to a <br /> pampering session with us
        </h1>
      </div>
    </>
  );
};

export default Home;
