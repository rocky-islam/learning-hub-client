import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Courses from './components/Courses/Courses';
import Home from './components/Home/Home';
import FAQ from './components/FAQ/FAQ';
import Main from './layout/Main/Main';
import Error from './components/Error/Error';
import CourseDetails from './components/CourseDetails/CourseDetails';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/courses",
          element: <Courses></Courses>,
          loader: () => fetch("http://localhost:5000/data"),
        },
        {
          path: "/courses/:id",
          element: <CourseDetails></CourseDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/data/courses/${params.id}`),
        },
        {
          path: "/faq",
          element: <FAQ></FAQ>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ],
    },
    {
      path: "*",
      element: <Error></Error>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
