import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../AuthContext/AuthContext';
import { Link } from 'react-router-dom';

const Home = () => {
    const { loading } = useContext(UserContext);
    if (loading) {
        return <div>Loading...</div>
    }


    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome To LVT <br /><small>Learn Varity Tech</small></h1>
                        <p className="mb-5">welcome to learn varity tech . hear you can learn almost 6 mejor types of course. so let's learn together</p>
                        <div >
                            <Link to='/signup' className="btn btn-primary mr-4">Sign Up</Link>
                            <Link to='/login' className="btn btn-info">Log In</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;