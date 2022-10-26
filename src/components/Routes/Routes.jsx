import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../Authentication/Login';
import SignUp from '../Authentication/SignUp';
import Blog from '../Blog/Blog';
import Common from '../Common/Common';
import Coursess from '../Courses/Coursess';
import DarkTheme from '../DarkTheme/DarkTheme';
import FAQ from '../FAQ/FAQ';
import Home from '../Home/Home';
import Main from '../Layout/Main';
import SideNav from '../sheared/SideNav/SideNav';
import './Routes.css'


const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
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
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/signup',
                    element: <SignUp></SignUp>
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