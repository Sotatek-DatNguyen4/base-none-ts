import React from 'react';
import HeaderUser from './header-user/index';
import MainNav from './main-nav/index';
import Copyright from './copyright/index';

const Left = () => {
  return (
    <div className="default-layout__left">
      <HeaderUser />
      <MainNav />
      <Copyright />
    </div>
  );
};

export default Left;