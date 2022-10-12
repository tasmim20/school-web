import React, { useState } from 'react';
import './TopicDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'react-bootstrap';




const TopicDetail = (props) => {
    const {question,options,correctAnswer} = props.topic;
  

    const [clicked, setClicked] = useState(false)

    const notify = () => toast.warning(`Correct Answer: ${correctAnswer}`);

   

    const selectOption = (option) =>{
        if(correctAnswer === option){
            toast.success('Well done, Your answer is Correct');
            
        }
        else{
            toast.error('Sorry..!! Incorrect answer');
        }
        setClicked(true);
    }

  

    return (
        <div className='question'>
       
           <div className='answer'> 
        
            <h4>{question} </h4>
            <button className='icon2'>
            <FontAwesomeIcon  onClick={notify} icon={faEye}></FontAwesomeIcon>
                <ToastContainer 
        theme="colored"></ToastContainer>
            </button>
        
           
            </div>
    {
        options.map(option => <p className='flex2' onClick={()=> selectOption (option)}> <Button variant="light">{option}</Button> </p>)
    }   
           
        </div>
    );
};

export default TopicDetail;