import React, { useContext } from 'react';

import { CountContex } from './ContextParent';

const ChildA = () => {
  console.log('ChildA Render');
  return (
    <div>
        ChildA
        <ChildB />
    </div>
  )
}

export const MemoizedChilA = React.memo(ChildA)

export const ChildB = () => {
  console.log('ChildB Render');
  return (
    <div>
        ChildB
        <ChildC />
    </div>
  )
}

export const ChildC = () => {
  const count = useContext(CountContex);
  console.log('ChildC Render');
  return (
    <div>
        ChildC = {count}
    </div>
  )
}
