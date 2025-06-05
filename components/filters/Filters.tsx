import React, { Dispatch, SetStateAction } from "react";
import styles from "./Filters.module.scss";
import { usePathname } from "next/navigation";
import { getTabsByPage } from "@/constants/tabs";

type FiltersProps = {
  setProp: (val: string) => void;
  activeProp: string;
};

const Filters: React.FC<FiltersProps> = ({ setProp, activeProp }) => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const pageKey =
    segments[0] === "props" ? segments[1] ?? "" : segments[0] ?? "";

  const options = getTabsByPage(pageKey);

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
