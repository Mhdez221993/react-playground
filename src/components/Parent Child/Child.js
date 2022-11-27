import React from 'react';

const Child = () => {
  console.log('child render');
  return (
    <div>
      Chil component
    </div>
  );
};

export default React.memo(Child)
