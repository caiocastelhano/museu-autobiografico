import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.navbarTitle}>
        <span className={styles.break}>museu autobiográfico</span>
        <span className={styles.break}> e território leste</span>
      </h1>
    </nav>
  );
}
