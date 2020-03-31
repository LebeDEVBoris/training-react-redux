import React from 'react';
import {connect} from 'react-redux';

import './Display.sass';

const Display = (props) => {
    return(
        <div className="display">
            <div className="display__inputeddata">
                {props.inputeddata}
            </div>
            <div className="display__result">
                {props.result}
            </div>
        </div>
    );
}

const mapStateToProps = ({inputeddata, result}) => {
    return {
        inputeddata, result
    };
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);