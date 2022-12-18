import React from 'react'

import { useEffect } from 'react';
import { useState } from 'react';

import { useDragDropManager } from 'react-dnd';

const DragDropManager = (props) => {

  const dragDropManager = useDragDropManager();
  const monitor = dragDropManager.getMonitor();

  const [isDragging, setDragging] = useState(false);
  const [offset, setOffset] = useState(null);

  // console.log(monitor);

  useEffect(
    () => monitor.subscribeToStateChange(
      () => {
        const monitorIsDragging = monitor.isDragging();
        setDragging(monitorIsDragging);
      }
    ),
    [monitor],
  );

  useEffect(
    () => monitor.subscribeToOffsetChange(
      () => {
      const monitorOffset = monitor.getClientOffset();
      setOffset(monitorOffset);
      }
    ),
    [monitor],
  );


  return (
    <>
      <p>Is a drag operation in progress?</p>
      <p><strong>isDragging: {isDragging ? 'True' : 'False'}</strong></p>
      
      <br />

      <p>The offset of the item being dragged (cursor, essentially)</p>
      <strong>
        <p>Offset: {offset? `x: ${offset.x}, y: ${offset.y}` : 'Not dragging'}</p>
      </strong>

      <br />
      <p>
        For more properties, console.log out the the dragDropManager.getMonitor()
        item and inspect it.
      </p>
      
    </>
  )
}

export default DragDropManager;