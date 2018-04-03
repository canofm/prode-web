import React from 'react';

const DropdownUser = () => (
    <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="" id="dropdown-user" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fa fa-user-circle" />
                Ricardito
        </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-user">
                <a className="dropdown-item" href="">Perfil</a>
                <a className="dropdown-item" href="">Apuestas</a>
                <a className="dropdown-item" href="">Cerrar sesión</a>
            </div>
        </li>
    </ul>
);

export default DropdownUser;