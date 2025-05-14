import Link from 'next/link';
import styles from '../styles/Page.module.css';

export default function MobileConstellation() {
  return (
    <div className={styles.mainContent}>
      {/* Título oculto para leitores de tela */}
      <h1 className={styles.visuallyHidden}>Página inicial - Museu Autobiográfico (versão mobile)</h1>
      {/* Mudei a altura para 1800 (antes era 1900), para tentar resolver o engasgo da home */}
      <svg
        className={styles.constellation}
        viewBox="0 0 600 1800"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        {/* Pontinhos variados 
        <circle cx="60" cy="970" r="5" fill="black"  />
        <circle cx="170" cy="1350" r="4" fill="black"  />
        <circle cx="480" cy="470" r="1.2" fill="black"  />
        <circle cx="550" cy="770" r="2" fill="black"  />
        <circle cx="230" cy="160" r="2.2" fill="black"  />
        <circle cx="220" cy="970" r="2.2" fill="black" />
        <circle cx="70" cy="1010" r="1.5" fill="black"  />
        <circle cx="480" cy="66" r="4.5" fill="black"  />
        <circle cx="290" cy="1150" r="1.62" fill="black"  />
        <circle cx="130" cy="700" r="2.5" fill="black"  />
        <circle cx="590" cy="1300" r="2.5" fill="black"  />
        <circle cx="420" cy="1240" r="2.3" fill="black" />
        <circle cx="180" cy="690" r="2.13" fill="black"  />
        <circle cx="195" cy="533" r="1.16" fill="black"  />
        <circle cx="66" cy="640" r="4" fill="black" />
        <circle cx="100" cy="660" r="1.57" fill="black"  />
        <circle cx="240" cy="710" r="1.6" fill="black" />
        <circle cx="118" cy="244" r="1.89" fill="black"  />
        <circle cx="500" cy="690" r="1.76" fill="black"  />
        <circle cx="600" cy="910" r="1.16" fill="black" />
        <circle cx="380" cy="1210" r="1.78" fill="black" />
        <circle cx="580" cy="1440" r="3" fill="black"  />
        <circle cx="50" cy="720" r="4" fill="black" />
        <circle cx="570" cy="1120" r="2.39" fill="black" />
        <circle cx="520" cy="1225" r="1.92" fill="black"  />
        <circle cx="150" cy="1600" r="4" fill="black"  />
        <circle cx="470" cy="1600" r="2.8" fill="black" />
        <circle cx="120" cy="1680" r="2.5" fill="black" />
        <circle cx="480" cy="1680" r="1" fill="black" /> */}

        <circle cx="230" cy="160" r="2.2" fill="black" />     
        <circle cx="480" cy="66" r="4.5" fill="black" />     
        <circle cx="118" cy="244" r="2" fill="black" />    
        <circle cx="195" cy="533" r="1.16" fill="black" />    
        <circle cx="550" cy="770" r="2" fill="black" />       
        <circle cx="60" cy="970" r="5" fill="black" />        
        <circle cx="290" cy="1150" r="1.62" fill="black" />   
        <circle cx="590" cy="1300" r="2.5" fill="black" /> 
        <circle cx="120" cy="1680" r="2.5" fill="black" />
        <circle cx="470" cy="1600" r="2.8" fill="black" />

        {/* Estrelinhas PNG 
        <image href="/images/star.png" x="100" y="40" width="12" height="12"  />
        <image href="/images/star.png" x="20" y="200" width="12" height="12" />
        <image href="/images/star.png" x="500" y="350" width="15" height="15" />
        <image href="/images/star.png" x="250" y="440" width="12" height="12" />
        <image href="/images/star.png" x="400" y="670" width="12" height="12" />
        <image href="/images/star.png" x="60" y="750" width="12" height="12" />
        <image href="/images/star.png" x="150" y="900" width="12" height="12" />
        <image href="/images/star.png" x="480" y="1050" width="12" height="12" />
        <image href="/images/star.png" x="100" y="1150" width="12" height="12" />
        <image href="/images/star.png" x="300" y="1300" width="18" height="18" />
        <image href="/images/star.png" x="280" y="1750" width="12" height="12" />
        <image href="/images/star.png" x="100" y="1800" width="12" height="12" /> */}

        <image href="/images/star.png" x="100" y="40" width="12" height="12" />
        <image href="/images/star.png" x="500" y="350" width="15" height="15" />
        <image href="/images/star.png" x="60" y="750" width="12" height="12" />
        <image href="/images/star.png" x="480" y="1050" width="12" height="12" />
        <image href="/images/star.png" x="280" y="1750" width="12" height="12" />

        {/* Formas com texto e arestas visíveis */}
        {/* 1. MUSEU (ampliado) */}
          <Link href="/museu" aria-label="Ir para a seção Museu">
            <g className={styles.hoverText}>
              <polygon points="100,220 360,200 330,400 170,420 120,270" fill="white" stroke="black" strokeWidth="1" />
              <circle cx="100" cy="220" r="3.5" fill="black" />
              <circle cx="360" cy="200" r="3.5" fill="black" />
              <circle cx="330" cy="400" r="4.5" fill="black" />
              <circle cx="170" cy="420" r="4.5" fill="black" />
              <circle cx="120" cy="270" r="3.5" fill="black" />
              <text x="230" y="320" className={styles.shapeText} textAnchor="middle">museu</text>
            </g>
          </Link>

        {/* 2. AUTOBIOGRÁFICO (ampliado + espaçado) */}
          <Link href="/autobiografico" aria-label="Ir para a seção Autobiográfico">
            <g className={styles.hoverText}>
              <polygon points="120,520 330,500 360,700 200,740 150,600" fill="white" stroke="black" strokeWidth="1" />
              <circle cx="120" cy="520" r="3.5" fill="black" />
              <circle cx="330" cy="500" r="3.5" fill="black" />
              <circle cx="360" cy="700" r="4.5" fill="black" />
              <circle cx="200" cy="740" r="4.5" fill="black" />
              <circle cx="150" cy="600" r="3.5" fill="black" />
              <text x="240" y="610" className={styles.shapeText} textAnchor="middle">autobiográfico</text>
            </g>
          </Link>

        {/* 3. TERRITÓRIO (ampliado + espaçado) */}
          <Link href="/territorio" aria-label="Ir para a seção Território">
            <g className={styles.hoverText}>
              <polygon points="270,800 490,780 510,980 350,1020 280,910" fill="white" stroke="black" strokeWidth="1" />
              <circle cx="270" cy="800" r="3.5" fill="black" />
              <circle cx="490" cy="780" r="3.5" fill="black" />
              <circle cx="510" cy="980" r="4.5" fill="black" />
              <circle cx="350" cy="1020" r="4.5" fill="black" />
              <circle cx="280" cy="910" r="3.5" fill="black" />
              <text x="390" y="880" className={styles.shapeText} textAnchor="middle">território</text>
            </g>
          </Link>

        {/* 4. LESTE (ampliado + reposicionado) */}
          <Link href="/leste" aria-label="Ir para a seção Leste">
            <g className={styles.hoverText}>
              <polygon points="90,1080 310,1050 350,1180 200,1220 110,1140" fill="white" stroke="black" strokeWidth="1" />
              <circle cx="90" cy="1080" r="3.5" fill="black" />
              <circle cx="310" cy="1050" r="3.5" fill="black" />
              <circle cx="350" cy="1180" r="4.5" fill="black" />
              <circle cx="200" cy="1220" r="4.5" fill="black" />
              <circle cx="110" cy="1140" r="3.5" fill="black" />
              <text x="210" y="1130" className={styles.shapeText} textAnchor="middle">leste</text>
            </g>
          </Link>

        {/* 5. MEMÓRIA (ampliado + espaçado) */}
          <Link href="/memoria" aria-label="Ir para a seção Memória">
            <g className={styles.hoverText}>
              <polygon points="160,1300 390,1280 370,1440 160,1410" fill="white" stroke="black" strokeWidth="1" />
              <circle cx="160" cy="1300" r="3.5" fill="black" />
              <circle cx="390" cy="1280" r="3.5" fill="black" />
              <circle cx="370" cy="1440" r="4.5" fill="black" />
              <circle cx="160" cy="1410" r="4.5" fill="black" />
              <text x="260" y="1360" className={styles.shapeText} textAnchor="middle">memória</text>
            </g>
          </Link>

        {/* 6. CORPO (ampliado + reposicionado) */}
          <Link href="/corpo" aria-label="Ir para a seção Corpo">
            <g className={styles.hoverText}>
              <polygon points="260,1520 430,1580 280,1700" fill="white" stroke="black" strokeWidth="1" />
              <circle cx="260" cy="1520" r="3.5" fill="black" />
              <circle cx="430" cy="1580" r="4.5" fill="black" />
              <circle cx="280" cy="1700" r="3.5" fill="black" />
              <text x="320" y="1590" className={styles.shapeText} textAnchor="middle">corpo</text>
            </g>
          </Link>

        {/* Linhas conectando as arestas */}
        <line x1="330" y1="400" x2="330" y2="500" stroke="black" strokeWidth="1.5" />
        <line x1="490" y1="780" x2="200" y2="740" stroke="black" strokeWidth="1.5" />
        <line x1="350" y1="1180" x2="390" y2="1280" stroke="black" strokeWidth="1.5" />
        <line x1="370" y1="1440" x2="260" y2="1520" stroke="black" strokeWidth="1.5" />
        <line x1="350" y1="1020" x2="310" y2="1050" stroke="black" strokeWidth="1.5" />

      </svg>
    </div>
  );
}
