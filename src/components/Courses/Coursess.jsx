import React from 'react';
import Course from './Course/Course';

const Coursess = ({ courses }) => {
    console.log(courses);
    return (
        <div className='my-10'>
            {
                !courses ? <p>Loading...</p> :
                    courses.map(crs => <Course key={crs._id} course={crs}></Course>)
            }
        </div>
    );
};

export default Coursess;