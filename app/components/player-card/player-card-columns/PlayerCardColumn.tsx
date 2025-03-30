import React from "react";

type PlayerCardColumnProps = {
  value: string | number | undefined;
  label?: string;
  className?: string;
};

const PlayerCardColumn: React.FC<PlayerCardColumnProps> = ({
  value,
  label,
  className = "",
}) => {
  return (
    <div className={`column ${className}`}>
      <p className="med-font">{value}</p>
      <p className="small-font">{label}</p>
    </div>
  );
};

export default PlayerCardColumn;