import React from 'react';

const Hello = () => {
  return React.createElement(
    'div',
    {id: 'hello', className: 'dummy-class'},
    React.createElement('h1', null, 'Hello component')
  )
};

export default Hello;
