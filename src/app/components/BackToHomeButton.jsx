import Link from "next/link";
import styles from "../styles/BackToHomeButton.module.css";

export default function BackToHomeButton() {
  return (
    <Link
      href="/"
      className={styles.backButton}
      aria-label="Voltar para a página inicial"
      title="Voltar para a página inicial"
    >
      ⟵
    </Link>
  );
}
