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
        <section>
          <h2>VIEWPOINTS E COMPOSIÇÃO</h2>
          <h3>Uma das mais relevantes bases criativas da oficina</h3>

          <p>
            Para chegar a esse trabalho coletivo, é essencial dar espaço  ao trabalho com <b>Viewpoints e Composição</b>. Uma descoberta de um caminho potente de criação e escuta coletiva.
          </p>

          <p>
            Essas práticas se incorporaram naturalmente à rotina dos encontros desde a primeira rodada da oficina – presentes nos <b>aquecimentos</b>, nos <b>jogos com o espaço</b> e, principalmente, nas <b>“cheganças”</b> a cada novo ambiente.
          </p>

          <p>
            Mais do que técnica, Viewpoints <b>virou linguagem de pertencimento a um território e de criação compartilhada</b>.
          </p>

          <blockquote>
            <p>
              &quot;<i>Viewpoints são uma série de nomes dados a certos princípios de movimento através do tempo e do espaço; esses nomes constituem uma linguagem para falar sobre o que acontece no palco</i>.&quot;
            </p>
            <footer><b>— Anne Bogart e Tina Landau.</b></footer>
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
              alt="Mapa afetivo do território"
              width={500}
              height={300}
              className={styles.image}
            />
            <figcaption> Fim de aula da 15ª turma do Núcleo Experimental de Artes Cênicas do SESI-SP montando composição coletiva(2015).</figcaption>
          </figure>
        </section>

        {/* Bloco Duas Colunas: espaço e tempo */}
        <section className={styles.twoColumnSection}>
          <div className={styles.column}>
            <h3>Tempo</h3>

            <h4>Andamento</h4>
            <p>A medida da velocidade na qual um movimento acontece.</p>

            <h4>Duração</h4>
            <p>Quanto dura um movimento ou sequência de movimentos.</p>

            <h4>Resposta Cinestésica</h4>
            <p>Reação impulsiva ao movimento externo, no tempo do agora.</p>

            <h4>Repetição</h4>
            <p>Repetição de movimentos internos ou externos (formas, gestos, ritmos).</p>
          </div>

          <div className={styles.column}>
            <h3>Espaço</h3>

            <h4>Forma</h4>
            <p>O desenho que o corpo cria no espaço.</p>

            <h4>Gesto</h4>
            <p>Movimento com começo, meio e fim. Pode ser: Comportamental (realista) ou Expressivo (poético, simbólico).</p>

            <h4>Arquitetura</h4>
            <p>Como o corpo se relaciona com o espaço físico — sua massa, textura, luz, cor, som.</p>

            <h4>Relação Espacial</h4>
            <p>Distâncias entre corpos, entre grupos ou com o espaço arquitetônico.</p>

            <h4>Topografia</h4>
            <p>Os caminhos que o corpo traça no chão, o padrão da movimentação.</p>
          </div>
        </section>

        {/* Bloco Uma Coluna: composição */}
        <section className={styles.centered}>
          <div className={styles.highlightBox}>
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
              <li>Uma prática para quem cria — seja diretor, ator, performer, designer.</li>
            </ul>

            <figure>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/VBSihaGzDf8"
                title="Exercício de Composição"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.video}
              ></iframe>
              <figcaption>Centro Cultural da Penha | Exercício de Composição | 2022.</figcaption>
            </figure>
          </div>
        </section>

        {/* Bloco Texto + Quote do Marcelo */}
        <section className={styles.leftAligned}>
          <p>
            <b>Essas ferramentas foram adaptadas com escuta ao contexto territorial e às vivências e corpos das pessoas participantes.</b>
          </p>

          <p>
            A escolha pelo uso de Viewpoints como coluna vertebral de todos os encontros ajudaram a criar um ambiente acessível, intuitivo e sensível, facilitando a integração das pessoas para que, nos exercícios de memória, se tornasse mais fácil e menos racional o compartilhamento de histórias.
          </p>

          <blockquote>
            <p>
              &quot;No território do Museu Autobiográfico, é proposto um lugar onde novos corpos, gestos e histórias podem se desenvolver a partir do chão em que estão. Ao mover o corpo em um espaço, move-se também os pensamentos criativos que se unem, criando um coletivo com maior senso de pertencimento e confiança em contar a própria história.&quot;
            </p>
            <footer><b>Marcelo, mediador da oficina</b></footer>
          </blockquote>
        </section>
      </main>

      <BackToHomeButton />
      <Footer />
    </div>
  );
}
