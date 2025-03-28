import React from "react";

type ChartIconProps = {
  size: number;
  color?: string;
};

const ChartIcon: React.FC<ChartIconProps> = ({ size, color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 10L8 16"
        stroke="#33363F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12V16"
        stroke="#33363F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 8V16"
        stroke="#33363F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="3"
        y="4"
        width="18"
        height="16"
        rx="2"
        stroke="#33363F"
        strokeWidth="2"
      />
    </svg>
  );
};

export default ChartIcon;
