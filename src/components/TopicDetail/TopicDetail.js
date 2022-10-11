import React from 'react';
import './TopicDetail.css';
import Option from "../Option/Option"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const TopicDetail = ({topic}) => {
    const {question,options,correctAnswer} = topic;

    const notify = () => toast(` ${correctAnswer}`);
   
    return (
        <div className='question'>
          
           <div className='answer'> 
            <h4> Quiz.{question} </h4>
            <button>
                <FontAwesomeIcon  onClick={notify} icon={faEye}></FontAwesomeIcon>
                <ToastContainer></ToastContainer>
            </button>
            </div>
            {options.map(option=> <Option key={option.id} option={option}></Option>)}
           
        </div>
    );
};

export default TopicDetail;