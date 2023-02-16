import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import listSVG from "./assets/img/icon-list.svg";
import AddListButton from "./components/AddListButton/AddListButton";
import DB from "./assets/db.json";
export type itemsType = {
  name: string;
  color?: string;
  icon?: string;
};
const items: itemsType[] = [
  { name: "Покупки", color: "green" },
  { name: "Фронтенд", color: "blue" },
  { name: "Книги", color: "pink" },
  { name: "Фильмы и сериалы", color: "lime" },
];
const App: React.FC = () => {
  return (
    <div className="todo">
      <div className="todo__sidebar">
        <Sidebar items={[{ name: "Все задачи", icon: listSVG }]} />
        <Sidebar items={items} />

        <AddListButton colors={DB.colors} />
      </div>
      <div className="todo__tasks">
        <div>thrthtrh</div>
      </div>
    </div>
  );
};

export default App;
