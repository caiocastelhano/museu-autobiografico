"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BackToHomeButton from "@/app/components/BackToHomeButton";
import TopMenu from "@/app/components/TopMenu";
import styles from "@/app/sobre/Sobre.module.css";
import Accordion from "@/app/components/Accordion";
import Image from "next/image";

export default function SobrePage() {
  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <TopMenu />

      <main className={styles.mainContent}>
        <h1 id="sobreTitulo" className={styles.visuallyHidden}>Página Sobre</h1>

        <section className={styles.aboutIntroSection} aria-labelledby="sobreTitulo">
          <p>
            <b>O Museu Autobiográfico e Território_Leste</b> é um espaço de criação, escuta e partilha. Um lugar onde memórias viram 
            matéria cênica e onde o corpo é arquivo vivo de histórias.
          </p>

          <p>
            Surgido como <b>oficina teatral</b>, o projeto propõe uma prática de mediação afetiva entre pessoas e seus territórios, 
            ativando experiências singulares que, ao serem compartilhadas, tornam-se coletivas.
          </p>

          <p>
            Hoje, <b>expandido para o ambiente digital</b>, o Museu não apenas guarda suas histórias — ele as compartilha. <u>A 
            experiência online amplia o gesto da oficina: constrói-se no encontro entre trajetórias individuais, em 
            diálogo com o que é íntimo e coletivo</u>. Um espaço onde novos visitantes também são convidados a criar vínculos 
            com o que veem, ouvem e sentem.
          </p>
        </section>

        <h2 id="accordionSectionTitle" className={styles.visuallyHidden}>
            Perguntas frequentes sobre o Museu Autobiográfico
        </h2>

        <section className={styles.accordionSection} aria-labelledby="accordionSectionTitle">

          <Accordion title="Da oficina presencial à experiência digital">
            <p>
              Como produto final da pesquisa de mestrado profissional em Artes da Cena do idealizador<b>_Marcelo Rodrigues Maia</b>, <b>o site se organiza poeticamente como uma constelação</b>: <u>palavras, imagens, sons, textos, vídeos, depoimentos e registros de vivências se entrelaçam, expandindo o sentido do que pode ser uma experiência museal</u>.
            </p>
            <p>
              Cada <b>componente que intitula a oficina atua como um ponto de luz</b>. Ao se articular com outros temas, forma um mapa sensível da experiência nos espaços. <u>Em vez de um arquivo linear, o site propõe uma confabulação de sentidos: os registros não se acumulam — eles se relacionam, se afetam, se transformam mutuamente</u>.
            </p>
            <p>
              O <b>Museu Autobiográfico e Território_Leste</b> digital é também um gesto de abertura: um convite a habitar a pesquisa como território compartilhado, apontando um novo leste — não apenas como ponto cardeal, mas como direção simbólica, que aponta para outras margens e novos <b>centros possíveis</b>.
            </p>
          </Accordion>

          <Accordion title="Qual a proposta do Museu Autobiográfico como oficina?">
            <p>
              O Museu é uma proposta viva de musealização da experiência humana. Um <b>dispositivo cênico que, por meio do teatro autobiográfico</b>, transforma memórias e devaneios em presença e gesto.
            </p>
            <p>
              <u>A cada edição, as pessoas participantes são convidadas a explorar suas próprias lembranças por meio de exercícios, improvisos, composições e escrita criativa</u>. A cena nasce do afeto, do conflito, do amor, do pertencimento — e de tudo aquilo que atravessa o corpo quando se conta a própria história.
            </p>
          </Accordion>

          <Accordion title="Por que ele tem este nome?">
            <p>
              O nome nasce da união entre o desejo de escavar a própria história e a necessidade de reconhecer o território como parte dessa narrativa.
            </p>
            <p>
              <b>__Museu Autobiográfico</b>, porque são os corpos que guardam os objetos — não os físicos, mas de carne, tempo e palavra.
            </p>
            <p>
              <b>__Território Leste</b>, porque é dali que falamos, escutamos e caminhamos — a partir das margens simbólicas, em direção a novos centros possíveis.
            </p>
          </Accordion>

          <Accordion title="O que significa ser um museu feito de histórias, corpos e territórios?">
            <p>
              É acreditar que cada pessoa carrega um <b>acervo precioso, ainda que invisível aos olhos</b>. Que nossos passos deixam rastros que merecem ser contados. Que os espaços que habitamos — nossas casas, as ruas, as bibliotecas, os centros culturais — são também dispositivos de memória.
            </p>
            <p>
              Ser um museu assim é estar em movimento constante: criar presença no ato de contar — e recontar — a própria história.
            </p>
          </Accordion>

          <Accordion title="Origem e Histórico da Oficina">
            <p>
              O projeto teve sua primeira versão em 2019, como trabalho final do curso de Educador Social no SENAC Aclimação. Intitulada <i>Museu Biográfico e Pertencimento à Cidade</i>, a oficina aconteceu na Casa Florescer II, espaço de acolhimento para mulheres trans, travestis e pessoas não binárias. Entre conversas, jogos teatrais e partilhas íntimas, nasceu ali a ideia do que viria a se tornar o <b>Museu Autobiográfico</b>: uma oficina sobre pertencimento, memória e a potência criativa a partir de si..
            </p>
            <p>
              Essa primeira edição contou com a parceria do <b>Professor Doutor Fabio Ortolano, também colega de turma no SENAC</b>. Desde então, o projeto vem sendo atravessado por uma inquietação constante com os limites da representação e por um desejo de ativar potências reais no encontro com o outro.
            </p>
            <p>
              A oficina também se nutre de experiências de mediação cultural no <b>Museu da Imagem e do Som – MIS Experience</b>. Foi nesse contexto, durante o período da pandemia de Covid-19, que escuta e afeto passaram a se consolidar como práticas pedagógicas e estéticas em propostas imersivas e mediações digitais..
            </p>
            <p>
              Em 2020, o projeto ganhou corpo ao ser estruturado dentro dos critérios do <b>Edital de Oficineiros da Prefeitura de São Paulo</b>. Após ser habilitada, a oficina teve como primeira residência oficial o <b>Centro Cultural da Penha</b>, dentro dos critérios de oficina de média duração (4 meses).
            </p>
            <p>
              Com o início da pesquisa de mestrado, a oficina seguiu de forma independente e voluntária, sendo realizada entre 2023 e 2024 na <b>Biblioteca Pública Cassiano Ricardo</b>, no Tatuapé, zona leste de São Paulo.
            </p>
            <p>
              Mais recentemente, o projeto cruzou fronteiras geográficas e chegou a Curitiba, compondo a programação oficial do <b>Festival de Curitiba 2025</b>. Nesta edição, a oficina foi realizada na <b>Casa Eliseu Voronkoff</b>, espaço idealizado e gerido pela colega de mestrado em Artes da Cena, <b>Ana Paula Frazão</b>.
            </p>
          </Accordion>

          <Accordion title="Desenvolvimento do Projeto: da escrita de si à escrita-luta coletiva">
            <p>
              Desde sua primeira edição, o <b>Museu Autobiográfico e Território_Leste</b> cresceu em profundidade e abrangência. Com <b>metodologias baseadas em técnicas de Viewpoints e Composição, jogos teatrais, improvisação e ações performativas, a oficina constroi uma pedagogia do afeto e da presença</b>. Mesmo fora do escopo do Edital de Oficineiros, ela segue viva — realizada quase sempre de forma voluntária —, reafirmando a potência do encontro e as brechas que se abrem na política pública para a criação de territórios afetivos.
            </p>
            <p>
              Essa continuidade, apesar dos limites, não nasce apenas da insistência em manter o projeto ativo. <b>Ela também surge de um desejo mais íntimo e urgente: transformar o exercício da escrita de si em uma escrita-luta coletiva</b>. <u>A partir do momento em que assumi minha autobiografia como parte da própria metodologia da oficina, compreendi que a partilha de experiências pessoais — sejam elas lembranças, dores ou alegrias — pode se tornar ferramenta de mobilização e pertencimento</u>.
            </p>
            <p>
              O que aqui se apresenta como resultado de uma pesquisa é também um modo de dizer: <b>estamos aqui</b>. Continuamos criando, mediando, improvisando, mesmo diante da precarização dos trabalhos culturais e da invisibilidade que ainda recai sobre oficineiras e oficineiros. Frente ao desânimo pela desvalorização da profissão, me resta continuar — e afirmar a potência do que realizo.
            </p>
            <p>
              A oficina, assim como esta escrita, é uma tentativa de convocar outras pessoas que, como eu, enfrentam contradições e afetos fortes no exercício da mediação cultural. Que a intimidade compartilhada, nos jogos e nos textos, possa se tornar um gesto coletivo de escuta e afirmação. Que o museu feito de corpos, memórias e territórios também seja um espaço de resistência poética e pedagógica.
            </p>
          </Accordion>

          <Accordion title="Sinopse Oficial">
            <p>
              A oficina busca, por meio do teatro, estabelecer contato coletivo e fortalecer as individualidades dentro de territórios carregados de memória.
            </p>
            <p>
              Com jogos de iniciação teatral, improvisos e exercícios performativos, <b>pessoas de diferentes idades e vivências são convidadas a experimentar o que chamamos de teatro documental/autobiográfico</b>. Durante os encontros, vivenciam práticas de escuta, escrita e criação teatral a partir de suas próprias memórias.
            </p>
            <p>
              A oficina se organiza como um percurso sensível, onde o que é íntimo pode ganhar voz, forma e partilha. As atividades envolvem <b>jogos cênicos, criação de cenas, dinâmicas coletivas e apresentações abertas</b>. Ao longo dos encontros, também são realizadas rodas de conversa sobre a aproximação do indivíduo com o teatro, com o coletivo e com o espaço museal — muitas vezes percebido como distante ou inacessível para pessoas das periferias.
            </p>
            <p>
              Não é necessário ter experiência prévia com teatro — basta o desejo de estar junto.
            </p>
            <p>
              A oficina é aberta para pessoas <b>a partir dos 14 anos de idade</b> e propõe uma especial atenção a públicos de regiões afastadas do centro e não iniciados nas artes cênicas.
            </p>
          </Accordion>

          <Accordion title="Objetivos e Impactos">
            <p>
              O <b>Museu Autobiográfico e Território Leste</b> busca:
            </p>
            <ul>
              <li>Reconhecer as histórias individuais como patrimônio simbólico;</li>
              <li>Promover vínculos entre arte, território e memória;</li>
              <li>Estimular o pensamento crítico, a escuta e o pertencimento;</li>
              <li>Valorizar saberes não-hegemônicos e trajetórias plurais.</li>
            </ul>
            <p>
              Os impactos são sentidos em relatos poéticos, na criação de vínculos duradouros e na construção de uma cena onde cada corpo se torna documento vivo e que fica registrado como parte do museu..
            </p>
          </Accordion>

          <Accordion title="Referências Conceituais e Pedagógicas">
            <p>
              A oficina se posiciona como uma <b>constelação de práticas</b> de criadores e pensadores como:
            </p>
            <ul>
              <li><b>Anne Bogart e Tina Landau</b>, com a técnica de Viewpoints e Composição, que propõe uma escuta corporal do tempo e do espaço em cena.</li>
              <li><b>Augusto Boal</b>, com o Teatro do Oprimido e o princípio da cena como ação transformadora.</li>
              <li><b>Cia Hiato</b>, no modo como atravessa fronteiras entre ficção e realidade.</li>
              <li><b>Eduardo Coutinho</b>, com sua ética da escuta radical e a valorização da palavra como construção coletiva de sentido, propondo um cinema de encontro onde o “real” se faz no espaço entre quem pergunta e quem responde, rompendo com hierarquias entre quem filma e quem é filmado.</li>
              <li><b>Janaína Leite</b>, em suas investigações do teatro autobiográfico.</li>
              <li><b>Jorge Larrosa Bondía</b>, com a ideia de experiência como algo que nos transforma, e da educação como espaço de escuta, pausa e acontecimento.</li>
              <li><b>Luaa Gabanini</b>, com sua pesquisa de corpo-gerúndio e Geografias Corpóreas, em que o corpo é território de experiência para insurgir paisagens.</li>
              <li><b>Marcelo Lazzaratto</b>, com o Campo de Visão, técnica que potencializa a atenção, a escuta e a disponibilidade do corpo no presente.</li>
              <li><b>Milton Santos</b>, com sua leitura crítica do território como espaço vivido, construído por relações sociais e afetivas, e não apenas como dado geográfico.</li>
              <li><b>Ngũgĩ wa Thiong’o</b>, com sua defesa da descolonização da linguagem e da imaginação, propondo a valorização das línguas maternas e das narrativas locais como formas de resistência e reconstrução cultural.</li>
              <li><b>Nise da Silveira</b>, com sua teoria dos afetos e o reconhecimento da expressão simbólica como forma de cura e reinvenção.</li>
              <li><b>Paulo Freire</b>, com a pedagogia do diálogo, da escuta ativa e do saber construído a partir das vivências e territórios dos sujeitos.</li>
              <li><b>Renata Felinto</b>, ao afirmar o corpo negro como potência estética, política e epistêmica, tensionando a colonialidade das artes e propondo práticas curatoriais e pedagógicas antirracistas.</li>
              <li><b>Sigmund Freud</b>, ao introduzir a escuta do inconsciente, a memória e a palavra como caminhos para acessar a subjetividade.</li>
              <li><b>Viola Spolin</b>, com seus jogos teatrais.</li>
              <li><b>A noção de museologia social</b>, museus orgânicos e descolonização cultural, propondo uma curadoria feita pelo afeto e pelas margens.</li>
              <li><b>A ideia de teatro documental e memória afetiva</b> como eixos de cena e de escuta.</li>
            </ul>
            <p>
              <u>Ao constelar ideias diversas para formar os encontros, criam-se novos sentidos para as práticas, novos improvisos e uma nova força coletiva, agora compartilhada no site</u>.
            </p>
          </Accordion>

          <Accordion title="Quem idealizou o Museu">
            <Image
              src="/images/sobre/foto_marcelo.jpeg"
              alt="Foto de Marcelo Rodrigues Maia"
              width={600}
              height={400}
              style={{ marginBottom: "20px" }}
            />
            <p>
              Marcelo Rodrigues Maia é ator-mediador, oficineiro, comunicador e pesquisador. Nascido e criado em Ermelino Matarazzo, periferia da Zona Leste de São Paulo, é filho de mãe solo, professora.
            </p>
            <p>
              Formado como Ator pelo Teatro-Escola Célia Helena, Comunicador pela Faculdade Cásper Líbero e Educador Social pelo SENAC Aclimação, acredita que a junção entre habilidades distintas <b>impulsionam a capacidade</b> de engajar diversos públicos com ferramentas diferentes. Sempre de maneira <b>leve, lúdica, com empatia</b>.
            </p>
            <p>
              Em 2023, ingressou no <b>Mestrado Profissional em Artes da Cena – Turma Especial: Laboratório em Artes e Mediação Cultural</b>, uma parceria entre a Fundação Itaú Escola e a Escola Superior de Artes Célia Helena (ESCH). Sua pesquisa no mestrado parte de uma escrita de si para investigar como experiências autobiográficas podem se transformar em espaços de escuta, partilha e criação coletiva — especialmente por meio da oficina Museu Autobiográfico e Território Leste.
            </p>
            <p>
              Possui curso de extensão em interpretação para a câmera pela Escola de Atores Wolf Maya e integrou a 15ª turma do Núcleo Experimental de Artes Cênicas do SESI-SP, além de atuar no NAC – Núcleo de Artes Cênicas. Como ator, participou de diversas montagens, com destaque para a peça <i>Tiros em Osasco</i>, dirigida por Yara de Novaes (SESI-SP, 2016/2017), e para o elenco principal da série <i>Brilhante Futebol Clube</i>, exibida na TV Brasil e Nickelodeon (2013). Foi também assistente de Lígia Cortez na disciplina de Direção de Atores no curso de Audiovisual da USP.
            </p>
            <p>
              Na área da educação e mediação cultural, realizou oficinas de teatro da memória na Casa Florescer II e, entre 2019 e 2021, atuou como educador de teatro no MIS Experience – Exposição <i>Leonardo da Vinci</i>, desenvolvendo oficinas e mediações presenciais e on-line para escolas de todo o Brasil. Em 2022, por meio do Edital de Oficineiros da Prefeitura de São Paulo, realizou no Centro Cultural da Penha a oficina teatral Museu Autobiográfico. Entre 2023 e 2024, mediou mais duas oficinas na Biblioteca Pública Cassiano Ricardo no Tatuapé, também em São Paulo. Em 2025, o projeto fez parte da programação oficial do Festival de Curitiba, estando presente na Casa Eliseu Voronkoff, no Paraná.
            </p>
            <p>
              <b>Confira o currículo acadêmico de Marcelo</b>: _EM CONSTRUÇÃO_
            </p>
          </Accordion>
        </section>

        <section className={styles.officeOneSection} aria-labelledby="officeOneTitle">
          <h2 id="officeOneTitle" className={styles.visuallyHidden}>
            Registros visuais da oficina 1
          </h2>

          <figure className={styles.officeOneFigure}>
            <div className={styles.officeOnePhotos}>
              <Image
                src="/images/sobre/foto1.JPG"
                alt="Participantes da oficina em roda de conversa"
                width={600}
                height={400}
                className={styles.officeOnePhoto}
              />
              <Image
                src="/images/sobre/foto2.png"
                alt="Expressão corporal durante improviso teatral"
                width={600}
                height={400}
                className={styles.officeOnePhoto}
              />
            </div>

            <figcaption className={styles.officeOneCaption}>
              Centro Cultural da Penha, 2022.
            </figcaption> 
          </figure>
        </section>

        <section className={styles.officeTwoSection} aria-labelledby="officeTwoTitle">
          <h2 id="officeTwoTitle" className={styles.visuallyHidden}>
            Registro visual da oficina 2
          </h2>

          <figure className={styles.officeTwoFigure}>
              <Image
                src="/images/sobre/foto3.jpg"
                alt="Participantes da oficina"
                width={600}
                height={400}
                className={styles.officeTwoPhoto}
              />

            <figcaption className={styles.officeTwoCaption}>
              Biblioteca Pública Cassiano Ricardo, 2023.
            </figcaption> 
          </figure>
        </section>

        <section className={styles.officeThreeSection} aria-labelledby="officeThreeTitle">
          <h2 id="officeThreeTitle" className={styles.visuallyHidden}>
            Registro em vídeo da oficina 3
          </h2>

          <figure className={styles.phoneMockup}>
            <div className={styles.videoContainer}>
              <iframe
                src="https://www.youtube.com/embed/T5E46NPDf7s"
                title="Vídeo da oficina 3 - Museu Autobiográfico"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <figcaption className={styles.officeThreeCaption}>
              Biblioteca Pública Cassiano Ricardo, 2024.
            </figcaption>
          </figure>
        </section>

        <section className={styles.officeFourSection} aria-labelledby="officeFourTitle">
          <h2 id="officeFourTitle" className={styles.visuallyHidden}>
            Registros visuais da oficina 4
          </h2>

          <figure className={styles.officeFourFigure}>
            <div className={styles.officeFourPhotos}>
              <Image
                src="/images/sobre/foto4.jpg"
                alt="Participantes da oficina em roda de conversa"
                width={600}
                height={400}
                className={styles.officeFourPhoto}
              />
              <Image
                src="/images/sobre/foto5.jpg"
                alt="Expressão corporal durante improviso teatral"
                width={600}
                height={400}
                className={styles.officeFourPhoto}
              />
            </div>

            <figcaption className={styles.officeFourCaption}>
              Oficina no Festival de Curitiba, Casa Eliseu Voronkoff, 2025.
            </figcaption> 
          </figure>
        </section>

        <section className={styles.officeFiveSection} aria-labelledby="officeFiveTitle">
          <h2 id="officeFiveTitle" className={styles.visuallyHidden}>
            Registro visual da oficina 5
          </h2>

          <figure className={styles.officeFiveFigure}>
              <Image
                src="/images/sobre/foto6.jpg"
                alt="Participantes da oficina"
                width={600}
                height={400}
                className={styles.officeFivePhoto}
              />

            <figcaption className={styles.officeFiveCaption}>
             Primeira versão do museu na Casa Florescer 2.
            </figcaption> 
          </figure>
        </section>

        <section className={styles.finalQuoteSection} aria-labelledby="finalQuoteTitle">
          <h2 id="finalQuoteTitle" className={styles.visuallyHidden}>
            Citação final sobre o Museu Autobiográfico
          </h2>

          <div className={styles.quoteBox}>
            <p>
              Este é um museu feito de encontros, um museu polifônico. 
              <br />
              Feito de palavras que dançam, de histórias que se tocam, de corpos diversos que se lembram, se conectam e atuam, encontrando prazer em brincar sempre com o que é ficção e o que pode ser — ou é — realidade.
            </p>

            <p>
              Um museu que se move a partir de mim para encontrar outras pessoas, e que tem como ensinamento compartilhado algo que sempre saí pensando ao fim dos encontros que mediava:
            </p>

            <p><b>As pessoas só precisam e querem ser ouvidas.</b></p>

            <p>Marcelo</p>
          </div>
        </section>

      </main>

      <BackToHomeButton />
      <Footer />
    </div>
  );
}
