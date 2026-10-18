import { Fraunces, Baloo_2 } from "next/font/google";
import "./globals.css";
const fr = Fraunces({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-fraunces" });
const ba = Baloo_2({ subsets: ["latin", "devanagari"], variable: "--font-baloo" });
export const metadata = {
  title: "ek saath — Specialty Coffee & Pizzeria, Bhilai",
  description: "Coffee. Culture. Conversation. Multi-roaster cafe and artisanal pizza in Nehru Nagar, Bhilai.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fr.variable} ${ba.variable}`}>
      <body>{children}<div className="grain" /></body>
    </html>
  );
}
