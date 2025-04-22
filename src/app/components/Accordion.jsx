"use client";
import { useState } from "react";
import styles from "../styles/Accordion.module.css";

export default function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordion}>
      <button className={styles.header} onClick={toggleAccordion}>
        {title}
        <span className={styles.icon}>{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && <div className={styles.content}>{children}</div>}
    </div>
  );
}
