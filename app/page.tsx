import { MovieSectionEnum } from "@/app/models/MovieSectionEnum";
import { fetchMovies } from "@/app/lib/fetchMovies";
import { MovieSection } from "./components/MovieSection/MovieSection";
import { Carroussel } from "./components/Carroussel/Carroussel";
import { isrTime } from "./utils/const";

export const revalidate = isrTime;

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
            <Carroussel movies={trending} />
            <MovieSection
                className="md:hidden"
                title={MovieSectionEnum.Popular}
                movies={popular}
            />
            <MovieSection
                title={MovieSectionEnum.NowPlaying}
                movies={nowPlaying}
            />
            <MovieSection title={MovieSectionEnum.TopRated} movies={topRated} />
            <MovieSection title={MovieSectionEnum.Upcoming} movies={upcoming} />
        </>
    );
}
