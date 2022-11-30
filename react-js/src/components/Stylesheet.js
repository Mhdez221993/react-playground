import './myStyle.css';

import React from 'react';

const Stylesheet = (props) => {
  let className = props.primary ? 'primary' : ''

  return (
    <div>
      <h1 className={`${className} font-xl`}>Style components</h1>
    </div>
  );
};

export default Stylesheet;
