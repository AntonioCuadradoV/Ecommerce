import React, { use, useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { getOneProducts } from "../mock/Asyncmock"
import { useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import "../CSS/ContainerDetailItem.css"
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {
	const [detalle, setDetalle] = useState(null)
	const {id} = useParams()

	useEffect(()=>{
      const docRef= doc(db, "items", id)
      
      getDoc(docRef)
      .then((res)=> {
        if(res.data()){
          setDetalle({id:res.id, ...res.data()})
        }else{
          setInvalid(true)
        }
      })
      .catch((error)=>console.log(error))
    },[])

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
	<div className="ContainerDetailItem">
		<ItemDetail detalle={detalle}/>
		
	</div>
  )
}
export default ItemDetailContainer