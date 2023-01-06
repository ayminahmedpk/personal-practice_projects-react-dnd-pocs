import React from 'react'

import { useState } from 'react'

import { useDrag, useDrop } from 'react-dnd'

import Block from './Block.js'

// template copied from Lesson1-6

const BlockContainer = ({id, blockPosition, onDrop, children, canAccept=true}) => {

  const [{isOver}, drop] = useDrop(() => ({
      accept: "block",
      drop: (item, monitor) => {if (monitor.isOver({shallow:true})) {onDrop(id)}},
      collect: (monitor) => ({
        isOver: (monitor.isOver({shallow:true}) && monitor.canDrop()) ,
      }),
      canDrop: () => canAccept,
    }),
    [canAccept],
  )

  const [{isDragging}, drag] = useDrag({
    type: 'block-container',
    item: {name: 'block-container'},
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    })
  })

  // const connectElement = (element) => {
  //   drop(element);
  //   drag(element);
  // }

  const containerClassName = 'simple-droppable-container';
  const overClassName      = ' can-accept';
  const exportClassName    = containerClassName + (isOver? overClassName : '')

  // "drag" and "drop" are "connector functions". And 'ref' attribute, if it
  // sees a function, simply passes the element as an argument to the function
  // and executes it. So, by default, when you put 'drag' or 'drop' onto the
  // ref attribute, you are just passing the element into the drag function or
  // drop function, and executing it.

  // So to add multiple connector functions to one element, instead of running
  // that element through one function (eg: 'drag'), you can run that element
  // through MULTIPLE functions.

  // An easy way to do this is to put the connector functions inside a holding
  // function that you then pass to the ref attribute. Holding function gets
  // the element, and you run that element through both the drag and drop
  // functions.

  // There's an even easier way to do this (done below, inline):

  // Block container elements can not only accept elements dropped into them,
  // but can also be dragged around (though at the moment it doesn't really
  // amount to much).

  return (
    <div
      // ref       = {drop} // classic
      // ref       = {connectElement} // multiple elements
      ref       = {element => {drag(element); drop(element);}} // inline method
      className = {exportClassName}
    >
      {children ? children : ''}
      {blockPosition == id ? <Block/> : ''}
    </div>
  )
}

export default BlockContainer