import { FC } from 'react';

interface MenuProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

declare const Menu: FC<MenuProps>;
export default Menu; 