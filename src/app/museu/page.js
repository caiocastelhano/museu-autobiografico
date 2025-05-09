"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BackToHomeButton from "@/app/components/BackToHomeButton";
import TopMenu from "@/app/components/TopMenu";
import styles from "@/app/museu/Museu.module.css";
import Image from "next/image";
import FadeInSection from "@/app/components/FadeInSection";
import Link from "next/link";

export default function MuseuPage() {
  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <TopMenu />

      <main className={styles.mainContent}>

        {/* Título da página - visível apenas para leitores de tela */}
        <h1 className={styles.visuallyHidden}>Página Museu</h1>

        {/* Bloco Forma geométrica + texto inicial */}
        <section className={styles.introSection}>
          <div className={styles.introContentWrapper}>

            {/* SVG com pontos e estrelas */}
            <svg
              className={styles.floatingElementsIntro}
              viewBox="0 0 5000 1000"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Lado esquerdo (x entre 1950–2400) */}
              <circle cx="1850" cy="100" r="13" fill="black" />
              <circle cx="90" cy="420" r="6" fill="black" />
              <circle cx="220" cy="550" r="12" fill="black" />
              <circle cx="380" cy="350" r="5" fill="black" />
              <circle cx="333" cy="900" r="4.9" fill="black" />
              <circle cx="70" cy="700" r="9.5" fill="black" />
              <image href="/images/star.png" x="1970" y="400" width="35" height="35" />
              
              {/* Lado direito (x entre 3080–3400) */}
              <circle cx="4985" cy="50" r="8" fill="black" />
              <circle cx="4800" cy="800" r="7" fill="black" />
              <image href="/images/star.png" x="4920" y="350" width="25" height="25" />
            </svg>

            <svg
              className={styles.svgShapeIntro}
              viewBox="0 130 300 250"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="introSvgTitle"
            >
              <title id="introSvgTitle">Forma geométrica com a palavra museu</title>
              <g>
                <polygon
                  points="95,210 205,210 235,280 175,310 95,280"
                  fill="white"
                  stroke="black"
                  strokeWidth="1"
                />
                <circle cx="95" cy="210" r="5" fill="black" />
                <circle cx="205" cy="210" r="2.5" fill="black" />
                <circle cx="235" cy="280" r="4" fill="black" />
                <circle cx="175" cy="310" r="6" fill="black" />
                <circle cx="95" cy="280" r="3" fill="black" />
                <text
                  x="161" 
                  y="258"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  fontSize="22"
                  fontFamily="Inter, sans-serif"
                  fill="black"
                >
                  museu
                </text>
              </g>
            </svg>

            <div className={styles.introTextBlock}>
              <blockquote>
                <p>
                  <b>Perceber o deslocamento sentido por pessoas residentes de regiões consideradas periféricas</b> ao 
                  visitar museus enquanto trabalhava como mediador no Museu da Imagem e do Som, em São Paulo, me 
                  fez pensar na criação de uma oficina/espaço possível para <b>fortalecer memórias da minha região,
                  memórias <u>do lugar de onde vim</u></b>:
                </p>
                <p>
                  Ermelino Matarazzo, periferia da Zona Leste de São Paulo.
              </p>
              </blockquote>

            </div>
          </div>
        </section>

        {/* Bloco vídeo inicial */}
        <section className={styles.singleVideoSection}>
          <figure>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/GhAhzhhG7D0"
              title="O lugar de onde vim"
              frameBorder="0"
              allowFullScreen
              className={styles.video}
              aria-describedby="video1-caption"
            ></iframe>
            <figcaption id="video1-caption">
              Lugar de onde vim | Ermelino Matarazzo, Parque Boturussú.
            </figcaption>
          </figure>
        </section>

        {/* Bloco O que é um museu? */}
        <FadeInSection className={styles.projectTextSection}>
          <h2>Mas o que é um Museu?</h2>

          <p>
            Para fixar o que a oficina propõe ao criar um Museu de Si/Nós, compartilho abaixo o meu aprendizado no curso <i>Experiências Educativas em Museus Comunitários</i>, durante aula intitulada <i>Museu de Nós - nova museologia social no Brasil</i> (Escola Fundação Itaú).
          </p>

          <blockquote className={styles.highlightedQuote}>
            <p>
              &quot;Museus são instituições de memória de um país, que conservam, investigam, comunicam, interpretam e expõem, 
              para fins de preservação, estudo, pesquisa, educação, contemplação e turismo, conjuntos e coleções de 
              valor histórico, artístico, científico, técnico ou de qualquer outra natureza cultural, abertas ao 
              público, a serviço da sociedade e de seu desenvolvimento.&quot;
            </p>
            <p>
              <b>BRASIL. Lei nº 11.904, de 14 de janeiro de 2009.</b>
            </p>
          </blockquote>

          <p>
            Do reconhecimento de que quanto mais diversidade, menor o risco de as memórias serem hierarquizadas e 
            tratadas como inferiores e insignificantes para os rumos da história, <u>emerge uma nova museologia</u>.
          </p>

          <p>
            No contexto de <b>uma nova museologia</b>, nasce a <b>museologia social</b>, materializada nos museus sociais, 
            comunitários ou de favelas e nos ecomuseus, entre outros. <u>O que eles têm em comum é uma ação educativa 
            que coloca indivíduos de áreas rurais, periféricas e à margem como sujeitos que interagem com as 
            coleções, os espaços e as palavras ditas e silenciadas</u>.
          </p>

          <p>
            Nos museus sociais, os moradores são inventariantes do patrimônio cultural da comunidade, perguntando-se 
            continuamente: &quot;Quem não está aqui?&quot;, <b>&quot;Quais vozes nos faltam ouvir?&quot;. Eles tornam-se pontos de alerta 
            para as comunidades, um jeito de não esquecer o passado e de ser ativo na invenção do futuro</b>.
          </p>
        </FadeInSection>

        {/* Bloco O poder da palavra Museu */}
        <FadeInSection className={styles.quoteWithImagesSection}>
          <h2>O poder da palavra Museu para a oficina</h2>

          <p>
            Com o objetivo de aproximar histórias, reforçar o potencial artístico presente na periferia <b><u>e possibilitar 
            ao público a ressignificação sobre o que seria um museu</u></b>, a palavra presente no título da oficina foi 
            a maneira encontrada para <b>gerar pertencimento a um espaço visto até hoje como elitizado</b>, 
            eurocentrado e concentrado em regiões da cidade distantes de grande parte da população.
          </p>

          <p>
            Ao propor um novo olhar sobre o que é um museu, um movimento de <b>descolonização e decolonização é 
            estabelecido</b>, confrontando narrativas, ressignificando objetos e ampliando visões e histórias 
            individuais que, quando apresentadas coletivamente, ressignificam a história de um bairro ou cidade.
          </p>

          <p>
            Partindo da <u>simbologia que a palavra carrega</u>, o projeto surge como uma <b>oportunidade de deslocar 
            sentidos e positivar experiências</b>, fazendo com que as pessoas participantes percebam que, 
            <b>assim como o corpo é a casa, o <u>museu</u> pode ser uma composição da própria história, a história 
            de uma família, de um bairro, de uma cidade</b>.
          </p>

          <div
            className={styles.photoGrid}
            aria-labelledby="photoGridCaption"
          >
            <Image src="/images/museu/foto1.jpg" alt="Aula aberta no Centro Cultural da Penha, 2022" priority width={500} height={300} className={styles.image} />
            <Image src="/images/museu/foto2.jpg" alt="Aula aberta no Centro Cultural da Penha, 2022" priority width={500} height={300} className={styles.image} />
            <Image src="/images/museu/foto3.jpg" alt="Aula aberta no Centro Cultural da Penha, 2022" priority width={500} height={300} className={styles.image} />
            <Image src="/images/museu/foto4.jpg" alt="Aula aberta no Centro Cultural da Penha, 2022" priority width={500} height={300} className={styles.image} />
            <Image src="/images/museu/foto5.jpg" alt="Aula aberta no Centro Cultural da Penha, 2022" priority width={500} height={300} className={styles.image} />
            <Image src="/images/museu/foto6.jpg" alt="Aula aberta no Centro Cultural da Penha, 2022" priority width={500} height={300} className={styles.image} />
          </div>

          <figcaption id="photoGridCaption" className={styles.photoGridCaption}>
            Aula aberta no Centro Cultural da Penha, 2022.
          </figcaption>
        </FadeInSection>

        {/* Bloco O Museu de Nós */}
        <FadeInSection className={styles.exercisesSection}>
          <h2>O Museu de Nós</h2>

          <figure>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/OiO-cZeicas"
              title="Gleice - Álbum de Fotografias"
              frameBorder="0"
              allowFullScreen
              className={styles.video}
              aria-describedby="video1-caption"
              loading="lazy"
            ></iframe>
            <figcaption id="video1-caption">
              Gravação de Álbum de Fotografias feitas por Gleice. Álbum apresentado como objeto importante de sua história no Centro Cultural da Penha, 2022.
            </figcaption>
          </figure>

          <p>Ao ter como ponto de localização o próprio corpo em seu espaço territorial, é possível reunir objetos, 
          textos, sons, memórias, ideias, devaneios e expor, seja em uma cena ou texto o que foi ali produzido.</p>

          <p><b>O museu então ganha um sentido novo</b>. A oficina carrega o desejo de que, quando pessoas - afastadas do 
          que é visto como “centro” - estiverem em espaços museais, consigam, em primeiro lugar, <b>dar sentido ao 
          espaço</b> sabendo que podem e devem fazer parte dele para que, em segundo lugar, apreciem e experienciem 
          uma visita em um espaço cultural.</p>

          <p>Com a proposta de exercícios em diversas linguagens (texto, cena, fotografia, performance), o <b><u>museu autobiográfico</u></b> propõe que participantes reúnam e apresentem seus objetos e memórias, fazendo com que o museu ganhe um caráter de aproximação e familiaridade, conectando histórias de participantes e de <u>seus grupos, comunidades, bairros e cidades</u>.</p>

          <p><u>Abaixo, confira a proposta do exercício <i>Uma noite no Museu</i>, adaptado a partir do trabalho e pesquisa de Viola Spolin</u>:</p>

          <figure>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/6BitmIUeQ_4"
              title="Exercício: Uma noite no museu | Centro Cultural da Penha | 2022"
              frameBorder="0"
              allowFullScreen
              className={styles.video}
              aria-describedby="video2-caption"
              loading="lazy"
            ></iframe>
            <figcaption id="video2-caption">Encontro no Centro Cultural da Penha, 2022.</figcaption>
          </figure>

          <div className={styles.highlightBox}>
            <p>O exercício consiste na criação do disparador: Pessoa Criadora e Obra de arte. Em duplas, as pessoas deveriam moldar um corpo numa estátua a partir de um tema eleito pelo mediador. Como resultado, após a montagem da obra, as pessoas eram convidadas a transitar na galeria, conhecendo outros corpos.</p>

            <p>Uma memória interessante: todas as vezes em que era realizado, as pessoas relataram a dificuldade de receber olhares observadores. Mais do que ficar sem se mover, era o olhar que incomodava quem era visto e que engajava quem estava vendo.</p>
          </div>

          <p>Antes de chegar ao exercício, as pessoas participantes realizavam aquecimentos em duplas. Entre eles, o clássico de Viola Spolin do Espelho. Construindo uma linguagem para a oficina, renomeei a ação de improviso e conexão como: <b><u>Eu me vejo em você</u></b>.</p>

          <figure>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/8pPyOZ8z9TI"
              title="Exercício: Eu me vejo em você | Centro Cultural da Penha | 2022"
              frameBorder="0"
              allowFullScreen
              className={styles.video}
              aria-describedby="video3-caption"
              loading="lazy"
            ></iframe>
            <figcaption id="video3-caption">Encontro no Centro Cultural da Penha, 2022.</figcaption>
          </figure>

          <p>Abaixo, excertos de experiências de composição feitas em roda que geraram imagens coletivas significativas para minha memória:</p>

          <div className={styles.videoRow}>
            <iframe
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/Or6GGwEyHbU"
              title="Exercício: Composição | Centro Cultural da Penha | 2022"
              frameBorder="0"
              allowFullScreen
              className={styles.video}
              aria-describedby="videoRowCaption"
              loading="lazy"
            ></iframe>
            <iframe
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/u8gsK129v-c"
              title="Exercício: Composição | Centro Cultural da Penha | 2022"
              frameBorder="0"
              allowFullScreen
              className={styles.video}
              aria-describedby="videoRowCaption"
              loading="lazy"
            ></iframe>
          </div>
          <figcaption id="videoRowCaption" className={styles.videoRowCaption}>
            Encontros no Centro Cultural da Penha, 2022.
          </figcaption>

          <blockquote className={styles.poeticQuote} aria-label="Citação poética">
            <p>
              &quot;Que hoje o museu se torne um ato<br />
              Que os objetos virem gestos<br />
              Pois mesmo em tempos indigestos<br />
              Está em disputa o passado<br />
              Que é uma batalha permanente<br />
              Trazer à tona o recalcado<br />
              Redesenhar velhos traçados<br />
              Todo passado está presente&quot;
            </p>
            <footer><b>— Manifesto — Museu Nacional — Todas as vozes do fogo</b></footer>
            <footer><b>— Excerto de peça teatral desenvolvida pela <i>Barca dos Corações Partidos</i></b></footer>
          </blockquote>

          <figure>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/m-HR4BBGnlc"
              title="Aquecimento em roda | Centro Cultural da Penha | 2022"
              frameBorder="0"
              allowFullScreen
              className={styles.video}
              aria-describedby="video6-caption"
              loading="lazy"
            ></iframe>
            <figcaption id="video6-caption">Aquecimento em Roda no Centro Cultural da Penha, 2022.</figcaption>
          </figure>

          <p>
            <i>
              Para você que está aqui conhecendo o Museu Autobiográfico, desejamos saber mais de sua história. Acesse a página{" "}
              <Link href="/contato" legacyBehavior>
                <a target="_blank" rel="noopener noreferrer"><u>Contato</u></a>
              </Link>{" "}
              e envie seus objetos e memórias de vida.
            </i>
          </p>

        </FadeInSection>

      </main>
      <BackToHomeButton />
      <Footer />
    </div>
  );
}


