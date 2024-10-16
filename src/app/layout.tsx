import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Snake Game",
  description: "Snake Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
