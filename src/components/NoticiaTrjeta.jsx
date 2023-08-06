import React from "react";
import { Card } from "react-bootstrap";

const NoticiaTrjeta = ({ noticia }) => {
  return (
    <Card
      style={{ width: "18rem" }}
      className="container text-center bg-dark text-light mt-3"
    >
      <Card.Body>
        <Card.Title>{noticia.title}</Card.Title>
        <Card.Text>{noticia.description}</Card.Text>
        <Card.Text>{noticia.category}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NoticiaTrjeta;
