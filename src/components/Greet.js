import React from 'react';

const Greet = (props) => {
  return (
    <div>
      <h1>Greet {props.name}</h1>
      <p>{ props.children }</p>
    </div>
  );
};

export default Greet;
