"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import styles from "@/app/memoria/Memoria.module.css";
import Image from "next/image";
import BackToHomeButton from "@/app/components/BackToHomeButton";
import TopMenu from "@/app/components/TopMenu";
import FadeInSection from "@/app/components/FadeInSection";

export default function MemoriaPage() {
  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <TopMenu />

      <main className={styles.mainContent}>
        {/* Bloco de abertura com a forma + texto */}
        <section className={styles.memoryIntroSection}>
            {/* SVG de fundo para pontos e estrelas */}
            <div className={styles.bgContainer}>
                <svg
                className={styles.floatingElements}
                viewBox="0 0 5000 800"
                xmlns="http://www.w3.org/2000/svg"
                >
                {/* Área segura - Lado Esquerdo (x entre 1950 e 2400) */}
                <circle cx="2111" cy="20" r="1" fill="black" />
                <circle cx="2298" cy="40" r="1.25" fill="black" />
                <circle cx="2000" cy="150" r="2" fill="black" />
                <circle cx="2100" cy="300" r="3" fill="black" />
                <circle cx="2250" cy="450" r="2.5" fill="black" />
                <circle cx="2300" cy="487" r="1" fill="black" />
                <image href="/images/star.png" x="2050" y="400" width="12" height="12" />
                <image href="/images/star.png" x="2350" y="200" width="9" height="9" />
                
                {/* Área segura - Lado Direito (x entre 3080 e 3400) */}
                <circle cx="3100" cy="20" r="1" fill="black" />
                <circle cx="3200" cy="50" r="1.5" fill="black" />
                <circle cx="3300" cy="200" r="1.25" fill="black" />
                <circle cx="3350" cy="75" r="2" fill="black" />
                <circle cx="3100" cy="150" r="2" fill="black" />
                <circle cx="3200" cy="300" r="3" fill="black" />
                <circle cx="3300" cy="450" r="2.5" fill="black" />
                <circle cx="2800" cy="500" r="2" fill="black" />
                <image href="/images/star.png" x="3150" y="400" width="12" height="12" />
                <image href="/images/star.png" x="3320" y="200" width="8" height="8" />
                </svg>
            </div>

            <div className={styles.introContent}>
            <svg
                className={styles.memoryShape}
                viewBox="800 200 400 300"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g>
                <polygon
                    points="935,250 1085,370 875,340"
                    fill="white"
                    stroke="black"
                    strokeWidth="1.5"
                />
                <circle cx="935" cy="250" r="5" fill="black" />
                <circle cx="1085" cy="370" r="6" fill="black" />
                <circle cx="875" cy="340" r="4" fill="black" />
                <text
                    x="965"
                    y="320"
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    fontSize="22"
                    fontFamily="Inter, sans-serif"
                    fill="black"
                >
                    memória
                </text>
                </g>
            </svg>

            <div className={styles.introText}>
                <blockquote>
                <p>
                    <i>
                    &quot;Por que alguém se <u>recorda vividamente</u> de alguns eventos e personagens
                    enquanto outros não? Como a mente é capaz de selecionar aquilo que se
                    sedimenta fundo na memória e aquilo que ela permite flutuar na superfície?&quot;
                    </i>
                </p>
                </blockquote>

                <p>
                <i>
                    <u>A <b>memória</b> é seletiva porque nosso cérebro prioriza</u> informações com base
                    na emoção, relevância pessoal e repetição. Eventos carregados de emoção
                    (positiva ou negativa) tendem a ser mais bem armazenados, pois ativam a
                    amígdala, região ligada ao processamento emocional.
                </i>
                </p>

                <p>
                <i>
                    Nas rodadas da oficina <b>Museu Autobiográfico e Território_Leste</b>,
                    momentos, pessoas, sensações, objetos e aprendizados me deram a
                    oportunidade de aprofundar conexões, criando memórias que, mesmo
                    individuais, se tornaram coletivas. Dentro desse sentido, essa
                    página traz <u>algumas memórias de exercícios coletivos, sensações minhas como
                    mediador, relatos de experiências de participantes e lembranças sonoras
                    e narrativas dos acontecimentos das oficinas</u>.
                </i>
                </p>
            </div>
            </div>
        </section>

        {/* Bloco sobre o ínicio do projeto */}
        <FadeInSection className={styles.projectStartSection}>
        {/* SVG de fundo para pontos e estrelas */}
        <div className={styles.bgProjectStart}>
            <svg
            className={styles.floatingElements}
            viewBox="0 0 5000 2000"
            xmlns="http://www.w3.org/2000/svg"
            >
            {/* Área segura – Lado Direito (x entre 3080 e 3400) */}
            <circle cx="3125" cy="200" r="1.2" fill="black" />
            <circle cx="3280" cy="360" r="1.4" fill="black" />
            <circle cx="3100" cy="700" r="1.8" fill="black" />
            <circle cx="3340" cy="1050" r="2" fill="black" />
            <circle cx="3180" cy="1350" r="1.6" fill="black" />
            <circle cx="3290" cy="1600" r="1.9" fill="black" />
            <circle cx="3360" cy="1850" r="1.3" fill="black" />
            <circle cx="3090" cy="1580" r="4" fill="black" />
            <circle cx="3020" cy="920" r="5" fill="black" />
            <image href="/images/star.png" x="3140" y="250" width="9" height="9" />
            <image href="/images/star.png" x="3310" y="650" width="11" height="11" />
            <image href="/images/star.png" x="3160" y="1400" width="10" height="10" />
            <image href="/images/star.png" x="3040" y="1800" width="8" height="8" />
            </svg>
        </div>

        <h2>Memórias do início do Projeto</h2>

        <p>
            <i>
            <u>Das memórias registradas mais bonitas</u>, encontrei recentemente a <b>Lista de Presença</b> das primeiras pessoas
            participantes de minha oficina.
            </i>
        </p>

        <p>
            <i>
            O primeiro encontro aconteceu em 07 de agosto de 2022, dia dos pais. O <u>Centro Cultural da Penha</u> se equivocou e anunciou o
            início para o dia 14 de agosto, mas, nas mídias estava como dia 07. Com isso, ganhei dois inícios dessa experiência tão significativa.
            </i>
        </p>

        <div className={styles.mediaBlock}>
            <Image
            src="/images/memoria/foto1_listadepresenca_v2.jpg"
            alt="Lista de Presença da primeira oficina do Museu Autobiográfico"
            width={800}
            height={500}
            className={styles.image}
            />
            <figcaption className={styles.caption}>
            Lista de Presença da primeira oficina do Museu Autobiográfico
            </figcaption>
        </div>

        <p>
            Por ser um período ainda de pandemia, participantes ainda utilizavam <b>máscaras</b> e, como <b>mediador</b>, as questões
            de saúde e distanciamento social ainda se apresentavam como partes que compunham os relacionamentos.
        </p>

        <figure className={styles.mediaBlock}>
            <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/6O5Y1X9FafM"
            title="Vídeo Beatriz - Centro Cultural da Penha | 2022"
            frameBorder="0"
            allowFullScreen
            className={styles.video}
            ></iframe>
            <figcaption className={styles.caption}>
            Beatriz contando sua história com máscara abaixo da boca.
            </figcaption>
        </figure>
        </FadeInSection>

        {/* Bloco sobre memórias de 2022 */}
        <FadeInSection className={styles.groupExerciseSection}>
        {/* SVG de fundo para pontos e estrelas (lado esquerdo) */}
        <div className={styles.bgGroupExercise}>
            <svg
            className={styles.floatingElements}
            viewBox="0 0 5000 2200"
            xmlns="http://www.w3.org/2000/svg"
            >
            {/* Área segura – Lado Esquerdo (x entre 1950 e 2400) */}
            <circle cx="1700" cy="150" r="1" fill="black" />
            <circle cx="1800" cy="350" r="5" fill="black" />
            <circle cx="1900" cy="600" r="2" fill="black" />
            <circle cx="1750" cy="800" r="1.2" fill="black" />
            <circle cx="2000" cy="1000" r="1.8" fill="black" />
            <circle cx="1850" cy="1200" r="2.2" fill="black" />
            <circle cx="1650" cy="1400" r="1.3" fill="black" />
            <circle cx="1950" cy="1600" r="4" fill="black" />
            <circle cx="2050" cy="1800" r="1.6" fill="black" />
            <circle cx="1780" cy="2000" r="2" fill="black" />
            <image href="/images/star.png" x="1720" y="250" width="10" height="10" />
            <image href="/images/star.png" x="1900" y="750" width="12" height="12" />
            <image href="/images/star.png" x="1680" y="1350" width="9" height="9" />
            <image href="/images/star.png" x="1850" y="1750" width="11" height="11" />
            <image href="/images/star.png" x="2000" y="2050" width="10" height="10" />
            </svg>
        </div>

        <h2>Memória de 2022</h2>

        <p>
            O exercício de grupo na primeira rodada da <b>Oficina no Centro Cultural da Penha (CCP):</b><br />
            <b>Se eu fosse você</b>
        </p>

        <p>
            <u>Como não há registros do exercício em si, encontrei fotos de exercícios de composição do grupo presente no dia da experiência.</u>
        </p>

        <div className={styles.mediaBlock}>
            <Image
            src="/images/memoria/foto2_encontros1.jpg"
            alt="Grupo em exercício coletivo - oficina 2022"
            width={800}
            height={500}
            className={styles.image}
            />
            <figcaption className={styles.caption}>
            Grupo em exercício coletivo - oficina 2022
            </figcaption>
        </div>

        <div className={styles.mediaBlock}>
            <Image
            src="/images/memoria/foto3_encontros2.jpg"
            alt="Exercício de improviso - oficina 2022"
            width={800}
            height={500}
            className={styles.image}
            />
            <figcaption className={styles.caption}>
            Exercício de improviso - oficina 2022
            </figcaption>
        </div>

        <div className={styles.textBox}>
            <p>
            Utilizando destes e de outros questionamentos, improvisei no primeiro encontro o jogo &quot;Se eu fosse você&quot;. 
            Inspirado no documentário <i>Jogo de Cena</i>, do diretor e documentarista Eduardo Coutinho (2007), a 
            experiência/proposta de jogo foi a seguinte: em roda, o primeiro participante se apresenta, contando:
            o que o fez chegar à oficina; qual o seu bairro; a sua idade; os seus desejos como artista e o que 
            mais julgar pertinente. Em seguida, o segundo participante se apresenta como quiser. Apresentados os 
            relatos dos dois primeiros participantes, eu proponho a troca de papéis.
            </p>

            <p>
            Esse exercício pretende pegar de surpresa participantes para testar a sua escuta, colocar a pessoa em situação 
            de um &quot;personagem real&quot;, desde o início, e ouvir a maneira como se reconta uma história já apresentada, 
            pretendendo ser a pessoa.
            </p>
        </div>
        </FadeInSection>

        {/* Bloco sobre memórias de 2024 - áudio */}
        <FadeInSection className={styles.audioMemorySection}>
        {/* SVG de fundo – lado direito */}
        <div className={styles.bgAudioMemory}>
            <svg
            className={styles.floatingElements}
            viewBox="0 0 5000 400"
            xmlns="http://www.w3.org/2000/svg"
            >
            {/* Área segura – Lado Direito (x entre 3080 e 3400) */}
            <circle cx="3100" cy="40" r="4" fill="black" />
            <circle cx="3200" cy="180" r="1.7" fill="black" />
            <circle cx="3350" cy="250" r="2.1" fill="black" />
            <circle cx="3150" cy="350" r="1.6" fill="black" />
            <circle cx="3300" cy="390" r="1.4" fill="black" />
            <circle cx="2950" cy="200" r="3" fill="black" />
            <circle cx="3000" cy="390" r="1" fill="black" />
            <circle cx="3300" cy="390" r="1.4" fill="black" />
            <image href="/images/star.png" x="3180" y="120" width="10" height="10" />
            <image href="/images/star.png" x="3300" y="260" width="12" height="12" />
            </svg>
        </div>

        <h2>Memória de 2024</h2>

        <p>
            Registro em Áudio da <u>1ª Mediação na 3ª rodada</u> da Oficina na Biblioteca Pública Cassiano Ricardo, no Tatuapé
        </p>

        <figure className={styles.mediaBlock}>
            <audio controls className={styles.audioPlayer}>
            <source src="/audio/audio_para_leticia.ogg" type="audio/ogg" />
            Seu navegador não suporta o elemento de áudio.
            </audio>
            <figcaption className={styles.caption}>
            Mediação registrada em áudio na Biblioteca Cassiano Ricardo em 2024.
            </figcaption>
        </figure>

        <blockquote className={styles.quoteBox}>
            <p>
            “Creio que minha memória individual está sempre conectada com o mundo, com o que se passa nele, com a história, com as canções”, como diz <b>Annie Ernaux</b>.
            </p>
        </blockquote>
        </FadeInSection>

        {/* Bloco sobre Gleice Arruda */}
        <FadeInSection className={styles.participantTestimoniesSection}>
        {/* SVG de fundo para pontos e estrelas (dos dois lados) */}
        <div className={styles.bgParticipantTestimonies}>
            <svg
            className={styles.floatingElements}
            viewBox="0 0 5000 3000"
            xmlns="http://www.w3.org/2000/svg"
            >
            {/* Área segura – Lado Esquerdo (x entre 1950 e 2400) */}
            <circle cx="1980" cy="300" r="1.2" fill="black" />
            <circle cx="2000" cy="600" r="1.8" fill="black" />
            <circle cx="2075" cy="1000" r="2.1" fill="black" />
            <circle cx="1960" cy="1600" r="1.3" fill="black" />
            <circle cx="2080" cy="2000" r="2.4" fill="black" />
            <image href="/images/star.png" x="1985" y="400" width="8" height="8" />
            <image href="/images/star.png" x="2070" y="1450" width="11" height="11" />
            <image href="/images/star.png" x="2005" y="2300" width="9" height="9" />
            <circle cx="1980" cy="2550" r="1.4" fill="black" />
            <circle cx="2020" cy="2670" r="2" fill="black" />
            <circle cx="1955" cy="2780" r="1.2" fill="black" />
            <circle cx="2100" cy="2890" r="1.8" fill="black" />
            <image href="/images/star.png" x="2000" y="2610" width="10" height="10" />
            <image href="/images/star.png" x="2080" y="2950" width="12" height="12" />

            {/* Área segura – Lado Direito (x entre 3080 e 3400) */}
            <circle cx="2970" cy="150" r="1.3" fill="black" />
            <circle cx="3050" cy="400" r="1.6" fill="black" />
            <circle cx="3150" cy="700" r="2.2" fill="black" />
            <circle cx="3250" cy="950" r="1.9" fill="black" />
            <circle cx="3330" cy="1200" r="1.4" fill="black" />
            <circle cx="2980" cy="1350" r="1.8" fill="black" />
            <circle cx="3100" cy="1550" r="2" fill="black" />
            <circle cx="3270" cy="1700" r="1.6" fill="black" />
            <circle cx="3000" cy="1900" r="2.3" fill="black" />
            <circle cx="3150" cy="2200" r="1.7" fill="black" />
            <circle cx="3300" cy="2450" r="1.5" fill="black" />
            <circle cx="2980" cy="2520" r="1.5" fill="black" />
            <circle cx="3100" cy="2640" r="2.3" fill="black" />
            <circle cx="3250" cy="2760" r="1.6" fill="black" />
            <circle cx="3350" cy="2880" r="2" fill="black" />
            <image href="/images/star.png" x="3150" y="2590" width="9" height="9" />
            <image href="/images/star.png" x="3300" y="2930" width="11" height="11" />
            <image href="/images/star.png" x="2960" y="250" width="10" height="10" />
            <image href="/images/star.png" x="3080" y="600" width="11" height="11" />
            <image href="/images/star.png" x="3220" y="1000" width="12" height="12" />
            <image href="/images/star.png" x="2990" y="1450" width="9" height="9" />
            <image href="/images/star.png" x="3310" y="1800" width="10" height="10" />
            <image href="/images/star.png" x="3050" y="2050" width="8" height="8" />
            <image href="/images/star.png" x="3180" y="2300" width="11" height="11" />
            </svg>
        </div>

        <h2>
            Algumas memórias das pessoas participantes sobre as oficinas: 2022 a 2024 
        </h2>

        <p>
            Para fixar essa memória coletiva, trago agora depoimentos de pessoas participantes da <u>Oficina no Centro Cultural da Penha em 2022</u>.
        </p>

        <p>
            O objetivo destes depoimentos encaminhados por participantes era de manter o trabalho da Oficina no mesmo lugar em 2023.
        </p>

        <p>Depoimento: <b><u>Gleice Arruda</u></b></p>

        <figure className={styles.mediaBlock}>
            <Image
            src="/images/memoria/foto4_gleiceesuacasa.jpg"
            alt="Gleice Arruda em sua casa"
            width={800}
            height={500}
            className={styles.image}
            />
            <figcaption className={styles.caption}>
            Gleice em frente à sua casa.
            </figcaption>
        </figure>

        <p>
            Moradora da <u>Penha</u>, atriz formada pelo SENAC São Miguel Paulista, poeta e, profissionalmente, atua com figuração em séries e filmes publicitários.
        </p>

        <blockquote className={styles.testimonialBox}>
            <p>
                <i>
                Fecho os olhos, respiro, relaxo e me permito lembrar, reviver, viver e me expor. Crio novas memórias a partir de tudo que já vivi e choro. Estou viva. Eu me sinto viva. Eu existo. Ali, onde uma pessoa se permite ser diante de tantas diferenças e individualidades, eu também me permito. Ali é mais fácil. Com você é mais fácil. Juntos a possibilidade é uma certeza.
                </i>
            </p>

            <p>
                <i>
                As memórias são vivas, presentes e sinceras. Parei de ignorá-las e evitá-las, esse medo se fez pequeno perto da vontade de criar novas memórias e registrar fisicamente e mentalmente aquilo que não volta mais, pelo menos não da mesma forma em que um dia ela existiu.
                </i>
            </p>

            <p>
                <i>
                Entre risos e choros, observo admirada e orgulhosa de fazer parte da memória de alguém que jamais sairá da minha. Olho ao meu redor e percebo o quanto foi importante tudo que vivi, com quem vivi e onde vivi. O lugar também faz parte de nós. Me reconheço entre tijolos e sorrio: isso também sou eu. Isso também é nós.
                </i>
            </p>

            <p>
                <i>
                Desconforto? Se faz quase inexistente quando compartilhamos histórias e criamos memórias com quem também é humano.
                </i>
            </p>

            <p>
                <i>
                Naquele espaço, o silêncio, o choro, o riso e o grito se fizeram tão presentes quanto nossos corpos. Mas, pra além de qualquer coisa, nos fizeram existir e estar, assim como deve ser.
                </i>
            </p>
        </blockquote>

        <h4>
            Uma memória minha sobre Gleice 
        </h4>

        <p>
            <i>A primeira leitura de texto desenvolvido a partir de entrevista com seu pai, que veio da região Nordeste do Brasil.</i>
        </p>

        <figure className={styles.mediaBlock}>
            <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/v-FisbusyPI"
            title="Gleice Arruda | Leitura de Texto criado a partir de entrevista com o pai"
            frameBorder="0"
            allowFullScreen
            className={styles.video}
            ></iframe>
            <figcaption className={styles.caption}>
            Gleice lê um texto criado a partir de entrevista com seu pai.
            </figcaption>
        </figure>
        </FadeInSection>


        {/* Bloco depoimentos em vídeo de Ana Claudia, Francisco e Beatriz */}
        <FadeInSection className={styles.escalatedTestimoniesSection}>
        {/* SVG de fundo com pontos e estrelas */}
        <div className={styles.bgEscalatedTestimonies}>
            <svg
            className={styles.floatingElements}
            viewBox="0 0 5000 1500"
            xmlns="http://www.w3.org/2000/svg"
            >
            {/* TOPO - lado direito */}
            <circle cx="2950" cy="100" r="1.4" fill="black" />
            <circle cx="3100" cy="250" r="1.2" fill="black" />
            <circle cx="3300" cy="180" r="2" fill="black" />
            <image href="/images/star.png" x="3280" y="100" width="10" height="10" />
            <image href="/images/star.png" x="2900" y="300" width="8" height="8" />
            <image href="/images/star.png" x="3280" y="500" width="10" height="10" />

            {/* MEIO - ambos os lados */}
            <circle cx="1980" cy="700" r="1.3" fill="black" />
            <circle cx="2020" cy="900" r="1.7" fill="black" />
            <image href="/images/star.png" x="2000" y="850" width="9" height="9" />

            <circle cx="3050" cy="720" r="2" fill="black" />
            <circle cx="3250" cy="800" r="1.6" fill="black" />
            <image href="/images/star.png" x="3100" y="950" width="12" height="12" />

            {/* BASE - lado esquerdo e direito */}
            <circle cx="1970" cy="1200" r="2.2" fill="black" />
            <circle cx="2100" cy="1300" r="1.6" fill="black" />
            <image href="/images/star.png" x="2150" y="1400" width="10" height="10" />

            <circle cx="3120" cy="1150" r="2.5" fill="black" />
            <circle cx="3200" cy="1250" r="1.4" fill="black" />
            <circle cx="3340" cy="1400" r="1.8" fill="black" />
            <image href="/images/star.png" x="3180" y="1380" width="9" height="9" />
            </svg>
        </div>

        <h2>Depoimentos Pós-Encontros no Centro Cultural da Penha | 2022</h2>

        <div className={`${styles.mediaBlock} ${styles.left}`}>
            <p className={styles.caption}>Ana Claudia</p>
            <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/yqx_tbHXe9M"
            title="Depoimento Pós Aula - Ana Claudia"
            frameBorder="0"
            allowFullScreen
            className={styles.video}
            ></iframe>
        </div>

        <div className={`${styles.mediaBlock} ${styles.center}`}>
            <p className={styles.caption}>Francisco</p>
            <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/9Vjjh-YDK10"
            title="Depoimento Pós Encontro - Francisco"
            frameBorder="0"
            allowFullScreen
            className={styles.video}
            ></iframe>
        </div>

        <div className={`${styles.mediaBlock} ${styles.right}`}>
            <p className={styles.caption}>Beatriz</p>
            <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/B2TmhBaayIg"
            title="Depoimento Pós Encontro - Beatriz"
            frameBorder="0"
            allowFullScreen
            className={styles.video}
            ></iframe>
        </div>
        </FadeInSection>

        {/* Bloco sobre Susana Raposo */}
        <FadeInSection className={styles.susanaSection}>
        {/* SVG de fundo para pontos e estrelas – esquerda e direita */}
        <div className={styles.bgSusana}>
            <svg
            className={styles.floatingElements}
            viewBox="0 0 5000 4100"
            xmlns="http://www.w3.org/2000/svg"
            >
            {/* LADO ESQUERDO – x entre 1950 e 2100 */}
            <circle cx="2000" cy="150" r="1.2" fill="black" />
            <circle cx="1980" cy="400" r="1.6" fill="black" />
            <circle cx="2100" cy="800" r="1.3" fill="black" />
            <circle cx="2050" cy="1150" r="2.4" fill="black" />
            <circle cx="1950" cy="1550" r="1.9" fill="black" />
            <circle cx="2000" cy="1950" r="2" fill="black" />
            <circle cx="2090" cy="2350" r="1.5" fill="black" />
            <circle cx="2020" cy="2750" r="2.1" fill="black" />
            <circle cx="1980" cy="3150" r="1.8" fill="black" />
            <circle cx="2070" cy="3550" r="2.2" fill="black" />
            <circle cx="2100" cy="3900" r="1.6" fill="black" />
            <image href="/images/star.png" x="2000" y="600" width="10" height="10" />
            <image href="/images/star.png" x="1960" y="1400" width="11" height="11" />
            <image href="/images/star.png" x="2050" y="2200" width="8" height="8" />
            <image href="/images/star.png" x="1970" y="3000" width="10" height="10" />
            <image href="/images/star.png" x="2000" y="3800" width="12" height="12" />

            {/* LADO DIREITO – x entre 2950 e 3350 */}
            <circle cx="3000" cy="100" r="1.4" fill="black" />
            <circle cx="3250" cy="300" r="2" fill="black" />
            <circle cx="3100" cy="700" r="1.7" fill="black" />
            <circle cx="3330" cy="1050" r="2.3" fill="black" />
            <circle cx="2980" cy="1450" r="1.6" fill="black" />
            <circle cx="3200" cy="1850" r="2.1" fill="black" />
            <circle cx="3070" cy="2250" r="1.5" fill="black" />
            <circle cx="3350" cy="2650" r="1.9" fill="black" />
            <circle cx="3150" cy="3050" r="2.4" fill="black" />
            <circle cx="3100" cy="3450" r="1.6" fill="black" />
            <circle cx="3300" cy="3850" r="2.3" fill="black" />
            <circle cx="2950" cy="200" r="1.5" fill="black" />
            <circle cx="3300" cy="600" r="2" fill="black" />
            <circle cx="3050" cy="900" r="1.7" fill="black" />
            <circle cx="3250" cy="1300" r="2.2" fill="black" />
            <circle cx="3150" cy="1700" r="1.8" fill="black" />
            <circle cx="3000" cy="2100" r="1.9" fill="black" />
            <circle cx="3290" cy="2450" r="2.3" fill="black" />
            <circle cx="3070" cy="2800" r="1.5" fill="black" />
            <circle cx="3320" cy="3200" r="2.1" fill="black" />
            <circle cx="3000" cy="3600" r="1.6" fill="black" />
            <circle cx="3350" cy="3900" r="2.5" fill="black" />
            <image href="/images/star.png" x="3080" y="500" width="10" height="10" />
            <image href="/images/star.png" x="2980" y="1600" width="9" height="9" />
            <image href="/images/star.png" x="3350" y="2500" width="10" height="10" />
            <image href="/images/star.png" x="3200" y="3350" width="11" height="11" />
            <image href="/images/star.png" x="3100" y="4000" width="8" height="8" />
            <image href="/images/star.png" x="3300" y="800" width="9" height="9" />
            <image href="/images/star.png" x="3000" y="1200" width="11" height="11" />
            <image href="/images/star.png" x="2950" y="2000" width="8" height="8" />
            <image href="/images/star.png" x="3190" y="2700" width="10" height="10" />
            <image href="/images/star.png" x="3100" y="3500" width="12" height="12" />
            <image href="/images/star.png" x="3250" y="4050" width="10" height="10" />
            </svg>
        </div>

        <h2>Depoimento de Susana Raposo</h2>

        <p>
            Escritora, poeta, mãe de gêmeas. Susana Raposo se entregava profundamente em cada proposta de improviso, cena e criação de texto. 
            Tinha problema em participar da roda final, pois não gostava da palavra <i>Merda</i>, que usávamos para encerrar cada encontro como um grito coletivo. 
            Considerava uma palavra que trazia memórias ruins. Posteriormente, nas outras rodadas na Biblioteca Cassiano Ricardo, começou a se integrar, 
            participando da roda final. Até hoje, Susana é uma das principais apoiadoras da continuidade da oficina.
        </p>

        <figure className={styles.mediaBlock}>
            <Image
            src="/images/memoria/foto5_depoimentosusana1.jpg"
            alt="Susana Raposo em improviso durante a oficina"
            width={800}
            height={500}
            className={styles.image}
            />
            <figcaption className={styles.caption}>
            Digitalização de escrita em papel, 2022 | Fonte: Acervo do autor
            </figcaption>
        </figure>

        <figure className={styles.mediaBlock}>
            <Image
            src="/images/memoria/foto6_depoimentosusana2.jpg"
            alt="Escrita de Susana digitalizada"
            width={800}
            height={500}
            className={styles.image}
            />
            <figcaption className={styles.caption}>
            Digitalização de escrita em papel, 2022 | Fonte: Acervo do autor
            </figcaption>
        </figure>

        <blockquote>
            <p>11/12/2022</p>
            <p>Oficina Museu Autobiográfico</p>
            <p>Profº Marcelo Maia</p>
            <p>
            Uma experiência incrível que veio para ficar. Descobri que o teatro me centra e me tira do universo do ego. 
            Todos somos um só. E sendo único mas conectados por um objetivo, sobreviver no caos. Eu adorei.
            </p>
            <p>
            Como laboratório de escrita, mas se tornou muito mais que isso. Avivou meu espírito, elevou minha alma. Obrigada!
            </p>
            <p>
            Não quero parar. Não desligue essa fonte.
            </p>
        </blockquote>

        <h4>Uma memória minha de Susana</h4>
        <p><i>Memória Sonora e Visual do exercício: improviso a partir da tela de Edgar Degas, intitulada Antes da Performance</i></p>

        <figure className={styles.mediaBlock}>
            <Image
            src="/images/memoria/foto7_antesdaperformance.jpg"
            alt="Obra 'Antes da Performance', de Edgar Degas"
            width={800}
            height={500}
            className={styles.image}
            />
            <figcaption className={styles.caption}>
            Antes da Performance, de Edgar Degas
            </figcaption>
        </figure>

        <p>
            Em um dos domingos de encontros, o grupo tinha que criar um improviso coletivo, tendo menos de três minutos de preparação. Para essa apresentação, uma aluna de dança do Centro Cultural da Penha se candidatou a participar como espectadora, somando a mim como plateia dessa cena teatral.
        </p>

        <p>
            No improviso, Susana tomou o protagonismo para criar a conexão entre o grupo de pessoas e, virando uma bailarina com ego inflado, mostrou sua irritação e soltou um grito, que ecoou em minha memória, e que me recordo até hoje como um momento de engrandecimento dela em cena.
        </p>

        <figure className={styles.mediaBlock}>
            <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/eVCXo4JCV8w"
            title="Memória Sonora e Visual"
            frameBorder="0"
            allowFullScreen
            className={styles.video}
            ></iframe>
            <figcaption className={styles.caption}>
            Vídeo com registro do exercício inspirado na obra “Antes da Performance”, de Edgar Degas.
            </figcaption>
        </figure>
        </FadeInSection>

        {/* Bloco A mediação começa em casa */}
        <FadeInSection className={styles.tiaClaudeteSection}>
        {/* SVG de fundo para pontos e estrelas – lado esquerdo */}
        <div className={styles.bgTiaClaudete}>
            <svg
            className={styles.floatingElements}
            viewBox="0 0 5000 1000"
            xmlns="http://www.w3.org/2000/svg"
            >
            {/* Área segura – Lado Esquerdo (x entre 1950 e 2400) */}
            <circle cx="2000" cy="120" r="1.2" fill="black" />
            <circle cx="2150" cy="200" r="1.8" fill="black" />
            <circle cx="1980" cy="300" r="2.1" fill="black" />
            <circle cx="2350" cy="400" r="1.6" fill="black" />
            <circle cx="1950" cy="580" r="2" fill="black" />
            <circle cx="2200" cy="750" r="1.4" fill="black" />
            <circle cx="2400" cy="880" r="2.2" fill="black" />

            <image href="/images/star.png" x="2100" y="250" width="10" height="10" />
            <image href="/images/star.png" x="1950" y="700" width="12" height="12" />
            <image href="/images/star.png" x="2250" y="920" width="9" height="9" />
            </svg>
        </div>

        <div className={styles.tiaClaudeteContent}>
            <h2>A mediação começa em casa</h2>

            <p>
            _EM CONSTRUÇÃO_ 
            </p>
            
            <p>
            MEMÓRIAS DE COMO COMECEI A MEDIAR EM CASA ME RELACIONANDO COM MINHA TIA CLAUDETE
            </p>

            <figure className={styles.mediaBlock}>
            <Image
                src="/images/memoria/foto8_tiaclaudete.jpg"
                alt="Tia Claudete no jardim de casa"
                width={800}
                height={500}
                className={styles.image}
            />
            <figcaption className={styles.caption}>
                Foto que fiz no jardim da casa da minha tia Claudete
            </figcaption>
            </figure>
        </div>
        </FadeInSection>

        {/* Bloco A memória é o que nos torna o que somos */}
        <FadeInSection className={styles.memoryReflectionSection}>
        {/* SVG de fundo – lados esquerdo e direito */}
        <div className={styles.bgMemoryReflection}>
            <svg
            className={styles.floatingElements}
            viewBox="0 0 5000 400"
            xmlns="http://www.w3.org/2000/svg"
            >
            {/* LADO ESQUERDO (x entre 1950 e 2400) */}
            <circle cx="2000" cy="100" r="1.3" fill="black" />
            <circle cx="2100" cy="220" r="2" fill="black" />
            <circle cx="2200" cy="350" r="1.7" fill="black" />
            <image href="/images/star.png" x="1950" y="150" width="11" height="11" />
            <image href="/images/star.png" x="2250" y="300" width="10" height="10" />

            {/* LADO DIREITO (x entre 3000 e 3400) */}
            <circle cx="3100" cy="80" r="1.6" fill="black" />
            <circle cx="3200" cy="200" r="2.2" fill="black" />
            <circle cx="3350" cy="320" r="1.4" fill="black" />
            <image href="/images/star.png" x="3050" y="100" width="9" height="9" />
            <image href="/images/star.png" x="3320" y="250" width="12" height="12" />
            </svg>
        </div>

        <div className={styles.memoryCluster}>
            <h2>A memória é o que nos torna quem somos</h2>
            <blockquote className={styles.quoteBox}>
            <p>
                &quot;As memórias do passado são o que nos fazem ser capazes de avaliar o presente como planejamos para viver o amanhã.
                A mais importante das nossas lembranças são, simplesmente, as lembranças de quem somos; de onde viemos; quem 
                são nossos pais e em qual região nascemos; quais são as histórias que nos contaram; a língua que nascemos 
                falando (...)&quot;, diz <b><u>Wa Thiong’o</u></b>
            </p>
            </blockquote>
            <p className={styles.author}></p>
        </div>
        </FadeInSection>

        {/* Bloco com agradecimento - em construção */}
        <FadeInSection className={styles.acknowledgementsSection}>
        {/* SVG de fundo para pontos e estrelas */}
        <div className={styles.bgAcknowledgements}>
            <svg
            className={styles.floatingElements}
            viewBox="0 0 5000 200"
            xmlns="http://www.w3.org/2000/svg"
            >
            {/* LADO ESQUERDO (x entre 1950 e 2400) */}
            <circle cx="2000" cy="100" r="1.3" fill="black" />
            <image href="/images/star.png" x="2150" y="140" width="10" height="10" />

            {/* LADO DIREITO (x entre 3000 e 3400) */}
            <circle cx="3050" cy="30" r="1.5" fill="black" />
            <circle cx="3100" cy="70" r="2.1" fill="black" />
            <circle cx="3200" cy="110" r="1.7" fill="black" />
            <circle cx="3300" cy="160" r="1.4" fill="black" />
            <image href="/images/star.png" x="3080" y="50" width="10" height="10" />
            <image href="/images/star.png" x="3350" y="130" width="11" height="11" />
            </svg>
        </div>

        <h2>
            Memória: todas as pessoas que participaram de algum modo para que a Oficina acontecesse
        </h2>

        <h4>_Agradecimentos_</h4>

        <p>_MEMÓRIA EM CONSTRUÇÃO_</p>
        </FadeInSection>
      </main>

      <BackToHomeButton />

      <Footer />
    </div>
  );
}
