"use client";
import React from "react";
import "./button.scss";

type ButtonProps = {
  label: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
};

const Button: React.FC<ButtonProps> = ({
  label,
  bgColor,
  textColor,
  borderColor,
}) => {
  return (
    <button
      className="button"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderColor: borderColor,
      }}
    >
      {label}
    </button>
  );
};

export default Button;
