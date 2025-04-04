import React from "react";

type HamburgerMenuIconProps = {
  size: number;
  color: string;
};

const HamburgerMenuIcon: React.FC<HamburgerMenuIconProps> = ({
  size,
  color,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 7H19"
        stroke="#33363F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5 12H19"
        stroke="#33363F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5 17H19"
        stroke="#33363F"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default HamburgerMenuIcon;
