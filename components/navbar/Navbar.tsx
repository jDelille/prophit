"use client";
import React, { useEffect, useRef } from "react";
import styles from "./Navbar.module.scss";
import gsap from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const userLinksRef = useRef<HTMLUListElement>(null);
  const favoritesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (
      !logoRef.current ||
      !linksRef.current ||
      !userLinksRef.current ||
      !favoritesRef.current
    )
      return;

    // Reset to hidden state
    gsap.set(logoRef.current, { x: -30, opacity: 0 });
    gsap.set(linksRef.current.querySelectorAll("li"), { x: -50, opacity: 0 });
    gsap.set(userLinksRef.current.querySelectorAll("li"), {
      x: -50,
      opacity: 0,
    });
    gsap.set(favoritesRef.current, { x: -50, opacity: 0 });

    const tl = gsap.timeline();

    tl.to(logoRef.current, {
      x: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });

    const combinedItems: Element[] = [];

    combinedItems.push(...Array.from(linksRef.current.querySelectorAll("li")));
    combinedItems.push(
      ...Array.from(userLinksRef.current.querySelectorAll("li"))
    );
    combinedItems.push(favoritesRef.current);

    tl.to(combinedItems, {
      x: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
    });

    return () => {
      tl.kill();
    };
  }, []);

  const isActiveLink = (path: string) => {
    if (pathname === path) return styles.activeLink;
    if (pathname !== path) return styles.link;
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logo} ref={logoRef}>
        <p>PROPHIT</p>
      </div>

      <ul className={styles.links} ref={linksRef}>
        <li>
          {" "}
          <Link href={"/games"} className={isActiveLink("/games")}>
            Games
          </Link>
        </li>
        <li>
          <Link href={"/props"} className={isActiveLink("/props")}>
            Props
          </Link>
        </li>
        <li>
          <Link href={"/news"} className={isActiveLink("/news")}>
            News
          </Link>
        </li>
        <li>
          <Link href={"/leaderboard"} className={isActiveLink("/leaderboard")}>
            Leaderboard
          </Link>
        </li>
        <li>
          <Link href={"/tools"} className={isActiveLink("/tools")}>
            Tools
          </Link>
        </li>
        <li>
          <Link href={"/teams"} className={isActiveLink("/teams")}>
            Teams
          </Link>
        </li>
        <li>
          <Link href={"/settings"} className={isActiveLink("/settings")}>
            Settings
          </Link>
        </li>
        <li>
          <Link href={"/account"} className={isActiveLink("/account")}>
            Account
          </Link>
        </li>
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
