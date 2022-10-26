import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../AuthContext/AuthContext';

const Home = () => {
    const { user, loading } = useContext(UserContext);
    if (loading) {
        return <div>Loading...</div>
    }


    return (
        <div>
            <h1>this is home {

                loading ? <p>Loading...</p> :
                    user?.displayName

            }</h1>
            <h1>hello</h1>
        </div>
    );
};

export default Home;