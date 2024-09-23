import { Card } from "../Card/Card";
import { styles } from "./MovieSection.css";
import { Movie } from "@/app/models/MovieResult";

export const MovieSection = ({
    title,
    movies,
}: {
    title: string;
    movies: Movie[];
}) => {
    return (
        <div className={styles.class}>
            <h2 className={styles.h2}>{title}</h2>
            <div className={styles.movieList}>
                {movies.map((movie) => (
                    <Card key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};
