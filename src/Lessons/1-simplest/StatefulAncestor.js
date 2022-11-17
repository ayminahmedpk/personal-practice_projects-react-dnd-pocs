import React from 'react';

import BlockContainer from './BlockContainer';
import Block from './Block';

const StatefulAncestor = () => {
  return (
    <div className="simple-ancestor">
        <BlockContainer>
            <Block/>
        </BlockContainer>
        <BlockContainer/>
    </div>
  )
}

export default StatefulAncestor;