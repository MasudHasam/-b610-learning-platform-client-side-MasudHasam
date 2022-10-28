import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { UserContext } from '../../AuthContext/AuthContext';
import Coursess from '../Courses/Coursess';
import SideNav from '../sheared/SideNav/SideNav';

const Common = () => {
    const { category, setCategory, id, setId } = useContext(UserContext);
    // const [id, setId] = useState([1]);
    const [courses, setCourses] = useState();



    useEffect(() => {
        fetch(`https://b610-learning-platform-assignment-server.vercel.app/category`)
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])


    const hadelDynamicRout = (categoryId) => {
        const id = categoryId;
        setId(id)
    }


    useEffect(() => {
        async function fetchMyAPI() {
            let response = await fetch(`https://b610-learning-platform-assignment-server.vercel.app/courses/${id}`)
            response = await response.json()
            setCourses(response)
        }

        fetchMyAPI()
    }, [id])

    return (
        <div>
            <div className='gridColumns w-11/12 mx-auto'>
                <div className='lg:h-screen sticky top-20'>
                    <SideNav hadelDynamicRout={hadelDynamicRout}></SideNav>
                </div>
                <div>
                    <Coursess courses={courses}></Coursess>
                </div>
            </div>
        </div>
    );
};

export default Common;