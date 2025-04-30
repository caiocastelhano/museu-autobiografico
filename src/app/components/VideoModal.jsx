"use client";

import { useEffect, useState } from "react";
import styles from "../styles/VideoModal.module.css";

export default function VideoModal({ isOpen, onClose, videoSrc }) {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    checkScreenSize(); // Verifica ao montar
    window.addEventListener("resize", checkScreenSize); // Atualiza ao redimensionar

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  if (!isOpen || !isDesktop) return null; // ❗ Se não for desktop, o modal nem renderiza

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Fechar vídeo">×</button>
        <iframe
          src={videoSrc}
          title="Vídeo ampliado"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className={styles.video}
        ></iframe>
      </div>
    </div>
  );
}
