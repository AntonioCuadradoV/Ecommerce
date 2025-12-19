import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Card, Row, Col, Button } from "react-bootstrap";
import ItemCount from "./ItemCount";
import "../CSS/ItemDetail.css";

const ItemDetail = ({ detalle }) => {
  const [purchase, setPurchase] = useState(false);
  const { addItem, itemQuantity } = useContext(CartContext);

  const onAdd = (cantidad) => {
    addItem(detalle, cantidad);
    setPurchase(true);
  };

  const stockActualizado = detalle.stock - itemQuantity(detalle.id);

  return (
    <Card className="item-detail-card shadow-lg p-4">
      <Row className="align-items-center">

        {/* IMAGEN */}
        <Col md={6} className="text-center">
          <img
            src={detalle.img}
            alt={detalle.name}
            className="item-detail-img"
          />
        </Col>

        {/* INFO */}
        <Col md={6}>
          <h2 className="item-detail-title">{detalle.name}</h2>

          <h3 className="item-detail-price">
            ${detalle.price.toLocaleString()}
          </h3>

          <p className="item-detail-description">
            {detalle.description}
          </p>

          <p className="item-detail-stock">
            Stock disponible: <strong>{stockActualizado}</strong> unidades
          </p>

          {purchase ? (
            <Link to="/cart">
              <Button variant="dark" className="w-100">
                Ir al carrito
              </Button>
            </Link>
          ) : (
            <ItemCount stock={stockActualizado} onAdd={onAdd} />
          )}
        </Col>

      </Row>
    </Card>
  );
};

export default ItemDetail;
