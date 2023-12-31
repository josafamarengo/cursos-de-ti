import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Theme from "./theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cursos gratuitos de programação",
  description: "Cursos gratuitos de programação",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-zinc-50 dark:bg-zinc-900`}>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
