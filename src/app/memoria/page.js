"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import styles from "@/app/memoria/Memoria.module.css";
import Image from "next/image";
import BackToHomeButton from "@/app/components/BackToHomeButton";
import TopMenu from "@/app/components/TopMenu";

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
        <section className={styles.projectStartSection}>
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
            src="https://www.youtube.com/embed/nmLtOFudadU"
            title="Vídeo Beatriz - Centro Cultural da Penha | 2022"
            frameBorder="0"
            allowFullScreen
            className={styles.video}
            ></iframe>
            <figcaption className={styles.caption}>
            Beatriz contando sua história com máscara abaixo da boca.
            </figcaption>
        </figure>
        </section>

        {/* Bloco sobre memórias de 2022 */}
        <section className={styles.groupExerciseSection}>
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
        </section>

        {/* Bloco sobre memórias de 2024 - áudio */}
        <section className={styles.audioMemorySection}>
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
        </section>

        {/* Bloco sobre Gleice Arruda */}
        <section className={styles.participantTestimoniesSection}>
        {/* SVG de fundo para pontos e estrelas (dos dois lados) */}
        <div className={styles.bgParticipantTestimonies}>
            <svg
            className={styles.floatingElements}
            viewBox="0 0 5000 2600"
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
                Fecho os olhos, respiro, relaxo e me permito lembrar, reviver, viver e me expor. [...]
            </i>
            </p>
            {/* ...restante do depoimento... */}
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
            src="https://www.youtube.com/embed/BPxtGZ1SEDU"
            title="Gleice Arruda | Leitura de Texto criado a partir de entrevista com o pai"
            frameBorder="0"
            allowFullScreen
            className={styles.video}
            ></iframe>
            <figcaption className={styles.caption}>
            Gleice lê um texto criado a partir de entrevista com seu pai.
            </figcaption>
        </figure>
        </section>


        {/* Bloco depoimentos em vídeo de Ana Claudia, Francisco e Beatriz */}
        <section className={styles.escalatedTestimoniesSection}>
            <h2>Depoimentos Pós-Encontros no Centro Cultural da Penha | 2022</h2>

                <div className={`${styles.mediaBlock} ${styles.left}`}>
                    <p className={styles.caption}>Ana Claudia</p>
                    <iframe
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/ctfpTTpgD7g"
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
                    src="https://www.youtube.com/embed/UaqLFaHCkyc"
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
                    src="https://www.youtube.com/embed/YC13SR3Hq1g"
                    title="Depoimento Pós Encontro - Beatriz"
                    frameBorder="0"
                    allowFullScreen
                    className={styles.video}
                    ></iframe>
                </div>
        </section>

        {/* Bloco sobre Susana Raposo */}
        <section className={styles.susanaSection}>
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
                src="https://www.youtube.com/embed/hDNfJW5vIcw"
                title="Memória Sonora e Visual"
                frameBorder="0"
                allowFullScreen
                className={styles.video}
                ></iframe>
                <figcaption className={styles.caption}>
                Vídeo com registro do exercício inspirado na obra “Antes da Performance”, de Edgar Degas.
                </figcaption>
            </figure>
        </section>

        {/* Bloco A mediação começa em casa */}
        <section className={styles.tiaClaudeteSection}>
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
        </section>


        {/* Bloco A memória é o que nos torna o que somos */}
        <section className={styles.memoryReflectionSection}>
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
        </section>


        {/* Bloco com agradecimento - em construção */}
        <section className={styles.acknowledgementsSection}>
            <h2>Memória: todas as pessoas que participaram de algum modo para que a Oficina acontecesse</h2>

            <h4>_Agradecimentos_</h4>

            <p>
                _MEMÓRIA EM CONSTRUÇÃO_ 
            </p>

        </section>
      </main>

      <BackToHomeButton />

      <Footer />
    </div>
  );
}
