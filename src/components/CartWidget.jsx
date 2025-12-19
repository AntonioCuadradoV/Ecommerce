import { FaCartShopping } from "react-icons/fa6";
import '../CSS/StyleNavbar.css'
import { Badge } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () =>{
	const {cartQuantity, cart} = useContext(CartContext)

	return(
		<div>
			<FaCartShopping className="carrito"/>
			{cart.length > 0 && <Badge bg="dark">{cartQuantity()}</Badge>}
		</div>
	)
}

export default CartWidget