import React from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ProtectedRoute = ({ isAuthenticated }) => {

    const navigate = useNavigate();

    if (isAuthenticated) {
        return (
            <Outlet/>
        )
        
    }
    else {
        useEffect(() => {

            navigate("/login");

        }, [])
    }
};

export default ProtectedRoute;