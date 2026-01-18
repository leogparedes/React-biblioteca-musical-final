import React, { useState } from "react";
import { Form, Input, Button } from "./styles";

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    onSearch(term.trim());
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Escribe un artista... (ej: Oasis)"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        $hasValue={term.trim().length > 0}   // ✅ prop dinámica
      />
      <Button type="submit">Buscar</Button>
    </Form>
  );
};

export default SearchBar;
