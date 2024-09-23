import { styles } from "./Header.css";
import Image from "next/image";
import logo from "../../assets/images/logo.webp";

export const Header = () => {
    return (
        <header className={styles.header.class}>
            <Image
                className={styles.header.image}
                src={logo}
                alt="Netfleet"
            ></Image>
        </header>
    );
};
