import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import { NavBar } from "./NavBar";

const uniqueList = [
  ...new Set(
    Menu.map((curEle) => {
      return curEle.category;
    })
  ),
  "All",
];
export const Resturant = () => {
  const [menuList, setMenuList] = useState(uniqueList);
  const [menuData, setMenuData] = useState(Menu);
  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curItem) => curItem.category === category);
    setMenuData(updatedList);
  };
  return (
    <>
      <NavBar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} /> <h3>Hello</h3>
    </>
  );
};
