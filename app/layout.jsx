import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://notiptech.com.br"),
  title: "NotiP Tech | Sites, Landing Pages e Soluções Digitais",
  description:
    "A NotiP Tech cria sites institucionais, landing pages e sistemas web com foco em captação, presença profissional e crescimento digital.",
  keywords: [
    "NotiP Tech",
    "criação de sites",
    "landing pages",
    "sistemas web",
    "soluções digitais",
    "site para empresa",
  ],
  authors: [{ name: "NotiP Tech" }],
  creator: "NotiP Tech",
  publisher: "NotiP Tech",
  openGraph: {
    title: "NotiP Tech | Transformando ideias em presença digital",
    description:
      "Sites, landing pages e soluções digitais para empresas que querem captar mais, comunicar melhor e crescer com estrutura.",
    url: "https://notiptech.com.br",
    siteName: "NotiP Tech",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NotiP Tech | Sites e Soluções Digitais",
    description:
      "Transformamos ideias em presença digital com design, estratégia e estrutura técnica.",
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
