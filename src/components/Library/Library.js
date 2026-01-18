import React from "react";
import { Wrapper, Title, List, Card, ActionButton } from "./styles";

const Library = ({ songs, onRemoveFromLibrary }) => {
  return (
    <Wrapper>
      <Title>Mi Biblioteca</Title>

      {songs.length === 0 ? (
        <p>No has agregado canciones aún.</p>
      ) : (
        <List>
          {songs.map((song, index) => (
            <Card key={song.id}>
              <h3>{song.title}</h3>
              <p>Artista: {song.artist}</p>
              <p>Álbum: {song.album}</p>

              <ActionButton onClick={() => onRemoveFromLibrary(index)} $variant="danger">
                Borrar de mi biblioteca
              </ActionButton>
            </Card>
          ))}
        </List>
      )}
    </Wrapper>
  );
};

export default Library;


