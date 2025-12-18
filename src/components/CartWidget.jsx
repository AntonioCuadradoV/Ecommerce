import { FaCartShopping } from "react-icons/fa6";
import '../CSS/StyleNavbar.css'
import { Badge } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () =>{
	const carrito = useContext(CartContext)

	return(
		<div>
			<FaCartShopping className="carrito"/>
			<Badge bg="dark">3</Badge>
		</div>
	)
}

export default CartWidget