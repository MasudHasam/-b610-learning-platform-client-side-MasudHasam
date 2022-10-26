import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../sheared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;