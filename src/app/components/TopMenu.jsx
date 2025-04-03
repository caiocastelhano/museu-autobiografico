// components/TopMenu.jsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import styles from "../styles/Page.module.css"; // ou outro css central

export default function TopMenu() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile ? (
    <MobileMenu />
  ) : (
    <div className={styles.desktopMenu}>
      <Link href="/sobre"><div className={styles.sobre}>sobre/about</div></Link>
      <Link href="/contato"><div className={styles.contato}>contato/contact</div></Link>
    </div>
  );
}
