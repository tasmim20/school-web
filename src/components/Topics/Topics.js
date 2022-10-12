import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css';
// import Topic from '../Topic/Topic';

const Topics = () => {
   
    const topics= useLoaderData().data;
    console.log(topics);
   
    return (
       
       <div>

        <div className='imgg'>
         <div className='about'>
         <h2 className='title4'>Learn Web Development</h2>
         <p className='about2'>For every programmer curiosity and the urge of being good at something is always the motivation. <br /> . If you know why you want to learn web development, go challenge yourself, that is motivation enough.</p>
         </div>

        </div>
         <div className='topic1'>
            {
                 topics.map(topic => <Topic 
                    key={topic.id}
                     topic={topic}
            ></Topic>)
            }
        </div>
       </div>
      

    );
};

export default Topics;