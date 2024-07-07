import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const { username} = useSelector((state) => state.auth);

  return (
    <div>
      <h1>Welcome, {username}</h1>
      {/* <p>Password: {password}</p> */}
    </div>
  );
};

export default Home;
