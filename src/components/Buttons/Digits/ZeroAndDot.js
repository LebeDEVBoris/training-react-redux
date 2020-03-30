import React from 'react';

import './ZeroAndDot.sass';

const ZeroAndDot = (props) => {
    const arr = props.zeroAndDot;
    const arrReactElem = arr.map((elem) => {
        const zeroCSSClass = elem === 0 ? 'zeroanddotdigit-zero digit-0' : 'zeroanddotdigit-dot digit-.';
        return(<div className={`zeroanddot-${elem} ${zeroCSSClass}`}>{elem}</div>);
    });

    return(
        arrReactElem
    );
}

export default ZeroAndDot;