import React, { useEffect, useRef } from "react";
import styles from "./Toggle.module.scss";
import gsap from "gsap";

type ToggleProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
};

const Toggle: React.FC<ToggleProps> = ({ checked, onChange, label }) => {
      const knobRef = useRef<HTMLSpanElement>(null);
  const trackRef = useRef<HTMLSpanElement>(null);

   useEffect(() => {
    if (!knobRef.current || !trackRef.current) return;

    gsap.to(knobRef.current, {
      x: checked ? 20 : 0,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(trackRef.current, {
      backgroundColor: checked ? "#407ce4" : "#7bb8fa",
      duration: 0.3,
      ease: "power2.out",
    });
  }, [checked]);


  return (
    <label className={styles.toggleWrapper}>
      {label && <span className={styles.label}>{label}</span>}
      <input
        type="checkbox"
        className={styles.toggleInput}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className={styles.track} ref={trackRef}>
        <span className={styles.knob} ref={knobRef} />
      </span>
    </label>
  );
};

export default Toggle;