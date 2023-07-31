import React from "react";
import { Card } from "react-bootstrap";

const NoticiaTrjeta = ({ noticia, propPais }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{noticia.title}</Card.Title>
        <Card.Text>{noticia.description}</Card.Text>
        <Card.Text>{noticia.category}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Title>{propPais.title}</Card.Title>
        <Card.Text>{propPais.description}</Card.Text>
        <Card.Text>{propPais.category}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NoticiaTrjeta;
