import React from 'react';

import { useState } from 'react';

import BlockContainer from './BlockContainer';

const StatefulAncestor = () => {

  const [blockPosition, setBoxPosition] = useState(1)

  return (
    <div className='simple-ancestor'>

        <BlockContainer
          id={1}
          blockPosition={blockPosition}
          onDrop={setBoxPosition}
        />

        <BlockContainer id={2} blockPosition={blockPosition} onDrop={setBoxPosition}>
          
          <BlockContainer id={3} blockPosition={blockPosition} onDrop={setBoxPosition} >
            <BlockContainer id={4} blockPosition={blockPosition} onDrop={setBoxPosition}/>
          </BlockContainer>
          
        </BlockContainer>

    </div>
  )
}

export default StatefulAncestor;