import Link from 'next/link';
import styles from '../styles/Page.module.css';
import Image from 'next/image';

function Star({ top, left }) {
    return (
      <div
        className={styles.star}
        style={{ top, left }}
      >
        <Image
          src="/images/star.png"     // caminho relativo à pasta public
          alt="Estrela"
          fill                // faz a imagem preencher o container
          style={{ objectFit: 'contain' }}
        />
      </div>
    );
  }

  export default function MobileConstellation() {
    return (
      <div className={styles.mainContent}>
        <svg
          className={styles.constellation}
          viewBox="0 0 600 1200"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Pontos (estrelas) reposicionados verticalmente */}
          <circle cx="300" cy="80" r="4" fill="black" />
          <circle cx="300" cy="130" r="3" fill="black" />
          <circle cx="300" cy="180" r="2.5" fill="black" />
          <circle cx="300" cy="240" r="6" fill="black" />
          <circle cx="300" cy="310" r="1.75" fill="black" />
          <circle cx="300" cy="370" r="1.75" fill="black" />
          <circle cx="300" cy="450" r="2.75" fill="black" />
          <circle cx="300" cy="520" r="8" fill="black" />
          <circle cx="300" cy="600" r="2.5" fill="black" />
          <circle cx="300" cy="680" r="1" fill="black" />
          <circle cx="300" cy="750" r="1" fill="black" />
          <circle cx="300" cy="810" r="1" fill="black" />
          <circle cx="300" cy="870" r="4" fill="black" />
          <circle cx="300" cy="930" r="5" fill="black" />
          <circle cx="300" cy="990" r="2" fill="black" />
          <circle cx="300" cy="1050" r="3" fill="black" />
          <circle cx="300" cy="1110" r="2.5" fill="black" />
  
          {/* Linhas simplificadas para conectar alguns pontos */}
          <line x1="300" y1="240" x2="300" y2="310" stroke="black" strokeWidth="1.5" />
          <line x1="300" y1="310" x2="300" y2="370" stroke="black" strokeWidth="1" />
          <line x1="300" y1="520" x2="300" y2="600" stroke="black" strokeWidth="1.5" />
          <line x1="300" y1="600" x2="300" y2="680" stroke="black" strokeWidth="1" />
          <line x1="300" y1="870" x2="300" y2="930" stroke="black" strokeWidth="1.5" />
  
          {/* POLÍGONOS e TEXTOS – organizados em seções verticais */}
  
          {/* 1. MUSEU */}
          <Link href="/#">
            <g className={styles.hoverText}>
              <polygon
                points="150,200 450,200 500,260 300,300 150,260"
                fill="white"
                stroke="black"
                strokeWidth="1"
              />
              <circle cx="150" cy="200" r="5" fill="black" />
              <circle cx="450" cy="200" r="2.5" fill="black" />
              <circle cx="500" cy="260" r="4" fill="black" />
              <circle cx="300" cy="300" r="6" fill="black" />
              <circle cx="150" cy="260" r="3" fill="black" />
              <text x="300" y="270" className={styles.shapeText} textAnchor="middle">
                museu
              </text>
            </g>
          </Link>
  
          {/* 2. AUTOBIOGRÁFICO */}
          <Link href="/#">
            <g className={styles.hoverText}>
              <polygon
                points="150,400 450,400 500,460 300,500 150,460"
                fill="white"
                stroke="black"
                strokeWidth="1"
              />
              <circle cx="150" cy="400" r="5" fill="black" />
              <circle cx="450" cy="400" r="2.5" fill="black" />
              <circle cx="500" cy="460" r="4" fill="black" />
              <circle cx="300" cy="500" r="6" fill="black" />
              <circle cx="150" cy="460" r="3" fill="black" />
              <text x="300" y="480" className={styles.shapeText} textAnchor="middle">
                autobiográfico
              </text>
            </g>
          </Link>
  
          {/* 3. CORPO */}
          <Link href="/#">
            <g className={styles.hoverText}>
              <polygon
                points="150,600 450,600 500,660 300,700 150,660"
                fill="white"
                stroke="black"
                strokeWidth="1"
              />
              <circle cx="150" cy="600" r="5" fill="black" />
              <circle cx="450" cy="600" r="2.5" fill="black" />
              <circle cx="500" cy="660" r="4" fill="black" />
              <circle cx="300" cy="700" r="6" fill="black" />
              <circle cx="150" cy="660" r="3" fill="black" />
              <text x="300" y="680" className={styles.shapeText} textAnchor="middle">
                corpo
              </text>
            </g>
          </Link>
  
          {/* 4. MEMÓRIA */}
          <Link href="/#">
            <g className={styles.hoverText}>
              <polygon
                points="150,800 450,800 500,860 300,900 150,860"
                fill="white"
                stroke="black"
                strokeWidth="1"
              />
              <circle cx="150" cy="800" r="5" fill="black" />
              <circle cx="450" cy="800" r="2.5" fill="black" />
              <circle cx="500" cy="860" r="4" fill="black" />
              <circle cx="300" cy="900" r="6" fill="black" />
              <circle cx="150" cy="860" r="3" fill="black" />
              <text x="300" y="880" className={styles.shapeText} textAnchor="middle">
                memória
              </text>
            </g>
          </Link>
  
          {/* 5. LESTE */}
          <Link href="/#">
            <g className={styles.hoverText}>
              <polygon
                points="150,1000 450,1000 500,1060 300,1100 150,1060"
                fill="white"
                stroke="black"
                strokeWidth="1"
              />
              <circle cx="150" cy="1000" r="5" fill="black" />
              <circle cx="450" cy="1000" r="2.5" fill="black" />
              <circle cx="500" cy="1060" r="4" fill="black" />
              <circle cx="300" cy="1100" r="6" fill="black" />
              <circle cx="150" cy="1060" r="3" fill="black" />
              <text x="300" y="1080" className={styles.shapeText} textAnchor="middle">
                leste
              </text>
            </g>
          </Link>
  
          {/* 6. TERRITÓRIO */}
          <Link href="/#">
            <g className={styles.hoverText}>
              <polygon
                points="150,1150 450,1150 500,1210 300,1250 150,1210"
                fill="white"
                stroke="black"
                strokeWidth="1"
              />
              <circle cx="150" cy="1150" r="5" fill="black" />
              <circle cx="450" cy="1150" r="2.5" fill="black" />
              <circle cx="500" cy="1210" r="4" fill="black" />
              <circle cx="300" cy="1250" r="6" fill="black" />
              <circle cx="150" cy="1210" r="3" fill="black" />
              <text x="300" y="1230" className={styles.shapeText} textAnchor="middle">
                território
              </text>
            </g>
          </Link>
        </svg>
  
        {/* Estrelinhas de 4 pontas reposicionadas para o layout vertical */}
        <Star top="1100px" left="30px" />
        <Star top="1050px" left="500px" />
        <Star top="1000px" left="250px" />
      </div>
    );
  }