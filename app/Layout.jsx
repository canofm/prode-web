import React from 'react';

const Layout = () => (
  <div className="navbar navbar-expand-md navbar-dark bg-dark mb-0">
    <a className="navbar-brand" href="">
      <img src="app/images/pulpopaul.png" className="rounded mr-1" height="40px;" alt="Logo"/>
      Prodellia
    </a>
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
  </div>
);

export default Layout;