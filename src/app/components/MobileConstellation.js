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
          viewBox="0 0 600 1800"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Estrelas decorativas */}
          <circle cx="100" cy="50" r="1.5" fill="black" />
          <circle cx="500" cy="80" r="2" fill="black" />
          <circle cx="300" cy="150" r="1.75" fill="black" />
          <circle cx="120" cy="300" r="2.5" fill="black" />
          <circle cx="480" cy="450" r="1" fill="black" />
          <circle cx="360" cy="600" r="2" fill="black" />
          <circle cx="100" cy="780" r="1.5" fill="black" />
          <circle cx="450" cy="1000" r="2.25" fill="black" />
          <circle cx="180" cy="1200" r="1.25" fill="black" />
  
          {/* 1. MUSEU */}
          <Link href="/#">
            <g className={styles.hoverText}>
              <polygon
                points="120,200 300,180 280,280 180,300 140,240"
                fill="white"
                stroke="black"
                strokeWidth="1"
              />
              <text x="220" y="250" className={styles.shapeText} textAnchor="middle">museu</text>
            </g>
          </Link>
  
          {/* 2. AUTOBIOGRÁFICO */}
          <Link href="/#">
            <g className={styles.hoverText}>
              <polygon
                points="150,370 270,350 290,440 210,470 160,410"
                fill="white"
                stroke="black"
                strokeWidth="1"
              />
              <text x="230" y="410" className={styles.shapeText} textAnchor="middle">autobiográfico</text>
            </g>
          </Link>
  
          {/* 3. TERRITÓRIO */}
          <Link href="/#">
            <g className={styles.hoverText}>
              <polygon
                points="280,550 420,530 440,620 360,650 290,600"
                fill="white"
                stroke="black"
                strokeWidth="1"
              />
              <text x="350" y="590" className={styles.shapeText} textAnchor="middle">território</text>
            </g>
          </Link>
  
          {/* 4. LESTE */}
          <Link href="/#">
            <g className={styles.hoverText}>
              <polygon
                points="100,720 260,690 300,780 200,810 120,760"
                fill="white"
                stroke="black"
                strokeWidth="1"
              />
              <text x="210" y="750" className={styles.shapeText} textAnchor="middle">leste</text>
            </g>
          </Link>
  
          {/* 5. MEMÓRIA */}
          <Link href="/#">
            <g className={styles.hoverText}>
              <polygon
                points="160,880 340,860 320,970 150,940"
                fill="white"
                stroke="black"
                strokeWidth="1"
              />
              <text x="250" y="930" className={styles.shapeText} textAnchor="middle">memória</text>
            </g>
          </Link>
  
          {/* 6. CORPO */}
          <Link href="/#">
            <g className={styles.hoverText}>
              <polygon
                points="260,1040 380,1100 280,1180"
                fill="white"
                stroke="black"
                strokeWidth="1"
              />
              <text x="320" y="1100" className={styles.shapeText} textAnchor="middle">corpo</text>
            </g>
          </Link>
  
          {/* Linhas conectando arestas */}
          <line x1="300" y1="180" x2="270" y2="350" stroke="black" strokeWidth="1.5" />
          <line x1="290" y1="440" x2="420" y2="530" stroke="black" strokeWidth="1.5" />
          <line x1="440" y1="620" x2="260" y2="690" stroke="black" strokeWidth="1.5" />
          <line x1="300" y1="780" x2="340" y2="860" stroke="black" strokeWidth="1.5" />
          <line x1="320" y1="970" x2="380" y2="1100" stroke="black" strokeWidth="1.5" />
        </svg>
  
        {/* Estrelinhas de 4 pontas */}
        <Star top="40px" left="100px" />
        <Star top="200px" left="20px" />
        <Star top="350px" left="500px" />
        <Star top="500px" left="250px" />
        <Star top="670px" left="400px" />
        <Star top="750px" left="60px" />
        <Star top="900px" left="150px" />
        <Star top="1050px" left="480px" />
        <Star top="1150px" left="100px" />
        <Star top="1300px" left="300px" />
      </div>
    );
  }
  
  