import React, { use, useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { getOneProducts } from "../mock/Asyncmock"

const ItemDetailContainer = () => {
	const [detalle, setDetalle] = useState({})
	useEffect(()=>{
		getOneProducts('02')
		.then((res)=> setDetalle(res))
	},[])

  return (
	<div>
		<ItemDetail detalle={detalle}/>
	</div>
  )
}
export default ItemDetailContainer