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
        <div className={styles.introWrapper}>
          <svg
            className={styles.floatingElements}
            viewBox="0 0 5000 1000"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMin meet"
            aria-hidden="true"
          >
            {/* Pontos dispersos */}
            <circle cx="250" cy="180" r="18" fill="black" />
            <circle cx="850" cy="90" r="8" fill="black" />
            <circle cx="450" cy="600" r="7" fill="black" />
            <circle cx="1990" cy="300" r="2.2" fill="black" />
            <circle cx="2300" cy="920" r="1.7" fill="black" />
            <circle cx="2760" cy="150" r="2" fill="black" />
            <circle cx="3500" cy="800" r="1.5" fill="black" />
            <circle cx="3900" cy="200" r="14" fill="black" />
            <circle cx="4300" cy="680" r="9" fill="black" />
            <circle cx="4700" cy="350" r="1.9" fill="black" />
            <circle cx="4500" cy="900" r="2" fill="black" />

            {/* Estrelas PNG */}
            <image href="/images/star.png" x="600" y="900" width="15" height="15" />
            <image href="/images/star.png" x="800" y="480" width="18" height="18" />
            <image href="/images/star.png" x="2150" y="220" width="13" height="13" />
            <image href="/images/star.png" x="3800" y="100" width="14" height="14" />
            <image href="/images/star.png" x="4600" y="250" width="12" height="12" />
            <image href="/images/star.png" x="4400" y="850" width="16" height="16" />
          </svg>

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
                  &quot;Além de ser um dos métodos de pesquisa mais importantes, a pesquisa (auto)biográfica também é interpretada como um meio que possibilita ao sujeito se revelar, ou seja, levá-lo a (auto)questionar, a refletir sobre sua condição, suas ações, seus conceitos, que se configuram assim em um processo de formação.&quot;
                </p>
                <footer>— Luciana Pizzani</footer>
              </blockquote>
            </div>
          </section>
        </div>

        {/* Bloco de introdução textual com destaque e nota de rodapé */}
        <div className={styles.autobioIntroWrapper}>
          <svg
            className={styles.floatingElements}
            viewBox="0 0 5000 1200"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMin meet"
            aria-hidden="true"
          >
            {/* LADO ESQUERDO — x: 250 a 1000 / y: 50 a 1150 */}
            <circle cx="280" cy="90" r="2.1" fill="black" />
            <circle cx="600" cy="200" r="10" fill="black" />
            <circle cx="400" cy="600" r="13" fill="black" />
            <circle cx="750" cy="150" r="17" fill="black" />
            <circle cx="500" cy="1050" r="1.6" fill="black" />
            <circle cx="990" cy="420" r="2.2" fill="black" />
            <circle cx="350" cy="850" r="1.9" fill="black" />
            <image href="/images/star.png" x="320" y="300" width="16" height="16" />
            <image href="/images/star.png" x="870" y="720" width="25" height="25" />
            <image href="/images/star.png" x="650" y="520" width="18" height="18" />

            {/* LADO DIREITO — x: 4100 a 4800 / y: 50 a 1150 */}
            <circle cx="4120" cy="250" r="10" fill="black" />
            <circle cx="4200" cy="10" r="3" fill="black" />
            <circle cx="4380" cy="400" r="2.4" fill="black" />
            <circle cx="4550" cy="180" r="12" fill="black" />
            <circle cx="4700" cy="1000" r="8.3" fill="black" />
            <circle cx="4780" cy="650" r="6" fill="black" />
            <circle cx="4300" cy="780" r="1.8" fill="black" />
            <circle cx="4600" cy="300" r="15" fill="black" />
            <image href="/images/star.png" x="4140" y="550" width="20" height="20" />
            <image href="/images/star.png" x="4480" y="850" width="16" height="16" />
            <image href="/images/star.png" x="4740" y="500" width="11" height="11" />
          </svg>

          <section className={styles.autobioIntroTextSection} aria-labelledby="autobioIntroTitle">
            <h2 id="autobioIntroTitle" className={styles.visuallyHidden}>
              Introdução sobre a proposta da seção Autobiográfico
            </h2>

            <p>
              Meu primeiro contato com o uso da autobiografia como recurso de criação teatral se deu como estudante da 15ª turma do Núcleo Experimental de Artes, um programa essencial para os rumos da minha vida e que, na época, era coordenado pela atriz, professora e pesquisadora <b>Miriam Rinaldi</b>. O <b>Núcleo</b>, como chamamos afetivamente, <u>é um programa que permite a jovens artistas da cena aprofundar e ampliar o repertório de criação, a partir de uma investigação dos diferentes graus de atuação</u>. O curso conecta diferentes artistas, de diferentes áreas da cena teatral, para ministrar os módulos: <i>Persona, Personagem e Narrador</i>.
            </p>

            < br/>

            <p>
              No eixo <i>Persona</i>, os encontros - e enfrentamentos autobiográficos - foram com a professora <b>Janaína Fontes Leite</b>. A proposta de usar registros de vida para a criação de cenas teatrais me encantou. Na época, a experiência impactou muito o meu corpo, o corpo de um jovem da periferia.
            </p>

            < br/>

            <p>
              Em um exercício, levei um <u>vídeo meu bebê gravado pelo meu pai</u>, com quem não tenho contato. A cena/relato/performance era marcada pelo texto <i>Carta ao Pai</i>, de Franz Kafka, e contava com uma música da cantora Alice Caymmi, intitulada <i>Antes de tudo</i>. Ao fundo, o vídeo do <b>bebê-eu</b> me mostrava dentro de um <u>&quot;chiqueirinho&quot;, brincando com bexigas</u>.
            </p>

            < br/>

            <p>
              No ambiente físico, eu também brincava com as bexigas, escondendo-as e estourando dentro de uma grande camiseta, que sinalizava a minha infância com obesidade. Como Janaína sintetiza em sua dissertação de mestrado, trata-se de encontrar na experiência de uma criação autobiográfica o espaço de sua própria reelaboração, abrindo possibilidades para verdadeiros saltos de ‘experienciação’ e simbolização do <i>self</i>. <u><b>O sentimento de experienciar a mim mesmo em cena, em meio ao coletivo, está na base da oficina</b></u>.
            </p>

            < br/>

            <div className={styles.divider} aria-hidden="true" />

            <p>
              Aqui você poderá assistir <b>excertos*</b> de experiências de <b>participantes em ação</b> e dos lugares pelos quais a oficina passou. <u>Compondo momentos registrados com a câmera do celular durante os encontros ou em gravações feitas por participantes ou terceiros para exercícios, o autobiográfico na experiência digital ganha um novo significado</u>, <b>relacionando momentos distintos vividos com exercícios propostos que, juntos, traduzem a relevância do experienciar a si mesmo em cena</b>.
            </p>

            < br/>

            <p>
              A cada vídeo, convido você a imaginar o <u>antes e depois que geraram os momentos</u> registrados de forma improvisada ou encenada, mas, para todos os vídeos, desejo que, principalmente, <b>sintam um pouco da história de quem faz a oficina acontecer</b>. Guiem o olhar de vocês para imaginar o mundo interno de cada pessoa. <b>É neste mundo interno que reside o precioso museu de cada participante e sua autenticidade</b>.
            </p>

          </section>
        </div>

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
              Para conferir outros <b>excertos*</b>, acesse a&nbsp;
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
              Outras citações que <b>*_Lesteiam</b> a pesquisa do autobiográfico como ferramenta essencial da oficina:
            </p>

            <blockquote>
              <p>
                O centro da pesquisa autobiográfica encontra-se no ser humano que, em diferentes contextos e situações, autobiografa-se, quer narrando fatos de sua vida, quer refletindo sobre seu processo de autoformação. A pessoa, ao narrar, narra-se e, ao fazê-lo, ressignifica experiências, vivências, aprendizagens, dando-lhes novo significado.
              </p>
              <footer>
                — Lourdes Maria Bragagnolo Frison, Ana Margarida da Veiga Simão
              </footer>
            </blockquote>

            <blockquote>
              <p>
                Pode-se dizer que hoje um artista que se debruce sobre material autobiográfico tem diante de si este duplo desafio: questionar os modelos representacionais ainda fortemente ligados a essa teleologia da Bildung e, ao mesmo tempo, encontrar na experiência de uma criação autobiográfica o espaço de sua própria reelaboração abrindo possibilidades para verdadeiros saltos de &apos;experienciação&apos; e simbolização do self.
              </p>
              <footer>— Janaina Leite</footer>
            </blockquote>

            <blockquote>
              <p>
                A autobiografia produz uma forma de enfrentamento político que para mim é importantíssimo.
                Ela é uma importante arma política.
              </p>
              <footer>— Édouard Louis</footer>
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

        {/* Nota do criador do site */}
        <section className={styles.authorNote}>
          <p>
            *Uso o termo &quot;excerto&quot; no sentido proposto por <b>Graziela Kunsch</b> na pesquisa <i>Projeto Mutirão</i>: um vídeo formado por um único plano, que pode ser visto individualmente, mas é parte de um todo, carente de articulação.
          </p>
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
