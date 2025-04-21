import React from "react";
import styles from "./Categories.module.scss";
import { getCategoriesByLeague } from "@/constants/propCategories";

type CategoriesProps = {
  prop: string;
  setProp: (prop: string) => void;
  league: string;
};

const Categories: React.FC<CategoriesProps> = ({ prop, setProp, league }) => {
  const categoryList = getCategoriesByLeague(league);

  return (
    <div className={styles.categories}>
      {categoryList.map((category) => (
        <button
          key={category.id}
          className={styles.category}
          type="button"
          onClick={() => setProp(category.name)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default Categories;
