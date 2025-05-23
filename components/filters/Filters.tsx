import React, { Dispatch, SetStateAction } from "react";
import styles from "./Filters.module.scss";

type FiltersProps = {
  setProp: (val: string) => void;
  activeProp: string;
};

const props = [
  "All",
  "Points",
  "Rebounds",
  "Assists",
  "3 Pointers",
  "Steals",
  "Blocks",
  "Points + Assists",
  "Points + Rebounds",
  "Rebounds + Assists",
  "Points + Assists + Rebounds"
]

const Filters: React.FC<FiltersProps> = ({setProp, activeProp}) => {

  const handlePropClick = (prop: string) => {
    setProp(prop)
  }

  return (
    <div className={styles.filter}>
      <ul>
        {props.map((prop) => (
          <li key={prop} onClick={() => handlePropClick(prop)} className={activeProp === prop ? styles.active : ""}>{prop}</li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
