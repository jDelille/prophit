import React from "react";
import "./input.scss";

type InputProps = {
  type: string;
  className: string;
  placeholder?: string;
};
const Input: React.FC<InputProps> = ({ type = "text", className, placeholder }) => {
  return <input type={type} className={className} placeholder={placeholder} />;
};

export default Input;
