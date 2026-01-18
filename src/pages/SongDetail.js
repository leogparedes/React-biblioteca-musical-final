import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const SongDetail = () => {
  const { id } = useParams();

  const url = useMemo(() => {
    return `https://www.theaudiodb.com/api/v1/json/2/album.php?m=${id}`;
  }, [id]);

  const { data, loading, error, refetch } = useFetch(url);

  const album = data?.album?.[0];

  return (
    <div style={{ marginTop: "20px" }}>
      <Link to="/">⬅ Volver</Link>

      {loading && <p>Cargando detalles...</p>}

      {error && (
        <div>
          <p>Hubo un problema al cargar los detalles. Intenta nuevamente.</p>
          <button onClick={refetch}>Reintentar</button>
        </div>
      )}

      {!loading && !error && album && (
        <div style={{ marginTop: "15px" }}>
          <h2>{album.strAlbum}</h2>
          <p>
            <b>Artista:</b> {album.strArtist}
          </p>

          {album.intYearReleased && (
            <p>
              <b>Año:</b> {album.intYearReleased}
            </p>
          )}

          {album.strGenre && (
            <p>
              <b>Género:</b> {album.strGenre}
            </p>
          )}

          {album.strDescriptionEN && (
            <p style={{ marginTop: "15px" }}>{album.strDescriptionEN}</p>
          )}
        </div>
      )}

      {!loading && !error && !album && (
        <p>No se encontró información para este ID.</p>
      )}
    </div>
  );
};

export default SongDetail;

