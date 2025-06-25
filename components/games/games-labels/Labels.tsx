import React from 'react';
import styles from './Labels.module.scss';

type LabelsProps = {
 
 }
const Labels: React.FC<LabelsProps> = () => {
  return (
    <div className={styles.labels}>
      <p className={styles.sortBy}>Sort by: Schedule</p>
      <p className={styles.label}>Open</p>
      <p className={styles.label}>Close</p>
      <p className={styles.label}>% Of Bets</p>
      <p className={styles.label}>% Of Money</p>
    </div>
  );
};

export default Labels;