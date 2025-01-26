import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import AuthWrapper from './components/Auth/AuthWrapper';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100">
        <AuthWrapper />
      </div>
    </Provider>
  );
}

export default App;