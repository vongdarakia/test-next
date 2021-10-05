import { NavBar } from "./NavBar";

export const Header = () => {
    const menuItems = [
        { name: "Home", path: "/" },
        { name: "Animations", path: "/animations" },
        { name: "Something", path: "/something/something-child" },
    ];

    return <NavBar menuItems={menuItems} />;
};
