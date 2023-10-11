import React from "react";

const MenuItemCard = ({ menuItem: { name, price, img, desc } }) => {
  return (
    <>
      <div className="menu-item">
        <h4>{name}</h4>
      </div>
    </>
  );
};

export default MenuItemCard;
