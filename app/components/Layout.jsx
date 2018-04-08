import React from 'react';
import NavBar from './navbar';

const Layout = (BodyComponent) => () => (
  <div>
    <NavBar {...this.props} />
    <div className="container">
      <BodyComponent {...this.props} />
    </div>
  </div>
);

export default Layout;
