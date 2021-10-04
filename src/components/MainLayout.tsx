import Head from "next/head";
import styles from "../styles/Home.module.css";
import { getImagePath } from "../utils/getImagePath";
import { Footer } from "./Footer";

export const MainLayout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>NextJS Playground</title>
                <meta
                    name="description"
                    content="A place where I can practice web development concepts"
                />
                <link rel="icon" href={getImagePath("/favicon.ico")} />
            </Head>

            <main className={styles.main}>{children}</main>

            <Footer />
        </div>
    );
};
