import React from "react";

type SortIconProps = {
  size: number;
  color: string;
};

const SortIcon: React.FC<SortIconProps> = ({ size, color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17 15L12 20L7 15" stroke={color} strokeWidth="2" />
      <path d="M17 9L12 4L7 9" stroke={color} strokeWidth="2" />
    </svg>
  );
};

export default SortIcon;
