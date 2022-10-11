import React from 'react';
import Topics from '../Topics/Topics';
import images from '../images/web2.jpg'
import './Home.css'



const Home = () => {
   
   
    
   
    return (
        <div>
       <div style={{ 
        // backgroundImage: `url("images")` 
        backgroundImage:{images}
      }} >
         
       </div>
        <Topics></Topics>

        </div>
    );
};

export default Home;
