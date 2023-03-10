import { useState } from "react"
import { useEffect } from "react"
import { gFetch } from "../../utils/gFetch"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({greeting}) => {
  const [productos, setProductos]= useState([])
const [loading, setLoading] = useState(true)

const {idCategoria}= useParams()

  useEffect(()=>{
    if (idCategoria) {
      gFetch()
      .then( res=>{  setProductos(res.filter(producto => producto.categoria === idCategoria)) }  )
      .catch(error => console.log(error))
      .finally(()=> setLoading(false))
      
    } else {

      gFetch()
      .then( res=>{  setProductos(res) }  )
      .catch(error => console.log(error))
      .finally(()=> setLoading(false))

    }
  }, [idCategoria] )

 console.log(productos)

  return ( 
       loading 
         ?
          <h2> Cargando...</h2>

         :
         <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
      
          }} >
            <ItemList productos={productos}/>
     </div>
  )
}


export default ItemListContainer