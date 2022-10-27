import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../Authentication/Login';
import SignUp from '../Authentication/SignUp';
import Blog from '../Blog/Blog';
import CheckOut from '../CheckOut/CheckOut';
import Common from '../Common/Common';
import CourseDetails from '../CourseDetails/CourseDetails';
import DarkTheme from '../DarkTheme/DarkTheme';
import FAQ from '../FAQ/FAQ';
import Home from '../Home/Home';
import Main from '../Layout/Main';
import PrivetRout from '../PrivetRout/PrivetRout';
import './Routes.css'


const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            errorElement: <p>404!<br />error</p>,
            element: <Main></Main>,
            children: [
                {
                    path: '/home',
                    element: <Home></Home>
                },
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/courses',
                    element: <Common></Common>
                },
                // {
                //     path: `/courses/:id`,
                //     loader: (params) => {
                //         return fetch(`https://b610-learning-platform-assignment-server.vercel.app/courses/${params.id}`)
                //     },
                //     element: <Common></Common>
                // },
                {
                    path: '/blog',
                    element: <Blog></Blog>
                },
                {
                    path: '/faq',
                    element: <FAQ></FAQ>
                },
                {
                    path: '/darktheme',
                    element: <DarkTheme></DarkTheme>
                },
                {
                    path: '/checkout/:id',
                    element: <PrivetRout><CheckOut></CheckOut></PrivetRout>,
                    loader: async ({ params }) => {
                        return fetch(`https://b610-learning-platform-assignment-server.vercel.app/course/${params.id}`);
                    },
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/signup',
                    element: <SignUp></SignUp>
                },
                {
                    path: `/course/:id`,
                    element: <CourseDetails></CourseDetails>,
                    loader: async ({ params }) => {
                        return fetch(`https://b610-learning-platform-assignment-server.vercel.app/course/${params.id}`);
                    },
                }

            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={router}>
            </RouterProvider>
        </div>
    );
};

export default Routes;