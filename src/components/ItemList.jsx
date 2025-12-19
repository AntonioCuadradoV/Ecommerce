import React from "react";
import Item from "./Item";
import { Container, Row, Col } from "react-bootstrap";

const ItemList = ({ data }) => {

  const getColSize = () => {
    if (data.length === 1) return 6;
    if (data.length === 2) return 4;
    if (data.length === 3) return 4;
    return 3;
  };

  return (
    <Container className="mt-4">
      <Row className="g-4 justify-content-center">
        {data.map((prod) => (
          <Col
            key={prod.id}
            xs={12}
            sm={6}
            md={getColSize()}
            lg={getColSize()}
          >
            <Item prod={prod} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ItemList;
