"use client";
import { useState, useId } from "react";
import styles from "../styles/Accordion.module.css";

export default function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const accordionId = useId(); // gera ID único para acessibilidade

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.accordion}>
      <button
        className={styles.header}
        onClick={toggleAccordion}
        aria-expanded={isOpen}
        aria-controls={`content-${accordionId}`}
        id={`accordion-title-${accordionId}`}
      >
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.icon}>{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div
          className={styles.content}
          id={`content-${accordionId}`}
          role="region"
          aria-labelledby={`accordion-title-${accordionId}`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
