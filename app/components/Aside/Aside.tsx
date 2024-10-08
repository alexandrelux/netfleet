import { Nav } from "../Nav/Nav";
import { SearchBar } from "../SearchBar/SearchBar";
import { styles } from "./Aside.css";

export const Aside = () => {
    return (
        <aside className={styles.aside.class}>
            <SearchBar />
            <Nav />
        </aside>
    );
};
