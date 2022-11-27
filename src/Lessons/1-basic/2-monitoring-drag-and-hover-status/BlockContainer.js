import React from 'react'

import { useDrop } from 'react-dnd'

import Block from './Block'

const BlockContainer = ({id, blockPosition, onDrop}) => {

  const [{isOver}, drop] = useDrop(() => ({
    accept: "block",
    
    // drop implicitly gets drop(item, monitor)
    drop: () => {implementDrop()},
    
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      // You can distinguish whether it is hovered at container or a nested
      // droppable, using:
      // isOver: monitor.isOver(shallow: isTrue),
    })
  }))

  const implementDrop = () => {onDrop(id)}

  const containerClassName = 'simple-droppable-container';
  const overClassName      = '--can-accept';
  const exportClassName    = containerClassName + (isOver? overClassName : '')

  return (
    <div
      ref       = {drop}
      className = {exportClassName}
    >
      {blockPosition == id ? <Block color="blue"/> : ''}
    </div>
  )
}

export default BlockContainer