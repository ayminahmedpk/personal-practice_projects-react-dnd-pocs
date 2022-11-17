import React from 'react'

import { useDrop } from 'react-dnd'

const BlockContainer = (props) => {

  const [{isOver}, drop] = useDrop(() => ({
    accept: "block",
    drop: (item) => {logDrop(item)},
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      // isOver: monitor.isOver(),
    })
  }))

  const logDrop = (item) => {console.log(item, 'was dropped on', this, ' !');}

  const containerClassName = 'simple-droppable-container';
  const overClassName = '--can-accept';
  const exportClassName = containerClassName + (isOver? overClassName : '')

  return (
    <div
      className={exportClassName}
      ref={drop}
    >
      {props.children}
    </div>
  )
}

export default BlockContainer