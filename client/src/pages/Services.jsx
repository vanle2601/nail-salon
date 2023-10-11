import React from "react";
import MenuItemCard from "../components/MenuItemCard";
import NavBar from "../components/NavBar";
import { menuItems } from "../data.jsx";

const Services = (menuItems) => {
  console.log(menuItems);
  return (
    <>
      <NavBar />
      <div className="flex justify-center h-screen p-4 mx-5">
        <h1 className="text-4xl italic text-gray-900 sm:text-6xl mt-20 text-center">
          Packages Menu <br />
        </h1>

        {menuItems.map((name) => {
          return (
            <div className="menu-item">
              <h4>{name}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Services;
