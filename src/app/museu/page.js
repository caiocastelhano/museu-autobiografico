"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BackToHomeButton from "@/app/components/BackToHomeButton";
import TopMenu from "@/app/components/TopMenu";
import styles from "@/app/museu/Museu.module.css";
import Image from "next/image";
import FadeInSection from "@/app/components/FadeInSection";

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
            <svg
              className={styles.svgShapeIntro}
              viewBox="0 0 300 250"
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
              </blockquote>

              <p>
                Ermelino Matarazzo, periferia da Zona Leste de São Paulo.
              </p>
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

        {/* Bloco Um disparador da existência da oficina */}
        <FadeInSection className={styles.projectTextSection}>
          <h2>
            Um disparador da existência da Oficina: O edital de oficineiros da Prefeitura de São Paulo
          </h2>

          <p>
            No dia 20 de novembro de 2020 a oficina tomou forma a partir de participação no <b>Edital de Oficineiros</b>. 
            Um projeto da Prefeitura de São Paulo <b>que credencia pessoas interessadas a ministrar oficinas em equipamentos 
            públicos da cidade</b>.
          </p>

          <p>
            Para a <b>Habilitação do Projeto</b>, os objetivos tiveram que ser muito bem pensados para corresponder aos 
            critérios do Edital e, entre os tópicos apresentados, destaca-se o seguinte:
          </p>

          <blockquote>
            <p>
              <u><i>
                Discutir a importância do museu dentro de nossa cultura, questionando o que nos afasta de equipamentos 
                culturais muitas vezes elitizados. Possibilitar a ressignificação e pertencimentos aos espaços museais
              </i></u>.
            </p>
          </blockquote>

          <p>
            Ainda como parte da inscrição no Edital, a justificativa feita em primeira pessoa, reforça o DNA do projeto, 
            trazendo o universo que culmina em seu nome:
          </p>

          <blockquote>
            <p>
              <i>
                Trabalhando com mediações dentro do <u>Museu</u> da Imagem e do Som Experience, notei que a experiência em teatro 
                foi um ponto chave para aprofundar vivências em um <u>espaço culturalmente percebido como elitizado</u>. 
                No percurso dos meses, compreendi que ferramentas e dispositivos teatrais performativos e os exercícios 
                autobiográficos eram muito bem recebidos durante os encontros com escolas, grupos de centros de 
                acolhimento, grupos de pessoas acima de 60 anos e grupos de pessoas com deficiência. Sendo assim, 
                <u>realizar a oficina dentro de um equipamento cultural</u> será importante para proporcionar experiências 
                afetivas individuais e coletivas com o território em que vivem, compartilhando experiências com outras 
                pessoas que habitam o mesmo espaço
              </i>.
            </p>
          </blockquote>
        </FadeInSection>

        {/* Bloco O que é um museu? */}
        <FadeInSection className={styles.projectTextSection}>
          <h2>Mas o que é um Museu?</h2>

          <p>
            Para fixar o que a oficina propõe ao criar um Museu de Si/Nós, compartilho abaixo excertos de aprendizados 
            do Curso da Escola Fundação Itaú: <b>Experiências educativas em Museus Comunitários. Na aula: Museu de nós - 
            nova museologia e museologia social no Brasil</b>.
          </p>

          <blockquote>
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
            <b>Do reconhecimento de que quanto mais diversidade, menor o risco de as memórias serem hierarquizadas e 
            tratadas como inferiores e insignificantes para os rumos da história, <u>emerge uma nova museologia</u>.</b>
          </p>

          <p>
            No contexto de <b>uma nova museologia</b>, nasce a <b>museologia social</b>, materializada nos museus sociais, 
            comunitários ou de favelas e nos ecomuseus, entre outros. <b><u>O que eles têm em comum é uma ação educativa 
            que coloca indivíduos de áreas rurais, periféricas e à margem como sujeitos que interagem com as 
            coleções, os espaços e as palavras ditas e silenciadas</u></b>.
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

          <blockquote aria-label="Citação de autora">
            <p>
              &quot;A gente pensa muito na palavra mediação em relação com um público, né, então ela, quase que 
              obrigatoriamente, está sempre muito colada a uma noção institucional. Pela minha experiência, 
              <b>também de uma pessoa que nasceu e cresceu numa cidade como São Paulo, que é conhecida também como 
              uma capital cultural, que concentra um número enorme de instituições</b>, o quanto que a maioria destas 
              instituições estão <u>centralizadas numa parte da cidade e o quanto estão distantes de um público que 
              realmente precisa dessas instituições</u>. 
            </p>
            <p>
              Em outros países você encontra museus em lugares que são periferia, assim, que tem um grande museu num 
              lugar como <b>Arthur Alvim, na zona leste de São Paulo. Então eu acho que falta esse pensamento 
              como prática do que a gente tem chamado de descolonizar. Descolonizar o saber, as práticas, 
              mas acho que, efetivar a descolonização da prática é entender que esses territórios também 
              são merecedores desse tipo de empreendimento, de investimento</b>.&quot;
            </p>
            <footer>
              <b>— Renata Felinto</b>
            </footer>
          </blockquote>

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
            <Image src="/images/museu/foto1.JPG" alt="Aula aberta no Centro Cultural da Penha, 2022" width={500} height={300} className={styles.image} />
            <Image src="/images/museu/foto2.JPG" alt="Aula aberta no Centro Cultural da Penha, 2022" width={500} height={300} className={styles.image} />
            <Image src="/images/museu/foto3.JPG" alt="Aula aberta no Centro Cultural da Penha, 2022" width={500} height={300} className={styles.image} />
            <Image src="/images/museu/foto4.JPG" alt="Aula aberta no Centro Cultural da Penha, 2022" width={500} height={300} className={styles.image} />
            <Image src="/images/museu/foto5.JPG" alt="Aula aberta no Centro Cultural da Penha, 2022" width={500} height={300} className={styles.image} />
            <Image src="/images/museu/foto6.JPG" alt="Aula aberta no Centro Cultural da Penha, 2022" width={500} height={300} className={styles.image} />
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

          <p>Com a proposta de exercícios em diversas linguagens (texto, cena, fotografia, performance) o <b><u>museu autobiográfico</u></b> propõe que participantes reúnam e apresentem seus objetos e memórias, fazendo com que o museu ganhe um caráter de aproximação e familiaridade, conectando histórias de participantes e de <b><u>seus grupos, comunidades, bairros e cidades</u></b>.</p>

          <p><b><u>Abaixo, confira a proposta do exercício do exercício Uma noite no Museu, adaptado a partir do trabalho e pesquisa de Viola Spolin</u></b>:</p>

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
            ></iframe>
            <figcaption id="video2-caption">Encontro no Centro Cultural da Penha, 2022</figcaption>
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
            ></iframe>
            <figcaption id="video3-caption">Encontro no Centro Cultural da Penha, 2022</figcaption>
          </figure>

          <p>Por fim, alguns exercícios de composição que podem ser conhecidos em mais detalhes na página {" "}
          <a href="/memoria" target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>Memória</a>.</p>

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
            <footer><b>— Manifesto - Museu Nacional - todas as vozes do fogo | excerto de peça teatral desenvolvida pela Barca dos Corações Partidos</b></footer>
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
            ></iframe>
            <figcaption id="video6-caption">Aquecimento em Roda no Centro Cultural da Penha, 2022</figcaption>
          </figure>

          <p>
            <u>
              Para você que está aqui conhecendo o Museu Autobiográfico, desejamos saber mais de sua história. Acesse a página {" "}
              <a
                href="/contato"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.inlineLink}
              >
                Contato
              </a>{" "}
              e acrescente seus objetos e memórias de sua vida.
            </u>
          </p>

          <p><b>_Em breve: faremos uma galeria digital de objetos pessoais__</b></p>
        </FadeInSection>

      </main>
      <BackToHomeButton />
      <Footer />
    </div>
  );
}


