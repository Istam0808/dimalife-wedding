import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.scss";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata = {
  title: "Дильмурод и Шакира — приглашение",
  description: "Будем счастливы видеть вас рядом в этот особенный день",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${montserrat.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
