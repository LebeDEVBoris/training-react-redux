import React from 'react';
import {
    inputedDigit
} from './../../../actions/actions';

import './Digits.sass';
import { connect } from 'react-redux';

const Digits = (props) => {

    const arr = props.digits;
    const arrReactElem = arr.map((elem) => {
        return(
            <div 
            key={elem} 
            className={`digit-${elem} common-digit`}
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
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Digits);