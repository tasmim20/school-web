import React from 'react';
import './Topic.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Topic = ({topic}) => {
    const {name, logo, id} = topic;
    return (
        <div className='topic' >
            <img src={logo}></img>
           <div className='flex'>
           <h3 className='name'>{name}</h3>
           <Link to={`/topic/${id}`}>
           <button className='button'>
        Start Practise
           <FontAwesomeIcon className='icon' icon={faArrowRight}></FontAwesomeIcon>
           </button></Link>
           </div>
            
        </div>
    );
};

export default Topic;
