import React from "react";

type SearchIconProps = {
  size: number;
  color: string;
};

const SearchIcon: React.FC<SearchIconProps> = ({ size, color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11" cy="11" r="7" stroke={color} strokeWidth="2" />
      <path
        d="M20 20L17 17"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SearchIcon;
