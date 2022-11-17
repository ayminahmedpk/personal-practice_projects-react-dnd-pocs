import React from 'react'

import { useDrop } from 'react-dnd'

const BlockContainer = (props) => {

  const [{isOver}, drop] = useDrop(() => ({
    accept: "block",
    // drop: (item) => {logDrop(item)},
    drop: () => {implementDrop()},
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    })
  }))

  const implementDrop = () => {props.onDrop(props.id)}

  const containerClassName = 'simple-droppable-container';
  const overClassName      = '--can-accept';
  const exportClassName    = containerClassName + (isOver? overClassName : '')

  return (
    <div
      ref       = {drop}
      className = {exportClassName}
      // className = {containerClassName}
    >
      {props.children}
    </div>
  )
}

export default BlockContainer