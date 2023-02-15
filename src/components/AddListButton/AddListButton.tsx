import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import plusSVG from "../../assets/img/plus.svg";
import "./AddListButton.scss";

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
  return (
    <div className="todo__add-list add-list">
      <Sidebar
        items={[{ name: "Добавить список", icon: plusSVG }]}
        setShow={() => setShow(!showPopup)}
      />
      {
        //Добавить икон закрытия
        showPopup && (
          <div className="add-list__popup">
            <input
              className="add-list__input field"
              type="text"
              placeholder="Название папки"
            />
            <ul className="add-list__circles">
              {colors.map((color) => (
                <li></li>
              ))}
            </ul>
            <button className="add-list__button button">Добавить</button>
          </div>
        )
      }
    </div>
  );
};
export default AddListButton;
