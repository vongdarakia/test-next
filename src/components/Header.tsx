import { NavBar } from "./NavBar";

export const Header = () => {
    const menuItems = [
        { name: "Home", path: "/" },
        { name: "Animations", path: "/animations" },
    ];

    return <NavBar menuItems={menuItems} />;
};
