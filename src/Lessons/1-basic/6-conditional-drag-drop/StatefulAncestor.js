import React from 'react';

import { useState } from 'react';

import BlockContainer from './BlockContainer';

const StatefulAncestor = () => {

  const [canAccept, setAcceptability] = useState(true)
  const toggleAcceptability = () => {setAcceptability(!canAccept);};
  const [blockPosition, setBoxPosition] = useState(1)

  return (
    <>
      <div className='simple-ancestor'>

          <BlockContainer
            id={1}
            blockPosition={blockPosition}
            onDrop={setBoxPosition}
            canAccept={canAccept}
          />

          <BlockContainer
            id={2}
            blockPosition={blockPosition}
            onDrop={setBoxPosition}
            canAccept={canAccept}
          >  
            <BlockContainer
              id={3}
              blockPosition={blockPosition}
              onDrop={setBoxPosition}
              canAccept={canAccept}
            >
              <BlockContainer
                id={4}
                blockPosition={blockPosition}
                onDrop={setBoxPosition}
                canAccept={canAccept}
              />
            </BlockContainer>
            
          </BlockContainer>

      </div>
      <div className="control-bar">
        <button className="control-bar__button" onClick={toggleAcceptability}>
                {canAccept? 'Disable' : 'Enable'} Drop
          </button>
      </div>
    </>
  )
}

export default StatefulAncestor;