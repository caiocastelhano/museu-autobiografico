"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BackToHomeButton from "@/app/components/BackToHomeButton";
import TopMenu from "@/app/components/TopMenu";
import styles from "@/app/contato/Contato.module.css";
import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaYoutube, FaEnvelope } from "react-icons/fa";

export default function ContatoPage() {
  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <TopMenu />

      <main className={styles.mainContent}>
        {/* Título + Parágrafos */}
        <section className={styles.textBlock}>
          <p>O <b>museu autobiográfico</b> é parte do percurso de uma <b><u>oficina teatral</u></b> e do trabalho de oficineiro, nascido e 
            criado na Zona Leste de São Paulo.</p>

          <p><b>Ampliado para experiência digital</b>, torna-se também <b>um espaço aberto a novos desdobramentos e parcerias_, 
            expandindo territórios físicos</b> e proporcionando novos pontos de contato com pessoas de todo o Brasil.</p>

          <p><u>Se quiser saber mais sobre o projeto, propor uma oficina em parceria, colaborar ou compartilhar sua 
            experiência, preencha o formulário:</u></p>
        </section>

        {/* Formulário */}
        <section className={styles.formBlock}>
          <form
            className={styles.form}
            action="https://formsubmit.co/museuautobiografico@gmail.com"
            method="POST"
          >
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Mensagem</label>
            <textarea id="message" name="message" rows="5" required />

            {/* Anti-spam (opcional) */}
            <input type="hidden" name="_captcha" value="false" />

            <button type="submit">Enviar</button>
          </form>
        </section>

        {/* Imagens */}
        <section className={styles.imageBlock}>
          <figure className={styles.imageGroup}>
            <Image
              src="/images/contato/foto1_oficina.JPG"
              alt="Equipe Centro Cultural da Penha em foto de 2022 da oficina"
              width={400}
              height={300}
              className={styles.contactImage}
            />
            <Image
              src="/images/contato/foto2_oficina.JPG"
              alt="Equipe Centro Cultural da Penha em foto de 2022 da oficina"
              width={400}
              height={300}
              className={styles.contactImage}
            />
            <figcaption className={styles.caption}>
              Equipe Centro Cultural da Penha (2022).
            </figcaption>
          </figure>
        </section>

        {/* Ícones de redes sociais */}
        <section className={styles.iconsBlock}>
          <a href="mailto:museuautobiografico@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={28} />
          </a>
          <a href="https://wa.me/5511981036621" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={28} />
          </a>
          <a href="https://instagram.com/SEUUSUARIO" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={28} />
          </a>
          <a href="https://youtube.com/@museuautobiográfico" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={28} />
          </a>
        </section>
      </main>

      <BackToHomeButton />
      <Footer />
    </div>
  );
}
