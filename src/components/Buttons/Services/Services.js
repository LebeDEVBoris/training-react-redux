import React from 'react';

import './Services.sass';

const Services = (props) => {
    
    const arr = props.titleServiceButton;

    const arrReactElem = arr.map((elem) => {
        return(<div key={elem} className={`digit-${elem} service-digit`}>{elem}</div>);
    });

    return(
        arrReactElem
    );
}

export default Services;