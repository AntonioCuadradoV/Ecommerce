import { FaCartShopping } from "react-icons/fa6";
import '../CSS/StyleNavbar.css'
import { Badge } from "react-bootstrap";


const CartWidget = () =>{
	return(
		<div>
			<FaCartShopping className="carrito"/>
			<Badge bg="dark">3</Badge>
		</div>
	)
}

export default CartWidget