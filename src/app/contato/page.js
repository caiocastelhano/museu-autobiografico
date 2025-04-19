"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BackToHomeButton from "@/app/components/BackToHomeButton";
import TopMenu from "@/app/components/TopMenu";
import styles from "@/app/contato/Contato.module.css";
import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaYoutube, FaEnvelope, FaSpotify } from "react-icons/fa";
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

      <main className={styles.mainContent} role="main" aria-label="Página de contato">
        <svg
          viewBox="0 0 5000 4000"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.floatingElements}
          aria-hidden="true"
        >
          {/* Círculos */}
          <circle cx="3500" cy="3900" r="16" fill="black" />
          <circle cx="2450" cy="300" r="25" fill="black" />
          <circle cx="2550" cy="500" r="10" fill="black" />
          <circle cx="2480" cy="1300" r="18" fill="black" />
          <circle cx="2590" cy="1900" r="22" fill="black" />
          <circle cx="2680" cy="2700" r="40" fill="black" />
          <circle cx="2500" cy="3500" r="22" fill="black" />
          <circle cx="2750" cy="3700" r="10" fill="black" />
          <circle cx="4700" cy="150" r="10" fill="black" />
          <circle cx="4725" cy="600" r="8" fill="black" />
          <circle cx="4780" cy="1100" r="20" fill="black" />
          <circle cx="4800" cy="2000" r="15" fill="black" />
          <circle cx="4900" cy="2500" r="28" fill="black" />
          <circle cx="4680" cy="3100" r="40" fill="black" />
          <circle cx="4950" cy="3900" r="14" fill="black" />

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

            <form
              className={styles.form}
              onSubmit={handleSubmit}
              role="form"
              aria-labelledby="contato-titulo"
            >
              <h2 id="contato-titulo" className="sr-only">Formulário de Contato</h2>

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

              <button type="submit" aria-label="Enviar mensagem pelo formulário">Enviar</button>

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
            </figure>

            <section className={styles.iconsBlock} aria-label="Redes sociais e contato">
              <a
                href="mailto:museuautobiografico@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enviar e-mail para museuautobiografico@gmail.com"
              >
                <FaEnvelope size={40} />
              </a>
              <a
                href="https://wa.me/5511981036621"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enviar mensagem via WhatsApp"
              >
                <FaWhatsapp size={40} />
              </a>
              <a
                href="https://instagram.com/museuautobiografico"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar o perfil do Museu Autobiográfico no Instagram"
              >
                <FaInstagram size={40} />
              </a>
              <a
                href="https://youtube.com/@museuautobiográfico"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar o canal do Museu Autobiográfico no YouTube"
              >
                <FaYoutube size={40} />
              </a>
              <a
                href="https://open.spotify.com/user/31gbqydgyefxass2gfzubdmofsqm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar o perfil do Museu Autobiográfico no Spotify"
              >
                <FaSpotify size={40} />
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
            </figure>
          </div>
        </div>
      </main>

      <BackToHomeButton />
      <Footer />
    </div>
  );
}
