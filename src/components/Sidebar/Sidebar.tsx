import React from "react";
import { itemsType } from "../../App";
import Circle from "../Circle/Circle";
import "./Sidebar.scss";

type SidebarProps = {
  items: itemsType[];
  setShow?: () => void;
};
const Sidebar: React.FC<SidebarProps> = ({ items, setShow }) => {
  const liElems = items.map((item, index) => (
    <li key={index}>
      {item.icon ? (
        <img src={item.icon} alt="icon" />
      ) : (
      item.color && <Circle color={item.color} /> //сделать отдельым компонентом
      )}
      <p>{item.name}</p>
    </li>
  ));
  return (
    <>
      <ul className="todo__list" onClick={setShow}>
        {liElems}
      </ul>
    </>
  );
};
export default Sidebar;
