import { Navigate, Outlet } from 'react-router-dom';
import { getSessions } from './SessionSetting';
import React from 'react';

const PrivateComponent = () => {
  const auth = getSessions('xyz');
  return auth ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateComponent;
