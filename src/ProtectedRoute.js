import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated }) => {

    const navigate = useNavigate();

    if (isAuthenticated) {
        console.log("The user is authenticated")
    }
    else {
        console.log("The user is not authenticated");
        return <Outlet />;
    }
};

export default ProtectedRoute;