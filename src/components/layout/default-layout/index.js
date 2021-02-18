import React from 'react';
import Left from './left/index';
import Right from './right/index';
import './style.scss';

const DefaultLayout = (props) => {
  return (
    <div className="default-layout">
      <Left />
      <Right>{props.children}</Right>
    </div>
  );
};

export default DefaultLayout;