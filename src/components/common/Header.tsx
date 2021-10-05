import { LayoutContext } from "contexts/LayoutContext";
import { NavBar } from "./NavBar";

export const Header = () => {
    return (
        <LayoutContext.Consumer>
            {({ menuItems }) => <NavBar menuItems={menuItems} />}
        </LayoutContext.Consumer>
    );
};
