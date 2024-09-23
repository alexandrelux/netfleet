"use client";

import { Movie } from "@/app/models/MovieResult";
import { styles } from "./Carroussel.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Carroussel = ({ movies }: { movies: Movie[] }) => {
    const [i, setI] = useState(0);

    const handleChevronLeft = () => {
        if (i > 0) {
            setI(i - 1);
        } else if (i === 0) {
            setI(movies.length - 1);
        }
    };

    const handleChevronRight = () => {
        if (i < movies.length - 1) {
            setI(i + 1);
        } else if (i === movies.length - 1) {
            setI(0);
        }
    };

    return (
        <div className={styles.carroussel}>
            <button onClick={handleChevronLeft} className={styles.buttonLeft}>
                <FontAwesomeIcon
                    className={styles.chevronLeft}
                    icon={faChevronLeft}
                />
            </button>
            <Image
                src={`${process.env.NEXT_PUBLIC_THE_MOVIE_DB_MEDIA_FULL_URL}${movies[i].poster_path}`}
                alt="Movie Poster"
                className={styles.image}
                width={960}
                height={400}
            />
            <button onClick={handleChevronRight} className={styles.buttonRight}>
                <FontAwesomeIcon
                    className={styles.chevronRight}
                    icon={faChevronRight}
                />
            </button>
        </div>
    );
};
