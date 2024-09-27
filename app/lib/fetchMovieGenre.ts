import { MovieGenre, MovieGenres } from "../models/MovieGenres";
import { MovieResult } from "../models/MovieResult";

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER}`,
    },
};

export const fetchGenres = async (): Promise<MovieGenre[]> => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_THE_MOVIE_DB_API_URL}/genre/movie/list?language=fr`,
            options
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: MovieGenres = await response.json();
        return data.genres;
    } catch (err) {
        console.error("An error occurred while fetching data:", err);
        return [];
    }
};

export const fetchMoviesbyGenre = async (
    id: number,
    page: number
): Promise<MovieResult | undefined> => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_THE_MOVIE_DB_API_URL}/discover/movie?with_genres=${id}&language=fr-FR&page=${page}`,
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
