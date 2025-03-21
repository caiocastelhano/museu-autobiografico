import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import styles from "./styles/Page.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <Navbar />

      {/* "sobre/about" e "contato/contact" */}
      <Link href="/#">
        <div className={styles.sobre}>sobre/about</div>
      </Link>
      <Link href="/#">
        <div className={styles.contato}>contato/contact</div>
      </Link>

      {/* Container central para a constelação */}
      <div className={styles.mainContent}>
        <svg
          className={styles.constellation}
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Pontos (estrelas) */}
          <circle cx="50" cy="80" r="2" fill="black" />
          <circle cx="115" cy="130" r="2.5" fill="black" />
          <circle cx="193" cy="75" r="2.5" fill="black" />
          <circle cx="275" cy="150" r="6" fill="black" />
          <circle cx="380" cy="100" r="1.75" fill="black" />
          <circle cx="415" cy="115" r="1.75" fill="black" />
          <circle cx="450" cy="300" r="2.75" fill="black" />
          <circle cx="350" cy="260" r="8" fill="black" />
          <circle cx="750" cy="60" r="2.5" fill="black" />
          <circle cx="815" cy="180" r="1" fill="black" />
          <circle cx="720" cy="150" r="1" fill="black" /> 
          <circle cx="700" cy="78" r="1" fill="black" /> 
          <circle cx="865" cy="210" r="1" fill="black" /> 
          <circle cx="890" cy="290" r="5" fill="black" />    
          <circle cx="900" cy="120" r="2" fill="black" />
          <circle cx="1050" cy="80" r="1.75" fill="black" />
          <circle cx="150" cy="400" r="2.5" fill="black" />
          <circle cx="350" cy="500" r="2" fill="black" />
          <circle cx="600" cy="450" r="3" fill="black" />
          <circle cx="700" cy="300" r="2" fill="black" />
          <circle cx="850" cy="300" r="2" fill="black" />
          <circle cx="950" cy="400" r="2.5" fill="black" />
          <circle cx="1100" cy="300" r="2" fill="black" />
          <circle cx="500" cy="300" r="1" fill="black" />

          {/* Linhas conectando os centros dos polígonos */}
          <line x1="275" y1="150" x2="528" y2="178" stroke="black" strokeWidth="1" />
          <line x1="275" y1="150" x2="205" y2="210" stroke="black" strokeWidth="1" />
          <line x1="260" y1="365" x2="175" y2="310" stroke="black" strokeWidth="2" />
          <line x1="360" y1="435" x2="470" y2="413" stroke="black" strokeWidth="1" />
          <line x1="654" y1="112" x2="840" y2="110" stroke="black" strokeWidth="1" />
          <line x1="945" y1="124" x2="970" y2="265" stroke="black" strokeWidth="1" />
          <line x1="600" y1="232" x2="560" y2="383" stroke="black" strokeWidth="1" />
          <line x1="940" y1="310" x2="600" y2="450" stroke="black" strokeWidth="1" />
          <line x1="50" y1="80" x2="115" y2="130" stroke="black" strokeWidth="1" />
          <line x1="575" y1="428" x2="600" y2="450" stroke="black" strokeWidth="1" />
          <line x1="1050" y1="80" x2="1100" y2="300" stroke="black" strokeWidth="1" />

          {/* POLÍGONOS e TEXTOS */}

          {/* 1. MUSEU */}
          <Link href="/#">
            <g className={styles.hoverText}>
            <polygon
              points="95,210 205,210 235,280 175,310 95,280"
              fill="white"
              stroke="black"
              strokeWidth="1"
            />
            {/* Pontos nas arestas do polígono, simulando estrelas */}
            <circle cx="95"  cy="210" r="5" fill="black" />
            <circle cx="205" cy="210" r="2.5" fill="black" />
            <circle cx="235" cy="280" r="2" fill="black" />
            <circle cx="175" cy="310" r="1.5" fill="black" />
            <circle cx="95"  cy="280" r="3" fill="black" />
            <text x="161" y="258" className={styles.shapeText} textAnchor="middle">
              museu
            </text>
            </g>
          </Link>

          {/* 2. AUTOBIOGRÁFICO */}
          <Link href="/#">
            <g className={styles.hoverText}>
            <polygon
              points="546,94 654,112 672,196 600,232 528,178"
              fill="white"
              stroke="black"
              strokeWidth="1"
            />
            {/* Pontos nas arestas do polígono, simulando estrelas */}
            <circle cx="546" cy="94" r="2" fill="black" />
            <circle cx="654" cy="112" r="2.5" fill="black" />
            <circle cx="672" cy="196" r="4" fill="black" />
            <circle cx="600" cy="232" r="1.5" fill="black" />
            <circle cx="528" cy="178" r="2" fill="black" />
            <text x="600" y="162" className={styles.shapeText} textAnchor="middle">
              autobiográfico
            </text>
            </g>
          </Link>

          {/* 3. CORPO */}
          <Link href="/#">
            <g className={styles.hoverText}>
            <polygon
              points="870,65 930,80 945,125 885,155 840,110"
              fill="white"
              stroke="black"
              strokeWidth="1"
            />
            {/* Pontos nas arestas do polígono, simulando estrelas */}
            <circle cx="870"  cy="65" r="2" fill="black" />
            <circle cx="930" cy="80" r="2.5" fill="black" />
            <circle cx="945" cy="124" r="4" fill="black" />
            <circle cx="885" cy="155" r="1.5" fill="black" />
            <circle cx="840"  cy="110" r="3" fill="black" />
            <text x="895" y="108" className={styles.shapeText} textAnchor="middle">
              corpo
            </text>
            </g>
          </Link>

          {/* 4. MEMÓRIA */}
          <Link href="/#">
            <g className={styles.hoverText}>
            <polygon
              points="970,265 1030,280 1045,325 985,355 940,310"
              fill="white"
              stroke="black"
              strokeWidth="1"
            />
            {/* Pontos nas arestas do polígono, simulando estrelas */}
            <circle cx="970"  cy="265" r="2" fill="black" />
            <circle cx="1030" cy="280" r="2" fill="black" />
            <circle cx="1045" cy="325" r="3" fill="black" />
            <circle cx="985" cy="355" r="2.5" fill="black" />
            <circle cx="940"  cy="310" r="4" fill="black" />
            <text x="995" y="307" className={styles.shapeText} textAnchor="middle">
              memória
            </text>
            </g>
          </Link>

          {/* 5. LESTE */}
          <Link href="/#">
            <g className={styles.hoverText}>
            <polygon
              points="500,368 560,383 575,428 515,458 470,413"
              fill="white"
              stroke="black"
              strokeWidth="1"
            />
            {/* Pontos nas arestas do polígono, simulando estrelas */}
            <circle cx="500"  cy="368" r="2" fill="black" />
            <circle cx="560" cy="383" r="2.5" fill="black" />
            <circle cx="575" cy="428" r="4" fill="black" />
            <circle cx="515" cy="458" r="1.5" fill="black" />
            <circle cx="470"  cy="413" r="3" fill="black" />
            <text x="524" y="410" className={styles.shapeText} textAnchor="middle">
              leste
            </text>
            </g>
          </Link>

          {/* 6. TERRITÓRIO */}
          <Link href="/#">
            <g className={styles.hoverText}>
            <polygon
              points="260,365 340,365 360,435 300,465 260,435"
              fill="white"
              stroke="black"
              strokeWidth="1"
            />
            {/* Pontos nas arestas do polígono, simulando estrelas */}
            <circle cx="260"  cy="365" r="3" fill="black" />
            <circle cx="340" cy="365" r="2" fill="black" />
            <circle cx="360" cy="435" r="3.5" fill="black" />
            <circle cx="300" cy="465" r="1.5" fill="black" />
            <circle cx="260" cy="435" r="2" fill="black" />
            <text x="304" y="413" className={styles.shapeText} textAnchor="middle">
              território
            </text>
            </g>
          </Link>
        </svg>
      </div>

      <Footer />
    </div>
  );
}
