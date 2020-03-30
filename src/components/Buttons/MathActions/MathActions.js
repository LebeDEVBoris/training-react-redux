import React from 'react';

import './MathActions.sass';

const MathActions = (props) => {
    const arr = props.acts;
    const arrReactElem = arr.map((elem) => {
        return (<div className={`mathaction mathaction-${elem}`}>{elem}</div>);
    });

    return(
        arrReactElem
    );
}

export default MathActions;