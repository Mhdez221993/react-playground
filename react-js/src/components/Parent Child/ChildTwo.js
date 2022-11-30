import React from 'react';

const ChildTwo = ({name}) => {
  const date = new Date()
  console.log('ChildTwo render');
  return (
    <div>
      Hello {name} {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
    </div>
  )
}

export default React.memo(ChildTwo)
