import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { removeTodo, toggleTodo, updateTodoPriority } from '../../store/slices/todoSlice';
import { Trash2, Check, X } from 'lucide-react';

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`flex items-center justify-between p-4 bg-white rounded-lg shadow ${
            todo.completed ? 'opacity-75' : ''
          }`}
        >
          <div className="flex items-center space-x-4">
            <button
              onClick={() => dispatch(toggleTodo(todo.id))}
              className={`p-2 rounded-full ${
                todo.completed ? 'bg-green-500' : 'bg-gray-200'
              }`}
            >
              {todo.completed ? (
                <Check className="h-5 w-5 text-white" />
              ) : (
                <X className="h-5 w-5 text-gray-500" />
              )}
            </button>
            <span className={todo.completed ? 'line-through text-gray-500' : ''}>
              {todo.title}
            </span>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(
                todo.priority
              )}`}
            >
              {todo.priority}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <select
              value={todo.priority}
              onChange={(e) =>
                dispatch(
                  updateTodoPriority({
                    id: todo.id,
                    priority: e.target.value as 'low' | 'medium' | 'high',
                  })
                )
              }
              className="text-sm border border-gray-300 rounded-md"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="p-2 text-red-600 hover:bg-red-100 rounded-full"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;