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
                    &quot;Por que alguém se recorda vividamente de alguns eventos e personagens
                    enquanto outros não? Como a mente é capaz de selecionar aquilo que se
                    sedimenta fundo na memória e aquilo que ela permite flutuar na superfície?&quot;
                    </i>
                </p>
                </blockquote>

                <p>
                <i>
                    A <b>memória</b> é seletiva porque nosso cérebro prioriza informações com base
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
                    individuais, se tornaram coletivas. Dentro desse sentido, trago nessa
                    página algumas memórias de exercícios coletivos, sensações minhas como
                    mediador, relatos de experiências de participantes e lembranças sonoras
                    e narrativas dos acontecimentos das oficinas.
                </i>
                </p>
            </div>
            </div>
        </section>

        {/* Bloco sobre o ínicio do projeto */}
        <section className={styles.projectStartSection}>
            <h2>MEMÓRIAS DO INÍCIO DO PROJETO</h2>

            <p>
                <i>
                Das memórias registradas mais bonitas, encontrei recentemente a Lista de Presença das primeiras pessoas 
                participantes de minha oficina.
                </i>
            </p>

            <p>
                <i>
                O primeiro encontro aconteceu em 07 de agosto de 2022, dia dos pais. O Centro Cultural da Penha se equivocou e anunciou o 
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
            </div>

            <p>
                Por ser um período ainda de pandemia, participantes ainda utilizavam máscaras e, como mediador, as questões
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
            <p>
                <b>MEMÓRIA DE 2022</b>
            </p>

            <p>
                O exercício de grupo na primeira rodada da <b>Oficina no Centro Cultural da Penha</b> (CCP):<br />
                <b>Se eu fosse você</b>
            </p>

            <p>
                <b>Como não há registros do exercício em si, encontrei fotos de exercícios de composição do grupo presente no dia da experiência.</b>
            </p>

            <div className={styles.mediaBlock}>
                <Image
                src="/images/memoria/foto2_encontros1.jpg"
                alt="Grupo em exercício coletivo - oficina 2022"
                width={800}
                height={500}
                className={styles.image}
                />
            </div>

            <div className={styles.mediaBlock}>
                <Image
                src="/images/memoria/foto3_encontros2.jpg"
                alt="Exercício de improviso - oficina 2022"
                width={800}
                height={500}
                className={styles.image}
                />
            </div>

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
        </section>

        {/* Bloco sobre memórias de 2024 - áudio */}
        <section className={styles.audioMemorySection}>
            <p>
                <b>MEMÓRIA DE 2024</b> 
            </p>
                Registro em Áudio da 1ª Mediação na rodada 3 da Oficina na <b>Biblioteca Pública Cassiano Ricardo</b>
            <p>

            </p>

            <p>
                <b>&quot;<i>Creio que minha memória individual está sempre conectada com o mundo, com o que se passa nele, com a 
                história, com as canções&quot;</i>, como diz Annie Ernaux.</b>
            </p>

            <div className={styles.mediaBlock}>
                <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/q8MTtMUAzlw"
                title="Áudio, Artigo 2 | Mestrado em Artes da Cena (2024) - Oficina Museu Autobiográfico e Território Leste"
                frameBorder="0"
                allowFullScreen
                className={styles.video}
                ></iframe>
                <figcaption className={styles.caption}>
                Mediação registrada em áudio na Biblioteca Cassiano Ricardo em 2024.
                </figcaption>
            </div>
        </section>

        {/* Bloco sobre Gleice Arruda */}
        <section className={styles.participantTestimoniesSection}>
        <h3>
            | MEMÓRIA DAS PESSOAS PARTICIPANTES SOBRE AS OFICINAS | 2022 A 2024
        </h3>

        <p>
            <b>
            Para fixar essa memória coletiva, trago agora depoimentos de pessoas participantes da Oficina no Centro Cultural da Penha em 2022.
            </b>
        </p>

        <p>
            <b>
            O objetivo destes depoimentos encaminhados por participantes era de manter o trabalho da Oficina no mesmo lugar em 2023.
            </b>
        </p>

        <h4>Depoimento: Gleice Arruda</h4>

        <p>
            Moradora da Penha, atriz formada pelo SENAC São Miguel Paulista, poeta e, profissionalmente, atua com figuração em séries e filmes publicitários.
        </p>

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

        <p>
            <i>
            Uma memória minha sobre Gleice: a primeira leitura de texto desenvolvido a partir de entrevista com seu pai, que veio da região Nordeste do Brasil.
            </i>
        </p>
        </section>

        {/* Bloco depoimentos em vídeo de Ana Claudia, Francisco e Beatriz */}
        <section className={styles.escalatedTestimoniesSection}>
            <h4>Depoimentos Pós-Encontros no Centro Cultural da Penha | 2022</h4>

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
            <h4>DEPOIMENTO: SUSANA RAPOSO</h4>

            <p>
                Escritora, poeta, mãe de gêmeas. Susana Raposo se entregava profundamente em cada proposta de improviso, cena e criação de texto. 
                Tinha problema em participar da roda final, pois não gostava da palavra Merda, que usávamos para encerrar cada encontro como um grito coletivo. 
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
                Digitalização de escrita em papel, 2022 | Fonte: acervo do autor
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

            <div className={styles.personalMemoryBlock}>
                <p><b>UMA MEMÓRIA MINHA DE SUSANA</b></p>
                <p><b>Memória Sonora e Visual do exercício:</b></p>
                <p><b>Improviso a partir da tela de Edgar Degas, intitulada Antes da Performance</b></p>
            </div>

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

            <p><b>UMA LEMBRANÇA</b></p>
            <p>
                <b>
                No dia, o grupo tinha que criar um improviso coletivo, tendo menos de 3 minutos para se preparar. 
                Para essa apresentação, uma aluna de dança do Centro Cultural da Penha se candidatou a participar como espectadora, somando a mim como plateia dessa cena teatral.
                </b>
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
                <h3>A mediação começa em casa</h3>

                <p>
                _EM CONSTRUÇÃO_ MEMÓRIAS DE COMO COMECEI A MEDIAR EM CASA ME RELACIONANDO COM MINHA TIA CLAUDETE
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
                <div className={styles.starTopLeft}></div>
                <div className={styles.starTopRight}></div>
                <div className={styles.starBottomLeft}></div>
                <div className={styles.starBottomRight}></div>

                <h4>A memória é o que nos torna quem somos</h4>

                <blockquote>
                <p>
                    <i>
                    As memórias do passado são o que nos fazem ser capazes de avaliar o presente como planejamos para viver o amanhã.
                    A mais importante das nossas lembranças são, simplesmente, as lembranças de quem somos; de onde viemos; quem 
                    são nossos pais e em qual região nascemos; quais são as histórias que nos contaram; a língua que nascemos 
                    falando (...)
                    </i>
                </p>
                </blockquote>

                <p className={styles.author}>Wa Thiong&apos;o</p>
            </div>
        </section>


        {/* Bloco com agradecimento - em construção */}
        <section className={styles.acknowledgementsSection}>
            <h4>_agradecimentos_</h4>
                <p>
                    <i>_EM CONSTRUÇÃO_ ideia de colocar o nome de todas as pessoas participantes e envolvidas no projeto.</i>
                </p>
            </section>
      </main>

      <BackToHomeButton />

      <Footer />
    </div>
  );
}
