import React from "react";
import styles from "./Navbar.module.scss";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <p>PROPHIT</p>
      </div>
      <ul className={styles.links}>
        <li>Games</li>
        <li className={styles.activeLink}>Props</li>
        <li>News</li>
        <li>Leaderboard</li>
        <li>Tools</li>
        <li>Teams</li>
        <li>Settings</li>
        <li>Account</li>
      </ul>

      <ul className={styles.userLinks}>
        <li>Username</li>
        <li>Sign Out</li>
      </ul>

      <div className={styles.favorites}>
        <div className={styles.circle}>+</div>
      </div>
    </div>
  );
};

export default Navbar;
