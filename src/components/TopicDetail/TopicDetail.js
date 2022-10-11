import React from 'react';
import './TopicDetail.css';
import Option from "../Option/Option"


const TopicDetail = ({topic}) => {
    const {question,options,correctAnswer} = topic;

   
    return (
        <div className='question'>
            {/* <p><small>{correctAnswer}</small></p> */}
            <h4><ol><li> Quiz.{question}</li></ol> </h4>
            {options.map(option=> <Option key={option.id} option={option}></Option>)}
           
        </div>
    );
};

export default TopicDetail;