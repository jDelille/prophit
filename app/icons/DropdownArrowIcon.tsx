import React from "react";

type DropdownArrowIconProps = {
  size: number;
  color: string;
};

const DropdownArrowIcon: React.FC<DropdownArrowIconProps> = ({
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
      <path d="M18 9L12 15L6 9" stroke={color} strokeWidth="2" />
    </svg>
  );
};

export default DropdownArrowIcon;
