import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Login from './components/Login';
import Home from './components/Home';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
          <h1>Login</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
