import React from 'react';

const NavMenu = () => (
    <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <a className="nav-link" href="">Dashboard</a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="">Apuestas</a>
            </li>
        </ul>
    </div>
);

export default NavMenu;