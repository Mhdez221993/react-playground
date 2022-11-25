import React from 'react';

const Greet = (props) => {

  const {name, children} = props

  return (
    <div>
      <h1>Greet {name}</h1>
      <p>{ children }</p>
    </div>
  );
};

export default Greet;
