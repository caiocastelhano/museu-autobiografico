"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "../styles/Page.module.css";
import MobileMenu from "./MobileMenu";
import InternalMenu from "./InternalMenu";

export default function TopMenu() {
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    function handleMediaChange(e) {
      setIsMobile(e.matches);
    }

    // Já define no carregamento
    handleMediaChange(mediaQuery);

    // Escuta mudanças de viewport
    mediaQuery.addEventListener("change", handleMediaChange);

    // Limpa ao desmontar
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  // Home (desktop): mostrar "sobre" e "contato"
  if (pathname === "/" && !isMobile) {
    return (
      <>
        <Link
          href="/sobre"
          className={styles.sobre}
          aria-label="Ir para a seção Sobre"
        >
          sobre
        </Link>
        <Link
          href="/contato"
          className={styles.contato}
          aria-label="Ir para a seção Contato"
        >
          contato
        </Link>
      </>
    );
  }

  // Home (mobile): mostrar menu hambúrguer
  if (pathname === "/" && isMobile) {
    return (
      <div className={styles.menuMobileWrapper}>
        <MobileMenu />
      </div>
    );
  }

  // Páginas internas (desktop e mobile): mostrar InternalMenu
  return (
    <div
      className={styles.menuWrapperInterna}
      role="navigation"
      aria-label="Menu de navegação entre seções internas"
    >
      <InternalMenu />
    </div>
  );
}
