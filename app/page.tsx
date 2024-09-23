import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Nav } from "./components/Nav/Nav";
import { Aside } from "./components/Aside/Aside";
import { Main } from "./components/Main/Main";
import { MovieSectionEnum } from "@/app/models/MovieSectionEnum";
import { fetchMovies } from "@/app/lib/fetchMovies";
import { MovieSection } from "./components/MovieSection/MovieSection";
import { Carroussel } from "./components/Carroussel/Carroussel";

export default async function Home() {
    const [trending, nowPlaying, popular, topRated, upcoming] =
        await Promise.all([
            fetchMovies(MovieSectionEnum.Trending),
            fetchMovies(MovieSectionEnum.NowPlaying),
            fetchMovies(MovieSectionEnum.Popular),
            fetchMovies(MovieSectionEnum.TopRated),
            fetchMovies(MovieSectionEnum.Upcoming),
        ]);

    return (
        <>
            <Header />
            <Nav />
            <Aside />
            <Main>
                <Carroussel movies={trending} />
                <MovieSection
                    title={MovieSectionEnum.NowPlaying}
                    movies={nowPlaying}
                />
                <MovieSection
                    title={MovieSectionEnum.Popular}
                    movies={popular}
                />
                <MovieSection
                    title={MovieSectionEnum.TopRated}
                    movies={topRated}
                />
                <MovieSection
                    title={MovieSectionEnum.Upcoming}
                    movies={upcoming}
                />
            </Main>
            <Footer />
        </>
    );
}
