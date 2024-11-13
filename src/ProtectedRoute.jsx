import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ProtectedRoute = ({ isAuthenticated }) => {

    const navigate = useNavigate();

    if (isAuthenticated) {
        // console.log("The user is authenticated")
        return (
            <Outlet/>
        )
        
    }
    else {
        // console.log("The user is not authenticated");

        useEffect(() => {

            navigate("/login");

        }, [])
    }
};

export default ProtectedRoute;