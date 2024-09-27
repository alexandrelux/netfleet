import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "./components/Header/Header";
import { Aside } from "./components/Aside/Aside";
import { Footer } from "./components/Footer/Footer";
import { Main } from "./components/Main/Main";
import { WebSite, WithContext } from "schema-dts";
import Script from "next/script";
import { siteDescription, siteName, siteUrl } from "./utils/const";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
    preload: false,
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
    preload: false,
});

export const metadata: Metadata = {
    /* Meta */
    title: siteName,
    description: siteDescription,
    keywords:
        "films, cinéma, application de films, navigation de films, recherche de films, filmothèque, films en ligne, films récents, critiques de films, films populaires, catégories de films, film streaming, nouvelles sorties, recherche par genre, films recommandés",

    /* OpenGraph */
    openGraph: {
        type: "website",
        title: siteName,
        url: siteUrl,
        description: siteDescription,
        images: `${siteUrl}/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.c116cbba.webp&w=2048&q=75`,
    },

    /* Twitter Card */
    twitter: {
        card: "summary",
        title: siteName,
        site: `@${siteUrl}`,
        description: siteDescription,
        images: [
            {
                url: `${siteUrl}/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.c116cbba.webp&w=2048&q=75`,
                alt: "Netfleet",
            },
        ],
    },
};

/* Rich Snippet */
const jsonLd: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/search/{search_term_string}/1`,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <Script
                id="schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd),
                }}
            />
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
