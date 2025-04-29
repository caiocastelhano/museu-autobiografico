"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BackToHomeButton from "@/app/components/BackToHomeButton";
import TopMenu from "@/app/components/TopMenu";
import styles from "@/app/territorio/Territorio.module.css";
import Image from "next/image";
import FadeInSection from "@/app/components/FadeInSection";

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
              <h2>Se eu encontrasse o meu bairro na rua...</h2>
              <h3>Depoimento de Jussara Dias (São Mateus, SP)</h3>

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

              <figure>
                <audio
                  controls
                  className={styles.audio}
                  aria-label="Áudio do depoimento de Jussara Dias, participante da oficina de memória em São Mateus"
                >
                  <source src="/audio/audiojussara.ogg" type="audio/mpeg" />
                  Seu navegador não suporta o elemento de áudio.
                </audio>
              </figure>

              <blockquote>
                <p>
                  “<i>Se eu encontrasse o meu bairro na rua, diria que estou de mudança e venho refletindo… como vou andar pela cidade? Meu ponto de partida sempre foi aqui. Mas demorei muito para perceber que não era apenas um ponto de partida – era também um destino.</i>”
                </p>
                <p>
                  “<i>Hoje, com mais maturidade, consigo enxergar suas potencialidades: a sua história, a sua presença política e principalmente as pessoas que têm e que as mesmas construíram.</i>”
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Bloco de contextualização após o depoimento */}
        <FadeInSection className={styles.contextSection} aria-labelledby="contextTitle">
          <h2 id="contextTitle" className={styles.visuallyHidden}>
            Contextualização do depoimento de Jussara Dias
          </h2>

          <p>
            Como parte do último encontro da terceira rodada da oficina realizada na Biblioteca Cassiano Ricardo em 2024, a participante Jussara Dias, psicóloga e moradora de São Mateus, leu seu pequeno texto, desenvolvido a partir do título: Se eu encontrasse meu bairro na rua, eu diria o seguinte...
          </p>

          <p>
            Para ela, a proposta de escrita foi uma oportunidade de rememorar sua vida no bairro e compreender a mudança para sua nova casa, em outra região.
          </p>

          <p>
            As palavras de Jussara ecoam uma verdade: o bairro não é só cenário, é personagem. O território pulsa, escuta, transforma e é transformado.
          </p>
        </FadeInSection>

        {/* Bloco Linha do tempo */}
        <FadeInSection className={styles.timelineSection} aria-labelledby="timelineTitle">

          <h2 id="timelineTitle" className={styles.visuallyHidden}>
            Linha do Tempo: Locais e percursos da oficina
          </h2>
          
          <div className={styles.timelineLine}></div>

          {/* Item 01 da linha do tempo */}
          <div className={styles.timelineItem} aria-labelledby="item01Title">
            <div className={styles.timelineContent}>

              <span role="img" aria-label="Localização no mapa" className={styles.timelineIcon}>📍</span>

              <p id="item01Title">
                Com esse depoimento, marco aqui o início da página sobre a palavra Território, que traz os locais pelos quais a oficina esteve e a prática de Viewpoints e Composição, que aprendi como ator quando fui aluno de Miriam Rinaldi no Núcleo Experimental de Artes Cênicas do SESI-SP.
              </p>

              <figure>
                <Image
                  src="/images/territorio/nucleo_experimental.jpg"
                  alt="Ensaio fotográfico de Murillo Basso para exercício de abertura do Núcleo Experimental na Avenida Paulista"
                  width={500}
                  height={300}
                  className={styles.timelineImage}
                />
                <figcaption>
                  Ensaio fotográfico de Murillo Basso — Núcleo Experimental: Rascunhos e Rasantes (Avenida Paulista).
                </figcaption>
              </figure>

              <h3 className={styles.highlightedTitle}>Um território em ação</h3>

              <p>
                O trabalho da oficina sempre se deu em movimento. A cada edição, deslocamos corpos e escutas para outros pontos dos Centros Culturais e Bibliotecas, criando presença para além da sala de ensaio habitual.
              </p>

              <p>
                Estar em espaços culturais distintos dentro do mesmo território expandido – bibliotecas, centros culturais, casas abertas – foi uma escolha metodológica e política. Cada deslocamento criava uma nova ambiência, revelava outras potências, instaurava encontros.
              </p>

              <p>
                A seguir, excertos em vídeo mostram trechos das oficinas entre 2022 e 2025, sem cortes, para que conheçam a atmosfera de cada território e coletivo:
              </p>

              <p>
                <b>Esses registros não são apenas documentação: são <u>gesto estético e político</u>. São presença. São paisagem. São território.</b>
              </p>
            </div>
          </div>

          {/* Item 02 da linha do tempo */}
          <div className={styles.timelineItem} aria-labelledby="item02Title">
            <div className={styles.timelineContent}>

              <span role="img" aria-label="Localização no mapa" className={styles.timelineIcon}>📍</span>

              <h3 id="item02Title" className={styles.timelineLocation}>
                São Paulo | Centro Cultural da Penha — 2022
              </h3>

              <figure>
                <Image
                  src="/images/territorio/centroculturaldapenha.png"
                  alt="Centro Cultural da Penha - Encontro nos fundos do espaço cultural"
                  width={500}
                  height={300}
                  className={styles.timelineImage}
                />
                <figcaption className={styles.timelineCaption}>
                  Centro Cultural da Penha | Encontro nos fundos do CCP | 2022.
                </figcaption>
              </figure>

              <figure className={styles.videoRow} aria-label="Vídeos do encontro no Centro Cultural da Penha">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/HTd7ECPbQJI"
                  title="Centro Cultural da Penha - Encontro nos fundos - Vídeo 1"
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
                  title="Centro Cultural da Penha - Encontro nos fundos - Vídeo 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.timelineVideo}
                  loading="lazy"
                ></iframe>
              </figure>
            </div>
          </div>

          {/* Item 03 da linha do tempo */}
          <div className={styles.timelineItem} aria-labelledby="item03Title">
            <div className={styles.timelineContent}>

              <span role="img" aria-label="Localização no mapa" className={styles.timelineIcon}>📍</span>

              <h3 id="item03Title" className={styles.timelineLocation}>
                São Paulo | Biblioteca Pública Cassiano Ricardo — 2023 e 2024
              </h3>

              <figure>
                <Image
                  src="/images/territorio/bibliotecacassianoricardo.png"
                  alt="Biblioteca Pública Cassiano Ricardo, vista da área externa"
                  width={500}
                  height={300}
                  className={styles.timelineImage}
                />
                <figcaption className={styles.timelineCaption}>
                  Biblioteca Pública Cassiano Ricardo — Encontro entre as prateleiras, sala de música, pátio interno (2023-2024).
                </figcaption>
              </figure>

              <figure className={styles.videoRow} aria-label="Vídeos dos encontros na Biblioteca Pública Cassiano Ricardo">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/0C30aDrW0ow"
                  title="Biblioteca Pública Cassiano Ricardo - Encontro entre as prateleiras - Vídeo 1 (2023)"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.timelineVideo}
                  loading="lazy"
                ></iframe>

                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/ZO2Lj8r0cV4"
                  title="Biblioteca Pública Cassiano Ricardo - Encontro entre as prateleiras - Vídeo 2 (2023)"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.timelineVideo}
                  loading="lazy"
                ></iframe>

                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/zFEK2H7rauE"
                  title="Biblioteca Pública Cassiano Ricardo - Exercício de reconhecimento do espaço (2023)"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.timelineVideo}
                  loading="lazy"
                ></iframe>

                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/51fRzDRGpOM"
                  title="Biblioteca Pública Cassiano Ricardo - Encontro na sala de música (2024)"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.timelineVideo}
                  loading="lazy"
                ></iframe>

                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/zleEK0uQh4U"
                  title="Biblioteca Pública Cassiano Ricardo - Cena de novela no pátio interno (2024)"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.timelineVideo}
                  loading="lazy"
                ></iframe>

                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/uoHMzUJ-6z8"
                  title="Biblioteca Pública Cassiano Ricardo - Relaxamento para início de encontro (2024)"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.timelineVideo}
                  loading="lazy"
                ></iframe>
              </figure>
            </div>
          </div>

          {/* Item 04 da linha do tempo */}
          <div className={styles.timelineItem} aria-labelledby="item04Title">
            <div className={styles.timelineContent}>

              <span role="img" aria-label="Localização no mapa" className={styles.timelineIcon}>📍</span>

              <h3 id="item04Title" className={styles.timelineLocation}>
                Curitiba | Casa Eliseu Voronkoff — 2025
              </h3>

              <figure>
                <Image
                  src="/images/territorio/casaeliseuvoronkoff.png"
                  alt="Área externa da Casa Eliseu Voronkoff"
                  width={500}
                  height={300}
                  className={styles.timelineImage}
                />
                <figcaption className={styles.timelineCaption}>
                  Casa Eliseu Voronkoff — Espaço cultural em Curitiba.
                </figcaption>
              </figure>

              <figure className={styles.videoRow} aria-label="Vídeos dos encontros na Casa Eliseu Voronkoff">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/lGf1ek80Xhk"
                  title="Casa Eliseu Voronkoff - Aquecimento nos fundos da casa - 2025"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.timelineVideo}
                  loading="lazy"
                ></iframe>

                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/FdBoOydtBUo"
                  title="Casa Eliseu Voronkoff - Uma tarde no museu - 2025"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.timelineVideo}
                  loading="lazy"
                ></iframe>

                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/ThA0YHQAapE"
                  title="Casa Eliseu Voronkoff - Exercícios no fundo da casa - 2025"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.timelineVideo}
                  loading="lazy"
                ></iframe>

                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/lgjqDdSb-fQ"
                  title="Casa Eliseu Voronkoff - Exercícios no fundo da casa - Parte 2 - 2025"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.timelineVideo}
                  loading="lazy"
                ></iframe>

                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/7EcXjsRfPtg"
                  title="Casa Eliseu Voronkoff - Exercício de composição sobre a solidão - 2025"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.timelineVideo}
                  loading="lazy"
                ></iframe>
              </figure>

              <figcaption className={styles.timelineCaption}>
                Casa Eliseu Voronkoff | Registros dos encontros de aquecimento, composição e atividades no espaço externo (2025).
              </figcaption>
            </div>
          </div>

          {/* Item 05 da linha do tempo */}
          <div className={styles.timelineItem} aria-labelledby="item05Title">
            <div className={styles.timelineContent}>

              <span role="img" aria-label="Localização no mapa" className={styles.timelineIcon}>📍</span>

              <h3 id="item05Title" className={styles.timelineLocation}>
                São Paulo | Casa Florescer II
              </h3>

              <figure>
                <Image
                  src="/images/territorio/casaflorescer1.png"
                  alt="Área externa da Casa Florescer II"
                  width={500}
                  height={300}
                  className={styles.timelineImage}
                />
                <figcaption className={styles.timelineCaption}>
                  Entrada da Casa Florescer II — São Paulo.
                </figcaption>
              </figure>

              <p>
                <b>Uma memória em um território</b>: Foi nesse lugar que percebi a importância de trabalhar o corpo e a relação com o espaço. 
                Para facilitar as dinâmicas de memória, eu precisava primeiro trabalhar o pertencimento àquele lugar e, para isso, exercícios de aquecimento com <i>Viewpoints</i> foram essenciais.
              </p>

              <figure className={styles.videoRow} aria-label="Vídeos do encontro na Casa Florescer II">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/IxNcY7KcU8g"
                  title="Casa Florescer II — Exercício de Composição com estudantes e moradoras — 2019"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.timelineVideo}
                  loading="lazy"
                ></iframe>

                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/daCEcSOcPZw"
                  title="Casa Florescer II — Wemerly se apresentando — 2019"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.timelineVideo}
                  loading="lazy"
                ></iframe>
              </figure>

              <figure>
                <Image
                  src="/images/territorio/casaflorescer2.jpeg"
                  alt="Registro de encontro na Casa Florescer II"
                  width={500}
                  height={300}
                  className={styles.timelineImage}
                />
                <figcaption className={styles.timelineCaption}>
                  Registros recuperados dos stories do perfil @marcelorodriguesmaia — Novembro e Dezembro de 2019.
                </figcaption>
              </figure>

              <blockquote aria-label="Citação de Milton Santos sobre território">
                <p>
                  &quot;O território não é apenas o conjunto dos sistemas naturais e de sistemas de coisas superpostas. 
                  O território tem que ser entendido como o território usado, não o território em si. 
                  O território usado é o chão mais a identidade. A identidade é o sentimento de pertencer àquilo que nos pertence. 
                  O território é o fundamento do trabalho, o lugar da residência, das trocas materiais e espirituais e do exercício da vida.&quot;
                </p>
                <footer><b>Milton Santos</b></footer>
              </blockquote>
            </div>
          </div>
        </FadeInSection>

        {/* Bloco Viewpoints e Composição */}
        <FadeInSection className={styles.viewpointsSection} aria-labelledby="viewpointsTitle">
          <h2 id="viewpointsTitle">Viewpoints e Composição</h2>

          <h3>Uma das mais relevantes bases criativas da oficina</h3>

          <p>
            Para chegar a esse trabalho coletivo, é essencial dar espaço ao trabalho com <b>Viewpoints e Composição</b>. Uma descoberta de um caminho potente de criação e escuta coletiva.
          </p>

          <p>
            Essas práticas se incorporaram naturalmente à rotina dos encontros desde a primeira rodada da oficina – presentes nos <b>aquecimentos</b>, nos <b>jogos com o espaço</b> e, principalmente, nas <b>“cheganças”</b> a cada novo ambiente.
          </p>

          <p>
            Mais do que técnica, Viewpoints <b>virou linguagem de pertencimento a um território e de criação compartilhada</b>.
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
            Durante minha formação, aprendi os <b>nove Viewpoints físicos</b>, divididos entre os eixos de <b>Tempo e Espaço</b>:
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
              “No território do Museu Autobiográfico, é proposto um lugar onde novos corpos, gestos e histórias podem se desenvolver a partir do chão em que estão. Ao mover o corpo em um espaço, move-se também os pensamentos criativos que se unem, criando um coletivo com maior senso de pertencimento e confiança em contar a própria história.”
            </p>
            <footer><b>— Marcelo, mediador da oficina</b></footer>
          </blockquote>
        </FadeInSection>

      </main>

      <BackToHomeButton />
      <Footer />
    </div>
  );
}
