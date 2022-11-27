import React from 'react'

import { useDrop } from 'react-dnd'

import Block from './Block'

const BlockContainer = ({id, blockPosition, onDrop}) => {

  const [{}, drop] = useDrop(() => ({
    accept: "block",
    drop: () => {onDrop(id)},
  }))

  const containerClassName = 'simple-droppable-container';

  return (
    <div
      ref       = {drop}
      className = {containerClassName}
    >
      {blockPosition == id ? <Block/> : ''}
    </div>
  )
}

export default BlockContainer