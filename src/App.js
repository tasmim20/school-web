import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import TopicDetails from './components/TopicDetails/TopicDetails';


function App() {
  const router = createBrowserRouter([

    {
      path:'/',
      element:<Main></Main>,
      children: [
        {
          path:'/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },
        {
          path:'topics',
          loader: async() => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
    
        },
        element:<Topics></Topics>
      },
        {
          path:'/topic/:topicId',
          loader: async({params}) => {
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
    
        },
        element:<TopicDetails></TopicDetails>
      },
        {
          path:'statistics',
          element:<Statistics></Statistics>
        },
        {
          path:'blog',
          element:<Blog></Blog>
        }
      ]
    }

  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
