import React, { useEffect, useRef } from "react";
import styles from "./Header.module.scss";
import Filters from "../filters/Filters";
import gsap from "gsap";

type HeaderProps = {
  setProp: (val: string) => void;
  activeProp: string;
};

const Header: React.FC<HeaderProps> = ({ setProp, activeProp }) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Title slides down
    tl.from(titleRef.current, {
      y: -40,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    // Filters fade in and slide slightly
    tl.from(filtersRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });
  }, []);

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={styles.header}>
      <div className={styles.title} ref={titleRef}>
        <p>Props</p>
        {/* <p>{today}</p> Uncomment this if you want to display the full date */}
      </div>

      {/* Wrap Filters in a div to target it for animation */}
      <div ref={filtersRef}>
        <Filters setProp={setProp} activeProp={activeProp} />
      </div>
    </div>
  );
};

export default Header;