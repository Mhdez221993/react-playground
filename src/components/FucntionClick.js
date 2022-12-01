import React from 'react';

const FucntionClick = () => {
  const handleClick = () => {
    console.log('button clicked in function component');
  }

  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default FucntionClick;
