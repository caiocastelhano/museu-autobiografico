'use client';

import { useEffect } from "react";

export default function ClientRedirectWrapper({ children }) {
  useEffect(() => {
    if (window.location.hostname === "museuautobiografico.vercel.app") {
      window.location.href = "https://museuautobiografico.org";
    }
  }, []);

  return <>{children}</>;
}
