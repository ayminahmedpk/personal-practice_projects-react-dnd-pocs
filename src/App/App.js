

import React from 'react'

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// import Lesson from '../Lessons/1-basic/1-dragging-into-container/Lesson1';
// import Lesson from '../Lessons/1-basic/2-monitoring-drag-and-hover-status/Lesson2';
// import Lesson from '../Lessons/1-basic/3-hooks-triggering-functions/Lesson3';
// import Lesson from '../Lessons/1-basic/4-communication/Lesson4';
// import Lesson from '../Lessons/1-basic/5-distinguishing-nested-hover-drop/Lesson5';
// import Lesson from '../Lessons/1-basic/6-conditional-drag-drop/Lesson6';
import Lesson from '../Lessons/1-basic/7-drag-drop-manager/Lesson7';

import './style/main.css';

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <h1 className='app-heading'>DnD POCs</h1>
      <Lesson/>
    </DndProvider>
    
  )
}

export default App