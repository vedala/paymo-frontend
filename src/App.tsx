import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';
import CallbackPage from './components/CallbackPage';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/callback" element={<CallbackPage />} />
      </Routes>
    </div>
  );
}

export default App;
