import SearchPokemon from "../components/SearchPokemon";
import { Container } from "react-bootstrap";
export default function PokeSearch() {
  return (
    <div>
      <Container className="mt-5 text-center">
        <SearchPokemon />
      </Container>
    </div>
  );
}
