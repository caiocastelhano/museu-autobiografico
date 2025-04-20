"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BackToHomeButton from "@/app/components/BackToHomeButton";
import TopMenu from "@/app/components/TopMenu";
import styles from "@/app/sobre/Sobre.module.css";
// import Image from "next/image";
// import Link from "next/link";
// import FadeInSection from "@/app/components/FadeInSection";

export default function SobrePage() {
  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <TopMenu />

      <main className={styles.mainContent}>
        <h1 className={styles.visuallyHidden}>Página Sobre</h1>
      </main>

      <BackToHomeButton />
      <Footer />
    </div>
  );
}
