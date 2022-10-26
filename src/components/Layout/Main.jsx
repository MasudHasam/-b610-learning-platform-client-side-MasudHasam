import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../sheared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;