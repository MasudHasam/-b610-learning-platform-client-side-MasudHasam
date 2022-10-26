import React from 'react';

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
                            <button className="btn btn-primary">Get premium access </button>
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </div>
                    <img className='h-64 w-full lg:w-1/2' src={picture} alt="Album" />
                    <div className="card-body  lg:hidden">
                        <h2 className="card-title">{name}</h2>
                        <p>{about}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;