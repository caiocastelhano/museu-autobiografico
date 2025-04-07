// TopMenu.jsx
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "../styles/Page.module.css";
import MobileMenu from "./MobileMenu";

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

  // Só renderiza o menu se estiver na home
  if (pathname !== "/") return null;

  return (
    <>
      {isMobile ? (
        <div className={styles.menuMobileWrapper}>
        <MobileMenu />
        </div>
      ) : (
        <div className={styles.topLinks}>
          <Link href="/sobre">
            <div className={styles.sobre}>sobre/about</div>
          </Link>
          <Link href="/contato">
            <div className={styles.contato}>contato/contact</div>
          </Link>
        </div>
      )}
    </>
  );
}
