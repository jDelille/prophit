import React from "react";
import styles from "./Header.module.scss";
import Filters from "../filters/Filters";

type HeaderProps = {
};
const Header: React.FC<HeaderProps> = () => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <p>Props</p>
      </div>

      <Filters />
    </div>
  );
};

export default Header;
