import React from 'react';

const Circle = props =>{
    return(
        <div className='container'>
            <p className='circle' id ='circle1'>{props.circle0}</p>
            <p className='circle' id ='circle2'>{props.circle1}</p>
            <p className='circle' id ='circle3'>{props.circle2}</p>
            <p className='circle' id ='circle4'>{props.circle3}</p>
            <p className='circle' id ='circle5'>{props.circle4}</p>
        </div>
    )
};

export default Circle;