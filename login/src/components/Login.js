import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../actions/authActions';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
    navigate('/home');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username : </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /> <br /><br />
      </div>
      <div>
        <label>Password : </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> <br /> <br />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
