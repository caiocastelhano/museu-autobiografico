import Link from 'next/link';
import styles from '../styles/Page.module.css';
import Image from 'next/image';

function Star({ top, left, className }) {
  return (
    <div
      className={`${styles.star} ${className || ''}`}
      style={{ top, left }}
    >
      <Image
        src="/images/star.png"
        alt="Estrela"
        fill
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
}

export default function DesktopConstellation() {
  return (
    <div className={styles.mainContent}>
      {/* Título oculto para leitores de tela */}
      <h1 className={styles.visuallyHidden}>Página inicial - Museu Autobiográfico</h1>

      <svg
        className={styles.constellation}
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        {/* Pontos (estrelas) */}
        <circle cx="50" cy="80" r="4" fill="black" />
        <circle cx="115" cy="130" r="3" fill="black" />
        <circle cx="193" cy="75" r="2.5" fill="black" className={styles.blinkingStar1} />
        <circle cx="275" cy="150" r="6" fill="black" />
        <circle cx="380" cy="100" r="1.75" fill="black" className={styles.blinkingStar4} />
        <circle cx="415" cy="115" r="1.75" fill="black" className={styles.blinkingStar3} />
        <circle cx="450" cy="300" r="2.75" fill="black" />
        <circle cx="350" cy="260" r="8" fill="black" className={styles.blinkingStar1} />
        <circle cx="750" cy="60" r="2.5" fill="black" className={styles.blinkingStar2} />
        <circle cx="815" cy="180" r="1" fill="black" className={styles.blinkingStar4} />
        <circle cx="720" cy="150" r="1" fill="black" />
        <circle cx="700" cy="78" r="1" fill="black" className={styles.blinkingStar1} />
        <circle cx="865" cy="210" r="4" fill="black" />
        <circle cx="890" cy="290" r="5" fill="black" />
        <circle cx="900" cy="120" r="2" fill="black" className={styles.blinkingStar3} />
        <circle cx="1050" cy="80" r="3" fill="black" />
        <circle cx="150" cy="400" r="2.5" fill="black" className={styles.blinkingStar2} />
        <circle cx="350" cy="500" r="2" fill="black" className={styles.blinkingStar4} />
        <circle cx="600" cy="450" r="3" fill="black" />
        <circle cx="700" cy="300" r="2" fill="black" />
        <circle cx="850" cy="300" r="2" fill="black" />
        <circle cx="950" cy="400" r="2.5" fill="black" className={styles.blinkingStar1} />
        <circle cx="1100" cy="300" r="4" fill="black" />
        <circle cx="490" cy="300" r="1" fill="black" />
        <circle cx="500" cy="700" r="1" fill="black" className={styles.blinkingStar2} />
        <circle cx="1050" cy="489" r="1" fill="black" />
        <circle cx="1100" cy="300" r="1" fill="black" />
        <circle cx="90" cy="300" r="1" fill="black" />
        <circle cx="500" cy="300" r="1" fill="black" />
        <circle cx="500" cy="300" r="4" fill="black" />
        
        {/* Linhas conectando os centros dos polígonos */}
        <line x1="275" y1="150" x2="528" y2="178" stroke="black" strokeWidth="1.5" />
        <line x1="275" y1="150" x2="205" y2="210" stroke="black" strokeWidth="1" />
        <line x1="260" y1="365" x2="175" y2="310" stroke="black" strokeWidth="1.5" />
        <line x1="360" y1="435" x2="470" y2="413" stroke="black" strokeWidth="1" />
        <line x1="654" y1="112" x2="823" y2="145" stroke="black" strokeWidth="1" />
        <line x1="953" y1="175" x2="935" y2="250" stroke="black" strokeWidth="1" />
        <line x1="600" y1="232" x2="560" y2="383" stroke="black" strokeWidth="1" />
        <line x1="875" y1="340" x2="600" y2="450" stroke="black" strokeWidth="1.75" />
        <line x1="50" y1="80" x2="115" y2="130" stroke="black" strokeWidth="1.75" />
        <line x1="575" y1="428" x2="600" y2="450" stroke="black" strokeWidth="1" />
        <line x1="1050" y1="80" x2="1100" y2="300" stroke="black" strokeWidth="1.5" />

        {/* POLÍGONOS e TEXTOS */}
        {/* 1. MUSEU */}
        <Link href="/museu" aria-label="Ir para a seção Museu">
          <g className={styles.hoverText}>
            <polygon points="95,210 205,210 235,280 175,310 95,280" fill="white" stroke="black" strokeWidth="1" />
            <circle cx="95"  cy="210" r="5" fill="black" />
            <circle cx="205" cy="210" r="2.5" fill="black" />
            <circle cx="235" cy="280" r="4" fill="black" />
            <circle cx="175" cy="310" r="6" fill="black" />
            <circle cx="95"  cy="280" r="3" fill="black" />
            <text x="161" y="258" className={styles.shapeText} textAnchor="middle">museu</text>
          </g>
        </Link>

        {/* 2. AUTOBIOGRÁFICO */}
        <Link href="/autobiografico" aria-label="Ir para a seção Autobiográfico">
          <g className={styles.hoverText}>
            <polygon points="546,94 654,112 672,196 600,232 528,178" fill="white" stroke="black" strokeWidth="1" />
            <circle cx="546" cy="94" r="3" fill="black" />
            <circle cx="654" cy="112" r="3.5" fill="black" />
            <circle cx="672" cy="196" r="4" fill="black" />
            <circle cx="600" cy="232" r="2.5" fill="black" />
            <circle cx="528" cy="178" r="3" fill="black" />
            <text x="600" y="162" className={styles.shapeText} textAnchor="middle">autobiográfico</text>
          </g>
        </Link>

        {/* 3. CORPO */}
        <Link href="/corpo" aria-label="Ir para a seção Corpo">
          <g className={styles.hoverText}>
            <polygon points="843,35 973,65 953,175 823,145" fill="white" stroke="black" strokeWidth="1" />
            <circle cx="843" cy="35" r="3" fill="black" />
            <circle cx="973" cy="65" r="2.5" fill="black" />
            <circle cx="953" cy="175" r="4" fill="black" />
            <circle cx="823" cy="145" r="3" fill="black" />
            <text x="898" y="105" className={styles.shapeText} textAnchor="middle">corpo</text>
          </g>
        </Link>

        {/* 4. MEMÓRIA */}
        <Link href="/memoria" aria-label="Ir para a seção Memória">
          <g className={styles.hoverText}>
            <polygon points="935,250 1085,370 875,340" fill="white" stroke="black" strokeWidth="1" />
            <circle cx="935" cy="250" r="4" fill="black" />
            <circle cx="1085" cy="370" r="4.5" fill="black" />
            <circle cx="875" cy="340" r="3" fill="black" />
            <text x="965" y="320" className={styles.shapeText} textAnchor="middle">memória</text>
          </g>
        </Link>

        {/* 5. LESTE */}
        <Link href="/leste" aria-label="Ir para a seção Leste">
          <g className={styles.hoverText}>
            <polygon points="500,368 560,383 575,428 515,458 470,413" fill="white" stroke="black" strokeWidth="1" />
            <circle cx="500" cy="368" r="2" fill="black" />
            <circle cx="560" cy="383" r="2.5" fill="black" />
            <circle cx="575" cy="428" r="4" fill="black" />
            <circle cx="515" cy="458" r="1.5" fill="black" />
            <circle cx="470" cy="413" r="3" fill="black" />
            <text x="524" y="410" className={styles.shapeText} textAnchor="middle">leste</text>
          </g>
        </Link>

        {/* 6. TERRITÓRIO */}
        <Link href="/territorio" aria-label="Ir para a seção Território">
          <g className={styles.hoverText}>
            <polygon points="260,365 340,365 360,435 300,465 260,435" fill="white" stroke="black" strokeWidth="1" />
            <circle cx="260" cy="365" r="3" fill="black" />
            <circle cx="340" cy="365" r="2" fill="black" />
            <circle cx="360" cy="435" r="3.5" fill="black" />
            <circle cx="300" cy="465" r="1.5" fill="black" />
            <circle cx="260" cy="435" r="2" fill="black" />
            <text x="304" y="413" className={styles.shapeText} textAnchor="middle">território</text>
          </g>
        </Link>
      </svg>

      {/* Estrelinhas PNG (decorativas) */}
      <Star top="600px" left="1000px" className={styles.blinkingStar1} />
      <Star top="150px" left="350px" />
      <Star top="300px" left="1300px" className={styles.blinkingStar2} />
      <Star top="350px" left="600px" />
      <Star top="100px" left="900px" className={styles.blinkingStar3} />
      <Star top="600px" left="150px" />
      <Star top="500px" left="800px" className={styles.blinkingStar4} />
    </div>
  );
}
