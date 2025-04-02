"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/MobileMenu.module.css';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.mobileMenuContainer}>
      <button className={styles.burger} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <Link href="/sobre" onClick={() => setIsOpen(false)}>sobre/about</Link>
          <Link href="/contato" onClick={() => setIsOpen(false)}>contato/contact</Link>
        </div>
      )}
    </div>
  );
}
