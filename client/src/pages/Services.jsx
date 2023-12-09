import React from "react";
import MenuItemCard from "../components/MenuItemCard";
import NavBar from "../components/NavBar";
import { menuItems } from "../data";

const Services = () => {
  return (
    <>
      <NavBar />
      <div className="justify-center items-center min-h-screen p-1 mx-5 grow">
        <h2 className="text-3xl mb-6 font-semibold text-gray-800 sm:text-6xl mt-20 text-center">
          Packages
        </h2>

        <div className="container mx-auto py-4=">
          <div className="flex flex-wrap -mx-4">
            {menuItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
