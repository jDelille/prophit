import React from 'react';
import styles from './Filters.module.scss';

type FiltersProps = {
 
 }
const Filters: React.FC<FiltersProps> = () => {
  return (
    <div className={styles.filter}>
      <ul>
        <li>All</li>
        <li className={styles.active}>Points</li>
        <li>Rebounds</li>
        <li>Assists</li>
        <li>3 Pointers</li>
        <li>Steals</li>
        <li>Blocks</li>
        <li>Points + Assists</li>
        <li>Points + Rebounds</li>
        <li>Rebounds + Assists</li>
        <li>Points + Rebounds + Assists</li>
      </ul>
    </div>
  );
};

export default Filters;