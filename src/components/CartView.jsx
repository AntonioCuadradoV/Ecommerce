import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "../CSS/CartView.css";

const CartView = () => {
  const { cart, removeItem, clear } = useContext(CartContext);

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Container className="cart-container">
      <Row>
        {/* LISTA DE PRODUCTOS */}
        <Col md={8}>
          {cart.map((compra) => (
            <Card className="cart-item" key={compra.id}>
              <Row className="align-items-center">
                <Col xs={6} md={5}>
                  <img src={compra.img} alt={compra.name} className="cart-img"/>
                </Col>

                <Col xs={4} md={5}>
                  <p className="cart-name">{compra.name}</p>
                  <p className="cart-info">Cantidad: {compra.quantity}</p>
                  <p className="cart-info">Precio: ${compra.price}</p>
                </Col>

                <Col xs={2} md={2} className="text-end">
                  <p className="cart-price">
                    ${compra.price * compra.quantity}
                  </p>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => removeItem(compra.id)}
                  >
                    ✕
                  </Button>
                </Col>
              </Row>
            </Card>
          ))}
        </Col>

        {/* RESUMEN */}
        <Col md={4}>
          <Card className="cart-summary">
            <h4>Total: ${total}</h4>

            <div className="cart-actions">
              <Button variant="danger" onClick={clear} className="w-100 mb-2">
                Vaciar carrito
              </Button>
              <Button variant="success" className="w-100">
                Terminar compra
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CartView;
