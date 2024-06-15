import { Container } from "react-bootstrap";
export default function Home() {
  return (
    <div>
      <Container className="mt-5 text-center">
        <h1>Bienvenido Maestro Pokemón</h1>
        <img src="src/img/pikachu.png" alt="Pikachu" height={600} />
      </Container>
    </div>
  );
}
