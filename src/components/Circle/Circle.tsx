import React from "react";
import "./Circle.scss";
type CircleProps = {
  color: string;
};
export const Circle: React.FC<CircleProps> = ({ color }) => {
  return <div className={`circle circle--${color}`}></div>;
};
export default Circle;
