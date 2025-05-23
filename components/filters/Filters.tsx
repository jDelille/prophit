import React, { Dispatch, SetStateAction } from "react";
import styles from "./Filters.module.scss";

type FiltersProps = {
  setProp: (val: string) => void;
  activeProp: string;
  options: string[];
};


const Filters: React.FC<FiltersProps> = ({ setProp, activeProp, options}) => {
  const handlePropClick = (prop: string) => {
    setProp(prop);
  };

  return (
    <div className={styles.filter}>
      <ul>
        {options.map((option) => (
          <li
            key={option}
            onClick={() => handlePropClick(option)}
            className={activeProp === option ? styles.active : ""}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
