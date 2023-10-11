import React from "react";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="custom-background flex justify-center h-screen p-4 mx-5">
        <h1 className="text-4xl italic text-gray-900 sm:text-6xl mt-20 text-center">
          Treat yourself to a <br /> pampering session with us
        </h1>
      </div>
    </>
  );
};

export default Home;
