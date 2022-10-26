import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../AuthContext/AuthContext';

const PrivetRout = ({ children }) => {
    const { user, loading } = useContext(UserContext);
    const location = useLocation();
    if (loading) {
        return <div>Loading...</div>
    }
    console.log(user);
    if (user || user?.uid) {
        console.log(user);
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default PrivetRout;