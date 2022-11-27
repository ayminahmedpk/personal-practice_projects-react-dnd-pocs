import React from 'react';

import {useDrag} from 'react-dnd';

const Block = () => {

  const[{isDragging}, drag] = useDrag(() => ({
    
    type: "block",
    
    collect: (monitor)  => ({
      isDragging: monitor.isDragging()
    }),
      
  }))

  const blockClassName    = 'draggable-block';
  const draggingClassName = '--dragging';
  const exportClassName   = blockClassName + (isDragging? draggingClassName : '')

  return (
    <div
      ref       = {drag}
      className = {exportClassName}
    >
    </div>
  )
}

export default Block;