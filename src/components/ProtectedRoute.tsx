import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

export default function ProtectedRoute({ children, isAuthorized }) {
    const location = useLocation();
    if (isAuthorized != true) { 
        sessionStorage.setItem('lastPage', location.pathname)
        // console.log(isAuthorized)
        // console.log(window.location.pathname)
        return (
            <Navigate to="/login" replace></Navigate>
        );
    }
    return children
};
