import React from 'react';

import {connect} from 'react-redux';

import {clearAll} from './../../../actions/actions';

import './Services.sass';

const Services = (props) => {

    return(
        <>
            <div className='digit-ac service-digit' onClick={() => props.onClearAll()}>
                AC
            </div>
            <div className="digit-± service-digit" onClick={() => props.onSetMinusValue()}>
                ±
            </div>
            <div className="digit-% service-digit" onClick={() => props.onShowPercentResult()}>
                %
            </div>
        </>
    );
}

const mapStateToProps = () => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClearAll: () => dispatch(clearAll()),
        onSetMinusValue: () => dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Services);