import React from 'react';
import {
    inputedDigit
} from './../../../actions/actions';

import {connect} from 'react-redux';


import './ZeroAndDot.sass';

const ZeroAndDot = (props) => {
    const arr = props.zeroAndDot;
    const arrReactElem = arr.map((elem) => {
        const zeroCSSClass = elem === 0 ? 'zeroanddotdigit-zero digit-0' : 'zeroanddotdigit-dot digit-.';
        return(
            <div 
            key={elem} 
            className={`zeroanddot-${elem} ${zeroCSSClass}`}
            onClick={() => props.onInputedDigit(elem)}
            >
                {elem}
            </div>
        );
    });

    return(
        arrReactElem
    );
}

const mapStateToProps = () => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInputedDigit: (digit) => dispatch(inputedDigit(digit))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ZeroAndDot);