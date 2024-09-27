import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { styles } from "./Pager.css";

export const Pager = ({
    pathname,
    previousPage,
    currentPage,
    nextPage,
    totalPages,
}: {
    pathname: string;
    previousPage: number;
    currentPage: number;
    nextPage: number;
    totalPages: number;
}) => {
    return (
        <div className={styles.pager.class}>
            {currentPage !== previousPage ? (
                <Link
                    href={{
                        pathname: `${pathname}/${previousPage}`,
                    }}
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </Link>
            ) : null}
            <span>
                {currentPage} / {totalPages}
            </span>
            {currentPage !== nextPage ? (
                <Link
                    href={{
                        pathname: `${pathname}/${nextPage}`,
                    }}
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </Link>
            ) : null}
        </div>
    );
};
