"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TopMenu from "./components/TopMenu";
import DesktopConstellation from "./components/DesktopConstellation";
import MobileConstellation from "./components/MobileConstellation";
import styles from "./styles/Page.module.css";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <TopMenu />

      {/* Constelações: mostra só uma por vez */}
      {isMobile ? <MobileConstellation /> : <DesktopConstellation />}

      <Footer />
    </div>
  );
}
