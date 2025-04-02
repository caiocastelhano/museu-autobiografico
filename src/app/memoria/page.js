"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import styles from "@/app/memoria/Memoria.module.css";
import Image from "next/image";

export default function MemoriaPage() {
  return (
    <div className={styles.pageContainer}>
      <Navbar />

      <main className={styles.mainContent}>
        <section className={styles.textBlock}>
          <h1>Memória</h1>
          <p>
            Este é um texto introdutório da página de Memória. Aqui podemos compartilhar lembranças, histórias, e experiências que compõem a trajetória do projeto.
          </p>
        </section>

        <section className={styles.imageBlock}>
          <Image
            src="/images/exemplo.jpg"
            alt="Imagem exemplo"
            width={800}
            height={500}
            className={styles.image}
          />
        </section>

        <section className={styles.videoBlock}>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/SEU_LINK_AQUI"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
            className={styles.video}
          ></iframe>
        </section>

        <section className={styles.videoBlock}>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/SEU_LINK_AQUI"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
            className={styles.video}
          ></iframe>
        </section>

        <section className={styles.videoBlock}>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/SEU_LINK_AQUI"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
            className={styles.video}
          ></iframe>
        </section>

        <section className={styles.videoBlock}>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/SEU_LINK_AQUI"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
            className={styles.video}
          ></iframe>
        </section>
      </main>

      {/* Pontos e estrelas visuais */}
      <div className={styles.star} style={{ top: "120px", left: "80%" }} />
      <div className={styles.star} style={{ top: "420px", left: "30%" }} />
      <div className={styles.dot} style={{ top: "600px", left: "50%" }} />

      <Footer />
    </div>
  );
}
