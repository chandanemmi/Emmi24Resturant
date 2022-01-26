import React from "react";

export const NavBar = ({ filterItem, menuList }) => {
  return (
    <div>
      <nav className="navbar">
        <h2 style={{ color: "blueviolet", fontStyle: "italic" }}>
          Welcome to Emmi-24 Resturant
        </h2>
        <div className="btn-group">
          {menuList.map((curEle, index) => {
            return (
              <button
                key={index}
                className="btn-group__item"
                onClick={() => filterItem(curEle)}>
                {curEle}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};
