import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../sheared/Footer/Footer';
import Navbar from '../sheared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <div className='sticky top-0 z-50'>
                <Navbar></Navbar>
            </div>
            <div className='relative'>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;