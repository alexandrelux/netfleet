"use client";
import { ReactNode, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { styles } from "./ToggleButton.css";

export default function ToggleButton({ children }: { children: ReactNode }) {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div>
            <button
                onClick={() => setIsVisible(!isVisible)}
                aria-label="Toggle"
            >
                <FontAwesomeIcon className={styles.icon} icon={faBars} />
            </button>
            {isVisible && children}
        </div>
    );
}
