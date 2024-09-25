import { console } from "inspector";
import { MovieDetails } from "../models/MovieDetails";
import { Movie, MovieResult } from "../models/MovieResult";

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER}`,
    },
};

export const fetchMovieDetails = async (
    id: number
): Promise<MovieDetails | null> => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_THE_MOVIE_DB_API_URL}/movie/${id}?language=fr-FR`,
            options
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: MovieDetails = await response.json();
        return data;
    } catch (err) {
        console.error("An error occurred while fetching data:", err);
        return null;
    }
};

export const fetchMovieSimilars = async (id: number): Promise<Movie[]> => {
    try {
        console.log(id);
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_THE_MOVIE_DB_API_URL}/movie/${id}/similar?language=fr-FR`,
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

export const fetchMovieRecommendations = async (
    id: number
): Promise<Movie[]> => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_THE_MOVIE_DB_API_URL}/movie/${id}/recommendations?language=fr-FR`,
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
