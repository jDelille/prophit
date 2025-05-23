import React, { useEffect, useRef } from "react";
import styles from "./Navbar.module.scss";
import gsap from "gsap";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const userLinksRef = useRef<HTMLUListElement>(null);
  const favoritesRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
  const tl = gsap.timeline();

  tl.from(logoRef.current, {
    x: -30,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
  });

  const combinedItems: Element[] = [];

  if (linksRef.current) {
    combinedItems.push(...Array.from(linksRef.current.querySelectorAll("li")));
  }
  if (userLinksRef.current) {
    combinedItems.push(...Array.from(userLinksRef.current.querySelectorAll("li")));
  }
  if (favoritesRef.current) {
    combinedItems.push(favoritesRef.current);
  }

  tl.from(combinedItems, {
    x: -50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: "power2.out",
  });
}, []);

  return (
    <div className={styles.navbar}>
      <div className={styles.logo} ref={logoRef}>
        <p>PROPHIT</p>
      </div>

      <ul className={styles.links} ref={linksRef}>
        <li>Games</li>
        <li className={styles.activeLink}>Props</li>
        <li>News</li>
        <li>Leaderboard</li>
        <li>Tools</li>
        <li>Teams</li>
        <li>Settings</li>
        <li>Account</li>
      </ul>

      <ul className={styles.userLinks} ref={userLinksRef}>
        <li>Username</li>
        <li>Sign Out</li>
      </ul>

      <div className={styles.favorites} ref={favoritesRef}>
        <div className={styles.circle}>+</div>
      </div>
    </div>
  );
};

export default Navbar;