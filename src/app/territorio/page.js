"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BackToHomeButton from "@/app/components/BackToHomeButton";
import TopMenu from "@/app/components/TopMenu";
import styles from "@/app/territorio/Territorio.module.css";
import Image from "next/image";
// import Link from "next/link";
// import FadeInSection from "@/app/components/FadeInSection";

export default function TerritorioPage() {
  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <TopMenu />

      <main className={styles.mainContent}>
        <h1 className={styles.visuallyHidden}>Página Território</h1>

        {/* Bloco inicial com figura geométrica (lado direito) e texto + áudio (lado esquerdo) */}
        <section className={styles.introSection}>
          <div className={styles.introContentWrapper}>

            <svg
              className={styles.svgShapeIntro}
              viewBox="200 300 200 200"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="territorioShapeTitle"
            >
              <title id="territorioShapeTitle">Figura geométrica com a palavra território</title>
              <g>
                <polygon points="260,365 340,365 360,435 300,465 260,435" fill="white" stroke="black" strokeWidth="1" />
                <circle cx="260" cy="365" r="3" fill="black" />
                <circle cx="340" cy="365" r="2" fill="black" />
                <circle cx="360" cy="435" r="3.5" fill="black" />
                <circle cx="300" cy="465" r="1.5" fill="black" />
                <circle cx="260" cy="435" r="2" fill="black" />
                <text
                  x="304"
                  y="413"
                  textAnchor="middle"
                  fontSize="16"
                  fontFamily="Inter, sans-serif"
                  fill="black"
                >
                  território
                </text>
              </g>
            </svg>

            <div className={styles.introTextBlock}>
              <h2>Se eu encontrasse o meu bairro na rua...</h2>
              <h3>Depoimento de Jussara Dias (São Mateus, SP)</h3>

              <figure>
                <Image
                  src="/images/territorio/jussaradias.png"
                  alt="Foto relacionada ao território"
                  width={500}
                  height={300}
                  className={styles.image}
                />
              </figure>

              <figure>
                <audio controls className={styles.audio}>
                  <source src="/audio/audiojussara.ogg" type="audio/mpeg" />
                  Seu navegador não suporta o elemento de áudio.
                </audio>
              </figure>

              <blockquote>
                <p>
                  &quot;<i>Se eu encontrasse o meu bairro na rua, diria que estou de mudança e venho refletindo… como vou andar pela cidade?  Meu ponto de partida sempre foi aqui. Mas demorei muito para perceber que não era apenas um ponto de partida – era também um destino.</i>
                </p>
                <p>
                  <i>Hoje, com mais maturidade, consigo enxergar suas potencialidades:
                  a sua história, a sua presença política e principalmente as pessoas que têm e que as mesmas construíram</i>.&quot;
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Bloco dois parágrafos abaixo da introSection */}
        <section>
          <p>
            Como parte do último encontro da terceira rodada da oficina realizada na Biblioteca Cassiano Ricardo em 2024, a participante Jussara Dias, psicóloga e moradora de São Mateus, leu seu pequeno texto, desenvolvido a partir do título: Se eu encontrasse meu bairro na rua, eu diria o seguinte...
          </p>
          <p>
            Para ela, a proposta de escrita foi uma oportunidade de rememorar sua vida no bairro e compreender a mudança para sua nova casa, em outra região.
          </p>
          <p>
            As palavras de Jussara ecoam uma verdade: o bairro não é só cenário, é personagem. O território pulsa, escuta, transforma e é transformado. 
          </p>
        </section>

        {/* Bloco Linha do tempo */}
        <section>
          <p>
            <b>AQUI VAI FICAR A LINHA DO TEMPO</b>
          </p>
        </section>

        {/* Bloco Viewpoints e Composição */}

        {/* Bloco Duas Colunas: espaço e tempo */}


        {/* Bloco Uma Coluna: composição */}


        {/* Bloco Texto + Quote do Marcelo */}

      </main>

      <BackToHomeButton />
      <Footer />
    </div>
  );
}
