import React from 'react';
import {connect} from 'react-redux';

import {inputedMathAction, showResult, showState} from './../../../actions/actions';

import './MathActions.sass';

const MathActions = (props) => {
    const arr = props.acts;
    const arrReactElem = arr.map((elem) => {
        return (      
            <div 
            key={elem} 
            className={`mathaction mathaction-${elem}`}
            onClick={() => props.onMathActionInputed(elem)}
            >
                {elem}
            </div>
        );
    });

    return(
        <>
        {arrReactElem}
            <div
            key={'='}
            className={'mathaction mathaction-='}
            onClick={() => props.onShowResult()}
            >
                =
            </div>
            <div onClick={() => props.onShowState()}>
                getState
            </div>
        </>
    );
}

const mapStateToProps = () => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        onMathActionInputed: (mathAction) => dispatch(inputedMathAction(mathAction)),
        onShowResult: () => dispatch(showResult()),
        onShowState: () => dispatch(showState())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MathActions);