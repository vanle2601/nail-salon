import React from "react";
import MenuItemCard from "../components/MenuItemCard";
import NavBar from "../components/NavBar";
import demo1 from "../assets/hero.jpg";
import demo2 from "../assets/nail.jpg";

const menuItems = [
  {
    id: 1,
    name: "Pedicure",
    price: "$45",
    img: demo1,
    desc: "A comprehensive treatment of your feet. Packages include cutting and shaping your toenails, tending to your cuticles, exfoliating, hydrating and massaging your feet, and painting your toenails with colours of choice.",
  },
  {
    id: 2,
    name: "Manicure",
    price: "$45",
    img: demo2,
    desc: "A comprehensive treatment of your feet. Packages include cutting and shaping your toenails, tending to your cuticles, exfoliating, hydrating and massaging your feet, and painting your toenails with colours of choice.",
  },
  {
    id: 3,
    name: "Pedicure",
    price: "$30",
    img: demo1,
    desc: "A comprehensive treatment of your feet. Packages include cutting and shaping your toenails, tending to your cuticles, exfoliating, hydrating and massaging your feet, and painting your toenails with colours of choice.",
  },
  {
    id: 4,
    name: "Gel and French Tips",
    price: "$45",
    img: demo2,
    desc: "A treatment for hands. Packages include colours of choice.",
  },
];

const Services = () => {
  return (
    <>
      <NavBar />
      <h1 className="text-4xl mb-6 italic text-gray-900 sm:text-6xl mt-20 text-center">
        Packages Menu <br />
      </h1>
      <div className="container mx-auto py-4">
        <div className="flex flex-wrap -mx-4">
          {menuItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
