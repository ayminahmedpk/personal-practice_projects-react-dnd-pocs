import React from 'react'

import { useDrop } from 'react-dnd'

import Block from './Block'

const BlockContainer = ({id, blockPosition, onDrop}) => {

  const [{isOver}, drop] = useDrop(() => ({
    accept: "block",
    
    // not only initial hover, but triggers repeatedly while hovered
    hover: (item) => {console.log(`DropTarget ${id}: - hover(): `, item)},

    // drop implicitly gets drop(item, monitor)
    drop: () => {
      console.log(`DropTarget: - drop() on ${id}`);
      onDrop(id);
      // Not necessary
      return {dropTarget: 'Hello'};
    },
    
  }))

  return (
    <div
      ref       = {drop}
      className = 'simple-droppable-container'
    >
      {blockPosition == id ? <Block color="blue"/> : ''}
    </div>
  )
}

export default BlockContainer