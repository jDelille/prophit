import React from "react";
import styles from "./Labels.module.scss";
import { Labels as LabelsType } from "@/constants/labels";

type LabelsProps = {
  labels: LabelsType[];
};

const Labels: React.FC<LabelsProps> = ({ labels }) => {
  return (
    <div className={styles.labels}>
      {labels.map((label, i) => (
        <div key={label.id} className={styles.label}>
          {label.name}
        </div>
      ))}
    </div>
  );
};

export default Labels;
