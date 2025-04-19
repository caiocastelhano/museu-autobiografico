"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/MobileMenu.module.css';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

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
    <div className={styles.mobileMenuContainer}>
      <button
        ref={buttonRef}
        className={styles.burger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>

      {isOpen && (
        <div ref={dropdownRef} className={styles.dropdown}>
          <Link href="/sobre" aria-label="Ir para a página Sobre" onClick={() => setIsOpen(false)}>
            <span className={styles.menuItem}>sobre</span>
          </Link>
          <Link href="/contato" aria-label="Ir para a página Contato" onClick={() => setIsOpen(false)}>
            <span className={styles.menuItem}>contato</span>
          </Link>
        </div>
      )}
    </div>
  );
}
