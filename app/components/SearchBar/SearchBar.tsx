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
            router.push(`/search/${query}`);
        }
    };

    return (
        <form className={styles.form.class} onSubmit={handleSubmit}>
            <div className={styles.form.div}>
                <button type="submit" className={styles.form.icon}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                <input
                    type="text"
                    className={styles.form.input}
                    placeholder="Titre de film"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
        </form>
    );
};
