import React from "react";
import styles from "./Categories.module.scss";

type CategoriesProps = {
  prop: string;
  setProp: (prop: string) => void;
};

const Categories: React.FC<CategoriesProps> = ({ prop, setProp }) => {
  const categoryList = [
    {
      id: 6719,
      name: "Hits O/U",
    },
    {
      id: 17321,
      name: "Total Bases",
    },
  ];

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
