import { fetchMoviesbyGenre } from "@/app/lib/fetchMovieGenre";
import { MovieSection } from "@/app/components/MovieSection/MovieSection";

export default async function Genres({
    params,
}: {
    params: { genre: string };
}) {
    const { genre } = params;
    const movies = await fetchMoviesbyGenre(parseInt(genre));

    return (
        <>
            <h2 className="text-center mb-10 text-3xl font-bold">Films</h2>
            <MovieSection title="Films" movies={movies} col />
        </>
    );
}
