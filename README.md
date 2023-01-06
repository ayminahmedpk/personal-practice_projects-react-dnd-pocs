

A project to understand the react-dnd library. View project-details folder for
version history, notes, etc.

Use lesson 5 as an example for a clean usage pattern.

Library at a glance:

  - Can make react components draggable (useDrag hook)

  - Can make react components droppable into (useDrop hook)

  - Can make same component both draggable and droppable (both hooks)

  - The component is not being dragged and passed to droppable component, even
    though it visually seems so. The only data that is being passed to the
    droppable component is what is provided to the useDrag hook when setting
    it up.

  - Can make a droppable component accept only certain types of components.

  - You can monitor whether a component is being dragged, or an acceptable
    component is being hovered over a droppable component, to conditionally
    render them differently. The monitoring is done by providing additional
    props to your component you can use in the JSX (like in old Redux).

  - You can additionally fire off functions when a component starts being
    dragged, when it is dropped, or when an acceptable component is hovered over
    a droppable component.

  - You can send data from the droppable component back to the draggable
    component at the end of the drag process (to vary the behavior based on what
    component an item was dropped into).

  - You can temporarily disable dragging or dropping into a component.

  - There are a few optimization options available as well.

  - You can track the coordinates of the items being dragged.

  - You can display a custom component for when the item is being dragged to
    represent it

  - You can monitor the overal state of the drag/drop library (as any item
    being dragged, its coordinates, etc).


  
Function triggering points / hooks (not props to monitor and conditionally
render):
  useDrag:
  	- item in useDrag as a function
  	- end in useDrag
  useDrop:
  	- hover (function) - called when an item is hoved (shallowable)
  	- drop (function) - called when an item is dropped


Collect function - Monitoring actions / establishing communication:
  useDrag:
    * canDrag
    * isDragging
    * getItem / getItemType
    * getDropResult
    * didDrop
    * functions to get coordinates
  useDrop:
    * canDrop
    * isOver
    * getItem / getItemType
    * getDropResult
    * didDrop
    * functions to get coordinates
  dragLayer:
    * idDragging
    * getItem / getItemType
    * functions to get coordinates