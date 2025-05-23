import React, { useEffect, useRef } from "react";
import styles from "./Labels.module.scss";
import { Labels as LabelsType } from "@/constants/labels";
import { SortIcon } from "@/icons";
import gsap from "gsap";

type LabelsProps = {
  labels: LabelsType[];
};

const Labels: React.FC<LabelsProps> = ({ labels }) => {
  const labelsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(labelsRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    })
  }, []);


  return (
    <div className={styles.labels} ref={labelsRef}>
      {labels.map((label, i) => (
        <div key={label.id} className={styles.label}>
          {label.name}
          {label.canSort && <SortIcon size={14} color="black"/>}
        </div>
      ))}
    </div>
  );
};

export default Labels;
