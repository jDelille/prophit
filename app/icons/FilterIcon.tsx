import React from "react";

type FilterIconProps = {
  size: number;
  color: string;
};

const FilterIcon: React.FC<FilterIconProps> = ({ size, color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12L5 4"
        stroke="#33363F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M19 20L19 18"
        stroke="#33363F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5 20L5 16"
        stroke="#33363F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M19 12L19 4"
        stroke="#33363F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 7L12 4"
        stroke="#33363F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 20L12 12"
        stroke="#33363F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="5"
        cy="14"
        r="2"
        stroke="#33363F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="12"
        cy="9"
        r="2"
        stroke="#33363F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="19"
        cy="15"
        r="2"
        stroke="#33363F"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default FilterIcon;
