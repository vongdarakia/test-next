import { useRouter } from "next/dist/client/router";
import styled from "styled-components";
import { MenuItem, NavLink } from "./NavLink";

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    width: fit-content;
    padding: 30px;
    border: 1px solid black;
`;

type Props = {
    menuItems?: MenuItem[];
};

export const NavBar = ({ menuItems = [] }: Props) => {
    const router = useRouter();

    return (
        <Nav>
            {menuItems.map((menuItem) => {
                const isSelected = router.pathname === menuItem.path;

                return <NavLink key={menuItem.name} menuItem={menuItem} isSelected={isSelected} />;
            })}
        </Nav>
    );
};
