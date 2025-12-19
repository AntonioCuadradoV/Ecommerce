import { useEffect, useState } from 'react'
import '../CSS/ItemListContainer.css'
import { productos } from "../mock/Asyncmock"
import ItemList from "./ItemList"
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where, addDoc } from 'firebase/firestore'
import { db } from '../service/firebase.jsx'

const ItemListContainer = ({ mensaje }) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const { type } = useParams()



 useEffect(()=>{
        const prodCollection = type ? query(collection(db, "items"), where("category", "==", type)) :collection(db, "items" )
        
        getDocs(prodCollection)
        .then((res)=>{ 
            const list = res.docs.map((doc)=>{

                return{
                    id:doc.id,
                    ...doc.data()
                }
            })

            setData(list)
        })
        .catch((error)=>console.log(error))
    },[type])

  return (
    <div>
		
      <h1 className='TituloPrincipal'>{mensaje}</h1>
      {error ? <p>{error}</p> : <ItemList data={data} />}
    </div>
  )
}

export default ItemListContainer
