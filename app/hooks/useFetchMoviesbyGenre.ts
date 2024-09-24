import { useEffect, useState } from "react";
import { Movie } from "../models/MovieResult";
import { fetchMoviesbyGenre } from "../lib/fetchMovieGenre";

export const useFetchMoviesbyGenre = (search: string) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                if (search) {
                    const movies = await fetchMoviesbyGenre(parseInt(search));
                    if (movies.length === 0) {
                        setError("Pas de film trouvé");
                    } else {
                        setMovies(movies);
                    }
                }
            } catch (err) {
                setError("Pas de film trouvé");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [search]);

    return {
        movies: movies,
        loading: loading,
        error: error,
    };
};
