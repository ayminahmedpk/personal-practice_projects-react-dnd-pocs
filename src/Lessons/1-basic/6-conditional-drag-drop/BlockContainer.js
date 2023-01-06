import React from 'react'

import { useState } from 'react'

import { useDrop } from 'react-dnd'

import Block from './Block.js'

const BlockContainer = ({id, blockPosition, onDrop, children, canAccept=true}) => {

  const [{isOver}, drop] = useDrop(() => ({
      accept: "block",
      
      drop: (item, monitor) => {
        if (monitor.isOver({shallow:true})) {
          onDrop(id)
        }
      },
      
      collect: (monitor) => ({
        // isOver & hover work even if canDrop returns false, check explicitly
        isOver: (monitor.isOver({shallow:true}) && monitor.canDrop()) ,
      }),

      canDrop: () => canAccept,

      // canDrop(item, monitor) -
      // so you can choose dropping based on dragged item object's properties,
      // or other drag statuses in the program based on monitor

    }),
    [canAccept],
  )

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
      {blockPosition == id ? <Block/> : ''}
    </div>
  )
}

export default BlockContainer