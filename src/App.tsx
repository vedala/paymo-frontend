import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';
import CallbackPage from './components/CallbackPage';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/callback" element={<CallbackPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
