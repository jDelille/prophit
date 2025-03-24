"use client";
import React from "react";
import "./button.scss";

type ButtonProps = {
  label: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  label,
  bgColor,
  textColor,
  borderColor,
  onClick
}) => {
  return (
    <button
      className="button"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderColor: borderColor,
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
