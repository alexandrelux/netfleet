import { MovieResult, Movie } from "../models/MovieResult";

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER}`,
    },
};

export const searchMovies = async (query: string): Promise<Movie[]> => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_THE_MOVIE_DB_API_URL}/search/movie?query=${query}&include_adult=false&language=fr-FR&page=1`,
            options
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: MovieResult = await response.json();

        return data.results;
    } catch (err) {
        console.error("An error occurred while fetching data:", err);
        return [];
    }
};
