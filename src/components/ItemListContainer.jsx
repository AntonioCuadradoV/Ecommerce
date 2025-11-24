import { useEffect, useState } from 'react'
import '../CSS/ItemListContainer.css'
import { getProducts } from '../mock/Asyncmock'
import ItemList from "./ItemList"

const ItemListContainer = ({mensaje}) => {
	const [data, setData] = useState([])

	useEffect(()=> {
		getProducts()
		.then((res) => setData(res))
		.catch((error) => console.log(error))
	},[])

	return(
		<div>
			<h1>{mensaje}</h1>
			<ItemList data={data}/>
		</div> 
	)
}

export default ItemListContainer