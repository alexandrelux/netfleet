import { styles } from "./Main.css";
import { ReactNode } from "react";

export const Main = ({ children }: { children: ReactNode }) => {
    return <main className={styles.main.class}>{children}</main>;
};
