import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

const carritoLS = JSON.parse(localStorage.getItem('carrito')) || []
export const CartProvider = ({children})=> {
    const [cart, setCart]= useState(carritoLS)
        
    const addItem = (item,qty)=>{
        if(isInCart(item.id)){
            
            setCart(
                cart.map((prod)=>{
                if(prod.id === item.id){
                    return {...prod, quantity: prod.quantity + qty}
                }else{
                    return prod
                }
            })
            )

        }else{
            setCart([...cart, {...item, quantity:qty}])
        }
    }
    const clear = ()=>{
        setCart([])
    }

    const removeItem = (id)=>{
        setCart(cart.filter((prod)=> prod.id !== id))
    }

    const isInCart = (id)=> {
        return cart.some((prod)=> prod.id === id)
    }

    const total = ()=>{

    }
    const cartQuantity = ()=>{

    }

    const itemQuantity = (id)=>{
        const itemInCart = cart.find((prod)=> prod.id === id)

        if(itemInCart){
            return itemInCart.quantity
        }else{
            return 0
        }

    }


    return(
        <CartContext.Provider value={{cart, clear, removeItem, addItem, itemQuantity}}>
            {children}
        </CartContext.Provider>
    )
}