import { Card } from "../Card/Card";
import { styles } from "./MovieSection.css";
import { Movie } from "@/app/models/MovieResult";

export const MovieSection = ({
    title,
    movies,
    col = false,
    className,
}: {
    title: string;
    movies: Movie[];
    col?: boolean;
    className?: string;
}) => {
    return (
        <div className={`${styles.class} ${className}`}>
            {!col ? <h2 className={styles.h2}>{title}</h2> : null}
            <div
                className={
                    col
                        ? styles.movieList +
                          " flex-wrap gap-8 justify-start mx-auto w-[330px] lg:w-[684px] xl:w-[1040px]"
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
