"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BackToHomeButton from "@/app/components/BackToHomeButton";
import TopMenu from "@/app/components/TopMenu";
import styles from "@/app/territorio/Territorio.module.css";
import Image from "next/image";
import FadeInSection from "@/app/components/FadeInSection";
import VideoModal from "@/app/components/VideoModal";
import { useState, useEffect } from "react";

export default function TerritorioPage() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoSrc, setCurrentVideoSrc] = useState("");
  const [isDesktop, setIsDesktop] = useState(true);

  // Detectar tamanho de tela
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  // Função para abrir o modal
  const openModal = (videoSrc) => {
    if (isDesktop) {
      setCurrentVideoSrc(videoSrc);
      setIsModalOpen(true);
    }
  };

  // Função para fechar o modal
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideoSrc("");
  };

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
              aria-hidden="true"
            >
              <title>Figura geométrica decorativa</title>
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
              <div className={styles.introHeaderRow}>
                <figure>
                  <Image
                    src="/images/territorio/jussaradias.png"
                    alt="Retrato de Jussara Dias, participante da oficina em São Mateus, São Paulo"
                    width={500}
                    height={300}
                    className={styles.image}
                    priority
                  />
                </figure>

                <div className={styles.headerText}>
                  <h2>Se eu encontrasse o meu bairro na rua...</h2>
                  <h3>Depoimento de Jussara Dias (São Mateus, SP)</h3>
                </div>
              </div>

              <div className={styles.introAudioQuoteWrapper}>
                <figure>
                  <audio
                    controls
                    className={styles.audio}
                    aria-label="Áudio do depoimento de Jussara Dias, participante da oficina de memória em São Mateus"
                  >
                    <source src="/audio/audiojussara.mp3" type="audio/mpeg" />
                    Seu navegador não suporta o elemento de áudio.
                  </audio>
                </figure>

                <blockquote>
                  <p>
                    &quot;<i>Se eu encontrasse o meu bairro na rua, diria que estou de mudança e venho refletindo… como vou andar pela cidade? Meu ponto de partida sempre foi aqui. Mas demorei muito para perceber que não era apenas um ponto de partida – era também um destino.</i>
                  </p>
                  <br />
                  <p>
                    <i>Hoje, com mais maturidade, consigo enxergar suas potencialidades: a sua história, a sua presença política e principalmente as pessoas que têm e que as mesmas construíram.</i>&quot;
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Bloco de contextualização após o depoimento */}
        <div className={styles.contextWrapper}>
          <svg
            className={styles.floatingElements}
            viewBox="0 0 5000 800"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMin meet"
            aria-hidden="true"
          >
            {/* Lado esquerdo (x: 1850–2050 | y: 50–300) */}
            <circle cx="1860" cy="80" r="1" fill="black" />
            <circle cx="1900" cy="160" r="2.2" fill="black" />
            <circle cx="1980" cy="100" r="2.4" fill="black" />
            <circle cx="2020" cy="280" r="2" fill="black" />
            <image href="/images/star.png" x="1880" y="60" width="5" height="5" />
            <image href="/images/star.png" x="1970" y="210" width="8" height="8" />

            {/* Lado direito (x: 2950–3200 | y: 50–300) */}
            <circle cx="2960" cy="90" r="2.2" fill="black" />
            <circle cx="3000" cy="150" r="1" fill="black" />
            <circle cx="3080" cy="230" r="1.9" fill="black" />
            <circle cx="3120" cy="70" r="2.5" fill="black" />
            <circle cx="3190" cy="280" r="1.1" fill="black" />
            <image href="/images/star.png" x="2975" y="120" width="11" height="11" />
            <image href="/images/star.png" x="3170" y="220" width="10" height="10" />
          </svg>

          <section className={styles.contextSection} aria-labelledby="contextTitle">
            <h2 id="contextTitle" className={styles.visuallyHidden}>
              Contextualização do depoimento de Jussara Dias
            </h2>

            <p>
              Como parte do último encontro da terceira rodada da oficina realizada na Biblioteca Cassiano Ricardo em 2024, a participante <b>Jussara Dias, psicóloga e moradora de São Mateus</b>, leu seu pequeno texto, desenvolvido a partir do título: <i>Se eu encontrasse meu bairro na rua, eu diria o seguinte...</i>
            </p>

            <p>
              Para ela, a proposta de escrita foi uma oportunidade de <b>rememorar sua vida no bairro e compreender a mudança para sua nova casa, em outra região</b>.
            </p>

            <p>
              As palavras de Jussara ecoam uma verdade: <b>o bairro não é só cenário, é personagem</b>. O <b>território pulsa</b>, escuta, transforma e é transformado.
            </p>
          </section>
        </div>

        {/* Bloco Linha do tempo */}
        <section className={styles.timelineSection} aria-labelledby="timelineTitle">

          <h2 id="timelineTitle" className={styles.visuallyHidden}>
            Linha do Tempo: Locais e percursos da oficina
          </h2>
          
          <div className={styles.timelineLine}></div>

          <div className={styles.timelineWrapper}>
              
              {/* Item 01 da linha do tempo */}
              <FadeInSection className={styles.timelineItem} aria-labelledby="item01Title">
                <div className={styles.timelineContent}>

                  <Image
                    src="/images/territorio/mappin.svg"
                    alt="Ícone de bússola indicando o local"
                    width={30}
                    height={30}
                    className={styles.timelineIcon}
                  />

                  <h3 id="item02Title" className={styles.timelineLocation}>
                    SÃO PAULO | SESI-SP Av. Paulista – 2015
                  </h3>

                  <p id="item01Title">
                    Com esse depoimento, marco aqui o início da página sobre a <b>palavra Território</b>, que traz os locais pelos quais a oficina esteve e a prática de Viewpoints e Composição, que aprendi como ator quando fui aluno de <b>Miriam Rinaldi no Núcleo Experimental de Artes Cênicas do SESI-SP</b>.
                  </p>

                  <figure>
                    <Image
                      src="/images/territorio/nucleo_experimental.jpg"
                      alt="Ensaio fotográfico de Murillo Basso para exercício de abertura do Núcleo Experimental na Avenida Paulista"
                      width={500}
                      height={300}
                      className={styles.timelineImage}
                    />
                    <figcaption className={styles.timelineCaption}>
                      Ensaio fotográfico de Murillo Basso — Núcleo Experimental: Rascunhos e Rasantes (Avenida Paulista).
                    </figcaption>
                  </figure>

                  <h3 className={styles.highlightedTitle}>Um território em ação</h3>

                  <p>
                    O trabalho da oficina sempre se deu em <b>movimento</b>. A cada edição, deslocamos corpos e escutas para outros pontos dos Centros Culturais e Bibliotecas, criando presença <b>para além da sala de ensaio</b> habitual.
                  </p>

                  <p>
                    Estar em <b>espaços culturais distintos dentro do mesmo território expandido</b> – bibliotecas, centros culturais, casas abertas – foi uma escolha metodológica e política. Cada deslocamento criava uma nova ambiência, revelava outras potências, instaurava encontros.
                  </p>

                  <p>
                    A seguir, excertos em vídeo mostram trechos das oficinas entre 2022 e 2025, sem cortes, para que conheçam a atmosfera de cada território e coletivo:
                  </p>
                </div>
              </FadeInSection>

              {/* Item 02 da linha do tempo */}
              <FadeInSection className={styles.timelineItem} aria-labelledby="item02Title">
                <div className={styles.timelineContent}>

                  <Image
                    src="/images/territorio/mappin.svg"
                    alt="Ícone de bússola indicando o local"
                    width={30}
                    height={30}
                    className={styles.timelineIcon}
                  />

                  <h3 id="item02Title" className={styles.timelineLocation}>
                    SÃO PAULO | Centro Cultural da Penha — 2022
                  </h3>

                  <figure>
                    <Image
                      src="/images/territorio/centroculturaldapenha.png"
                      alt="Centro Cultural da Penha - Encontro nos fundos do espaço cultural"
                      width={500}
                      height={300}
                      className={styles.timelineImage}
                    />
                  </figure>

                  <figure className={styles.videoRow} aria-label="Vídeos do encontro no Centro Cultural da Penha">
                    {isDesktop ? (
                      <>
                        <div className={styles.videoThumbnail} onClick={() => openModal("https://www.youtube.com/embed/HTd7ECPbQJI")}>
                          <Image
                            src="/images/thumbs/thumb1_resized.jpg"
                            alt="Centro Cultural da Penha - Vídeo 1"
                            width={500}
                            height={315}
                            className={styles.thumbnailImage}
                          />
                          <div className={styles.playOverlay}>▶</div>
                        </div>

                        <div className={styles.videoThumbnail} onClick={() => openModal("https://www.youtube.com/embed/NhR4dX222-Y")}>
                          <Image
                            src="/images/thumbs/thumb2_resized.jpg"
                            alt="Centro Cultural da Penha - Vídeo 2"
                            width={500}
                            height={315}
                            className={styles.thumbnailImage}
                          />
                          <div className={styles.playOverlay}>▶</div>
                        </div>
                      </>
                    ) : (
                      <>
                        <iframe
                          width="100%"
                          height="315"
                          src="https://www.youtube.com/embed/HTd7ECPbQJI"
                          title="Centro Cultural da Penha - Vídeo 1"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className={styles.timelineVideo}
                          loading="lazy"
                        ></iframe>

                        <iframe
                          width="100%"
                          height="315"
                          src="https://www.youtube.com/embed/NhR4dX222-Y"
                          title="Centro Cultural da Penha - Vídeo 2"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className={styles.timelineVideo}
                          loading="lazy"
                        ></iframe>
                      </>
                    )}
                  </figure>

                  <figcaption className={styles.timelineCaption}>
                      Centro Cultural da Penha | Encontro nos fundos do CCP | 2022.
                    </figcaption>
                </div>
              </FadeInSection>

              {/* Item 03 da linha do tempo */}
              <FadeInSection className={styles.timelineItem} aria-labelledby="item03Title">
                <div className={styles.timelineContent}>

                  <Image
                    src="/images/territorio/mappin.svg"
                    alt="Ícone de bússola indicando o local"
                    width={30}
                    height={30}
                    className={styles.timelineIcon}
                  />

                  <h3 id="item03Title" className={styles.timelineLocation}>
                    SÃO PAULO | Biblioteca Pública Cassiano Ricardo — 2023 e 2024
                  </h3>

                  <figure>
                    <Image
                      src="/images/territorio/bibliotecacassianoricardo.png"
                      alt="Biblioteca Pública Cassiano Ricardo, vista da área externa"
                      width={500}
                      height={300}
                      className={styles.timelineImage}
                    />
                  </figure>

                  <figure className={styles.videoRow} aria-label="Vídeos dos encontros na Biblioteca Pública Cassiano Ricardo">
                    {isDesktop ? (
                      <>
                        <div className={styles.videoThumbnail} onClick={() => openModal("https://www.youtube.com/embed/0C30aDrW0ow")}>
                          <Image
                            src="/images/thumbs/thumb3_resized.jpg"
                            alt="Biblioteca Pública Cassiano Ricardo - Vídeo 1"
                            width={500}
                            height={315}
                            className={styles.thumbnailImage}
                          />
                          <div className={styles.playOverlay}>▶</div>
                        </div>

                        <div className={styles.videoThumbnail} onClick={() => openModal("https://www.youtube.com/embed/ZO2Lj8r0cV4")}>
                          <Image
                            src="/images/thumbs/thumb4_resized.jpg"
                            alt="Biblioteca Pública Cassiano Ricardo - Vídeo 2"
                            width={500}
                            height={315}
                            className={styles.thumbnailImage}
                          />
                          <div className={styles.playOverlay}>▶</div>
                        </div>

                        <div className={styles.videoThumbnail} onClick={() => openModal("https://www.youtube.com/embed/zFEK2H7rauE")}>
                          <Image
                            src="/images/thumbs/thumb5_resized.jpg"
                            alt="Biblioteca Pública Cassiano Ricardo - Vídeo 3"
                            width={500}
                            height={315}
                            className={styles.thumbnailImage}
                          />
                          <div className={styles.playOverlay}>▶</div>
                        </div>

                        <div className={styles.videoThumbnail} onClick={() => openModal("https://www.youtube.com/embed/51fRzDRGpOM")}>
                          <Image
                            src="/images/thumbs/thumb6_resized.jpg"
                            alt="Biblioteca Pública Cassiano Ricardo - Vídeo 4"
                            width={500}
                            height={315}
                            className={styles.thumbnailImage}
                          />
                          <div className={styles.playOverlay}>▶</div>
                        </div>

                        <div className={styles.videoThumbnail} onClick={() => openModal("https://www.youtube.com/embed/zleEK0uQh4U")}>
                          <Image
                            src="/images/thumbs/thumb7_resized.jpg"
                            alt="Biblioteca Pública Cassiano Ricardo - Vídeo 5"
                            width={500}
                            height={315}
                            className={styles.thumbnailImage}
                          />
                          <div className={styles.playOverlay}>▶</div>
                        </div>

                        <div className={styles.videoThumbnail} onClick={() => openModal("https://www.youtube.com/embed/uoHMzUJ-6z8")}>
                          <Image
                            src="/images/thumbs/thumb8_resized.jpg"
                            alt="Biblioteca Pública Cassiano Ricardo - Vídeo 6"
                            width={500}
                            height={315}
                            className={styles.thumbnailImage}
                          />
                          <div className={styles.playOverlay}>▶</div>
                        </div>
                      </>
                    ) : (
                      <>
                        <iframe
                          width="100%"
                          height="315"
                          src="https://www.youtube.com/embed/0C30aDrW0ow"
                          title="Vídeo 1"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className={styles.timelineVideo}
                        ></iframe>

                        <iframe
                          width="100%"
                          height="315"
                          src="https://www.youtube.com/embed/ZO2Lj8r0cV4"
                          title="Vídeo 2"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className={styles.timelineVideo}
                        ></iframe>

                        <iframe
                          width="100%"
                          height="315"
                          src="https://www.youtube.com/embed/zFEK2H7rauE"
                          title="Vídeo 3"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className={styles.timelineVideo}
                        ></iframe>

                        <iframe
                          width="100%"
                          height="315"
                          src="https://www.youtube.com/embed/51fRzDRGpOM"
                          title="Vídeo 4"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className={styles.timelineVideo}
                        ></iframe>

                        <iframe
                          width="100%"
                          height="315"
                          src="https://www.youtube.com/embed/zleEK0uQh4U"
                          title="Vídeo 5"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className={styles.timelineVideo}
                        ></iframe>

                        <iframe
                          width="100%"
                          height="315"
                          src="https://www.youtube.com/embed/uoHMzUJ-6z8"
                          title="Vídeo 6"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className={styles.timelineVideo}
                        ></iframe>
                      </>
                    )}
                  </figure>
                  <figcaption className={styles.timelineCaption}>
                      Biblioteca Pública Cassiano Ricardo — Encontro entre as prateleiras, sala de música, pátio interno (2023-2024).
                    </figcaption>
                </div>
              </FadeInSection>

              {/* Item 04 da linha do tempo */}
              <FadeInSection className={styles.timelineItem} aria-labelledby="item04Title">
                <div className={styles.timelineContent}>

                  <Image
                    src="/images/territorio/mappin.svg"
                    alt="Ícone de bússola indicando o local"
                    width={30}
                    height={30}
                    className={styles.timelineIcon}
                  />

                  <h3 id="item04Title" className={styles.timelineLocation}>
                    CURITIBA | Casa Eliseu Voronkoff — 2025
                  </h3>

                  <figure>
                    <Image
                      src="/images/territorio/casaeliseuvoronkoff.png"
                      alt="Área externa da Casa Eliseu Voronkoff"
                      width={500}
                      height={300}
                      className={styles.timelineImage}
                    />
                  </figure>

                  <figure className={styles.videoRow} aria-label="Vídeos dos encontros na Casa Eliseu Voronkoff">
                    {isDesktop ? (
                      <>
                        <div className={styles.videoThumbnail} onClick={() => openModal("https://www.youtube.com/embed/lGf1ek80Xhk")}>
                          <Image
                            src="/images/thumbs/thumb9_resized.jpg"
                            alt="Casa Eliseu Voronkoff - Vídeo 1"
                            width={500}
                            height={315}
                            className={styles.thumbnailImage}
                          />
                          <div className={styles.playOverlay}>▶</div>
                        </div>

                        <div className={styles.videoThumbnail} onClick={() => openModal("https://www.youtube.com/embed/FdBoOydtBUo")}>
                          <Image
                            src="/images/thumbs/thumb10_resized.jpg"
                            alt="Casa Eliseu Voronkoff - Vídeo 2"
                            width={500}
                            height={315}
                            className={styles.thumbnailImage}
                          />
                          <div className={styles.playOverlay}>▶</div>
                        </div>

                        <div className={styles.videoThumbnail} onClick={() => openModal("https://www.youtube.com/embed/ThA0YHQAapE")}>
                          <Image
                            src="/images/thumbs/thumb11_resized.jpg"
                            alt="Casa Eliseu Voronkoff - Vídeo 3"
                            width={500}
                            height={315}
                            className={styles.thumbnailImage}
                          />
                          <div className={styles.playOverlay}>▶</div>
                        </div>

                        <div className={styles.videoThumbnail} onClick={() => openModal("https://www.youtube.com/embed/lgjqDdSb-fQ")}>
                          <Image
                            src="/images/thumbs/thumb12_resized.jpg"
                            alt="Casa Eliseu Voronkoff - Vídeo 4"
                            width={500}
                            height={315}
                            className={styles.thumbnailImage}
                          />
                          <div className={styles.playOverlay}>▶</div>
                        </div>

                        <div className={styles.videoThumbnail} onClick={() => openModal("https://www.youtube.com/embed/7EcXjsRfPtg")}>
                          <Image
                            src="/images/thumbs/thumb13_resized.jpg"
                            alt="Casa Eliseu Voronkoff - Vídeo 5"
                            width={500}
                            height={315}
                            className={styles.thumbnailImage}
                          />
                          <div className={styles.playOverlay}>▶</div>
                        </div>
                        
                        <div className={styles.videoThumbnail} onClick={() => openModal("https://www.youtube.com/embed/K82982ta3b4")}>
                          <Image
                            src="/images/thumbs/thumb16_resized.jpg"
                            alt="Casa Eliseu Voronkoff - Vídeo 6"
                            width={500}
                            height={315}
                            className={styles.thumbnailImage}
                          />
                          <div className={styles.playOverlay}>▶</div>
                        </div>
                      </>
                    ) : (
                      <>
                        <iframe
                          width="100%"
                          height="315"
                          src="https://www.youtube.com/embed/lGf1ek80Xhk"
                          title="Casa Eliseu Voronkoff - Vídeo 1"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className={styles.timelineVideo}
                        ></iframe>

                        <iframe
                          width="100%"
                          height="315"
                          src="https://www.youtube.com/embed/FdBoOydtBUo"
                          title="Casa Eliseu Voronkoff - Vídeo 2"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className={styles.timelineVideo}
                        ></iframe>

                        <iframe
                          width="100%"
                          height="315"
                          src="https://www.youtube.com/embed/ThA0YHQAapE"
                          title="Casa Eliseu Voronkoff - Vídeo 3"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className={styles.timelineVideo}
                        ></iframe>

                        <iframe
                          width="100%"
                          height="315"
                          src="https://www.youtube.com/embed/lgjqDdSb-fQ"
                          title="Casa Eliseu Voronkoff - Vídeo 4"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className={styles.timelineVideo}
                        ></iframe>

                        <iframe
                          width="100%"
                          height="315"
                          src="https://www.youtube.com/embed/7EcXjsRfPtg"
                          title="Casa Eliseu Voronkoff - Vídeo 5"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className={styles.timelineVideo}
                        ></iframe>
                        
                        <iframe
                          width="100%"
                          height="315"
                          src="https://www.youtube.com/embed/K82982ta3b4" 
                          title="Casa Eliseu Voronkoff - Vídeo 6"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className={styles.timelineVideo}
                        ></iframe>
                      </>
                    )}
                  </figure>
                  <figcaption className={styles.timelineCaption}>
                    Casa Eliseu Voronkoff | Aquecimento e exercícios nos fundos da casa | 2025.
                  </figcaption>
                </div>
            </FadeInSection>

          </div>
        </section>

        {/* Bloco Casa Florescer */}
        <FadeInSection className={styles.florescerBlock} aria-labelledby="florescerTitle">
          <h3 id="florescerTitle" className={styles.florescerTitle}>
            Experiência Formadora do Projeto: lembrança de onde começou a nascer a oficina
          </h3>

          <figure>
            <Image
              src="/images/territorio/casaflorescer1.png"
              alt="Área externa da Casa Florescer II"
              width={500}
              height={300}
              className={styles.florescerImage}
            />
            <figcaption className={styles.florescerCaption}>
              Entrada da Casa Florescer II — São Paulo.
            </figcaption>
          </figure>

          <p className={styles.florescerParagraph}>
            <b>Uma memória em um território</b>: Foi nesse lugar que percebi a importância de trabalhar o corpo e a relação com o espaço. 
            Para facilitar as dinâmicas de memória, eu precisava primeiro trabalhar o pertencimento àquele lugar e, para isso, exercícios de aquecimento com <i>Viewpoints</i> foram essenciais.
          </p>

          <figure className={styles.florescerVideoRow} aria-label="Vídeos do encontro na Casa Florescer II">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/IxNcY7KcU8g"
              title="Casa Florescer II — Exercício de Composição com estudantes e moradoras — 2019"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.florescerVideo}
            ></iframe>

            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/daCEcSOcPZw"
              title="Casa Florescer II — Wemerly se apresentando — 2019"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.florescerVideo}
            ></iframe>
          </figure>

          <figure>
            <Image
              src="/images/territorio/casaflorescer2.jpeg"
              alt="Registro de encontro na Casa Florescer II"
              width={500}
              height={300}
              className={styles.florescerImage}
            />
            <figcaption className={styles.florescerCaption}>
              Registros recuperados dos stories do perfil @marcelorodriguesmaia — Novembro e Dezembro de 2019.
            </figcaption>
          </figure>

          <blockquote className={styles.florescerQuote} aria-label="Citação de Milton Santos sobre território">
            <p>
              &quot;O território não é apenas o conjunto dos sistemas naturais e de sistemas de coisas superpostas. 
              O território tem que ser entendido como o território usado, não o território em si. 
              O território usado é o chão mais a identidade. A identidade é o sentimento de pertencer àquilo que nos pertence. 
              O território é o fundamento do trabalho, o lugar da residência, das trocas materiais e espirituais e do exercício da vida.&quot;
            </p>
            <footer><b>Milton Santos</b></footer>
          </blockquote>
        </FadeInSection>

        {/* Bloco Viewpoints e Composição */}
        <div className={styles.viewpointsWrapper}>
          <svg
            className={styles.floatingElements}
            viewBox="0 0 5000 1600"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Pontos lado esquerdo (distribuição irregular e natural) */}
            <circle cx="1865" cy="120" r="2" fill="black" />
            <circle cx="1910" cy="200" r="2.2" fill="black" />
            <circle cx="1880" cy="310" r="1.8" fill="black" />
            <circle cx="1970" cy="430" r="2.4" fill="black" />
            <circle cx="1895" cy="570" r="2" fill="black" />
            <circle cx="2025" cy="690" r="2.3" fill="black" />
            <circle cx="1930" cy="850" r="1.7" fill="black" />
            <circle cx="2005" cy="980" r="2.1" fill="black" />
            <circle cx="1860" cy="1130" r="2" fill="black" />
            <circle cx="1955" cy="1250" r="1.9" fill="black" />
            <circle cx="1890" cy="1380" r="2.4" fill="black" />
            <circle cx="2040" cy="1510" r="1.6" fill="black" />

            {/* Estrelas PNG (posições intercaladas) */}
            <image href="/images/star.png" x="1870" y="90" width="12" height="12" />
            <image href="/images/star.png" x="1925" y="350" width="14" height="14" />
            <image href="/images/star.png" x="1990" y="520" width="11" height="11" />
            <image href="/images/star.png" x="1855" y="740" width="13" height="13" />
            <image href="/images/star.png" x="1905" y="1120" width="12" height="12" />
            <image href="/images/star.png" x="1980" y="1440" width="10" height="10" />
          </svg>

          <FadeInSection className={styles.viewpointsSection} aria-labelledby="viewpointsTitle">
            <h2 id="viewpointsTitle"><i>Viewpoints</i> e Composição</h2>

            <h3>Uma das mais relevantes bases criativas da oficina</h3>

            <p>
              Para chegar a esse trabalho coletivo, é essencial dar espaço ao trabalho com <b><i>Viewpoints</i> e Composição</b>. Uma descoberta de um caminho potente de criação e escuta coletiva.
            </p>

            <p>
              Essas práticas se incorporaram naturalmente à rotina dos encontros desde a primeira rodada da oficina – presentes nos <b>aquecimentos</b>, nos <b>jogos com o espaço</b> e, principalmente, nas <b>“cheganças”</b> a cada novo ambiente.
            </p>

            <p>
              Mais do que técnica, <i>Viewpoints</i> <b>virou linguagem de pertencimento a um território e de criação compartilhada</b>.
            </p>

            <blockquote aria-label="Citação sobre Viewpoints">
              <p>
                “<i>Viewpoints são uma série de nomes dados a certos princípios de movimento através do tempo e do espaço; esses nomes constituem uma linguagem para falar sobre o que acontece no palco.</i>”
              </p>
              <footer><b>— Anne Bogart e Tina Landau</b></footer>
            </blockquote>

            <p>
              Desenvolvidas a partir dos <b>Six Viewpoints</b> de <i>Mary Overlie</i> (1970), e sistematizadas por Bogart e Landau, essas ferramentas estimulam a criação teatral a partir do corpo, da escuta e da improvisação. <b>Elas rompem com hierarquias tradicionais e fortalecem o coletivo</b>.
            </p>

            <p>
              Durante minha formação, aprendi os <b>nove <i>Viewpoints</i> físicos</b>, divididos entre os eixos de <b>Tempo e Espaço</b>:
            </p>

            <figure>
              <Image
                src="/images/territorio/aula_nucleoexperimental.jpg"
                alt="Participantes do Núcleo Experimental de Artes Cênicas do SESI-SP montando composição coletiva no encerramento da turma, 2015"
                width={500}
                height={300}
                className={styles.image}
              />
              <figcaption>
                Fim de aula da 15ª turma do Núcleo Experimental de Artes Cênicas do SESI-SP montando composição coletiva (2015).
              </figcaption>
            </figure>
          </FadeInSection>
        </div>

        {/* Bloco Duas Colunas: Tempo e Espaço */}
        <FadeInSection className={styles.twoColumnSection} aria-labelledby="tempoEspacoTitle">
          <h2 id="tempoEspacoTitle" className={styles.visuallyHidden}>
            Bloco sobre Tempo e Espaço
          </h2>

          <div className={styles.column}>
            <h3>Tempo</h3>

            <h4 id="andamento">Andamento</h4>
            <p>A medida da velocidade na qual um movimento acontece.</p>

            <h4 id="duracao">Duração</h4>
            <p>Quanto dura um movimento ou sequência de movimentos.</p>

            <h4 id="respostaCinestesica">Resposta Cinestésica</h4>
            <p>Reação impulsiva ao movimento externo, no tempo do agora.</p>

            <h4 id="repeticao">Repetição</h4>
            <p>Repetição de movimentos internos ou externos (formas, gestos, ritmos).</p>
          </div>

          <div className={styles.column}>
            <h3>Espaço</h3>

            <h4 id="forma">Forma</h4>
            <p>O desenho que o corpo cria no espaço.</p>

            <h4 id="gesto">Gesto</h4>
            <p>Movimento com começo, meio e fim. Pode ser: Comportamental (realista) ou Expressivo (poético, simbólico).</p>

            <h4 id="arquitetura">Arquitetura</h4>
            <p>Como o corpo se relaciona com o espaço físico — sua massa, textura, luz, cor, som.</p>

            <h4 id="relacaoEspacial">Relação Espacial</h4>
            <p>Distâncias entre corpos, entre grupos ou com o espaço arquitetônico.</p>

            <h4 id="topografia">Topografia</h4>
            <p>Os caminhos que o corpo traça no chão, o padrão da movimentação.</p>
          </div>
        </FadeInSection>

        {/* Bloco sobre Composição */}
        <FadeInSection className={styles.centered} aria-labelledby="composicaoTitle">
          <div className={styles.highlightBox}>

            <h2 id="composicaoTitle" className={styles.visuallyHidden}>
              Sobre o conceito de Composição
            </h2>

            <h3>E a Composição?</h3>

            <p>
              Composição é uma forma de pensar e organizar a criação cênica.
              É liberdade com escuta. Impulso com intenção.
            </p>

            <p>
              Segundo Bogart e Landau, Composição é:
            </p>

            <ul>
              <li>Um método para gerar e desenvolver vocabulário teatral.</li>
              <li>Um processo para acessar pensamentos e sentimentos escondidos.</li>
              <li>Um campo de diálogo com outras linguagens (música, pintura, fotografia).</li>
              <li>Uma prática para quem cria — seja diretor, ator, performer ou designer.</li>
            </ul>

            <figure>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/VBSihaGzDf8"
                title="Centro Cultural da Penha - Exercício de Composição - 2022"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.video}
                loading="lazy"
              ></iframe>
              <figcaption>
                Centro Cultural da Penha | Exercício de Composição | 2022.
              </figcaption>
            </figure>
          </div>
        </FadeInSection>

        {/* Bloco final: Texto de fechamento + citação do Marcelo */}
        <FadeInSection className={styles.closingSection} aria-labelledby="closingTitle">
          
          <h2 id="closingTitle" className={styles.visuallyHidden}>
            Encerramento e reflexão final
          </h2>

          <p>
            <b>Essas ferramentas foram adaptadas com escuta ao contexto territorial e às vivências e corpos das pessoas participantes.</b>
          </p>

          <p>
            A escolha pelo uso de Viewpoints como coluna vertebral de todos os encontros ajudou a criar um ambiente acessível, intuitivo e sensível, facilitando a integração das pessoas para que, nos exercícios de memória, se tornasse mais fácil e menos racional o compartilhamento de histórias.
          </p>

          <blockquote aria-label="Reflexão final de Marcelo, mediador da oficina">
            <p>
              No território do Museu Autobiográfico, é proposto um lugar onde novos corpos, gestos e histórias podem se desenvolver a partir do chão em que estão. Ao mover o corpo em um espaço, move-se também os pensamentos criativos que se unem, criando um coletivo com maior senso de pertencimento e confiança em contar a própria história.
            </p>
            <footer><b>— Marcelo</b></footer>
          </blockquote>
        </FadeInSection>

      </main>

      <VideoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoSrc={currentVideoSrc}
      />

      <BackToHomeButton />
      <Footer />
    </div>
  );
}
