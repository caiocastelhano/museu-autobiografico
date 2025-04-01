"use client";

import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import styles from "./styles/Page.module.css";
import Link from "next/link";
import DesktopConstellation from "./components/DesktopConstellation";
import MobileConstellation from "./components/MobileConstellation";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768); // breakpoint para mobile
    }
    handleResize(); // checa logo no carregamento
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.pageContainer}>
      <Navbar />

      {/* "sobre/about" e "contato/contact" */}
      <Link href="/sobre">
        <div className={styles.sobre}>sobre/about</div>
      </Link>
      <Link href="/contato">
        <div className={styles.contato}>contato/contact</div>
      </Link>

      {/* Renderiza a constelação de acordo com o dispositivo */}
      {isMobile ? <MobileConstellation /> : <DesktopConstellation />}

      <Footer />
    </div>
  );
}
