import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "./components/Header/Header";
import { Aside } from "./components/Aside/Aside";
import { Footer } from "./components/Footer/Footer";
import { Main } from "./components/Main/Main";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Netfleet",
    description: "Simple movie browsing app",
    keywords:
        "films, cinéma, application de films, navigation de films, recherche de films, filmothèque, films en ligne, films récents, critiques de films, films populaires, catégories de films, film streaming, nouvelles sorties, recherche par genre, films recommandés",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col`}
            >
                <Header />
                <Aside />
                <Main>{children}</Main>
                <Footer />
            </body>
        </html>
    );
}
