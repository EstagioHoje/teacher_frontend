import React from 'react'
import { Navigate } from 'react-router-dom';

export function ProtectedRoute({ isAuthorized, children }) {
  if (isAuthorized !== true) {
    return (
      <Navigate to="/login" replace />
    );
  }
  return children
};