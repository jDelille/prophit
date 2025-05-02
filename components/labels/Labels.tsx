import React from "react";
import styles from "./Labels.module.scss";
import { Labels as LabelsType } from "@/constants/labels";
import { SortIcon } from "@/icons";

type LabelsProps = {
  labels: LabelsType[];
};

const Labels: React.FC<LabelsProps> = ({ labels }) => {
  return (
    <div className={styles.labels}>
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
