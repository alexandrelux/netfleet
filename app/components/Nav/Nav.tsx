import { fetchGenres } from "@/app/lib/fetchMovieGenre";
import { styles } from "./Nav.css";
import Link from "next/link";

export const Nav = async () => {
    const genres = await fetchGenres();

    return (
        <nav className={styles.nav.class}>
            <ul className={styles.nav.class}>
                {genres.map((item) => {
                    return (
                        <Link
                            key={item.id}
                            className={styles.nav.link}
                            href={{
                                pathname: `/genres/${item.id}`,
                            }}
                        >
                            {item.name}
                        </Link>
                    );
                })}
            </ul>
        </nav>
    );
};
