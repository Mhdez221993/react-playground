import React, { useState } from 'react';

import useDocumentTitle from './useDocumentTitle';

const DocTitleOne = () => {
  const [count, setCount] = useState(0)
  useDocumentTitle(count)

  return (
    <div>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
    </div>
  );
};

export default DocTitleOne;