import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Мира — Пространство души",
  description: "Глубинная психология. Индивидуальные и групповые сессии онлайн и офлайн.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
