import React from "react";

type PipeChartIconProps = {
  size: number;
  color: string;
};

const PipeChartIcon: React.FC<PipeChartIconProps> = ({ size, color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 21H3"
          stroke="#33363F"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 16V14"
          stroke="#33363F"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 12V9"
          stroke="#33363F"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8 16V10"
          stroke="#33363F"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M16 13V11"
          stroke="#33363F"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M20 15V5"
          stroke="#33363F"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </svg>
  );
};

export default PipeChartIcon;
