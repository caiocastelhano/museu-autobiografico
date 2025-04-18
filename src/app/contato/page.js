"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BackToHomeButton from "@/app/components/BackToHomeButton";
import TopMenu from "@/app/components/TopMenu";
import styles from "@/app/contato/Contato.module.css";
import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaYoutube, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

export default function ContatoPage() {
  const [status, setStatus] = useState(null);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await fetch("https://formsubmit.co/ajax/museuautobiografico@gmail.com", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    if (response.ok) {
      setStatus("Mensagem enviada com sucesso!");
      setIsError(false);
      e.target.reset();
    } else {
      setStatus("Ocorreu um erro. Tente novamente.");
      setIsError(true);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <TopMenu />

      <main className={styles.mainContent}>

        <svg
          viewBox="0 0 5000 4000"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.floatingElements}
        >
          {/* Círculos */}
          <circle cx="2750" cy="200" r="50" fill="black" />
          <circle cx="2750" cy="600" r="50" fill="black" />
          <circle cx="2750" cy="1000" r="50" fill="black" />
          <circle cx="2750" cy="300" r="50" fill="black" />
          <circle cx="2750" cy="900" r="50" fill="black" />
          <circle cx="2750" cy="4000" r="50" fill="black" />

          {/* Estrelas */}
          <image href="/images/star.png" x="2750" y="800" width="100" height="100" />
          <image href="/images/star.png" x="2750" y="1200" width="100" height="100" />

          {/* Linha entre dois pontos */}
          <line x1="2100" y1="600" x2="2200" y2="1000" stroke="black" strokeWidth="0.5" /> 
        </svg>

        <div className={styles.twoColumns}>
          {/* Coluna 1: texto + formulário */}
          <div className={styles.leftColumn}>
            <section className={styles.textBlock}>
              <p>
                O <b>museu autobiográfico</b> é parte do percurso de uma <b><u>oficina teatral</u></b> e do trabalho de oficineiro,
                nascido e criado na Zona Leste de São Paulo.
              </p>
              <p>
                <b>Ampliado para experiência digital</b>, torna-se também <b>um espaço aberto a novos desdobramentos e
                parcerias</b>, expandindo territórios físicos e proporcionando novos pontos de contato com pessoas de todo o Brasil.
              </p>
              <p>
                <u>Se quiser saber mais sobre o projeto, propor uma oficina em parceria, colaborar ou compartilhar sua
                experiência, preencha o formulário:</u>
              </p>
            </section>

            <form className={styles.form} onSubmit={handleSubmit}>
              <label htmlFor="name">Nome:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="subject">Assunto:</label>
              <select id="subject" name="subject" required defaultValue="">
                <option value="" disabled hidden>Selecione uma opção:</option>
                <option value="dúvidas">Quero tirar uma dúvida</option>
                <option value="parceria">Quero propor uma parceria</option>
                <option value="feedback">Quero fazer uma sugestão</option>
                <option value="história">Quero contar minha história</option>
              </select>

              <label htmlFor="message">Mensagem:</label>
              <textarea id="message" name="message" rows="5" required />

              <button type="submit">Enviar</button>

              {status && (
                <p className={`${styles.formStatus} ${isError ? styles.errorMessage : styles.successMessage}`}>
                  {status}
                </p>
              )}
            </form>
          </div>

          {/* Coluna 2: imagens + ícones */}
          <div className={styles.rightColumn}>
            <figure className={styles.imageGroup}>
              <Image
                src="/images/contato/foto1_oficina.JPG"
                alt="Equipe Centro Cultural da Penha em 2022"
                width={400}
                height={300}
                className={styles.contactImage}
              />
              {/* <figcaption className={styles.caption}>Equipe Centro Cultural da Penha (2022).</figcaption> */}
            </figure>

            <section className={styles.iconsBlock}>
              <a href="mailto:museuautobiografico@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope size={40} />
              </a>
              <a href="https://wa.me/5511981036621" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={40} />
              </a>
              <a href="https://instagram.com/museuautobiografico" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={40} />
              </a>
              <a href="https://youtube.com/@museuautobiográfico" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={40} />
              </a>
            </section>

            <figure className={styles.imageGroup}>
              <Image
                src="/images/contato/foto2_oficina.JPG"
                alt="Participantes da oficina teatral"
                width={400}
                height={300}
                className={styles.contactImage}
              />
              {/* <figcaption className={styles.caption}>Participantes da oficina teatral (2022).</figcaption> */}
            </figure>
          </div>
        </div>
      </main>

      <BackToHomeButton />
      <Footer />
    </div>
  );
}
