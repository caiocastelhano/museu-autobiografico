"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import styles from "../styles/InternalMenu.module.css";

export default function InternalMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const sections = [
    { label: "museu", href: "/museu" },
    { label: "autobiográfico", href: "/autobiografico" },
    { label: "território", href: "/territorio" },
    { label: "leste", href: "/leste" },
    { label: "corpo", href: "/corpo" },
    { label: "memória", href: "/memoria" },
    { label: "sobre", href: "/sobre" },
    { label: "contato", href: "/contato" },
  ];

  const filteredSections = sections.filter(
    (section) => section.href !== pathname
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.menuContainer}>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen((prev) => !prev)}
        className={styles.burger}
        aria-label={isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
        aria-expanded={isOpen}
        aria-controls="menu-interno"
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className={styles.dropdown}
          id="menu-interno"
          role="menu"
        >
          {filteredSections.map((section) => (
            <Link 
              key={section.href} 
              href={section.href} 
              className={styles.menuItem} 
              onClick={() => setIsOpen(false)} 
              role="menuitem">
            {section.label}
          </Link>
          ))}
        </div>
      )}
    </div>
  );
}
