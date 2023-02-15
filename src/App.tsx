import React from "react";
import listSVG from "./assets/img/icon-list.svg";

const App: React.FC = () => {
  return (
    <div className="todo">
      <div className="todo__sidebar">
        <ul className="todo__list">
          <li>
            <img src={listSVG} alt="icon-list" />
            <p>Все задачи</p>
          </li>
          <li>
            <img src={listSVG} alt="icon-list" />
            <p>Все задачи</p>
          </li>
        </ul>
      </div>
      <div className="todo__tasks">
        <div>thrthtrh</div>
      </div>
    </div>
  );
};

export default App;
