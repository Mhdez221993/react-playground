import React from 'react';

function MemoComp({name}) {
  console.log('Rendering Memo component');
  return (
    <div>MemoComp</div>
  )
}

export default React.memo(MemoComp)
