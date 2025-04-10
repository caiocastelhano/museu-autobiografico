"use client";

import styles from '../styles/Footer.module.css';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const footerClass = isHomePage ? styles.footerHome : styles.footerPage;

  return (
    <footer className={footerClass}>
      <p className={styles.footerText}>
        <span className={styles.break}>
          Museu Autobiográfico © 2025 | Todos os direitos reservados
        </span>
        <span className={styles.separator}> | </span>
        <span className={styles.break}>
          Criado por Marcelo Rodrigues Maia | Desenvolvido por{" "}
          <a
            href="https://caiocastelhano.github.io/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            Caio Castelhano
          </a>
        </span>
      </p>
    </footer>
  );
}
