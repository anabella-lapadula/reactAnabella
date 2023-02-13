import { useState } from "react"
import { useEffect } from "react"
import { gFetch } from "../../utils/gFetch"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from "react-router-dom";

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
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
     

    }}> 
         { loading 
         ? 
         <h2> Cargando...</h2>

         :
         
         productos.map(producto => 
                 
                    <Card  key ={producto.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={producto.img} />
                        <Card.Body>
                        <Card.Title>Nombre: {producto.nombre}</Card.Title>
                        <Card.Text>precio: {producto.precio}
                        </Card.Text>
                        <Link to={`/detalle/${producto.id}`}>   <Button variant="primary">Detalle</Button></Link>
          
                      </Card.Body>
                    </Card>
                  
          )} 
     </div>
  )
}


export default ItemListContainer