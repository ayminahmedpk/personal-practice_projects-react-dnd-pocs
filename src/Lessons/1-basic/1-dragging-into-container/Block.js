import React from 'react';

import {useDrag} from 'react-dnd';

const Block = () => {

  const[{}, drag] = useDrag(() => ({
    type: "block",
  }))

  const blockClassName    = 'draggable-block';

  return (
    <div
      ref       = {drag} // Similar to callback refs!
      className = {blockClassName}
    >
    </div>
  )
}

export default Block;