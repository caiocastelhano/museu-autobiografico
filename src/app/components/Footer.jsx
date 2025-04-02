"use client";

import styles from '../styles/Footer.module.css';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const footerClass = isHomePage ? styles.footerHome : styles.footerPage;

  return (
    <footer className={footerClass}>
      <p>Museu Autobiográfico © 2025 | Todos os direitos reservados | Desenvolvido por Caio Castelhano</p>
    </footer>
  );
}
