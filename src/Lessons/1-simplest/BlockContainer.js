import React from 'react'

const BlockContainer = (props) => {
  return (
    <div className="simple-droppable-container">
      {props.children}
    </div>
  )
}

export default BlockContainer