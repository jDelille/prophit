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

    // 1. Logo animation
    tl.from(logoRef.current, {
      x: -30,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    // 2. Main links animation
    if (linksRef.current) {
      const items = linksRef.current.querySelectorAll("li");

      tl.from(items, {
        x: -50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    }

    // 3. User links animation
    if (userLinksRef.current) {
      const userItems = userLinksRef.current.querySelectorAll("li");

      tl.from(userItems, {
        x: -50,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: "power2.out",
      });
    }

    // 4. Favorites fade-in
    if (favoritesRef.current) {
      tl.from(favoritesRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.4,
        ease: "back.out(1.7)",
      });
    }
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