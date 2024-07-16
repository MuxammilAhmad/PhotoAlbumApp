import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Albums from './Albums';
import Posts from './Posts';
import AlbumDetails from './AlbumDetails';
import Navbar from './Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/albums" element={<Albums />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/albums/:albumId" element={<AlbumDetails />} />
      </Routes>
    </div>
  );
};

export default App;