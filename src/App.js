import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Courses from "./components/Courses/Courses";
import Home from "./components/Home/Home";
import FAQ from "./components/FAQ/FAQ";
import Main from "./layout/Main/Main";
import Error from "./components/Error/Error";
import CourseDetails from "./components/CourseDetails/CourseDetails";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Proceed from "./components/Proceed/Proceed";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AllCourse from "./components/AllCourse/AllCourse";

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
          loader: () => fetch("https://learning-hub-server-pi.vercel.app/data"),
          children: [
            {
              path: "/courses",
              loader: () =>
                fetch("https://learning-hub-server-pi.vercel.app/data"),
              element: <AllCourse></AllCourse>,
            },
            {
              path: ":id",
              element: <CourseDetails></CourseDetails>,
              loader: ({ params }) =>
                fetch(
                  `https://learning-hub-server-pi.vercel.app/data/courses/${params.id}`
                ),
            },
          ],
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
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/proceed/:id",
          element: (
            <PrivateRoute>
              <Proceed></Proceed>
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(
              `https://learning-hub-server-pi.vercel.app/data/courses/${params.id}`
            ),
        },
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
