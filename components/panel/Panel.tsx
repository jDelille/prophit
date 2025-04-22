"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Panel.module.scss';
import { BackArrowIcon } from '@/icons';

type PanelProps = {
    isOpen: boolean;
    setIsOpen: (val: boolean) => void;
};

const Panel: React.FC<PanelProps> = ({isOpen, setIsOpen}) => {
    const panelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (panelRef.current) {
          if (isOpen) {
            gsap.to(panelRef.current, {
              x: 0,
              duration: 0.5,
              ease: 'power3.out',
            });
          } else {
            gsap.to(panelRef.current, {
              x: '100%',
              duration: 0.5,
              ease: 'power3.in',
            });
          }
        }
      }, [isOpen]);

  return (
    <div
    ref={panelRef}
    className={styles.panel}
    style={{ transform: 'translateX(100%)', position: 'fixed', top: 0, right: 0 }}
  >
    <button onClick={() => setIsOpen(false)}>
      <BackArrowIcon size={20} color="black" />
    </button>
    <p>content</p>
  </div>
  );
};

export default Panel;