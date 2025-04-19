import styles from '../styles/Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className={styles.navbar} role="banner" aria-label="Navegação principal">
      <Link href="/" aria-label="Ir para a página inicial do Museu Autobiográfico">
        <h1 className={styles.navbarTitle}>
          <span className={styles.break}>museu autobiográfico</span>
          <span className={styles.break}> e território_leste</span>
        </h1>
      </Link>
    </nav>
  );
}

