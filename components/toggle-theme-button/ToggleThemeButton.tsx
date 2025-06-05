import React from "react";
import { useTheme } from "next-themes";
import styles from "./ToggleThemeButton.module.scss";

type ToggleThemeButtonProps = {};
const ToggleThemeButton: React.FC<ToggleThemeButtonProps> = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button className={styles.button} onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ToggleThemeButton;
