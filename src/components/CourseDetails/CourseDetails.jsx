import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData()
    const { name, about, picture } = course;
    console.log(course);
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={picture} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">{about}</p>
                        <button className="btn btn-primary">Download PDF</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;