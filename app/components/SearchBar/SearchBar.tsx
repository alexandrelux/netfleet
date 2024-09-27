"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { styles } from "./SearchBar.css";

export const SearchBar = () => {
    const [query, setQuery] = useState("");
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (query.trim()) {
            router.push(`/search/${query}/1`);
        }
    };

    return (
        <form className={styles.form.class} onSubmit={handleSubmit}>
            <div className={styles.form.div}>
                <button
                    type="submit"
                    className={styles.form.icon}
                    aria-label="Search"
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                <input
                    id="search"
                    type="text"
                    className={styles.form.input}
                    placeholder="Titre de film"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <label htmlFor="search" className="sr-only">
                    Rechercher
                </label>
            </div>
        </form>
    );
};
