import React from 'react';

// Depend components
import Display from './../Display/Display';
import ToolBar from './../ToolBar/ToolBar';


// Temp
import {showState} from './../../actions/actions'
import {connect} from 'react-redux';

// Common styles and reset
import './../../reset.css';
import './../../common.sass';

const App = (props) => {
    return(
        <div className="app">
            <Display />
            <ToolBar />
        </div>
    );
}

export default App;