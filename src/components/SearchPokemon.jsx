import { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function SearchPokemon() {
  const [listPokemons, setListPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=10"
        );
        const data = await response.json();
        setListPokemons(data.results);
      } catch (error) {
        console.error("Api Error", error);
      }
    };
    fetchPokemons();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (selectedPokemon) {
      navigate(`/pokesearch/${selectedPokemon}`);
    }
  };

  const handleSelectChange = (e) => setSelectedPokemon(e.target.value);

  return (
    <Container className="mt-5">
      <h1 className="text-center">Selecciona un pokemon</h1>
      <Form onSubmit={handleFormSubmit} className="text-center">
        <Form.Group className="mb-3">
          <Form.Select
            value={selectedPokemon}
            onChange={handleSelectChange}
            className="mx-auto"
            style={{ width: "200px" }}
          >
            <option value="">Pokemones</option>
            {listPokemons.map((pokemon) => (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Button type="submit" className="btn btn-dark">
          Ver Detalle
        </Button>
      </Form>
    </Container>
  );
}
