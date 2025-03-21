import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { users, loading } = useContext(AuthContext);
    if (loading) {
        return <div className='flex justify-center mt-10'><span className="loading loading-bars loading-xl"></span></div> ;
    }

    if (users) {
        return children;
    }
    return <Navigate to='/login'></Navigate>;
};

export default PrivateRoute;