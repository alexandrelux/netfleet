import { SearchBar } from "../SearchBar/SearchBar";
import { styles } from "./AsidePop.css";

export const AsidePop = () => {
    return (
        <aside className={styles.aside.class}>
            <SearchBar />
        </aside>
    );
};
