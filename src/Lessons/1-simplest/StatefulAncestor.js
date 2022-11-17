import React from 'react';

import { useState } from 'react';

import BlockContainer from './BlockContainer';
import Block from './Block';

const StatefulAncestor = () => {

  const [boxPosition, setBoxPosition] = useState(1)

  return (
    <div className="simple-ancestor">
        <BlockContainer>
            {boxPosition == 1 ? <Block/> : ''}
        </BlockContainer>
        <BlockContainer>
            {boxPosition == 2 ? <Block/> : ''}
        </BlockContainer>
    </div>
  )
}

export default StatefulAncestor;