import React from "react";
import styles from "./PercentageBar.module.scss";

type PercentageBarProps = {
  percentage: number;
};
const PercentageBar: React.FC<PercentageBarProps> = ({ percentage }) => {
  return (
    <div className={styles.percentageBar}>
      <p>{percentage}%</p>
      <div className={styles.barBackground}>
      <div
        className={styles.bar}
        style={{
          width: `${percentage}%`,
          backgroundColor:
            percentage >= 70
              ? "#4caf50" // green
              : percentage >= 40
              ? "#ff9800" // orange
              : "#f44336", // red
        }}
      ></div>
      </div>
    </div>
  );
};

export default PercentageBar;
