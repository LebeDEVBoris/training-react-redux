import React from 'react';

// Depend components
import Display from './../Display/Display';
import ToolBar from './../ToolBar/ToolBar';

// Common styles and reset
import './../../reset.css';
import './../../common.sass';

const App = () => {
    return(
        <div className="app">
            <Display />
            <ToolBar />
        </div>
    );
}

export default App;