import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ prod }) => {
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={prod.img}
        alt={prod.name}
        style={{
          height: "180px",
          objectFit: "contain",
          padding: "10px"
        }}
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title style={{ minHeight: "60px" }}>
          {prod.name}
        </Card.Title>

        <Card.Text className="fw-bold">
          ${prod.price}
        </Card.Text>

        <Link to={`/item/${prod.id}`} className="mt-auto">
          <Button variant="primary" className="w-100">
            Ver más
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;
