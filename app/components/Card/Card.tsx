import { Movie } from "@/app/models/MovieResult";
import { styles } from "./Card.css";
import Image from "next/image";
import { cardHeight, cardWidht } from "@/app/utils/const";

export const Card = ({ movie }: { movie: Movie }) => {
    return (
        <div className={styles.class}>
            <Image
                className={styles.image}
                src={`${process.env.NEXT_PUBLIC_THE_MOVIE_DB_MEDIA_URL}${movie.poster_path}`}
                alt={movie.title}
                width={cardWidht}
                height={cardHeight}
            ></Image>
            <div className={styles.details.class}>
                <span className={styles.details.title}>{movie.title}</span>
            </div>
        </div>
    );
};
