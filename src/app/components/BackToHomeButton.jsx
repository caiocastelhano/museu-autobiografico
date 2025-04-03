// components/BackToHomeButton.jsx
import Link from "next/link";
import styles from "../styles/BackToHomeButton.module.css";

export default function BackToHomeButton() {
  return (
    <Link href="/" className={styles.backButton}>
      ⟵ voltar
    </Link>
  );
}
