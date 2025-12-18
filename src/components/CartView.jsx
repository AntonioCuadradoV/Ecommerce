import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartView = () => {
    const {cart, removeItem, clear}= useContext(CartContext)
  return (
    <div>
        <h1>Tu carrito 🛒</h1>
        <div>
            {
                cart.map((compra)=> (
                    <div key={compra.id}>
                        <img src={compra.img} alt={compra.name}/>
                        <span>{compra.name}</span>
                        <span>${compra.price}</span>
                        <span>cantidad:{compra.quantity}</span>
                        <span>precio final: ${compra.quantity * compra.price}</span>
                        <button className='btn btn-danger' onClick={()=> removeItem(compra.id)}>X</button>
                    </div>
                ))
            }
        </div>
        {/* crear una funcion que recorra todo el array y de un solo resultado */}
        <span>Total a pagar: </span>
        <div>
            <button className='btn btn-danger' onClick={clear}>Vaciar carrito</button>
            <button className='btn btn-success'>Terminar Compra</button>
        </div>
    </div>
  )
}

export default CartView