import React from 'react'

import { useDrop } from 'react-dnd'

import Block from './Block'

const BlockContainer = ({id, blockPosition, onDrop}) => {

  const [{isOver}, drop] = useDrop(() => ({
    accept: "block",
    
    // not only initial hover, but triggers repeatedly while hovered
    hover: () => {console.log(`DropTarget: - hover() on ${id}`)},

    // drop implicitly gets drop(item, monitor)
    drop: () => {
      console.log(`DropTarget: - drop() on ${id}`);
      onDrop(id)},
    }
    
  ))

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