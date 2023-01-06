import React from 'react';

import { useState } from 'react';

import {useDrag} from 'react-dnd';

const Block = () => {

  const [dragAllowed, setDragAllowed] = useState(true)
  const toggleDragAllowed = () => {setDragAllowed(!dragAllowed);};
  
  // useDrag is a hook, it won't update with the component
  // but we want it to update when we change dragAllowed,
  // so we must add that property in the dependancy array

  const[{isDragging}, drag] = useDrag(() => ({
    
      type: "block",
      
      collect: (monitor)  => ({
        isDragging: monitor.isDragging()
      }),

      canDrag: () => dragAllowed,
      
    }),
    [dragAllowed], // Needed
  )


  const blockClassName    = 'draggable-block';
  const draggingClassName = '--dragging';
  const exportClassName   = blockClassName + (isDragging? draggingClassName : '')

  return (
    <>
      <div
        ref       = {drag}
        className = {exportClassName}
      >
        <button className="draggable-block__button" onClick={toggleDragAllowed}>
              {dragAllowed? 'Disable' : 'Enable'} Drag
          </button>
      </div>
    </>
  )
}

export default Block;