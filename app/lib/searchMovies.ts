import { MovieResult } from "../models/MovieResult";

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.BEARER}`,
    },
};

export const searchMovies = async (
    query: string,
    page: string
): Promise<MovieResult | undefined> => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_THE_MOVIE_DB_API_URL}/search/movie?query=${query}&include_adult=false&language=fr-FR&page=${page}`,
            options
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: MovieResult = await response.json();
        return data;
    } catch (err) {
        console.error("An error occurred while fetching data:", err);
    }
};
