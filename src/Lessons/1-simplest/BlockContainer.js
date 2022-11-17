import React from 'react'

import { useDrop } from 'react-dnd'

import Block from './Block'

const BlockContainer = ({id, blockPosition, onDrop}) => {

  const [{isOver}, drop] = useDrop(() => ({
    accept: "block",
    // drop: (item) => {logDrop(item)},
    drop: () => {implementDrop()},
    collect: (monitor) => ({
      isOver: monitor.isOver(),
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
      {blockPosition == id ? <Block/> : ''}
    </div>
  )
}

export default BlockContainer