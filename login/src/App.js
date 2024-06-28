import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import { useSelector } from 'react-redux';
import './App.css';

function App() {

  const isLoggedIn = useSelector(state => state.isLoggedIn);
  return (
    <div className="App">
    <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>

  
    </div>
  );
}

export default App;
