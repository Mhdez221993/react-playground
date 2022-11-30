import React, { forwardRef } from 'react'

// function ForwardingRefInput() {
//   return (
//     <div>
//       <input type="text" />
//     </div>
//   )
// }

const ForwardingRefInput = forwardRef((props, ref) => {
    return (
      <div>
        <input type="text" ref={ref} />
      </div>
    )
  }
)

export default ForwardingRefInput
