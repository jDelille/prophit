"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Panel.module.scss";
import { BackArrowIcon } from "@/icons";
import { observer } from "mobx-react-lite";
import playerStore from "@/store/playerStore";

type PanelProps = {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
};

const Panel: React.FC<PanelProps> = ({ isOpen, setIsOpen }) => {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (panelRef.current) {
      if (isOpen) {
        gsap.to(panelRef.current, {
          x: 0,
          duration: 0.5,
          ease: "power3.out",
        });
      } else {
        gsap.to(panelRef.current, {
          x: "100%",
          duration: 0.5,
          ease: "power3.in",
        });
      }
    }
  }, [isOpen]);

  console.log(playerStore.player);

  if (!playerStore.player) {
    return;
  }

  return (
    <div
      ref={panelRef}
      className={styles.panel}
      style={{
        transform: "translateX(100%)",
        position: "fixed",
        top: 0,
        right: 0,
      }}
    >
      <button onClick={() => setIsOpen(false)}>
        <BackArrowIcon size={20} color="black" />
      </button>
      <div className={styles.content}>
        <div className={styles.playerHeader}>
          <div className={styles.playerImgContainer}>
            <img
              src={playerStore.player.teamData.team.logos[0].href}
              className={styles.teamLogo}
              alt=""
            />
            <img
              src={playerStore.player.headshot}
              className={styles.headshot}
              alt=""
            />
            <div
              className={styles.teamColorBanner}
              style={{
                backgroundColor: `#${playerStore.player.teamData.team.color}`,
              }}
            ></div>
          </div>
          <div className={styles.playerNameContainer}></div>
        </div>
      </div>
    </div>
  );
};

export default observer(Panel);
