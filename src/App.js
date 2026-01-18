import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";

import Library from "./components/Library/Library";
import Home from "./pages/Home";
import SongDetail from "./pages/SongDetail";

const App = () => {
  const [librarySongs, setLibrarySongs] = useState([]);

  useEffect(() => {
    console.log("La app se ha cargado correctamente 🎵");
  }, []);

  useEffect(() => {
    console.log(`Biblioteca actualizada. Total: ${librarySongs.length}`);
  }, [librarySongs]);

  const agregarABiblioteca = (song) => {
    const yaExiste = librarySongs.some((s) => s.id === song.id);
    if (!yaExiste) setLibrarySongs([...librarySongs, song]);
  };

  const eliminarDeBiblioteca = (index) => {
    const nueva = [...librarySongs];
    nueva.splice(index, 1);
    setLibrarySongs(nueva);
  };

  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home onAddToLibrary={agregarABiblioteca} />} />
        <Route path="/song/:id" element={<SongDetail />} />
      </Routes>

      <Library songs={librarySongs} onRemoveFromLibrary={eliminarDeBiblioteca} />
    </div>
  );
};

export default App;


