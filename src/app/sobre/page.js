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
      <div className="spacer" />
      <TopMenu />

      <main className={styles.mainContent}>
        <h1 className={styles.visuallyHidden}>Página Sobre</h1>

        <section className={styles.aboutIntroSection}>
          <p>
            <b>O Museu Autobiográfico e Território_Leste</b> é um espaço de criação, escuta e partilha. Um lugar onde memórias viram 
            matéria cênica e onde o corpo é arquivo vivo de histórias.
          </p>

          <p>
            {/* Segundo parágrafo */}
            Surgido como <b>oficina teatral</b>, o projeto propõe uma prática de mediação afetiva entre pessoas e seus territórios, 
            ativando experiências singulares que, ao serem compartilhadas, tornam-se coletivas.
          </p>

          <p>
            {/* Terceiro parágrafo */}
            Hoje, <b>expandido para o ambiente digital</b>, o Museu não apenas guarda suas histórias — ele as compartilha. <u>A 
            experiência online amplia o gesto da oficina: constrói-se no encontro entre trajetórias individuais, em 
            diálogo com o que é íntimo e coletivo</u>. Um espaço onde novos visitantes também são convidados a criar vínculos 
            com o que veem, ouvem e sentem.
          </p>
        </section>



      </main>

      <BackToHomeButton />
      <Footer />
    </div>
  );
}
