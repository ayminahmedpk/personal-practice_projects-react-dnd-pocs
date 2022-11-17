

import React from 'react'

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Lesson1 from '../Lessons/1-simplest/Lesson1';

import './style/main.css';

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <h1 className='app-heading'>DnD POCs</h1>
      <Lesson1/>
    </DndProvider>
    
  )
}

export default App