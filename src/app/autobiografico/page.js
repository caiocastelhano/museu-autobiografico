"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BackToHomeButton from "@/app/components/BackToHomeButton";
import TopMenu from "@/app/components/TopMenu";
import styles from "@/app/autobiografico/Autobiografico.module.css";
import Image from "next/image";
import Link from "next/link";
import VideoModal from "@/app/components/VideoModal";
import { useState, useEffect } from "react"; 

export default function AutobiograficoPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoSrc, setCurrentVideoSrc] = useState("");
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openModal = (src) => {
    setCurrentVideoSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideoSrc("");
  };

  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <TopMenu />

      <main className={styles.mainContent}>
        <h1 className={styles.visuallyHidden}>Página Autobiográfico</h1>

        {/* Bloco inicial com figura e quote */}
        <section className={styles.introSection} aria-labelledby="introTitle">
          <h2 id="introTitle" className={styles.visuallyHidden}>
            Introdução da página Autobiográfico
          </h2>

          <div className={styles.introContentWrapper}>
            <svg
              className={styles.bodyShape}
              viewBox="450 50 300 250"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="autobioSvgTitle"
            >
              <title id="autobioSvgTitle">Forma gráfica com a palavra autobiográfico</title>
              <g className={styles.hoverText}>
                <polygon points="546,94 654,112 672,196 600,232 528,178" fill="white" stroke="black" strokeWidth="1" />
                <circle cx="546" cy="94" r="3" fill="black" />
                <circle cx="654" cy="112" r="3.5" fill="black" />
                <circle cx="672" cy="196" r="4" fill="black" />
                <circle cx="600" cy="232" r="2.5" fill="black" />
                <circle cx="528" cy="178" r="3" fill="black" />
                <text x="600" y="162" className={styles.shapeText} textAnchor="middle">
                  autobiográfico
                </text>
              </g>
            </svg>

            <blockquote className={styles.introQuote}>
              <p>
                &quot;A autobiografia produz uma forma de enfrentamento político que para mim é importantíssimo. Ela é uma importante arma política.&quot;
              </p>
              <footer>— Édouard Louis</footer>
            </blockquote>
          </div>
        </section>

        {/* Bloco de introdução textual com destaque e nota de rodapé */}
        <section className={styles.autobioIntroTextSection} aria-labelledby="autobioIntroTitle">
          <h2 id="autobioIntroTitle" className={styles.visuallyHidden}>
            Introdução sobre a proposta da seção Autobiográfico
          </h2>

          <p>
            Nesta página, não será tratada a experiência pessoal e profissional do criador da oficina.
          </p>

          < br/>

          <p>
            Aqui você poderá assistir <b>excertos*</b> de experiências de <b>participantes em ação</b> e dos lugares pelos quais a oficina passou. <u>Compondo momentos registrados com a câmera do celular durante os encontros ou em gravações feitas por participantes ou terceiros para exercícios, o autobiográfico na experiência digital ganha um novo significado</u>, <b>relacionando momentos distintos vividos com exercícios propostos que, juntos, traduzem a relevância do experienciar a si mesmo em cena</b>.
          </p>

          < br/>

          <p>
            A cada vídeo, convido você a imaginar o <u>antes e depois que geraram os momentos</u> registrados de forma improvisada ou encenada, mas, para todos os vídeos, desejo que, principalmente, <b>sintam um pouco da história de quem faz a oficina acontecer</b>. Guiem o olhar de vocês para imaginar o mundo interno de cada pessoa. <b>É neste mundo interno que reside o precioso museu de cada participante e sua autenticidade</b>.
          </p>

          <p className={styles.footnote} aria-label="Nota sobre o uso do termo excerto">
            <sup>*</sup>
            <u>
              Sobre a escolha do termo <b>Excerto</b>: Pego o termo como referência ao trabalho da minha orientadora do mestrado, a Professora Doutora Graziela Kunsch. Sempre me encorajando a continuar, Grazi me sugeriu ler seu trabalho de pesquisa em audiovisual para que eu pudesse compreender que estes vídeos curtos, juntos, criam combinações únicas.
            </u>
          </p>
        </section>

        {/* Galeria de vídeos com modais */}
        <section className={styles.videoGallerySection} aria-labelledby="autobioVideoGalleryTitle">
          <h2 id="autobioVideoGalleryTitle" className={styles.visuallyHidden}>
            Galeria de vídeos
          </h2>

          <div className={styles.videoGrid}>
            {/* Vídeo 1 */}
            <figure>
              {isDesktop ? (
                <div
                  className={styles.videoThumbnail}
                  onClick={() => openModal("https://www.youtube.com/embed/7uPgZEsWQLE")}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      openModal("https://www.youtube.com/embed/7uPgZEsWQLE");
                    }
                  }}
                  aria-label="Abrir vídeo 1: Entrevista com pessoa do Bairro | Centro Cultural da Penha | 2022"
                >
                  <Image
                    src="/images/autobiografico/thumb1.jpg"
                    alt="Entrevista com pessoa do Bairro | Centro Cultural da Penha | 2022"
                    width={500}
                    height={300}
                    className={styles.thumbnailImage}
                  />
                  <div className={styles.playOverlay}>▶</div>
                </div>
              ) : (
                <iframe
                  className={styles.video}
                  src="https://www.youtube.com/embed/7uPgZEsWQLE"
                  title="Entrevista com pessoa do Bairro | Centro Cultural da Penha | 2022"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              )}
              <figcaption className={styles.videoCaption}>
                Entrevista com pessoa do Bairro | Centro Cultural da Penha | 2022
              </figcaption>
            </figure>


            {/* Vídeo 2 */}
            <figure>
              {isDesktop ? (
                <div
                  className={styles.videoThumbnail}
                  onClick={() => openModal("https://www.youtube.com/embed/mXJnngIDGlE")}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      openModal("https://www.youtube.com/embed/mXJnngIDGlE");
                    }
                  }}
                  aria-label="Abrir vídeo 2: Exercício - Cena após entrevista com pessoa do Bairro | Susana | Centro Cultural da Penha | 2022"
                >
                  <Image
                    src="/images/autobiografico/thumb2.jpg"
                    alt="Exercício - Cena após entrevista com pessoa do Bairro | Susana | Centro Cultural da Penha | 2022"
                    width={500}
                    height={300}
                    className={styles.thumbnailImage}
                  />
                  <div className={styles.playOverlay}>▶</div>
                </div>
              ) : (
                <iframe
                  className={styles.video}
                  src="https://www.youtube.com/embed/mXJnngIDGlE"
                  title="Exercício - Cena após entrevista com pessoa do Bairro | Susana | Centro Cultural da Penha | 2022"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              )}
              <figcaption className={styles.videoCaption}>
                Exercício - Cena após entrevista com pessoa do Bairro | Susana | Centro Cultural da Penha | 2022
              </figcaption>
            </figure>

            {/* Vídeo 3 */}
            <figure>
              {isDesktop ? (
                <div
                  className={styles.videoThumbnail}
                  onClick={() => openModal("https://www.youtube.com/embed/8NhmsTKEWok")}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      openModal("https://www.youtube.com/embed/8NhmsTKEWok");
                    }
                  }}
                  aria-label="Abrir vídeo 3: Museu Pessoal de Francisco | Centro Cultural da Penha | 2022"
                >
                  <Image
                    src="/images/autobiografico/thumb3.jpg"
                    alt="Museu Pessoal de Francisco | Centro Cultural da Penha | 2022"
                    width={500}
                    height={300}
                    className={styles.thumbnailImage}
                  />
                  <div className={styles.playOverlay}>▶</div>
                </div>
              ) : (
                <iframe
                  className={styles.video}
                  src="https://www.youtube.com/embed/8NhmsTKEWok"
                  title="Museu Pessoal de Francisco | Centro Cultural da Penha | 2022"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              )}
              <figcaption className={styles.videoCaption}>
                Museu Pessoal de Francisco | Centro Cultural da Penha | 2022
              </figcaption>
            </figure>

            {/* Vídeo 4 */}
            <figure>
              {isDesktop ? (
                <div
                  className={styles.videoThumbnail}
                  onClick={() => openModal("https://www.youtube.com/embed/05Tpvdev4eE")}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      openModal("https://www.youtube.com/embed/05Tpvdev4eE");
                    }
                  }}
                  aria-label="Abrir vídeo 4: Exercício Museu Pessoal | Ana Carolina | Centro Cultural da Penha | 2022"
                >
                  <Image
                    src="/images/autobiografico/thumb4.jpg"
                    alt="Exercício Museu Pessoal | Ana Carolina | Centro Cultural da Penha | 2022"
                    width={500}
                    height={300}
                    className={styles.thumbnailImage}
                  />
                  <div className={styles.playOverlay}>▶</div>
                </div>
              ) : (
                <iframe
                  className={styles.video}
                  src="https://www.youtube.com/embed/05Tpvdev4eE"
                  title="Exercício Museu Pessoal | Ana Carolina | Centro Cultural da Penha | 2022"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              )}
              <figcaption className={styles.videoCaption}>
                Exercício Museu Pessoal | Ana Carolina | Centro Cultural da Penha | 2022
              </figcaption>
            </figure>

            {/* Vídeo 5 */}
            <figure>
              {isDesktop ? (
                <div
                  className={styles.videoThumbnail}
                  onClick={() => openModal("https://www.youtube.com/embed/L-GI2Br2fnQ")}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      openModal("https://www.youtube.com/embed/L-GI2Br2fnQ");
                    }
                  }}
                  aria-label="Abrir vídeo 5: Exercício Museu Pessoal | Tyaxka | Centro Cultural da Penha | 2022"
                >
                  <Image
                    src="/images/autobiografico/thumb5.jpg"
                    alt="Exercício Museu Pessoal | Tyaxka | Centro Cultural da Penha | 2022"
                    width={500}
                    height={300}
                    className={styles.thumbnailImage}
                  />
                  <div className={styles.playOverlay}>▶</div>
                </div>
              ) : (
                <iframe
                  className={styles.video}
                  src="https://www.youtube.com/embed/L-GI2Br2fnQ"
                  title="Exercício Museu Pessoal | Tyaxka | Centro Cultural da Penha | 2022"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              )}
              <figcaption className={styles.videoCaption}>
                Exercício Museu Pessoal | Tyaxka | Centro Cultural da Penha | 2022
              </figcaption>
            </figure>

            {/* Vídeo 6 */}
            <figure>
              {isDesktop ? (
                <div
                  className={styles.videoThumbnail}
                  onClick={() => openModal("https://www.youtube.com/embed/xtzk5k_LGZw")}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      openModal("https://www.youtube.com/embed/xtzk5k_LGZw");
                    }
                  }}
                  aria-label="Abrir vídeo 6: Exercício Museu Pessoal | Ana | Centro Cultural da Penha | 2022"
                >
                  <Image
                    src="/images/autobiografico/thumb6.jpg"
                    alt="Exercício Museu Pessoal | Ana | Centro Cultural da Penha | 2022"
                    width={500}
                    height={300}
                    className={styles.thumbnailImage}
                  />
                  <div className={styles.playOverlay}>▶</div>
                </div>
              ) : (
                <iframe
                  className={styles.video}
                  src="https://www.youtube.com/embed/xtzk5k_LGZw"
                  title="Exercício Museu Pessoal | Ana | Centro Cultural da Penha | 2022"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              )}
              <figcaption className={styles.videoCaption}>
                Exercício Museu Pessoal | Ana | Centro Cultural da Penha | 2022
              </figcaption>
            </figure>

            {/* Vídeo 7 */}
            <figure>
              {isDesktop ? (
                <div
                  className={styles.videoThumbnail}
                  onClick={() => openModal("https://www.youtube.com/embed/n_daN0fwqs4")}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      openModal("https://www.youtube.com/embed/n_daN0fwqs4");
                    }
                  }}
                  aria-label="Abrir vídeo 7: Exercício Museu Pessoal | Gustavo | Centro Cultural da Penha | 2022"
                >
                  <Image
                    src="/images/autobiografico/thumb7.jpg"
                    alt="Exercício Museu Pessoal | Gustavo | Centro Cultural da Penha | 2022"
                    width={500}
                    height={300}
                    className={styles.thumbnailImage}
                  />
                  <div className={styles.playOverlay}>▶</div>
                </div>
              ) : (
                <iframe
                  className={styles.video}
                  src="https://www.youtube.com/embed/n_daN0fwqs4"
                  title="Exercício Museu Pessoal | Gustavo | Centro Cultural da Penha | 2022"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              )}
              <figcaption className={styles.videoCaption}>
                Exercício Museu Pessoal | Gustavo | Centro Cultural da Penha | 2022
              </figcaption>
            </figure>

            {/* Vídeo 8 */}
            <figure>
              {isDesktop ? (
                <div
                  className={styles.videoThumbnail}
                  onClick={() => openModal("https://www.youtube.com/embed/8yPOJMOru7A")}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      openModal("https://www.youtube.com/embed/8yPOJMOru7A");
                    }
                  }}
                  aria-label="Abrir vídeo 8: Exercício Museu Pessoal | Suzana | Centro Cultural da Penha | 2022"
                >
                  <Image
                    src="/images/autobiografico/thumb8.jpg"
                    alt="Exercício Museu Pessoal | Suzana | Centro Cultural da Penha | 2022"
                    width={500}
                    height={300}
                    className={styles.thumbnailImage}
                  />
                  <div className={styles.playOverlay}>▶</div>
                </div>
              ) : (
                <iframe
                  className={styles.video}
                  src="https://www.youtube.com/embed/8yPOJMOru7A"
                  title="Exercício Museu Pessoal | Suzana | Centro Cultural da Penha | 2022"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              )}
              <figcaption className={styles.videoCaption}>
                Exercício Museu Pessoal | Suzana | Centro Cultural da Penha | 2022
              </figcaption>
            </figure>

            {/* Vídeo 9 */}
            <figure>
              {isDesktop ? (
                <div
                  className={styles.videoThumbnail}
                  onClick={() => openModal("https://www.youtube.com/embed/ECw9yLdE7hk")}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      openModal("https://www.youtube.com/embed/ECw9yLdE7hk");
                    }
                  }}
                  aria-label="Abrir vídeo 9: Registro dentro do Centro Cultural da Penha após o primeiro encontro da oficina em 2022"
                >
                  <Image
                    src="/images/autobiografico/thumb9.jpg"
                    alt="Registro dentro do Centro Cultural da Penha após o primeiro encontro da oficina em 2022"
                    width={500}
                    height={300}
                    className={styles.thumbnailImage}
                  />
                  <div className={styles.playOverlay}>▶</div>
                </div>
              ) : (
                <iframe
                  className={styles.video}
                  src="https://www.youtube.com/embed/ECw9yLdE7hk"
                  title="Registro dentro do Centro Cultural da Penha após o primeiro encontro da oficina em 2022"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              )}
              <figcaption className={styles.videoCaption}>
                Registro dentro do Centro Cultural da Penha após o primeiro encontro da oficina em 2022
              </figcaption>
            </figure>

            {/* Vídeo 10 */}
            <figure>
              {isDesktop ? (
                <div
                  className={styles.videoThumbnail}
                  onClick={() => openModal("https://www.youtube.com/embed/OBgTHvWarxk")}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      openModal("https://www.youtube.com/embed/OBgTHvWarxk");
                    }
                  }}
                  aria-label="Abrir vídeo 10: Registro na entrada do Centro Cultural da Penha de Estéfani pós-encontro"
                >
                  <Image
                    src="/images/autobiografico/thumb10.jpg"
                    alt="Registro na entrada do Centro Cultural da Penha de Estéfani pós-encontro"
                    width={500}
                    height={300}
                    className={styles.thumbnailImage}
                  />
                  <div className={styles.playOverlay}>▶</div>
                </div>
              ) : (
                <iframe
                  className={styles.video}
                  src="https://www.youtube.com/embed/OBgTHvWarxk"
                  title="Registro na entrada do Centro Cultural da Penha de Estéfani pós-encontro"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              )}
              <figcaption className={styles.videoCaption}>
                Registro na entrada do Centro Cultural da Penha de Estéfani pós-encontro
              </figcaption>
            </figure>

            {/* Vídeo 11 */}
            <figure>
              {isDesktop ? (
                <div
                  className={styles.videoThumbnail}
                  onClick={() => openModal("https://www.youtube.com/embed/ExEa9XSDEmQ")}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      openModal("https://www.youtube.com/embed/ExEa9XSDEmQ");
                    }
                  }}
                  aria-label="Abrir vídeo 11: Aquecimento na Casa Eliseu Voronkoff | 2025"
                >
                  <Image
                    src="/images/autobiografico/thumb11.jpg"
                    alt="Aquecimento na Casa Eliseu Voronkoff | 2025"
                    width={500}
                    height={300}
                    className={styles.thumbnailImage}
                  />
                  <div className={styles.playOverlay}>▶</div>
                </div>
              ) : (
                <iframe
                  className={styles.video}
                  src="https://www.youtube.com/embed/ExEa9XSDEmQ"
                  title="Aquecimento na Casa Eliseu Voronkoff | 2025"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              )}
              <figcaption className={styles.videoCaption}>
                Aquecimento na Casa Eliseu Voronkoff | 2025
              </figcaption>
            </figure>

            {/* Vídeo 12 */}
            <figure>
              {isDesktop ? (
                <div
                  className={styles.videoThumbnail}
                  onClick={() => openModal("https://www.youtube.com/embed/J5u0wIvc0M0")}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      openModal("https://www.youtube.com/embed/J5u0wIvc0M0");
                    }
                  }}
                  aria-label="Abrir vídeo 12: Improviso | Centro Cultural da Penha | 2022"
                >
                  <Image
                    src="/images/autobiografico/thumb12.jpg"
                    alt="Improviso | Centro Cultural da Penha | 2022"
                    width={500}
                    height={300}
                    className={styles.thumbnailImage}
                  />
                  <div className={styles.playOverlay}>▶</div>
                </div>
              ) : (
                <iframe
                  className={styles.video}
                  src="https://www.youtube.com/embed/J5u0wIvc0M0"
                  title="Improviso | Centro Cultural da Penha | 2022"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              )}
              <figcaption className={styles.videoCaption}>
                Improviso | Centro Cultural da Penha | 2022
              </figcaption>
            </figure>

            {/* Vídeo 13 */}
            <figure>
              {isDesktop ? (
                <div
                  className={styles.videoThumbnail}
                  onClick={() => openModal("https://www.youtube.com/embed/JFQkNag2pdg")}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      openModal("https://www.youtube.com/embed/JFQkNag2pdg");
                    }
                  }}
                  aria-label="Abrir vídeo 13: Improviso ‘Escute as feras’ | Casa Eliseu Voronkoff | 2025"
                >
                  <Image
                    src="/images/autobiografico/thumb13.jpg"
                    alt="Improviso ‘Escute as feras’ | Casa Eliseu Voronkoff | 2025"
                    width={500}
                    height={300}
                    className={styles.thumbnailImage}
                  />
                  <div className={styles.playOverlay}>▶</div>
                </div>
              ) : (
                <iframe
                  className={styles.video}
                  src="https://www.youtube.com/embed/JFQkNag2pdg"
                  title="Improviso ‘Escute as feras’ | Casa Eliseu Voronkoff | 2025"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              )}
              <figcaption className={styles.videoCaption}>
                Improviso ‘Escute as feras’ | Casa Eliseu Voronkoff | 2025
              </figcaption>
            </figure>

            {/* Vídeo 14 */}
            <figure>
              {isDesktop ? (
                <div
                  className={styles.videoThumbnail}
                  onClick={() => openModal("https://www.youtube.com/embed/-OCsQve0sog")}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      openModal("https://www.youtube.com/embed/-OCsQve0sog");
                    }
                  }}
                  aria-label="Abrir vídeo 14: Improviso no Centro Cultural da Penha | 2022"
                >
                  <Image
                    src="/images/autobiografico/thumb14.jpg"
                    alt="Improviso no Centro Cultural da Penha | 2022"
                    width={500}
                    height={300}
                    className={styles.thumbnailImage}
                  />
                  <div className={styles.playOverlay}>▶</div>
                </div>
              ) : (
                <iframe
                  className={styles.video}
                  src="https://www.youtube.com/embed/-OCsQve0sog"
                  title="Improviso no Centro Cultural da Penha | 2022"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              )}
              <figcaption className={styles.videoCaption}>
                Improviso no Centro Cultural da Penha | 2022
              </figcaption>
            </figure>

            {/* Vídeo 15 */}
            <figure>
              {isDesktop ? (
                <div
                  className={styles.videoThumbnail}
                  onClick={() => openModal("https://www.youtube.com/embed/4wlVdG-RlKo")}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      openModal("https://www.youtube.com/embed/4wlVdG-RlKo");
                    }
                  }}
                  aria-label="Abrir vídeo 15: Improviso: recriando o Cinema Brasileiro em nosso corpo - CENTRAL DO BRASIL | Biblioteca Cassiano Ricardo | 2024"
                >
                  <Image
                    src="/images/autobiografico/thumb15.jpg"
                    alt="Improviso: recriando o Cinema Brasileiro em nosso corpo - CENTRAL DO BRASIL | Biblioteca Cassiano Ricardo | 2024"
                    width={500}
                    height={300}
                    className={styles.thumbnailImage}
                  />
                  <div className={styles.playOverlay}>▶</div>
                </div>
              ) : (
                <iframe
                  className={styles.video}
                  src="https://www.youtube.com/embed/4wlVdG-RlKo"
                  title="Improviso: recriando o Cinema Brasileiro em nosso corpo - CENTRAL DO BRASIL | Biblioteca Cassiano Ricardo | 2024"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              )}
              <figcaption className={styles.videoCaption}>
                Improviso: recriando o Cinema Brasileiro em nosso corpo – CENTRAL DO BRASIL | Biblioteca Cassiano Ricardo | 2024
              </figcaption>
            </figure>

            {/* Vídeo 16 */}
            <figure>
              {isDesktop ? (
                <div
                  className={styles.videoThumbnail}
                  onClick={() => openModal("https://www.youtube.com/embed/hizU59IOJyw")}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      openModal("https://www.youtube.com/embed/hizU59IOJyw");
                    }
                  }}
                  aria-label="Abrir vídeo 16: Improviso: recriando o Cinema Brasileiro em nosso corpo - AQUARIUS | Biblioteca Cassiano Ricardo | 2024"
                >
                  <Image
                    src="/images/autobiografico/thumb16.jpg"
                    alt="Improviso: recriando o Cinema Brasileiro em nosso corpo - AQUARIUS | Biblioteca Cassiano Ricardo | 2024"
                    width={500}
                    height={300}
                    className={styles.thumbnailImage}
                  />
                  <div className={styles.playOverlay}>▶</div>
                </div>
              ) : (
                <iframe
                  className={styles.video}
                  src="https://www.youtube.com/embed/hizU59IOJyw"
                  title="Improviso: recriando o Cinema Brasileiro em nosso corpo - AQUARIUS | Biblioteca Cassiano Ricardo | 2024"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              )}
              <figcaption className={styles.videoCaption}>
                Improviso: recriando o Cinema Brasileiro em nosso corpo – AQUARIUS | Biblioteca Cassiano Ricardo | 2024
              </figcaption>
            </figure>

            {/* Vídeo 17 */}
            <figure>
              {isDesktop ? (
                <div
                  className={styles.videoThumbnail}
                  onClick={() => openModal("https://www.youtube.com/embed/eoVdGB4m5gM")}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      openModal("https://www.youtube.com/embed/eoVdGB4m5gM");
                    }
                  }}
                  aria-label="Abrir vídeo 17: Improviso: recriando o Cinema Brasileiro em nosso corpo - CENA INVENTADA DA CABEÇA | Biblioteca Cassiano Ricardo | 2024"
                >
                  <Image
                    src="/images/autobiografico/thumb17.jpg"
                    alt="Improviso: recriando o Cinema Brasileiro em nosso corpo - CENA INVENTADA DA CABEÇA | Biblioteca Cassiano Ricardo | 2024"
                    width={500}
                    height={300}
                    className={styles.thumbnailImage}
                  />
                  <div className={styles.playOverlay}>▶</div>
                </div>
              ) : (
                <iframe
                  className={styles.video}
                  src="https://www.youtube.com/embed/eoVdGB4m5gM"
                  title="Improviso: recriando o Cinema Brasileiro em nosso corpo - CENA INVENTADA DA CABEÇA | Biblioteca Cassiano Ricardo | 2024"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              )}
              <figcaption className={styles.videoCaption}>
                Improviso: recriando o Cinema Brasileiro em nosso corpo – CENA INVENTADA DA CABEÇA | Biblioteca Cassiano Ricardo | 2024
              </figcaption>
            </figure>

            {/* Vídeo 18 */}
            <figure>
              {isDesktop ? (
                <div
                  className={styles.videoThumbnail}
                  onClick={() => openModal("https://www.youtube.com/embed/lITTw-Kp4ew")}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      openModal("https://www.youtube.com/embed/lITTw-Kp4ew");
                    }
                  }}
                  aria-label="Abrir vídeo 18: Improviso: recriando o Cinema Brasileiro em nosso corpo - MEMÓRIAS DE UM LIQUIDIFICADOR | Biblioteca Cassiano Ricardo | 2024"
                >
                  <Image
                    src="/images/autobiografico/thumb18.jpg"
                    alt="Improviso: recriando o Cinema Brasileiro em nosso corpo - MEMÓRIAS DE UM LIQUIDIFICADOR | Biblioteca Cassiano Ricardo | 2024"
                    width={500}
                    height={300}
                    className={styles.thumbnailImage}
                  />
                  <div className={styles.playOverlay}>▶</div>
                </div>
              ) : (
                <iframe
                  className={styles.video}
                  src="https://www.youtube.com/embed/lITTw-Kp4ew"
                  title="Improviso: recriando o Cinema Brasileiro em nosso corpo - MEMÓRIAS DE UM LIQUIDIFICADOR | Biblioteca Cassiano Ricardo | 2024"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              )}
              <figcaption className={styles.videoCaption}>
                Improviso: recriando o Cinema Brasileiro em nosso corpo – MEMÓRIAS DE UM LIQUIDIFICADOR | Biblioteca Cassiano Ricardo | 2024
              </figcaption>
            </figure>

            {/* Vídeo 19 */}
            <figure>
              {isDesktop ? (
                <div
                  className={styles.videoThumbnail}
                  onClick={() => openModal("https://www.youtube.com/embed/3IrSc-dNC1Q")}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      openModal("https://www.youtube.com/embed/3IrSc-dNC1Q");
                    }
                  }}
                  aria-label="Abrir vídeo 19: Vai, Marcelo! Improviso de Corda Imaginária - Centro Cultural da Penha | 2022"
                >
                  <Image
                    src="/images/autobiografico/thumb19.jpg"
                    alt="Vai, Marcelo! Improviso de Corda Imaginária - Centro Cultural da Penha | 2022"
                    width={500}
                    height={300}
                    className={styles.thumbnailImage}
                  />
                  <div className={styles.playOverlay}>▶</div>
                </div>
              ) : (
                <iframe
                  className={styles.video}
                  src="https://www.youtube.com/embed/3IrSc-dNC1Q"
                  title="Vai, Marcelo! Improviso de Corda Imaginária - Centro Cultural da Penha | 2022"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              )}
              <figcaption className={styles.videoCaption}>
                Vai, Marcelo! Improviso de Corda Imaginária – Centro Cultural da Penha | 2022
              </figcaption>
            </figure>

            {/* Vídeo 20 */}
            <figure>
              {isDesktop ? (
                <div
                  className={styles.videoThumbnail}
                  onClick={() => openModal("https://www.youtube.com/embed/OxichiMDYEk")}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      openModal("https://www.youtube.com/embed/OxichiMDYEk");
                    }
                  }}
                  aria-label="Abrir vídeo 20: Exercício de Improviso com sentimentos | Centro Cultural da Penha | 2022"
                >
                  <Image
                    src="/images/autobiografico/thumb20.jpg"
                    alt="Exercício de Improviso com sentimentos | Centro Cultural da Penha | 2022"
                    width={500}
                    height={300}
                    className={styles.thumbnailImage}
                  />
                  <div className={styles.playOverlay}>▶</div>
                </div>
              ) : (
                <iframe
                  className={styles.video}
                  src="https://www.youtube.com/embed/OxichiMDYEk"
                  title="Exercício de Improviso com sentimentos | Centro Cultural da Penha | 2022"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              )}
              <figcaption className={styles.videoCaption}>
                Exercício de Improviso com sentimentos – Centro Cultural da Penha | 2022
              </figcaption>
            </figure>

          </div>
        </section>

        {/* Link para mais vídeos */}
        <section className={styles.finalNoteSection} aria-labelledby="finalNoteTitle">
          <h2 id="finalNoteTitle" className={styles.visuallyHidden}>
            Link para mais vídeos
          </h2>

          <div className={styles.highlightBox}>
            <p>
              Para conferir outros <b>excertos</b>, acesse a&nbsp;
              <a
                href="https://www.youtube.com/playlist?list=PLv-y-wxdAp-jgnHTqUI4TGP6vfPvDMWvm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Playlist no Canal do YouTube
              </a>
              .
            </p>
          </div>
        </section>

        {/* Citações que Lesteiam  */}
        <section className={styles.referencesBox} aria-labelledby="autobioReferencesTitle">
          <h2 id="autobioReferencesTitle" className={styles.visuallyHidden}>
            Outras citações que Lesteiam a pesquisa
          </h2>

          <div className={styles.referencesContent}>
            <p>
              Outras citações que <b>_Lesteiam_</b> a pesquisa do autobiográfico como ferramenta essencial da oficina:
            </p>

            <blockquote>
              <p>
                &quot;O centro da pesquisa autobiográfica encontra-se no ser humano que, em diferentes contextos e situações, autobiografa-se, quer narrando fatos de sua vida, quer refletindo sobre seu processo de autoformação. A pessoa, ao narrar, narra-se e, ao fazê-lo, ressignifica experiências, vivências, aprendizagens, dando-lhes novo significado.&quot;
              </p>
              <footer>
                — Lourdes Maria Bragagnolo Frison, Ana Margarida da Veiga Simão
              </footer>
            </blockquote>

            <blockquote>
              <p>
                &quot;Pode-se dizer que hoje um artista que se debruce sobre material autobiográfico tem diante de si este duplo desafio: questionar os modelos representacionais ainda fortemente ligados a essa teleologia da Bildung e, ao mesmo tempo, encontrar na experiência de uma criação autobiográfica o espaço de sua própria reelaboração abrindo possibilidades para verdadeiros saltos de &apos;experienciação&apos; e simbolização do self.&quot;
              </p>
              <footer>— Janaina Leite</footer>
            </blockquote>

            <blockquote>
              <p>
                &quot;Além de ser um dos métodos de pesquisa mais importantes, a pesquisa (auto)biográfica também é interpretada como um meio que possibilita ao sujeito se revelar, ou seja, levá-lo a (auto)questionar, a refletir sobre sua condição, suas ações, seus conceitos, que se configuram assim em um processo de formação.&quot;
              </p>
              <footer>— Luciana Pizzani</footer>
            </blockquote>

            <p className={styles.footnote} aria-label="Nota sobre o termo Lesteiam">
              <sup>*</sup>
                  <b><i>_Lesteiam</i>: saiba mais sobre o termo acessando a{" "}
                  <Link href="/leste" legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer"><u>página Leste</u></a>
                  </Link>{" "}
                  do site</b>.
            </p>
          </div>
        </section>

        <VideoModal
          isOpen={isModalOpen}
          onClose={closeModal}
          videoSrc={currentVideoSrc}
        />

      </main>

      <BackToHomeButton />
      <Footer />
    </div>
  );
}
