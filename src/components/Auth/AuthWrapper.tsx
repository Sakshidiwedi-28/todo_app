import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import TodoDashboard from '../../pages/TodoDashboard';
import AuthTabs from './AuthTabs';

const AuthWrapper: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  return isAuthenticated ? <TodoDashboard /> : <AuthTabs />;
};

export default AuthWrapper;