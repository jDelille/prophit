import React, { Dispatch, SetStateAction } from "react";
import styles from "./Filters.module.scss";
import { getFiltersByLeague } from "@/constants/filterOptions";
import { usePathname } from "next/navigation";

type FiltersProps = {
  setProp: (val: string) => void;
  activeProp: string;
};

const Filters: React.FC<FiltersProps> = ({ setProp, activeProp }) => {
  const pathname = usePathname().split("/")[2];

  const options = getFiltersByLeague(pathname);

  const handlePropClick = (prop: string) => {
    setProp(prop);
  };

  return (
    <div className={styles.filter}>
      <ul>
        {options.map((option) => (
          <li
            key={option.name}
            onClick={() => handlePropClick(option.name)}
            className={activeProp === option.name ? styles.active : ""}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
