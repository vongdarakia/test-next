import Link from "next/link";
import styled from "styled-components";

export type MenuItem = {
    name: string;
    path: string;
    menuItems?: MenuItem[];
};

const StyledLink = styled.a<{ isSelected?: boolean }>`
    color: ${({ isSelected }) => (isSelected ? "red" : "initial")};
`;

type NavLinkProps = { menuItem: MenuItem; isSelected?: boolean };

export const NavLink = ({ menuItem, isSelected }: NavLinkProps) => {
    return (
        <Link href={menuItem.path} passHref>
            <StyledLink isSelected={isSelected}>{menuItem.name}</StyledLink>
        </Link>
    );
};
