import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../service/firebase';
import { Link } from 'react-router-dom';
import EmptyCart from './EmptyCart';
import Error from './Error';
import '../CSS/Checkout.css';

const Checkout = () => {
  const [buyer, setBuyer] = useState({});
  const [validMail, setValidMail] = useState('');
  const [orderId, setOrderId] = useState(null);
  const [formError, setFormError] = useState(null);   // 👈 errores de formulario
  const [orderError, setOrderError] = useState(false); // 👈 error crítico
  const [process, setProcess] = useState(false);

  const { cart, clear, total } = useContext(CartContext);

  const buyerData = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    });
  };

  const finalizarCompra = (e) => {
    e.preventDefault();

    if (!buyer.name || !buyer.lastname || !buyer.email || !validMail) {
      setFormError('Por favor complete todos los campos');
      return;
    }

    if (buyer.email !== validMail) {
      setFormError('Los correos no coinciden');
      return;
    }

    setFormError(null);
    setProcess(true);

    const orden = {
      comprador: buyer,
      compras: cart,
      total: total(),
      fecha: serverTimestamp()
    };

    const ventas = collection(db, "orders");

    addDoc(ventas, orden)
      .then((res) => {
        setOrderId(res.id);
        clear();
      })
      .catch((error) => {
        console.error(error);
        setOrderError(true); // 👈 error grave
      })
      .finally(() => setProcess(false));
  };

  if (!cart.length && !orderId) {
    return <EmptyCart />;
  }

  if (orderError) {
    return <Error />;
  }

  return (
    <div className="checkout-container">
      {orderId ? (
        <div className="checkout-success">
          <h2>¡Muchas gracias por su compra! 🎉</h2>
          <h5 className="mt-3">Su número de orden es:</h5>
          <p className="order-id">{orderId}</p>
          <Link className="btn btn-dark mt-3" to="/">
            Volver a Home
          </Link>
        </div>
      ) : (
        <div className="checkout-card">
          <h1 className="checkout-title">Complete sus datos</h1>

          {formError && (
            <div className="alert alert-danger text-center">
              {formError}
            </div>
          )}

          <form onSubmit={finalizarCompra}>
            <input
              className="form-control mb-3"
              name="name"
              type="text"
              placeholder="Ingrese su nombre"
              onChange={buyerData}
            />

            <input
              className="form-control mb-3"
              name="lastname"
              type="text"
              placeholder="Ingrese su apellido"
              onChange={buyerData}
            />

            <input
              className="form-control mb-3"
              name="email"
              type="email"
              placeholder="Ingrese su correo"
              onChange={buyerData}
            />

            <input
              className="form-control mb-4"
              name="email2"
              type="email"
              placeholder="Repita su correo"
              onChange={(e) => setValidMail(e.target.value)}
            />

            <button
              type="submit"
              className="btn btn-success w-100"
              disabled={process}
            >
              {process ? 'Procesando Orden...' : 'Generar Orden'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;
