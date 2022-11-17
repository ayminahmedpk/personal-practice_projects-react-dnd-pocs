import React from 'react';

import { useState } from 'react';

import { useDrop } from 'react-dnd';

import BlockContainer from './BlockContainer';
import Block from './Block';

const StatefulAncestor = () => {

  const [boxPosition, setBoxPosition] = useState(1)

  return (
    <div className='simple-ancestor'>
        <BlockContainer id={1} onDrop={setBoxPosition}>
            {boxPosition == 1 ? <Block/> : ''}
        </BlockContainer>
        <BlockContainer id={2} onDrop={setBoxPosition}>
            {boxPosition == 2 ? <Block/> : ''}
        </BlockContainer>
    </div>
  )
}

export default StatefulAncestor;