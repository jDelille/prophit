"use client";

import React, { useEffect, useRef } from "react";
import styles from "./Header.module.scss";
import Filters from "../filters/Filters";
import gsap from "gsap";
import { usePathname } from "next/navigation";

type HeaderProps = {
  setProp: (val: string) => void;
  activeProp: string;
  options: string[];
};

const Header: React.FC<HeaderProps> = ({ setProp, activeProp, options }) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!titleRef.current || !filtersRef.current) return;

    // Set initial hidden state
    gsap.set(titleRef.current, { y: -40, opacity: 0 });
    gsap.set(filtersRef.current, { y: -20, opacity: 0 });

    const tl = gsap.timeline();

    tl.to(titleRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    }).to(
      filtersRef.current,
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      },
      "<"
    );

    return () => {
      tl.kill();
    };
  }, [pathname]);


  return (
    <div className={styles.header}>
      <div className={styles.title} ref={titleRef}>
        <p>{pathname.split("/")[1]}</p>
      </div>

      <div ref={filtersRef}>
        <Filters setProp={setProp} activeProp={activeProp} options={options} />
      </div>
    </div>
  );
};

export default Header;
