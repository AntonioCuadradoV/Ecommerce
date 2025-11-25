import { useEffect, useState } from 'react'
import '../CSS/ItemListContainer.css'
import { getProducts } from '../mock/Asyncmock'
import ItemList from "./ItemList"
import { useParams } from 'react-router-dom'

const ItemListContainer = ({mensaje}) => {
	const [data, setData] = useState([])
	const {type} = useParams()
	const [error, setError] = useState(null)

	useEffect(()=> {
		getProducts()
		.then((res) => {
			if (type) {
				setData(res.filter((prod) => prod.category === type))
			}else{
				setData(res)
			}
		})
		.catch(() => {
			setError("Hubo un error al cargar los productos.")
		})
	},[type])

	return(
		<div>
			<h1>{mensaje}</h1>
			{error ? <p>{error}</p> : <ItemList data={data} />}
		</div> 
	)
}

export default ItemListContainer