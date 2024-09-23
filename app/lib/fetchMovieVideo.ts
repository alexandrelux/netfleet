import { MovieVideo, MovieVideos } from "../models/MovieVideo";

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER}`,
    },
};

export const fetchVideoOfaMovie = async (id: number): Promise<MovieVideo[]> => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_THE_MOVIE_DB_API_URL}/movie/${id}/videos?language=en-US`,
            options
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: MovieVideos = await response.json();
        return data.results;
    } catch (err) {
        console.error("An error occurred while fetching data:", err);
        return [];
    }
};
