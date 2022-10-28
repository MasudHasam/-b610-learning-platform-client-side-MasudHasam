import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CheckOut = () => {
    const data = useLoaderData()
    const { name, _id, about, picture } = data;
    return (
        <div className='mb-6'>
            <div className="card w-96 mx-auto
             bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="card-actions justify-end">
                        <Link to='/courses' className="btn btn-square btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </Link>
                    </div>
                    <img src={picture} alt="" />
                    <p className='text-5xl font-bold italic text-orange-300'>{name}</p>
                    <small>{about}</small>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;