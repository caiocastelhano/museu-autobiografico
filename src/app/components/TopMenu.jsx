// TopMenu.jsx
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
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // SEÇÕES DO SITE (sem "agradecimentos")
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

  // Home na versão desktop: sem menu
  if (pathname === "/" && !isMobile) return null;

  // Home no mobile: só sobre e contato
  if (pathname === "/" && isMobile) {
    return (
      <div className={styles.menuMobileWrapper}>
        <MobileMenu />
      </div>
    );
  }

  // Internas (desktop e mobile): todas as seções menos a atual
  const filteredSections = sections.filter(section => section.href !== pathname);

  return (
    <div className={styles.menuWrapperInterna}>
      <InternalMenu />
    </div>
  );
}
