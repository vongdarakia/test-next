import { MenuItem } from "components/common/NavLink";
import { createContext } from "react";

type LayoutContextProps = {
    menuItems: MenuItem[];
};

export const LayoutContext = createContext<LayoutContextProps>({
    menuItems: [{ name: "Home", path: "/" }],
});
