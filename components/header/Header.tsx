import React from "react";
import styles from "./Header.module.scss";
import Filters from "../filters/Filters";

type HeaderProps = {
    propCount: number;
};
const Header: React.FC<HeaderProps> = ({propCount}) => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.left}>
          <h1>NBA Player Props</h1>
          <p className={styles.date}>Best NBA Props for {today}</p>
        </div>
        <div className={styles.right}>
          <div className={styles.statBoxes}>
            <div className={styles.statBox}>
                <p>Props Available</p>
                <span>{propCount}</span>
            </div>
            <div className={styles.statBox}>
                <p>Strong Picks</p>
                <span>3</span>
            </div>
            <div className={styles.statBox}>d</div>
          </div>
        </div>
      </div>
      <Filters />
    </div>
  );
};

export default Header;
