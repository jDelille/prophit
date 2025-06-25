"use client";

import React, { useEffect, useRef } from "react";
import { getLabelsByLeague} from "@/constants/labels";
import { SortIcon } from "@/icons";
import gsap from "gsap";
import apiStore from "@/store/apiStore";
import styles from "./Labels.module.scss";

type LabelsProps = {};

const Labels: React.FC<LabelsProps> = () => {
  const labelsRef = useRef<HTMLDivElement>(null);

  const labels = getLabelsByLeague(apiStore.league);

  useEffect(() => {
    if (!labelsRef.current) return;

    const items = labelsRef.current.querySelectorAll(`.${styles.label}`);

    gsap.set(items, { y: 40, opacity: 0 });

    const tl = gsap.timeline();

    tl.to(items, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.05,
      ease: "power2.out",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className={styles.labels} ref={labelsRef}>
      {labels.map((label, i) => (
        <div key={label.id} className={styles.label}>
          {label.name}
          {label.canSort && <SortIcon size={14} color="gray" />}
        </div>
      ))}
    </div>
  );
};

export default Labels;
