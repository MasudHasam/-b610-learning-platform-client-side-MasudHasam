import React from 'react';
import image from '../../../images/logo (2).png'
import { BsCartCheck } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="navbar bg-orange-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to='/home'>Home</NavLink></li>
                        <li><NavLink to='/courses'>Courses</NavLink></li>
                        <li><NavLink to='/blog'>Blog</NavLink></li>
                        <li><NavLink to='/faq'>FAQ</NavLink></li>
                        <li><NavLink to='/darktheme'>Dark Mod</NavLink></li>
                        <h1>All Courses</h1>

                    </ul>
                </div>

                <Link to='/'><img className='w-20 h-10' src={image} alt="" /></Link>
                <Link to='/'><h1 className='font-bold text-gray-700 hidden lg:block'>Learn Varity Tech</h1></Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><NavLink to='/home'>Home</NavLink></li>
                    <li><NavLink to='/courses'>Courses</NavLink></li>
                    <li><NavLink to='/blog'>Blog</NavLink></li>
                    <li><NavLink to='/faq'>FAQ</NavLink></li>
                    <li><NavLink to='/darktheme'>Dark Mod</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <BsCartCheck className='mr-2 w-6 h-6'></BsCartCheck>
                <button className='mr-2'><img src="" alt="profile" /></button>
                <NavLink to='/signup' className='mr-2'>sign up</NavLink>
                <NavLink to='/login' className='mr-2'>Log In</NavLink>
            </div>
        </div>
    );
};

export default Navbar;