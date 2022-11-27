import React from 'react'

import { useDrop } from 'react-dnd'

import Block from './Block'

const BlockContainer = ({id, blockPosition, onDrop, children}) => {

  const [{isOver}, drop] = useDrop(() => ({
    accept: "block",
    
    drop: (item, monitor) => {
      if (monitor.isOver({shallow:true})) {
        onDrop(id)
      }
    },
    
    collect: (monitor) => ({
      isOver: monitor.isOver({shallow:true}),
    }),

  }))

  // const implementDrop = () => {onDrop(id)}

  const containerClassName = 'simple-droppable-container';
  const overClassName      = ' can-accept';
  const exportClassName    = containerClassName + (isOver? overClassName : '')

  return (
    <div
      ref       = {drop}
      className = {exportClassName}
    >
      {children ? children : ''}
      {blockPosition == id ? <Block color="blue"/> : ''}
    </div>
  )
}

export default BlockContainer