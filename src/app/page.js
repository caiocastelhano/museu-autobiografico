import Navbar from './components/Navbar';
import Footer from './components/Footer';
import styles from './styles/Page.module.css';

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <Navbar />

      <div className={styles.aboutSection}>Sobre/About</div>

      <div className={styles.constellation}>
        <div id="museum" className={styles.section}>Museu</div>
        <div id="autobiographic" className={styles.section}>Autobiográfico</div>
        <div id="territory" className={styles.section}>Território</div>
        <div id="east" className={styles.section}>Leste</div>
        <div id="body" className={styles.section}>Corpo</div>
        <div id="memory" className={styles.section}>Memória</div>

        {/* Linhas conectando os elementos */}
        <div id="line1" className={styles.line}></div>
        <div id="line2" className={styles.line}></div>
      </div>

      <div className={styles.contactSection}>Contato/Contact</div>

      <Footer />
    </div>
  );
}
