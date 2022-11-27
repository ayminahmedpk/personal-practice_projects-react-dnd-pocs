import React from 'react';

import {useDrag} from 'react-dnd';

const Block = () => {

  const[{isDragging}, drag] = useDrag(() => ({
    
    type: "block",

    item: { dragSource: "Hi" },

    // Alternate syntax
    // item: () => {
    //   // your code
    //   return { dragSource: "Hi"};
    // },

    
    
    end: (item, monitor) => {
      // Drag item itself
      console.log(`DragSource: -  end()`, item)

      
      // Just drop effect, unless drop() returns an object, which gets merged
      // But null if drop not collected by compatible target
      console.log(monitor.getDropResult());
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