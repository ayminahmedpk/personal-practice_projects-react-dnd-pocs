import React from 'react';

import {useDrag} from 'react-dnd';

const Block = () => {

  const[{isDragging}, drag] = useDrag(() => ({
    
    type: "block",

    item: () => {
      console.log('DragSource: - item()');
      return {}; // Returning object is necessary if item is explicit
    },

    end: () => {
      console.log('Dragsource: - end()')
    }
      
  }))


  return (
    <div
      ref       = {drag}
      className = 'draggable-block'
    >
    </div>
  )
}

export default Block;