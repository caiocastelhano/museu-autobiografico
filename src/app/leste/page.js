"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BackToHomeButton from "@/app/components/BackToHomeButton";
import TopMenu from "@/app/components/TopMenu";
import styles from "@/app/leste/Leste.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LestePage() {
  const totalImages = 20;
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleKeyDown = (e) => {
    if (currentIndex !== null) {
      if (e.key === "Escape") {
        setCurrentIndex(null);
      } else if (e.key === "ArrowRight" && currentIndex < totalImages - 1) {
        setCurrentIndex(currentIndex + 1);
      } else if (e.key === "ArrowLeft" && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <TopMenu />

      <main className={styles.mainContent}>
        <h1 className={styles.visuallyHidden}>Página Leste</h1>

        <div className={styles.splitLayout}>
          <div className={styles.leftColumn}>
            <div className={styles.imageGridDesktop}>
              {[...Array(20)].map((_, index) => (
                <div
                  key={index}
                  className={styles.imageWrapper}
                  onClick={() => setCurrentIndex(index)}
                >
                  <Image
                    src={`/images/leste/leste${index + 1}.jpeg`}
                    alt="Encontro no Centro Cultural da Penha | Fotos de 2022 feitas por participantes da oficina"
                    width={120}
                    height={90}
                    className={styles.gridImage}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.lesteShapeIntro}>
                <svg
                  viewBox="460 360 140 120"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-labelledby="lesteShapeTitle"
                  role="img"
                >
                  <title id="lesteShapeTitle">Figura geométrica com a palavra leste</title>
                  <g className={styles.hoverText}>
                    <polygon points="500,368 560,383 575,428 515,458 470,413" fill="white" stroke="black" strokeWidth="1" />
                    <circle cx="500" cy="368" r="2" fill="black" />
                    <circle cx="560" cy="383" r="2.5" fill="black" />
                    <circle cx="575" cy="428" r="4" fill="black" />
                    <circle cx="515" cy="458" r="1.5" fill="black" />
                    <circle cx="470" cy="413" r="3" fill="black" />
                    <text x="524" y="410" className={styles.shapeText} textAnchor="middle">leste</text>
                  </g>
                </svg>
              </div>

              <div className={styles.textContent}>
                <p>
                  <b>_LESTE</b> começou como uma coordenada no mapa da minha história como cidadão paulistano. Mas aos poucos, <b>virou linguagem</b>. Virou gesto e metáfora da minha oficina.
                </p>

                <p>
                  Sou filho de <u>mãe solo</u>, professora e cresci no que se entende como periferia. Por grande parte da minha vida, morei numa rua do <b>Parque Boturussu</b>, bairro de <b>Ermelino Matarazzo, na Zona Leste de São Paulo</b>. Cresci como morador da famosa rua do cartório da Ponte Rosa e com o desejo de ser artista para poder sair daquele lugar que não me identificava.
                </p>

                <p>
                  Desde cedo, aliás, fui atravessado pela <u>sensação de ser fora de lugar</u>.
                </p>

                <div className={styles.imageGridMobile}>
                  {[1, 4, 8, 14, 19].map((i) => (
                    <Image
                      key={i}
                      src={`/images/leste/leste${i}.jpeg`}
                      alt="Foto da oficina"
                      width={600}
                      height={400}
                      className={styles.gridImageMobile}
                    />
                  ))}
                </div>

                <p>
                  E foi quando precisei atravessar meu ponto de partida em São Paulo para ser um <b>estudante de artes cênicas</b> que me senti ainda mais deslocado. <u>Meu corpo, minha origem, minha história pareciam não caber ali, me faziam parecer performar o estar ali</u>. A cultura, que tanto me formou, também me afastava. Falar bem, gostar de arte, querer ser artista parecia não combinar com o <b>CEP</b> que estava escrito no meu endereço e parecia ser algo decisivo para o meu sucesso ou insucesso.
                </p>

                <p>
                  Durante muito tempo, desejei me adequar e até me adequei, <u>mas depois mudei meu olhar ao adentrar no mundo da mediação e arte educação</u>. Hoje, reconheço esse desconforto da juventude e transformo ele em força.
                </p>

                <p> 
                  <b>A força de quem sabe que um espaço não precisa parecer com você para ser seu</b>.
                </p>

                <p>
                  A oficina <b><i>Museu Autobiográfico e Território_Leste</i></b> nasce desse movimento. Primeiro como gesto político da minha existência, depois como oficina e agora como presença digital para expandir territórios.
                </p>

                <p>  
                  Propor à _Zona Leste como ponto de partida da oficina foi, para mim, um gesto de <b>pertencimento</b>. Foi entender que a <b>mediação afetiva</b> é também um modo de construir vínculos, confiança e possibilidade de futuro, com a criação de um museu e de coletivos que nascem a partir das relações.
                </p>

                <p>  
                  Como artista, a criação da oficina <b>foi o gesto de voltar com uma escuta aberta e várias novas ferramentas compiladas por anos no teatro</b>.
                </p>

                <div className={styles.divider} aria-hidden="true" />

                <p>
                  Em cada território que percorri — bibliotecas, casas de cultura, casas de acolhimento, festivais de teatro — a palavra <b>_Leste</b> foi ganhando um novo contorno. Deixou de ser apenas uma região da cidade, e passou a ser um modo de ver o mundo. Um jeito de estar em roda. <u>De fazer da escuta uma prática de identificação entre as pessoas, reelaborando o pensamento sobre si e seu lugar no mundo</u>. 
                </p>

                <p> 
                  <b>Hoje percebo que Lestear, então, virou verbo. Assim como movimentos sociais discutem conceitualmente e simbolicamente o que é</b> <i>Nortear e Sulear</i>, <b>para mim</b>, <u>Lestear é andar contra o fluxo da cidade que centraliza</u>. É transformar o que é visto como margem em centro de criação. É fazer do corpo de cada pessoa ali presente arquivo, e da memória, museu.
                </p>

                <p>
                  Com o tempo, compreendi que <i>_Leste</i> também era ponto de partida para outros lugares. A oficina chegou ao Festival de Curitiba, no Paraná, em 2025. E foi em outro espaço dentro do Brasil que notei: <b>sempre há um leste</b>.
                </p>

                <p>
                  <u>_Leste é uma direção sensível — uma geografia simbólica que se desenha toda vez que alguém se reconhece numa roda da oficina</u>.
                </p>

                <div className={styles.divider} aria-hidden="true" />

                <p>
                  O nome deste site traz um sublinhado entre palavras:<br/> 
                  <b>museu autobiográfico e território_leste.</b><br/>
                  Esse underline é mais que um recurso digital — é uma fresta. 
                </p>

                <p> 
                  <b>Representa, para mim, o espaço poético para pensar por que o centro</b> é sempre nomeado como centro. E por que o leste ainda é chamado de periferia.
                </p>

                <p>
                  O sublinhado indica pausa, pensamento, território simbólico. Porque o território não é só geográfico — é também emocional, relacional, político.
                </p>

                <div className={styles.imageGridMobile}>
                  {[2, 7, 10, 13, 20].map((i) => (
                    <Image
                      key={i}
                      src={`/images/leste/leste${i}.jpeg`}
                      alt="Foto da oficina"
                      width={600}
                      height={400}
                      className={styles.gridImageMobile}
                    />
                  ))}
                </div>

                <div className={styles.divider} aria-hidden="true" />

                <blockquote>
                  <p>
                    “A gente pensa muito na palavra mediação em relação com um público, então ela, quase que obrigatoriamente, está sempre muito colada a uma noção institucional. São Paulo é conhecida também como uma capital cultural e concentra um número enorme de instituições centralizadas numa parte da cidade. O quanto estão distantes de um público que realmente precisa dessas instituições?
                  </p>
                  <p>
                    Em outros países você encontra museus em lugares que são periferia, que tem um grande museu num lugar como Arthur Alvim, na zona leste de São Paulo. Acredito que falta esse pensamento como prática do que a gente tem chamado de descolonizar. Descolonizar o saber, às práticas, mas acho que, efetivar a descolonização da prática é entender que esses territórios também são merecedores desse tipo de empreendimento, de investimento.”
                  </p>
                  <footer>
                    — <b>Renata Felinto, em participação no podcast <i>Observe</i></b>
                  </footer>
                </blockquote>

                <div className={styles.divider} aria-hidden="true" />

                <p>
                  Ao levar a oficina para outros espaços e outras cidades, <b>não abandono a Zona Leste — eu a levo comigo</b>. Além disso, reforço a ideia de que <b>descentralizar não é apenas mudar de endereço, mas criar outras formas de circular afetos e criações artísticas</b>.
                </p>

                <div className={styles.divider} aria-hidden="true" />

                <p>
                  Tenho dito que o site funciona como uma <b>constelação</b>. Cada palavra, cada página, cada depoimento e memória formam pontos de luz que, quando conectados, criam sentidos. As ideias constelam. As experiências constelam.
                </p>

                <p>
                  Quem passou pela oficina também está aqui: orbitando, atravessando, dando forma a esse espaço vivo, compondo com suas expressões artísticas a curadoria de <b>um museu maior do que eu poderia construir sozinho. Uma oficina maior do que a que eu poderia construir sozinho. Uma constelação maior do que a que eu poderia imaginar sozinho</b>.
                </p>

                <p>
                  <b>Leste é hoje uma bússola que me guia. Acredito que será para sempre o que me guia.</b> 
                </p>

                <p>
                  <b>— Marcelo</b>
                </p>

                <div className={styles.divider} aria-hidden="true" />

                <p>
                  <b>As memórias fotográficas desta página são de autoria de Estefani Moura e Tyaxka.</b>
                </p>
              </div>
          </div>
        </div>
      </main>

      <BackToHomeButton />
      <Footer />

      {/* Modal de imagem ampliada */}
      {currentIndex !== null && (
        <div
          className={styles.modalOverlay}
          onClick={() => setCurrentIndex(null)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()} // para evitar fechar ao clicar na imagem
          >
            {currentIndex > 0 && (
              <button
                className={styles.prevButton}
                onClick={() => setCurrentIndex(currentIndex - 1)}
                aria-label="Imagem anterior"
              >
                ←
              </button>
            )}
            <Image
              src={`/images/leste/leste${currentIndex + 1}.jpeg`}
              alt="Imagem ampliada"
              width={800}
              height={600}
              className={styles.modalImage}
            />
            {currentIndex < totalImages - 1 && (
              <button
                className={styles.nextButton}
                onClick={() => setCurrentIndex(currentIndex + 1)}
                aria-label="Próxima imagem"
              >
                →
              </button>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
