import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
     <section className='bonus'>
        <div className='blog'>
          <h3>What is the purpose of React-Router..??</h3>
          <p>
         
Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.

React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.
          </p>
        </div>
        <div className='blog'>
        <h3>How does Context API works..??</h3>
        <p>
            <h6>The React Context API is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on</h6>

            Context API is a React API that can solve a lot of problems that modern applications face related to state management and how they’re passing state to their components. Instead of installing a state management library in our project that will eventually cost our project performance and increase our bundle size, we can easily go with Context API and be fine with it.</p>
        </div>
        <div className='blog'>
         <h3>About of useRef Hook.</h3>
         <p>
            The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.
            useRef is one of the standard hooks provided by React. It will return an object that you can use during the whole lifecycle of the component.The main use case for the useRef hook is to access a DOM child directly.  


         </p>

        </div>
     </section>
     
    );
};

export default Blog;