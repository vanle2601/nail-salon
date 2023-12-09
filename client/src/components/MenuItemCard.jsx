import React from "react";

const MenuItemCard = ({ item }) => {
  return (
    <>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
        <div className="bg-white rounded-lg shadow-lg h-full">
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-32 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold">{item.name}</h2>
            <div className="text-green-600 font-bold">{item.price}</div>
            <p className="mt-2 h-48 overflow-y-hidden text-gray-700">
              {item.desc}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuItemCard;
