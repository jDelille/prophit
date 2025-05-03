import React from 'react';
import styles from './Navbar.module.scss';

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.navbarContent}>
            <div className={styles.logo}>PROP<span>HIT</span></div>
            <ul className={styles.links}>
                <li>NBA</li>
                <li>MLB</li>
                <li>NFL</li>
                <li>NHL</li>
                <li>Golf</li>
                <li>Soccer</li>
            </ul>
        </div>
     
    </div>
  );
};

export default Navbar;