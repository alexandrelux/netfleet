import { Card } from "../Card/Card";
import { styles } from "./MovieSection.css";
import { Movie } from "@/app/models/MovieResult";

export const MovieSection = ({
    title,
    movies,
    col = false,
}: {
    title: string;
    movies: Movie[];
    col?: boolean;
}) => {
    return (
        <div className={styles.class}>
            {!col ? <h2 className={styles.h2}>{title}</h2> : null}
            <div
                className={
                    col
                        ? styles.movieList + " flex-wrap gap-8 justify-center"
                        : styles.movieList
                }
            >
                {movies.map((movie) => (
                    <Card key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};
