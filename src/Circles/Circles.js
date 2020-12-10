import React from 'react';

const Circle = props =>{
    return(
        <div className='mainBlock'>
            <p className='circle' id ='circle1'>{props.circle1}</p>
            <p className='circle' id ='circle2'>{props.circle2}</p>
            <p className='circle' id ='circle3'>{props.circle3}</p>
            <p className='circle' id ='circle4'>{props.circle4}</p>
            <p className='circle' id ='circle5'>{props.circle5}</p>
        </div>
    )
};

export default Circle;