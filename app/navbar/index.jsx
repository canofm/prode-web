import React from 'react';
import Logo from './Logo';
import NavMenu from './NavMenu';
import DropdownUser from './DropdownUser';

const NavBar = () => (
    <div className="navbar navbar-expand-md navbar-dark bg-dark mb-0">
        <Logo />
        <NavMenu />
        <DropdownUser />
    </div>
);

export default NavBar;