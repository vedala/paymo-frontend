import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';
import CallbackPage from './components/CallbackPage';
import AuthenticationGuard from './components/AuthenticationGuard';
import PageNotFound from './components/PageNotFound';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route
          path="/dashboard"
          element={<AuthenticationGuard component={Dashboard} />}
        />
        <Route path="/callback" element={<CallbackPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
