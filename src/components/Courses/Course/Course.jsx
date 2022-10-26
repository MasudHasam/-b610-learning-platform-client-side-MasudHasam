import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { name, about, picture } = course;
    return (
        <div>
            <div className='grid grid-cols-1 mb-8'>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <div className="card-body w-1/2 hidden lg:block">
                        <h2 className="card-title mb-6">{name}</h2>
                        <p>{about.slice(0, 100)}...</p>
                        <div className="card-actions justify-start mt-7">
                            <Link to='/checkout' className="btn btn-primary">Get premium access </Link>
                            <Link to='/coursedetails'> <button className="btn btn-primary">Details</button></Link>
                        </div>
                    </div>
                    <img className='h-64 w-full lg:w-1/2' src={picture} alt="Album" />
                    <div className="card-body  lg:hidden">
                        <h2 className="card-title">{name}</h2>
                        <p>{about}</p>
                        <div className="card-actions justify-start flex flex-row gap-2">
                            <Link to='/checkout' className="btn btn-primary">Get premium access </Link>
                            <Link to='/coursedetails'> <button className="btn btn-primary">Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;