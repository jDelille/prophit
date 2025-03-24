"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { DropdownArrowIcon } from "@/app/icons";
import "./dropdownSelect.scss";

type Option = {
  label: string;
  value: string;
  icon?: React.ReactNode;
};

type DropdownSelectProps = {
  options: Option[] | any;
  defaultValue?: string;
  onSelect: (value: string) => void;
  hasCheckboxes?: boolean;
};
const DropdownSelect: React.FC<DropdownSelectProps> = ({
  options,
  defaultValue,
  onSelect,
  hasCheckboxes
}) => {
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  console.log(options)

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue || options[0].value);

  const handleSelect = (value: string) => {
    setSelected(value);
    onSelect(value);
    router.push(`/${value.toLowerCase()}/props`);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-select-wrapper" ref={dropdownRef}>
      <button
        className="dropdown-select-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <div className="dropdown-select-trigger-container">
          <div className="trigger-icon">{/* Sport icon here */}</div>
          <span className="trigger-text">{defaultValue}</span>
          <DropdownArrowIcon color="#33363F" size={20} />
        </div>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li
              key={option.value}
              className={`menu-option ${
                option.value === selected ? "selected" : ""
              }`}
              onClick={() => handleSelect(option.label)}
            >
              {option.icon && <div className="option-icon">{option.icon}</div>}
              {hasCheckboxes && <div className="checkbox"></div>}
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownSelect;
