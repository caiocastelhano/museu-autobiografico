import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import ClientRedirectWrapper from "./client-redirect-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Museu Autobiográfico e Território Leste",
  description: "Site oficial do Museu Autobiográfico e Território Leste, com registros, vídeos e experiências das oficinas.",
  alternates: {
    canonical: "https://museuautobiografico.org",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ClientRedirectWrapper>{children}</ClientRedirectWrapper>
      </body>
    </html>
  );
}
