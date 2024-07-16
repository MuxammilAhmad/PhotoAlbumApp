import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <button><Link to="/albums">Albums</Link></button>
      <button><Link to="/posts">Posts</Link></button>
    </div>
  );
};

export default Home;