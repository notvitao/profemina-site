import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clínica Profemina — Saúde da Mulher e Maternidade",
  description:
    "Há 40 anos cuidando da saúde da mulher. Ginecologia, Obstetrícia, Fertilização in Vitro e mais. Agende sua consulta.",
  keywords:
    "ginecologia, obstetrícia, fertilização, fertilização in vitro, FIV, pré-natal, saúde da mulher, clínica profemina, rio de janeiro",
  openGraph: {
    title: "Clínica Profemina — Saúde da Mulher e Maternidade",
    description:
      "Há 40 anos cuidando da saúde da mulher. Ginecologia, Obstetrícia, Fertilização in Vitro e mais.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
