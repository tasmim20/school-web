import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicDetail from '../TopicDetail/TopicDetail';

const TopicDetails = () => {
    const quizes = useLoaderData().data.questions;
    console.log(quizes);
    
    console.log(quizes);
    return (
        <div>
            {
               quizes.map(topic => <TopicDetail
               topic={topic}
               ></TopicDetail>)
            }
         
        </div>
    );
};

export default TopicDetails;