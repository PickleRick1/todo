import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import plusSVG from "../../assets/img/plus.svg";
import "./AddListButton.scss";
import closeSVG from "../../assets/img/close.svg";
import Circle from "../Circle/Circle";

type ColorsType = {
  id: number;
  hex: string;
  name: string;
};
type AddListButtonProps = {
  colors: ColorsType[];
};

const AddListButton: React.FC<AddListButtonProps> = ({ colors }) => {
  const [showPopup, setShow] = React.useState(false);
  const [selectedColor, setColor] = React.useState(colors[0].id);
  return (
    <div className="todo__add-list add-list">
      <Sidebar
        items={[{ name: "Добавить список", icon: plusSVG }]}
        setShow={() => setShow(!showPopup)}
      />
      {showPopup && (
        <div className="add-list__popup">
          <div onClick={() => setShow(false)} className="add-list__close-icon">
            <img src={closeSVG} alt="close" />
          </div>
          <input
            className="add-list__input field"
            type="text"
            placeholder="Название папки"
          />
          <div className="add-list__circles">
            {colors.map((color) => (
              <div
                key={color.id}
                onClick={() => setColor(color.id)}
                className={selectedColor === color.id ? "active" : ""}
              >
                <Circle color={color.name} />
              </div>
            ))}
          </div>
          <button className="add-list__button button">Добавить</button>
        </div>
      )}
    </div>
  );
};
export default AddListButton;
