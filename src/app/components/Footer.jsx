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
        <span className={styles.separator} aria-hidden="true"> | </span>
        <span className={styles.break}>
          Criado por Marcelo Rodrigues Maia | Desenvolvido por{" "}
          <a
            href="https://www.caiocastelhano.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
            aria-label="Portfólio de Caio Castelhano - abre em nova aba"
          >
            Caio Castelhano
          </a>
        </span>
      </p>
    </footer>
  );
}
