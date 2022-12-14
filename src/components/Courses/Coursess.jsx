import React from 'react';
import { Component } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../AuthContext/AuthContext';
import Course from './Course/Course';

const Coursess = ({ courses }) => {
    const { category, id } = useContext(UserContext);
    const name = category?.find(ctg => ctg.categoryId === id)
    return (
        <div className='my-0  lg:my-10'>
            <h1 className='font-bold text-slate-500 italic text-3xl'>{name?.name}</h1>
            {
                !courses ? <p><progress className="progress w-56"></progress></p> :
                    courses.map(crs => <Course key={crs._id} course={crs}></Course>)
            }
        </div>
    );
};

export default Coursess;