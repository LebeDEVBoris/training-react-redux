import React from 'react';

import './ToolBar.sass';

import Services from './../Buttons/Services/Services';
import Digits from './../Buttons/Digits/Digits';
import ZeroAndDot from './../Buttons/Digits/ZeroAndDot';
import MathActions from './../Buttons/MathActions/MathActions';

const ToolBar = () => {
    return(
        <div className="toolbar">
            <div className="toolbar__servicedigits">
                <Services /> 
            </div>
            <div className="toolbar__commondigits">
                <Digits digits={[1,2,3,4,5,6,7,8,9]}/>
            </div>
            <div className="toolbar__zeroanddot">
                <ZeroAndDot zeroAndDot={[0, '.']} />
            </div>
            <div className="toolbar__mathactions">
                <MathActions acts={['÷', 'X', '-', '+']}/>
            </div>
        </div>
    );
}

export default ToolBar;