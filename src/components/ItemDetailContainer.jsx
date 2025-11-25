import React, { use, useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { getOneProducts } from "../mock/Asyncmock"
import { useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

const ItemDetailContainer = () => {
	const [detalle, setDetalle] = useState(null)
	const {id} = useParams()

	useEffect(()=>{
		getOneProducts(id)
		.then((res)=> setDetalle(res))
	},[id])

	if (!detalle) {
    	return <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
  }

  return (
	<div>
		<ItemDetail detalle={detalle}/>
		
	</div>
  )
}
export default ItemDetailContainer