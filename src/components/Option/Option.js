import React from 'react';
import './Option.css';

const Option = ({option}) => {
    
    return (
        <div className='option'>
            

            <p className='quiz'><input type="radio" name="" id="" /> {option}</p>
        </div>
    );
};

export default Option;