import { Movie } from "@/app/models/MovieResult";
import { styles } from "./Card.css";
import Image from "next/image";
import { cardHeight, cardWidht } from "@/app/utils/const";

export const Card = ({ movie }: { movie: Movie }) => {
    return (
        <Image
            className={styles.main.class}
            src={`${process.env.NEXT_PUBLIC_THE_MOVIE_DB_MEDIA_URL}${movie.poster_path}`}
            alt="Movie Poster"
            width={cardWidht}
            height={cardHeight}
        ></Image>
    );
};
