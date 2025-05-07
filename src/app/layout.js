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
  title: "Museu Autobiográfico e Território_Leste",
  description: "Site oficial do Museu Autobiográfico e Território_Leste: registros, memórias e experiências de oficinas teatrais em diferentes territórios.",
  alternates: {
    canonical: "https://museuautobiografico.org",
  },
  openGraph: {
    title: "Museu Autobiográfico e Território_Leste",
    description: "Site oficial do Museu Autobiográfico e Território_Leste: registros, memórias e experiências de oficinas teatrais em diferentes territórios.",
    url: "https://museuautobiografico.org",
    siteName: "Museu Autobiográfico",
    images: [
      {
        url: "https://museuautobiografico.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Imagem de compartilhamento do Museu Autobiográfico",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Museu Autobiográfico e Território_Leste",
    description: "Site oficial do Museu Autobiográfico e Território_Leste: registros, memórias e experiências de oficinas teatrais em diferentes territórios.",
    image: "https://museuautobiografico.org/og-image.jpg",
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
