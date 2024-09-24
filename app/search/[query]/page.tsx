import { MovieSection } from "@/app/components/MovieSection/MovieSection";
import { searchMovies } from "@/app/lib/searchMovies";

export default async function Genres({
    params,
}: {
    params: { query: string };
}) {
    const { query } = params;
    const movies = await searchMovies(query);

    return (
        <>
            <h2 className="text-center mb-10 text-3xl font-bold">Resultats</h2>
            <MovieSection title="Films" movies={movies} col />
        </>
    );
}
