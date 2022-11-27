import React from 'react';

const Child = ({name, handleClick}) => {
  console.log('child render');
  return (
    <div>
      Hello {name}
    </div>
  );
};

export default React.memo(Child)
