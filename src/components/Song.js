import React from 'react';

const Song = ({ title, artist, duration }) => {
  return (
    <div className="song">
      <h2>{title}</h2>
      <p>Artista: {artist}</p>
      <p>Duración: {duration}</p>
    </div>
  );
};

export default Song;


