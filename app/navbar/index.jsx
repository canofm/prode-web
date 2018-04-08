import React from 'react';
import Logo from './Logo';
import NavMenu from './NavMenu';
import DropdownUser from './DropdownUser';

const NavBar = () => (
  <div className="navbar navbar-expand-md navbar-dark bg-primary mb-0">
    <div className="container">
      <Logo />
      <NavMenu />
      <DropdownUser />
    </div>
  </div>
);

export default NavBar;