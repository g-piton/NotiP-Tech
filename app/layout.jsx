import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://notiptech.com.br"),
  title: "NotiP Tech | Sites, Landing Pages e Soluções Digitais",
  description:
    "A NotiP Tech cria sites institucionais, landing pages, sistemas web e soluções digitais modernas para pequenas empresas, prestadores de serviço e negócios locais.",
  keywords: [
    "NotiP Tech",
    "criação de sites",
    "landing pages",
    "sistemas web",
    "soluções digitais",
    "sites para pequenas empresas",
  ],
  authors: [{ name: "NotiP Tech" }],
  creator: "NotiP Tech",
  publisher: "NotiP Tech",
  openGraph: {
    title: "NotiP Tech | Transformando ideias em presença digital",
    description:
      "Sites, landing pages e soluções digitais modernas para empresas que querem se destacar na internet.",
    url: "https://notiptech.com.br",
    siteName: "NotiP Tech",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NotiP Tech | Sites e Soluções Digitais",
    description:
      "Transformamos ideias em presença digital com tecnologia, design e estratégia.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "32x32" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "icon", url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
