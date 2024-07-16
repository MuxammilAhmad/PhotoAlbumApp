import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(data => setAlbums(data));
  }, []);

  return (
    <div>
      <h1>Albums</h1>
      <ul>
        {albums.map(album => (
          <li key={album.id}>
            <Link to={`/albums/${album.id}`}>{album.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Albums;