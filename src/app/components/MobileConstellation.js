import Link from 'next/link';
import styles from '../styles/Page.module.css';

export default function MobileConstellation() {
  return (
    <div className={styles.mainContent}>
      <svg
        className={styles.constellation}
        viewBox="0 0 600 2000"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Pontinhos variados */}
        <circle cx="42" cy="946" r="5" fill="black" />
        <circle cx="160" cy="1397" r="4" fill="black" />
        <circle cx="460" cy="442" r="1.09" fill="black" />
        <circle cx="563" cy="741" r="1.91" fill="black" />
        <circle cx="210" cy="178" r="2.16" fill="black" />
        <circle cx="205" cy="942" r="2.15" fill="black" />
        <circle cx="196" cy="1561" r="1.29" fill="black" />
        <circle cx="41" cy="986" r="1.42" fill="black" />
        <circle cx="484" cy="191" r="5" fill="black" />
        <circle cx="480" cy="66" r="4.5" fill="black" />
        <circle cx="309" cy="1177" r="1.62" fill="black" />
        <circle cx="430" cy="383" r="2.85" fill="black" />
        <circle cx="138" cy="722" r="2.5" fill="black" />
        <circle cx="586" cy="1344" r="2.48" fill="black" />
        <circle cx="406" cy="1261" r="2.23" fill="black" />
        <circle cx="201" cy="721" r="2.13" fill="black" />
        <circle cx="195" cy="533" r="1.16" fill="black" />
        <circle cx="66" cy="640" r="4" fill="black" />
        <circle cx="115" cy="675" r="1.57" fill="black" />
        <circle cx="220" cy="733" r="1.6" fill="black" />
        <circle cx="118" cy="244" r="1.89" fill="black" />
        <circle cx="473" cy="670" r="1.76" fill="black" />
        <circle cx="585" cy="935" r="1.16" fill="black" />
        <circle cx="362" cy="1187" r="1.78" fill="black" />
        <circle cx="582" cy="1481" r="3" fill="black" />
        <circle cx="64" cy="740" r="4" fill="black" />
        <circle cx="14" cy="1165" r="3" fill="black" />
        <circle cx="554" cy="1150" r="2.39" fill="black" />
        <circle cx="537" cy="1258" r="1.92" fill="black" />

        {/* Estrelinhas PNG */}
        <image href="/images/star.png" x="100" y="40" width="12" height="12" />
        <image href="/images/star.png" x="20" y="200" width="12" height="12" />
        <image href="/images/star.png" x="500" y="350" width="12" height="12" />
        <image href="/images/star.png" x="250" y="500" width="12" height="12" />
        <image href="/images/star.png" x="400" y="670" width="12" height="12" />
        <image href="/images/star.png" x="60" y="750" width="12" height="12" />
        <image href="/images/star.png" x="150" y="900" width="12" height="12" />
        <image href="/images/star.png" x="480" y="1050" width="12" height="12" />
        <image href="/images/star.png" x="100" y="1150" width="12" height="12" />
        <image href="/images/star.png" x="300" y="1300" width="12" height="12" />

        {/* Formas com texto e arestas visíveis */}
        {/* 1. MUSEU */}
        <Link href="/#">
          <g className={styles.hoverText}>
            <polygon points="100,220 320,200 300,340 180,350 140,270" fill="white" stroke="black" strokeWidth="1" />
            <circle cx="100" cy="220" r="3" fill="black" />
            <circle cx="320" cy="200" r="2.5" fill="black" />
            <circle cx="300" cy="340" r="4" fill="black" />
            <circle cx="180" cy="350" r="3.5" fill="black" />
            <circle cx="140" cy="270" r="2.5" fill="black" />
            <text x="220" y="280" className={styles.shapeText} textAnchor="middle">museu</text>
          </g>
        </Link>

        {/* 2. AUTOBIOGRÁFICO */}
        <Link href="/#">
          <g className={styles.hoverText}>
            <polygon points="130,420 290,400 310,540 200,570 160,490" fill="white" stroke="black" strokeWidth="1" />
            <circle cx="130" cy="420" r="3" fill="black" />
            <circle cx="290" cy="400" r="2.5" fill="black" />
            <circle cx="310" cy="540" r="4" fill="black" />
            <circle cx="200" cy="570" r="3.5" fill="black" />
            <circle cx="160" cy="490" r="2.5" fill="black" />
            <text x="230" y="470" className={styles.shapeText} textAnchor="middle">autobiográfico</text>
          </g>
        </Link>

        {/* 3. TERRITÓRIO */}
        <Link href="/#">
          <g className={styles.hoverText}>
            <polygon points="280,640 440,620 460,760 360,790 290,720" fill="white" stroke="black" strokeWidth="1" />
            <circle cx="280" cy="640" r="3" fill="black" />
            <circle cx="440" cy="620" r="2.5" fill="black" />
            <circle cx="460" cy="760" r="4" fill="black" />
            <circle cx="360" cy="790" r="3.5" fill="black" />
            <circle cx="290" cy="720" r="2.5" fill="black" />
            <text x="350" y="690" className={styles.shapeText} textAnchor="middle">território</text>
          </g>
        </Link>

        {/* 4. LESTE */}
        <Link href="/#">
          <g className={styles.hoverText}>
            <polygon points="90,860 280,830 320,940 200,980 110,920" fill="white" stroke="black" strokeWidth="1" />
            <circle cx="90" cy="860" r="3" fill="black" />
            <circle cx="280" cy="830" r="2.5" fill="black" />
            <circle cx="320" cy="940" r="4" fill="black" />
            <circle cx="200" cy="980" r="3.5" fill="black" />
            <circle cx="110" cy="920" r="2.5" fill="black" />
            <text x="210" y="900" className={styles.shapeText} textAnchor="middle">leste</text>
          </g>
        </Link>

        {/* 5. MEMÓRIA */}
        <Link href="/#">
          <g className={styles.hoverText}>
            <polygon points="160,1080 360,1060 340,1200 160,1170" fill="white" stroke="black" strokeWidth="1" />
            <circle cx="160" cy="1080" r="3" fill="black" />
            <circle cx="360" cy="1060" r="2.5" fill="black" />
            <circle cx="340" cy="1200" r="4" fill="black" />
            <circle cx="160" cy="1170" r="3.5" fill="black" />
            <text x="250" y="1130" className={styles.shapeText} textAnchor="middle">memória</text>
          </g>
        </Link>

        {/* 6. CORPO */}
        <Link href="/#">
          <g className={styles.hoverText}>
            <polygon points="260,1300 400,1360 280,1460" fill="white" stroke="black" strokeWidth="1" />
            <circle cx="260" cy="1300" r="3" fill="black" />
            <circle cx="400" cy="1360" r="3.5" fill="black" />
            <circle cx="280" cy="1460" r="2.5" fill="black" />
            <text x="320" y="1370" className={styles.shapeText} textAnchor="middle">corpo</text>
          </g>
        </Link>

        {/* Linhas conectando as arestas */}
        <line x1="320" y1="200" x2="290" y2="400" stroke="black" strokeWidth="1.5" />
        <line x1="310" y1="540" x2="440" y2="620" stroke="black" strokeWidth="1.5" />
        <line x1="460" y1="760" x2="280" y2="830" stroke="black" strokeWidth="1.5" />
        <line x1="320" y1="940" x2="360" y2="1060" stroke="black" strokeWidth="1.5" />
        <line x1="340" y1="1200" x2="400" y2="1360" stroke="black" strokeWidth="1.5" />

        {/* Conexões laterais */}
        <line x1="160" y1="1397" x2="14" y2="1165" stroke="black" strokeWidth="1.5" />
        <line x1="430" y1="383" x2="484" y2="191" stroke="black" strokeWidth="2" />
      </svg>
    </div>
  );
}
