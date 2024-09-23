import { MovieSectionEnum } from "../models/MovieSectionEnum";
import { MovieResult, Movie } from "../models/MovieResult";

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER}`,
    },
};

export const fetchMovies = async (
    sectionType: MovieSectionEnum
): Promise<Movie[]> => {
    try {
        let response: Response;

        switch (sectionType) {
            case MovieSectionEnum.Trending:
                response = await fetch(
                    `${process.env.NEXT_PUBLIC_THE_MOVIE_DB_API_URL}/trending/movie/day?language=fr-FR`,
                    options
                );
                break;
            case MovieSectionEnum.NowPlaying:
                response = await fetch(
                    `${process.env.NEXT_PUBLIC_THE_MOVIE_DB_API_URL}/movie/now_playing?language=fr-FR&page=1`,
                    options
                );
                break;
            case MovieSectionEnum.Popular:
                response = await fetch(
                    `${process.env.NEXT_PUBLIC_THE_MOVIE_DB_API_URL}/movie/popular?language=fr-FR&page=1`,
                    options
                );
                break;
            case MovieSectionEnum.TopRated:
                response = await fetch(
                    `${process.env.NEXT_PUBLIC_THE_MOVIE_DB_API_URL}/movie/top_rated?language=fr-FR&page=1`,
                    options
                );
                break;
            case MovieSectionEnum.Upcoming:
                response = await fetch(
                    `${process.env.NEXT_PUBLIC_THE_MOVIE_DB_API_URL}/movie/upcoming?language=fr-FR&page=1`,
                    options
                );
                break;
            default:
                response = await fetch(
                    `${process.env.NEXT_PUBLIC_THE_MOVIE_DB_API_URL}/movie/now_playing?language=fr-FR&page=1`,
                    options
                );
                break;
        }

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
