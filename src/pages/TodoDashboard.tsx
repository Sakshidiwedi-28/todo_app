import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import TodoInput from '../components/Todo/TodoInput';
import TodoList from '../components/Todo/TodoList';
import { LogOut } from 'lucide-react';
import { RootState } from '../store';

const TodoDashboard: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Todo Dashboard</h1>
            <p className="text-gray-600">Welcome back, {user?.name}</p>
          </div>
          <button
            onClick={() => dispatch(logout())}
            className="flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Logout
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <TodoInput />
        </div>

        <div className="space-y-6">
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default TodoDashboard;