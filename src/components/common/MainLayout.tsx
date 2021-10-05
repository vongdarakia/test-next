import { LayoutContext } from "contexts/LayoutContext";
import Head from "next/head";
import styles from "styles/Home.module.css";
import { getImagePath } from "utils/getImagePath";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const MainLayout = ({ children }) => {
    const menuItems = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
    ];

    return (
        <LayoutContext.Provider value={{ menuItems }}>
            <div className={styles.container}>
                <Head>
                    <title>NextJS Playground</title>
                    <meta
                        name="description"
                        content="A place where I can practice web development concepts"
                    />
                    <link rel="icon" href={getImagePath("/favicon.ico")} />
                </Head>

                <Header />

                <main className={styles.main}>{children}</main>

                <Footer />
            </div>
        </LayoutContext.Provider>
    );
};
