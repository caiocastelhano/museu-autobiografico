"use client";

import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import styles from "./styles/Page.module.css";
import Link from "next/link";
import DesktopConstellation from "./components/DesktopConstellation";
import MobileConstellation from "./components/MobileConstellation";
import MobileMenu from "./components/MobileMenu";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768); // breakpoint para mobile
    }

    handleResize(); // verifica ao carregar
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.pageContainer}>
      <Navbar />

      {isMobile && <MobileMenu />}

      {!isMobile && (
        <>
          <Link href="/sobre">
            <div className={styles.sobre}>sobre/about</div>
          </Link>
          <Link href="/contato">
            <div className={styles.contato}>contato/contact</div>
          </Link>
        </>
      )}

      {isMobile ? <MobileConstellation /> : <DesktopConstellation />}

      <Footer />
    </div>
  );
}
