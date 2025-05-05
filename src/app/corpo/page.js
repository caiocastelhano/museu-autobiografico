"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BackToHomeButton from "@/app/components/BackToHomeButton";
import TopMenu from "@/app/components/TopMenu";
import styles from "@/app/corpo/Corpo.module.css";
import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/app/components/FadeInSection";

export default function CorpoPage() {
  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <TopMenu />

      <main className={styles.mainContent}>

        {/* Título principal apenas para leitores de tela */}
        <h1 className={styles.visuallyHidden}>Página Corpo</h1>

        {/* Bloco de abertura com a forma + texto */}
          <section className={styles.bodyIntroSection}>
            <div className={styles.bgBodyIntro} aria-hidden="true">
              <svg
                className={styles.floatingElements}
                viewBox="0 0 5000 800"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Área segura - Lado Esquerdo (x entre 1950 e 2400) */}
                <circle cx="2111" cy="100" r="1" fill="black" />
                <circle cx="2298" cy="150" r="1.25" fill="black" />
                <circle cx="2100" cy="300" r="3" fill="black" />
                <circle cx="2250" cy="450" r="2.5" fill="black" />
                <circle cx="2300" cy="487" r="1" fill="black" />
                <circle cx="2069" cy="375" r="1.25" fill="black" />
                <image href="/images/star.png" x="2050" y="400" width="12" height="12" />
                <image href="/images/star.png" x="2350" y="200" width="9" height="9" />

                {/* Área segura - Lado Direito (x entre 3080 e 3400) */}
                <circle cx="3111" cy="244" r="4" fill="black" />
                <circle cx="3100" cy="100" r="1" fill="black" />
                <circle cx="3200" cy="150" r="1.5" fill="black" />
                <circle cx="3300" cy="200" r="1.25" fill="black" />
                <circle cx="3350" cy="300" r="2" fill="black" />
                <circle cx="3100" cy="400" r="2" fill="black" />
                <circle cx="3200" cy="500" r="3" fill="black" />
                <circle cx="3300" cy="420" r="2.5" fill="black" />
                <image href="/images/star.png" x="3150" y="400" width="12" height="12" />
                <image href="/images/star.png" x="3320" y="200" width="8" height="8" />
              </svg>
            </div>

            <div className={styles.introContent}>
              <svg
                className={styles.bodyShape}
                viewBox="800 0 300 250"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <polygon
                    points="843,35 973,65 953,175 823,145"
                    fill="white"
                    stroke="black"
                    strokeWidth="1"
                  />
                  <circle cx="843" cy="35" r="3" fill="black" />
                  <circle cx="973" cy="65" r="2.5" fill="black" />
                  <circle cx="953" cy="175" r="4" fill="black" />
                  <circle cx="823" cy="145" r="3" fill="black" />
                  <text
                    x="898"
                    y="105"
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    fontSize="22"
                    fontFamily="Inter, sans-serif"
                    fill="black"
                  >
                    corpo
                  </text>
                </g>
              </svg>

              <div className={styles.introText}>
                <h2>Meu corpo sendo mapa, me faz passar por onde?</h2>

                <blockquote>
                  <p>
                    <i>
                      &quot;Eu tenho pensado nos meus primeiros momentos de vida, que me foram narrados. Diz que passei dias sozinho
                      numa incubadora, era uma pele de icterícia, não sei como escreve, mas minha avó fala assim. Aí corta pra
                      hoje. Na terapia disseram que essa sensação de solidão, muito bem escondida por mim, vem de lá.
                      De um berço caixa. Fui filho de pais jovens da periferia, cresci sendo a sombra do meu pai ausente.
                      Pois é, tenho o mesmo nome, nasci no mesmo dia e mês e cresci sem ele. Aí meu corpo, hoje, diz que
                      lembra o dele. Hoje tento fazer desse corpo o meu corpo, e unir a mente e corpo a um só. Mas esse
                      corpo solitário já se deixou - seria deixou? - invadir. Eu já vivi o não poder controlar sobre o que
                      iam fazer com meu corpo. Eu acho que não sabia dizer não. Mas não era isso.&quot;
                    </i>
                  </p>
                </blockquote>

                <p>
                  <i>
                    Texto retirado do Memorial de Marcelo Rodrigues Maia (eu mesmo), criador da oficina Museu Autobiográfico
                    e Território_Leste
                  </i>
                </p>
              </div>
            </div>
          </section>

        {/* Bloco com dois vídeos */}
          <FadeInSection>
            <div className={styles.bodyVideoSection} role="region" aria-labelledby="bodyVideosTitle">
              <div className={styles.bgBodyVideo} aria-hidden="true">
                <svg
                  className={styles.floatingElements}
                  viewBox="0 0 5000 900"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Área segura - Lado Esquerdo (x entre 1950 e 2400) */}
                  <circle cx="2300" cy="500" r="4" fill="black" />

                  {/* Área segura - Lado Direito (x entre 3080 e 3400) */}
                  <circle cx="3100" cy="150" r="2" fill="black" />
                  <circle cx="3200" cy="270" r="1.5" fill="black" />
                  <circle cx="3300" cy="420" r="2.5" fill="black" />
                  <circle cx="3100" cy="333" r="2" fill="black" />
                  <circle cx="3325" cy="50" r="5" fill="black" />
                  <circle cx="3201" cy="420" r="3.75" fill="black" />
                  <image href="/images/star.png" x="3150" y="500" width="10" height="10" />
                  <image href="/images/star.png" x="3320" y="300" width="8" height="8" />
                </svg>
              </div>

              {/* Vídeo 1 */}
              <figure className={styles.leftVideo}>
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/VdMzheSTwbU"
                  title="Marcelinho e Claudia - gravação caseira de 1992"
                  aria-label="Vídeo de Marcelinho e Claudia, gravação em VHS feita por seu pai, Marcelo Moraes Maia, em 1992"
                  style={{ border: "none" }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
                <figcaption>
                  Marcelinho e Claudia | Gravação em VHS feita por meu pai, Marcelo Moraes Maia | 1992.
                </figcaption>
              </figure>

              {/* Vídeo 2 */}
              <figure className={styles.rightVideo}>
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/WI0BYZ20Oko"
                  title="Marcelinho brincando no chiqueiro - gravação de 1992"
                  aria-label="Vídeo de Marcelinho brincando no chiqueiro no dia seguinte à festa de um ano, gravado por seu pai, Marcelo Moraes Maia, em 1992"
                  style={{ border: "none" }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
                <figcaption>
                  Marcelinho brincando no chiqueiro no dia seguinte à festa de aniversário de um ano | Gravação em VHS feita por meu pai, Marcelo Moraes Maia | 1992.
                </figcaption>
              </figure>
            </div>
          </FadeInSection>

          {/* Bloco Corpo é casa */}
            <FadeInSection className={styles.bodyReflectionSection} role="region" aria-labelledby="corpoCasaTitle">
              <div className={styles.bgBodyReflection} aria-hidden="true">
                <svg
                  className={styles.floatingElements}
                  viewBox="0 0 5000 2200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Área segura – Lado esquerdo (x entre 1950 e 2400) */}
                  <circle cx="2000" cy="100" r="2" fill="black" /> 
                  <circle cx="2305" cy="320" r="4" fill="black" /> 
                  <circle cx="2100" cy="250" r="1.5" fill="black" /> 
                  <circle cx="2200" cy="450" r="2.5" fill="black" /> 
                  <circle cx="2300" cy="600" r="5" fill="black" /> 
                  <circle cx="2150" cy="850" r="2" fill="black" /> 
                  <circle cx="2250" cy="1100" r="2.5" fill="black" /> 
                  <circle cx="2280" cy="1350" r="1.5" fill="black" /> 
                  <circle cx="2000" cy="1500" r="1.8" fill="black" /> 
                  <circle cx="2120" cy="1580" r="1.3" fill="black" /> 
                  <circle cx="2000" cy="1650" r="2" fill="black" /> 
                  <circle cx="2180" cy="1720" r="1.5" fill="black" /> 
                  <circle cx="2220" cy="1900" r="2.2" fill="black" /> 
                  <circle cx="2300" cy="1950" r="1.7" fill="black" /> 
                  <image href="/images/star.png" x="2050" y="500" width="10" height="10" />
                  <image href="/images/star.png" x="2315" y="1300" width="12" height="12" />
                  <image href="/images/star.png" x="2100" y="1800" width="8" height="8" />
                  <image href="/images/star.png" x="2300" y="2250" width="10" height="10" />
                  <image href="/images/star.png" x="1980" y="1550" width="9" height="9" />
                  <image href="/images/star.png" x="2220" y="2000" width="11" height="11" />
                  <line x1="2000" y1="100" x2="2305" y2="320" stroke="black" strokeWidth="2" />
                  <line x1="2305" y1="320" x2="2150" y2="850" stroke="black" strokeWidth="2" />
                  <line x1="2280" y1="1350" x2="2000" y2="1500" stroke="black" strokeWidth="1.75" />
                  <line x1="2000" y1="1500" x2="2000" y2="1650" stroke="black" strokeWidth="1.75" />
                  <line x1="2000" y1="1650" x2="2180" y2="1720" stroke="black" strokeWidth="1.75" />
                  <line x1="2180" y1="1720" x2="2280" y2="1350" stroke="black" strokeWidth="1.75" />

                  {/* Área segura – Lado direito (x entre 3200 e 3400) */}
                  <circle cx="3200" cy="180" r="1.5" fill="black" />
                  <circle cx="3250" cy="400" r="2" fill="black" />
                  <circle cx="3300" cy="650" r="2.5" fill="black" />
                  <circle cx="3350" cy="850" r="1.8" fill="black" />
                  <circle cx="3220" cy="1000" r="2" fill="black" />
                  <circle cx="3280" cy="1200" r="2.5" fill="black" />
                  <circle cx="3380" cy="1400" r="2" fill="black" />
                  <circle cx="3240" cy="1600" r="1.5" fill="black" />
                  <circle cx="3320" cy="1800" r="2.2" fill="black" />
                  <circle cx="3360" cy="2000" r="2" fill="black" />
                  <image href="/images/star.png" x="3220" y="500" width="10" height="10" />
                  <image href="/images/star.png" x="3370" y="1300" width="12" height="12" />
                  <image href="/images/star.png" x="3240" y="1800" width="8" height="8" />
                  <image href="/images/star.png" x="3340" y="2150" width="10" height="10" />
                </svg>
              </div>

              <div className={styles.rightWrapper}>
                <h2 id="corpoCasaTitle">O corpo é a casa</h2>

                <p>
                  <i>
                    O relato acima é o meu relato. Resultado de uma escrita em fluxo em <b>aula do Mestrado em Artes da Cena 
                    na Escola Superior de Artes Célia Helena em parceria com a Escola Fundação Itaú.</b>
                  </i>
                </p>

                <p>
                  <i>
                    Não desejo aqui, a partir de um relato singular fundado em minha experiência, reduzir o que é <b>corpo</b> a 
                    um sentido apenas, mas pretendo intuir que é a partir da minha <b>exposição</b> que consigo transmitir o 
                    estado de vulnerabilidade, <u>confiança mútua e segurança com o corpo de participantes nos encontros</u>. 
                    A partir da minha experiência, movo outras pessoas e seus corpos, gerando novas relações e poéticas. 
                    Parto de mim, caminho para as outras pessoas e, a partir disso, nós interagimos e crescemos com a oficina.
                  </i>
                </p>

                <blockquote className={styles.quoteBox}>
                  <p>
                  &quot;Do ponto de vista da experiência, o importante não é nem a posição (nossa maneira de pormos), 
                  nem a &apos;o-posição&apos; (nossa maneira de opormos), nem a &apos;imposição&apos; (nossa maneira de impormos), 
                  nem a &apos;proposição&apos; (nossa maneira de propormos), mas a &apos;exposição&apos;, nossa maneira de &apos;ex-pormos&apos;, 
                  com tudo o que isso tem de vulnerabilidade e de risco. Por isso é incapaz de experiência aquele que se põe, 
                  ou se opõe, ou se impõe, ou se propõe, mas não se &apos;ex põe&apos;.&quot;
                  </p>
                  <p>
                    <b>Jorge Larrosa Bondía</b>
                  </p>
                </blockquote>

                <figure>
                  <iframe
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/CpJ1fUp9Aa4"
                    title="Biblioteca Pública Cassiano Ricardo - Tatuapé | Resumo do 1º Encontro em Março de 2024"
                    aria-label="Vídeo com resumo do primeiro encontro da terceira rodada da oficina na Biblioteca Pública Cassiano Ricardo em março de 2024"
                    style={{ border: "none" }}
                    allowFullScreen
                    className={styles.video}
                    loading="lazy"
                  ></iframe>
                  <figcaption>
                    Registros do primeiro encontro da terceira rodada da oficina na Biblioteca Pública Cassiano Ricardo, Tatuapé - São Paulo.
                  </figcaption>
                </figure>

                <figure>
                  <Image
                    src="/images/corpo/foto1_registroencontro.jpg"
                    alt="Registro de caderno com ordem do primeiro encontro da terceira rodada da oficina"
                    layout="responsive"
                    width={800}
                    height={500}
                    className={styles.image}
                  />
                  <figcaption>
                    Registro de caderno com ordem do primeiro encontro da terceira rodada da oficina na Biblioteca Pública Cassiano Ricardo, Tatuapé - SP.
                  </figcaption>
                </figure>
              </div>
            </FadeInSection>

          {/* Bloco com memórias do corpo */}
            <FadeInSection className={styles.bodyMemoriesSection}>
              <div className={styles.bgBodyMemories} aria-hidden="true">
                <svg
                  className={styles.floatingElements}
                  viewBox="0 0 5000 250"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Pontos e estrelas – Lado esquerdo */}
                  <circle cx="1950" cy="40" r="1.5" fill="black" />
                  <circle cx="2150" cy="100" r="1.2" fill="black" />
                  <circle cx="2300" cy="180" r="2" fill="black" />
                  <image href="/images/star.png" x="2050" y="5" width="10" height="10" />

                  {/* Pontos e estrelas – Lado direito */}
                  <circle cx="3000" cy="60" r="1.5" fill="black" />
                  <circle cx="3340" cy="120" r="1" fill="black" />
                  <circle cx="3280" cy="210" r="2" fill="black" />
                  <image href="/images/star.png" x="3100" y="160" width="9" height="9" />
                </svg>
              </div>

              <h2>Memórias do corpo</h2>

              <p>
                <i>
                  <b>Constelando os conteúdos</b> das oficinas realizadas, apresento nesta página alguns{" "}
                  <u>gestos, rostos, mãos, performances e depoimentos</u> que ficaram gravados em minha memória
                  a partir do corpo de participantes. Para saber mais sobre os exercícios que resultaram nas
                  imagens abaixo, acesse a página:{" "}
                  <Link href="/museu" legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer"><u>Museu</u></a>
                  </Link>.
                </i>
              </p>
            </FadeInSection>

          {/* Bloco Composição poética */}
            <FadeInSection className={styles.wallPoetrySection} aria-labelledby="wallPoetryTitle">
              <div className={styles.bgWallPoetry} aria-hidden="true">
                <svg
                  className={styles.floatingElements}
                  viewBox="0 0 5000 1600"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Lado esquerdo (1950–2400) */}
                  <circle cx="1975" cy="264" r="1.5" fill="black" />
                  <circle cx="2080" cy="300" r="2" fill="black" />
                  <circle cx="2013" cy="550" r="1.8" fill="black" />
                  <circle cx="2056" cy="750" r="2.2" fill="black" />
                  <image href="/images/star.png" x="2100" y="400" width="10" height="10" />

                  {/* Lado direito (3080–3400) */}
                  <circle cx="3250" cy="150" r="3" fill="black" />
                  <circle cx="3350" cy="350" r="2" fill="black" />
                  <circle cx="3300" cy="600" r="1.8" fill="black" />
                  <circle cx="3220" cy="800" r="3.75" fill="black" />
                  <circle cx="3080" cy="1550" r="5" fill="black" />
                  <circle cx="3070" cy="950" r="4" fill="black" />
                  <circle cx="3300" cy="1150" r="2" fill="black" />
                  <circle cx="3350" cy="1300" r="1.3" fill="black" />
                  <circle cx="3220" cy="1450" r="1.8" fill="black" />
                  <circle cx="3380" cy="1580" r="2.2" fill="black" />
                  <circle cx="3120" cy="200" r="1.2" fill="black" />
                  <circle cx="3000" cy="420" r="5" fill="black" />
                  <circle cx="3100" cy="700" r="1.6" fill="black" />
                  <circle cx="3400" cy="900" r="2" fill="black" />
                  <circle cx="3150" cy="1230" r="1.3" fill="black" />
                  <circle cx="3290" cy="1380" r="1.7" fill="black" />
                  <circle cx="3340" cy="1480" r="2" fill="black" />
                  <circle cx="3100" cy="1500" r="1.5" fill="black" />
                  <image href="/images/star.png" x="3270" y="250" width="10" height="10" />
                  <image href="/images/star.png" x="3340" y="700" width="9" height="9" />
                  <image href="/images/star.png" x="3230" y="1000" width="10" height="10" />
                  <image href="/images/star.png" x="3360" y="1350" width="11" height="11" />
                  <image href="/images/star.png" x="3300" y="1500" width="9" height="9" />
                  <line x1="3250" y1="150" x2="3000" y2="420" stroke="black" strokeWidth="2" />
                  <line x1="3000" y1="420" x2="3220" y2="800" stroke="black" strokeWidth="3" />
                </svg>
              </div>

              <h2 id="wallPoetryTitle">Composição poética em parede</h2>

              <p>
                <i>
                  Me lembro que o exercício foi inspirado na prática de <b>Viewpoints e Composição</b> de quadro-paisagem. Para 
                  esse propósito, antes do encontro, solicitei, via caixa de perguntas nos <u>stories do meu perfil do 
                  Instagram</u>, sugestões de improviso, e foi esse o momento que usei um título sugerido por uma amiga 
                  professora: <b>Regando as plantas</b>.
                </i>
              </p>

              <p>
                <i>
                  O resultado foi muito positivo para o grupo, que relatou o prazer e, ao mesmo tempo, a dificuldade de 
                  ficar estático, como em um quadro, aceitando serem vistos de fora.
                </i>
              </p>

              <div className={styles.imageGrid}>
                <figure className={styles.smallImage}>
                  <Image
                    src="/images/corpo/foto2_composicao.jpg"
                    alt="Registro de grupo antes de realizar exercício de composição corporal em parede"
                    width={800}
                    height={500}
                    layout="responsive"
                    className={styles.image}
                  />
                  <figcaption>
                    Registro de grupo antes de realizar exercício de composição corporal em parede.
                  </figcaption>
                </figure>

                <figure className={styles.largeImage}>
                  <Image
                    src="/images/corpo/foto3_composicao.jpg"
                    alt="Registro de grupo após realizar exercício de composição corporal em parede"
                    width={800}
                    height={500}
                    layout="responsive"
                    className={styles.image}
                  />
                  <figcaption>
                    Registro de grupo após realizar exercício de composição corporal em parede.
                  </figcaption>
                </figure>
              </div>
            </FadeInSection>

          {/* Bloco Corpo estático e corpo em movimento */}
              <FadeInSection className={styles.stillVsMotionSection} aria-labelledby="stillVsMotionTitle">
                <div className={styles.bgStillVsMotion} aria-hidden="true">
                  <svg viewBox="0 0 5000 1400" className={styles.floatingElements}>
                    {/* Lado esquerdo (1950–2400) */}
                    <circle cx="1975" cy="264" r="1.5" fill="black" />
                    <circle cx="2080" cy="300" r="2" fill="black" />
                    <circle cx="2013" cy="550" r="1.8" fill="black" />
                    <circle cx="2056" cy="750" r="2.2" fill="black" />
                    <circle cx="2150" cy="1250" r="2" fill="black" />
                    <circle cx="2000" cy="1300" r="2" fill="black" />
                    <image href="/images/star.png" x="2100" y="400" width="10" height="10" />
                    <image href="/images/star.png" x="2000" y="900" width="10" height="10" />
                    
                    {/* Lado direito (3080–3400) */}
                    <circle cx="3150" cy="200" r="1.8" fill="black" />
                    <circle cx="3250" cy="400" r="2.2" fill="black" />
                    <circle cx="3100" cy="700" r="2" fill="black" />
                    <circle cx="3350" cy="900" r="1.6" fill="black" />
                    <circle cx="3300" cy="1300" r="2" fill="black" />
                    <circle cx="3400" cy="1350" r="1.5" fill="black" />
                    <image href="/images/star.png" x="3220" y="500" width="10" height="10" />
                    <image href="/images/star.png" x="3080" y="1150" width="10" height="10" />
                  </svg>
                </div>

                <div className={styles.rightAlignedWrapper}>
                  <h2 id="stillVsMotionTitle">O corpo estático e o corpo em movimento</h2>

                  <p>
                    <i>
                      Após <b>relaxamento e aquecimento corporal no espaço</b>, o grupo composto deveria recriar o momento de uma 
                      foto como uma cena/improviso.
                    </i>
                  </p>

                  <p>
                    <i>
                      No dia, as pessoas puderam escolher entre duas fotografias e optaram pela figura abaixo. Além disso, 
                      trabalharam em grupo com a inversão de <b>papéis de gênero</b>, com o participante Rafael fazendo o papel 
                      da pessoa que dança.
                    </i>
                  </p>

                  <figure>
                    <div className={styles.imageWrapper}>
                      <Image
                        src="/images/corpo/foto4_gettyimages.jpg"
                        alt="A banda de Percival Mackey..."
                        fill
                        style={{ objectFit: 'contain' }}
                        sizes="(max-width: 768px) 100vw, 800px"
                        className={styles.image}
                      />
                    </div>
                    <figcaption>
                      A banda de Percival Mackey posa no telhado do London Palladium com a atriz Monti Ryan, esposa de Mackey (1927). Hulton Archive via Getty Images.
                    </figcaption>
                  </figure>

                  <p>
                    <i>
                      <u>Eu me lembro que, sem saber como trazer som à cena, participantes trocaram os saxofones por palmas, 
                      criando um ritmo de palmas</u> para que Rafael dançasse. A <b>cumplicidade das mãos</b> batendo deram o impulso
                      para a dança e, consequentemente, o resultado da cena.
                    </i>
                  </p>

                  <div className={styles.tripleImageBlock}>
                    <Image
                      src="/images/corpo/foto6.jpg"
                      alt="Registro de exercício de composição e improviso"
                      width={300}
                      height={200}
                      className={`${styles.tripleImage} ${styles.mirroredImage}`}
                    />
                    <Image
                      src="/images/corpo/foto5.jpg"
                      alt="Registro de exercício de composição e improviso"
                      width={300}
                      height={200}
                      className={styles.tripleImage}
                    />
                    <Image
                      src="/images/corpo/foto7.jpg"
                      alt="Registro de exercício de composição e improviso"
                      width={300}
                      height={200}
                      className={styles.tripleImage}
                    />
                    <figcaption className={styles.caption}>
                      Registros de exercício de composição e improviso a partir da fotografia de Hulton Archive. 
                      Biblioteca Pública Cassiano Ricardo, Tatuapé - São Paulo, 2024.
                    </figcaption>
                  </div>
                </div>
              </FadeInSection>

            {/* Bloco Corpos dançantes em uma Biblioteca Pública */}
              <FadeInSection className={styles.dancingBodySection} aria-labelledby="dancingBodiesTitle">
                <div className={styles.bgDancingBody} aria-hidden="true">
                  <svg
                    className={styles.floatingElements}
                    viewBox="0 0 5000 3400"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    {/* Lado direito (área segura entre 3000–3390 no eixo X) */}
                    <circle cx="3050" cy="100" r="2" fill="black" />
                    <circle cx="3120" cy="200" r="2.5" fill="black" />
                    <circle cx="3280" cy="250" r="1.8" fill="black" />
                    <circle cx="3350" cy="300" r="2" fill="black" />
                    <circle cx="3180" cy="400" r="2" fill="black" />
                    <circle cx="3100" cy="550" r="1.5" fill="black" />
                    <circle cx="3300" cy="600" r="1.8" fill="black" />
                    <circle cx="3220" cy="750" r="2" fill="black" />
                    <circle cx="3050" cy="900" r="1.5" fill="black" />
                    <circle cx="3380" cy="950" r="2" fill="black" />
                    <circle cx="3120" cy="1200" r="2.2" fill="black" />
                    <circle cx="3250" cy="1350" r="1.8" fill="black" />
                    <circle cx="3070" cy="1600" r="1.6" fill="black" />
                    <circle cx="3330" cy="1800" r="1.7" fill="black" />
                    <circle cx="3200" cy="2000" r="2.2" fill="black" />
                    <circle cx="3100" cy="2200" r="2" fill="black" />
                    <circle cx="3300" cy="2400" r="1.8" fill="black" />
                    <circle cx="3050" cy="2600" r="2" fill="black" />
                    <circle cx="3180" cy="2800" r="1.6" fill="black" />
                    <circle cx="3360" cy="3000" r="2" fill="black" />
                    <circle cx="3100" cy="3200" r="1.8" fill="black" />
                    <circle cx="3390" cy="3350" r="2.5" fill="black" />

                    {/* Estrelas PNG no lado direito */}
                    <image href="/images/star.png" x="3200" y="180" width="16" height="16" />
                    <image href="/images/star.png" x="3300" y="500" width="12" height="12" />
                    <image href="/images/star.png" x="3100" y="900" width="18" height="18" />
                    <image href="/images/star.png" x="3250" y="1700" width="10" height="10" />
                    <image href="/images/star.png" x="3350" y="2900" width="22" height="22" />
                  </svg>
                </div>

                <h2 id="dancingBodiesTitle">Corpos dançantes em uma Biblioteca Pública</h2>

                <p>
                  No dia desse exercício realizado, ainda não sabia, mas estava com dengue. <u>Me lembro que</u>, ao chegar no 
                  espaço, a sala de ensaio tradicional havia sido emprestada para outra pessoa sem meu aviso e meu <b>corpo 
                  doía</b>.
                </p>

                <figure>
                  <Image
                    src="/images/corpo/foto8.jpg"
                    alt="Conversa em roda sobre corpo, memória e território"
                    width={800}
                    height={500}
                    className={styles.image}
                  />
                  <figcaption>
                    Conversa em roda sobre corpo, memória e território em chegada ao encontro na Biblioteca Pública Cassiano Ricardo, Tatuapé - São Paulo, 2023.
                  </figcaption>
                </figure>

                <p>
                  Sendo assim, pensei que poderia ser uma oportunidade positiva para a biblioteca <b>trazer som e movimento
                  por entre as prateleiras</b>. Com livros variados, todas as práticas e momentos foram realizados 
                  no espaço e, apesar do cansaço do dia, a <b>energia das participantes me envolveu</b>, gerando belos 
                  registros e momentos.
                </p>

                <figure className={styles.gridTwoByTwo}>
                  <Image src="/images/corpo/foto9.jpg" alt="Imagem 1" width={300} height={200} layout="responsive" />
                  <Image src="/images/corpo/foto10.jpg" alt="Imagem 2" width={300} height={200} layout="responsive" />
                  <Image src="/images/corpo/foto11.jpg" alt="Imagem 3" width={300} height={200} layout="responsive" />
                  <Image src="/images/corpo/foto12.jpg" alt="Imagem 4" width={300} height={200} layout="responsive" />
                  <figcaption className={styles.caption}>
                    Registros de encontro realizado entre as prateleiras da Biblioteca Pública Cassiano Ricardo, Tatuapé - São Paulo, 2023.
                  </figcaption>
                </figure>

                <blockquote className={styles.quoteBox}>
                  <p>
                    &quot;Como irradiar acontecimentos? Cada corpo, território fértil para pousar experiências, é um portador 
                    de memórias, e é com elas que desenvolve sua trajetória. Ativado pelos sentidos, principalmente pelo de 
                    sobrevivência, inerente a tudo que pulsa, segue cotidianamente organizando as matérias ao seu redor, 
                    sendo um pouco a cada dia, corpos-gerúndios em manutenção da existência.&quot;
                  </p>
                  <p>
                    <b>Luaa Gabanini</b>
                  </p>
                </blockquote>

                <figure>
                  <iframe
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/_Fkvqp-iXFo"
                    title="Título do vídeo"
                    frameBorder="0"
                    allowFullScreen
                    className={styles.video}
                    loading="lazy"
                  ></iframe>
                  <figcaption>
                    Trabalhando a visão, o sensorial e o espaço com aquecimento corporal musicalizado.
                  </figcaption>
                </figure>

                <p>
                  <i>
                    Após a experiência <b>de corpo na sala de livros da Biblioteca, a participante Grazi relatou sua 
                    experiência dançando com um livro sobre a guerra</b>.
                  </i>
                </p>

                <figure className={styles.gridOneRow}>
                  <Image src="/images/corpo/foto13.jpg" alt="Imagem 1" width={300} height={200} layout="responsive" />
                  <Image src="/images/corpo/foto14.jpg" alt="Imagem 2" width={300} height={200} layout="responsive" />
                  <Image src="/images/corpo/foto15.jpg" alt="Imagem 3" width={300} height={200} layout="responsive" />
                  <figcaption className={styles.caption}>
                    Participante Grazi em vivência na biblioteca dançando com livro sobre a guerra.
                  </figcaption>
                </figure>

                <p>
                  <u>A partir dessa</u> <b>cena/dança</b> <u>feita em improviso, aproveitamos o título e o contexto político do momento, 
                  em que os conflitos fortes entre Israel e Irã voltavam a trazer preocupações mundiais</u>.
                </p>
              </FadeInSection>

            {/* Bloco Dançar com a Guerra */}
              <FadeInSection className={styles.danceWithWarSection} aria-labelledby="danceWithWarTitle">
                <div className={styles.bgDanceWithWar} aria-hidden="true">
                  <svg
                    className={styles.floatingElements}
                    viewBox="0 0 5000 300"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Lado esquerdo (x entre 1950–2400) */}
                    <circle cx="1950" cy="150" r="1.5" fill="black" />
                    <circle cx="2042" cy="230" r="1.8" fill="black" />
                    <image href="/images/star.png" x="1980" y="200" width="10" height="10" />
                    <image href="/images/star.png" x="1970" y="250" width="9" height="9" />

                    {/* Lado direito (x entre 3080–3400) */}
                    <circle cx="3100" cy="140" r="1.8" fill="black" />
                    <circle cx="3000" cy="190" r="4" fill="black" />
                    <circle cx="3280" cy="150" r="1.6" fill="black" />
                    <circle cx="3340" cy="200" r="1.4" fill="black" />
                    <circle cx="3050" cy="285" r="3" fill="black" />
                    <image href="/images/star.png" x="3180" y="170" width="10" height="10" />
                    <image href="/images/star.png" x="3100" y="50" width="9" height="9" />
                  </svg>
                </div>

                <h2 id="danceWithWarTitle">Dançar com a Guerra</h2>

                <p>
                  Carregando o contexto externo, <i>a <b>visão poética de Grazi Viana</b></i> e o gosto pela literatura e
                  poesia de participantes, foi sugerida a produção de um texto sob o título “<u>DANÇAR COM A GUERRA</u>”.
                </p>

                <p>
                  <i>
                    <b>
                      O resultado da produção movimentou o grupo no último encontro e, em nossa
                      confraternização final, foi relatada a sensação{" "}
                      <u>coletiva de afeto e pertencimento</u>.
                    </b>
                  </i>
                </p>

                <p>
                  Com essa vivência, palavras-chave ficaram latentes:{" "}
                  <b>
                    Pertencimento; Vínculo; Afeto; Resistência; Memórias e Corpo. 
                  </b>{" "}
                  Abaixo, os textos produzidos por duas participantes:
                </p>
              </FadeInSection>

            {/* Bloco Texto das participantes */}
              <FadeInSection
                className={styles.participantTextsSection}
                aria-labelledby="participantTextsTitle"
              >
                <div className={styles.svgWrapper} aria-hidden="true">
                  <svg
                    className={styles.floatingElements}
                    viewBox="0 0 5000 2900"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Pontos e estrelas no lado direito */}
                    <circle cx="3050" cy="150" r="1.5" fill="black" />
                    <circle cx="3120" cy="300" r="1.8" fill="black" />
                    <circle cx="3200" cy="500" r="2.2" fill="black" />
                    <circle cx="3280" cy="750" r="1.9" fill="black" />
                    <circle cx="3350" cy="1000" r="2.1" fill="black" />
                    <circle cx="3080" cy="1250" r="1.4" fill="black" />
                    <circle cx="3150" cy="1500" r="1.6" fill="black" />
                    <circle cx="3240" cy="1750" r="3" fill="black" />
                    <circle cx="3090" cy="2000" r="2.5" fill="black" />
                    <circle cx="3180" cy="2250" r="4" fill="black" />
                    <circle cx="3040" cy="2400" r="1.6" fill="black" />
                    <circle cx="3300" cy="2550" r="2.1" fill="black" />
                    <circle cx="3370" cy="2670" r="1.7" fill="black" />
                    <circle cx="3100" cy="2750" r="1.9" fill="black" />
                    <circle cx="3000" cy="2850" r="1.4" fill="black" />
                    <image href="/images/star.png" x="3060" y="400" width="10" height="10" />
                    <image href="/images/star.png" x="3080" y="900" width="12" height="12" />
                    <image href="/images/star.png" x="3100" y="1400" width="9" height="9" />
                    <image href="/images/star.png" x="3240" y="1850" width="11" height="11" />
                    <image href="/images/star.png" x="3180" y="2300" width="10" height="10" />
                    <image href="/images/star.png" x="3000" y="2450" width="9" height="9" />
                    <image href="/images/star.png" x="3360" y="2600" width="11" height="11" />
                    <image href="/images/star.png" x="3120" y="2700" width="10" height="10" />
                    <image href="/images/star.png" x="3290" y="2850" width="12" height="12" />
                    <line x1="3240" y1="1750" x2="3090" y2="2000" stroke="black" strokeWidth="1.25" />
                    <line x1="3090" y1="2000" x2="3180" y2="2250" stroke="black" strokeWidth="1.75" />
                    <line x1="3180" y1="2250" x2="3040" y2="2400" stroke="black" strokeWidth="1.25" />
                  </svg>
                </div>

                <h2 id="participantTextsTitle" className={styles.visuallyHidden}>
                  Textos das participantes
                </h2>

                <div className={styles.textWithFloatingImage}>
                  <Image
                    src="/images/corpo/foto16_graziele.JPG"
                    alt="Graziele Viana"
                    width={800}
                    height={500}
                    className={styles.floatingImage}
                  />

                  <h3>Graziele Viana - Solitária</h3>

                  <p>Entenda! Não quero que vá para sempre, apenas um alívio, um suspiro, uma brecha de saudades.</p>
                  <p>Seu olhar era fixo e penetrante. Sua mão firme, cuidadosa apoiava-se nas minhas costas suadas. A outra mão segurava delicadamente a minha mão direita tentando manter-se firme.</p>
                  <p>Ela avançou com o pé direito, eu recuei com o esquerdo. O salão estava vazio. Embriaguei-me com seu perfume. Um perfume de mulher.</p>
                  <p>Entenda! Cansei de momentos clandestinos, de intimidades sem destinos.</p>
                  <p><b>Solitária</b></p>
                  <p>Enamorar-se, ter o coração destruído como a bomba de Hiroshima, o olhar desejoso de uma criança quando se encontra com o seu doce preferido, a ardência dos lábios, dos puros se misturando de-li-ci-o-sa-men-te com a pureza do desejo do outro.</p>
                  <p>Seu olhar persistente misturava-se com o tango ao fundo. Acelerou. Ela avançou em minha direção ao centro com o pé esquerdo, recuei com o passo para trás. Preparou-me e fizemos um giro, giro, giro. A leveza, a maciez do seu vestido girava em tons sóbrios e determinantes. Conduzia-me. Uma respiração longa, paciente. Compreensão no olhar.</p>
                  <p>A música desacelerou. Meu corpo molhou. Seguia o seu ritmo consciente, seu olhar de carvão travado na minha pupila. O perfume de mulher permanecia. Permanecia a música ao fundo. Soltos dançava pelo ar os meus pensamentos, o encantamento por aquele corpo, o convite do seu olhar. Uma granada sorrindo dentro de mim. Pedia silenciosamente para os minutos durarem, durarem, durarem. Uma trégua nessa minha vida de tragicomédia.</p>
                  <p><b>Entenda, senhora (sol)idão. Por favor, me tire da</b></p>
                  <p><b>(Sol)itária</b></p>
                </div>
              </FadeInSection>

              <FadeInSection className={styles.estefaniSection} aria-labelledby="estefaniTitle">
                <h2 id="estefaniTitle" className={styles.visuallyHidden}>
                  Texto da participante Estefani Moura
                </h2>

                <div className={styles.textWithFloatingImage}>
                  <Image
                    src="/images/corpo/foto17_estefani.JPG"
                    alt="Estefani Moura"
                    width={800}
                    height={500}
                    className={styles.floatingImage}
                  />

                  <h3>Estefani Moura - sem título</h3>
                  <div className={styles.estefaniPoem}>
                    <p>Ainda é cedo, amor</p>
                    <p>Mal começaste a conhecer a vida</p>
                    <p>Já anuncias a hora de partida</p>
                    <p>Sem saber mesmo o rumo que irás tomar</p>

                    <br />

                    <p>Presta atenção, querida</p>
                    <p>Embora eu saiba que estás resolvida</p>
                    <p>Em cada esquina cai um pouco tua vida</p>
                    <p>Em pouco tempo não serás mais o que és</p>

                    <br />

                    <p>Pensei o bastante pra entender o que seria o suficiente,</p>
                    <p>Um mundo onde tudo está se desmoronando, e aqui dentro não costuma ser tão diferente.</p>
                    <p>Um peito que decai para um lado onde a vida não parece mais a mesma,</p>
                    <p>uma despedida quase grotesca</p>
                    <p>a saudade no toc toc na porta, como se quisesse sempre entrar, sempre participar, sempre, sempre...</p>
                    <p>e no fim é quase nada, nulo, em branco total.</p>

                    <br />

                    <p>A única certeza que temos sempre é a do final,</p>
                    <p>a morte do corpo o descanso de uma alma quase supérflua.</p>
                    <p>Um sentimento de contínua queda, sem sinal de vida, sem sinal de nada.</p>
                    <p>Pipipi é isso, e aí?</p>
                    <p>É tanto tempo pensando no quanto tudo isso passa, e passa</p>
                    <p>Mas quando passa de verdade?</p>
                    <p>São tantas dúvidas que não cabem em um texto, em uma mensagem.</p>

                    <br />

                    <p>Eu tô cansada dessa incoerência sentimental,</p>
                    <p>De pensar que tô em um outro plano astral,</p>
                    <p>Não se enxergar no espelho, na compra em uma loja.</p>
                    <p>É cedo demais pra pensar em uma vida quase chegando ao fim,</p>
                    <p>É cedo o bastante pra ter tanto, tanto medo do fim?</p>
                    <p>Irresponsável, grossa demais, não pode nunca fazer nada?</p>
                    <p>Imatura o suficiente pra não se entender, pra se arrepender de qualquer coisa que faça.</p>
                    <p>É sempre, nada nada nada.</p>

                    <br />

                    <p>Eu tô dançando, sapateando, entendo o que eu tenho e o que sou.</p>
                    <p>Crescendo a cada dia, querendo voltar pra um lugar que eu sei que eu não tô.</p>
                    <p>Eu juro que tô tentando amor, mas tá difícil,</p>
                    <p>Eu danço com a guerra pra tentar acabar com isso, é quase impossível.</p>
                    <p>Meus pés se cansam, a voz se cala e no fim é sempre o mesmo nada, nada, nada.</p>

                    <br />

                    <p>A vida é um moinho cartola, passa rápido demais, esmagando o que nos resta de paz.</p>
                    <p>Lembro sempre dos meus pais juntos fazendo o almoço de domingo.</p>
                    <p>As idas à igreja como de costume.</p>
                    <p>E os sonhos que pareciam se reconstruir,</p>
                    <p>Mas onde eles estão agora?</p>
                    <p>Onde eu tô agora?</p>
                    <p>Tudo se foi, se findou em um fim de semana, em um ano ou dois</p>
                    <p>Eu não entendo esse completo desespero,</p>
                    <p>O anseio de uma vida sem motivação,</p>
                    <p>Onde eu tô onde eu quero chegar?</p>

                    <br />

                    <p>Por que tanta pergunta sem resposta?</p>
                    <p>Tanta música sem nota?</p>
                    <p>Eu não entendo, eu fujo desse tal entendimento.</p>
                    <p>Eu sinto aqui dentro,</p>
                    <p>Algo desmoronando</p>
                    <p>Bombardeado de sensação,</p>
                    <p>A metralhadora lotada de mágoa,</p>
                    <p>Atirando pra todo lado nessa estrada</p>
                    <p>Ainda não me acostumei a dançar essa valsa.</p>

                    <br />

                    <p>Mas eu entendo, eu entendo cartola, quando você diz devagar demais</p>
                    <p>Que tudo isso é passageiro demais,</p>
                    <p>E que essa vida nada fica como começou</p>
                    <p>e por fim enquanto danço ao som da sua música (a minha favorita)</p>
                    <p>Entendo um pouco dessa vida, que às vezes passa rápido o suficiente pra não se entender.</p>
                    <p>Um dia, lá pra frente quem sabe eu venço a guerra que é</p>
                    <p><b>Você</b></p>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection className={styles.participantTextsSection} aria-labelledby="participantTextsTitle">
                <div className={styles.textWithFloatingImage}>
                  <h2 id="cintiaTitle" className={styles.visuallyHidden}>
                    Texto da participante Cintia
                  </h2>
                    <Image
                      src="/images/corpo/foto18_cintia.png"
                      alt="Estefani Moura"
                      width={800}
                      height={500}
                      className={styles.floatingImage}
                    />

                  <h3>Cintia - sem título</h3>

                  <p>
                    O ano era 2019, em vários lugares do país ruas decoradas, famílias se organizando para mais um ano novo. Em uma casa não muito diferente uma família também se preparava para ir jantar como de costume na igreja. O sentimento que traduzia era “Ufa concluímos mais um ano”. Ao mesmo instante um deles triste, angustiado pelas circunstâncias da vida, antes de sair o mais novo enfezado “Bora”. 
                  </p>
                    
                  <p>
                    Tirar uma foto? os mais velhos não querendo muito, aceitaram. É comum em todo lar no final de ano tirar uma foto e guardar de recordação (recordação significa memória). Lembrança, é o que essa foto se tornou. 
                  </p>

                  <p>
                    Um deles não está mais entre nós.
                  </p>

                  <p>
                    No ano seguinte fomos surpreendidos com a COVID que se espalhou em vários países, uma quarentena que durou mais de um ano e milhares e milhares de mortes. Milhões de pessoas viraram lembranças como pássaros que ao descobrir o poder de voar tomam liberdade e voam para bem longe...
                  </p>

                </div>
              </FadeInSection>

            {/* Bloco Playlist da Oficina */}
              <FadeInSection className={styles.playlistSection} aria-labelledby="playlistTitle">
                <h2 id="playlistTitle" className={styles.visuallyHidden}>
                  Playlist da Oficina
                </h2>

                <div className={styles.bgPlaylist} aria-hidden="true">
                  <svg
                    className={styles.floatingElements}
                    viewBox="0 0 5000 400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Pontos e estrelas – Lado esquerdo (x entre 1950–2400) */}
                    <circle cx="1980" cy="80" r="1.5" fill="black" />
                    <circle cx="2100" cy="150" r="2.5" fill="black" />
                    <circle cx="2250" cy="350" r="4" fill="black" />
                    <image href="/images/star.png" x="2200" y="100" width="10" height="10" />

                    {/* Pontos e estrelas – Lado direito (x entre 3080–3400) */}
                    <circle cx="3100" cy="100" r="1.2" fill="black" />
                    <circle cx="3220" cy="180" r="2" fill="black" />
                    <circle cx="3300" cy="250" r="1.6" fill="black" />
                    <circle cx="2900" cy="111" r="1.2" fill="black" />
                    <circle cx="3000" cy="190" r="2" fill="black" />
                    <circle cx="3030" cy="233" r="4" fill="black" />
                    <image href="/images/star.png" x="3280" y="150" width="9" height="9" />
                  </svg>
                </div>

                <h2>Playlist da Oficina</h2>
                <p>
                  <u>
                    Quer conhecer as músicas que fizeram os corpos dançar, brincar, atuar e devanear nas oficinas do 
                    Museu Autobiográfico e Terrítório_Leste? Acesse:
                  </u>
                </p>

                <div className={styles.spotifyEmbed}>
                  <iframe
                    style={{ borderRadius: "12px" }}
                    src="https://open.spotify.com/embed/playlist/7nB0P5WBxg9QRqSXvrXvJT"
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title="Playlist da Oficina no Spotify"
                  ></iframe>
                </div>
              </FadeInSection>
              
      </main>

      <BackToHomeButton />
      <Footer />
    </div>
  );
}


