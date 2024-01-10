import React from "react";
import MenuItemCard from "../components/MenuItemCard";
import NavBar from "../components/NavBar";
import { menuItems } from "../data";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <>
      <div className="min-h-screen">
        <NavBar />
        <div className="justify-center items-center p-1 mx-5">
          <h2 className="text-3xl mb-6 font-semibold text-gray-800 sm:text-6xl text-center">
            Packages
          </h2>

          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              {menuItems.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Services;
