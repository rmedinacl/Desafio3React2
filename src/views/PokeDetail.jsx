import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, ListGroup, Row, Col, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const PokeDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [pokemonData, setPokemonData] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("El pokemon no existe");
        }
        return response.json();
      })
      .then((data) => {
        setPokemonData(data);
      })
      .catch((error) => {
        console.error("Error Pokemon details:", error);
        navigate("/pokedetail");
      });
  }, [name, navigate]);

  return (
    <div className="d-flex flex-column align-items-center w-100">
      {pokemonData && (
        <Card className="pokemon-card mt-4">
          <Row>
            <Col md={4} className="pokemon-image-container">
              <Card.Img
                height={300}
                alt={pokemonData.name}
                src={pokemonData.sprites.front_default}
              />
            </Col>
            <Col md={8}>
              <Card.Body>
                <Card.Title>
                  {" "}
                  <Badge bg="success">{pokemonData.name}</Badge>
                </Card.Title>
              </Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>hp:</strong> {pokemonData.stats[0].base_stat}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>attack:</strong> {pokemonData.stats[1].base_stat}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>defense:</strong> {pokemonData.stats[2].base_stat}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>special attack:</strong>{" "}
                  {pokemonData.stats[3].base_stat}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>special defense:</strong>{" "}
                  {pokemonData.stats[4].base_stat}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>speed:</strong> {pokemonData.stats[5].base_stat}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Card>
      )}
      <Link to="/pokesearch">Buscar Otro Pokemon </Link>
    </div>
  );
};

export default PokeDetail;
