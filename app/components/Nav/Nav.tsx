import { styles } from "./Nav.css";
import Link from "next/link";
import { MovieSectionEnum } from "@/app/models/MovieSectionEnum";
import { fetchMovies } from "@/app/lib/fetchMovies";

export const Nav = async () => {
    const movies = await fetchMovies(MovieSectionEnum.Popular);

    return (
        <nav className={styles.nav.class}>
            <p className={styles.nav.title}>Films populaires</p>
            <div className={styles.nav.ul}>
                {movies.map((item) => {
                    return (
                        <Link
                            key={item.id}
                            className={styles.nav.link}
                            href={{
                                pathname: `/movies/${item.id}`,
                            }}
                        >
                            {item.title}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};
