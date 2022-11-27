import React from 'react';

const Child = ({children, name}) => {
  console.log('child render');
  return (
    <div>
      {children} {name}
    </div>
  );
};

export default React.memo(Child)
