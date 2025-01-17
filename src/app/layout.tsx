import type { Metadata } from "next";
import { Orbitron, Exo_2 } from "next/font/google";
import "./globals.css";

// Configuração das fontes
const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700"], // Pesos para títulos
});

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Pesos para o corpo do texto
});

// Metadados do site
export const metadata: Metadata = {
  title: "Portfólio | Silvio Batista",
  description:
    "Um portfólio com design futurista apresentando projetos e experiências.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`antialiased bg-gray-900 text-gray-200 ${orbitron.variable} ${exo2.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
