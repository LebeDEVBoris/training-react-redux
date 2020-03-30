import React from 'react';

import './Digits.sass';

const Digits = (props) => {

    const arr = props.digits;
    const arrReactElem = arr.map((elem) => {
        return(<div className={`digit-${elem} common-digit`}>{elem}</div>);
    });
    console.log(arrReactElem);
    return(
        arrReactElem
    );
}

export default Digits;