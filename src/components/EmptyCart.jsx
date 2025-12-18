import React from 'react';
import imgCarrito from "../assets/carritoVacio.png"
import "../CSS/EmptyCart.css";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div className="container">

      <div>
        <img className='imgcarrito' src={imgCarrito} alt="" />
      
      <h2>
        No hay productos
      </h2>
      
      <p>
        Ve a buscar los productos que te gustan
      </p>
      
      <Link to='/'><Button variant="outline-info">Ir al inicio</Button></Link>
      
      </div>
      
      
    </div>
  );
};

export default EmptyCart;