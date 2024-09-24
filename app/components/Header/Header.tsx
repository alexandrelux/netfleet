import { styles } from "./Header.css";
import Image from "next/image";
import logo from "../../assets/images/logo.webp";
import Link from "next/link";
import ToggleButton from "../ToggleButton/ToggleButton";
import { AsidePop } from "../AsidePop/AsidePop";

export const Header = () => {
    return (
        <header className={styles.header.class}>
            <ToggleButton>
                <AsidePop />
            </ToggleButton>
            <Link
                href={{
                    pathname: "/",
                }}
            >
                <Image
                    className={styles.header.image}
                    src={logo}
                    alt="Netfleet"
                ></Image>
            </Link>
        </header>
    );
};
